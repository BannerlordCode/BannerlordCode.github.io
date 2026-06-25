---
title: "MPArmoryCosmeticTauntSlotVM"
description: "MPArmoryCosmeticTauntSlotVM 的自动生成类参考。"
---
# MPArmoryCosmeticTauntSlotVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory.CosmeticItem
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPArmoryCosmeticTauntSlotVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory.CosmeticItem/MPArmoryCosmeticTauntSlotVM.cs`

## 概述

`MPArmoryCosmeticTauntSlotVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory.CosmeticItem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory.CosmeticItem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `SelectKeyVisual` | `public InputKeyItemVM SelectKeyVisual { get; set; }` |
| `EmptySlotKeyVisual` | `public InputKeyItemVM EmptySlotKeyVisual { get; set; }` |
| `IsAcceptingTaunts` | `public bool IsAcceptingTaunts { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsEmpty` | `public bool IsEmpty { get; set; }` |
| `IsFocused` | `public bool IsFocused { get; set; }` |
| `AssignedTauntItem` | `public MPArmoryCosmeticTauntItemVM AssignedTauntItem { get; set; }` |

## 主要方法

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** **用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPArmoryCosmeticTauntSlotVM 实例
MPArmoryCosmeticTauntSlotVM mPArmoryCosmeticTauntSlotVM = ...;
mPArmoryCosmeticTauntSlotVM.OnFinalize();
```

### AssignTauntItem
`public void AssignTauntItem(MPArmoryCosmeticTauntItemVM tauntItem, bool isSwapping = false)`

**用途 / Purpose:** **用途 / Purpose:** 调用 AssignTauntItem 对应的操作。

```csharp
// 先通过子系统 API 拿到 MPArmoryCosmeticTauntSlotVM 实例
MPArmoryCosmeticTauntSlotVM mPArmoryCosmeticTauntSlotVM = ...;
mPArmoryCosmeticTauntSlotVM.AssignTauntItem(tauntItem, false);
```

### ExecuteSelect
`public void ExecuteSelect()`

**用途 / Purpose:** **用途 / Purpose:** 执行 select 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPArmoryCosmeticTauntSlotVM 实例
MPArmoryCosmeticTauntSlotVM mPArmoryCosmeticTauntSlotVM = ...;
mPArmoryCosmeticTauntSlotVM.ExecuteSelect();
```

### ExecutePreview
`public void ExecutePreview()`

**用途 / Purpose:** **用途 / Purpose:** 执行 preview 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPArmoryCosmeticTauntSlotVM 实例
MPArmoryCosmeticTauntSlotVM mPArmoryCosmeticTauntSlotVM = ...;
mPArmoryCosmeticTauntSlotVM.ExecutePreview();
```

### ExecuteFocus
`public void ExecuteFocus()`

**用途 / Purpose:** **用途 / Purpose:** 执行 focus 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPArmoryCosmeticTauntSlotVM 实例
MPArmoryCosmeticTauntSlotVM mPArmoryCosmeticTauntSlotVM = ...;
mPArmoryCosmeticTauntSlotVM.ExecuteFocus();
```

### ExecuteUnfocus
`public void ExecuteUnfocus()`

**用途 / Purpose:** **用途 / Purpose:** 执行 unfocus 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPArmoryCosmeticTauntSlotVM 实例
MPArmoryCosmeticTauntSlotVM mPArmoryCosmeticTauntSlotVM = ...;
mPArmoryCosmeticTauntSlotVM.ExecuteUnfocus();
```

### SetSelectKeyVisual
`public void SetSelectKeyVisual(HotKey hotKey)`

**用途 / Purpose:** **用途 / Purpose:** 为 select key visual 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MPArmoryCosmeticTauntSlotVM 实例
MPArmoryCosmeticTauntSlotVM mPArmoryCosmeticTauntSlotVM = ...;
mPArmoryCosmeticTauntSlotVM.SetSelectKeyVisual(hotKey);
```

### SetEmptySlotKeyVisual
`public void SetEmptySlotKeyVisual(HotKey hotKey)`

**用途 / Purpose:** **用途 / Purpose:** 为 empty slot key visual 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MPArmoryCosmeticTauntSlotVM 实例
MPArmoryCosmeticTauntSlotVM mPArmoryCosmeticTauntSlotVM = ...;
mPArmoryCosmeticTauntSlotVM.SetEmptySlotKeyVisual(hotKey);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MPArmoryCosmeticTauntSlotVM mPArmoryCosmeticTauntSlotVM = ...;
mPArmoryCosmeticTauntSlotVM.OnFinalize();
```

## 参见

- [本区域目录](../)