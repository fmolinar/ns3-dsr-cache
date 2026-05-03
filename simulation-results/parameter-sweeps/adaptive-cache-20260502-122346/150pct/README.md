# Adaptive DSR Cache Sweep: 150%

This run scales the original DSR cache parameters to **150%** before the adaptive mobility formula is applied.

## Parameter Settings

| Parameter | Original | Sweep Base | Effective Adaptive Value |
|---|---:|---:|---:|
| RouteCacheTimeout | 300 s | 450 s | 112.5 s |
| InitStability | 25 s | 37.5 s | 9.375 s |
| UseExtends | 120 s | 180 s | 45 s |

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
| Total packets received | 1097 |
| Total received data | 561.664 kbits |
| Average receive rate, all seconds | 2.808 kbps |
| Active receive seconds | 99 |
| Average receive rate, active seconds | 5.673 kbps |
| First nonzero receive second | 101 |
| Last nonzero receive second | 199 |
| Peak receive rate | 33.28 kbps at second 156 |
| Peak packets per second | 65 at second 156 |
