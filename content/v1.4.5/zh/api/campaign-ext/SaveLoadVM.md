---
title: "SaveLoadVM"
description: "SaveLoadVM 的自动生成类参考。"
---
# SaveLoadVM

**Namespace:** SandBox.ViewModelCollection.SaveLoad
**Module:** SandBox.ViewModelCollection
**Type:** `public class SaveLoadVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.SaveLoad/SaveLoadVM.cs`

## 概述

`SaveLoadVM` 位于 `SandBox.ViewModelCollection.SaveLoad`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.SaveLoad` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsLoadingSaves` | `public bool IsLoadingSaves { get; set; }` |
| `IsBusyWithAnAction` | `public bool IsBusyWithAnAction { get; set; }` |
| `IsSearchAvailable` | `public bool IsSearchAvailable { get; set; }` |
| `SearchText` | `public string SearchText { get; set; }` |
| `SearchPlaceholderText` | `public string SearchPlaceholderText { get; set; }` |
| `VisualDisabledText` | `public string VisualDisabledText { get; set; }` |
| `SaveGroups` | `public MBBindingList<SavedGameGroupVM> SaveGroups { get; set; }` |
| `CurrentSelectedSave` | `public SavedGameVM CurrentSelectedSave { get; set; }` |
| `CreateNewSaveSlotText` | `public string CreateNewSaveSlotText { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `CancelText` | `public string CancelText { get; set; }` |
| `IsSaving` | `public bool IsSaving { get; set; }` |
| `CanCreateNewSave` | `public bool CanCreateNewSave { get; set; }` |
| `IsVisualDisabled` | `public bool IsVisualDisabled { get; set; }` |
| `CreateNewSaveHint` | `public HintViewModel CreateNewSaveHint { get; set; }` |
| `IsActionEnabled` | `public bool IsActionEnabled { get; set; }` |
| `IsAnyItemSelected` | `public bool IsAnyItemSelected { get; set; }` |
| `DoneText` | `public string DoneText { get; set; }` |
| `SaveLoadText` | `public string SaveLoadText { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `DeleteInputKey` | `public InputKeyItemVM DeleteInputKey { get; set; }` |

## 主要方法

### Initialize
`public async void Initialize()`

**用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 SaveLoadVM 实例
SaveLoadVM saveLoadVM = ...;
saveLoadVM.Initialize();
```

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 SaveLoadVM 实例
SaveLoadVM saveLoadVM = ...;
saveLoadVM.RefreshValues();
```

### ExecuteCreateNewSaveGame
`public void ExecuteCreateNewSaveGame()`

**用途 / Purpose:** 执行 「create new save game」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SaveLoadVM 实例
SaveLoadVM saveLoadVM = ...;
saveLoadVM.ExecuteCreateNewSaveGame();
```

### ExecuteDone
`public void ExecuteDone()`

**用途 / Purpose:** 执行 「done」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SaveLoadVM 实例
SaveLoadVM saveLoadVM = ...;
saveLoadVM.ExecuteDone();
```

### ExecuteLoadSave
`public void ExecuteLoadSave()`

**用途 / Purpose:** 执行 「load save」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SaveLoadVM 实例
SaveLoadVM saveLoadVM = ...;
saveLoadVM.ExecuteLoadSave();
```

### DeleteSelectedSave
`public void DeleteSelectedSave()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 SaveLoadVM 实例
SaveLoadVM saveLoadVM = ...;
saveLoadVM.DeleteSelectedSave();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 「finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SaveLoadVM 实例
SaveLoadVM saveLoadVM = ...;
saveLoadVM.OnFinalize();
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotkey)`

**用途 / Purpose:** 为 「done input key」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SaveLoadVM 实例
SaveLoadVM saveLoadVM = ...;
saveLoadVM.SetDoneInputKey(hotkey);
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotkey)`

**用途 / Purpose:** 为 「cancel input key」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SaveLoadVM 实例
SaveLoadVM saveLoadVM = ...;
saveLoadVM.SetCancelInputKey(hotkey);
```

### SetDeleteInputKey
`public void SetDeleteInputKey(HotKey hotkey)`

**用途 / Purpose:** 为 「delete input key」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SaveLoadVM 实例
SaveLoadVM saveLoadVM = ...;
saveLoadVM.SetDeleteInputKey(hotkey);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SaveLoadVM saveLoadVM = ...;
saveLoadVM.Initialize();
```

## 参见

- [本区域目录](../)