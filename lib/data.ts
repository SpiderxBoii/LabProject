export const services = [
  {
    number: "01",
    title: "Mechanical Testing",
    description:
      "Evaluate strength, deformation, durability and mechanical performance of metals, plastics, polymers and other materials.",
    tests: [
      "Tensile",
      "Compression",
      "Flexural",
      "Impact",
      "Hardness",
      "Fatigue",
    ],
  },
  {
    number: "02",
    title: "Chemical Testing",
    description:
      "Chemical characterization and elemental analysis for materials, products, chemicals and coatings.",
    tests: [
      "Elemental Analysis",
      "ICP-OES",
      "ICP-MS",
      "XRF",
      "FTIR",
      "Carbon / Sulfur",
    ],
  },
  {
    number: "03",
    title: "Thermal Testing",
    description:
      "Understand thermal stability, transitions, melting behavior and other temperature-dependent material properties.",
    tests: [
      "TGA",
      "DSC",
      "Thermal Stability",
      "Thermal Expansion",
      "Melting",
      "Crystallization",
    ],
  },
  {
    number: "04",
    title: "Electrical Testing",
    description:
      "Characterize electrical properties including resistance, conductivity, dielectric properties and insulation.",
    tests: [
      "Resistance",
      "Conductivity",
      "Dielectric Properties",
      "Insulation",
    ],
  },
  {
    number: "05",
    title: "Environmental Testing",
    description:
      "Assess material and product durability under environmental exposure and accelerated conditions.",
    tests: ["UV Exposure", "Humidity", "Temperature Cycling", "Corrosion"],
  },
  {
    number: "06",
    title: "Analytical Testing",
    description:
      "Advanced analytical techniques for investigating composition, morphology, surfaces and material behavior.",
    tests: ["SEM / EDS", "XPS", "Microscopy", "FTIR", "ICP"],
  },
  {
    number: "07",
    title: "Coating Testing",
    description:
      "Evaluate coating adhesion, thickness, abrasion, corrosion resistance and environmental performance.",
    tests: ["Thickness", "Adhesion", "Abrasion", "Weathering", "Corrosion"],
  },
  {
    number: "08",
    title: "Polymer Testing",
    description:
      "Mechanical, thermal, chemical, physical and environmental characterization of polymeric materials.",
    tests: ["Plastics", "Rubbers", "Films", "Composites"],
  },
  {
    number: "09",
    title: "Metal Testing",
    description:
      "Comprehensive mechanical, chemical, metallographic and corrosion testing of metals and alloys.",
    tests: [
      "Tensile",
      "Hardness",
      "Impact",
      "Composition",
      "Metallography",
      "Corrosion",
    ],
  },
  {
    number: "10",
    title: "Failure Analysis",
    description:
      "Investigate material and product failures to identify contributing factors and potential root causes.",
    tests: [
      "Cracking",
      "Fracture",
      "Corrosion",
      "Delamination",
      "Wear",
      "Contamination",
    ],
  },
];

export const industries = [
  "Aerospace",
  "Automotive",
  "Construction",
  "Chemicals",
  "Electronics",
  "Energy",
  "Medical",
  "Metals",
  "Plastics & Polymers",
  "Coatings",
];

export const capabilities = [
  {
    name: "Tensile Testing",
    equipment: "Universal Testing Machine",
    materials: "Metals, plastics, polymers",
    standards: "ASTM E8/E8M, ASTM D638",
  },
  {
    name: "FTIR",
    equipment: "FTIR Spectrometer",
    materials: "Polymers, chemicals, coatings",
    standards: "Applicable methods",
  },
  {
    name: "SEM / EDS",
    equipment: "Scanning Electron Microscope / EDS",
    materials: "Metals, polymers, coatings",
    standards: "Applicable methods",
  },
  {
    name: "TGA",
    equipment: "Thermogravimetric Analyzer",
    materials: "Polymers, composites",
    standards: "ASTM E1131 and related methods",
  },
  {
    name: "DSC",
    equipment: "Differential Scanning Calorimeter",
    materials: "Polymers, chemicals",
    standards: "ASTM D3418 and related methods",
  },
  {
    name: "ICP",
    equipment: "ICP-OES / ICP-MS",
    materials: "Liquids, powders, metals",
    standards: "Applicable elemental methods",
  },
];

export const testMethods = [
  {
    standard: "ASTM D638",
    title: "Tensile Properties of Plastics",
    category: "Mechanical Testing",
  },
  {
    standard: "ASTM D790",
    title: "Flexural Properties of Plastics",
    category: "Mechanical Testing",
  },
  {
    standard: "ASTM E8/E8M",
    title: "Tension Testing of Metallic Materials",
    category: "Metal Testing",
  },
  {
    standard: "ISO 527",
    title: "Determination of Tensile Properties",
    category: "Polymer Testing",
  },
];
