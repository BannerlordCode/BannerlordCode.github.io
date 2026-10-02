---
title: "ClimbingMachineDetachment"
description: "Auto-generated class reference for ClimbingMachineDetachment."
---
# ClimbingMachineDetachment

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ClimbingMachineDetachment : IDetachment `
**Base:** IDetachment
**Source:** TaleWorlds.MountAndBlade/ClimbingMachineDetachment.cs

## Overview

Auto-generated stub for `ClimbingMachineDetachment`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### Deactivate
`public void Deactivate()`

### AddAgent
`public void AddAgent(Agent agent,int slotIndex,Agent.AIScriptedFrameFlags customFlags = Agent.AIScriptedFrameFlags.None)`

### AddAgentAtSlotIndex
`public void AddAgentAtSlotIndex(Agent agent,int slotIndex)`

### IsUsedByFormation
`public bool IsUsedByFormation(Formation formation)`

### IsStandingPointAvailableForAgent
`public bool IsStandingPointAvailableForAgent(Agent agent)`

### GetTemplateCostsOfAgent
`public List<float> GetTemplateCostsOfAgent(Agent candidate,List<float> oldValue)`

### GetTemplateWeightOfAgent
`public float GetTemplateWeightOfAgent(Agent candidate)`

### GetWeightOfAgentAtNextSlot
`public float? GetWeightOfAgentAtNextSlot(List<Agent> newAgents,out Agent match)`

### GetWeightOfAgentAtOccupiedSlot
`public float? GetWeightOfAgentAtOccupiedSlot(Agent detachedAgent,List<Agent> newAgents,out Agent match)`

### RemoveAgent
`public void RemoveAgent(Agent agent)`

### GetNumberOfUsableSlots
`public int GetNumberOfUsableSlots()`

### GetAgentFrame
`public WorldFrame? GetAgentFrame(Agent agent)`

### GetWeightOfNextSlot
`public float? GetWeightOfNextSlot(BattleSideEnum side)`

### GetWeightOfOccupiedSlot
`public float GetWeightOfOccupiedSlot(Agent agent)`

### TickClimbingMachines
`public void TickClimbingMachines()`

## See Also

- [Section index](../)
