---
title: "AssignPlayerRoleInTeamMissionController"
description: "AssignPlayerRoleInTeamMissionController：TaleWorlds.MountAndBlade 的 public 类，继承 MissionLogic；公开成员 13 个（方法 6、属性 4、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/AssignPlayerRoleInTeamMissionController.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# AssignPlayerRoleInTeamMissionController

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class AssignPlayerRoleInTeamMissionController : MissionLogic`
**File:** `TaleWorlds.MountAndBlade/AssignPlayerRoleInTeamMissionController.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

AssignPlayerRoleInTeamMissionController 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/AssignPlayerRoleInTeamMissionController.cs。它是一个 public 类，实现/继承 MissionLogic，继承链为 AssignPlayerRoleInTeamMissionController → MissionLogic → MissionBehavior → IMissionBehavior。public/protected 成员共 13 个：6 方法、4 属性、2 事件、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：AssignPlayerRoleInTeamMissionController 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 AssignPlayerRoleInTeamMissionController → MissionLogic → MissionBehavior → IMissionBehavior。成员构成以方法为主（方法 6/13，属性 4/13），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/AssignPlayerRoleInTeamMissionController.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnPlayerTurnToChooseFormationToLead;` | `public event PlayerTurnToChooseFormationToLeadEvent OnPlayerTurnToChooseFormationToLead;` | 事件 |
| `OnAllFormationsAssignedSergeants;` | `public event AllFormationsAssignedSergeantsEvent OnAllFormationsAssignedSergeants;` | 事件 |
| `IsPlayerInArmy` | `public bool IsPlayerInArmy` | 属性 |
| `IsPlayerGeneral` | `public bool IsPlayerGeneral` | 属性 |
| `IsPlayerSergeant` | `public bool IsPlayerSergeant` | 属性 |
| `PlayerChosenIndex` | `public int PlayerChosenIndex` | 属性 |
| `AssignPlayerRoleInTeamMissionController` | `public AssignPlayerRoleInTeamMissionController(bool isPlayerGeneral, bool isPlayerSergeant, bool isPlayerInArmy, List<string>charactersInPlayerSideByPriority = null)` | 构造函数 |
| `AfterStart` | `public override void AfterStart()` | 方法 |
| `OnTeamDeployed` | `public override void OnTeamDeployed(Team team)` | 方法 |
| `OnPlayerTeamDeployed` | `public virtual void OnPlayerTeamDeployed()` | 方法 |
| `OnPlayerChoiceMade` | `public virtual void OnPlayerChoiceMade(int chosenIndex)` | 方法 |
| `OnPlayerChoiceFinalized` | `public void OnPlayerChoiceFinalized()` | 方法 |
| `AssignSergeant` | `protected virtual void AssignSergeant(Formation formationToLead, Agent sergeant)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MissionLogic](../MissionLogic/)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
