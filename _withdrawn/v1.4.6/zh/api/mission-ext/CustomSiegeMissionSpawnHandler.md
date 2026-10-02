---
title: "CustomSiegeMissionSpawnHandler"
description: "CustomSiegeMissionSpawnHandler：TaleWorlds.MountAndBlade.MissionSpawnHandlers 的 public 类，继承 CustomMissionSpawnHandler；公开成员 2 个（方法 1、属性 0、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/MissionSpawnHandlers/CustomSiegeMissionSpawnHandler.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CustomSiegeMissionSpawnHandler

**Namespace:** `TaleWorlds.MountAndBlade.MissionSpawnHandlers`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class CustomSiegeMissionSpawnHandler : CustomMissionSpawnHandler`
**File:** `TaleWorlds.MountAndBlade/MissionSpawnHandlers/CustomSiegeMissionSpawnHandler.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

CustomSiegeMissionSpawnHandler 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/MissionSpawnHandlers/CustomSiegeMissionSpawnHandler.cs。它是一个 public 类，实现/继承 CustomMissionSpawnHandler，继承链为 CustomSiegeMissionSpawnHandler → CustomMissionSpawnHandler → MissionLogic → MissionBehavior → IMissionBehavior。public/protected 成员共 2 个：1 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CustomSiegeMissionSpawnHandler 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.MissionSpawnHandlers`，继承链 CustomSiegeMissionSpawnHandler → CustomMissionSpawnHandler → MissionLogic → MissionBehavior → IMissionBehavior。成员构成以方法为主（方法 1/2，属性 0/2），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/MissionSpawnHandlers/CustomSiegeMissionSpawnHandler.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CustomSiegeMissionSpawnHandler` | `public CustomSiegeMissionSpawnHandler(IBattleCombatant defenderBattleCombatant, IBattleCombatant attackerBattleCombatant, bool spawnWithHorses)` | 构造函数 |
| `AfterStart` | `public override void AfterStart()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 CustomMissionSpawnHandler](../CustomMissionSpawnHandler/)
- [同命名空间 CustomBattleMissionSpawnHandler](../CustomBattleMissionSpawnHandler/)
- [同命名空间 CustomMissionSpawnHandler](../CustomMissionSpawnHandler/)
- [同命名空间 CustomSallyOutMissionController](../CustomSallyOutMissionController/)
