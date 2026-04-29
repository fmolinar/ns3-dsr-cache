# ns3-dsr-cache

This repo is set up as the working tree for modifying and running DSR in ns-3.

## Current ns-3 baseline

The local workspace currently contains `ns-3.46.1/`, copied from the existing local ns-3 install on this machine. The repository tracks only the files changed for the DSR route-cache experiment; the rest of the ns-3 tree remains local.

Checks run:

- `ns-3.46.1` configured successfully with examples/tests enabled after disabling ccache and precompiled headers.
- `first` tutorial example builds and runs.
- `manet-routing-compare` builds and runs with `--protocol=DSR`; the CSV output shows received packets.
- The older local `ns-3.42` checkout works with `python3.12`, but fails with the default `python3` because Homebrew currently points `python3` at Python 3.14.

## Useful commands

From the repo root:

```sh
cd ns-3.46.1
cmake -S . -B cmake-cache \
  -DNS3_CCACHE=OFF \
  -DNS3_PRECOMPILE_HEADERS=OFF \
  -DNS3_EXAMPLES=ON \
  -DNS3_TESTS=ON \
  -DNS3_WARNINGS_AS_ERRORS=OFF

./ns3 build first manet-routing-compare
./ns3 run --no-build --cwd /tmp first
./ns3 run --no-build --cwd /tmp "manet-routing-compare --protocol=DSR --traceMobility=false --CSVfileName=/tmp/ns3-dsr-3.46.1-check.csv"
```

The direct `cmake` configure command is intentional: the `./ns3 configure` wrapper re-enabled ccache during testing, and ccache tried to write outside this project directory.

## Adaptive route cache experiment

`ns-3.46.1/examples/routing/manet-routing-compare-adaptive-cache.cc` is a DSR-focused variant of `manet-routing-compare`.
It keeps the same topology, mobility model, traffic pattern, and CSV metrics, but computes DSR cache timers from node speed:

```text
adaptive_value = clamp(base_value * cache_reference_speed / node_speed,
                       min_value,
                       max_value)
```

With the current defaults:

```text
node_speed = 20 m/s
cache_reference_speed = 5 m/s

RouteCacheTimeout: base 300 s -> adaptive 75 s
InitStability: base 25 s -> adaptive 6.25 s
UseExtends: base 120 s -> adaptive 30 s
```

Build and run:

```sh
cd ns-3.46.1
./ns3 build manet-routing-compare-adaptive-cache
./ns3 run --no-build "manet-routing-compare-adaptive-cache --traceMobility=false"
```

By default, each adaptive run writes metrics under:

```text
/Users/fmolinar/Documents/school/csci256-wireless-spring26/ns3-dsr/simulation-results/adaptive-cache/<run-label>-<timestamp>/metrics.csv
```

The default run label is `linkcache-tuned`. You can change the output grouping without changing the code:

```sh
./ns3 run --no-build "manet-routing-compare-adaptive-cache --traceMobility=false --runLabel=timeout-sweep-01"
```

You can also force an exact CSV path:

```sh
./ns3 run --no-build "manet-routing-compare-adaptive-cache --traceMobility=false --CSVfileName=/Users/fmolinar/Documents/school/csci256-wireless-spring26/ns3-dsr/simulation-results/manual-run/metrics.csv"
```

The default cache type is `LinkCache`, matching ns-3 DSR. For a stricter route-timeout experiment using `PathCache`:

```sh
./ns3 run --no-build "manet-routing-compare-adaptive-cache --cacheType=PathCache --traceMobility=false --runLabel=pathcache-timeout"
```
