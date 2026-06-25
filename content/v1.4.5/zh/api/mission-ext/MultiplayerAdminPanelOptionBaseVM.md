---
title: "MultiplayerAdminPanelOptionBaseVM"
description: "MultiplayerAdminPanelOptionBaseVM 的自动生成类参考。"
---
# MultiplayerAdminPanelOptionBaseVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.AdminPanel
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MultiplayerAdminPanelOptionBaseVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.AdminPanel/MultiplayerAdminPanelOptionBaseVM.cs`

## 概述

`MultiplayerAdminPanelOptionBaseVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.AdminPanel`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.AdminPanel` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsRequired` | `public bool IsRequired { get; set; }` |
| `IsDisabled` | `public bool IsDisabled { get; set; }` |
| `IsDirty` | `public bool IsDirty { get; set; }` |
| `CanResetToDefault` | `public bool CanResetToDefault { get; set; }` |
| `IsFilteredOut` | `public bool IsFilteredOut { get; set; }` |
| `RequiresRestart` | `public bool RequiresRestart { get; set; }` |
| `OptionTitle` | `public string OptionTitle { get; set; }` |
| `OptionDescription` | `public string OptionDescription { get; set; }` |
| `DisabledHint` | `public HintViewModel DisabledHint { get; set; }` |
| `DescriptionHint` | `public HintViewModel DescriptionHint { get; set; }` |
| `RequiresRestartHint` | `public HintViewModel RequiresRestartHint { get; set; }` |
| `IsDirtyHint` | `public HintViewModel IsDirtyHint { get; set; }` |
| `RestoreToDefaultsHint` | `public HintViewModel RestoreToDefaultsHint { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MultiplayerAdminPanelOptionBaseVM 实例
MultiplayerAdminPanelOptionBaseVM multiplayerAdminPanelOptionBaseVM = ...;
multiplayerAdminPanelOptionBaseVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** **用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MultiplayerAdminPanelOptionBaseVM 实例
MultiplayerAdminPanelOptionBaseVM multiplayerAdminPanelOptionBaseVM = ...;
multiplayerAdminPanelOptionBaseVM.OnFinalize();
```

### UpdateValues
`public virtual void UpdateValues()`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 values 的最新表示。

```csharp
// 先通过子系统 API 拿到 MultiplayerAdminPanelOptionBaseVM 实例
MultiplayerAdminPanelOptionBaseVM multiplayerAdminPanelOptionBaseVM = ...;
multiplayerAdminPanelOptionBaseVM.UpdateValues();
```

### ExecuteRevertChanges
`public virtual void ExecuteRevertChanges()`

**用途 / Purpose:** **用途 / Purpose:** 执行 revert changes 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MultiplayerAdminPanelOptionBaseVM 实例
MultiplayerAdminPanelOptionBaseVM multiplayerAdminPanelOptionBaseVM = ...;
multiplayerAdminPanelOptionBaseVM.ExecuteRevertChanges();
```

### ExecuteRestoreDefaults
`public virtual void ExecuteRestoreDefaults()`

**用途 / Purpose:** **用途 / Purpose:** 执行 restore defaults 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MultiplayerAdminPanelOptionBaseVM 实例
MultiplayerAdminPanelOptionBaseVM multiplayerAdminPanelOptionBaseVM = ...;
multiplayerAdminPanelOptionBaseVM.ExecuteRestoreDefaults();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
MultiplayerAdminPanelOptionBaseVM instance = ...;
```

## 参见

- [本区域目录](../)