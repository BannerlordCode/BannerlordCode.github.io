---
title: "CustomBattleSideVM"
description: "CustomBattleSideVM：TaleWorlds.MountAndBlade.CustomBattle 的 public 类，继承 ViewModel；公开成员 15 个（方法 4、属性 10、字段 0）。源文件 TaleWorlds.MountAndBlade.CustomBattle/CustomBattleSideVM.cs。"
---
# CustomBattleSideVM

**Namespace:** `TaleWorlds.MountAndBlade.CustomBattle`
**Module:** `TaleWorlds.MountAndBlade.CustomBattle`
**Type:** `public class CustomBattleSideVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.CustomBattle/CustomBattleSideVM.cs`

## 概述

CustomBattleSideVM 位于 TaleWorlds.MountAndBlade.CustomBattle 模块，源文件 TaleWorlds.MountAndBlade.CustomBattle/CustomBattleSideVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 CustomBattleSideVM → ViewModel。public/protected 成员共 15 个：4 方法、10 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CustomBattleSideVM 是 TaleWorlds.MountAndBlade.CustomBattle 的顶层类型，命名空间与模块目录一致，继承链 CustomBattleSideVM → ViewModel。成员构成以属性为主（属性 10/15，方法 4/15），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.CustomBattle/CustomBattleSideVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SelectedCharacter` | `public BasicCharacterObject SelectedCharacter` | 属性 |
| `CustomBattleSideVM` | `public CustomBattleSideVM(TextObject sideName, bool isPlayerSide, TroopTypeSelectionPopUpVM troopTypeSelectionPopUp, Action onCharacterSelected)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `OnPlayerTypeChange` | `public void OnPlayerTypeChange(CustomBattlePlayerType playerType)` | 方法 |
| `UpdateCharacterVisual` | `public void UpdateCharacterVisual()` | 方法 |
| `Randomize` | `public void Randomize(CustomBattleSideVM oppositeSide = null)` | 方法 |
| `CurrentSelectedCharacter` | `public CharacterViewModel CurrentSelectedCharacter` | 属性 |
| `MBBindingList` | `public MBBindingList<CharacterEquipmentItemVM>ArmorsList` | 属性 |
| `MBBindingList` | `public MBBindingList<CharacterEquipmentItemVM>WeaponsList` | 属性 |
| `FactionText` | `public string FactionText` | 属性 |
| `TitleText` | `public string TitleText` | 属性 |
| `Name` | `public string Name` | 属性 |
| `SelectorVM` | `public SelectorVM<CharacterItemVM>CharacterSelectionGroup` | 属性 |
| `CompositionGroup` | `public ArmyCompositionGroupVM CompositionGroup` | 属性 |
| `FactionSelectionGroup` | `public CustomBattleFactionSelectionVM FactionSelectionGroup` | 属性 |

## 参见

- [↑ mountandblade-custombattle 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ArmyCompositionGroupVM](../ArmyCompositionGroupVM)
- [同命名空间 ArmyCompositionItemVM](../ArmyCompositionItemVM)
- [同命名空间 CPUBenchmarkMissionLogic](../CPUBenchmarkMissionLogic)
- [同命名空间 CPUBenchmarkMissionSpawnHandler](../CPUBenchmarkMissionSpawnHandler)
