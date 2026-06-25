---
title: "InitialMenuVM"
description: "InitialMenuVM 的自动生成类参考。"
---
# InitialMenuVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.InitialMenu
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class InitialMenuVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/InitialMenu/InitialMenuVM.cs`

## 概述

`InitialMenuVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.InitialMenu`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.InitialMenu` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `MenuOptions` | `public MBBindingList<InitialMenuOptionVM> MenuOptions { get; set; }` |
| `DownloadingText` | `public string DownloadingText { get; set; }` |
| `SelectProfileText` | `public string SelectProfileText { get; set; }` |
| `ProfileName` | `public string ProfileName { get; set; }` |
| `IsProfileSelectionEnabled` | `public bool IsProfileSelectionEnabled { get; set; }` |
| `IsDownloadingContent` | `public bool IsDownloadingContent { get; set; }` |
| `IsNavalDLCEnabled` | `public bool IsNavalDLCEnabled { get; set; }` |
| `IsUpsellButtonVisible` | `public bool IsUpsellButtonVisible { get; set; }` |
| `IsUpsellButtonActive` | `public bool IsUpsellButtonActive { get; set; }` |
| `CurrentLanguageString` | `public string CurrentLanguageString { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 InitialMenuVM 实例
InitialMenuVM initialMenuVM = ...;
initialMenuVM.RefreshValues();
```

### RefreshMenuOptions
`public void RefreshMenuOptions()`

**用途 / Purpose:** 使 menu options 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 InitialMenuVM 实例
InitialMenuVM initialMenuVM = ...;
initialMenuVM.RefreshMenuOptions();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 InitialMenuVM 实例
InitialMenuVM initialMenuVM = ...;
initialMenuVM.OnFinalize();
```

### ExecuteNavigateToDLCStorePage
`public void ExecuteNavigateToDLCStorePage()`

**用途 / Purpose:** 执行 navigate to d l c store page 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 InitialMenuVM 实例
InitialMenuVM initialMenuVM = ...;
initialMenuVM.ExecuteNavigateToDLCStorePage();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
InitialMenuVM initialMenuVM = ...;
initialMenuVM.RefreshValues();
```

## 参见

- [本区域目录](../)