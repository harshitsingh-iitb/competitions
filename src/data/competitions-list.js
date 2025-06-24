const competitions = [
    {
      name: "Compound Killer",
      slug: "compound-killer",
      description: "Compound interest is a silent wealth builder—but small decisions can lead to huge differences. In this challenge, participants must create a tool (in any format) that visualizes the long-term effects of compound interest. By adjusting variables like monthly investments, return rates, and investment durations, users should see how their wealth can grow—or shrink—over time. The tool should be intuitive, visually engaging, and highlight the power of starting early. A bonus feature compares starting today versus delaying by five years.",
      input: "Monthly SIP amount, Expected annual return (%), Investment duration in years",
      goals: "Build a dynamic tool to demonstrate the impact of compounding over time,  Allow users to interactively adjust key variables (SIP, return %, years), Emphasize the value of early investing through a comparative analysis, Deliver a clear visual output (graph + final corpus) to enhance user understanding",
      submitLink: "",
      brief: "Build a tool (any format) that shows how small changes in investment time or return rate impact long-term wealth.",
      deadline: "30th June 2025",
      output: "Graph + corpus comparison; bonus for 5-year delay visual."
    },
    {
      name: "Decision Matrix",
        slug: "decision-matrix",
        description: "Making tough decisions—like choosing a career path or selecting the right project—can be overwhelming. This challenge tasks participants with building a decision matrix tool that uses weighted scoring to simplify complex choices. Users will input decision criteria, assign weights based on importance, and compare multiple options. The tool should output a clear ranking of options and offer a download or share feature for results. A bonus feature is a preset template to help users decide: “Should I join X startup?”",
        input: "Criteria, Weights, Options",
         goals: "Build a weighted decision-making tool, Allow flexible input of criteria and options, Enable users to assign importance via weights, Display ranked results clearly, Include sharing or download functionality, Bonus: Add a preloaded startup decision template",
        submitLink: "",
      brief: "Build a weighted scoring system to help make hard decisions (career path, project choice, etc.)",
      deadline: "30th June 2025",
      output: "Ranked decision outcome with weights; bonus for a preset template."
    },
    {
      name: "Time Value Brutality",
      slug: "time-value-brutality",
      description: "Money today isn’t equal to the same amount tomorrow—and this challenge brings that concept to life. Participants must build a tool that compares two cashflows using Net Present Value (NPV) logic. Whether it’s ₹5 lakhs now or ₹8 lakhs in 3 years, users should quickly see which option is financially better and by how much. The tool should be clear, fast, and intuitive, with bonus points for adding a simple, user-friendly popup that explains the Time Value of Money (TVM) principle.",
      input: "Amounts, Time Delay, Discount Rate",
       goals: "Build an NPV-based comparison tool, Help users evaluate timing vs value of cashflows, Allow flexible input of amount and timing, Display which option is better and by how much, Bonus: Include an explanation of Time Value of Money",
      submitLink: "",
      brief: "Build a tool to compare two cashflows using NPV logic (e.g., ₹5L now vs ₹8L in 3 years).",
      deadline: "30th June 2025",
      output: "Comparison logic and explanation; bonus for TVM breakdown popup."
    },
    {
      name: "Budget Weaponizer",
        slug: "budget-weaponizer",
        description: "Managing your money effectively starts with a smart budget. This challenge invites participants to create a tool that takes a user’s monthly income and automatically generates an ideal budget allocation across four categories: Essentials, Growth, Freedom, and Fun. The tool should clearly show both percentage and rupee allocations for each bucket, helping users make confident financial decisions. A bonus feature allows users to customize these budget buckets to fit their unique lifestyle and priorities.",
        input: "Monthly income",
         goals: "Generate smart budget allocations by category, Display percentage and rupee amounts for each bucket, Help users balance essentials and discretionary spending, Bonus: Allow users to customize budget buckets",
        submitLink: "",
      brief: "Create a smart budget allocator using the 50/30/20 or 4-bucket method.",
      deadline: "30th June 2025",
      output: "Sliders for inputs, category outputs; bonus for customizable buckets."
    },
    {
      name: "Opportunity Cost Checker",
        slug: "opportunity-cost-checker",
        description: "Opportunity cost often determines whether a task should be tackled personally or outsourced. This challenge asks participants to build a calculator that helps users decide if a task is worth doing or better delegated. By inputting hourly rate, estimated task time, and the value of alternative activities, users receive clear guidance—“Do it” or “Delegate it”—along with the calculated opportunity cost. Bonus points for including real-life scenarios like “Should I learn design or hire someone?”",
        input: "Hourly rate, Task time, Alternative value",
         goals: "Create a decision tool to evaluate task worthiness, Calculate and display opportunity cost, Provide clear “Do it” or “Delegate it” recommendations, Bonus: Include common decision scenarios",
        submitLink: "",
      brief: "Build a calculator that tells users whether to do or delegate a task based on hourly value.",
      deadline: "30th June 2025",
      output: "Simple decision + opportunity cost; bonus for presets like 'Should I learn X?'."
    },
    {
      name: "Mental Models of Money",
        slug: "mental-models-of-money",
        description: "Understanding personal finance can be tricky, but clear explanations make all the difference. In this challenge, participants choose any finance concept—like SIPs, debt snowball, or time value—and explain it in a compelling, easy-to-understand format such as a Twitter thread or blog post. The goal is to make the idea so clear that even a 16-year-old walks away feeling smarter about money. Bonus points go to those who transform their explanation into a concise, visually appealing 1-page PDF.",
        input: "Selected personal finance concept",
         goals: "Simplify complex finance concepts, Communicate clearly and engagingly, Create content accessible to teenagers, Provide a shareable link to the explanation, Bonus: Design a 1-page visual explainer PDF",
        submitLink: "",
      brief: "Pick any core finance concept and explain it with clarity via blog post, thread, or PDF.",
      deadline: "30th June 2025",
      output: "Blog post or Twitter thread; bonus for 1-page PDF visual explainer."
    },
    {
      name: "Teardown: Wealth Engine",
        slug: "teardown-wealth-engine",
        description: "Ever wondered how successful companies or individuals build and protect their wealth? This challenge invites participants to pick a real-world example—such as Zerodha, Naval, Harsh Jain, or Nithin Kamath—and deconstruct their wealth engine. Analyze their revenue streams, cost structures, psychological strategies, optimization tactics, and missed opportunities. The output should be a detailed teardown in a Notion doc or PDF. For bonus points, suggest ways to clone or improve their wealth-building approach.",
        input: "Chosen company or individual",
         goals: "Deconstruct wealth creation and protection strategies, Analyze revenue, costs, psychology, and optimizations, Identify missed opportunities, Deliver a detailed teardown document, Bonus: Propose improvements or cloning ideas",
        submitLink: "",
      brief: "Choose a person or company and reverse-engineer their wealth-building engine.",
      deadline: "30th June 2025",
      output: "Notion or PDF teardown; bonus for actionable replication suggestions."
    },
    {
      name: "Life Systems Audit",
        slug: "life-systems-audit",
        description: "Taking control of your life starts with understanding how your time, energy, habits, thoughts, and finances flow. In this challenge, participants conduct a comprehensive systems audit on their own lives—tracking time spent, energy zones, habits, mental loops, and financial flows. Based on this, they design a personalized 30-day optimization plan. The output includes a personal dashboard (Notion, Google Sheets, or PDF) and a reflection highlighting key bottlenecks along with actionable solutions. Bonus points for sharing the tools and routines used in the optimization process.",
        input: "No Input",
         goals: "Perform a detailed life systems audit, Identify bottlenecks and inefficiencies, Design a 30-day personalized optimization plan. Bonus: Share your optimization tools and routines",
        submitLink: "",
      brief: "Audit your own life systems (time, energy, money) and design a new optimized system.",
      deadline: "30th June 2025",
      output: "Dashboard + reflection + optimization strategy; bonus for stack/tools reveal."
    }
  ];
  
  
  export default competitions;