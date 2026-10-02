---
title: "HideoutPhasedMissionController"
description: "HideoutPhasedMissionController：TaleWorlds.MountAndBlade.Source.Missions 的 public 类，继承 MissionLogic；公开成员 6 个（方法 4、属性 1、字段 1）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/Source/Missions/HideoutPhasedMissionController.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# HideoutPhasedMissionController

**Namespace:** `TaleWorlds.MountAndBlade.Source.Missions`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class HideoutPhasedMissionController : MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Source/Missions/HideoutPhasedMissionController.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

HideoutPhasedMissionController 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/Source/Missions/HideoutPhasedMissionController.cs。它是一个 public 类，实现/继承 MissionLogic，继承链为 HideoutPhasedMissionController → MissionLogic → MissionBehavior → IMissionBehavior。public/protected 成员共 6 个：4 方法、1 属性、1 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：HideoutPhasedMissionController 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.Source.Missions`，继承链 HideoutPhasedMissionController → MissionLogic → MissionBehavior → IMissionBehavior。成员构成以方法为主（方法 4/6，属性 1/6），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/Source/Missions/HideoutPhasedMissionController.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BehaviorType` | `public override MissionBehaviorType BehaviorType` | 属性 |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | 方法 |
| `OnEndMission` | `protected override void OnEndMission()` | 方法 |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | 方法 |
| `AfterStart` | `public override void AfterStart()` | 方法 |
| `PhaseCount` | `public const int PhaseCount` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MissionLogic](../MissionLogic/)
- [同命名空间 BaseBattleMissionController](../BaseBattleMissionController/)
- [同命名空间 BattleSpawnLogic](../BattleSpawnLogic/)
- [同命名空间 CaravanBattleMissionHandler](../CaravanBattleMissionHandler/)
- [同命名空间 DebugAgentTeleporterMissionController](../DebugAgentTeleporterMissionController/)
