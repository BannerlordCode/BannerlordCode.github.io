---
title: "ClimbingMachineDetachment"
description: "ClimbingMachineDetachment 的自动生成类参考。"
---
# ClimbingMachineDetachment

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ClimbingMachineDetachment : IDetachment `
**Base:** IDetachment
**Source:** TaleWorlds.MountAndBlade/ClimbingMachineDetachment.cs

## 概述

`ClimbingMachineDetachment` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/ClimbingMachineDetachment.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### Deactivate
`public void Deactivate() `

### AddAgent
`public void AddAgent(Agent agent,int slotIndex,Agent.AIScriptedFrameFlags customFlags = Agent.AIScriptedFrameFlags.None) `

### AddAgentAtSlotIndex
`public void AddAgentAtSlotIndex(Agent agent,int slotIndex) `

### IsUsedByFormation
`public bool IsUsedByFormation(Formation formation) `

### IsStandingPointAvailableForAgent
`public bool IsStandingPointAvailableForAgent(Agent agent) `

### GetTemplateCostsOfAgent
`public List<float> GetTemplateCostsOfAgent(Agent candidate,List<float> oldValue) `

### GetTemplateWeightOfAgent
`public float GetTemplateWeightOfAgent(Agent candidate) `

### GetWeightOfAgentAtNextSlot
`public float? GetWeightOfAgentAtNextSlot(List<Agent> newAgents,out Agent match) `
`public float? GetWeightOfAgentAtNextSlot(List<ValueTuple<Agent,float>> agentTemplateScores,out Agent match) `

### GetWeightOfAgentAtOccupiedSlot
`public float? GetWeightOfAgentAtOccupiedSlot(Agent detachedAgent,List<Agent> newAgents,out Agent match) `

### RemoveAgent
`public void RemoveAgent(Agent agent) `

### GetNumberOfUsableSlots
`public int GetNumberOfUsableSlots() `

### GetAgentFrame
`public WorldFrame? GetAgentFrame(Agent agent) `

### GetWeightOfNextSlot
`public float? GetWeightOfNextSlot(BattleSideEnum side) `

### GetWeightOfOccupiedSlot
`public float GetWeightOfOccupiedSlot(Agent agent) `

### TickClimbingMachines
`public void TickClimbingMachines() `

## 参见

- [本区域目录](../)
- [API 参考](../../)
