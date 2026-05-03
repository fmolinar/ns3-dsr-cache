import { base, colors, rect, text } from "./common.mjs";

export function slide04(presentation, ctx) {
  const slide = presentation.slides.add();
  base(slide, ctx, "Implementation", "The adaptive values are computed before DSR is installed on the nodes.", "04");
  rect(slide, ctx, 70, 132, 520, 460, "#FFFFFF", { line: ctx.line(colors.line, 1) });
  text(slide, ctx, "Command-line switches", 104, 160, 360, 26, { size: 22, bold: true, color: colors.navy });
  text(slide, ctx, "adaptiveRouteCache\nadaptiveLinkStability\ncacheType\nbaseRouteCacheTimeout\nbaseInitStability\nbaseUseExtends\ncacheReferenceSpeed", 104, 212, 400, 240, {
    size: 22,
    color: colors.ink,
    face: "Aptos Mono",
  });
  rect(slide, ctx, 650, 132, 500, 460, "#142033");
  text(slide, ctx, "Config::SetDefault(\"ns3::dsr::DsrRouting::RouteCacheTimeout\",\n                   TimeValue(Seconds(m_effectiveRouteCacheTimeout)));\nConfig::SetDefault(\"ns3::dsr::DsrRouting::InitStability\",\n                   TimeValue(Seconds(m_effectiveInitStability)));\nConfig::SetDefault(\"ns3::dsr::DsrRouting::UseExtends\",\n                   TimeValue(Seconds(m_effectiveUseExtends)));", 686, 178, 430, 270, {
    size: 15,
    color: "#E7EEF7",
    face: "Aptos Mono",
  });
  text(slide, ctx, "Placement matters: defaults must be set before dsrMain.Install(...) creates the routing objects.", 686, 496, 420, 54, {
    size: 17,
    color: "#FFFFFF",
    bold: true,
  });
  return slide;
}
