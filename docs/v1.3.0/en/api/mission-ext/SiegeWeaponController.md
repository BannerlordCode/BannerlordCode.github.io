<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SiegeWeaponController`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SiegeWeaponController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SiegeWeaponController`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/SiegeWeaponController.cs`

## Overview

`SiegeWeaponController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `SiegeWeaponController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `SelectedWeapons` | `public MBReadOnlyList<SiegeWeapon> SelectedWeapons { get; }` |

## Key Methods

### Select
`public void Select(SiegeWeapon weapon)`

**Purpose:** Handles logic related to `select`.

### ClearSelectedWeapons
`public void ClearSelectedWeapons()`

**Purpose:** Handles logic related to `clear selected weapons`.

### Deselect
`public void Deselect(SiegeWeapon weapon)`

**Purpose:** Handles logic related to `deselect`.

### SelectAll
`public void SelectAll()`

**Purpose:** Handles logic related to `select all`.

### IsWeaponSelectable
`public static bool IsWeaponSelectable(SiegeWeapon weapon)`

**Purpose:** Handles logic related to `is weapon selectable`.

### GetActiveOrderOf
`public static SiegeWeaponOrderType GetActiveOrderOf(SiegeWeapon weapon)`

**Purpose:** Gets the current value of `active order of`.

### GetActiveMovementOrderOf
`public static SiegeWeaponOrderType GetActiveMovementOrderOf(SiegeWeapon weapon)`

**Purpose:** Gets the current value of `active movement order of`.

### GetActiveFacingOrderOf
`public static SiegeWeaponOrderType GetActiveFacingOrderOf(SiegeWeapon weapon)`

**Purpose:** Gets the current value of `active facing order of`.

### GetActiveFiringOrderOf
`public static SiegeWeaponOrderType GetActiveFiringOrderOf(SiegeWeapon weapon)`

**Purpose:** Gets the current value of `active firing order of`.

### GetActiveAIControlOrderOf
`public static SiegeWeaponOrderType GetActiveAIControlOrderOf(SiegeWeapon weapon)`

**Purpose:** Gets the current value of `active a i control order of`.

### SetOrder
`public void SetOrder(SiegeWeaponOrderType order)`

**Purpose:** Sets the value or state of `order`.

### GetShortcutIndexOf
`public int GetShortcutIndexOf(SiegeWeapon weapon)`

**Purpose:** Gets the current value of `shortcut index of`.

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<SiegeWeaponController>();
```

## See Also

- [Complete Class Catalog](../catalog)