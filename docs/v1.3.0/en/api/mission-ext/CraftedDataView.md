<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CraftedDataView`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CraftedDataView

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CraftedDataView`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/CraftedDataView.cs`

## Overview

`CraftedDataView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `CraftedDataView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `CraftedData` | `public WeaponDesign CraftedData { get; }` |
| `WeaponMesh` | `public MetaMesh WeaponMesh { get; }` |
| `HolsterMesh` | `public MetaMesh HolsterMesh { get; }` |
| `HolsterMeshWithWeapon` | `public MetaMesh HolsterMeshWithWeapon { get; }` |
| `NonBatchedWeaponMesh` | `public MetaMesh NonBatchedWeaponMesh { get; }` |
| `NonBatchedHolsterMesh` | `public MetaMesh NonBatchedHolsterMesh { get; }` |
| `NonBatchedHolsterMeshWithWeapon` | `public MetaMesh NonBatchedHolsterMeshWithWeapon { get; }` |

## Key Methods

### Clear
`public void Clear()`

**Purpose:** Handles logic related to `clear`.

### BuildWeaponMesh
`public static MetaMesh BuildWeaponMesh(WeaponDesign craftedData, float pivotDiff, bool pieceTypeHidingEnabledForHolster, bool batchAllMeshes)`

**Purpose:** Handles logic related to `build weapon mesh`.

### BuildHolsterMesh
`public static MetaMesh BuildHolsterMesh(WeaponDesign craftedData)`

**Purpose:** Handles logic related to `build holster mesh`.

### BuildHolsterMeshWithWeapon
`public static MetaMesh BuildHolsterMeshWithWeapon(WeaponDesign craftedData, float pivotDiff, bool batchAllMeshes)`

**Purpose:** Handles logic related to `build holster mesh with weapon`.

### OnMeshBuiltDelegate
`public delegate void OnMeshBuiltDelegate(WeaponDesign weaponDesign, ref MetaMesh builtMesh)`

**Purpose:** Called when the `mesh built delegate` event is raised.

## Usage Example

```csharp
var view = new CraftedDataView();
```

## See Also

- [Complete Class Catalog](../catalog)