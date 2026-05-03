# Adaptive DSR Cache Sweep: 50%

This run scales the original DSR cache parameters to **50%** before the adaptive mobility formula is applied.

## Parameter Settings

| Parameter | Original | Sweep Base | Effective Adaptive Value |
|---|---:|---:|---:|
| RouteCacheTimeout | 300 s | 150 s | 37.5 s |
| InitStability | 25 s | 12.5 s | 3.125 s |
| UseExtends | 120 s | 60 s | 15 s |

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
| Total packets received | 1261 |
| Total received data | 645.632 kbits |
| Average receive rate, all seconds | 3.228 kbps |
| Active receive seconds | 99 |
| Average receive rate, active seconds | 6.522 kbps |
| First nonzero receive second | 101 |
| Last nonzero receive second | 199 |
| Peak receive rate | 32.256 kbps at second 190 |
| Peak packets per second | 63 at second 190 |
