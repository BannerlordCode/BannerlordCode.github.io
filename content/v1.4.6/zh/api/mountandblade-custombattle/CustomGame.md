---
title: "CustomGame"
description: "CustomGame：TaleWorlds.MountAndBlade.CustomBattle 的 public 类，继承 GameType；公开成员 11 个（方法 6、属性 4、字段 0）。源文件 TaleWorlds.MountAndBlade.CustomBattle/CustomGame.cs。"
---
# CustomGame

**Namespace:** `TaleWorlds.MountAndBlade.CustomBattle`
**Module:** `TaleWorlds.MountAndBlade.CustomBattle`
**Type:** `public class CustomGame : GameType`
**File:** `TaleWorlds.MountAndBlade.CustomBattle/CustomGame.cs`

## 概述

CustomGame 位于 TaleWorlds.MountAndBlade.CustomBattle 模块，源文件 TaleWorlds.MountAndBlade.CustomBattle/CustomGame.cs。它是一个 public 类，实现/继承 GameType，继承链为 CustomGame → GameType。public/protected 成员共 11 个：6 方法、4 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CustomGame 是 TaleWorlds.MountAndBlade.CustomBattle 的顶层类型，命名空间与模块目录一致，继承链 CustomGame → GameType。成员构成以方法为主（方法 6/11，属性 4/11），对外主要以操作入口暴露。继承链上的 GameType 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.CustomBattle/CustomGame.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IEnumerable` | `public IEnumerable<CustomBattleSceneData>CustomBattleScenes` | 属性 |
| `IsCoreOnlyGameMode` | `public override bool IsCoreOnlyGameMode` | 属性 |
| `CustomBattleBannerEffects` | `public CustomBattleBannerEffects CustomBattleBannerEffects` | 属性 |
| `Current` | `public static CustomGame Current` | 属性 |
| `CustomGame` | `public CustomGame()` | 构造函数 |
| `OnInitialize` | `protected override void OnInitialize()` | 方法 |
| `BeforeRegisterTypes` | `protected override void BeforeRegisterTypes(MBObjectManager objectManager)` | 方法 |
| `OnRegisterTypes` | `protected override void OnRegisterTypes(MBObjectManager objectManager)` | 方法 |
| `DoLoadingForGameType` | `protected override void DoLoadingForGameType(GameTypeLoadingStates gameTypeLoadingState, out GameTypeLoadingStates nextState)` | 方法 |
| `OnDestroy` | `public override void OnDestroy()` | 方法 |
| `OnStateChanged` | `public override void OnStateChanged(GameState oldState)` | 方法 |

## 参见

- [↑ mountandblade-custombattle 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ArmyCompositionGroupVM](../ArmyCompositionGroupVM)
- [同命名空间 ArmyCompositionItemVM](../ArmyCompositionItemVM)
- [同命名空间 CPUBenchmarkMissionLogic](../CPUBenchmarkMissionLogic)
- [同命名空间 CPUBenchmarkMissionSpawnHandler](../CPUBenchmarkMissionSpawnHandler)
