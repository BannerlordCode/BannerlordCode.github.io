---
title: "TroopTypeSelectionPopUpVM"
description: "TroopTypeSelectionPopUpVM：TaleWorlds.MountAndBlade.CustomBattle 的 public 类，继承 ViewModel；公开成员 22 个（方法 12、属性 10、字段 0）。源文件 TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/TroopTypeSelectionPopUpVM.cs。"
---
# TroopTypeSelectionPopUpVM

**Namespace:** `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle`
**Module:** `TaleWorlds.MountAndBlade.CustomBattle`
**Type:** `public class TroopTypeSelectionPopUpVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/TroopTypeSelectionPopUpVM.cs`

## 概述

TroopTypeSelectionPopUpVM 位于 TaleWorlds.MountAndBlade.CustomBattle 模块，源文件 TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/TroopTypeSelectionPopUpVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 TroopTypeSelectionPopUpVM → ViewModel。public/protected 成员共 22 个：12 方法、10 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TroopTypeSelectionPopUpVM 是 TaleWorlds.MountAndBlade.CustomBattle 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.CustomBattle.CustomBattle），继承链 TroopTypeSelectionPopUpVM → ViewModel。成员构成以方法为主（方法 12/22，属性 10/22），对外主要以操作入口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/TroopTypeSelectionPopUpVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `OpenPopUp` | `public void OpenPopUp(string title, MBBindingList<CustomBattleTroopTypeVM>troops)` | 方法 |
| `OnItemSelectionToggled` | `public void OnItemSelectionToggled(CustomBattleTroopTypeVM item)` | 方法 |
| `ExecuteSelectAll` | `public void ExecuteSelectAll()` | 方法 |
| `ExecuteBackToDefault` | `public void ExecuteBackToDefault()` | 方法 |
| `ExecuteCancel` | `public void ExecuteCancel()` | 方法 |
| `ExecuteDone` | `public void ExecuteDone()` | 方法 |
| `ExecuteReset` | `public void ExecuteReset()` | 方法 |
| `SetCancelInputKey` | `public void SetCancelInputKey(HotKey hotkey)` | 方法 |
| `SetDoneInputKey` | `public void SetDoneInputKey(HotKey hotkey)` | 方法 |
| `SetResetInputKey` | `public void SetResetInputKey(HotKey hotkey)` | 方法 |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | 属性 |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey` | 属性 |
| `ResetInputKey` | `public InputKeyItemVM ResetInputKey` | 属性 |
| `MBBindingList` | `public MBBindingList<CustomBattleTroopTypeVM>Items` | 属性 |
| `Title` | `public string Title` | 属性 |
| `DoneLbl` | `public string DoneLbl` | 属性 |
| `CancelLbl` | `public string CancelLbl` | 属性 |
| `SelectAllLbl` | `public string SelectAllLbl` | 属性 |
| `BackToDefaultLbl` | `public string BackToDefaultLbl` | 属性 |
| `IsOpen` | `public bool IsOpen` | 属性 |

## 参见

- [↑ mountandblade-custombattle 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CustomBattleCompositionData](../CustomBattleCompositionData)
- [同命名空间 CustomBattleData](../CustomBattleData)
- [同命名空间 CustomBattleHelper](../CustomBattleHelper)
- [同命名空间 CustomBattlePlayerSide](../CustomBattlePlayerSide)
