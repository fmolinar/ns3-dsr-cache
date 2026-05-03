import { base, colors, line, metric, rect, text } from "./common.mjs";

export function slide01(presentation, ctx) {
  const slide = presentation.slides.add();
  rect(slide, ctx, 0, 0, 1280, 720, "#F7FAFD");
  rect(slide, ctx, 0, 0, 1280, 720, "#FFFFFF");
  rect(slide, ctx, 54, 54, 5, 52, colors.blue);
  text(slide, ctx, "NS-3 MANET ROUTING EXPERIMENT", 76, 54, 380, 18, {
    size: 10,
    color: colors.soft,
    bold: true,
  });
  text(slide, ctx, "Adaptive DSR Route Cache", 54, 156, 720, 84, {
    size: 48,
    color: colors.ink,
    bold: true,
    face: "Aptos Display",
  });
  text(slide, ctx, "Parameter sweep comparing mobility-scaled LinkCache timers against fixed DSR cache behavior", 58, 260, 720, 54, {
    size: 21,
    color: colors.soft,
  });
  line(slide, ctx, 58, 410, 1110, colors.line, 1);
  metric(slide, ctx, 58, 466, "50", "nodes", "Random waypoint MANET", colors.blue);
  metric(slide, ctx, 310, 466, "10", "flows", "one-to-one UDP pairs", colors.green);
  metric(slide, ctx, 560, 466, "4", "sweep points", "10%, 50%, 110%, 150%", colors.orange);
  metric(slide, ctx, 812, 466, "200s", "runtime", "one CSV row per second", colors.red);
  rect(slide, ctx, 880, 142, 290, 210, "#F4F8FC", { line: ctx.line(colors.line, 1) });
  text(slide, ctx, "Thesis", 910, 174, 220, 24, { size: 17, bold: true, color: colors.navy });
  text(slide, ctx, "In high mobility, DSR should trust cached routes for less time. The experiment tests whether speed-scaled cache timers improve delivery.", 910, 210, 220, 118, {
    size: 16,
    color: colors.ink,
  });
  text(slide, ctx, "Adaptive DSR route cache | 01", 980, 626, 240, 18, {
    size: 9,
    color: colors.soft,
    align: "right",
  });
  return slide;
}
