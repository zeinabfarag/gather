import { Heart, Clock, Calendar } from "../../assets";
import { Coffee, Check, X } from "../../assets";
import { Wave, HandWave } from "../../assets";

const data = {
  headline: [
    {
      icon: Coffee,
      text: "<b>Eliminate</b> the hangout that never happens",
    },
    {
      icon: X,
      text: `"We should hangout soon?"`,
    },
    {
      icon: Check,
      text: `"It was nice seeing you!"`,
    },
  ],
  taglines: [
    {
      icon: Wave,
      text: "Streamline your social life with <b>Gather</b>",
      subtext: "The antidote to scheduling chaos",
    },
    {
      icon: HandWave,
      text: "<b>Say goodbye</b> to planning frustration",
      subtext: "Say hello to stress-free quality time",
    },
  ],
  features: [
    {
      icon: Clock,
      text: " <span> Customize </span> your schedule sync with unique social circles.",
    },
    {
      icon: Calendar,
      text: "<span> Plan </span> the entire hang out in app, and directly <span> sync </span>  it to your calendar",
    },
    {
      icon: Heart,
      text: "<span> Create </span> spontaneous moments with your loved ones",
    },
  ],
};

export default data;
