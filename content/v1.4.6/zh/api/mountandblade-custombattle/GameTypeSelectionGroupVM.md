---
title: "GameTypeSelectionGroupVM"
description: "GameTypeSelectionGroupVM：TaleWorlds.MountAndBlade.CustomBattle 的 public 类，继承 ViewModel；公开成员 12 个（方法 2、属性 9、字段 0）。源文件 TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/GameTypeSelectionGroupVM.cs。"
---
# GameTypeSelectionGroupVM

**Namespace:** `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle`
**Module:** `TaleWorlds.MountAndBlade.CustomBattle`
**Type:** `public class GameTypeSelectionGroupVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/GameTypeSelectionGroupVM.cs`

## 概述

GameTypeSelectionGroupVM 位于 TaleWorlds.MountAndBlade.CustomBattle 模块，源文件 TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/GameTypeSelectionGroupVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 GameTypeSelectionGroupVM → ViewModel。public/protected 成员共 12 个：2 方法、9 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GameTypeSelectionGroupVM 是 TaleWorlds.MountAndBlade.CustomBattle 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.CustomBattle.CustomBattle），继承链 GameTypeSelectionGroupVM → ViewModel。成员构成以属性为主（属性 9/12，方法 2/12），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/GameTypeSelectionGroupVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SelectedGameTypeString` | `public string SelectedGameTypeString` | 属性 |
| `SelectedPlayerType` | `public CustomBattlePlayerType SelectedPlayerType` | 属性 |
| `SelectedPlayerSide` | `public CustomBattlePlayerSide SelectedPlayerSide` | 属性 |
| `GameTypeSelectionGroupVM` | `public GameTypeSelectionGroupVM(Action<CustomBattlePlayerType>onPlayerTypeChange, Action<string>onGameTypeChange)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `RandomizeAll` | `public void RandomizeAll()` | 方法 |
| `SelectorVM` | `public SelectorVM<GameTypeItemVM>GameTypeSelection` | 属性 |
| `SelectorVM` | `public SelectorVM<PlayerTypeItemVM>PlayerTypeSelection` | 属性 |
| `SelectorVM` | `public SelectorVM<PlayerSideItemVM>PlayerSideSelection` | 属性 |
| `GameTypeText` | `public string GameTypeText` | 属性 |
| `PlayerTypeText` | `public string PlayerTypeText` | 属性 |
| `PlayerSideText` | `public string PlayerSideText` | 属性 |

## 参见

- [↑ mountandblade-custombattle 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CustomBattleCompositionData](../CustomBattleCompositionData)
- [同命名空间 CustomBattleData](../CustomBattleData)
- [同命名空间 CustomBattleHelper](../CustomBattleHelper)
- [同命名空间 CustomBattlePlayerSide](../CustomBattlePlayerSide)
