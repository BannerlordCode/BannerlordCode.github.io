---
title: "ItemCollectionElementViewExtensions"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ItemCollectionElementViewExtensions`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 获取 `material cache i d` 的当前值。

### GetMultiMesh
`public static MetaMesh GetMultiMesh(this ItemObject item, bool isFemale, bool hasGloves, bool needBatchedVersion)`

**用途 / Purpose:** 获取 `multi mesh` 的当前值。

### GetMultiMesh
`public static MetaMesh GetMultiMesh(this EquipmentElement equipmentElement, bool isFemale, bool hasGloves, bool needBatchedVersion)`

**用途 / Purpose:** 获取 `multi mesh` 的当前值。

### GetMultiMesh
`public static MetaMesh GetMultiMesh(this MissionWeapon weapon, bool isFemale, bool hasGloves, bool needBatchedVersion)`

**用途 / Purpose:** 获取 `multi mesh` 的当前值。

### GetItemMeshForInventory
`public static MetaMesh GetItemMeshForInventory(this ItemRosterElement rosterElement, bool isFemale = false)`

**用途 / Purpose:** 获取 `item mesh for inventory` 的当前值。

### GetHolsterMeshCopy
`public static MetaMesh GetHolsterMeshCopy(this ItemObject item)`

**用途 / Purpose:** 获取 `holster mesh copy` 的当前值。

### GetHolsterMeshIfExists
`public static MetaMesh GetHolsterMeshIfExists(this ItemObject item)`

**用途 / Purpose:** 获取 `holster mesh if exists` 的当前值。

### GetHolsterWithWeaponMeshCopy
`public static MetaMesh GetHolsterWithWeaponMeshCopy(this ItemObject item, bool needBatchedVersion)`

**用途 / Purpose:** 获取 `holster with weapon mesh copy` 的当前值。

### GetHolsterWithWeaponMeshIfExists
`public static MetaMesh GetHolsterWithWeaponMeshIfExists(this ItemObject item)`

**用途 / Purpose:** 获取 `holster with weapon mesh if exists` 的当前值。

### GetFlyingMeshCopy
`public static MetaMesh GetFlyingMeshCopy(this ItemObject item, bool needBatchedVersion)`

**用途 / Purpose:** 获取 `flying mesh copy` 的当前值。

### GetFlyingMeshIfExists
`public static MetaMesh GetFlyingMeshIfExists(this ItemObject item)`

**用途 / Purpose:** 获取 `flying mesh if exists` 的当前值。

### GetCameraFrameForInventory
`public static MatrixFrame GetCameraFrameForInventory(this ItemRosterElement itemRosterElement)`

**用途 / Purpose:** 获取 `camera frame for inventory` 的当前值。

### GetItemFrameForInventory
`public static MatrixFrame GetItemFrameForInventory(this ItemRosterElement itemRosterElement)`

**用途 / Purpose:** 获取 `item frame for inventory` 的当前值。

### GetItemFrameForItemTooltip
`public static MatrixFrame GetItemFrameForItemTooltip(this ItemRosterElement itemRosterElement)`

**用途 / Purpose:** 获取 `item frame for item tooltip` 的当前值。

### OnGetWeaponData
`public static void OnGetWeaponData(ref WeaponData weaponData, MissionWeapon weapon, bool isFemale, Banner banner, bool needBatchedVersion)`

**用途 / Purpose:** 当 `get weapon data` 事件触发时调用此方法。

## 使用示例

```csharp
ItemCollectionElementViewExtensions.GetMaterialCacheID(o);
```

## 参见

- [完整类目录](../catalog)