---
title: "MissionMainAgentEquipmentControllerVM"
description: "MissionMainAgentEquipmentControllerVM 的自动生成类参考。"
---
# MissionMainAgentEquipmentControllerVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMainAgentEquipmentControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.HUD/MissionMainAgentEquipmentControllerVM.cs`

## 概述

`MissionMainAgentEquipmentControllerVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsDropControllerActive` | `public bool IsDropControllerActive { get; set; }` |
| `IsEquipControllerActive` | `public bool IsEquipControllerActive { get; set; }` |
| `DropText` | `public string DropText { get; set; }` |
| `EquipText` | `public string EquipText { get; set; }` |
| `FocusedItemText` | `public string FocusedItemText { get; set; }` |
| `SelectedItemText` | `public string SelectedItemText { get; set; }` |
| `DropActions` | `public MBBindingList<EquipmentActionItemVM> DropActions { get; set; }` |
| `EquipActions` | `public MBBindingList<EquipmentActionItemVM> EquipActions { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MissionMainAgentEquipmentControllerVM 实例
MissionMainAgentEquipmentControllerVM missionMainAgentEquipmentControllerVM = ...;
missionMainAgentEquipmentControllerVM.RefreshValues();
```

### OnDropControllerToggle
`public void OnDropControllerToggle(bool isActive)`

**用途 / Purpose:** **用途 / Purpose:** 在 drop controller toggle 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMainAgentEquipmentControllerVM 实例
MissionMainAgentEquipmentControllerVM missionMainAgentEquipmentControllerVM = ...;
missionMainAgentEquipmentControllerVM.OnDropControllerToggle(false);
```

### SetCurrentFocusedWeaponEntity
`public void SetCurrentFocusedWeaponEntity(SpawnedItemEntity weaponEntity)`

**用途 / Purpose:** **用途 / Purpose:** 为 current focused weapon entity 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionMainAgentEquipmentControllerVM 实例
MissionMainAgentEquipmentControllerVM missionMainAgentEquipmentControllerVM = ...;
missionMainAgentEquipmentControllerVM.SetCurrentFocusedWeaponEntity(weaponEntity);
```

### OnEquipControllerToggle
`public void OnEquipControllerToggle(bool isActive)`

**用途 / Purpose:** **用途 / Purpose:** 在 equip controller toggle 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMainAgentEquipmentControllerVM 实例
MissionMainAgentEquipmentControllerVM missionMainAgentEquipmentControllerVM = ...;
missionMainAgentEquipmentControllerVM.OnEquipControllerToggle(false);
```

### OnCancelEquipController
`public void OnCancelEquipController()`

**用途 / Purpose:** **用途 / Purpose:** 在 cancel equip controller 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMainAgentEquipmentControllerVM 实例
MissionMainAgentEquipmentControllerVM missionMainAgentEquipmentControllerVM = ...;
missionMainAgentEquipmentControllerVM.OnCancelEquipController();
```

### OnCancelDropController
`public void OnCancelDropController()`

**用途 / Purpose:** **用途 / Purpose:** 在 cancel drop controller 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMainAgentEquipmentControllerVM 实例
MissionMainAgentEquipmentControllerVM missionMainAgentEquipmentControllerVM = ...;
missionMainAgentEquipmentControllerVM.OnCancelDropController();
```

### GetItemTypeAsString
`public static string GetItemTypeAsString(ItemObject item)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 item type as string 的结果。

```csharp
// 静态调用，不需要实例
MissionMainAgentEquipmentControllerVM.GetItemTypeAsString(item);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MissionMainAgentEquipmentControllerVM missionMainAgentEquipmentControllerVM = ...;
missionMainAgentEquipmentControllerVM.RefreshValues();
```

## 参见

- [本区域目录](../)