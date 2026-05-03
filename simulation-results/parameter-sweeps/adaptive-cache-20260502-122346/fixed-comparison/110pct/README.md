# Fixed-Cache DSR Comparator: 110%

This run uses the same DSR cache parameter bases as the 110% adaptive sweep, but disables adaptive scaling with:

```text
adaptiveRouteCache=false
adaptiveLinkStability=false
```

That means DSR uses the fixed base values directly.

| Parameter | Fixed Value | Adaptive Effective Value For Matching Run |
|---|---:|---:|
| RouteCacheTimeout | 330 s | 82.5 s |
| InitStability | 27.5 s | 6.875 s |
| UseExtends | 132 s | 33 s |

## Result

| Metric | Fixed Cache | Matching Adaptive Run | Delta |
|---|---:|---:|---:|
| Total packets received | 880 | 1207 | +327 |
| Average receive rate | 2.253 kbps | 3.09 kbps | 0.837 kbps |
| Peak receive rate | 30.208 kbps | 14.848 kbps | n/a |

Files:

- `metrics.csv`: fixed-cache per-second metrics.
- `run.log`: stdout packet log.
