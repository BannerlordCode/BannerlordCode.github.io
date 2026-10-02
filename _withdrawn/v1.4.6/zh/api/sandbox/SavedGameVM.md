---
title: "SavedGameVM"
description: "SavedGameVM：SandBox.ViewModelCollection.SaveLoad 的 public 类，继承 ViewModel；公开成员 35 个（方法 5、属性 29、字段 0）。canonical 桶 sandbox。源文件 SandBox.ViewModelCollection/SaveLoad/SavedGameVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SavedGameVM

**Namespace:** `SandBox.ViewModelCollection.SaveLoad`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class SavedGameVM : ViewModel`
**File:** `SandBox.ViewModelCollection/SaveLoad/SavedGameVM.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

SavedGameVM 位于 SandBox.ViewModelCollection 模块，源文件 SandBox.ViewModelCollection/SaveLoad/SavedGameVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 SavedGameVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 35 个：5 方法、29 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SavedGameVM 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.ViewModelCollection.SaveLoad`，继承链 SavedGameVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 29/35，方法 5/35），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.ViewModelCollection/SaveLoad/SavedGameVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Save` | `public SaveGameFileInfo Save` | 属性 |
| `RequiresInquiryOnLoad` | `public bool RequiresInquiryOnLoad` | 属性 |
| `IsModuleDiscrepancyDetected` | `public bool IsModuleDiscrepancyDetected` | 属性 |
| `SavedGameVM` | `public SavedGameVM(SaveGameFileInfo save, bool isSaving, Action<SavedGameVM>onDelete, Action<SavedGameVM>onSelection, Action onCancelLoadSave, Action onDone, bool isCorruptedSave = false, bool isIronman = false)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `ExecuteSaveLoad` | `public void ExecuteSaveLoad()` | 方法 |
| `ExecuteUpdate` | `public void ExecuteUpdate()` | 方法 |
| `ExecuteDelete` | `public void ExecuteDelete()` | 方法 |
| `ExecuteSelection` | `public void ExecuteSelection()` | 方法 |
| `MBBindingList` | `public MBBindingList<SavedGamePropertyVM>SavedGameProperties` | 属性 |
| `MBBindingList` | `public MBBindingList<SavedGameModuleInfoVM>LoadedModulesInSave` | 属性 |
| `SaveVersionAsString` | `public string SaveVersionAsString` | 属性 |
| `DeleteText` | `public string DeleteText` | 属性 |
| `IsSelected` | `public bool IsSelected` | 属性 |
| `IsCorrupted` | `public bool IsCorrupted` | 属性 |
| `BannerTextCode` | `public string BannerTextCode` | 属性 |
| `SaveLoadText` | `public string SaveLoadText` | 属性 |
| `OverrideSaveText` | `public string OverrideSaveText` | 属性 |
| `UpdateSaveText` | `public string UpdateSaveText` | 属性 |
| `ModulesText` | `public string ModulesText` | 属性 |
| `CorruptedSaveText` | `public string CorruptedSaveText` | 属性 |
| `NameText` | `public string NameText` | 属性 |
| `GameTimeText` | `public string GameTimeText` | 属性 |
| `CharacterNameText` | `public string CharacterNameText` | 属性 |
| `MainHeroVisualCode` | `public string MainHeroVisualCode` | 属性 |
| `CharacterVisual` | `public CharacterViewModel CharacterVisual` | 属性 |
| `ClanBanner` | `public BannerImageIdentifierVM ClanBanner` | 属性 |
| `RealTimeText1` | `public string RealTimeText1` | 属性 |
| `RealTimeText2` | `public string RealTimeText2` | 属性 |
| `LevelText` | `public string LevelText` | 属性 |
| `DateTimeHint` | `public HintViewModel DateTimeHint` | 属性 |
| `UpdateButtonHint` | `public HintViewModel UpdateButtonHint` | 属性 |
| `DisabledReasonHint` | `public HintViewModel DisabledReasonHint` | 属性 |
| `IsFilteredOut` | `public bool IsFilteredOut` | 属性 |
| `IsDisabled` | `public bool IsDisabled` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 MapSaveVM](../MapSaveVM/)
- [同命名空间 SavedGameGroupVM](../SavedGameGroupVM/)
- [同命名空间 SavedGameModuleInfoVM](../SavedGameModuleInfoVM/)
- [同命名空间 SavedGamePropertyVM](../SavedGamePropertyVM/)
