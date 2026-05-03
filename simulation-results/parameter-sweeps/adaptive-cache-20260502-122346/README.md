# Adaptive DSR Cache Parameter Sweep

Created: 2026-05-02 12:23:46 America/Los_Angeles

This folder contains four adaptive DSR route-cache runs using 10%, 50%, 110%, and 150% of the original DSR cache parameter bases. Each run stores its own `metrics.csv`, `run.log`, and `README.md`.

| Run | Base Timeout | Effective Timeout | Effective InitStability | Effective UseExtends | Total Packets | Avg kbps | Peak kbps |
|---|---:|---:|---:|---:|---:|---:|---:|
| 10% | 30 s | 30 s | 2 s | 10 s | 1165 | 2.982 | 37.888 |
| 50% | 150 s | 37.5 s | 3.125 s | 15 s | 1261 | 3.228 | 32.256 |
| 110% | 330 s | 82.5 s | 6.875 s | 33 s | 1207 | 3.09 | 14.848 |
| 150% | 450 s | 112.5 s | 9.375 s | 45 s | 1097 | 2.808 | 33.28 |

Best total packet delivery in this sweep: **50%**, with **1261 packets** received.

## Files

- `summary.csv`: machine-readable summary across runs.
- `REPORT.md`: narrative report with project intro, results, notes, and future work.
- `graphs/`: SVG charts comparing the runs.
- `010pct/`, `050pct/`, `110pct/`, `150pct/`: individual experiment folders.

## Implementation Notes

The detailed implementation summary and code snippets are in `REPORT.md` under **Implementation Summary**. That section shows:

- the command-line controls added for adaptive and fixed-cache runs
- the adaptive `clamp(base_value * cache_reference_speed / node_speed)` calculation
- the `Config::SetDefault` calls that apply `RouteCacheTimeout`, `InitStability`, and `UseExtends`
- the project-local output folder logic used to organize repeated runs

## Metric Meaning

`ReceiveRate` is the amount of received application data during a one-second interval, in kilobits. `PacketsReceived` is the number of application packets received during that same interval. Higher totals generally indicate better route usability and packet delivery under the tested mobility scenario.

## Fixed-Cache Comparison

A fixed-cache comparator set has also been added under `fixed-comparison/`. These runs use the same 10%, 50%, 110%, and 150% base values, but disable adaptive scaling.

| Run | Adaptive Effective Timeout | Fixed Timeout | Adaptive Packets | Fixed Packets | Adaptive Delta | Adaptive Avg kbps | Fixed Avg kbps |
|---|---:|---:|---:|---:|---:|---:|---:|
| 10% | 30 s | 30 s | 1165 | 1260 | -95 (-7.54%) | 2.982 | 3.226 |
| 50% | 37.5 s | 150 s | 1261 | 1088 | +173 (15.901%) | 3.228 | 2.785 |
| 110% | 82.5 s | 330 s | 1207 | 880 | +327 (37.159%) | 3.09 | 2.253 |
| 150% | 112.5 s | 450 s | 1097 | 833 | +264 (31.693%) | 2.808 | 2.132 |

Additional comparison graphs are available in `graphs/adaptive-vs-fixed-total-packets.svg` and `graphs/adaptive-vs-fixed-average-rate.svg`.
