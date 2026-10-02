---
title: "CPUBenchmarkMissionSpawnHandler"
description: "CPUBenchmarkMissionSpawnHandler：TaleWorlds.MountAndBlade.CustomBattle 的 public 类，继承 MissionLogic；公开成员 4 个（方法 2、属性 0、字段 0）。源文件 TaleWorlds.MountAndBlade.CustomBattle/CPUBenchmarkMissionSpawnHandler.cs。"
---
# CPUBenchmarkMissionSpawnHandler

**Namespace:** `TaleWorlds.MountAndBlade.CustomBattle`
**Module:** `TaleWorlds.MountAndBlade.CustomBattle`
**Type:** `public class CPUBenchmarkMissionSpawnHandler : MissionLogic`
**File:** `TaleWorlds.MountAndBlade.CustomBattle/CPUBenchmarkMissionSpawnHandler.cs`

## 概述

CPUBenchmarkMissionSpawnHandler 位于 TaleWorlds.MountAndBlade.CustomBattle 模块，源文件 TaleWorlds.MountAndBlade.CustomBattle/CPUBenchmarkMissionSpawnHandler.cs。它是一个 public 类，实现/继承 MissionLogic，继承链为 CPUBenchmarkMissionSpawnHandler → MissionLogic。public/protected 成员共 4 个：2 方法、2 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CPUBenchmarkMissionSpawnHandler 是 TaleWorlds.MountAndBlade.CustomBattle 的顶层类型，命名空间与模块目录一致，继承链 CPUBenchmarkMissionSpawnHandler → MissionLogic。成员构成以方法为主（方法 2/4，属性 0/4），对外主要以操作入口暴露。继承链上的 MissionLogic 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.CustomBattle/CPUBenchmarkMissionSpawnHandler.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CPUBenchmarkMissionSpawnHandler` | `public CPUBenchmarkMissionSpawnHandler()` | 构造函数 |
| `CPUBenchmarkMissionSpawnHandler` | `public CPUBenchmarkMissionSpawnHandler(CustomBattleCombatant defenderParty, CustomBattleCombatant attackerParty)` | 构造函数 |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | 方法 |
| `AfterStart` | `public override void AfterStart()` | 方法 |

## 参见

- [↑ mountandblade-custombattle 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ArmyCompositionGroupVM](../ArmyCompositionGroupVM)
- [同命名空间 ArmyCompositionItemVM](../ArmyCompositionItemVM)
- [同命名空间 CPUBenchmarkMissionLogic](../CPUBenchmarkMissionLogic)
- [同命名空间 CustomBattleSceneData](../CustomBattleSceneData)
