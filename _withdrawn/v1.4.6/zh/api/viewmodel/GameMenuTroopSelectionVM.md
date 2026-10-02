---
title: "GameMenuTroopSelectionVM"
description: "GameMenuTroopSelectionVM：TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TroopSelection 的 public 类，继承 ViewModel；公开成员 24 个（方法 10、属性 13、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TroopSelection/GameMenuTroopSelectionVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GameMenuTroopSelectionVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TroopSelection`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class GameMenuTroopSelectionVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TroopSelection/GameMenuTroopSelectionVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

GameMenuTroopSelectionVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TroopSelection/GameMenuTroopSelectionVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 GameMenuTroopSelectionVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 24 个：10 方法、13 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GameMenuTroopSelectionVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TroopSelection`，继承链 GameMenuTroopSelectionVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 13/24，方法 10/24），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TroopSelection/GameMenuTroopSelectionVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GameMenuTroopSelectionVM` | `public GameMenuTroopSelectionVM(TroopRoster fullRoster, TroopRoster initialSelections, Func<CharacterObject, bool>canChangeChangeStatusOfTroop, Action<TroopRoster>onDone, int maxSelectableTroopCount, int minSelectableTroopCount)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `InitList` | `protected virtual void InitList()` | 方法 |
| `ExecuteDone` | `public void ExecuteDone()` | 方法 |
| `ExecuteCancel` | `public void ExecuteCancel()` | 方法 |
| `ExecuteReset` | `public void ExecuteReset()` | 方法 |
| `ExecuteClearSelection` | `public void ExecuteClearSelection()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `SetCancelInputKey` | `public void SetCancelInputKey(HotKey hotkey)` | 方法 |
| `SetDoneInputKey` | `public void SetDoneInputKey(HotKey hotkey)` | 方法 |
| `SetResetInputKey` | `public void SetResetInputKey(HotKey hotkey)` | 方法 |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | 属性 |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey` | 属性 |
| `ResetInputKey` | `public InputKeyItemVM ResetInputKey` | 属性 |
| `IsEnabled` | `public bool IsEnabled` | 属性 |
| `IsDoneEnabled` | `public bool IsDoneEnabled` | 属性 |
| `DoneHint` | `public HintViewModel DoneHint` | 属性 |
| `MBBindingList` | `public MBBindingList<TroopSelectionItemVM>Troops` | 属性 |
| `DoneText` | `public string DoneText` | 属性 |
| `CancelText` | `public string CancelText` | 属性 |
| `TitleText` | `public string TitleText` | 属性 |
| `ClearSelectionText` | `public string ClearSelectionText` | 属性 |
| `CurrentSelectedAmountText` | `public string CurrentSelectedAmountText` | 属性 |
| `CurrentSelectedAmountTitle` | `public string CurrentSelectedAmountTitle` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 TroopItemComparer](../TroopItemComparer/)
- [同命名空间 TroopSelectionItemVM](../TroopSelectionItemVM/)
