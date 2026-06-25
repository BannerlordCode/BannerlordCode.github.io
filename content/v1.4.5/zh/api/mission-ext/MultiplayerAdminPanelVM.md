---
title: "MultiplayerAdminPanelVM"
description: "MultiplayerAdminPanelVM 的自动生成类参考。"
---
# MultiplayerAdminPanelVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.AdminPanel
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerAdminPanelVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.AdminPanel/MultiplayerAdminPanelVM.cs`

## 概述

`MultiplayerAdminPanelVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.AdminPanel`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.AdminPanel` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsApplyDisabled` | `public bool IsApplyDisabled { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `CancelText` | `public string CancelText { get; set; }` |
| `ApplyText` | `public string ApplyText { get; set; }` |
| `StartMissionText` | `public string StartMissionText { get; set; }` |
| `ApplyDisabledHint` | `public HintViewModel ApplyDisabledHint { get; set; }` |
| `OptionGroups` | `public MBBindingList<MultiplayerAdminPanelOptionGroupVM> OptionGroups { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MultiplayerAdminPanelVM 实例
MultiplayerAdminPanelVM multiplayerAdminPanelVM = ...;
multiplayerAdminPanelVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 「finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MultiplayerAdminPanelVM 实例
MultiplayerAdminPanelVM multiplayerAdminPanelVM = ...;
multiplayerAdminPanelVM.OnFinalize();
```

### OnTick
`public void OnTick(float dt)`

**用途 / Purpose:** 在 「tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MultiplayerAdminPanelVM 实例
MultiplayerAdminPanelVM multiplayerAdminPanelVM = ...;
multiplayerAdminPanelVM.OnTick(0);
```

### ExecuteApplyChanges
`public void ExecuteApplyChanges()`

**用途 / Purpose:** 执行 「apply changes」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MultiplayerAdminPanelVM 实例
MultiplayerAdminPanelVM multiplayerAdminPanelVM = ...;
multiplayerAdminPanelVM.ExecuteApplyChanges();
```

### ExecuteCancel
`public void ExecuteCancel()`

**用途 / Purpose:** 执行 「cancel」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MultiplayerAdminPanelVM 实例
MultiplayerAdminPanelVM multiplayerAdminPanelVM = ...;
multiplayerAdminPanelVM.ExecuteCancel();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MultiplayerAdminPanelVM multiplayerAdminPanelVM = ...;
multiplayerAdminPanelVM.RefreshValues();
```

## 参见

- [本区域目录](../)