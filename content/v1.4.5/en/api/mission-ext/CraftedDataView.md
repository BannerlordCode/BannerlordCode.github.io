---
title: "CraftedDataView"
description: "Auto-generated class reference for CraftedDataView."
---
# CraftedDataView

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CraftedDataView`
**Base:** none
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View/CraftedDataView.cs`

## Overview

`CraftedDataView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `CraftedDataView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `CraftedData` | `public WeaponDesign CraftedData { get; }` |
| `WeaponMesh` | `public MetaMesh WeaponMesh { get; }` |
| `HolsterMeshWithWeapon` | `public MetaMesh HolsterMeshWithWeapon { get; }` |

## Key Methods

### OnMeshBuiltDelegate
`public delegate void OnMeshBuiltDelegate(WeaponDesign weaponDesign, ref MetaMesh builtMesh)`

**Purpose:** **Purpose:** Invoked when the mesh built delegate event is raised.

```csharp
// Obtain an instance of CraftedDataView from the subsystem API first
CraftedDataView craftedDataView = ...;
craftedDataView.OnMeshBuiltDelegate(weaponDesign, builtMesh);
```

### Clear
`public void Clear()`

**Purpose:** **Purpose:** Removes all content from the this instance.

```csharp
// Obtain an instance of CraftedDataView from the subsystem API first
CraftedDataView craftedDataView = ...;
craftedDataView.Clear();
```

### BuildWeaponMesh
`public static MetaMesh BuildWeaponMesh(WeaponDesign craftedData, float pivotDiff, bool pieceTypeHidingEnabledForHolster, bool batchAllMeshes)`

**Purpose:** **Purpose:** Assembles and returns the built result for weapon mesh.

```csharp
// Static call; no instance required
CraftedDataView.BuildWeaponMesh(craftedData, 0, false, false);
```

### BuildHolsterMesh
`public static MetaMesh BuildHolsterMesh(WeaponDesign craftedData)`

**Purpose:** **Purpose:** Assembles and returns the built result for holster mesh.

```csharp
// Static call; no instance required
CraftedDataView.BuildHolsterMesh(craftedData);
```

### BuildHolsterMeshWithWeapon
`public static MetaMesh BuildHolsterMeshWithWeapon(WeaponDesign craftedData, float pivotDiff, bool batchAllMeshes)`

**Purpose:** **Purpose:** Assembles and returns the built result for holster mesh with weapon.

```csharp
// Static call; no instance required
CraftedDataView.BuildHolsterMeshWithWeapon(craftedData, 0, false);
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
CraftedDataView view = ...;
```

## See Also

- [Area Index](../)