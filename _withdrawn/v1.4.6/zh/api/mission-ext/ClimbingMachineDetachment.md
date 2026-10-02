---
title: "ClimbingMachineDetachment"
description: "ClimbingMachineDetachment：TaleWorlds.MountAndBlade 的 public 类，继承 IDetachment；公开成员 20 个（方法 16、属性 3、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/ClimbingMachineDetachment.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ClimbingMachineDetachment

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class ClimbingMachineDetachment : IDetachment`
**File:** `TaleWorlds.MountAndBlade/ClimbingMachineDetachment.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

ClimbingMachineDetachment 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/ClimbingMachineDetachment.cs。它是一个 public 类，实现/继承 IDetachment，继承链为 ClimbingMachineDetachment → IDetachment。public/protected 成员共 20 个：16 方法、3 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ClimbingMachineDetachment 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 ClimbingMachineDetachment → IDetachment。成员构成以方法为主（方法 16/20，属性 3/20），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/ClimbingMachineDetachment.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MBReadOnlyList` | `public MBReadOnlyList<Formation>UserFormations` | 属性 |
| `IsLoose` | `public bool IsLoose` | 属性 |
| `IsActive` | `public bool IsActive` | 属性 |
| `ClimbingMachineDetachment` | `public ClimbingMachineDetachment(in MBList<ClimbingMachine>climbingMachines)` | 构造函数 |
| `Deactivate` | `public void Deactivate()` | 方法 |
| `AddAgent` | `public void AddAgent(Agent agent, int slotIndex, Agent.AIScriptedFrameFlags customFlags = Agent.AIScriptedFrameFlags.None)` | 方法 |
| `AddAgentAtSlotIndex` | `public void AddAgentAtSlotIndex(Agent agent, int slotIndex)` | 方法 |
| `IsUsedByFormation` | `public bool IsUsedByFormation(Formation formation)` | 方法 |
| `IsStandingPointAvailableForAgent` | `public bool IsStandingPointAvailableForAgent(Agent agent)` | 方法 |
| `List` | `public List<float>GetTemplateCostsOfAgent(Agent candidate, List<float>oldValue)` | 方法 |
| `GetTemplateWeightOfAgent` | `public float GetTemplateWeightOfAgent(Agent candidate)` | 方法 |
| `GetWeightOfAgentAtNextSlot` | `public float? GetWeightOfAgentAtNextSlot(List<Agent>newAgents, out Agent match)` | 方法 |
| `GetWeightOfAgentAtNextSlot` | `public float? GetWeightOfAgentAtNextSlot(List<ValueTuple<Agent, float>>agentTemplateScores, out Agent match)` | 方法 |
| `GetWeightOfAgentAtOccupiedSlot` | `public float? GetWeightOfAgentAtOccupiedSlot(Agent detachedAgent, List<Agent>newAgents, out Agent match)` | 方法 |
| `RemoveAgent` | `public void RemoveAgent(Agent agent)` | 方法 |
| `GetNumberOfUsableSlots` | `public int GetNumberOfUsableSlots()` | 方法 |
| `GetAgentFrame` | `public WorldFrame? GetAgentFrame(Agent agent)` | 方法 |
| `GetWeightOfNextSlot` | `public float? GetWeightOfNextSlot(BattleSideEnum side)` | 方法 |
| `GetWeightOfOccupiedSlot` | `public float GetWeightOfOccupiedSlot(Agent agent)` | 方法 |
| `TickClimbingMachines` | `public void TickClimbingMachines()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 IDetachment](../IDetachment/)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
