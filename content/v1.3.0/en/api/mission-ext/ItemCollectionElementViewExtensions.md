---
title: "ItemCollectionElementViewExtensions"
description: "Auto-generated class reference for ItemCollectionElementViewExtensions."
---
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

**Purpose:** Reads and returns the `material cache i d` value held by the current object.

```csharp
// Static call; no instance required
ItemCollectionElementViewExtensions.GetMaterialCacheID(o);
```

### GetMultiMesh
`public static MetaMesh GetMultiMesh(this ItemObject item, bool isFemale, bool hasGloves, bool needBatchedVersion)`

**Purpose:** Reads and returns the `multi mesh` value held by the current object.

```csharp
// Static call; no instance required
ItemCollectionElementViewExtensions.GetMultiMesh(item, false, false, false);
```

### GetMultiMesh
`public static MetaMesh GetMultiMesh(this EquipmentElement equipmentElement, bool isFemale, bool hasGloves, bool needBatchedVersion)`

**Purpose:** Reads and returns the `multi mesh` value held by the current object.

```csharp
// Static call; no instance required
ItemCollectionElementViewExtensions.GetMultiMesh(equipmentElement, false, false, false);
```

### GetMultiMesh
`public static MetaMesh GetMultiMesh(this MissionWeapon weapon, bool isFemale, bool hasGloves, bool needBatchedVersion)`

**Purpose:** Reads and returns the `multi mesh` value held by the current object.

```csharp
// Static call; no instance required
ItemCollectionElementViewExtensions.GetMultiMesh(weapon, false, false, false);
```

### GetItemMeshForInventory
`public static MetaMesh GetItemMeshForInventory(this ItemRosterElement rosterElement, bool isFemale = false)`

**Purpose:** Reads and returns the `item mesh for inventory` value held by the current object.

```csharp
// Static call; no instance required
ItemCollectionElementViewExtensions.GetItemMeshForInventory(rosterElement, false);
```

### GetHolsterMeshCopy
`public static MetaMesh GetHolsterMeshCopy(this ItemObject item)`

**Purpose:** Reads and returns the `holster mesh copy` value held by the current object.

```csharp
// Static call; no instance required
ItemCollectionElementViewExtensions.GetHolsterMeshCopy(item);
```

### GetHolsterMeshIfExists
`public static MetaMesh GetHolsterMeshIfExists(this ItemObject item)`

**Purpose:** Reads and returns the `holster mesh if exists` value held by the current object.

```csharp
// Static call; no instance required
ItemCollectionElementViewExtensions.GetHolsterMeshIfExists(item);
```

### GetHolsterWithWeaponMeshCopy
`public static MetaMesh GetHolsterWithWeaponMeshCopy(this ItemObject item, bool needBatchedVersion)`

**Purpose:** Reads and returns the `holster with weapon mesh copy` value held by the current object.

```csharp
// Static call; no instance required
ItemCollectionElementViewExtensions.GetHolsterWithWeaponMeshCopy(item, false);
```

### GetHolsterWithWeaponMeshIfExists
`public static MetaMesh GetHolsterWithWeaponMeshIfExists(this ItemObject item)`

**Purpose:** Reads and returns the `holster with weapon mesh if exists` value held by the current object.

```csharp
// Static call; no instance required
ItemCollectionElementViewExtensions.GetHolsterWithWeaponMeshIfExists(item);
```

### GetFlyingMeshCopy
`public static MetaMesh GetFlyingMeshCopy(this ItemObject item, bool needBatchedVersion)`

**Purpose:** Reads and returns the `flying mesh copy` value held by the current object.

```csharp
// Static call; no instance required
ItemCollectionElementViewExtensions.GetFlyingMeshCopy(item, false);
```

### GetFlyingMeshIfExists
`public static MetaMesh GetFlyingMeshIfExists(this ItemObject item)`

**Purpose:** Reads and returns the `flying mesh if exists` value held by the current object.

```csharp
// Static call; no instance required
ItemCollectionElementViewExtensions.GetFlyingMeshIfExists(item);
```

### GetCameraFrameForInventory
`public static MatrixFrame GetCameraFrameForInventory(this ItemRosterElement itemRosterElement)`

**Purpose:** Reads and returns the `camera frame for inventory` value held by the current object.

```csharp
// Static call; no instance required
ItemCollectionElementViewExtensions.GetCameraFrameForInventory(itemRosterElement);
```

### GetItemFrameForInventory
`public static MatrixFrame GetItemFrameForInventory(this ItemRosterElement itemRosterElement)`

**Purpose:** Reads and returns the `item frame for inventory` value held by the current object.

```csharp
// Static call; no instance required
ItemCollectionElementViewExtensions.GetItemFrameForInventory(itemRosterElement);
```

### GetItemFrameForItemTooltip
`public static MatrixFrame GetItemFrameForItemTooltip(this ItemRosterElement itemRosterElement)`

**Purpose:** Reads and returns the `item frame for item tooltip` value held by the current object.

```csharp
// Static call; no instance required
ItemCollectionElementViewExtensions.GetItemFrameForItemTooltip(itemRosterElement);
```

### OnGetWeaponData
`public static void OnGetWeaponData(ref WeaponData weaponData, MissionWeapon weapon, bool isFemale, Banner banner, bool needBatchedVersion)`

**Purpose:** Invoked when the `get weapon data` event is raised.

```csharp
// Static call; no instance required
ItemCollectionElementViewExtensions.OnGetWeaponData(weaponData, weapon, false, banner, false);
```

## Usage Example

```csharp
ItemCollectionElementViewExtensions.GetMaterialCacheID(o);
```

## See Also

- [Area Index](../)