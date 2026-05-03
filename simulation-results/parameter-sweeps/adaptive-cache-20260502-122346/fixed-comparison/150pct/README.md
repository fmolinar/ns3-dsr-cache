# Fixed-Cache DSR Comparator: 150%

This run uses the same DSR cache parameter bases as the 150% adaptive sweep, but disables adaptive scaling with:

```text
adaptiveRouteCache=false
adaptiveLinkStability=false
```

That means DSR uses the fixed base values directly.

| Parameter | Fixed Value | Adaptive Effective Value For Matching Run |
|---|---:|---:|
| RouteCacheTimeout | 450 s | 112.5 s |
| InitStability | 37.5 s | 9.375 s |
| UseExtends | 180 s | 45 s |

## Result

| Metric | Fixed Cache | Matching Adaptive Run | Delta |
|---|---:|---:|---:|
| Total packets received | 833 | 1097 | +264 |
| Average receive rate | 2.132 kbps | 2.808 kbps | 0.676 kbps |
| Peak receive rate | 23.552 kbps | 33.28 kbps | n/a |

Files:

- `metrics.csv`: fixed-cache per-second metrics.
- `run.log`: stdout packet log.
