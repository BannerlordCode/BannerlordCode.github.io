---
title: "CustomBattleVM"
description: "CustomBattleVM：TaleWorlds.MountAndBlade.CustomBattle 的 public 类，继承 ViewModel；公开成员 33 个（方法 11、属性 21、字段 0）。canonical 桶 custombattle。源文件 TaleWorlds.MountAndBlade.CustomBattle/CustomBattleVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CustomBattleVM

**Namespace:** `TaleWorlds.MountAndBlade.CustomBattle`
**Module:** `TaleWorlds.MountAndBlade.CustomBattle`
**Type:** `public class CustomBattleVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.CustomBattle/CustomBattleVM.cs`
**Bucket:** `custombattle` (rule:TaleWorlds.MountAndBlade.CustomBattle)

## 概述

CustomBattleVM 位于 TaleWorlds.MountAndBlade.CustomBattle 模块，源文件 TaleWorlds.MountAndBlade.CustomBattle/CustomBattleVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 CustomBattleVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 33 个：11 方法、21 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CustomBattleVM 落在 canonical 桶 `custombattle`（命中规则 `rule:TaleWorlds.MountAndBlade.CustomBattle`），命名空间 `TaleWorlds.MountAndBlade.CustomBattle`，继承链 CustomBattleVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 21/33，方法 11/33），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.CustomBattle/CustomBattleVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CustomBattleVM` | `public CustomBattleVM(CustomBattleState battleState)` | 构造函数 |
| `SetActiveState` | `public void SetActiveState(bool isActive)` | 方法 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `ExecuteBack` | `public void ExecuteBack()` | 方法 |
| `ExecuteStart` | `public void ExecuteStart()` | 方法 |
| `ExecuteRandomize` | `public void ExecuteRandomize()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `ExecuteSwitchToNextCustomBattle` | `public void ExecuteSwitchToNextCustomBattle()` | 方法 |
| `TroopTypeSelectionPopUp` | `public TroopTypeSelectionPopUpVM TroopTypeSelectionPopUp` | 属性 |
| `IsAttackerCustomMachineSelectionEnabled` | `public bool IsAttackerCustomMachineSelectionEnabled` | 属性 |
| `IsDefenderCustomMachineSelectionEnabled` | `public bool IsDefenderCustomMachineSelectionEnabled` | 属性 |
| `RandomizeButtonText` | `public string RandomizeButtonText` | 属性 |
| `TitleText` | `public string TitleText` | 属性 |
| `BackButtonText` | `public string BackButtonText` | 属性 |
| `StartButtonText` | `public string StartButtonText` | 属性 |
| `SwitchButtonText` | `public string SwitchButtonText` | 属性 |
| `EnemySide` | `public CustomBattleSideVM EnemySide` | 属性 |
| `PlayerSide` | `public CustomBattleSideVM PlayerSide` | 属性 |
| `GameTypeSelectionGroup` | `public GameTypeSelectionGroupVM GameTypeSelectionGroup` | 属性 |
| `MapSelectionGroup` | `public MapSelectionGroupVM MapSelectionGroup` | 属性 |
| `MBBindingList` | `public MBBindingList<CustomBattleSiegeMachineVM>AttackerMeleeMachines` | 属性 |
| `MBBindingList` | `public MBBindingList<CustomBattleSiegeMachineVM>AttackerRangedMachines` | 属性 |
| `MBBindingList` | `public MBBindingList<CustomBattleSiegeMachineVM>DefenderMachines` | 属性 |
| `CanSwitchMode` | `public bool CanSwitchMode` | 属性 |
| `SwitchHint` | `public HintViewModel SwitchHint` | 属性 |
| `SetStartInputKey` | `public void SetStartInputKey(HotKey hotkey)` | 方法 |
| `SetCancelInputKey` | `public void SetCancelInputKey(HotKey hotkey)` | 方法 |
| `SetResetInputKey` | `public void SetResetInputKey(HotKey hotkey)` | 方法 |
| `SetRandomizeInputKey` | `public void SetRandomizeInputKey(HotKey hotkey)` | 方法 |
| `StartInputKey` | `public InputKeyItemVM StartInputKey` | 属性 |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey` | 属性 |
| `ResetInputKey` | `public InputKeyItemVM ResetInputKey` | 属性 |
| `RandomizeInputKey` | `public InputKeyItemVM RandomizeInputKey` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 ArmyCompositionGroupVM](../ArmyCompositionGroupVM/)
- [同命名空间 ArmyCompositionItemVM](../ArmyCompositionItemVM/)
- [同命名空间 CPUBenchmarkMissionLogic](../CPUBenchmarkMissionLogic/)
- [同命名空间 CPUBenchmarkMissionSpawnHandler](../CPUBenchmarkMissionSpawnHandler/)
