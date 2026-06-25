---
title: "MissionMainAgentControllerEquipDropVM"
description: "MissionMainAgentControllerEquipDropVM 的自动生成类参考。"
---
# MissionMainAgentControllerEquipDropVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMainAgentControllerEquipDropVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionMainAgentControllerEquipDropVM.cs`

## 概述

`MissionMainAgentControllerEquipDropVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `EquippedWeapons` | `public MBBindingList<ControllerEquippedItemVM> EquippedWeapons { get; set; }` |
| `EquippedExtraWeapon` | `public ControllerEquippedItemVM EquippedExtraWeapon { get; set; }` |
| `HoldToDropText` | `public string HoldToDropText { get; set; }` |
| `PressToEquipText` | `public string PressToEquipText { get; set; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `HaveExtraWeapon` | `public bool HaveExtraWeapon { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MissionMainAgentControllerEquipDropVM 实例
MissionMainAgentControllerEquipDropVM missionMainAgentControllerEquipDropVM = ...;
missionMainAgentControllerEquipDropVM.RefreshValues();
```

### InitializeMainAgentPropterties
`public void InitializeMainAgentPropterties()`

**用途 / Purpose:** **用途 / Purpose:** 为 main agent propterties 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 MissionMainAgentControllerEquipDropVM 实例
MissionMainAgentControllerEquipDropVM missionMainAgentControllerEquipDropVM = ...;
missionMainAgentControllerEquipDropVM.InitializeMainAgentPropterties();
```

### OnToggle
`public void OnToggle(bool isEnabled)`

**用途 / Purpose:** **用途 / Purpose:** 在 toggle 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMainAgentControllerEquipDropVM 实例
MissionMainAgentControllerEquipDropVM missionMainAgentControllerEquipDropVM = ...;
missionMainAgentControllerEquipDropVM.OnToggle(false);
```

### OnCancelHoldController
`public void OnCancelHoldController()`

**用途 / Purpose:** **用途 / Purpose:** 在 cancel hold controller 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMainAgentControllerEquipDropVM 实例
MissionMainAgentControllerEquipDropVM missionMainAgentControllerEquipDropVM = ...;
missionMainAgentControllerEquipDropVM.OnCancelHoldController();
```

### OnWeaponDroppedAtIndex
`public void OnWeaponDroppedAtIndex(int droppedWeaponIndex)`

**用途 / Purpose:** **用途 / Purpose:** 在 weapon dropped at index 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMainAgentControllerEquipDropVM 实例
MissionMainAgentControllerEquipDropVM missionMainAgentControllerEquipDropVM = ...;
missionMainAgentControllerEquipDropVM.OnWeaponDroppedAtIndex(0);
```

### OnWeaponEquippedAtIndex
`public void OnWeaponEquippedAtIndex(int equippedWeaponIndex)`

**用途 / Purpose:** **用途 / Purpose:** 在 weapon equipped at index 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMainAgentControllerEquipDropVM 实例
MissionMainAgentControllerEquipDropVM missionMainAgentControllerEquipDropVM = ...;
missionMainAgentControllerEquipDropVM.OnWeaponEquippedAtIndex(0);
```

### SetDropProgressForIndex
`public void SetDropProgressForIndex(EquipmentIndex eqIndex, float progress)`

**用途 / Purpose:** **用途 / Purpose:** 为 drop progress for index 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionMainAgentControllerEquipDropVM 实例
MissionMainAgentControllerEquipDropVM missionMainAgentControllerEquipDropVM = ...;
missionMainAgentControllerEquipDropVM.SetDropProgressForIndex(eqIndex, 0);
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** **用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMainAgentControllerEquipDropVM 实例
MissionMainAgentControllerEquipDropVM missionMainAgentControllerEquipDropVM = ...;
missionMainAgentControllerEquipDropVM.OnFinalize();
```

### OnGamepadActiveChanged
`public void OnGamepadActiveChanged(bool isActive)`

**用途 / Purpose:** **用途 / Purpose:** 在 gamepad active changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMainAgentControllerEquipDropVM 实例
MissionMainAgentControllerEquipDropVM missionMainAgentControllerEquipDropVM = ...;
missionMainAgentControllerEquipDropVM.OnGamepadActiveChanged(false);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MissionMainAgentControllerEquipDropVM missionMainAgentControllerEquipDropVM = ...;
missionMainAgentControllerEquipDropVM.RefreshValues();
```

## 参见

- [本区域目录](../)