# Fixed-Cache DSR Comparator: 10%

This run uses the same DSR cache parameter bases as the 10% adaptive sweep, but disables adaptive scaling with:

```text
adaptiveRouteCache=false
adaptiveLinkStability=false
```

That means DSR uses the fixed base values directly.

| Parameter | Fixed Value | Adaptive Effective Value For Matching Run |
|---|---:|---:|
| RouteCacheTimeout | 30 s | 30 s |
| InitStability | 2.5 s | 2 s |
| UseExtends | 12 s | 10 s |

## Result

| Metric | Fixed Cache | Matching Adaptive Run | Delta |
|---|---:|---:|---:|
| Total packets received | 1260 | 1165 | -95 |
| Average receive rate | 3.226 kbps | 2.982 kbps | -0.243 kbps |
| Peak receive rate | 55.808 kbps | 37.888 kbps | n/a |

Files:

- `metrics.csv`: fixed-cache per-second metrics.
- `run.log`: stdout packet log.
