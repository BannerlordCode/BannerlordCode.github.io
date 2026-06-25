---
title: "SiegeWeaponController"
description: "SiegeWeaponController 的自动生成类参考。"
---
# SiegeWeaponController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SiegeWeaponController`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/SiegeWeaponController.cs`

## 概述

`SiegeWeaponController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `SiegeWeaponController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### Select
`public void Select(SiegeWeapon weapon)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 SiegeWeaponController 实例
SiegeWeaponController siegeWeaponController = ...;
siegeWeaponController.Select(weapon);
```

### ClearSelectedWeapons
`public void ClearSelectedWeapons()`

**用途 / Purpose:** 清空当前对象中的「selected weapons」。

```csharp
// 先通过子系统 API 拿到 SiegeWeaponController 实例
SiegeWeaponController siegeWeaponController = ...;
siegeWeaponController.ClearSelectedWeapons();
```

### Deselect
`public void Deselect(SiegeWeapon weapon)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 SiegeWeaponController 实例
SiegeWeaponController siegeWeaponController = ...;
siegeWeaponController.Deselect(weapon);
```

### SelectAll
`public void SelectAll()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 SiegeWeaponController 实例
SiegeWeaponController siegeWeaponController = ...;
siegeWeaponController.SelectAll();
```

### IsWeaponSelectable
`public static bool IsWeaponSelectable(SiegeWeapon weapon)`

**用途 / Purpose:** 判断当前对象是否处于 「weapon selectable」 状态或条件。

```csharp
// 静态调用，不需要实例
SiegeWeaponController.IsWeaponSelectable(weapon);
```

### GetActiveOrderOf
`public static SiegeWeaponOrderType GetActiveOrderOf(SiegeWeapon weapon)`

**用途 / Purpose:** 读取并返回当前对象中 「active order of」 的结果。

```csharp
// 静态调用，不需要实例
SiegeWeaponController.GetActiveOrderOf(weapon);
```

### GetActiveMovementOrderOf
`public static SiegeWeaponOrderType GetActiveMovementOrderOf(SiegeWeapon weapon)`

**用途 / Purpose:** 读取并返回当前对象中 「active movement order of」 的结果。

```csharp
// 静态调用，不需要实例
SiegeWeaponController.GetActiveMovementOrderOf(weapon);
```

### GetActiveFacingOrderOf
`public static SiegeWeaponOrderType GetActiveFacingOrderOf(SiegeWeapon weapon)`

**用途 / Purpose:** 读取并返回当前对象中 「active facing order of」 的结果。

```csharp
// 静态调用，不需要实例
SiegeWeaponController.GetActiveFacingOrderOf(weapon);
```

### GetActiveFiringOrderOf
`public static SiegeWeaponOrderType GetActiveFiringOrderOf(SiegeWeapon weapon)`

**用途 / Purpose:** 读取并返回当前对象中 「active firing order of」 的结果。

```csharp
// 静态调用，不需要实例
SiegeWeaponController.GetActiveFiringOrderOf(weapon);
```

### GetActiveAIControlOrderOf
`public static SiegeWeaponOrderType GetActiveAIControlOrderOf(SiegeWeapon weapon)`

**用途 / Purpose:** 读取并返回当前对象中 「active a i control order of」 的结果。

```csharp
// 静态调用，不需要实例
SiegeWeaponController.GetActiveAIControlOrderOf(weapon);
```

### SetOrder
`public void SetOrder(SiegeWeaponOrderType order)`

**用途 / Purpose:** 为 「order」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SiegeWeaponController 实例
SiegeWeaponController siegeWeaponController = ...;
siegeWeaponController.SetOrder(order);
```

### GetShortcutIndexOf
`public int GetShortcutIndexOf(SiegeWeapon weapon)`

**用途 / Purpose:** 读取并返回当前对象中 「shortcut index of」 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeWeaponController 实例
SiegeWeaponController siegeWeaponController = ...;
var result = siegeWeaponController.GetShortcutIndexOf(weapon);
```

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<SiegeWeaponController>();
```

## 参见

- [本区域目录](../)