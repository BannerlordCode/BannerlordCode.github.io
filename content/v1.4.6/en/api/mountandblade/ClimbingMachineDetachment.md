---
title: "ClimbingMachineDetachment"
description: "ClimbingMachineDetachment: a public class in TaleWorlds.MountAndBlade, inheriting IDetachment; 20 exposed members (16 methods, 3 properties, 0 fields). Source: TaleWorlds.MountAndBlade/ClimbingMachineDetachment.cs."
---
# ClimbingMachineDetachment

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class ClimbingMachineDetachment : IDetachment`
**File:** `TaleWorlds.MountAndBlade/ClimbingMachineDetachment.cs`

## Overview

ClimbingMachineDetachment lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/ClimbingMachineDetachment.cs. It is a public class, implementing/inheriting IDetachment; the inheritance chain is ClimbingMachineDetachment → IDetachment. It exposes 20 public/protected members: 16 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClimbingMachineDetachment is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain ClimbingMachineDetachment → IDetachment. The surface is method-led (methods 16/20, properties 3/20), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/ClimbingMachineDetachment.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MBReadOnlyList` | `public MBReadOnlyList<Formation>UserFormations` | property |
| `IsLoose` | `public bool IsLoose` | property |
| `IsActive` | `public bool IsActive` | property |
| `ClimbingMachineDetachment` | `public ClimbingMachineDetachment(in MBList<ClimbingMachine>climbingMachines)` | constructor |
| `Deactivate` | `public void Deactivate()` | method |
| `AddAgent` | `public void AddAgent(Agent agent, int slotIndex, Agent.AIScriptedFrameFlags customFlags = Agent.AIScriptedFrameFlags.None)` | method |
| `AddAgentAtSlotIndex` | `public void AddAgentAtSlotIndex(Agent agent, int slotIndex)` | method |
| `IsUsedByFormation` | `public bool IsUsedByFormation(Formation formation)` | method |
| `IsStandingPointAvailableForAgent` | `public bool IsStandingPointAvailableForAgent(Agent agent)` | method |
| `List` | `public List<float>GetTemplateCostsOfAgent(Agent candidate, List<float>oldValue)` | method |
| `GetTemplateWeightOfAgent` | `public float GetTemplateWeightOfAgent(Agent candidate)` | method |
| `GetWeightOfAgentAtNextSlot` | `public float? GetWeightOfAgentAtNextSlot(List<Agent>newAgents, out Agent match)` | method |
| `GetWeightOfAgentAtNextSlot` | `public float? GetWeightOfAgentAtNextSlot(List<ValueTuple<Agent, float>>agentTemplateScores, out Agent match)` | method |
| `GetWeightOfAgentAtOccupiedSlot` | `public float? GetWeightOfAgentAtOccupiedSlot(Agent detachedAgent, List<Agent>newAgents, out Agent match)` | method |
| `RemoveAgent` | `public void RemoveAgent(Agent agent)` | method |
| `GetNumberOfUsableSlots` | `public int GetNumberOfUsableSlots()` | method |
| `GetAgentFrame` | `public WorldFrame? GetAgentFrame(Agent agent)` | method |
| `GetWeightOfNextSlot` | `public float? GetWeightOfNextSlot(BattleSideEnum side)` | method |
| `GetWeightOfOccupiedSlot` | `public float GetWeightOfOccupiedSlot(Agent agent)` | method |
| `TickClimbingMachines` | `public void TickClimbingMachines()` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface IDetachment](../IDetachment)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
