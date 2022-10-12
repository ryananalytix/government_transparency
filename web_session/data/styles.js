var styles = [ {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.9.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "DrugBank - Carrier-targeting drugs-Style-1",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "border-color" : "rgb(51,51,255)",
      "color" : "rgb(0,0,0)",
      "width" : 100.0,
      "font-family" : "Dialog.plain",
      "font-weight" : "normal",
      "text-valign" : "center",
      "text-halign" : "center",
      "font-size" : 14,
      "height" : 50.0,
      "border-opacity" : 1.0,
      "text-opacity" : 1.0,
      "border-width" : 2.0,
      "shape" : "roundrectangle",
      "background-opacity" : 1.0,
      "background-color" : "rgb(255,255,255)",
      "content" : "data(name)"
    }
  }, {
    "selector" : "node[Type = 'BiotechDrug']",
    "css" : {
      "border-color" : "rgb(235,246,255)"
    }
  }, {
    "selector" : "node[Type = 'SmallMoleculeDrug']",
    "css" : {
      "border-color" : "rgb(235,246,255)"
    }
  }, {
    "selector" : "node[Type = 'BiotechDrug']",
    "css" : {
      "shape" : "ellipse"
    }
  }, {
    "selector" : "node[Type = 'SmallMoleculeDrug']",
    "css" : {
      "shape" : "ellipse"
    }
  }, {
    "selector" : "node[Type = 'BiotechDrug']",
    "css" : {
      "width" : 50.0
    }
  }, {
    "selector" : "node[Type = 'SmallMoleculeDrug']",
    "css" : {
      "width" : 50.0
    }
  }, {
    "selector" : "node[Type = 'BiotechDrug']",
    "css" : {
      "background-opacity" : 0.6862745098039216
    }
  }, {
    "selector" : "node[Type = 'SmallMoleculeDrug']",
    "css" : {
      "background-opacity" : 0.6862745098039216
    }
  }, {
    "selector" : "node[Type = 'BiotechDrug']",
    "css" : {
      "background-color" : "rgb(255,51,255)"
    }
  }, {
    "selector" : "node[Type = 'SmallMoleculeDrug']",
    "css" : {
      "background-color" : "rgb(255,51,255)"
    }
  }, {
    "selector" : "node[ id = '4663' ]",
    "css" : {
      "text-valign" : "center"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "color" : "rgb(0,0,0)",
      "font-size" : 10,
      "text-opacity" : 1.0,
      "source-arrow-shape" : "none",
      "line-style" : "solid",
      "target-arrow-color" : "rgb(0,0,0)",
      "source-arrow-color" : "rgb(0,0,0)",
      "width" : 2.0,
      "font-family" : "Dialog.plain",
      "font-weight" : "normal",
      "line-color" : "rgb(132,132,132)",
      "opacity" : 1.0,
      "content" : "",
      "target-arrow-shape" : "none"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.9.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "BEL Visualization Minimal",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "border-color" : "rgb(0,0,0)",
      "color" : "rgb(0,0,0)",
      "width" : 70.0,
      "font-family" : "Dialog.plain",
      "font-weight" : "normal",
      "text-valign" : "center",
      "text-halign" : "center",
      "font-size" : 12,
      "height" : 30.0,
      "border-opacity" : 1.0,
      "text-opacity" : 1.0,
      "border-width" : 1.0,
      "shape" : "rectangle",
      "background-opacity" : 1.0,
      "background-color" : "rgb(255,255,255)",
      "content" : "data(name)"
    }
  }, {
    "selector" : "node[bel_function_type = 'transportActivity']",
    "css" : {
      "shape" : "roundrectangle"
    }
  }, {
    "selector" : "node[bel_function_type = 'cellSecretion']",
    "css" : {
      "shape" : "v"
    }
  }, {
    "selector" : "node[bel_function_type = 'catalyticActivity']",
    "css" : {
      "shape" : "hexagon"
    }
  }, {
    "selector" : "node[bel_function_type = 'reaction']",
    "css" : {
      "shape" : "parallelogram"
    }
  }, {
    "selector" : "node[bel_function_type = 'pathology']",
    "css" : {
      "shape" : "parallelogram"
    }
  }, {
    "selector" : "node[bel_function_type = 'gtpBoundActivity']",
    "css" : {
      "shape" : "hexagon"
    }
  }, {
    "selector" : "node[bel_function_type = 'translocation']",
    "css" : {
      "shape" : "v"
    }
  }, {
    "selector" : "node[bel_function_type = 'kinaseActivity']",
    "css" : {
      "shape" : "hexagon"
    }
  }, {
    "selector" : "node[bel_function_type = 'proteinAbundance']",
    "css" : {
      "shape" : "roundrectangle"
    }
  }, {
    "selector" : "node[bel_function_type = 'peptidaseActivity']",
    "css" : {
      "shape" : "hexagon"
    }
  }, {
    "selector" : "node[bel_function_type = 'abundance']",
    "css" : {
      "shape" : "diamond"
    }
  }, {
    "selector" : "node[bel_function_type = 'degradation']",
    "css" : {
      "shape" : "roundrectangle"
    }
  }, {
    "selector" : "node[bel_function_type = 'compositeAbundance']",
    "css" : {
      "shape" : "roundrectangle"
    }
  }, {
    "selector" : "node[bel_function_type = 'molecularActivity']",
    "css" : {
      "shape" : "hexagon"
    }
  }, {
    "selector" : "node[bel_function_type = 'rnaAbundance']",
    "css" : {
      "shape" : "ellipse"
    }
  }, {
    "selector" : "node[bel_function_type = 'biologicalProcess']",
    "css" : {
      "shape" : "parallelogram"
    }
  }, {
    "selector" : "node[bel_function_type = 'microRNAAbundance']",
    "css" : {
      "shape" : "ellipse"
    }
  }, {
    "selector" : "node[bel_function_type = 'geneAbundance']",
    "css" : {
      "shape" : "ellipse"
    }
  }, {
    "selector" : "node[bel_function_type = 'ribosylationActivity']",
    "css" : {
      "shape" : "hexagon"
    }
  }, {
    "selector" : "node[bel_function_type = 'cellSurfaceExpression']",
    "css" : {
      "shape" : "v"
    }
  }, {
    "selector" : "node[bel_function_type = 'chaperoneActivity']",
    "css" : {
      "shape" : "hexagon"
    }
  }, {
    "selector" : "node[bel_function_type = 'transcriptionalActivity']",
    "css" : {
      "shape" : "hexagon"
    }
  }, {
    "selector" : "node[bel_function_type = 'phosphataseActivity']",
    "css" : {
      "shape" : "hexagon"
    }
  }, {
    "selector" : "node[bel_function_type = 'complexAbundance']",
    "css" : {
      "shape" : "roundrectangle"
    }
  }, {
    "selector" : "node[bel_function_type = 'transportActivity']",
    "css" : {
      "width" : 110.0
    }
  }, {
    "selector" : "node[bel_function_type = 'cellSecretion']",
    "css" : {
      "width" : 110.0
    }
  }, {
    "selector" : "node[bel_function_type = 'catalyticActivity']",
    "css" : {
      "width" : 110.0
    }
  }, {
    "selector" : "node[bel_function_type = 'reaction']",
    "css" : {
      "width" : 150.0
    }
  }, {
    "selector" : "node[bel_function_type = 'pathology']",
    "css" : {
      "width" : 125.0
    }
  }, {
    "selector" : "node[bel_function_type = 'gtpBoundActivity']",
    "css" : {
      "width" : 110.0
    }
  }, {
    "selector" : "node[bel_function_type = 'translocation']",
    "css" : {
      "width" : 110.0
    }
  }, {
    "selector" : "node[bel_function_type = 'kinaseActivity']",
    "css" : {
      "width" : 110.0
    }
  }, {
    "selector" : "node[bel_function_type = 'proteinAbundance']",
    "css" : {
      "width" : 75.0
    }
  }, {
    "selector" : "node[bel_function_type = 'peptidaseActivity']",
    "css" : {
      "width" : 110.0
    }
  }, {
    "selector" : "node[bel_function_type = 'abundance']",
    "css" : {
      "width" : 75.0
    }
  }, {
    "selector" : "node[bel_function_type = 'degradation']",
    "css" : {
      "width" : 110.0
    }
  }, {
    "selector" : "node[bel_function_type = 'compositeAbundance']",
    "css" : {
      "width" : 150.0
    }
  }, {
    "selector" : "node[bel_function_type = 'molecularActivity']",
    "css" : {
      "width" : 110.0
    }
  }, {
    "selector" : "node[bel_function_type = 'rnaAbundance']",
    "css" : {
      "width" : 75.0
    }
  }, {
    "selector" : "node[bel_function_type = 'biologicalProcess']",
    "css" : {
      "width" : 125.0
    }
  }, {
    "selector" : "node[bel_function_type = 'microRNAAbundance']",
    "css" : {
      "width" : 75.0
    }
  }, {
    "selector" : "node[bel_function_type = 'geneAbundance']",
    "css" : {
      "width" : 75.0
    }
  }, {
    "selector" : "node[bel_function_type = 'ribosylationActivity']",
    "css" : {
      "width" : 110.0
    }
  }, {
    "selector" : "node[bel_function_type = 'cellSurfaceExpression']",
    "css" : {
      "width" : 110.0
    }
  }, {
    "selector" : "node[bel_function_type = 'chaperoneActivity']",
    "css" : {
      "width" : 110.0
    }
  }, {
    "selector" : "node[bel_function_type = 'transcriptionalActivity']",
    "css" : {
      "width" : 110.0
    }
  }, {
    "selector" : "node[bel_function_type = 'phosphataseActivity']",
    "css" : {
      "width" : 110.0
    }
  }, {
    "selector" : "node[bel_function_type = 'complexAbundance']",
    "css" : {
      "width" : 150.0
    }
  }, {
    "selector" : "node[linked]",
    "css" : {
      "background-opacity" : 1.0
    }
  }, {
    "selector" : "node[!linked]",
    "css" : {
      "background-opacity" : 0.39215686274509803
    }
  }, {
    "selector" : "node[bel_function_type = 'transcriptionalActivity']",
    "css" : {
      "width" : 100.0,
      "height" : 100.0
    }
  }, {
    "selector" : "node[linked]",
    "css" : {
      "border-opacity" : 1.0
    }
  }, {
    "selector" : "node[!linked]",
    "css" : {
      "border-opacity" : 0.39215686274509803
    }
  }, {
    "selector" : "node[linked]",
    "css" : {
      "text-opacity" : 1.0
    }
  }, {
    "selector" : "node[!linked]",
    "css" : {
      "text-opacity" : 0.39215686274509803
    }
  }, {
    "selector" : "node[ id = '4663' ]",
    "css" : {
      "text-valign" : "center"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "color" : "rgb(0,0,0)",
      "font-size" : 10,
      "text-opacity" : 1.0,
      "source-arrow-shape" : "none",
      "line-style" : "solid",
      "target-arrow-color" : "rgb(0,0,0)",
      "source-arrow-color" : "rgb(0,0,0)",
      "width" : 1.0,
      "font-family" : "Dialog.plain",
      "font-weight" : "normal",
      "line-color" : "rgb(0,0,0)",
      "opacity" : 1.0,
      "content" : "",
      "target-arrow-shape" : "none"
    }
  }, {
    "selector" : "edge[interaction = 'transcribedTo']",
    "css" : {
      "line-color" : "rgb(153,153,153)",
      "target-arrow-color" : "rgb(153,153,153)",
      "source-arrow-color" : "rgb(153,153,153)"
    }
  }, {
    "selector" : "edge[interaction = 'translatedTo']",
    "css" : {
      "line-color" : "rgb(153,153,153)",
      "target-arrow-color" : "rgb(153,153,153)",
      "source-arrow-color" : "rgb(153,153,153)"
    }
  }, {
    "selector" : "edge[interaction = 'hasProduct']",
    "css" : {
      "line-color" : "rgb(153,153,153)",
      "target-arrow-color" : "rgb(153,153,153)",
      "source-arrow-color" : "rgb(153,153,153)"
    }
  }, {
    "selector" : "edge[interaction = 'reactantIn']",
    "css" : {
      "line-color" : "rgb(153,153,153)",
      "target-arrow-color" : "rgb(153,153,153)",
      "source-arrow-color" : "rgb(153,153,153)"
    }
  }, {
    "selector" : "edge[interaction = 'subProcessOf']",
    "css" : {
      "line-color" : "rgb(153,153,153)",
      "target-arrow-color" : "rgb(153,153,153)",
      "source-arrow-color" : "rgb(153,153,153)"
    }
  }, {
    "selector" : "edge[interaction = 'hasMember']",
    "css" : {
      "line-color" : "rgb(153,153,153)",
      "target-arrow-color" : "rgb(153,153,153)",
      "source-arrow-color" : "rgb(153,153,153)"
    }
  }, {
    "selector" : "edge[interaction = 'orthologous']",
    "css" : {
      "line-color" : "rgb(153,153,153)",
      "target-arrow-color" : "rgb(153,153,153)",
      "source-arrow-color" : "rgb(153,153,153)"
    }
  }, {
    "selector" : "edge[interaction = 'actsIn']",
    "css" : {
      "line-color" : "rgb(153,153,153)",
      "target-arrow-color" : "rgb(153,153,153)",
      "source-arrow-color" : "rgb(153,153,153)"
    }
  }, {
    "selector" : "edge[interaction = 'includes']",
    "css" : {
      "line-color" : "rgb(153,153,153)",
      "target-arrow-color" : "rgb(153,153,153)",
      "source-arrow-color" : "rgb(153,153,153)"
    }
  }, {
    "selector" : "edge[interaction = 'hasVariant']",
    "css" : {
      "line-color" : "rgb(153,153,153)",
      "target-arrow-color" : "rgb(153,153,153)",
      "source-arrow-color" : "rgb(153,153,153)"
    }
  }, {
    "selector" : "edge[interaction = 'hasComponent']",
    "css" : {
      "line-color" : "rgb(153,153,153)",
      "target-arrow-color" : "rgb(153,153,153)",
      "source-arrow-color" : "rgb(153,153,153)"
    }
  }, {
    "selector" : "edge[interaction = 'hasModification']",
    "css" : {
      "line-color" : "rgb(153,153,153)",
      "target-arrow-color" : "rgb(153,153,153)",
      "source-arrow-color" : "rgb(153,153,153)"
    }
  }, {
    "selector" : "edge[interaction = 'subProcess_OF']",
    "css" : {
      "line-color" : "rgb(153,153,153)",
      "target-arrow-color" : "rgb(153,153,153)",
      "source-arrow-color" : "rgb(153,153,153)"
    }
  }, {
    "selector" : "edge[interaction = 'isA']",
    "css" : {
      "line-color" : "rgb(153,153,153)",
      "target-arrow-color" : "rgb(153,153,153)",
      "source-arrow-color" : "rgb(153,153,153)"
    }
  }, {
    "selector" : "edge[interaction = 'translocates']",
    "css" : {
      "line-color" : "rgb(153,153,153)",
      "target-arrow-color" : "rgb(153,153,153)",
      "source-arrow-color" : "rgb(153,153,153)"
    }
  }, {
    "selector" : "edge[interaction = 'transcribedTo']",
    "css" : {
      "line-color" : "rgb(153,153,153)"
    }
  }, {
    "selector" : "edge[interaction = 'translatedTo']",
    "css" : {
      "line-color" : "rgb(153,153,153)"
    }
  }, {
    "selector" : "edge[interaction = 'hasProduct']",
    "css" : {
      "line-color" : "rgb(153,153,153)"
    }
  }, {
    "selector" : "edge[interaction = 'reactantIn']",
    "css" : {
      "line-color" : "rgb(153,153,153)"
    }
  }, {
    "selector" : "edge[interaction = 'subProcessOf']",
    "css" : {
      "line-color" : "rgb(153,153,153)"
    }
  }, {
    "selector" : "edge[interaction = 'hasMember']",
    "css" : {
      "line-color" : "rgb(153,153,153)"
    }
  }, {
    "selector" : "edge[interaction = 'orthologous']",
    "css" : {
      "line-color" : "rgb(153,153,153)"
    }
  }, {
    "selector" : "edge[interaction = 'actsIn']",
    "css" : {
      "line-color" : "rgb(153,153,153)"
    }
  }, {
    "selector" : "edge[interaction = 'includes']",
    "css" : {
      "line-color" : "rgb(153,153,153)"
    }
  }, {
    "selector" : "edge[interaction = 'hasVariant']",
    "css" : {
      "line-color" : "rgb(153,153,153)"
    }
  }, {
    "selector" : "edge[interaction = 'hasComponent']",
    "css" : {
      "line-color" : "rgb(153,153,153)"
    }
  }, {
    "selector" : "edge[interaction = 'hasModification']",
    "css" : {
      "line-color" : "rgb(153,153,153)"
    }
  }, {
    "selector" : "edge[interaction = 'subProcess_OF']",
    "css" : {
      "line-color" : "rgb(153,153,153)"
    }
  }, {
    "selector" : "edge[interaction = 'isA']",
    "css" : {
      "line-color" : "rgb(153,153,153)"
    }
  }, {
    "selector" : "edge[interaction = 'translocates']",
    "css" : {
      "line-color" : "rgb(153,153,153)"
    }
  }, {
    "selector" : "edge[interaction = 'positiveCorrelation']",
    "css" : {
      "source-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'hasMember']",
    "css" : {
      "source-arrow-shape" : "none"
    }
  }, {
    "selector" : "edge[interaction = 'orthologous']",
    "css" : {
      "source-arrow-shape" : "none"
    }
  }, {
    "selector" : "edge[interaction = 'association']",
    "css" : {
      "source-arrow-shape" : "none"
    }
  }, {
    "selector" : "edge[interaction = 'negativeCorrelation']",
    "css" : {
      "source-arrow-shape" : "circle"
    }
  }, {
    "selector" : "edge[linked]",
    "css" : {
      "opacity" : 1.0
    }
  }, {
    "selector" : "edge[!linked]",
    "css" : {
      "opacity" : 0.19607843137254902
    }
  }, {
    "selector" : "edge[interaction = 'transcribedTo']",
    "css" : {
      "line-style" : "dashed"
    }
  }, {
    "selector" : "edge[interaction = 'causesNoChange']",
    "css" : {
      "line-style" : "dashed"
    }
  }, {
    "selector" : "edge[interaction = 'translatedTo']",
    "css" : {
      "line-style" : "dashed"
    }
  }, {
    "selector" : "edge[interaction = 'hasProduct']",
    "css" : {
      "line-style" : "dashed"
    }
  }, {
    "selector" : "edge[interaction = 'positiveCorrelation']",
    "css" : {
      "line-style" : "dotted"
    }
  }, {
    "selector" : "edge[interaction = 'reactantIn']",
    "css" : {
      "line-style" : "dashed"
    }
  }, {
    "selector" : "edge[interaction = 'subProcessOf']",
    "css" : {
      "line-style" : "dashed"
    }
  }, {
    "selector" : "edge[interaction = 'hasMember']",
    "css" : {
      "line-style" : "dashed"
    }
  }, {
    "selector" : "edge[interaction = 'orthologous']",
    "css" : {
      "line-style" : "dashed"
    }
  }, {
    "selector" : "edge[interaction = 'association']",
    "css" : {
      "line-style" : "dotted"
    }
  }, {
    "selector" : "edge[interaction = 'actsIn']",
    "css" : {
      "line-style" : "dashed"
    }
  }, {
    "selector" : "edge[interaction = 'includes']",
    "css" : {
      "line-style" : "dashed"
    }
  }, {
    "selector" : "edge[interaction = 'hasVariant']",
    "css" : {
      "line-style" : "dashed"
    }
  }, {
    "selector" : "edge[interaction = 'directlyDecreases']",
    "css" : {
      "line-style" : "solid"
    }
  }, {
    "selector" : "edge[interaction = 'negativeCorrelation']",
    "css" : {
      "line-style" : "dotted"
    }
  }, {
    "selector" : "edge[interaction = 'directlyIncreases']",
    "css" : {
      "line-style" : "solid"
    }
  }, {
    "selector" : "edge[interaction = 'prognosticBiomarkerFor']",
    "css" : {
      "line-style" : "dotted"
    }
  }, {
    "selector" : "edge[interaction = 'hasComponent']",
    "css" : {
      "line-style" : "dashed"
    }
  }, {
    "selector" : "edge[interaction = 'hasModification']",
    "css" : {
      "line-style" : "dashed"
    }
  }, {
    "selector" : "edge[interaction = 'subProcess_OF']",
    "css" : {
      "line-style" : "dashed"
    }
  }, {
    "selector" : "edge[interaction = 'isA']",
    "css" : {
      "line-style" : "dashed"
    }
  }, {
    "selector" : "edge[interaction = 'rateLimitingStepOf']",
    "css" : {
      "line-style" : "dashed"
    }
  }, {
    "selector" : "edge[interaction = 'biomarkerFor']",
    "css" : {
      "line-style" : "dotted"
    }
  }, {
    "selector" : "edge[interaction = 'translocates']",
    "css" : {
      "line-style" : "dashed"
    }
  }, {
    "selector" : "edge[interaction = 'translatedTo']",
    "css" : {
      "width" : 3.0
    }
  }, {
    "selector" : "edge[interaction = 'hasProduct']",
    "css" : {
      "width" : 3.0
    }
  }, {
    "selector" : "edge[interaction = 'reactantIn']",
    "css" : {
      "width" : 3.0
    }
  }, {
    "selector" : "edge[interaction = 'orthologous']",
    "css" : {
      "width" : 3.0
    }
  }, {
    "selector" : "edge[interaction = 'actsIn']",
    "css" : {
      "width" : 3.0
    }
  }, {
    "selector" : "edge[interaction = 'association']",
    "css" : {
      "width" : 1.0
    }
  }, {
    "selector" : "edge[interaction = 'hasVariant']",
    "css" : {
      "width" : 3.0
    }
  }, {
    "selector" : "edge[interaction = 'directlyIncreases']",
    "css" : {
      "width" : 3.0
    }
  }, {
    "selector" : "edge[interaction = 'increases']",
    "css" : {
      "width" : 1.0
    }
  }, {
    "selector" : "edge[interaction = 'prognosticBiomarkerFor']",
    "css" : {
      "width" : 1.0
    }
  }, {
    "selector" : "edge[interaction = 'hasComponent']",
    "css" : {
      "width" : 3.0
    }
  }, {
    "selector" : "edge[interaction = 'hasModification']",
    "css" : {
      "width" : 3.0
    }
  }, {
    "selector" : "edge[interaction = 'subProcess_OF']",
    "css" : {
      "width" : 3.0
    }
  }, {
    "selector" : "edge[interaction = 'isA']",
    "css" : {
      "width" : 3.0
    }
  }, {
    "selector" : "edge[interaction = 'rateLimitingStepOf']",
    "css" : {
      "width" : 3.0
    }
  }, {
    "selector" : "edge[interaction = 'biomarkerFor']",
    "css" : {
      "width" : 1.0
    }
  }, {
    "selector" : "edge[interaction = 'translocates']",
    "css" : {
      "width" : 3.0
    }
  }, {
    "selector" : "edge[interaction = 'transcribedTo']",
    "css" : {
      "width" : 3.0
    }
  }, {
    "selector" : "edge[interaction = 'causesNoChange']",
    "css" : {
      "width" : 3.0
    }
  }, {
    "selector" : "edge[interaction = 'positiveCorrelation']",
    "css" : {
      "width" : 1.0
    }
  }, {
    "selector" : "edge[interaction = 'subProcessOf']",
    "css" : {
      "width" : 3.0
    }
  }, {
    "selector" : "edge[interaction = 'hasMember']",
    "css" : {
      "width" : 3.0
    }
  }, {
    "selector" : "edge[interaction = 'includes']",
    "css" : {
      "width" : 3.0
    }
  }, {
    "selector" : "edge[interaction = 'directlyDecreases']",
    "css" : {
      "width" : 3.0
    }
  }, {
    "selector" : "edge[interaction = 'negativeCorrelation']",
    "css" : {
      "width" : 1.0
    }
  }, {
    "selector" : "edge[interaction = 'decreases']",
    "css" : {
      "width" : 1.0
    }
  }, {
    "selector" : "edge[interaction = 'translatedTo']",
    "css" : {
      "target-arrow-shape" : "diamond"
    }
  }, {
    "selector" : "edge[interaction = 'hasProduct']",
    "css" : {
      "target-arrow-shape" : "diamond"
    }
  }, {
    "selector" : "edge[interaction = 'reactantIn']",
    "css" : {
      "target-arrow-shape" : "diamond"
    }
  }, {
    "selector" : "edge[interaction = 'orthologous']",
    "css" : {
      "target-arrow-shape" : "none"
    }
  }, {
    "selector" : "edge[interaction = 'actsIn']",
    "css" : {
      "target-arrow-shape" : "diamond"
    }
  }, {
    "selector" : "edge[interaction = 'association']",
    "css" : {
      "target-arrow-shape" : "none"
    }
  }, {
    "selector" : "edge[interaction = 'hasVariant']",
    "css" : {
      "target-arrow-shape" : "diamond"
    }
  }, {
    "selector" : "edge[interaction = 'directlyIncreases']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'unknown']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'increases']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'prognosticBiomarkerFor']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'hasComponent']",
    "css" : {
      "target-arrow-shape" : "diamond"
    }
  }, {
    "selector" : "edge[interaction = 'hasModification']",
    "css" : {
      "target-arrow-shape" : "diamond"
    }
  }, {
    "selector" : "edge[interaction = 'subProcess_OF']",
    "css" : {
      "target-arrow-shape" : "diamond"
    }
  }, {
    "selector" : "edge[interaction = 'isA']",
    "css" : {
      "target-arrow-shape" : "diamond"
    }
  }, {
    "selector" : "edge[interaction = 'rateLimitingStepOf']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'biomarkerFor']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'translocates']",
    "css" : {
      "target-arrow-shape" : "diamond"
    }
  }, {
    "selector" : "edge[interaction = 'analogous']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'transcribedTo']",
    "css" : {
      "target-arrow-shape" : "diamond"
    }
  }, {
    "selector" : "edge[interaction = 'positiveCorrelation']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'subProcessOf']",
    "css" : {
      "target-arrow-shape" : "diamond"
    }
  }, {
    "selector" : "edge[interaction = 'hasMember']",
    "css" : {
      "target-arrow-shape" : "diamond"
    }
  }, {
    "selector" : "edge[interaction = 'includes']",
    "css" : {
      "target-arrow-shape" : "diamond"
    }
  }, {
    "selector" : "edge[interaction = 'directlyDecreases']",
    "css" : {
      "target-arrow-shape" : "circle"
    }
  }, {
    "selector" : "edge[interaction = 'negativeCorrelation']",
    "css" : {
      "target-arrow-shape" : "circle"
    }
  }, {
    "selector" : "edge[interaction = 'decreases']",
    "css" : {
      "target-arrow-shape" : "circle"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.9.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "default",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "border-color" : "rgb(102,102,102)",
      "color" : "rgb(0,0,0)",
      "width" : 40.0,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "text-valign" : "center",
      "text-halign" : "center",
      "font-size" : 12,
      "height" : 40.0,
      "border-opacity" : 1.0,
      "text-opacity" : 1.0,
      "border-width" : 1.5,
      "shape" : "ellipse",
      "background-opacity" : 1.0,
      "background-color" : "rgb(255,153,153)",
      "content" : "data(source)"
    }
  }, {
    "selector" : "node[ id = '4663' ]",
    "css" : {
      "text-valign" : "center"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "color" : "rgb(0,0,0)",
      "font-size" : 10,
      "text-opacity" : 1.0,
      "source-arrow-shape" : "none",
      "line-style" : "solid",
      "target-arrow-color" : "rgb(0,0,0)",
      "source-arrow-color" : "rgb(0,0,0)",
      "width" : 1.5,
      "font-family" : "Dialog.plain",
      "font-weight" : "normal",
      "line-color" : "rgb(0,0,255)",
      "opacity" : 1.0,
      "content" : "",
      "target-arrow-shape" : "none"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.9.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Solid",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "border-color" : "rgb(0,0,0)",
      "color" : "rgb(0,0,0)",
      "width" : 40.0,
      "font-family" : "Dialog.plain",
      "font-weight" : "normal",
      "text-valign" : "bottom",
      "text-halign" : "right",
      "font-size" : 18,
      "height" : 40.0,
      "border-opacity" : 1.0,
      "text-opacity" : 0.6274509803921569,
      "border-width" : 0.0,
      "shape" : "ellipse",
      "background-opacity" : 1.0,
      "background-color" : "rgb(102,102,102)",
      "content" : "data(name)"
    }
  }, {
    "selector" : "node[ id = '4663' ]",
    "css" : {
      "text-valign" : "center"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "color" : "rgb(102,102,102)",
      "font-size" : 10,
      "text-opacity" : 0.7450980392156863,
      "source-arrow-shape" : "none",
      "line-style" : "solid",
      "target-arrow-color" : "rgb(0,0,0)",
      "source-arrow-color" : "rgb(0,0,0)",
      "width" : 12.0,
      "font-family" : "Dialog.plain",
      "font-weight" : "normal",
      "line-color" : "rgb(204,204,204)",
      "opacity" : 1.0,
      "target-arrow-shape" : "none",
      "content" : "data(interaction)"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.9.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "size_rank_0",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "border-color" : "rgb(0,0,0)",
      "color" : "rgb(51,51,51)",
      "width" : 12.0,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "text-valign" : "center",
      "text-halign" : "center",
      "font-size" : 9,
      "height" : 12.0,
      "border-opacity" : 1.0,
      "text-opacity" : 1.0,
      "border-width" : 0.0,
      "shape" : "rectangle",
      "background-opacity" : 1.0,
      "background-color" : "rgb(204,204,255)",
      "content" : "data(name)"
    }
  }, {
    "selector" : "node[ id = '4663' ]",
    "css" : {
      "text-valign" : "center"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "color" : "rgb(0,0,0)",
      "font-size" : 10,
      "text-opacity" : 1.0,
      "source-arrow-shape" : "none",
      "line-style" : "solid",
      "target-arrow-color" : "rgb(0,0,0)",
      "source-arrow-color" : "rgb(0,0,0)",
      "width" : 2.0,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "line-color" : "rgb(76,76,76)",
      "opacity" : 1.0,
      "content" : "",
      "target-arrow-shape" : "none"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.9.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "size_rank",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "border-color" : "rgb(0,0,0)",
      "color" : "rgb(51,51,51)",
      "width" : 12.0,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "text-valign" : "center",
      "text-halign" : "center",
      "font-size" : 9,
      "height" : 12.0,
      "border-opacity" : 1.0,
      "text-opacity" : 1.0,
      "border-width" : 0.0,
      "shape" : "rectangle",
      "background-opacity" : 1.0,
      "background-color" : "rgb(204,204,255)",
      "content" : "data(name)"
    }
  }, {
    "selector" : "node[ id = '4663' ]",
    "css" : {
      "text-valign" : "center"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "color" : "rgb(0,0,0)",
      "font-size" : 10,
      "text-opacity" : 1.0,
      "source-arrow-shape" : "none",
      "line-style" : "solid",
      "target-arrow-color" : "rgb(0,0,0)",
      "source-arrow-color" : "rgb(0,0,0)",
      "width" : 2.0,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "line-color" : "rgb(76,76,76)",
      "opacity" : 1.0,
      "content" : "",
      "target-arrow-shape" : "none"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.9.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "CCSB - HI-II-14. Proteome-scale map of the human binary interactome network generated by systematically screening Space-II-Style",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "border-color" : "rgb(0,0,204)",
      "color" : "rgb(0,0,0)",
      "width" : 65.0,
      "font-family" : "Dialog.plain",
      "font-weight" : "normal",
      "text-valign" : "center",
      "text-halign" : "center",
      "font-size" : 12,
      "height" : 30.0,
      "border-opacity" : 1.0,
      "text-opacity" : 1.0,
      "border-width" : 2.5,
      "shape" : "octagon",
      "background-opacity" : 1.0,
      "background-color" : "rgb(204,204,255)",
      "content" : "data(name)"
    }
  }, {
    "selector" : "node[ id = '4663' ]",
    "css" : {
      "text-valign" : "center"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,0,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "color" : "rgb(51,51,51)",
      "font-size" : 10,
      "text-opacity" : 0.0,
      "source-arrow-shape" : "none",
      "line-style" : "solid",
      "target-arrow-color" : "rgb(0,0,0)",
      "source-arrow-color" : "rgb(0,0,0)",
      "width" : 3.0,
      "font-family" : "Dialog.plain",
      "font-weight" : "normal",
      "line-color" : "rgb(102,102,102)",
      "opacity" : 1.0,
      "target-arrow-shape" : "none",
      "content" : "data(shared_interaction)"
    }
  }, {
    "selector" : "edge[shared_interaction = 'pp']",
    "css" : {
      "line-style" : "solid"
    }
  }, {
    "selector" : "edge[shared_interaction = 'pd']",
    "css" : {
      "line-style" : "dashed"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.9.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Malignant Melanoma-Style-1",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "border-color" : "rgb(0,153,0)",
      "color" : "rgb(0,0,0)",
      "width" : 95.0,
      "font-family" : "Dialog.plain",
      "font-weight" : "normal",
      "text-valign" : "center",
      "text-halign" : "center",
      "font-size" : 14,
      "height" : 40.0,
      "border-opacity" : 1.0,
      "text-opacity" : 1.0,
      "border-width" : 2.0,
      "shape" : "ellipse",
      "background-opacity" : 0.8823529411764706,
      "background-color" : "rgb(204,255,204)",
      "content" : "data(name)"
    }
  }, {
    "selector" : "node[TYPE = 'phenotype']",
    "css" : {
      "border-color" : "rgb(0,0,0)"
    }
  }, {
    "selector" : "node[TYPE = 'smallmolecule']",
    "css" : {
      "border-color" : "rgb(255,102,255)"
    }
  }, {
    "selector" : "node[TYPE = 'chemical']",
    "css" : {
      "border-color" : "rgb(255,153,0)"
    }
  }, {
    "selector" : "node[TYPE = 'stimulus']",
    "css" : {
      "border-color" : "rgb(0,204,255)"
    }
  }, {
    "selector" : "node[TYPE = 'phenotype']",
    "css" : {
      "shape" : "rectangle"
    }
  }, {
    "selector" : "node[TYPE = 'smallmolecule']",
    "css" : {
      "shape" : "octagon"
    }
  }, {
    "selector" : "node[TYPE = 'chemical']",
    "css" : {
      "shape" : "octagon"
    }
  }, {
    "selector" : "node[TYPE = 'stimulus']",
    "css" : {
      "shape" : "diamond"
    }
  }, {
    "selector" : "node[TYPE = 'complex']",
    "css" : {
      "shape" : "roundrectangle"
    }
  }, {
    "selector" : "node[TYPE = 'phenotype']",
    "css" : {
      "width" : 110.0
    }
  }, {
    "selector" : "node[TYPE = 'complex']",
    "css" : {
      "width" : 110.0
    }
  }, {
    "selector" : "node[TYPE = 'protein']",
    "css" : {
      "width" : 80.0
    }
  }, {
    "selector" : "node[TYPE = 'proteinfamily']",
    "css" : {
      "width" : 90.0
    }
  }, {
    "selector" : "node[TYPE = 'phenotype']",
    "css" : {
      "height" : 60.0
    }
  }, {
    "selector" : "node[TYPE = 'protein']",
    "css" : {
      "height" : 30.0
    }
  }, {
    "selector" : "node[TYPE = 'proteinfamily']",
    "css" : {
      "height" : 50.0
    }
  }, {
    "selector" : "node[TYPE = 'phenotype']",
    "css" : {
      "background-color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "node[TYPE = 'smallmolecule']",
    "css" : {
      "background-color" : "rgb(255,204,255)"
    }
  }, {
    "selector" : "node[TYPE = 'chemical']",
    "css" : {
      "background-color" : "rgb(255,204,51)"
    }
  }, {
    "selector" : "node[TYPE = 'stimulus']",
    "css" : {
      "background-color" : "rgb(153,255,255)"
    }
  }, {
    "selector" : "node[TYPE = 'complex']",
    "css" : {
      "background-color" : "rgb(0,204,51)"
    }
  }, {
    "selector" : "node[ id = '4663' ]",
    "css" : {
      "text-valign" : "center"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "color" : "rgb(0,0,0)",
      "font-size" : 10,
      "text-opacity" : 1.0,
      "source-arrow-shape" : "none",
      "line-style" : "solid",
      "target-arrow-color" : "rgb(51,51,51)",
      "source-arrow-color" : "rgb(51,51,51)",
      "width" : 3.0,
      "font-family" : "Dialog.plain",
      "font-weight" : "normal",
      "line-color" : "rgb(51,51,51)",
      "opacity" : 1.0,
      "content" : "",
      "target-arrow-shape" : "none"
    }
  }, {
    "selector" : "edge[shared_interaction = 'down-regulates quantity']",
    "css" : {
      "line-color" : "rgb(255,51,0)",
      "target-arrow-color" : "rgb(255,51,0)",
      "source-arrow-color" : "rgb(255,51,0)"
    }
  }, {
    "selector" : "edge[shared_interaction = 'up-regulates quantity']",
    "css" : {
      "line-color" : "rgb(0,153,255)",
      "target-arrow-color" : "rgb(0,153,255)",
      "source-arrow-color" : "rgb(0,153,255)"
    }
  }, {
    "selector" : "edge[shared_interaction = 'down-regulates activity']",
    "css" : {
      "line-color" : "rgb(255,51,0)",
      "target-arrow-color" : "rgb(255,51,0)",
      "source-arrow-color" : "rgb(255,51,0)"
    }
  }, {
    "selector" : "edge[shared_interaction = 'down-regulates quantity by destabilization']",
    "css" : {
      "line-color" : "rgb(255,51,0)",
      "target-arrow-color" : "rgb(255,51,0)",
      "source-arrow-color" : "rgb(255,51,0)"
    }
  }, {
    "selector" : "edge[shared_interaction = 'down-regulates quantity by repression']",
    "css" : {
      "line-color" : "rgb(255,51,0)",
      "target-arrow-color" : "rgb(255,51,0)",
      "source-arrow-color" : "rgb(255,51,0)"
    }
  }, {
    "selector" : "edge[shared_interaction = 'up-regulates activity']",
    "css" : {
      "line-color" : "rgb(0,153,255)",
      "target-arrow-color" : "rgb(0,153,255)",
      "source-arrow-color" : "rgb(0,153,255)"
    }
  }, {
    "selector" : "edge[shared_interaction = 'up-regulates quantity by stabilization']",
    "css" : {
      "line-color" : "rgb(0,153,255)",
      "target-arrow-color" : "rgb(0,153,255)",
      "source-arrow-color" : "rgb(0,153,255)"
    }
  }, {
    "selector" : "edge[shared_interaction = 'up-regulates']",
    "css" : {
      "line-color" : "rgb(0,153,255)",
      "target-arrow-color" : "rgb(0,153,255)",
      "source-arrow-color" : "rgb(0,153,255)"
    }
  }, {
    "selector" : "edge[shared_interaction = 'down-regulates']",
    "css" : {
      "line-color" : "rgb(255,51,0)",
      "target-arrow-color" : "rgb(255,51,0)",
      "source-arrow-color" : "rgb(255,51,0)"
    }
  }, {
    "selector" : "edge[shared_interaction = 'up-regulates quantity by expression']",
    "css" : {
      "line-color" : "rgb(0,153,255)",
      "target-arrow-color" : "rgb(0,153,255)",
      "source-arrow-color" : "rgb(0,153,255)"
    }
  }, {
    "selector" : "edge[DIRECT = 'YES']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[DIRECT = 'NO']",
    "css" : {
      "line-style" : "dashed"
    }
  }, {
    "selector" : "edge[DIRECT = 'UNK']",
    "css" : {
      "line-style" : "dashed"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.9.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Sample1",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "border-color" : "rgb(0,0,0)",
      "color" : "rgb(0,0,0)",
      "width" : 40.0,
      "font-family" : "Dialog.plain",
      "font-weight" : "normal",
      "text-valign" : "center",
      "text-halign" : "center",
      "font-size" : 12,
      "height" : 40.0,
      "border-opacity" : 1.0,
      "text-opacity" : 1.0,
      "border-width" : 0.0,
      "shape" : "ellipse",
      "background-opacity" : 1.0,
      "background-color" : "rgb(204,204,255)",
      "content" : "data(source)"
    }
  }, {
    "selector" : "node[ id = '4663' ]",
    "css" : {
      "text-valign" : "center"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "color" : "rgb(0,0,0)",
      "font-size" : 10,
      "text-opacity" : 1.0,
      "source-arrow-shape" : "none",
      "line-style" : "solid",
      "target-arrow-color" : "rgb(0,0,0)",
      "source-arrow-color" : "rgb(0,0,0)",
      "width" : 1.0,
      "font-family" : "Dialog.plain",
      "font-weight" : "normal",
      "line-color" : "rgb(0,0,0)",
      "opacity" : 1.0,
      "target-arrow-shape" : "none",
      "content" : "data(interaction)"
    }
  }, {
    "selector" : "edge[interaction = 'pp']",
    "css" : {
      "line-color" : "rgb(0,204,0)",
      "target-arrow-color" : "rgb(0,204,0)",
      "source-arrow-color" : "rgb(0,204,0)"
    }
  }, {
    "selector" : "edge[interaction = 'pd']",
    "css" : {
      "line-color" : "rgb(255,0,51)",
      "target-arrow-color" : "rgb(255,0,51)",
      "source-arrow-color" : "rgb(255,0,51)"
    }
  }, {
    "selector" : "edge[interaction = 'pp']",
    "css" : {
      "line-color" : "rgb(0,204,0)"
    }
  }, {
    "selector" : "edge[interaction = 'pd']",
    "css" : {
      "line-color" : "rgb(255,0,51)"
    }
  }, {
    "selector" : "edge[interaction = 'pp']",
    "css" : {
      "line-style" : "solid"
    }
  }, {
    "selector" : "edge[interaction = 'pd']",
    "css" : {
      "line-style" : "dashed"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.9.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Minimal",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "border-color" : "rgb(0,0,0)",
      "color" : "rgb(0,0,0)",
      "width" : 30.0,
      "font-family" : "Dialog.plain",
      "font-weight" : "normal",
      "text-valign" : "center",
      "text-halign" : "center",
      "font-size" : 12,
      "content" : "",
      "height" : 30.0,
      "border-opacity" : 1.0,
      "text-opacity" : 1.0,
      "border-width" : 0.0,
      "shape" : "rectangle",
      "background-opacity" : 1.0,
      "background-color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "node[ id = '4663' ]",
    "css" : {
      "text-valign" : "center"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "color" : "rgb(0,0,0)",
      "font-size" : 10,
      "text-opacity" : 1.0,
      "source-arrow-shape" : "none",
      "line-style" : "solid",
      "target-arrow-color" : "rgb(0,0,0)",
      "source-arrow-color" : "rgb(0,0,0)",
      "width" : 4.0,
      "font-family" : "Dialog.plain",
      "font-weight" : "normal",
      "line-color" : "rgb(51,51,51)",
      "opacity" : 1.0,
      "content" : "",
      "target-arrow-shape" : "none"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.9.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Malignant Melanoma-Style",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "border-color" : "rgb(0,153,0)",
      "color" : "rgb(0,0,0)",
      "width" : 95.0,
      "font-family" : "Dialog.plain",
      "font-weight" : "normal",
      "text-valign" : "center",
      "text-halign" : "center",
      "font-size" : 14,
      "height" : 40.0,
      "border-opacity" : 1.0,
      "text-opacity" : 1.0,
      "border-width" : 2.0,
      "shape" : "ellipse",
      "background-opacity" : 0.8823529411764706,
      "background-color" : "rgb(204,255,204)",
      "content" : "data(name)"
    }
  }, {
    "selector" : "node[TYPE = 'phenotype']",
    "css" : {
      "border-color" : "rgb(0,0,0)"
    }
  }, {
    "selector" : "node[TYPE = 'smallmolecule']",
    "css" : {
      "border-color" : "rgb(255,102,255)"
    }
  }, {
    "selector" : "node[TYPE = 'chemical']",
    "css" : {
      "border-color" : "rgb(255,153,0)"
    }
  }, {
    "selector" : "node[TYPE = 'stimulus']",
    "css" : {
      "border-color" : "rgb(0,204,255)"
    }
  }, {
    "selector" : "node[TYPE = 'phenotype']",
    "css" : {
      "shape" : "rectangle"
    }
  }, {
    "selector" : "node[TYPE = 'smallmolecule']",
    "css" : {
      "shape" : "octagon"
    }
  }, {
    "selector" : "node[TYPE = 'chemical']",
    "css" : {
      "shape" : "octagon"
    }
  }, {
    "selector" : "node[TYPE = 'stimulus']",
    "css" : {
      "shape" : "diamond"
    }
  }, {
    "selector" : "node[TYPE = 'complex']",
    "css" : {
      "shape" : "roundrectangle"
    }
  }, {
    "selector" : "node[TYPE = 'phenotype']",
    "css" : {
      "width" : 110.0
    }
  }, {
    "selector" : "node[TYPE = 'complex']",
    "css" : {
      "width" : 110.0
    }
  }, {
    "selector" : "node[TYPE = 'protein']",
    "css" : {
      "width" : 80.0
    }
  }, {
    "selector" : "node[TYPE = 'proteinfamily']",
    "css" : {
      "width" : 90.0
    }
  }, {
    "selector" : "node[TYPE = 'phenotype']",
    "css" : {
      "height" : 60.0
    }
  }, {
    "selector" : "node[TYPE = 'protein']",
    "css" : {
      "height" : 30.0
    }
  }, {
    "selector" : "node[TYPE = 'proteinfamily']",
    "css" : {
      "height" : 50.0
    }
  }, {
    "selector" : "node[TYPE = 'phenotype']",
    "css" : {
      "background-color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "node[TYPE = 'smallmolecule']",
    "css" : {
      "background-color" : "rgb(255,204,255)"
    }
  }, {
    "selector" : "node[TYPE = 'chemical']",
    "css" : {
      "background-color" : "rgb(255,204,51)"
    }
  }, {
    "selector" : "node[TYPE = 'stimulus']",
    "css" : {
      "background-color" : "rgb(153,255,255)"
    }
  }, {
    "selector" : "node[TYPE = 'complex']",
    "css" : {
      "background-color" : "rgb(0,204,51)"
    }
  }, {
    "selector" : "node[ id = '4663' ]",
    "css" : {
      "text-valign" : "center"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "color" : "rgb(0,0,0)",
      "font-size" : 10,
      "text-opacity" : 1.0,
      "source-arrow-shape" : "none",
      "line-style" : "solid",
      "target-arrow-color" : "rgb(51,51,51)",
      "source-arrow-color" : "rgb(51,51,51)",
      "width" : 3.0,
      "font-family" : "Dialog.plain",
      "font-weight" : "normal",
      "line-color" : "rgb(51,51,51)",
      "opacity" : 1.0,
      "content" : "",
      "target-arrow-shape" : "none"
    }
  }, {
    "selector" : "edge[shared_interaction = 'down-regulates quantity']",
    "css" : {
      "line-color" : "rgb(255,51,0)",
      "target-arrow-color" : "rgb(255,51,0)",
      "source-arrow-color" : "rgb(255,51,0)"
    }
  }, {
    "selector" : "edge[shared_interaction = 'up-regulates quantity']",
    "css" : {
      "line-color" : "rgb(0,153,255)",
      "target-arrow-color" : "rgb(0,153,255)",
      "source-arrow-color" : "rgb(0,153,255)"
    }
  }, {
    "selector" : "edge[shared_interaction = 'down-regulates activity']",
    "css" : {
      "line-color" : "rgb(255,51,0)",
      "target-arrow-color" : "rgb(255,51,0)",
      "source-arrow-color" : "rgb(255,51,0)"
    }
  }, {
    "selector" : "edge[shared_interaction = 'down-regulates quantity by destabilization']",
    "css" : {
      "line-color" : "rgb(255,51,0)",
      "target-arrow-color" : "rgb(255,51,0)",
      "source-arrow-color" : "rgb(255,51,0)"
    }
  }, {
    "selector" : "edge[shared_interaction = 'down-regulates quantity by repression']",
    "css" : {
      "line-color" : "rgb(255,51,0)",
      "target-arrow-color" : "rgb(255,51,0)",
      "source-arrow-color" : "rgb(255,51,0)"
    }
  }, {
    "selector" : "edge[shared_interaction = 'up-regulates activity']",
    "css" : {
      "line-color" : "rgb(0,153,255)",
      "target-arrow-color" : "rgb(0,153,255)",
      "source-arrow-color" : "rgb(0,153,255)"
    }
  }, {
    "selector" : "edge[shared_interaction = 'up-regulates quantity by stabilization']",
    "css" : {
      "line-color" : "rgb(0,153,255)",
      "target-arrow-color" : "rgb(0,153,255)",
      "source-arrow-color" : "rgb(0,153,255)"
    }
  }, {
    "selector" : "edge[shared_interaction = 'up-regulates']",
    "css" : {
      "line-color" : "rgb(0,153,255)",
      "target-arrow-color" : "rgb(0,153,255)",
      "source-arrow-color" : "rgb(0,153,255)"
    }
  }, {
    "selector" : "edge[shared_interaction = 'down-regulates']",
    "css" : {
      "line-color" : "rgb(255,51,0)",
      "target-arrow-color" : "rgb(255,51,0)",
      "source-arrow-color" : "rgb(255,51,0)"
    }
  }, {
    "selector" : "edge[shared_interaction = 'up-regulates quantity by expression']",
    "css" : {
      "line-color" : "rgb(0,153,255)",
      "target-arrow-color" : "rgb(0,153,255)",
      "source-arrow-color" : "rgb(0,153,255)"
    }
  }, {
    "selector" : "edge[DIRECT = 'YES']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[DIRECT = 'NO']",
    "css" : {
      "line-style" : "dashed"
    }
  }, {
    "selector" : "edge[DIRECT = 'UNK']",
    "css" : {
      "line-style" : "dashed"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.9.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "DrugBank - Carrier-targeting drugs-Style",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "border-color" : "rgb(51,51,255)",
      "color" : "rgb(0,0,0)",
      "width" : 100.0,
      "font-family" : "Dialog.plain",
      "font-weight" : "normal",
      "text-valign" : "center",
      "text-halign" : "center",
      "font-size" : 14,
      "height" : 50.0,
      "border-opacity" : 1.0,
      "text-opacity" : 1.0,
      "border-width" : 2.0,
      "shape" : "roundrectangle",
      "background-opacity" : 1.0,
      "background-color" : "rgb(255,255,255)",
      "content" : "data(name)"
    }
  }, {
    "selector" : "node[Type = 'BiotechDrug']",
    "css" : {
      "border-color" : "rgb(235,246,255)"
    }
  }, {
    "selector" : "node[Type = 'SmallMoleculeDrug']",
    "css" : {
      "border-color" : "rgb(235,246,255)"
    }
  }, {
    "selector" : "node[Type = 'BiotechDrug']",
    "css" : {
      "shape" : "ellipse"
    }
  }, {
    "selector" : "node[Type = 'SmallMoleculeDrug']",
    "css" : {
      "shape" : "ellipse"
    }
  }, {
    "selector" : "node[Type = 'BiotechDrug']",
    "css" : {
      "width" : 50.0
    }
  }, {
    "selector" : "node[Type = 'SmallMoleculeDrug']",
    "css" : {
      "width" : 50.0
    }
  }, {
    "selector" : "node[Type = 'BiotechDrug']",
    "css" : {
      "background-opacity" : 0.6862745098039216
    }
  }, {
    "selector" : "node[Type = 'SmallMoleculeDrug']",
    "css" : {
      "background-opacity" : 0.6862745098039216
    }
  }, {
    "selector" : "node[Type = 'BiotechDrug']",
    "css" : {
      "background-color" : "rgb(255,51,255)"
    }
  }, {
    "selector" : "node[Type = 'SmallMoleculeDrug']",
    "css" : {
      "background-color" : "rgb(255,51,255)"
    }
  }, {
    "selector" : "node[ id = '4663' ]",
    "css" : {
      "text-valign" : "center"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "color" : "rgb(0,0,0)",
      "font-size" : 10,
      "text-opacity" : 1.0,
      "source-arrow-shape" : "none",
      "line-style" : "solid",
      "target-arrow-color" : "rgb(0,0,0)",
      "source-arrow-color" : "rgb(0,0,0)",
      "width" : 2.0,
      "font-family" : "Dialog.plain",
      "font-weight" : "normal",
      "line-color" : "rgb(132,132,132)",
      "opacity" : 1.0,
      "content" : "",
      "target-arrow-shape" : "none"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.9.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Universe",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "border-color" : "rgb(0,0,0)",
      "color" : "rgb(255,255,204)",
      "width" : 40.0,
      "font-family" : "Monospaced.plain",
      "font-weight" : "normal",
      "text-valign" : "center",
      "text-halign" : "center",
      "font-size" : 20,
      "height" : 40.0,
      "border-opacity" : 1.0,
      "text-opacity" : 0.7058823529411765,
      "border-width" : 0.0,
      "shape" : "ellipse",
      "background-opacity" : 0.0,
      "background-color" : "rgb(0,0,0)",
      "content" : "data(name)"
    }
  }, {
    "selector" : "node[ id = '4663' ]",
    "css" : {
      "text-valign" : "center"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "color" : "rgb(0,0,0)",
      "font-size" : 10,
      "text-opacity" : 1.0,
      "source-arrow-shape" : "none",
      "line-style" : "dashed",
      "target-arrow-color" : "rgb(0,0,0)",
      "source-arrow-color" : "rgb(0,0,0)",
      "width" : 3.0,
      "font-family" : "Dialog.plain",
      "font-weight" : "normal",
      "line-color" : "rgb(255,255,255)",
      "opacity" : 0.39215686274509803,
      "content" : "",
      "target-arrow-shape" : "none"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.9.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Local-Red-Blue-On-White",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "border-color" : "rgb(0,0,0)",
      "color" : "rgb(0,0,0)",
      "width" : 5.0,
      "font-family" : "Dialog.plain",
      "font-weight" : "normal",
      "text-valign" : "center",
      "text-halign" : "center",
      "font-size" : 10,
      "height" : 5.0,
      "border-opacity" : 0.19607843137254902,
      "text-opacity" : 1.0,
      "border-width" : 1.0,
      "shape" : "ellipse",
      "background-opacity" : 0.5882352941176471,
      "background-color" : "rgb(255,255,255)",
      "content" : "data(LABEL)"
    }
  }, {
    "selector" : "node[SCORE > 25]",
    "css" : {
      "font-size" : 70
    }
  }, {
    "selector" : "node[SCORE = 25]",
    "css" : {
      "font-size" : 70
    }
  }, {
    "selector" : "node[SCORE > 15][SCORE < 25]",
    "css" : {
      "font-size" : "mapData(SCORE,15,25,70,70)"
    }
  }, {
    "selector" : "node[SCORE > 4][SCORE < 15]",
    "css" : {
      "font-size" : "mapData(SCORE,4,15,30,70)"
    }
  }, {
    "selector" : "node[SCORE > 0][SCORE < 4]",
    "css" : {
      "font-size" : "mapData(SCORE,0,4,5,30)"
    }
  }, {
    "selector" : "node[SCORE > -4][SCORE < 0]",
    "css" : {
      "font-size" : "mapData(SCORE,-4,0,30,5)"
    }
  }, {
    "selector" : "node[SCORE > -15][SCORE < -4]",
    "css" : {
      "font-size" : "mapData(SCORE,-15,-4,70,30)"
    }
  }, {
    "selector" : "node[SCORE > -25][SCORE < -15]",
    "css" : {
      "font-size" : "mapData(SCORE,-25,-15,70,70)"
    }
  }, {
    "selector" : "node[SCORE = -25]",
    "css" : {
      "font-size" : 70
    }
  }, {
    "selector" : "node[SCORE < -25]",
    "css" : {
      "font-size" : 70
    }
  }, {
    "selector" : "node[TYPE = 'rna']",
    "css" : {
      "shape" : "ellipse"
    }
  }, {
    "selector" : "node[TYPE = 'protein']",
    "css" : {
      "shape" : "ellipse"
    }
  }, {
    "selector" : "node[TYPE = 'complex']",
    "css" : {
      "shape" : "hexagon"
    }
  }, {
    "selector" : "node[TYPE = 'miRNA']",
    "css" : {
      "shape" : "ellipse"
    }
  }, {
    "selector" : "node[TYPE = 'abstract']",
    "css" : {
      "shape" : "roundrectangle"
    }
  }, {
    "selector" : "node[TYPE = 'family']",
    "css" : {
      "shape" : "triangle"
    }
  }, {
    "selector" : "node[TYPE = 'graydrug']",
    "css" : {
      "shape" : "triangle"
    }
  }, {
    "selector" : "node[TYPE = 'drug']",
    "css" : {
      "shape" : "triangle"
    }
  }, {
    "selector" : "node[TYPE = 'undefined']",
    "css" : {
      "shape" : "parallelogram"
    }
  }, {
    "selector" : "node[GEMCITABINE_MEDIAN > 3.12999257]",
    "css" : {
      "width" : 1.0
    }
  }, {
    "selector" : "node[GEMCITABINE_MEDIAN = 3.12999257]",
    "css" : {
      "width" : 25.013697
    }
  }, {
    "selector" : "node[GEMCITABINE_MEDIAN > 0.00524001][GEMCITABINE_MEDIAN < 3.12999257]",
    "css" : {
      "width" : "mapData(GEMCITABINE_MEDIAN,0.00524001,3.12999257,0.0,25.013697)"
    }
  }, {
    "selector" : "node[GEMCITABINE_MEDIAN > -4.54851486][GEMCITABINE_MEDIAN < 0.00524001]",
    "css" : {
      "width" : "mapData(GEMCITABINE_MEDIAN,-4.54851486,0.00524001,25.063173,0.0)"
    }
  }, {
    "selector" : "node[GEMCITABINE_MEDIAN = -4.54851486]",
    "css" : {
      "width" : 25.063173
    }
  }, {
    "selector" : "node[GEMCITABINE_MEDIAN < -4.54851486]",
    "css" : {
      "width" : 1.0
    }
  }, {
    "selector" : "node[GEMCITABINE_MEDIAN > 3.12999257]",
    "css" : {
      "height" : 1.0
    }
  }, {
    "selector" : "node[GEMCITABINE_MEDIAN = 3.12999257]",
    "css" : {
      "height" : 25.502945
    }
  }, {
    "selector" : "node[GEMCITABINE_MEDIAN > 0.00524001][GEMCITABINE_MEDIAN < 3.12999257]",
    "css" : {
      "height" : "mapData(GEMCITABINE_MEDIAN,0.00524001,3.12999257,0.6849315,25.502945)"
    }
  }, {
    "selector" : "node[GEMCITABINE_MEDIAN > -4.54851484][GEMCITABINE_MEDIAN < 0.00524001]",
    "css" : {
      "height" : "mapData(GEMCITABINE_MEDIAN,-4.54851484,0.00524001,25.502945,0.6849315)"
    }
  }, {
    "selector" : "node[GEMCITABINE_MEDIAN = -4.54851484]",
    "css" : {
      "height" : 25.502945
    }
  }, {
    "selector" : "node[GEMCITABINE_MEDIAN < -4.54851484]",
    "css" : {
      "height" : 50.0
    }
  }, {
    "selector" : "node[SCORE > 25]",
    "css" : {
      "background-opacity" : 0.9803921568627451
    }
  }, {
    "selector" : "node[SCORE = 25]",
    "css" : {
      "background-opacity" : 0.9803921568627451
    }
  }, {
    "selector" : "node[SCORE > 15][SCORE < 25]",
    "css" : {
      "background-opacity" : "mapData(SCORE,15,25,250,250)"
    }
  }, {
    "selector" : "node[SCORE > 4][SCORE < 15]",
    "css" : {
      "background-opacity" : "mapData(SCORE,4,15,150,250)"
    }
  }, {
    "selector" : "node[SCORE > 0][SCORE < 4]",
    "css" : {
      "background-opacity" : "mapData(SCORE,0,4,5,150)"
    }
  }, {
    "selector" : "node[SCORE > -4][SCORE < 0]",
    "css" : {
      "background-opacity" : "mapData(SCORE,-4,0,150,5)"
    }
  }, {
    "selector" : "node[SCORE > -15][SCORE < -4]",
    "css" : {
      "background-opacity" : "mapData(SCORE,-15,-4,250,150)"
    }
  }, {
    "selector" : "node[SCORE > -25][SCORE < -15]",
    "css" : {
      "background-opacity" : "mapData(SCORE,-25,-15,250,250)"
    }
  }, {
    "selector" : "node[SCORE = -25]",
    "css" : {
      "background-opacity" : 0.9803921568627451
    }
  }, {
    "selector" : "node[SCORE < -25]",
    "css" : {
      "background-opacity" : 0.9803921568627451
    }
  }, {
    "selector" : "node[SCORE > 100.00000808]",
    "css" : {
      "background-color" : "rgb(255,25,25)"
    }
  }, {
    "selector" : "node[SCORE = 100.00000808]",
    "css" : {
      "background-color" : "rgb(255,25,25)"
    }
  }, {
    "selector" : "node[SCORE > 19.00000067][SCORE < 100.00000808]",
    "css" : {
      "background-color" : "mapData(SCORE,19.00000067,100.00000808,rgb(255,25,25),rgb(255,25,25))"
    }
  }, {
    "selector" : "node[SCORE > 2.99999931][SCORE < 19.00000067]",
    "css" : {
      "background-color" : "mapData(SCORE,2.99999931,19.00000067,rgb(255,51,51),rgb(255,25,25))"
    }
  }, {
    "selector" : "node[SCORE > -0.00000084][SCORE < 2.99999931]",
    "css" : {
      "background-color" : "mapData(SCORE,-0.00000084,2.99999931,rgb(255,255,255),rgb(255,51,51))"
    }
  }, {
    "selector" : "node[SCORE > -2.99999926][SCORE < -0.00000084]",
    "css" : {
      "background-color" : "mapData(SCORE,-2.99999926,-0.00000084,rgb(51,153,255),rgb(255,255,255))"
    }
  }, {
    "selector" : "node[SCORE > -12.84551676][SCORE < -2.99999926]",
    "css" : {
      "background-color" : "mapData(SCORE,-12.84551676,-2.99999926,rgb(51,51,255),rgb(51,153,255))"
    }
  }, {
    "selector" : "node[SCORE = -12.84551676]",
    "css" : {
      "background-color" : "rgb(51,51,255)"
    }
  }, {
    "selector" : "node[SCORE < -12.84551676]",
    "css" : {
      "background-color" : "rgb(51,51,255)"
    }
  }, {
    "selector" : "node[ id = '4663' ]",
    "css" : {
      "text-valign" : "center"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "color" : "rgb(0,0,0)",
      "font-size" : 10,
      "text-opacity" : 0.19607843137254902,
      "source-arrow-shape" : "none",
      "line-style" : "solid",
      "target-arrow-color" : "rgb(0,0,0)",
      "source-arrow-color" : "rgb(0,0,0)",
      "width" : 6.0,
      "font-family" : "Dialog.plain",
      "font-weight" : "normal",
      "line-color" : "rgb(0,0,0)",
      "opacity" : 0.7843137254901961,
      "content" : "",
      "target-arrow-shape" : "none"
    }
  }, {
    "selector" : "edge[interaction = '-ap-']",
    "css" : {
      "target-arrow-shape" : "circle"
    }
  }, {
    "selector" : "edge[interaction = '-ap|']",
    "css" : {
      "target-arrow-shape" : "tee"
    }
  }, {
    "selector" : "edge[interaction = '-t|']",
    "css" : {
      "target-arrow-shape" : "tee"
    }
  }, {
    "selector" : "edge[interaction = 'component>']",
    "css" : {
      "target-arrow-shape" : "none"
    }
  }, {
    "selector" : "edge[interaction = '-t-']",
    "css" : {
      "target-arrow-shape" : "circle"
    }
  }, {
    "selector" : "edge[interaction = '-ap>']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = '-t>']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = '-a|']",
    "css" : {
      "target-arrow-shape" : "tee"
    }
  }, {
    "selector" : "edge[interaction = '-a>']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = '-disconnected-']",
    "css" : {
      "target-arrow-shape" : "none"
    }
  }, {
    "selector" : "edge[interaction = '-ap-']",
    "css" : {
      "line-style" : "dashed"
    }
  }, {
    "selector" : "edge[interaction = 'component>']",
    "css" : {
      "line-style" : "dashed"
    }
  }, {
    "selector" : "edge[interaction = '-t|']",
    "css" : {
      "line-style" : "solid"
    }
  }, {
    "selector" : "edge[interaction = '-ap|']",
    "css" : {
      "line-style" : "dashed"
    }
  }, {
    "selector" : "edge[interaction = '-t-']",
    "css" : {
      "line-style" : "solid"
    }
  }, {
    "selector" : "edge[interaction = '-t>']",
    "css" : {
      "line-style" : "solid"
    }
  }, {
    "selector" : "edge[interaction = '-ap>']",
    "css" : {
      "line-style" : "dashed"
    }
  }, {
    "selector" : "edge[interaction = '-a|']",
    "css" : {
      "line-style" : "dashed"
    }
  }, {
    "selector" : "edge[interaction = '-a>']",
    "css" : {
      "line-style" : "dashed"
    }
  }, {
    "selector" : "edge[interaction = '-disconnected-']",
    "css" : {
      "line-style" : "dashed"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.9.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "size_rank_0_0",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "border-color" : "rgb(0,0,0)",
      "color" : "rgb(51,51,51)",
      "width" : 12.0,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "text-valign" : "center",
      "text-halign" : "center",
      "font-size" : 9,
      "height" : 12.0,
      "border-opacity" : 1.0,
      "text-opacity" : 1.0,
      "border-width" : 0.0,
      "shape" : "rectangle",
      "background-opacity" : 1.0,
      "background-color" : "rgb(204,204,255)",
      "content" : "data(name)"
    }
  }, {
    "selector" : "node[ id = '4663' ]",
    "css" : {
      "text-valign" : "center"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "color" : "rgb(0,0,0)",
      "font-size" : 10,
      "text-opacity" : 1.0,
      "source-arrow-shape" : "none",
      "line-style" : "solid",
      "target-arrow-color" : "rgb(0,0,0)",
      "source-arrow-color" : "rgb(0,0,0)",
      "width" : 2.0,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "line-color" : "rgb(76,76,76)",
      "opacity" : 1.0,
      "content" : "",
      "target-arrow-shape" : "none"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.9.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "BEL Visualization",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "border-color" : "rgb(0,0,0)",
      "color" : "rgb(0,0,0)",
      "width" : 70.0,
      "font-family" : "Dialog.plain",
      "font-weight" : "normal",
      "text-valign" : "center",
      "text-halign" : "center",
      "font-size" : 12,
      "height" : 30.0,
      "border-opacity" : 1.0,
      "text-opacity" : 1.0,
      "border-width" : 1.0,
      "shape" : "rectangle",
      "background-opacity" : 1.0,
      "background-color" : "rgb(255,255,255)",
      "content" : "data(name)"
    }
  }, {
    "selector" : "node[bel_function_type = 'transportActivity']",
    "css" : {
      "shape" : "roundrectangle"
    }
  }, {
    "selector" : "node[bel_function_type = 'cellSecretion']",
    "css" : {
      "shape" : "v"
    }
  }, {
    "selector" : "node[bel_function_type = 'catalyticActivity']",
    "css" : {
      "shape" : "hexagon"
    }
  }, {
    "selector" : "node[bel_function_type = 'reaction']",
    "css" : {
      "shape" : "parallelogram"
    }
  }, {
    "selector" : "node[bel_function_type = 'pathology']",
    "css" : {
      "shape" : "parallelogram"
    }
  }, {
    "selector" : "node[bel_function_type = 'gtpBoundActivity']",
    "css" : {
      "shape" : "hexagon"
    }
  }, {
    "selector" : "node[bel_function_type = 'translocation']",
    "css" : {
      "shape" : "v"
    }
  }, {
    "selector" : "node[bel_function_type = 'kinaseActivity']",
    "css" : {
      "shape" : "hexagon"
    }
  }, {
    "selector" : "node[bel_function_type = 'proteinAbundance']",
    "css" : {
      "shape" : "roundrectangle"
    }
  }, {
    "selector" : "node[bel_function_type = 'peptidaseActivity']",
    "css" : {
      "shape" : "hexagon"
    }
  }, {
    "selector" : "node[bel_function_type = 'abundance']",
    "css" : {
      "shape" : "diamond"
    }
  }, {
    "selector" : "node[bel_function_type = 'degradation']",
    "css" : {
      "shape" : "roundrectangle"
    }
  }, {
    "selector" : "node[bel_function_type = 'compositeAbundance']",
    "css" : {
      "shape" : "roundrectangle"
    }
  }, {
    "selector" : "node[bel_function_type = 'molecularActivity']",
    "css" : {
      "shape" : "hexagon"
    }
  }, {
    "selector" : "node[bel_function_type = 'rnaAbundance']",
    "css" : {
      "shape" : "ellipse"
    }
  }, {
    "selector" : "node[bel_function_type = 'biologicalProcess']",
    "css" : {
      "shape" : "parallelogram"
    }
  }, {
    "selector" : "node[bel_function_type = 'microRNAAbundance']",
    "css" : {
      "shape" : "ellipse"
    }
  }, {
    "selector" : "node[bel_function_type = 'geneAbundance']",
    "css" : {
      "shape" : "ellipse"
    }
  }, {
    "selector" : "node[bel_function_type = 'ribosylationActivity']",
    "css" : {
      "shape" : "hexagon"
    }
  }, {
    "selector" : "node[bel_function_type = 'cellSurfaceExpression']",
    "css" : {
      "shape" : "v"
    }
  }, {
    "selector" : "node[bel_function_type = 'chaperoneActivity']",
    "css" : {
      "shape" : "hexagon"
    }
  }, {
    "selector" : "node[bel_function_type = 'transcriptionalActivity']",
    "css" : {
      "shape" : "hexagon"
    }
  }, {
    "selector" : "node[bel_function_type = 'phosphataseActivity']",
    "css" : {
      "shape" : "hexagon"
    }
  }, {
    "selector" : "node[bel_function_type = 'complexAbundance']",
    "css" : {
      "shape" : "roundrectangle"
    }
  }, {
    "selector" : "node[bel_function_type = 'transportActivity']",
    "css" : {
      "width" : 110.0
    }
  }, {
    "selector" : "node[bel_function_type = 'cellSecretion']",
    "css" : {
      "width" : 110.0
    }
  }, {
    "selector" : "node[bel_function_type = 'catalyticActivity']",
    "css" : {
      "width" : 110.0
    }
  }, {
    "selector" : "node[bel_function_type = 'reaction']",
    "css" : {
      "width" : 150.0
    }
  }, {
    "selector" : "node[bel_function_type = 'pathology']",
    "css" : {
      "width" : 125.0
    }
  }, {
    "selector" : "node[bel_function_type = 'gtpBoundActivity']",
    "css" : {
      "width" : 110.0
    }
  }, {
    "selector" : "node[bel_function_type = 'translocation']",
    "css" : {
      "width" : 110.0
    }
  }, {
    "selector" : "node[bel_function_type = 'kinaseActivity']",
    "css" : {
      "width" : 110.0
    }
  }, {
    "selector" : "node[bel_function_type = 'proteinAbundance']",
    "css" : {
      "width" : 75.0
    }
  }, {
    "selector" : "node[bel_function_type = 'peptidaseActivity']",
    "css" : {
      "width" : 110.0
    }
  }, {
    "selector" : "node[bel_function_type = 'abundance']",
    "css" : {
      "width" : 75.0
    }
  }, {
    "selector" : "node[bel_function_type = 'degradation']",
    "css" : {
      "width" : 110.0
    }
  }, {
    "selector" : "node[bel_function_type = 'compositeAbundance']",
    "css" : {
      "width" : 150.0
    }
  }, {
    "selector" : "node[bel_function_type = 'molecularActivity']",
    "css" : {
      "width" : 110.0
    }
  }, {
    "selector" : "node[bel_function_type = 'rnaAbundance']",
    "css" : {
      "width" : 75.0
    }
  }, {
    "selector" : "node[bel_function_type = 'biologicalProcess']",
    "css" : {
      "width" : 125.0
    }
  }, {
    "selector" : "node[bel_function_type = 'microRNAAbundance']",
    "css" : {
      "width" : 75.0
    }
  }, {
    "selector" : "node[bel_function_type = 'geneAbundance']",
    "css" : {
      "width" : 75.0
    }
  }, {
    "selector" : "node[bel_function_type = 'ribosylationActivity']",
    "css" : {
      "width" : 110.0
    }
  }, {
    "selector" : "node[bel_function_type = 'cellSurfaceExpression']",
    "css" : {
      "width" : 110.0
    }
  }, {
    "selector" : "node[bel_function_type = 'chaperoneActivity']",
    "css" : {
      "width" : 110.0
    }
  }, {
    "selector" : "node[bel_function_type = 'transcriptionalActivity']",
    "css" : {
      "width" : 110.0
    }
  }, {
    "selector" : "node[bel_function_type = 'phosphataseActivity']",
    "css" : {
      "width" : 110.0
    }
  }, {
    "selector" : "node[bel_function_type = 'complexAbundance']",
    "css" : {
      "width" : 150.0
    }
  }, {
    "selector" : "node[linked]",
    "css" : {
      "background-opacity" : 1.0
    }
  }, {
    "selector" : "node[!linked]",
    "css" : {
      "background-opacity" : 0.39215686274509803
    }
  }, {
    "selector" : "node[bel_function_type = 'transcriptionalActivity']",
    "css" : {
      "width" : 100.0,
      "height" : 100.0
    }
  }, {
    "selector" : "node[linked]",
    "css" : {
      "border-opacity" : 1.0
    }
  }, {
    "selector" : "node[!linked]",
    "css" : {
      "border-opacity" : 0.39215686274509803
    }
  }, {
    "selector" : "node[linked]",
    "css" : {
      "text-opacity" : 1.0
    }
  }, {
    "selector" : "node[!linked]",
    "css" : {
      "text-opacity" : 0.39215686274509803
    }
  }, {
    "selector" : "node[bel_function_type = 'transportActivity']",
    "css" : {
      "background-color" : "rgb(100,100,255)"
    }
  }, {
    "selector" : "node[bel_function_type = 'cellSecretion']",
    "css" : {
      "background-color" : "rgb(200,200,255)"
    }
  }, {
    "selector" : "node[bel_function_type = 'catalyticActivity']",
    "css" : {
      "background-color" : "rgb(100,100,255)"
    }
  }, {
    "selector" : "node[bel_function_type = 'reaction']",
    "css" : {
      "background-color" : "rgb(150,150,255)"
    }
  }, {
    "selector" : "node[bel_function_type = 'pathology']",
    "css" : {
      "background-color" : "rgb(255,50,100)"
    }
  }, {
    "selector" : "node[bel_function_type = 'gtpBoundActivity']",
    "css" : {
      "background-color" : "rgb(100,100,255)"
    }
  }, {
    "selector" : "node[bel_function_type = 'translocation']",
    "css" : {
      "background-color" : "rgb(200,200,255)"
    }
  }, {
    "selector" : "node[bel_function_type = 'kinaseActivity']",
    "css" : {
      "background-color" : "rgb(100,100,255)"
    }
  }, {
    "selector" : "node[bel_function_type = 'proteinAbundance']",
    "css" : {
      "background-color" : "rgb(100,255,255)"
    }
  }, {
    "selector" : "node[bel_function_type = 'peptidaseActivity']",
    "css" : {
      "background-color" : "rgb(100,100,255)"
    }
  }, {
    "selector" : "node[bel_function_type = 'abundance']",
    "css" : {
      "background-color" : "rgb(100,200,255)"
    }
  }, {
    "selector" : "node[bel_function_type = 'degradation']",
    "css" : {
      "background-color" : "rgb(255,50,100)"
    }
  }, {
    "selector" : "node[bel_function_type = 'compositeAbundance']",
    "css" : {
      "background-color" : "rgb(200,255,255)"
    }
  }, {
    "selector" : "node[bel_function_type = 'molecularActivity']",
    "css" : {
      "background-color" : "rgb(100,100,255)"
    }
  }, {
    "selector" : "node[bel_function_type = 'rnaAbundance']",
    "css" : {
      "background-color" : "rgb(100,255,100)"
    }
  }, {
    "selector" : "node[bel_function_type = 'biologicalProcess']",
    "css" : {
      "background-color" : "rgb(255,100,255)"
    }
  }, {
    "selector" : "node[bel_function_type = 'microRNAAbundance']",
    "css" : {
      "background-color" : "rgb(150,255,150)"
    }
  }, {
    "selector" : "node[bel_function_type = 'geneAbundance']",
    "css" : {
      "background-color" : "rgb(200,255,200)"
    }
  }, {
    "selector" : "node[bel_function_type = 'ribosylationActivity']",
    "css" : {
      "background-color" : "rgb(100,100,255)"
    }
  }, {
    "selector" : "node[bel_function_type = 'cellSurfaceExpression']",
    "css" : {
      "background-color" : "rgb(200,200,255)"
    }
  }, {
    "selector" : "node[bel_function_type = 'chaperoneActivity']",
    "css" : {
      "background-color" : "rgb(100,100,255)"
    }
  }, {
    "selector" : "node[bel_function_type = 'transcriptionalActivity']",
    "css" : {
      "background-color" : "rgb(100,100,255)"
    }
  }, {
    "selector" : "node[bel_function_type = 'phosphataseActivity']",
    "css" : {
      "background-color" : "rgb(100,100,255)"
    }
  }, {
    "selector" : "node[bel_function_type = 'complexAbundance']",
    "css" : {
      "background-color" : "rgb(100,150,255)"
    }
  }, {
    "selector" : "node[ id = '4663' ]",
    "css" : {
      "text-valign" : "center"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "color" : "rgb(0,0,0)",
      "font-size" : 10,
      "text-opacity" : 1.0,
      "source-arrow-shape" : "none",
      "line-style" : "solid",
      "target-arrow-color" : "rgb(0,0,0)",
      "source-arrow-color" : "rgb(0,0,0)",
      "width" : 1.0,
      "font-family" : "Dialog.plain",
      "font-weight" : "normal",
      "line-color" : "rgb(0,0,0)",
      "opacity" : 1.0,
      "content" : "",
      "target-arrow-shape" : "none"
    }
  }, {
    "selector" : "edge[interaction = 'transcribedTo']",
    "css" : {
      "line-color" : "rgb(153,153,153)",
      "target-arrow-color" : "rgb(153,153,153)",
      "source-arrow-color" : "rgb(153,153,153)"
    }
  }, {
    "selector" : "edge[interaction = 'translatedTo']",
    "css" : {
      "line-color" : "rgb(153,153,153)",
      "target-arrow-color" : "rgb(153,153,153)",
      "source-arrow-color" : "rgb(153,153,153)"
    }
  }, {
    "selector" : "edge[interaction = 'hasProduct']",
    "css" : {
      "line-color" : "rgb(153,153,153)",
      "target-arrow-color" : "rgb(153,153,153)",
      "source-arrow-color" : "rgb(153,153,153)"
    }
  }, {
    "selector" : "edge[interaction = 'reactantIn']",
    "css" : {
      "line-color" : "rgb(153,153,153)",
      "target-arrow-color" : "rgb(153,153,153)",
      "source-arrow-color" : "rgb(153,153,153)"
    }
  }, {
    "selector" : "edge[interaction = 'subProcessOf']",
    "css" : {
      "line-color" : "rgb(153,153,153)",
      "target-arrow-color" : "rgb(153,153,153)",
      "source-arrow-color" : "rgb(153,153,153)"
    }
  }, {
    "selector" : "edge[interaction = 'hasMember']",
    "css" : {
      "line-color" : "rgb(153,153,153)",
      "target-arrow-color" : "rgb(153,153,153)",
      "source-arrow-color" : "rgb(153,153,153)"
    }
  }, {
    "selector" : "edge[interaction = 'orthologous']",
    "css" : {
      "line-color" : "rgb(153,153,153)",
      "target-arrow-color" : "rgb(153,153,153)",
      "source-arrow-color" : "rgb(153,153,153)"
    }
  }, {
    "selector" : "edge[interaction = 'actsIn']",
    "css" : {
      "line-color" : "rgb(153,153,153)",
      "target-arrow-color" : "rgb(153,153,153)",
      "source-arrow-color" : "rgb(153,153,153)"
    }
  }, {
    "selector" : "edge[interaction = 'includes']",
    "css" : {
      "line-color" : "rgb(153,153,153)",
      "target-arrow-color" : "rgb(153,153,153)",
      "source-arrow-color" : "rgb(153,153,153)"
    }
  }, {
    "selector" : "edge[interaction = 'hasVariant']",
    "css" : {
      "line-color" : "rgb(153,153,153)",
      "target-arrow-color" : "rgb(153,153,153)",
      "source-arrow-color" : "rgb(153,153,153)"
    }
  }, {
    "selector" : "edge[interaction = 'hasComponent']",
    "css" : {
      "line-color" : "rgb(153,153,153)",
      "target-arrow-color" : "rgb(153,153,153)",
      "source-arrow-color" : "rgb(153,153,153)"
    }
  }, {
    "selector" : "edge[interaction = 'hasModification']",
    "css" : {
      "line-color" : "rgb(153,153,153)",
      "target-arrow-color" : "rgb(153,153,153)",
      "source-arrow-color" : "rgb(153,153,153)"
    }
  }, {
    "selector" : "edge[interaction = 'subProcess_OF']",
    "css" : {
      "line-color" : "rgb(153,153,153)",
      "target-arrow-color" : "rgb(153,153,153)",
      "source-arrow-color" : "rgb(153,153,153)"
    }
  }, {
    "selector" : "edge[interaction = 'isA']",
    "css" : {
      "line-color" : "rgb(153,153,153)",
      "target-arrow-color" : "rgb(153,153,153)",
      "source-arrow-color" : "rgb(153,153,153)"
    }
  }, {
    "selector" : "edge[interaction = 'translocates']",
    "css" : {
      "line-color" : "rgb(153,153,153)",
      "target-arrow-color" : "rgb(153,153,153)",
      "source-arrow-color" : "rgb(153,153,153)"
    }
  }, {
    "selector" : "edge[interaction = 'transcribedTo']",
    "css" : {
      "line-color" : "rgb(153,153,153)"
    }
  }, {
    "selector" : "edge[interaction = 'translatedTo']",
    "css" : {
      "line-color" : "rgb(153,153,153)"
    }
  }, {
    "selector" : "edge[interaction = 'hasProduct']",
    "css" : {
      "line-color" : "rgb(153,153,153)"
    }
  }, {
    "selector" : "edge[interaction = 'reactantIn']",
    "css" : {
      "line-color" : "rgb(153,153,153)"
    }
  }, {
    "selector" : "edge[interaction = 'subProcessOf']",
    "css" : {
      "line-color" : "rgb(153,153,153)"
    }
  }, {
    "selector" : "edge[interaction = 'hasMember']",
    "css" : {
      "line-color" : "rgb(153,153,153)"
    }
  }, {
    "selector" : "edge[interaction = 'orthologous']",
    "css" : {
      "line-color" : "rgb(153,153,153)"
    }
  }, {
    "selector" : "edge[interaction = 'actsIn']",
    "css" : {
      "line-color" : "rgb(153,153,153)"
    }
  }, {
    "selector" : "edge[interaction = 'includes']",
    "css" : {
      "line-color" : "rgb(153,153,153)"
    }
  }, {
    "selector" : "edge[interaction = 'hasVariant']",
    "css" : {
      "line-color" : "rgb(153,153,153)"
    }
  }, {
    "selector" : "edge[interaction = 'hasComponent']",
    "css" : {
      "line-color" : "rgb(153,153,153)"
    }
  }, {
    "selector" : "edge[interaction = 'hasModification']",
    "css" : {
      "line-color" : "rgb(153,153,153)"
    }
  }, {
    "selector" : "edge[interaction = 'subProcess_OF']",
    "css" : {
      "line-color" : "rgb(153,153,153)"
    }
  }, {
    "selector" : "edge[interaction = 'isA']",
    "css" : {
      "line-color" : "rgb(153,153,153)"
    }
  }, {
    "selector" : "edge[interaction = 'translocates']",
    "css" : {
      "line-color" : "rgb(153,153,153)"
    }
  }, {
    "selector" : "edge[interaction = 'positiveCorrelation']",
    "css" : {
      "source-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'hasMember']",
    "css" : {
      "source-arrow-shape" : "none"
    }
  }, {
    "selector" : "edge[interaction = 'orthologous']",
    "css" : {
      "source-arrow-shape" : "none"
    }
  }, {
    "selector" : "edge[interaction = 'association']",
    "css" : {
      "source-arrow-shape" : "none"
    }
  }, {
    "selector" : "edge[interaction = 'negativeCorrelation']",
    "css" : {
      "source-arrow-shape" : "circle"
    }
  }, {
    "selector" : "edge[linked]",
    "css" : {
      "opacity" : 1.0
    }
  }, {
    "selector" : "edge[!linked]",
    "css" : {
      "opacity" : 0.19607843137254902
    }
  }, {
    "selector" : "edge[interaction = 'transcribedTo']",
    "css" : {
      "line-style" : "dashed"
    }
  }, {
    "selector" : "edge[interaction = 'causesNoChange']",
    "css" : {
      "line-style" : "dashed"
    }
  }, {
    "selector" : "edge[interaction = 'translatedTo']",
    "css" : {
      "line-style" : "dashed"
    }
  }, {
    "selector" : "edge[interaction = 'hasProduct']",
    "css" : {
      "line-style" : "dashed"
    }
  }, {
    "selector" : "edge[interaction = 'positiveCorrelation']",
    "css" : {
      "line-style" : "dotted"
    }
  }, {
    "selector" : "edge[interaction = 'reactantIn']",
    "css" : {
      "line-style" : "dashed"
    }
  }, {
    "selector" : "edge[interaction = 'subProcessOf']",
    "css" : {
      "line-style" : "dashed"
    }
  }, {
    "selector" : "edge[interaction = 'hasMember']",
    "css" : {
      "line-style" : "dashed"
    }
  }, {
    "selector" : "edge[interaction = 'orthologous']",
    "css" : {
      "line-style" : "dashed"
    }
  }, {
    "selector" : "edge[interaction = 'association']",
    "css" : {
      "line-style" : "dotted"
    }
  }, {
    "selector" : "edge[interaction = 'actsIn']",
    "css" : {
      "line-style" : "dashed"
    }
  }, {
    "selector" : "edge[interaction = 'includes']",
    "css" : {
      "line-style" : "dashed"
    }
  }, {
    "selector" : "edge[interaction = 'hasVariant']",
    "css" : {
      "line-style" : "dashed"
    }
  }, {
    "selector" : "edge[interaction = 'directlyDecreases']",
    "css" : {
      "line-style" : "solid"
    }
  }, {
    "selector" : "edge[interaction = 'negativeCorrelation']",
    "css" : {
      "line-style" : "dotted"
    }
  }, {
    "selector" : "edge[interaction = 'directlyIncreases']",
    "css" : {
      "line-style" : "solid"
    }
  }, {
    "selector" : "edge[interaction = 'prognosticBiomarkerFor']",
    "css" : {
      "line-style" : "dotted"
    }
  }, {
    "selector" : "edge[interaction = 'hasComponent']",
    "css" : {
      "line-style" : "dashed"
    }
  }, {
    "selector" : "edge[interaction = 'hasModification']",
    "css" : {
      "line-style" : "dashed"
    }
  }, {
    "selector" : "edge[interaction = 'subProcess_OF']",
    "css" : {
      "line-style" : "dashed"
    }
  }, {
    "selector" : "edge[interaction = 'isA']",
    "css" : {
      "line-style" : "dashed"
    }
  }, {
    "selector" : "edge[interaction = 'rateLimitingStepOf']",
    "css" : {
      "line-style" : "dashed"
    }
  }, {
    "selector" : "edge[interaction = 'biomarkerFor']",
    "css" : {
      "line-style" : "dotted"
    }
  }, {
    "selector" : "edge[interaction = 'translocates']",
    "css" : {
      "line-style" : "dashed"
    }
  }, {
    "selector" : "edge[interaction = 'translatedTo']",
    "css" : {
      "width" : 3.0
    }
  }, {
    "selector" : "edge[interaction = 'hasProduct']",
    "css" : {
      "width" : 3.0
    }
  }, {
    "selector" : "edge[interaction = 'reactantIn']",
    "css" : {
      "width" : 3.0
    }
  }, {
    "selector" : "edge[interaction = 'orthologous']",
    "css" : {
      "width" : 3.0
    }
  }, {
    "selector" : "edge[interaction = 'actsIn']",
    "css" : {
      "width" : 3.0
    }
  }, {
    "selector" : "edge[interaction = 'association']",
    "css" : {
      "width" : 1.0
    }
  }, {
    "selector" : "edge[interaction = 'hasVariant']",
    "css" : {
      "width" : 3.0
    }
  }, {
    "selector" : "edge[interaction = 'directlyIncreases']",
    "css" : {
      "width" : 3.0
    }
  }, {
    "selector" : "edge[interaction = 'increases']",
    "css" : {
      "width" : 1.0
    }
  }, {
    "selector" : "edge[interaction = 'prognosticBiomarkerFor']",
    "css" : {
      "width" : 1.0
    }
  }, {
    "selector" : "edge[interaction = 'hasComponent']",
    "css" : {
      "width" : 3.0
    }
  }, {
    "selector" : "edge[interaction = 'hasModification']",
    "css" : {
      "width" : 3.0
    }
  }, {
    "selector" : "edge[interaction = 'subProcess_OF']",
    "css" : {
      "width" : 3.0
    }
  }, {
    "selector" : "edge[interaction = 'isA']",
    "css" : {
      "width" : 3.0
    }
  }, {
    "selector" : "edge[interaction = 'rateLimitingStepOf']",
    "css" : {
      "width" : 3.0
    }
  }, {
    "selector" : "edge[interaction = 'biomarkerFor']",
    "css" : {
      "width" : 1.0
    }
  }, {
    "selector" : "edge[interaction = 'translocates']",
    "css" : {
      "width" : 3.0
    }
  }, {
    "selector" : "edge[interaction = 'transcribedTo']",
    "css" : {
      "width" : 3.0
    }
  }, {
    "selector" : "edge[interaction = 'causesNoChange']",
    "css" : {
      "width" : 3.0
    }
  }, {
    "selector" : "edge[interaction = 'positiveCorrelation']",
    "css" : {
      "width" : 1.0
    }
  }, {
    "selector" : "edge[interaction = 'subProcessOf']",
    "css" : {
      "width" : 3.0
    }
  }, {
    "selector" : "edge[interaction = 'hasMember']",
    "css" : {
      "width" : 3.0
    }
  }, {
    "selector" : "edge[interaction = 'includes']",
    "css" : {
      "width" : 3.0
    }
  }, {
    "selector" : "edge[interaction = 'directlyDecreases']",
    "css" : {
      "width" : 3.0
    }
  }, {
    "selector" : "edge[interaction = 'negativeCorrelation']",
    "css" : {
      "width" : 1.0
    }
  }, {
    "selector" : "edge[interaction = 'decreases']",
    "css" : {
      "width" : 1.0
    }
  }, {
    "selector" : "edge[interaction = 'translatedTo']",
    "css" : {
      "target-arrow-shape" : "diamond"
    }
  }, {
    "selector" : "edge[interaction = 'hasProduct']",
    "css" : {
      "target-arrow-shape" : "diamond"
    }
  }, {
    "selector" : "edge[interaction = 'reactantIn']",
    "css" : {
      "target-arrow-shape" : "diamond"
    }
  }, {
    "selector" : "edge[interaction = 'orthologous']",
    "css" : {
      "target-arrow-shape" : "none"
    }
  }, {
    "selector" : "edge[interaction = 'actsIn']",
    "css" : {
      "target-arrow-shape" : "diamond"
    }
  }, {
    "selector" : "edge[interaction = 'association']",
    "css" : {
      "target-arrow-shape" : "none"
    }
  }, {
    "selector" : "edge[interaction = 'hasVariant']",
    "css" : {
      "target-arrow-shape" : "diamond"
    }
  }, {
    "selector" : "edge[interaction = 'directlyIncreases']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'unknown']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'increases']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'prognosticBiomarkerFor']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'hasComponent']",
    "css" : {
      "target-arrow-shape" : "diamond"
    }
  }, {
    "selector" : "edge[interaction = 'hasModification']",
    "css" : {
      "target-arrow-shape" : "diamond"
    }
  }, {
    "selector" : "edge[interaction = 'subProcess_OF']",
    "css" : {
      "target-arrow-shape" : "diamond"
    }
  }, {
    "selector" : "edge[interaction = 'isA']",
    "css" : {
      "target-arrow-shape" : "diamond"
    }
  }, {
    "selector" : "edge[interaction = 'rateLimitingStepOf']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'biomarkerFor']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'translocates']",
    "css" : {
      "target-arrow-shape" : "diamond"
    }
  }, {
    "selector" : "edge[interaction = 'analogous']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'transcribedTo']",
    "css" : {
      "target-arrow-shape" : "diamond"
    }
  }, {
    "selector" : "edge[interaction = 'positiveCorrelation']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'subProcessOf']",
    "css" : {
      "target-arrow-shape" : "diamond"
    }
  }, {
    "selector" : "edge[interaction = 'hasMember']",
    "css" : {
      "target-arrow-shape" : "diamond"
    }
  }, {
    "selector" : "edge[interaction = 'includes']",
    "css" : {
      "target-arrow-shape" : "diamond"
    }
  }, {
    "selector" : "edge[interaction = 'directlyDecreases']",
    "css" : {
      "target-arrow-shape" : "circle"
    }
  }, {
    "selector" : "edge[interaction = 'negativeCorrelation']",
    "css" : {
      "target-arrow-shape" : "circle"
    }
  }, {
    "selector" : "edge[interaction = 'decreases']",
    "css" : {
      "target-arrow-shape" : "circle"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.9.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Nested Network Style",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "border-color" : "rgb(0,153,0)",
      "color" : "rgb(0,0,0)",
      "width" : 40.0,
      "font-family" : "Dialog.plain",
      "font-weight" : "normal",
      "text-valign" : "center",
      "text-halign" : "center",
      "font-size" : 13,
      "height" : 40.0,
      "border-opacity" : 0.7450980392156863,
      "text-opacity" : 1.0,
      "border-width" : 2.0,
      "shape" : "ellipse",
      "background-opacity" : 0.5882352941176471,
      "background-color" : "rgb(153,255,153)",
      "content" : "data(name)"
    }
  }, {
    "selector" : "node[has_nested_network]",
    "css" : {
      "border-color" : "rgb(0,102,204)"
    }
  }, {
    "selector" : "node[has_nested_network]",
    "css" : {
      "width" : 60.0,
      "height" : 60.0
    }
  }, {
    "selector" : "node[has_nested_network]",
    "css" : {
      "color" : "rgb(0,102,204)"
    }
  }, {
    "selector" : "node[has_nested_network]",
    "css" : {
      "border-width" : 5.0
    }
  }, {
    "selector" : "node[has_nested_network]",
    "css" : {
      "shape" : "rectangle"
    }
  }, {
    "selector" : "node[has_nested_network]",
    "css" : {
      "text-valign" : "bottom"
    }
  }, {
    "selector" : "node[has_nested_network]",
    "css" : {
      "background-color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "node[ id = '4663' ]",
    "css" : {
      "text-valign" : "center"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "color" : "rgb(0,0,0)",
      "font-size" : 10,
      "text-opacity" : 1.0,
      "source-arrow-shape" : "none",
      "line-style" : "solid",
      "target-arrow-color" : "rgb(0,0,0)",
      "source-arrow-color" : "rgb(0,0,0)",
      "width" : 2.0,
      "font-family" : "Dialog.plain",
      "font-weight" : "normal",
      "line-color" : "rgb(51,51,51)",
      "opacity" : 1.0,
      "content" : "",
      "target-arrow-shape" : "none"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
} ]