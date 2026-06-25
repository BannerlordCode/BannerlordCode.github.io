---
title: "ItemCollectionElementViewExtensions"
description: "ItemCollectionElementViewExtensions 的自动生成类参考。"
---
# ItemCollectionElementViewExtensions

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class ItemCollectionElementViewExtensions`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/ItemCollectionElementViewExtensions.cs`

## 概述

`ItemCollectionElementViewExtensions` 位于 `TaleWorlds.MountAndBlade.View`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.View` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetMaterialCacheID
`public static string GetMaterialCacheID(object o)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 material cache i d 的结果。

```csharp
// 静态调用，不需要实例
ItemCollectionElementViewExtensions.GetMaterialCacheID(o);
```

### GetMultiMesh
`public static MetaMesh GetMultiMesh(this ItemObject item, bool isFemale, bool hasGloves, bool needBatchedVersion)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 multi mesh 的结果。

```csharp
// 静态调用，不需要实例
ItemCollectionElementViewExtensions.GetMultiMesh(item, false, false, false);
```

### GetMultiMesh
`public static MetaMesh GetMultiMesh(this EquipmentElement equipmentElement, bool isFemale, bool hasGloves, bool needBatchedVersion)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 multi mesh 的结果。

```csharp
// 静态调用，不需要实例
ItemCollectionElementViewExtensions.GetMultiMesh(equipmentElement, false, false, false);
```

### GetMultiMesh
`public static MetaMesh GetMultiMesh(this MissionWeapon weapon, bool isFemale, bool hasGloves, bool needBatchedVersion)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 multi mesh 的结果。

```csharp
// 静态调用，不需要实例
ItemCollectionElementViewExtensions.GetMultiMesh(weapon, false, false, false);
```

### GetItemMeshForInventory
`public static MetaMesh GetItemMeshForInventory(this ItemRosterElement rosterElement, bool isFemale = false)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 item mesh for inventory 的结果。

```csharp
// 静态调用，不需要实例
ItemCollectionElementViewExtensions.GetItemMeshForInventory(rosterElement, false);
```

### GetHolsterMeshCopy
`public static MetaMesh GetHolsterMeshCopy(this ItemObject item)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 holster mesh copy 的结果。

```csharp
// 静态调用，不需要实例
ItemCollectionElementViewExtensions.GetHolsterMeshCopy(item);
```

### GetHolsterMeshIfExists
`public static MetaMesh GetHolsterMeshIfExists(this ItemObject item)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 holster mesh if exists 的结果。

```csharp
// 静态调用，不需要实例
ItemCollectionElementViewExtensions.GetHolsterMeshIfExists(item);
```

### GetHolsterWithWeaponMeshCopy
`public static MetaMesh GetHolsterWithWeaponMeshCopy(this ItemObject item, bool needBatchedVersion)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 holster with weapon mesh copy 的结果。

```csharp
// 静态调用，不需要实例
ItemCollectionElementViewExtensions.GetHolsterWithWeaponMeshCopy(item, false);
```

### GetHolsterWithWeaponMeshIfExists
`public static MetaMesh GetHolsterWithWeaponMeshIfExists(this ItemObject item)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 holster with weapon mesh if exists 的结果。

```csharp
// 静态调用，不需要实例
ItemCollectionElementViewExtensions.GetHolsterWithWeaponMeshIfExists(item);
```

### GetFlyingMeshCopy
`public static MetaMesh GetFlyingMeshCopy(this ItemObject item, bool needBatchedVersion)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 flying mesh copy 的结果。

```csharp
// 静态调用，不需要实例
ItemCollectionElementViewExtensions.GetFlyingMeshCopy(item, false);
```

### GetFlyingMeshIfExists
`public static MetaMesh GetFlyingMeshIfExists(this ItemObject item)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 flying mesh if exists 的结果。

```csharp
// 静态调用，不需要实例
ItemCollectionElementViewExtensions.GetFlyingMeshIfExists(item);
```

### GetCameraFrameForInventory
`public static MatrixFrame GetCameraFrameForInventory(this ItemRosterElement itemRosterElement)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 camera frame for inventory 的结果。

```csharp
// 静态调用，不需要实例
ItemCollectionElementViewExtensions.GetCameraFrameForInventory(itemRosterElement);
```

### GetItemFrameForInventory
`public static MatrixFrame GetItemFrameForInventory(this ItemRosterElement itemRosterElement)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 item frame for inventory 的结果。

```csharp
// 静态调用，不需要实例
ItemCollectionElementViewExtensions.GetItemFrameForInventory(itemRosterElement);
```

### GetItemFrameForItemTooltip
`public static MatrixFrame GetItemFrameForItemTooltip(this ItemRosterElement itemRosterElement)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 item frame for item tooltip 的结果。

```csharp
// 静态调用，不需要实例
ItemCollectionElementViewExtensions.GetItemFrameForItemTooltip(itemRosterElement);
```

### OnGetWeaponData
`public static void OnGetWeaponData(ref WeaponData weaponData, MissionWeapon weapon, bool isFemale, Banner banner, bool needBatchedVersion)`

**用途 / Purpose:** **用途 / Purpose:** 在 get weapon data 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
ItemCollectionElementViewExtensions.OnGetWeaponData(weaponData, weapon, false, banner, false);
```

## 使用示例

```csharp
ItemCollectionElementViewExtensions.GetMaterialCacheID(o);
```

## 参见

- [本区域目录](../)