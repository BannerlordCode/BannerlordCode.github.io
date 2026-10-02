---
title: "GameTypeSelectionGroupVM"
description: "GameTypeSelectionGroupVM：TaleWorlds.MountAndBlade.CustomBattle.CustomBattle 的 public 类，继承 ViewModel；公开成员 12 个（方法 2、属性 9、字段 0）。canonical 桶 custombattle。源文件 TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/GameTypeSelectionGroupVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GameTypeSelectionGroupVM

**Namespace:** `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle`
**Module:** `TaleWorlds.MountAndBlade.CustomBattle`
**Type:** `public class GameTypeSelectionGroupVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/GameTypeSelectionGroupVM.cs`
**Bucket:** `custombattle` (rule:TaleWorlds.MountAndBlade.CustomBattle)

## 概述

GameTypeSelectionGroupVM 位于 TaleWorlds.MountAndBlade.CustomBattle 模块，源文件 TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/GameTypeSelectionGroupVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 GameTypeSelectionGroupVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 12 个：2 方法、9 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GameTypeSelectionGroupVM 落在 canonical 桶 `custombattle`（命中规则 `rule:TaleWorlds.MountAndBlade.CustomBattle`），命名空间 `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle`，继承链 GameTypeSelectionGroupVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 9/12，方法 2/12），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/GameTypeSelectionGroupVM.cs 的方法体或该类型的深写页确认。

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

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 CustomBattleCompositionData](../CustomBattleCompositionData/)
- [同命名空间 CustomBattleData](../CustomBattleData/)
- [同命名空间 CustomBattleHelper](../CustomBattleHelper/)
- [同命名空间 CustomBattlePlayerSide](../CustomBattlePlayerSide/)
