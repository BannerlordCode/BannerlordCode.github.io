---
title: "CustomBattleScreen"
description: "CustomBattleScreen：TaleWorlds.MountAndBlade.CustomBattle 的 public 类，继承 ScreenBase、IGameStateListener；公开成员 7 个（方法 6、属性 0、字段 0）。源文件 TaleWorlds.MountAndBlade.CustomBattle/CustomBattleScreen.cs。"
---
# CustomBattleScreen

**Namespace:** `TaleWorlds.MountAndBlade.CustomBattle`
**Module:** `TaleWorlds.MountAndBlade.CustomBattle`
**Type:** `public class CustomBattleScreen : ScreenBase, IGameStateListener`
**File:** `TaleWorlds.MountAndBlade.CustomBattle/CustomBattleScreen.cs`

## 概述

CustomBattleScreen 位于 TaleWorlds.MountAndBlade.CustomBattle 模块，源文件 TaleWorlds.MountAndBlade.CustomBattle/CustomBattleScreen.cs。它是一个 public 类，实现/继承 ScreenBase、IGameStateListener，继承链为 CustomBattleScreen → ScreenBase。public/protected 成员共 7 个：6 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CustomBattleScreen 是 TaleWorlds.MountAndBlade.CustomBattle 的顶层类型，命名空间与模块目录一致，继承链 CustomBattleScreen → ScreenBase。成员构成以方法为主（方法 6/7，属性 0/7），对外主要以操作入口暴露。继承链上的 ScreenBase 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.CustomBattle/CustomBattleScreen.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CustomBattleScreen` | `public CustomBattleScreen(CustomBattleState customBattleState)` | 构造函数 |
| `OnInitialize` | `protected override void OnInitialize()` | 方法 |
| `OnFrameTick` | `protected override void OnFrameTick(float dt)` | 方法 |
| `OnFinalize` | `protected override void OnFinalize()` | 方法 |
| `OnActivate` | `protected override void OnActivate()` | 方法 |
| `OnDeactivate` | `protected override void OnDeactivate()` | 方法 |
| `UpdateLayout` | `public override void UpdateLayout()` | 方法 |

## 参见

- [↑ mountandblade-custombattle 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ArmyCompositionGroupVM](../ArmyCompositionGroupVM)
- [同命名空间 ArmyCompositionItemVM](../ArmyCompositionItemVM)
- [同命名空间 CPUBenchmarkMissionLogic](../CPUBenchmarkMissionLogic)
- [同命名空间 CPUBenchmarkMissionSpawnHandler](../CPUBenchmarkMissionSpawnHandler)
