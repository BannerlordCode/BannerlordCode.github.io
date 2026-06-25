---
title: "ItemCollectionElementViewExtensions"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ItemCollectionElementViewExtensions`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ItemCollectionElementViewExtensions

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class ItemCollectionElementViewExtensions`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/ItemCollectionElementViewExtensions.cs`

## Overview

`ItemCollectionElementViewExtensions` lives in `TaleWorlds.MountAndBlade.View` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetMaterialCacheID
`public static string GetMaterialCacheID(object o)`

**Purpose:** Gets the current value of `material cache i d`.

### GetMultiMesh
`public static MetaMesh GetMultiMesh(this ItemObject item, bool isFemale, bool hasGloves, bool needBatchedVersion)`

**Purpose:** Gets the current value of `multi mesh`.

### GetMultiMesh
`public static MetaMesh GetMultiMesh(this EquipmentElement equipmentElement, bool isFemale, bool hasGloves, bool needBatchedVersion)`

**Purpose:** Gets the current value of `multi mesh`.

### GetMultiMesh
`public static MetaMesh GetMultiMesh(this MissionWeapon weapon, bool isFemale, bool hasGloves, bool needBatchedVersion)`

**Purpose:** Gets the current value of `multi mesh`.

### GetItemMeshForInventory
`public static MetaMesh GetItemMeshForInventory(this ItemRosterElement rosterElement, bool isFemale = false)`

**Purpose:** Gets the current value of `item mesh for inventory`.

### GetHolsterMeshCopy
`public static MetaMesh GetHolsterMeshCopy(this ItemObject item)`

**Purpose:** Gets the current value of `holster mesh copy`.

### GetHolsterMeshIfExists
`public static MetaMesh GetHolsterMeshIfExists(this ItemObject item)`

**Purpose:** Gets the current value of `holster mesh if exists`.

### GetHolsterWithWeaponMeshCopy
`public static MetaMesh GetHolsterWithWeaponMeshCopy(this ItemObject item, bool needBatchedVersion)`

**Purpose:** Gets the current value of `holster with weapon mesh copy`.

### GetHolsterWithWeaponMeshIfExists
`public static MetaMesh GetHolsterWithWeaponMeshIfExists(this ItemObject item)`

**Purpose:** Gets the current value of `holster with weapon mesh if exists`.

### GetFlyingMeshCopy
`public static MetaMesh GetFlyingMeshCopy(this ItemObject item, bool needBatchedVersion)`

**Purpose:** Gets the current value of `flying mesh copy`.

### GetFlyingMeshIfExists
`public static MetaMesh GetFlyingMeshIfExists(this ItemObject item)`

**Purpose:** Gets the current value of `flying mesh if exists`.

### GetCameraFrameForInventory
`public static MatrixFrame GetCameraFrameForInventory(this ItemRosterElement itemRosterElement)`

**Purpose:** Gets the current value of `camera frame for inventory`.

### GetItemFrameForInventory
`public static MatrixFrame GetItemFrameForInventory(this ItemRosterElement itemRosterElement)`

**Purpose:** Gets the current value of `item frame for inventory`.

### GetItemFrameForItemTooltip
`public static MatrixFrame GetItemFrameForItemTooltip(this ItemRosterElement itemRosterElement)`

**Purpose:** Gets the current value of `item frame for item tooltip`.

### OnGetWeaponData
`public static void OnGetWeaponData(ref WeaponData weaponData, MissionWeapon weapon, bool isFemale, Banner banner, bool needBatchedVersion)`

**Purpose:** Called when the `get weapon data` event is raised.

## Usage Example

```csharp
ItemCollectionElementViewExtensions.GetMaterialCacheID(o);
```

## See Also

- [Complete Class Catalog](../catalog)