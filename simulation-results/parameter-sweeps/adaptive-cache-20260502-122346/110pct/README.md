# Adaptive DSR Cache Sweep: 110%

This run scales the original DSR cache parameters to **110%** before the adaptive mobility formula is applied.

## Parameter Settings

| Parameter | Original | Sweep Base | Effective Adaptive Value |
|---|---:|---:|---:|
| RouteCacheTimeout | 300 s | 330 s | 82.5 s |
| InitStability | 25 s | 27.5 s | 6.875 s |
| UseExtends | 120 s | 132 s | 33 s |

Adaptive formula: `clamp(base_value * 5 / 20, min_value, max_value)`.

## Metrics File

- `metrics.csv`: one row per simulated second.
- `run.log`: stdout packet reception log and command output.

CSV columns:

| Column | Meaning |
|---|---|
| SimulationSecond | Simulation time in seconds. |
| ReceiveRate | Kilobits received during that one-second interval. |
| PacketsReceived | Packets received during that one-second interval. |
| NumberOfSinks | Number of sink nodes configured in the scenario. |
| RoutingProtocol | Routing protocol used by the run. |
| TransmissionPower | WiFi transmit power in dBm. |

## Run Summary

| Metric | Value |
|---|---:|
| CSV data rows | 200 |
| Total packets received | 1207 |
| Total received data | 617.984 kbits |
| Average receive rate, all seconds | 3.09 kbps |
| Active receive seconds | 99 |
| Average receive rate, active seconds | 6.242 kbps |
| First nonzero receive second | 101 |
| Last nonzero receive second | 199 |
| Peak receive rate | 14.848 kbps at second 109 |
| Peak packets per second | 29 at second 109 |
