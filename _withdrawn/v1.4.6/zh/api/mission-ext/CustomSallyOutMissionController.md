---
title: "CustomSallyOutMissionController"
description: "CustomSallyOutMissionController：TaleWorlds.MountAndBlade.MissionSpawnHandlers 的 public 类，继承 SallyOutMissionController；公开成员 2 个（方法 1、属性 0、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/MissionSpawnHandlers/CustomSallyOutMissionController.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CustomSallyOutMissionController

**Namespace:** `TaleWorlds.MountAndBlade.MissionSpawnHandlers`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class CustomSallyOutMissionController : SallyOutMissionController`
**File:** `TaleWorlds.MountAndBlade/MissionSpawnHandlers/CustomSallyOutMissionController.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

CustomSallyOutMissionController 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/MissionSpawnHandlers/CustomSallyOutMissionController.cs。它是一个 public 类，实现/继承 SallyOutMissionController，继承链为 CustomSallyOutMissionController → SallyOutMissionController → MissionLogic → MissionBehavior → IMissionBehavior。public/protected 成员共 2 个：1 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CustomSallyOutMissionController 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.MissionSpawnHandlers`，继承链 CustomSallyOutMissionController → SallyOutMissionController → MissionLogic → MissionBehavior → IMissionBehavior。成员构成以方法为主（方法 1/2，属性 0/2），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/MissionSpawnHandlers/CustomSallyOutMissionController.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CustomSallyOutMissionController` | `public CustomSallyOutMissionController(IBattleCombatant defenderBattleCombatant, IBattleCombatant attackerBattleCombatant) : base(true)` | 构造函数 |
| `GetInitialTroopCounts` | `protected override void GetInitialTroopCounts(out int besiegedTotalTroopCount, out int besiegerTotalTroopCount)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 SallyOutMissionController](../SallyOutMissionController/)
- [同命名空间 CustomBattleMissionSpawnHandler](../CustomBattleMissionSpawnHandler/)
- [同命名空间 CustomMissionSpawnHandler](../CustomMissionSpawnHandler/)
- [同命名空间 CustomSiegeMissionSpawnHandler](../CustomSiegeMissionSpawnHandler/)
