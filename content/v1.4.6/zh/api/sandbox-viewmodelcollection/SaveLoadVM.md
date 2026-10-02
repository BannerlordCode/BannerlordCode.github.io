---
title: "SaveLoadVM"
description: "SaveLoadVM：SandBox.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 33 个（方法 10、属性 22、字段 0）。源文件 SandBox.ViewModelCollection/SaveLoad/SaveLoadVM.cs。"
---
# SaveLoadVM

**Namespace:** `SandBox.ViewModelCollection.SaveLoad`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class SaveLoadVM : ViewModel`
**File:** `SandBox.ViewModelCollection/SaveLoad/SaveLoadVM.cs`

## 概述

SaveLoadVM 位于 SandBox.ViewModelCollection 模块，源文件 SandBox.ViewModelCollection/SaveLoad/SaveLoadVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 SaveLoadVM → ViewModel。public/protected 成员共 33 个：10 方法、22 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SaveLoadVM 是 SandBox.ViewModelCollection 的顶层类型，命名空间与模块目录不同（SandBox.ViewModelCollection.SaveLoad），继承链 SaveLoadVM → ViewModel。成员构成以属性为主（属性 22/33，方法 10/33），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.ViewModelCollection/SaveLoad/SaveLoadVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SaveLoadVM` | `public SaveLoadVM(bool isSaving, bool isCampaignMapOnStack)` | 构造函数 |
| `Initialize` | `public async void Initialize()` | 方法 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `ExecuteCreateNewSaveGame` | `public void ExecuteCreateNewSaveGame()` | 方法 |
| `ExecuteDone` | `public void ExecuteDone()` | 方法 |
| `ExecuteLoadSave` | `public void ExecuteLoadSave()` | 方法 |
| `DeleteSelectedSave` | `public void DeleteSelectedSave()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `IsLoadingSaves` | `public bool IsLoadingSaves` | 属性 |
| `IsBusyWithAnAction` | `public bool IsBusyWithAnAction` | 属性 |
| `IsSearchAvailable` | `public bool IsSearchAvailable` | 属性 |
| `SearchText` | `public string SearchText` | 属性 |
| `SearchPlaceholderText` | `public string SearchPlaceholderText` | 属性 |
| `VisualDisabledText` | `public string VisualDisabledText` | 属性 |
| `MBBindingList` | `public MBBindingList<SavedGameGroupVM>SaveGroups` | 属性 |
| `CurrentSelectedSave` | `public SavedGameVM CurrentSelectedSave` | 属性 |
| `CreateNewSaveSlotText` | `public string CreateNewSaveSlotText` | 属性 |
| `TitleText` | `public string TitleText` | 属性 |
| `CancelText` | `public string CancelText` | 属性 |
| `IsSaving` | `public bool IsSaving` | 属性 |
| `CanCreateNewSave` | `public bool CanCreateNewSave` | 属性 |
| `IsVisualDisabled` | `public bool IsVisualDisabled` | 属性 |
| `CreateNewSaveHint` | `public HintViewModel CreateNewSaveHint` | 属性 |
| `IsActionEnabled` | `public bool IsActionEnabled` | 属性 |
| `IsAnyItemSelected` | `public bool IsAnyItemSelected` | 属性 |
| `DoneText` | `public string DoneText` | 属性 |
| `SaveLoadText` | `public string SaveLoadText` | 属性 |
| `SetDoneInputKey` | `public void SetDoneInputKey(HotKey hotkey)` | 方法 |
| `SetCancelInputKey` | `public void SetCancelInputKey(HotKey hotkey)` | 方法 |
| `SetDeleteInputKey` | `public void SetDeleteInputKey(HotKey hotkey)` | 方法 |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | 属性 |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey` | 属性 |
| `DeleteInputKey` | `public InputKeyItemVM DeleteInputKey` | 属性 |

## 参见

- [↑ sandbox-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 MapSaveVM](../MapSaveVM)
- [同命名空间 SavedGameGroupVM](../SavedGameGroupVM)
- [同命名空间 SavedGameModuleInfoVM](../SavedGameModuleInfoVM)
- [同命名空间 SavedGamePropertyVM](../SavedGamePropertyVM)
