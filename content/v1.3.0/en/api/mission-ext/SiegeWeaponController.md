---
title: "SiegeWeaponController"
description: "Auto-generated class reference for SiegeWeaponController."
---
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

**Purpose:** **Purpose:** Executes the Select logic.

```csharp
// Obtain an instance of SiegeWeaponController from the subsystem API first
SiegeWeaponController siegeWeaponController = ...;
siegeWeaponController.Select(weapon);
```

### ClearSelectedWeapons
`public void ClearSelectedWeapons()`

**Purpose:** **Purpose:** Removes all selected weapons from the this instance.

```csharp
// Obtain an instance of SiegeWeaponController from the subsystem API first
SiegeWeaponController siegeWeaponController = ...;
siegeWeaponController.ClearSelectedWeapons();
```

### Deselect
`public void Deselect(SiegeWeapon weapon)`

**Purpose:** **Purpose:** Executes the Deselect logic.

```csharp
// Obtain an instance of SiegeWeaponController from the subsystem API first
SiegeWeaponController siegeWeaponController = ...;
siegeWeaponController.Deselect(weapon);
```

### SelectAll
`public void SelectAll()`

**Purpose:** **Purpose:** Executes the SelectAll logic.

```csharp
// Obtain an instance of SiegeWeaponController from the subsystem API first
SiegeWeaponController siegeWeaponController = ...;
siegeWeaponController.SelectAll();
```

### IsWeaponSelectable
`public static bool IsWeaponSelectable(SiegeWeapon weapon)`

**Purpose:** **Purpose:** Determines whether the this instance is in the weapon selectable state or condition.

```csharp
// Static call; no instance required
SiegeWeaponController.IsWeaponSelectable(weapon);
```

### GetActiveOrderOf
`public static SiegeWeaponOrderType GetActiveOrderOf(SiegeWeapon weapon)`

**Purpose:** **Purpose:** Reads and returns the active order of value held by the this instance.

```csharp
// Static call; no instance required
SiegeWeaponController.GetActiveOrderOf(weapon);
```

### GetActiveMovementOrderOf
`public static SiegeWeaponOrderType GetActiveMovementOrderOf(SiegeWeapon weapon)`

**Purpose:** **Purpose:** Reads and returns the active movement order of value held by the this instance.

```csharp
// Static call; no instance required
SiegeWeaponController.GetActiveMovementOrderOf(weapon);
```

### GetActiveFacingOrderOf
`public static SiegeWeaponOrderType GetActiveFacingOrderOf(SiegeWeapon weapon)`

**Purpose:** **Purpose:** Reads and returns the active facing order of value held by the this instance.

```csharp
// Static call; no instance required
SiegeWeaponController.GetActiveFacingOrderOf(weapon);
```

### GetActiveFiringOrderOf
`public static SiegeWeaponOrderType GetActiveFiringOrderOf(SiegeWeapon weapon)`

**Purpose:** **Purpose:** Reads and returns the active firing order of value held by the this instance.

```csharp
// Static call; no instance required
SiegeWeaponController.GetActiveFiringOrderOf(weapon);
```

### GetActiveAIControlOrderOf
`public static SiegeWeaponOrderType GetActiveAIControlOrderOf(SiegeWeapon weapon)`

**Purpose:** **Purpose:** Reads and returns the active a i control order of value held by the this instance.

```csharp
// Static call; no instance required
SiegeWeaponController.GetActiveAIControlOrderOf(weapon);
```

### SetOrder
`public void SetOrder(SiegeWeaponOrderType order)`

**Purpose:** **Purpose:** Assigns a new value to order and updates the object's internal state.

```csharp
// Obtain an instance of SiegeWeaponController from the subsystem API first
SiegeWeaponController siegeWeaponController = ...;
siegeWeaponController.SetOrder(order);
```

### GetShortcutIndexOf
`public int GetShortcutIndexOf(SiegeWeapon weapon)`

**Purpose:** **Purpose:** Reads and returns the shortcut index of value held by the this instance.

```csharp
// Obtain an instance of SiegeWeaponController from the subsystem API first
SiegeWeaponController siegeWeaponController = ...;
var result = siegeWeaponController.GetShortcutIndexOf(weapon);
```

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<SiegeWeaponController>();
```

## See Also

- [Area Index](../)