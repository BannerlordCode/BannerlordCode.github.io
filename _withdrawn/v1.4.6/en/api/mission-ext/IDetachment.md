---
title: "IDetachment"
description: "IDetachment: a public interface in TaleWorlds.MountAndBlade; 34 exposed members (32 methods, 2 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/IDetachment.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IDetachment

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public interface IDetachment`
**File:** `TaleWorlds.MountAndBlade/IDetachment.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

IDetachment lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/IDetachment.cs. It is a public interface; the inheritance chain is IDetachment. It exposes 34 public/protected members: 32 methods, 2 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IDetachment lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain IDetachment. The surface is method-led (methods 32/34, properties 2/34), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/IDetachment.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MBReadOnlyList` | `MBReadOnlyList<Formation>UserFormations` | property |
| `IsLoose` | `bool IsLoose` | property |
| `IsAgentUsingOrInterested` | `bool IsAgentUsingOrInterested(Agent agent);` | method |
| `GetWeightOfNextSlot` | `float? GetWeightOfNextSlot(BattleSideEnum side);` | method |
| `GetDetachmentWeight` | `float GetDetachmentWeight(BattleSideEnum side);` | method |
| `ComputeAndCacheDetachmentWeight` | `float ComputeAndCacheDetachmentWeight(BattleSideEnum side);` | method |
| `GetDetachmentWeightFromCache` | `float GetDetachmentWeightFromCache();` | method |
| `GetSlotIndexWeightTuples` | `void GetSlotIndexWeightTuples(List<ValueTuple<int, float>>slotIndexWeightTuples);` | method |
| `IsSlotAtIndexAvailableForAgent` | `bool IsSlotAtIndexAvailableForAgent(int slotIndex, Agent agent);` | method |
| `IsAgentEligible` | `bool IsAgentEligible(Agent agent);` | method |
| `AddAgentAtSlotIndex` | `void AddAgentAtSlotIndex(Agent agent, int slotIndex);` | method |
| `GetMovingAgentAtSlotIndex` | `Agent GetMovingAgentAtSlotIndex(int slotIndex);` | method |
| `MarkSlotAtIndex` | `void MarkSlotAtIndex(int slotIndex);` | method |
| `IsDetachmentRecentlyEvaluated` | `bool IsDetachmentRecentlyEvaluated();` | method |
| `UnmarkDetachment` | `void UnmarkDetachment();` | method |
| `GetWeightOfAgentAtNextSlot` | `float? GetWeightOfAgentAtNextSlot(List<Agent>candidates, out Agent match);` | method |
| `GetWeightOfAgentAtNextSlot` | `float? GetWeightOfAgentAtNextSlot(List<ValueTuple<Agent, float>>agentTemplateScores, out Agent match);` | method |
| `GetTemplateWeightOfAgent` | `float GetTemplateWeightOfAgent(Agent candidate);` | method |
| `List` | `List<float>GetTemplateCostsOfAgent(Agent candidate, List<float>oldValue);` | method |
| `GetExactCostOfAgentAtSlot` | `float GetExactCostOfAgentAtSlot(Agent candidate, int slotIndex);` | method |
| `GetWeightOfOccupiedSlot` | `float GetWeightOfOccupiedSlot(Agent detachedAgent);` | method |
| `GetWeightOfAgentAtOccupiedSlot` | `float? GetWeightOfAgentAtOccupiedSlot(Agent detachedAgent, List<Agent>candidates, out Agent match);` | method |
| `IsStandingPointAvailableForAgent` | `bool IsStandingPointAvailableForAgent(Agent agent);` | method |
| `AddAgent` | `void AddAgent(Agent agent, int slotIndex = -1, Agent.AIScriptedFrameFlags customFlags = Agent.AIScriptedFrameFlags.None);` | method |
| `RemoveAgent` | `void RemoveAgent(Agent detachedAgent);` | method |
| `GetNumberOfUsableSlots` | `int GetNumberOfUsableSlots();` | method |
| `FormationStartUsing` | `void FormationStartUsing(Formation formation);` | method |
| `FormationStopUsing` | `void FormationStopUsing(Formation formation);` | method |
| `IsUsedByFormation` | `bool IsUsedByFormation(Formation formation);` | method |
| `GetAgentFrame` | `WorldFrame? GetAgentFrame(Agent detachedAgent);` | method |
| `ResetEvaluation` | `void ResetEvaluation();` | method |
| `IsEvaluated` | `bool IsEvaluated();` | method |
| `SetAsEvaluated` | `void SetAsEvaluated();` | method |
| `OnFormationLeave` | `void OnFormationLeave(Formation formation);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
