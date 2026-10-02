---
title: "GeneralsAndCaptainsAssignmentLogic"
description: "GeneralsAndCaptainsAssignmentLogic：TaleWorlds.MountAndBlade 的 public 类，继承 MissionLogic；公开成员 7 个（方法 5、属性 0、字段 1）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/GeneralsAndCaptainsAssignmentLogic.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GeneralsAndCaptainsAssignmentLogic

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class GeneralsAndCaptainsAssignmentLogic : MissionLogic`
**File:** `TaleWorlds.MountAndBlade/GeneralsAndCaptainsAssignmentLogic.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

GeneralsAndCaptainsAssignmentLogic 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/GeneralsAndCaptainsAssignmentLogic.cs。它是一个 public 类，实现/继承 MissionLogic，继承链为 GeneralsAndCaptainsAssignmentLogic → MissionLogic → MissionBehavior → IMissionBehavior。public/protected 成员共 7 个：5 方法、1 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GeneralsAndCaptainsAssignmentLogic 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 GeneralsAndCaptainsAssignmentLogic → MissionLogic → MissionBehavior → IMissionBehavior。成员构成以方法为主（方法 5/7，属性 0/7），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/GeneralsAndCaptainsAssignmentLogic.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GeneralsAndCaptainsAssignmentLogic` | `public GeneralsAndCaptainsAssignmentLogic(TextObject attackerGeneralName, TextObject defenderGeneralName, TextObject attackerAllyGeneralName = null, TextObject defenderAllyGeneralName = null, bool createBodyguard = true)` | 构造函数 |
| `AfterStart` | `public override void AfterStart()` | 方法 |
| `OnTeamDeployed` | `public override void OnTeamDeployed(Team team)` | 方法 |
| `OnDeploymentFinished` | `public override void OnDeploymentFinished()` | 方法 |
| `SortCaptainsByPriority` | `protected virtual void SortCaptainsByPriority(Team team, ref List<Agent>captains)` | 方法 |
| `PickBestRegularFormationToLead` | `protected virtual Formation PickBestRegularFormationToLead(Agent agent, List<Formation>candidateFormations)` | 方法 |
| `MinimumAgentCountToLeadGeneralFormation` | `public int MinimumAgentCountToLeadGeneralFormation` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MissionLogic](../MissionLogic/)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
