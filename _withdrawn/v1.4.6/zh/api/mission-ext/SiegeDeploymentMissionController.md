---
title: "SiegeDeploymentMissionController"
description: "SiegeDeploymentMissionController：TaleWorlds.MountAndBlade 的 public 类，继承 DeploymentMissionController；公开成员 8 个（方法 7、属性 0、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/SiegeDeploymentMissionController.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SiegeDeploymentMissionController

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class SiegeDeploymentMissionController : DeploymentMissionController`
**File:** `TaleWorlds.MountAndBlade/SiegeDeploymentMissionController.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

SiegeDeploymentMissionController 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/SiegeDeploymentMissionController.cs。它是一个 public 类，实现/继承 DeploymentMissionController，继承链为 SiegeDeploymentMissionController → DeploymentMissionController → MissionLogic → MissionBehavior → IMissionBehavior。public/protected 成员共 8 个：7 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SiegeDeploymentMissionController 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 SiegeDeploymentMissionController → DeploymentMissionController → MissionLogic → MissionBehavior → IMissionBehavior。成员构成以方法为主（方法 7/8，属性 0/8），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/SiegeDeploymentMissionController.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SiegeDeploymentMissionController` | `public SiegeDeploymentMissionController(bool isPlayerAttacker) : base(isPlayerAttacker)` | 构造函数 |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | 方法 |
| `List` | `public List<ItemObject>GetSiegeMissiles()` | 方法 |
| `OnAfterStart` | `protected override void OnAfterStart()` | 方法 |
| `OnSetupTeamsOfSide` | `protected override void OnSetupTeamsOfSide(BattleSideEnum battleSide)` | 方法 |
| `OnSetupTeamsFinished` | `protected override void OnSetupTeamsFinished()` | 方法 |
| `BeforeDeploymentFinished` | `protected override void BeforeDeploymentFinished()` | 方法 |
| `AfterDeploymentFinished` | `protected override void AfterDeploymentFinished()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 DeploymentMissionController](../DeploymentMissionController/)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
