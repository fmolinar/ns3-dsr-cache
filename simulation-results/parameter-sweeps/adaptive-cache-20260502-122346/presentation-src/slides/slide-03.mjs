import { base, colors, metric, rect, text } from "./common.mjs";

export function slide03(presentation, ctx) {
  const slide = presentation.slides.add();
  base(slide, ctx, "Formula", "A single mobility scale converts base cache timers into effective DSR values.", "03");
  text(slide, ctx, "adaptive_value = clamp(base_value * cache_reference_speed / node_speed, min_value, max_value)", 100, 144, 1060, 46, {
    size: 22,
    color: colors.ink,
    bold: true,
    face: "Aptos Mono",
  });
  rect(slide, ctx, 96, 224, 470, 286, "#FFFFFF", { line: ctx.line(colors.line, 1) });
  text(slide, ctx, "Formula variables", 126, 252, 360, 28, { size: 22, bold: true, color: colors.navy });
  text(slide, ctx, "base_value: original timer multiplied by the sweep percentage\ncache_reference_speed: speed where base timers are preserved, 5 m/s\nnode_speed: scenario speed used for cache trust, 20 m/s\nclamp: keeps timers inside configured safety bounds", 126, 306, 390, 156, {
    size: 16,
    color: colors.ink,
  });
  rect(slide, ctx, 635, 224, 460, 286, "#F4F8FC", { line: ctx.line(colors.line, 1) });
  text(slide, ctx, "This sweep used a 0.25 mobility scale", 670, 252, 360, 28, { size: 22, bold: true, color: colors.navy });
  text(slide, ctx, "cache_reference_speed / node_speed = 5 / 20 = 0.25", 670, 306, 360, 30, {
    size: 18,
    color: colors.blue,
    bold: true,
  });
  text(slide, ctx, "Example: the 50% timeout starts at 150 s, then becomes clamp(150 * 0.25, 30, 300) = 37.5 s.", 670, 360, 355, 86, {
    size: 17,
    color: colors.ink,
  });
  metric(slide, ctx, 110, 556, "30-300s", "RouteCacheTimeout", "route lifetime bounds", colors.blue);
  metric(slide, ctx, 400, 556, "2-25s", "InitStability", "new link confidence", colors.green);
  metric(slide, ctx, 680, 556, "10-120s", "UseExtends", "successful-use extension", colors.orange);
  return slide;
}
