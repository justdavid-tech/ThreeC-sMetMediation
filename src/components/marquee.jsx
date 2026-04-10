import * as MarqueeModule from "react-fast-marquee";

const Marquee = MarqueeModule.default;

export default function Ticker() {
  return (
    <Marquee pauseOnHover speed={50} gradient={false}>
      📢 Training enrollment open • 📅 Live sessions every Wednesday • 🎓 648+ certified mediators
    </Marquee>
  );
}

console.log("Marquee", MarqueeModule);