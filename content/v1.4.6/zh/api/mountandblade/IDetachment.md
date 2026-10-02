---
title: "IDetachment"
description: "IDetachment：TaleWorlds.MountAndBlade 的 public 接口；公开成员 34 个（方法 32、属性 2、字段 0）。源文件 TaleWorlds.MountAndBlade/IDetachment.cs。"
---
# IDetachment

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public interface IDetachment`
**File:** `TaleWorlds.MountAndBlade/IDetachment.cs`

## 概述

IDetachment 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/IDetachment.cs。它是一个 public 接口，继承链为 IDetachment。public/protected 成员共 34 个：32 方法、2 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：IDetachment 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 IDetachment。成员构成以方法为主（方法 32/34，属性 2/34），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/IDetachment.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MBReadOnlyList` | `MBReadOnlyList<Formation>UserFormations` | 属性 |
| `IsLoose` | `bool IsLoose` | 属性 |
| `IsAgentUsingOrInterested` | `bool IsAgentUsingOrInterested(Agent agent);` | 方法 |
| `GetWeightOfNextSlot` | `float? GetWeightOfNextSlot(BattleSideEnum side);` | 方法 |
| `GetDetachmentWeight` | `float GetDetachmentWeight(BattleSideEnum side);` | 方法 |
| `ComputeAndCacheDetachmentWeight` | `float ComputeAndCacheDetachmentWeight(BattleSideEnum side);` | 方法 |
| `GetDetachmentWeightFromCache` | `float GetDetachmentWeightFromCache();` | 方法 |
| `GetSlotIndexWeightTuples` | `void GetSlotIndexWeightTuples(List<ValueTuple<int, float>>slotIndexWeightTuples);` | 方法 |
| `IsSlotAtIndexAvailableForAgent` | `bool IsSlotAtIndexAvailableForAgent(int slotIndex, Agent agent);` | 方法 |
| `IsAgentEligible` | `bool IsAgentEligible(Agent agent);` | 方法 |
| `AddAgentAtSlotIndex` | `void AddAgentAtSlotIndex(Agent agent, int slotIndex);` | 方法 |
| `GetMovingAgentAtSlotIndex` | `Agent GetMovingAgentAtSlotIndex(int slotIndex);` | 方法 |
| `MarkSlotAtIndex` | `void MarkSlotAtIndex(int slotIndex);` | 方法 |
| `IsDetachmentRecentlyEvaluated` | `bool IsDetachmentRecentlyEvaluated();` | 方法 |
| `UnmarkDetachment` | `void UnmarkDetachment();` | 方法 |
| `GetWeightOfAgentAtNextSlot` | `float? GetWeightOfAgentAtNextSlot(List<Agent>candidates, out Agent match);` | 方法 |
| `GetWeightOfAgentAtNextSlot` | `float? GetWeightOfAgentAtNextSlot(List<ValueTuple<Agent, float>>agentTemplateScores, out Agent match);` | 方法 |
| `GetTemplateWeightOfAgent` | `float GetTemplateWeightOfAgent(Agent candidate);` | 方法 |
| `List` | `List<float>GetTemplateCostsOfAgent(Agent candidate, List<float>oldValue);` | 方法 |
| `GetExactCostOfAgentAtSlot` | `float GetExactCostOfAgentAtSlot(Agent candidate, int slotIndex);` | 方法 |
| `GetWeightOfOccupiedSlot` | `float GetWeightOfOccupiedSlot(Agent detachedAgent);` | 方法 |
| `GetWeightOfAgentAtOccupiedSlot` | `float? GetWeightOfAgentAtOccupiedSlot(Agent detachedAgent, List<Agent>candidates, out Agent match);` | 方法 |
| `IsStandingPointAvailableForAgent` | `bool IsStandingPointAvailableForAgent(Agent agent);` | 方法 |
| `AddAgent` | `void AddAgent(Agent agent, int slotIndex = -1, Agent.AIScriptedFrameFlags customFlags = Agent.AIScriptedFrameFlags.None);` | 方法 |
| `RemoveAgent` | `void RemoveAgent(Agent detachedAgent);` | 方法 |
| `GetNumberOfUsableSlots` | `int GetNumberOfUsableSlots();` | 方法 |
| `FormationStartUsing` | `void FormationStartUsing(Formation formation);` | 方法 |
| `FormationStopUsing` | `void FormationStopUsing(Formation formation);` | 方法 |
| `IsUsedByFormation` | `bool IsUsedByFormation(Formation formation);` | 方法 |
| `GetAgentFrame` | `WorldFrame? GetAgentFrame(Agent detachedAgent);` | 方法 |
| `ResetEvaluation` | `void ResetEvaluation();` | 方法 |
| `IsEvaluated` | `bool IsEvaluated();` | 方法 |
| `SetAsEvaluated` | `void SetAsEvaluated();` | 方法 |
| `OnFormationLeave` | `void OnFormationLeave(Formation formation);` | 方法 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
