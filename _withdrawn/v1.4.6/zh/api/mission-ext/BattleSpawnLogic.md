---
title: "BattleSpawnLogic"
description: "BattleSpawnLogic：TaleWorlds.MountAndBlade.Source.Missions 的 public 类，继承 MissionLogic；公开成员 5 个（方法 1、属性 0、字段 3）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/Source/Missions/BattleSpawnLogic.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BattleSpawnLogic

**Namespace:** `TaleWorlds.MountAndBlade.Source.Missions`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class BattleSpawnLogic : MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Source/Missions/BattleSpawnLogic.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

BattleSpawnLogic 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/Source/Missions/BattleSpawnLogic.cs。它是一个 public 类，实现/继承 MissionLogic，继承链为 BattleSpawnLogic → MissionLogic → MissionBehavior → IMissionBehavior。public/protected 成员共 5 个：1 方法、3 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BattleSpawnLogic 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.Source.Missions`，继承链 BattleSpawnLogic → MissionLogic → MissionBehavior → IMissionBehavior。成员构成以方法为主（方法 1/5，属性 0/5），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/Source/Missions/BattleSpawnLogic.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BattleSpawnLogic` | `public BattleSpawnLogic(string selectedSpawnPointSetTag)` | 构造函数 |
| `OnPreMissionTick` | `public override void OnPreMissionTick(float dt)` | 方法 |
| `BattleTag` | `public const string BattleTag` | 字段 |
| `SallyOutTag` | `public const string SallyOutTag` | 字段 |
| `ReliefForceAttackTag` | `public const string ReliefForceAttackTag` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MissionLogic](../MissionLogic/)
- [同命名空间 BaseBattleMissionController](../BaseBattleMissionController/)
- [同命名空间 CaravanBattleMissionHandler](../CaravanBattleMissionHandler/)
- [同命名空间 DebugAgentTeleporterMissionController](../DebugAgentTeleporterMissionController/)
- [同命名空间 DebugObjectDestroyerMissionController](../DebugObjectDestroyerMissionController/)
