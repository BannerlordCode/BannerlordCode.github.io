---
title: "MultiplayerAdminPanelMultiSelectionOptionVM"
description: "MultiplayerAdminPanelMultiSelectionOptionVM 的自动生成类参考。"
---
# MultiplayerAdminPanelMultiSelectionOptionVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.AdminPanel
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerAdminPanelMultiSelectionOptionVM : MultiplayerAdminPanelOptionBaseVM`
**Base:** `MultiplayerAdminPanelOptionBaseVM`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.AdminPanel/MultiplayerAdminPanelMultiSelectionOptionVM.cs`

## 概述

`MultiplayerAdminPanelMultiSelectionOptionVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.AdminPanel`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.AdminPanel` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsMultiSelectionOption` | `public bool IsMultiSelectionOption { get; set; }` |
| `MultiSelectionOptions` | `public AdminPanelOptionSelectorVM MultiSelectionOptions { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MultiplayerAdminPanelMultiSelectionOptionVM 实例
MultiplayerAdminPanelMultiSelectionOptionVM multiplayerAdminPanelMultiSelectionOptionVM = ...;
multiplayerAdminPanelMultiSelectionOptionVM.RefreshValues();
```

### UpdateValues
`public override void UpdateValues()`

**用途 / Purpose:** 重新计算并更新 values 的最新表示。

```csharp
// 先通过子系统 API 拿到 MultiplayerAdminPanelMultiSelectionOptionVM 实例
MultiplayerAdminPanelMultiSelectionOptionVM multiplayerAdminPanelMultiSelectionOptionVM = ...;
multiplayerAdminPanelMultiSelectionOptionVM.UpdateValues();
```

### ExecuteRestoreDefaults
`public override void ExecuteRestoreDefaults()`

**用途 / Purpose:** 执行 restore defaults 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MultiplayerAdminPanelMultiSelectionOptionVM 实例
MultiplayerAdminPanelMultiSelectionOptionVM multiplayerAdminPanelMultiSelectionOptionVM = ...;
multiplayerAdminPanelMultiSelectionOptionVM.ExecuteRestoreDefaults();
```

### ExecuteRevertChanges
`public override void ExecuteRevertChanges()`

**用途 / Purpose:** 执行 revert changes 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MultiplayerAdminPanelMultiSelectionOptionVM 实例
MultiplayerAdminPanelMultiSelectionOptionVM multiplayerAdminPanelMultiSelectionOptionVM = ...;
multiplayerAdminPanelMultiSelectionOptionVM.ExecuteRevertChanges();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MultiplayerAdminPanelMultiSelectionOptionVM multiplayerAdminPanelMultiSelectionOptionVM = ...;
multiplayerAdminPanelMultiSelectionOptionVM.RefreshValues();
```

## 参见

- [本区域目录](../)