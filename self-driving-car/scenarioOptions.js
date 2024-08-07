const defaultSetting={
   type: "AI", 
   width: 30,
   height: 50, 
   maxSpeed: 8,
   color: "blue",
   acceleration: 0.08,
   friction: 0.04,
   sensorOptions: {
      rayCount: 1,
      rayLength: 350,
      raySpread: 2.1, 
      rayOffset: 0, 
   },
   brainOptions: {
      extraInputs: [], 
      hiddenLayerNodeCounts: [],
      outputs: ["🠉"],
   },
   fuzzy:true,
   simplified:false,
   showKill:false,
   showLock:false,
   showLoad:false,
   showDiscard:false,
   mouseEdit:false,
   reshapeNN:true,
   showGenetic:false,
   showDecisionBoundary:false,
   useHardCodedBrain:true,
   stopForFittness:false,
   pixelControl:false,
   decFilter:false,
   showCheckboxes:false,
   showWorld:false,
   removeAllSegments:false,
   optimizeDecisionBoundary:true,
   rightHandCar:false,
   showShortestPath:false,
   showSettings:false,
}

const scenarioOptions={
   session_1_A:{
      ...defaultSetting,
      worldId:"T1_A"
   },
   session_1_B:{
      ...defaultSetting,
      worldId:"T1_B"
   },
   session_1_C:{
      ...defaultSetting,
      worldId:"T1_AB"
   },
   session_1_D:{
      ...defaultSetting,
      brainOptions: {
         extraInputs: [], 
         hiddenLayerNodeCounts: [],
         outputs: ["🠉", "🠋"],
      },
      worldId:"straight"
   },
   session_1_E:{
      ...defaultSetting,
      brainOptions: {
         extraInputs: [],
         hiddenLayerNodeCounts: [],
         outputs: ["🠉", "🠈", "🠊"],
      },
      worldId:"circular"
   },
   session_1_F:{
      ...defaultSetting,
      brainOptions: {
         extraInputs: [],
         hiddenLayerNodeCounts: [],
         outputs: ["🠉", "🠈", "🠊"],
      },
      worldId:"L2"
   },
   session_1_G:{
      ...defaultSetting,
      brainOptions: {
         extraInputs: [],
         hiddenLayerNodeCounts: [],
         outputs: ["🠉", "🠈", "🠊"],
      },
      worldId:"L2"
   },
   /////
   fwd: {
      ...defaultSetting,
      worldId:"W_1_B",
      useHardCodedBrain:false,
      //showLoad:true,
      //reshapeNN:true,
   },
   fwd_d: {
      ...defaultSetting,
      worldId:"W_1_B",
      useHardCodedBrain:false,
      showDecisionBoundary:true,
      //reshapeNN:false,
      //showLoad:true,
      //pixelControl:true
   },
   bck: {
      ...defaultSetting,
      worldId:"W_1_B",
      useHardCodedBrain:false,
      showDecisionBoundary:true,
      brainOptions: {
         extraInputs: [], 
         hiddenLayerNodeCounts: [],
         outputs: ["🠉", "🠋"],
      },
      //reshapeNN:false,
      //showLoad:true,
      //pixelControl:true
   },
   fwd_g: {
      ...defaultSetting,
      worldId:"W_1_B",
      useHardCodedBrain:false,
      showDecisionBoundary:true,
      //reshapeNN:false,
      showGenetic:true,
      //showLoad:true,
      //pixelControl:true
   },
   fwd_b: {
      ...defaultSetting,
      worldId:"W_1_B",
      useHardCodedBrain:false,
      showDecisionBoundary:true,
      //reshapeNN:false,
      showGenetic:true,
      height:90,
      //showLoad:true,
      //pixelControl:true
   },
   fwd_2: {
      ...defaultSetting,
      worldId:"W_1_AB",
      useHardCodedBrain:false,
      showDecisionBoundary:true,
      //reshapeNN:false,
      showGenetic:true,
      //showLoad:true,
      //pixelControl:true
   },
   spd_2: {
      ...defaultSetting,
      worldId:"W_1_AB",
      useHardCodedBrain:false,
      showDecisionBoundary:true,
      //reshapeNN:false,
      showGenetic:true,
      //showLoad:true,
      pixelControl:true,
      brainOptions: {
         extraInputs: ["⏱️"], 
         hiddenLayerNodeCounts: [],
         outputs: ["🠉"],
      },
   },
   spd_h: {
      ...defaultSetting,
      worldId:"W_1_AB",
      useHardCodedBrain:false,
      showDecisionBoundary:true,
      reshapeNN:false,
      showGenetic:true,
      //showLoad:true,
      pixelControl:true,
      mouseEdit:true,
      simplified:true,
      brainOptions: {
         extraInputs: ["⏱️"], 
         hiddenLayerNodeCounts: [],
         outputs: ["🠉"],
      },
   },
   spd_3: {
      ...defaultSetting,
      worldId:"W_1_ABC",
      useHardCodedBrain:false,
      showDecisionBoundary:true,
      reshapeNN:false,
      showGenetic:true,
      //showLoad:true,
      pixelControl:true,
      mouseEdit:true,
      simplified:true,
      stopForFittness:true,
      brainOptions: {
         extraInputs: ["⏱️"], 
         hiddenLayerNodeCounts: [],
         outputs: ["🠉"],
      },
   },
   rev_3: {
      ...defaultSetting,
      worldId:"W_1_ABC",
      useHardCodedBrain:false,
      showDecisionBoundary:true,
      reshapeNN:false,
      showGenetic:false,
      //showLoad:true,
      pixelControl:true,
      mouseEdit:true,
      stopForFittness:true,
      simplified:true,
      brainOptions: {
         extraInputs: ["⏱️"], 
         hiddenLayerNodeCounts: [],
         outputs: ["🠉", "🠋"],
      },
   },
   rev_h: {
      ...defaultSetting,
      worldId:"W_1_B",
      useHardCodedBrain:false,
      showDecisionBoundary:true,
      reshapeNN:false,
      showGenetic:false,
      //showLoad:true,
      pixelControl:true,
      mouseEdit:true,
      simplified:true, 
      brainOptions: {
         extraInputs: ["⏱️"], 
         hiddenLayerNodeCounts: [],
         outputs: ["🠉", "🠋"],
      },
   },
   str_0: {
      ...defaultSetting,
      worldId:"W_2_B",
      useHardCodedBrain:false,
      showDecisionBoundary:true,
      reshapeNN:false,
      //showLoad:true,
      pixelControl:true,
      mouseEdit:true,
      simplified:true, 
      overwriteSensor:true,
      sensorOptions: {
         rayCount: 2,
         rayLength: 350,
         raySpread: 1.0, 
         rayOffset: -0.5, 
      },
      brainOptions: {
         extraInputs: ["⏱️"], 
         hiddenLayerNodeCounts: [],
         outputs: ["🠉", "🠈", "🠊", "🠋"],
      },
      decFilter:true,
      showCheckboxes:true,
      removeAllSegments:true,
      optimizeDecisionBoundary:false
   },
   str_1: {
      ...defaultSetting,
      worldId:"W_3_A",//worldId:"W_3_B",
      useHardCodedBrain:false,
      showDecisionBoundary:true,
      reshapeNN:false,
      //showLoad:true,
      pixelControl:true,
      mouseEdit:true,
      simplified:true, 
      overwriteSensor:true,
      sensorOptions: {
         rayCount: 2,
         rayLength: 350,
         raySpread: 0.8, 
         rayOffset: -0.4, 
      },
      brainOptions: {
         extraInputs: ["⏱️"], 
         hiddenLayerNodeCounts: [],
         outputs: ["🠉", "🠈", "🠊", "🠋"],
      },
      decFilter:true,
      showCheckboxes:true,
      optimizeDecisionBoundary:false
   },/*
   str_2: {
      ...defaultSetting,
      worldId:"W_3_B",//worldId:"W_3_B",
      useHardCodedBrain:false,
      showDecisionBoundary:true,
      reshapeNN:false,
      //showLoad:true,
      pixelControl:true,
      mouseEdit:true,
      simplified:true, 
      overwriteSensor:true,
      sensorOptions: {
         rayCount: 2,
         rayLength: 350,
         raySpread: 0.8, 
         rayOffset: -0.4, 
      },
      brainOptions: {
         extraInputs: ["⏱️"], 
         hiddenLayerNodeCounts: [],
         outputs: ["🠉", "🠈", "🠊", "🠋"],
      },
      decFilter:true,
      showCheckboxes:true,
      optimizeDecisionBoundary:false
   },*/
   str_2: {
      ...defaultSetting,
      worldId:"W_1_B",//worldId:"W_3_B",
      useHardCodedBrain:false,
      showDecisionBoundary:true,
      reshapeNN:false,
      //showLoad:true,
      pixelControl:true,
      mouseEdit:true,
      simplified:true, 
      overwriteSensor:true,
      sensorOptions: {
         rayCount: 2,
         rayLength: 350,
         raySpread: 0.8, 
         rayOffset: -0.4, 
      },
      brainOptions: {
         extraInputs: ["⏱️"], 
         hiddenLayerNodeCounts: [],
         outputs: ["🠉", "🠈", "🠊", "🠋"],
      },
      decFilter:true,
      showLoad:true,
      showWorld:true,
      showCheckboxes:true,
      optimizeDecisionBoundary:false
   },
   str_3: {
      ...defaultSetting,
      worldId:"W_1_B",//worldId:"W_3_B",
      useHardCodedBrain:false,
      showDecisionBoundary:true,
      reshapeNN:true,
      showGenetic:true,
      //showLoad:true,
      pixelControl:true,
      mouseEdit:true,
      simplified:true, 
      overwriteSensor:true,
      sensorOptions: {
         rayCount: 2,
         rayLength: 350,
         raySpread: 0.8, 
         rayOffset: -0.4, 
      },
      brainOptions: {
         extraInputs: ["⏱️"], 
         hiddenLayerNodeCounts: [],
         outputs: ["🠉", "🠈", "🠊", "🠋"],
      },
      decFilter:true,   
      showCheckboxes:true,
      optimizeDecisionBoundary:false
   },
   mrk: {
      ...defaultSetting,
      worldId:"MRK_1",//worldId:"W_3_B",
      useHardCodedBrain:false,
      showDecisionBoundary:true,
      reshapeNN:false,
      //showLoad:true,
      pixelControl:true,
      mouseEdit:true,
      simplified:true, 
      overwriteSensor:true,
      sensorOptions: {
         rayCount: 2,
         rayLength: 350,
         raySpread: 0.8, 
         rayOffset: -0.4, 
      },
      brainOptions: {
         extraInputs: ["⏱️","🛑","🚦"],
         hiddenLayerNodeCounts: [],
         outputs: ["🠉", "🠈", "🠊", "🠋"],
      },
      decFilter:true,
      //showLoad:true,
      //showLoad:true,
      showCheckboxes:true,
      removeAllSegments:true,
      optimizeDecisionBoundary:false,
      //rightHandCar:true,
      //showDiscard:true,
      showWorld:true,
   },
   tgt_0: {
      ...defaultSetting,
      worldId:"W_4_B",//worldId:"W_3_B",
      useHardCodedBrain:false,
      showDecisionBoundary:true,
      reshapeNN:false,
      //showLoad:true,
      pixelControl:true,
      mouseEdit:true,
      simplified:true, 
      overwriteSensor:true,
      sensorOptions: {
         rayCount: 3,
         rayLength: 350,
         raySpread: 1.8, 
         rayOffset: 0, 
      },
      brainOptions: {
         extraInputs: ["⏱️","🎯"],
         hiddenLayerNodeCounts: [],
         outputs: ["🠉", "🠈", "🠊", "🠋"],
      },
      decFilter:true,   
      showCheckboxes:true,
      removeAllSegments:true,
      optimizeDecisionBoundary:false
   },
   tgt_1: {
      ...defaultSetting,
      worldId:"W_4_C",//worldId:"W_3_B",
      useHardCodedBrain:false,
      showDecisionBoundary:true,
      reshapeNN:false,
      //showLoad:true,
      pixelControl:true,
      mouseEdit:true,
      simplified:true, 
      overwriteSensor:true,
      sensorOptions: {
         rayCount: 3,
         rayLength: 350,
         raySpread: 1.8, 
         rayOffset: 0, 
      },
      brainOptions: {
         extraInputs: ["⏱️","🎯"],
         hiddenLayerNodeCounts: [],
         outputs: ["🠉", "🠈", "🠊", "🠋"],
      },
      decFilter:true,
      showCheckboxes:true,
      optimizeDecisionBoundary:false
   },
   tgt_2: {
      ...defaultSetting,
      worldId:"W_4_D",//worldId:"W_3_B",
      useHardCodedBrain:false,
      showDecisionBoundary:true,
      reshapeNN:false,
      //showLoad:true,
      pixelControl:true,
      mouseEdit:true,
      simplified:true, 
      overwriteSensor:true,
      sensorOptions: {
         rayCount: 3,
         rayLength: 350,
         raySpread: 1.8, 
         rayOffset: 0, 
      },
      brainOptions: {
         extraInputs: ["⏱️","🎯"],
         hiddenLayerNodeCounts: [],
         outputs: ["🠉", "🠈", "🠊", "🠋"],
      },
      decFilter:true,
      showCheckboxes:true,
      optimizeDecisionBoundary:false
   },
   sp: {
      ...defaultSetting,
      worldId:"W_4_B",//worldId:"W_3_B",
      useHardCodedBrain:true,
      showDecisionBoundary:true,
      reshapeNN:false,
      //showLoad:true,
      pixelControl:true,
      mouseEdit:true,
      simplified:true, 
      overwriteSensor:true,
      sensorOptions: {
         rayCount: 3,
         rayLength: 350,
         raySpread: 1.8, 
         rayOffset: 0, 
      },
      brainOptions: {
         extraInputs: ["⏱️","🎯"],
         hiddenLayerNodeCounts: [],
         outputs: ["🠉", "🠈", "🠊", "🠋"],
      },
      decFilter:true,
      showCheckboxes:true,
      optimizeDecisionBoundary:false,
      rightHandCar:true,
      showShortestPath:true,
   },
   race_1: {
      ...defaultSetting,
      worldId:"W_race_1",//worldId:"W_3_B",
      showWorld:true,
      showGenetic:true,
      reshapeNN:false,
      //showLoad:true,
      pixelControl:true,
      mouseEdit:true,
      simplified:true, 
      overwriteSensor:true,
      sensorOptions: {
         rayCount: 2,
         rayLength: 350,
         raySpread: 0.8, 
         rayOffset: -0.4, 
      },
      brainOptions: {
         extraInputs: ["⏱️"],
         hiddenLayerNodeCounts: [],
         outputs: ["🠉", "🠈", "🠊", "🠋"],
      },
      decFilter:true,
      showLoad:true,
      showCheckboxes:true,
      optimizeDecisionBoundary:false,
      applyShortestPath:true,
      //showDiscard:true,
      showSettings:true
   },
   race_2: {
      ...defaultSetting,
      worldId:"W_race_2",//worldId:"W_3_B",
      showWorld:true,
      showGenetic:true,
      reshapeNN:false,
      //showLoad:true,
      pixelControl:true,
      mouseEdit:true,
      simplified:true, 
      overwriteSensor:true,
      sensorOptions: {
         rayCount: 2,
         rayLength: 350,
         raySpread: 0.8, 
         rayOffset: -0.4, 
      },
      brainOptions: {
         extraInputs: ["⏱️"],
         hiddenLayerNodeCounts: [],
         outputs: ["🠉", "🠈", "🠊", "🠋"],
      },
      decFilter:true,
      showLoad:true,
      showCheckboxes:true,
      optimizeDecisionBoundary:false,
      applyShortestPath:true,
      //showDiscard:true,
      showSettings:true
   },
   race_3: {
      ...defaultSetting,
      worldId:"W_race_3",//worldId:"W_3_B",
      showWorld:true,
      showGenetic:true,
      reshapeNN:false,
      //showLoad:true,
      pixelControl:true,
      mouseEdit:true,
      simplified:true, 
      overwriteSensor:true,
      sensorOptions: {
         rayCount: 2,
         rayLength: 350,
         raySpread: 0.8, 
         rayOffset: -0.4, 
      },
      brainOptions: {
         extraInputs: ["⏱️"],
         hiddenLayerNodeCounts: [],
         outputs: ["🠉", "🠈", "🠊", "🠋"],
      },
      decFilter:true,
      showLoad:true,
      showCheckboxes:true,
      optimizeDecisionBoundary:false,
      applyShortestPath:true,
      //showDiscard:true,
      showSettings:true
   },
   race_4: {
      ...defaultSetting,
      worldId:"W_race_4",//worldId:"W_3_B",
      showWorld:true,
      showGenetic:true,
      reshapeNN:false,
      //showLoad:true,
      pixelControl:true,
      mouseEdit:true,
      simplified:true, 
      overwriteSensor:true,
      sensorOptions: {
         rayCount: 2,
         rayLength: 350,
         raySpread: 0.8, 
         rayOffset: -0.4, 
      },
      brainOptions: {
         extraInputs: ["⏱️"],
         hiddenLayerNodeCounts: [],
         outputs: ["🠉", "🠈", "🠊", "🠋"],
      },
      decFilter:true,
      showLoad:true,
      showCheckboxes:true,
      optimizeDecisionBoundary:false,
      applyShortestPath:true,
      //showDiscard:true,
      showSettings:true
   },
   race_1_d: {
      ...defaultSetting,
      worldId:"W_race_1",//worldId:"W_3_B",
      showWorld:true,
      showGenetic:true,
      showDecisionBoundary:true,
      reshapeNN:false,
      //showLoad:true,
      pixelControl:true,
      mouseEdit:true,
      simplified:true, 
      overwriteSensor:true,
      sensorOptions: {
         rayCount: 2,
         rayLength: 350,
         raySpread: 0.8, 
         rayOffset: -0.4, 
      },
      brainOptions: {
         extraInputs: ["⏱️"],
         hiddenLayerNodeCounts: [],
         outputs: ["🠉", "🠈", "🠊", "🠋"],
      },
      decFilter:true,
      showLoad:true,
      showCheckboxes:true,
      optimizeDecisionBoundary:false,
      applyShortestPath:true,
      //showDiscard:true,
      showSettings:true
   },
   race_2_d: {
      ...defaultSetting,
      worldId:"W_race_2",//worldId:"W_3_B",
      showWorld:true,
      showGenetic:true,
      showDecisionBoundary:true,
      reshapeNN:false,
      //showLoad:true,
      pixelControl:true,
      mouseEdit:true,
      simplified:true, 
      overwriteSensor:true,
      sensorOptions: {
         rayCount: 2,
         rayLength: 350,
         raySpread: 0.8, 
         rayOffset: -0.4, 
      },
      brainOptions: {
         extraInputs: ["⏱️"],
         hiddenLayerNodeCounts: [],
         outputs: ["🠉", "🠈", "🠊", "🠋"],
      },
      decFilter:true,
      showLoad:true,
      showCheckboxes:true,
      optimizeDecisionBoundary:false,
      applyShortestPath:true,
      //showDiscard:true,
      showSettings:true
   },
   race_3_d: {
      ...defaultSetting,
      worldId:"W_race_3",//worldId:"W_3_B",
      showWorld:true,
      showGenetic:true,
      showDecisionBoundary:true,
      reshapeNN:false,
      //showLoad:true,
      pixelControl:true,
      mouseEdit:true,
      simplified:true, 
      overwriteSensor:true,
      sensorOptions: {
         rayCount: 2,
         rayLength: 350,
         raySpread: 0.8, 
         rayOffset: -0.4, 
      },
      brainOptions: {
         extraInputs: ["⏱️"],
         hiddenLayerNodeCounts: [],
         outputs: ["🠉", "🠈", "🠊", "🠋"],
      },
      decFilter:true,
      showLoad:true,
      showCheckboxes:true,
      optimizeDecisionBoundary:false,
      applyShortestPath:true,
      //showDiscard:true,
      showSettings:true
   },
   race_4_d: {
      ...defaultSetting,
      worldId:"W_race_4",//worldId:"W_3_B",
      showWorld:true,
      showGenetic:true,
      showDecisionBoundary:true,
      reshapeNN:false,
      //showLoad:true,
      pixelControl:true,
      mouseEdit:true,
      simplified:true, 
      overwriteSensor:true,
      sensorOptions: {
         rayCount: 2,
         rayLength: 350,
         raySpread: 0.8, 
         rayOffset: -0.4, 
      },
      brainOptions: {
         extraInputs: ["⏱️"],
         hiddenLayerNodeCounts: [],
         outputs: ["🠉", "🠈", "🠊", "🠋"],
      },
      decFilter:true,
      showLoad:true,
      showCheckboxes:true,
      optimizeDecisionBoundary:false,
      applyShortestPath:true,
      //showDiscard:true,
      showSettings:true
   },
   default:{
      ...defaultSetting,
      showDiscard:true,
      worldId:"W_1_B"
   },
};