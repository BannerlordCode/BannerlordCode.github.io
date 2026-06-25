---
title: "MPArmoryCosmeticItemBaseVM"
description: "MPArmoryCosmeticItemBaseVM 的自动生成类参考。"
---
# MPArmoryCosmeticItemBaseVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory.CosmeticItem
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MPArmoryCosmeticItemBaseVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory.CosmeticItem/MPArmoryCosmeticItemBaseVM.cs`

## 概述

`MPArmoryCosmeticItemBaseVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory.CosmeticItem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory.CosmeticItem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `UnequipText` | `public string UnequipText { get; }` |
| `CosmeticType` | `public CosmeticType CosmeticType { get; set; }` |
| `IsUnlocked` | `public bool IsUnlocked { get; set; }` |
| `IsUsed` | `public bool IsUsed { get; set; }` |
| `AreActionsEnabled` | `public bool AreActionsEnabled { get; set; }` |
| `IsSelectable` | `public bool IsSelectable { get; set; }` |
| `IsUnequippable` | `public bool IsUnequippable { get; set; }` |
| `Cost` | `public int Cost { get; set; }` |
| `Rarity` | `public int Rarity { get; set; }` |
| `ItemType` | `public int ItemType { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `OwnedText` | `public string OwnedText { get; set; }` |
| `ActionText` | `public string ActionText { get; set; }` |
| `PreviewText` | `public string PreviewText { get; set; }` |
| `Icon` | `public ItemImageIdentifierVM Icon { get; set; }` |
| `ActionKey` | `public InputKeyItemVM ActionKey { get; set; }` |
| `PreviewKey` | `public InputKeyItemVM PreviewKey { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPArmoryCosmeticItemBaseVM 实例
MPArmoryCosmeticItemBaseVM mPArmoryCosmeticItemBaseVM = ...;
mPArmoryCosmeticItemBaseVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** **用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPArmoryCosmeticItemBaseVM 实例
MPArmoryCosmeticItemBaseVM mPArmoryCosmeticItemBaseVM = ...;
mPArmoryCosmeticItemBaseVM.OnFinalize();
```

### ExecuteAction
`public void ExecuteAction()`

**用途 / Purpose:** **用途 / Purpose:** 执行 action 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPArmoryCosmeticItemBaseVM 实例
MPArmoryCosmeticItemBaseVM mPArmoryCosmeticItemBaseVM = ...;
mPArmoryCosmeticItemBaseVM.ExecuteAction();
```

### ExecutePreview
`public void ExecutePreview()`

**用途 / Purpose:** **用途 / Purpose:** 执行 preview 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPArmoryCosmeticItemBaseVM 实例
MPArmoryCosmeticItemBaseVM mPArmoryCosmeticItemBaseVM = ...;
mPArmoryCosmeticItemBaseVM.ExecutePreview();
```

### ExecuteEnableActions
`public void ExecuteEnableActions()`

**用途 / Purpose:** **用途 / Purpose:** 执行 enable actions 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPArmoryCosmeticItemBaseVM 实例
MPArmoryCosmeticItemBaseVM mPArmoryCosmeticItemBaseVM = ...;
mPArmoryCosmeticItemBaseVM.ExecuteEnableActions();
```

### ExecuteDisableActions
`public void ExecuteDisableActions()`

**用途 / Purpose:** **用途 / Purpose:** 执行 disable actions 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPArmoryCosmeticItemBaseVM 实例
MPArmoryCosmeticItemBaseVM mPArmoryCosmeticItemBaseVM = ...;
mPArmoryCosmeticItemBaseVM.ExecuteDisableActions();
```

### RefreshKeyBindings
`public void RefreshKeyBindings(HotKey actionKey, HotKey previewKey)`

**用途 / Purpose:** **用途 / Purpose:** 使 key bindings 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPArmoryCosmeticItemBaseVM 实例
MPArmoryCosmeticItemBaseVM mPArmoryCosmeticItemBaseVM = ...;
mPArmoryCosmeticItemBaseVM.RefreshKeyBindings(actionKey, previewKey);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
MPArmoryCosmeticItemBaseVM instance = ...;
```

## 参见

- [本区域目录](../)