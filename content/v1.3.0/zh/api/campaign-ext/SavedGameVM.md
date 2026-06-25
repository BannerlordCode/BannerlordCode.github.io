---
title: "SavedGameVM"
description: "SavedGameVM 的自动生成类参考。"
---
# SavedGameVM

**Namespace:** SandBox.ViewModelCollection.SaveLoad
**Module:** SandBox.ViewModelCollection
**Type:** `public class SavedGameVM : ViewModel`
**Base:** `ViewModel`
**File:** `SandBox.ViewModelCollection/SaveLoad/SavedGameVM.cs`

## 概述

`SavedGameVM` 位于 `SandBox.ViewModelCollection.SaveLoad`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.SaveLoad` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Save` | `public SaveGameFileInfo Save { get; }` |
| `RequiresInquiryOnLoad` | `public bool RequiresInquiryOnLoad { get; }` |
| `IsModuleDiscrepancyDetected` | `public bool IsModuleDiscrepancyDetected { get; }` |
| `SavedGameProperties` | `public MBBindingList<SavedGamePropertyVM> SavedGameProperties { get; set; }` |
| `LoadedModulesInSave` | `public MBBindingList<SavedGameModuleInfoVM> LoadedModulesInSave { get; set; }` |
| `SaveVersionAsString` | `public string SaveVersionAsString { get; set; }` |
| `DeleteText` | `public string DeleteText { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `IsCorrupted` | `public bool IsCorrupted { get; set; }` |
| `BannerTextCode` | `public string BannerTextCode { get; set; }` |
| `SaveLoadText` | `public string SaveLoadText { get; set; }` |
| `OverrideSaveText` | `public string OverrideSaveText { get; set; }` |
| `UpdateSaveText` | `public string UpdateSaveText { get; set; }` |
| `ModulesText` | `public string ModulesText { get; set; }` |
| `CorruptedSaveText` | `public string CorruptedSaveText { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `GameTimeText` | `public string GameTimeText { get; set; }` |
| `CharacterNameText` | `public string CharacterNameText { get; set; }` |
| `MainHeroVisualCode` | `public string MainHeroVisualCode { get; set; }` |
| `CharacterVisual` | `public CharacterViewModel CharacterVisual { get; set; }` |
| `ClanBanner` | `public BannerImageIdentifierVM ClanBanner { get; set; }` |
| `RealTimeText1` | `public string RealTimeText1 { get; set; }` |
| `RealTimeText2` | `public string RealTimeText2 { get; set; }` |
| `LevelText` | `public string LevelText { get; set; }` |
| `DateTimeHint` | `public HintViewModel DateTimeHint { get; set; }` |
| `UpdateButtonHint` | `public HintViewModel UpdateButtonHint { get; set; }` |
| `DisabledReasonHint` | `public HintViewModel DisabledReasonHint { get; set; }` |
| `IsFilteredOut` | `public bool IsFilteredOut { get; set; }` |
| `IsDisabled` | `public bool IsDisabled { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 SavedGameVM 实例
SavedGameVM savedGameVM = ...;
savedGameVM.RefreshValues();
```

### ExecuteSaveLoad
`public void ExecuteSaveLoad()`

**用途 / Purpose:** **用途 / Purpose:** 执行 save load 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SavedGameVM 实例
SavedGameVM savedGameVM = ...;
savedGameVM.ExecuteSaveLoad();
```

### ExecuteUpdate
`public void ExecuteUpdate()`

**用途 / Purpose:** **用途 / Purpose:** 执行 update 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SavedGameVM 实例
SavedGameVM savedGameVM = ...;
savedGameVM.ExecuteUpdate();
```

### ExecuteDelete
`public void ExecuteDelete()`

**用途 / Purpose:** **用途 / Purpose:** 执行 delete 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SavedGameVM 实例
SavedGameVM savedGameVM = ...;
savedGameVM.ExecuteDelete();
```

### ExecuteSelection
`public void ExecuteSelection()`

**用途 / Purpose:** **用途 / Purpose:** 执行 selection 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SavedGameVM 实例
SavedGameVM savedGameVM = ...;
savedGameVM.ExecuteSelection();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SavedGameVM savedGameVM = ...;
savedGameVM.RefreshValues();
```

## 参见

- [本区域目录](../)