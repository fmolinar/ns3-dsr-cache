# Fixed-Cache DSR Comparator: 50%

This run uses the same DSR cache parameter bases as the 50% adaptive sweep, but disables adaptive scaling with:

```text
adaptiveRouteCache=false
adaptiveLinkStability=false
```

That means DSR uses the fixed base values directly.

| Parameter | Fixed Value | Adaptive Effective Value For Matching Run |
|---|---:|---:|
| RouteCacheTimeout | 150 s | 37.5 s |
| InitStability | 12.5 s | 3.125 s |
| UseExtends | 60 s | 15 s |

## Result

| Metric | Fixed Cache | Matching Adaptive Run | Delta |
|---|---:|---:|---:|
| Total packets received | 1088 | 1261 | +173 |
| Average receive rate | 2.785 kbps | 3.228 kbps | 0.443 kbps |
| Peak receive rate | 52.736 kbps | 32.256 kbps | n/a |

Files:

- `metrics.csv`: fixed-cache per-second metrics.
- `run.log`: stdout packet log.
