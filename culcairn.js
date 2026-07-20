/* ================================================================================
 *  APTICS PILOT DASHBOARD — SITE CONFIG · Culcairn Solar Farm (Equans / Neoen)
 *  Edit this one file per site. Engine (index.html) renders everything.
 *  Map units are metres via geometry.metresPerUnit. All money is AUD.
 *  NOTE: This pack is shared with Equans — it deliberately carries NO Aptics fee
 *  or price terms. Commercials are framed as a joint ARENA package after trial.
 * ================================================================================ */

window.APTICS_SITE = {

  meta: {
    customer:"Equans (O&M, EPC) · Neoen (owner)", site:"Culcairn Solar Farm", siteId:"culcairn",
    subtitle:"One rover on a fenced 10 MW block inside the two-year O&M window — two weeks of autonomous mowing and below-panel inspection, then a joint ARENA robotics-and-automation package to scale it across the site.",
    location:"Culcairn, Riverina NSW · 45 km north of Albury", coords:"35.7° S, 147.0° E",
    capacity:"350 MWac · 440 MWp",
    trackers:"111 × SMA MVPS 4200 S2 · Nextracker NX Horizon · 759,360 modules",
    owner:"Neoen", status:"Trial proposal", lastUpdated:"20 July 2026",
    glance:"440 MWp · 956 ha inside fence · 7,531 tracker rows · operational since March 2026 · robots installed the panels (LUMI, ARENA Solar ScaleUp)",
    pilotHeadline:"Two weeks on one block — then a joint ARENA package to scale it.",
    ctaUrl:"https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0dw6uJWcxF_IJeb3WUfO7IaTmwZr2X-iRKK1SrtDxogvM-Ib4Bc8IbGpzBt2X7GdnvCiDX1Gbp",
    ctaTitle:"Talk it through.",
    ctaText:"Twenty minutes with Jonathan to scope the trial block, the KPIs and the ARENA angle.",
    ctaLabel:"Book a call with Jonathan →",
    dataNote:"Figures are AUD and indicative for discussion. Site data is traced from the public NEO-CUSF-1000 Final Layout Plan (Rev R) and public reporting; generation and prices are estimates for the calculator only. This pack carries no commercials: trial terms and whole-site scale-up are proposed to be shaped together with Equans under its existing ARENA robotics-and-automation envelope."
  },

  brand: {
    primary:"#0f766e", accent:"#c2410c", logoText:"APTICS",
    website:"https://www.aptics.com", websiteLabel:"aptics.com", tagline:"Autonomous solar O&M",
    mission:"To build the adaptive cognition that lets physical systems safely and reliably navigate complex challenges together — accelerating the automation of the global civilian and industrial economy."
  },

  auth: {
    allowedDomains:["equans.com","aptics.com"],

    /* ── Org-wide shared key (no email round-trip) ──────────────────────────────
       Anyone with an allowed email domain enters the same shared access key.
       The key is a salted hash — SHA-256(salt|KEY) — so it can't be brute-forced
       offline the way a short PIN can. To rotate it:
         node -e "const c=require('crypto');const s='2bdb90bd86b1e60a',k='NEW-KEY-HERE';console.log(c.createHash('sha256').update(s+'|'+k.toUpperCase()).digest('hex'))"
       and paste the result below.  Current key: T7PP-QQ38-3C76                  */
    salt:"2bdb90bd86b1e60a",
    sharedKeyHash:"9abc185e1f10c654a44b22537e62dfadc4d63e1736cbf0c7c1eea492d1d8204e",

    otpRequestUrl:"", otpVerifyUrl:"",
    demoMode:false
  },

  /* ===== 01 — THE OPPORTUNITY =========================================== */
  intelligence: {
    summary:"Culcairn is the site where robots already proved themselves: LUMI units placed most of its panels under the ARENA Solar ScaleUp Challenge, 3.5× faster than manual crews. The build is done — but the same logic now applies to the two-year O&M window Equans holds through the DLP. Across 7,531 rows and 759,360 modules, the losses that matter don't trip alarms: spring grass shading bottom cells, hot joints and failed diodes sitting unnoticed between annual thermal scans, and a handful of electricians asked to be eyes across 956 hectares. We go and get those megawatt-hours back — on a schedule, without putting more people on an energised site — and hand Neoen a cleaner asset at handover.",
    points:[
      {title:"Robots built it. Robots can run it.", detail:"Equans and Luminous proved ARENA-backed construction robotics on this exact site. Extending automation into the O&M window is the natural second chapter — same thesis, applied after energisation, and squarely inside the existing ARENA robotics-and-automation envelope."},
      {title:"The losses that never trip an alarm", detail:"Row-edge shading, soiling and undiagnosed hot spots don't show on SCADA — they quietly shave the yield Equans has promised through the defect liability period. On a 350 MWac site, a fraction of a percent is real money every month."},
      {title:"Sparkies belong on faults, not field inspections", detail:"A small on-site electrical crew can't walk 7,531 rows — and field inspection is the work they like least and do worst. Every rover pass thermally inspects everything below the panel and hands your electricians a ranked fault list, so they walk to the joint, not the whole farm."},
      {title:"Analytics is the product, not the robot", detail:"The chassis and cameras are the easy part — what's failed past trials at scale is the data layer behind them. Our detection runs on the unit itself, every component keeps a location history, and faults arrive as a ranked, reviewable list. Built for multi-hundred-MW sites and portfolios, not a 5 MW demo."},
      {title:"A service, never a sale", detail:"Robots have died in Australia on overseas support, spare-parts logistics and consumables. We never sell the unit: you set the specs, we deliver to them. Aptics owns, services and swaps the fleet, with an in-country technical manager inside the contract — we build every core component ourselves, so we troubleshoot it ourselves."},
      {title:"Fleet output — wet ground, night and all", detail:"The benchmark is a subcontract crew of zero-turns giving the farm a haircut every few months. A team of small units cuts at night and in wet ground that stops that crew, keeps every block at height continuously, and the same modular chassis mows, inspects — and later cleans and swaps connectors. One platform, not a single-trick machine."}
    ]
  },

  /* ===== 02 — UNIT ECONOMICS (AUD) ====================================== */
  economics: {
    headline:"Protect the yield promise through the DLP — and hand back a cleaner site in 2028.",
    generationGWh:860,                // ~350 MWac in the Riverina; set to actuals
    generationRange:[400,1100],
    priceAUD:80,                      // $/MWh — set to your own NSW spot / PPA blend
    yieldUpliftPct:1.0,
    labourReductionAUD:240000,        // field labour + remote callouts recovered; ≈ 2 FTE @ $120k
    labourRange:[0,1500000],
    staff:{ now:3, full:1, fteCostAUD:120000, hoursPerFTE:1800 },
    otherOpExAUD:35000,
    capacityMWac:350, pilotMW:10, pilotHa:28,
    note:"AUD and indicative. Annual value protected combines the output recovered and the field labour and remote callouts taken back onto your books. Staffing and prices are placeholders — set the sliders to Equans' own numbers. This pack deliberately carries no Aptics pricing: the working intent is that trial and scale-up are packaged with Equans' innovation team under the ARENA robotics-and-automation envelope, so the numbers here are the value side only.",
    context:"Half of Culcairn's output is contracted under the SmartestEnergy PPA; the balance trades into the NEM, where recovered output earns transparent prices. Generation figure is an estimate for a 350 MWac single-axis site in the Riverina — run the sliders against your own dispatch data. Every MWh recovered inside the DLP is also one less argument at handover."
  },

  /* ===== 03 — INSPECTION & OUTPUT ======================================= */
  inspection: {
    narrative:"Every pass is a full thermal and high-resolution black-and-white scan of each row — and we inspect in thermal everything below the panel: combiner boxes, inverter stations, MC4 connectors, string cabling and terminations, the layer no drone or drive-by ever sees. We pick up hot joints, hot cells, failed diodes, cracked glass, soiling and vegetation creep, rank them by the output they're costing, and hand the O&M team a prioritised list. Problems surface in days, not at next year's inspection.",
    passesPerYear:"1–5", passesUnit:"/mo",
    patrolNote:"One rover covers 10–25 MW and makes one to five full passes a month over its block — comfortably more than the 10 MW trial area, so every panel is scanned several times over. And it's controllable: when SCADA flags a string or an inverter, you task the rover to it and it follows a safe, pre-approved path — no truck roll, no one crossing an energised site. A small fleet scales that across all 111 inverter stations, against the once-a-year manual thermal scan that's typical today.",
    reporting:"You also get reporting and datasets this site has never had — thermal history down to the combiner box and connector, vegetation and fuel-load records, and mow logs — delivered as a commissioning report, weekly operational reports and a trial completion report. It's the evidence owners, insurers and ARENA's knowledge-sharing obligations ask for, and it speaks straight to bushfire-season obligations in the Riverina.",
    monthlyNote:"Output roughly triples from June to January, so inspection effort is weighted to the high-output, high-fire-risk summer. We time the cutting to keep dust off the glass — cool, low-wind windows, coordinated with site activity. Shaded months are the NSW Bush Fire Danger Period.",

    gallery:{
      title:"SEEN FROM THE EDGE — BELOW THE PANEL",
      intro:"These frames come straight off the rover's underside-scanning mast: the dataset is analysed on the edge, on the unit itself, as it drives the rows. Here the model has identified and highlighted the MC4 connectors on the string cabling under each panel — no thermal filter on these passes. The same components — MC4s, combiner boxes, inverter stations, terminations — are then re-imaged in thermal to find the ones running hot. Everything below the panel gets both looks, on every pass.",
      images:[
        {src:"assets/mc4-01.png", label:"MC4 connectors — identified (no thermal filter)", caption:"Underside of a panel: two MC4 connectors on the string cabling, picked out and highlighted by the on-edge model."},
        {src:"assets/mc4-02.png", label:"MC4 connectors — identified (no thermal filter)", caption:"Angled underside view: two connectors identified either side of the panel frame member."},
        {src:"assets/mc4-03.png", label:"MC4 connectors — identified (no thermal filter)", caption:"Two MC4 connectors identified below the torque tube, hanging on the string cabling."},
        {src:"assets/mc4-04.png", label:"MC4 connector — identified (no thermal filter)", caption:"Single MC4 connector identified low on the mounting structure."}
      ],
      note:"Detection runs on the rover itself — no cloud round-trip — so every panel underside is checked on every pass, and every connector has a location history. At Culcairn scale that's 759,360 modules' worth of below-panel components with a baseline."
    }
  },

  /* ===== THERMAL FINDINGS ============================================== */
  thermalFindings:{
    headline:"High-resistance joints, found while they're still cheap.",
    intro:"The same mast, thermal filter on. We inspect in thermal everything below the panel — combiner boxes, inverters, MC4 connectors, terminal blocks, conductors and terminations. These components run warm long before they fail: a high-resistance joint shows up as a bright thermal signature well before it becomes an open circuit, an outage or a fire start. These frames are boxed and ranked by the on-edge model as the rover passes.",
    images:[
      {src:"assets/thermal-01.png", label:"Conductors & terminations — elevated temperature", caption:"Conductors entering their terminations: the boxed regions are running hot against their neighbours — an early high-resistance signature."},
      {src:"assets/thermal-02.png", label:"Terminal blocks — hot lugs", caption:"Two terminations boxed: heat concentrated at the lug interface points to a loose or corroded joint under load."},
      {src:"assets/thermal-03.png", label:"Terminal block row — one joint running away", caption:"Five conductors boxed on one terminal row: the bottom joint is dramatically hotter than its neighbours — a classic high-resistance termination heading for failure."}
    ],
    note:"Each finding lands in the fault list with a location, a temperature delta and a severity rank — so electricians walk to the joint, not the whole site. And when you want a second look, you send the rover back, not a truck: it re-images the exact component along a safe, pre-approved path."
  },

  /* ===== SITE MAP (traced from the public final layout plan) =========== */
  geometry: {
    viewBox:[0,0,1250,733],
    metresPerUnit:7.4,
    scaleBarMetres:1000,
    northLabel:"MGA NORTH",
    provenanceNote:"The backdrop is the actual NEO-CUSF-1000 Final Layout Plan (Rev R, public) — boundary, trial area, substation, BESS and access are traced over it, north-up. Indicative, not survey-accurate.",
    image:{ href:"assets/culcairn-layout.jpg", x:0, y:0, width:1170, height:733, opacity:1 },
    sources:[
      {name:"NEO-CUSF-1000-PV-DWG Rev R — Final Layout Plans", role:"Boundary, substation, access, trial area (traced)", url:"https://culcairnsolarfarm.com.au/wp-content/uploads/2024/05/NEO-CUSF-1000-PV-DWG-R-FINAL-LAYOUT-PLANS.pdf"},
      {name:"Culcairn Solar Farm (Neoen)", role:"Site status & public figures", url:"https://culcairnsolarfarm.com.au/"},
      {name:"ARENA — LUMI robots ScaleUp solar deployment", role:"Construction robotics precedent on this site", url:"https://arena.gov.au/news/lumi-robots-scaleup-solar-deployment-with-advanced-automation/"}
    ],
    boundaries:[
      {label:"North array",
       points:[[503,77],[777,102],[772,184],[768,235],[762,285],[751,336],[745,371],[729,405],[684,443],[605,418],[471,407],[470,336],[471,237],[480,229],[496,193],[500,127]]},
      {label:"South array",
       points:[[292,269],[400,279],[461,287],[457,380],[454,461],[446,490],[436,526],[412,621],[397,615],[364,589],[346,550],[332,514],[320,467],[311,431],[308,383],[296,330]]},
      {points:[[779,97],[783,101],[360,528],[356,524]]}
    ],
    markers:[
      {type:"grid", label:"Transgrid substation · 330 kV",              x:611, y:273},
      {type:"bess", label:"BESS 215 MW / 963 MWh (under construction)", x:596, y:297},
      {type:"gate", label:"Main site access",                           x:732, y:409}
    ],
    neighbours:[
      {label:"330 kV corridor / Transgrid road", x:640, y:135},
      {label:"APA gas pipeline easement",        x:560, y:640},
      {label:"To Culcairn ~4 km",                x:860, y:45}
    ],
    pilotRegion:{
      label:"Proposed trial area", mw:10, areaHa:28,
      points:[[652,329],[723,329],[721,400],[650,398]],
      note:"Proposed 10 MW trial block (~28 ha, ≈3 inverter stations) in the south-east corner of the north array — beside the main site access for short mobilisation, hard against the fence line, and clear of the Transgrid corridor, the gas-pipeline easement and the BESS construction zone. Two weeks of mow-and-inspect here, then a stage gate to the full site."
    }
  },

  climate:{
    fdpStart:"Oct", fdpEnd:"Mar",
    months:[
      {m:"Jul",irr:2.2},{m:"Aug",irr:3.0},{m:"Sep",irr:4.2},{m:"Oct",irr:5.5},{m:"Nov",irr:6.6},{m:"Dec",irr:7.2},
      {m:"Jan",irr:7.4},{m:"Feb",irr:6.5},{m:"Mar",irr:5.2},{m:"Apr",irr:3.7},{m:"May",irr:2.6},{m:"Jun",irr:2.1}
    ]
  },

  /* ===== 04 — THE PILOT ================================================= */
  safety: {
    intro:"Safety isn't a slide here — it's how the unit is built to behave. The rover works inside a hard geofence, keeps its distance from anything energised, drops to walking pace around people, and stands itself down on Total Fire Ban days. The trial block sits against the site fence, well clear of the Transgrid substation, the 330 kV corridor and the live BESS construction area.",
    policies:[
      {title:"Hard geofences, fail-safe", detail:"Substation, 330 kV corridor, gas-pipeline easement, BESS construction zone and the public gate are no-go, with agreed exclusion buffers around inverter stations, transformers, combiner boxes, cabling, earthing, fencing and monitoring equipment. If the unit ever reaches a boundary it stops — the default is always stop. Tasked inspections run only on these same safe, pre-approved paths."},
      {title:"Total Fire Ban stand-down", detail:"No powered ground work on TFB days, and cutting is programmed around the NSW Bush Fire Danger Period. The rover docks and powers down; nothing runs unattended in the heat."},
      {title:"Your HSE plan, your induction", detail:"We work to the site's existing O&M HSE plan under the Work Health and Safety Act 2011 (NSW) and Equans' own procedures, and induct every Aptics person to your standard before they're on site. Coordination with Transgrid interface requirements as directed by Equans."}
    ]
  },

  unitSpec: {
    model:"Aptics rover + Data Module",
    blurb:"An electric rover with an inspection mast and an onboard data module. It builds a 3D map of the block, mows between the rows, and scans every panel — and everything below it — in thermal and black-and-white as it goes.",
    specs:[
      {k:"Size",       v:"1200 × 700 mm · under 500 mm tall"},
      {k:"Mass",       v:"120 kg"},
      {k:"Drive",      v:"Electric, solar-charged"},
      {k:"Speed",      v:"4.3 km/h top; ~3 km/h working"},
      {k:"Coverage",   v:"~0.5 acre/hour · 10–25 MW per rover"},
      {k:"Passes",     v:"1–5 full passes a month"},
      {k:"Cameras",    v:"Thermal + high-res mono mast · analysed on board"},
      {k:"Cut height", v:"≥150 mm maintained"}
    ],
    capabilities:[
      "Builds a 3D model of the block from its own survey",
      "Scans every panel in thermal and black-and-white, ranked by lost output",
      "Thermal-inspects everything below the panel — combiner boxes, inverters, MC4 connectors and terminations",
      "Dispatchable on demand: task it to any string along a safe, pre-approved path instead of rolling a truck",
      "Light-footed — keeps mowing in wet ground that stops a mower crew; holds cut height at 150 mm or above to protect soil, cabling and earthing",
      "Times cutting to keep dust off the glass; stands down on Total Fire Ban days"
    ]
  },

  /* Full-site onboarding — what a yes puts in place, and how we scale it   */
  onboarding:{
    intro:"When we move from the trial block to the full site, onboarding puts the groundwork in before the fleet turns a wheel:",
    items:[
      "A full 3D model of the farm, built from the rover's own survey",
      "Automatic inspection on every pass, across all 111 inverter stations",
      "Human review of every flagged fault before it reaches your team",
      "Safety training for any Equans people who'll be near the units",
      "Site preparation with the right signage and exclusions"
    ],
    terms:"No fee schedule in this pack — deliberately. The working intent, per our conversation with Equans O&M, is to run the 10 MW trial and then shape whole-site deployment together with Equans' innovation team as a package under the existing ARENA robotics-and-automation envelope: Aptics brings the fleet, the analytics and the service; Equans brings the site, the O&M context and the funding agreement; ARENA gets the knowledge-sharing story that started with LUMI building this farm. If Culcairn proves it, the same package is built to roll across the 300–440 MW projects Equans delivers and their two-year O&M windows. Either party can step away at any point during the trial."
  },

  timeline:[
    {when:"Aug 2026",       phase:"ARENA scoping",            detail:"Working session with Equans' innovation team: shape the trial and scale-up as a package under the existing ARENA robotics-and-automation envelope."},
    {when:"Sep 2026",       phase:"Demo at St Leonards",      detail:"Unit on the ute at the Equans office — see it drive, dock and scan. Field videos of units operating shared beforehand."},
    {when:"Early Oct 2026", phase:"Mobilise & baseline",      detail:"Induction to the site HSE plan, 3D map of the trial block, commissioning report with pre-trial imagery."},
    {when:"Oct 2026",       phase:"Two cuts in two weeks",    detail:"Two full mow passes plus complete visual and thermal baseline of the block; weekly operational reports and a ranked fault list."},
    {when:"Nov 2026",       phase:"Completion & stage gate",  detail:"Trial completion report with measured KPIs — coverage, cut-height compliance, uptime, imagery capture — and a straight go/no-go on the whole-site ARENA package."}
  ]
};
/* culcairn v1 — traced from NEO-CUSF-1000 Rev R · Equans/ARENA framing · no fee
   terms by design · shared key rotated for this share (see auth comment). */
