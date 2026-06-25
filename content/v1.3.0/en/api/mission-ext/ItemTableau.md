---
title: "ItemTableau"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ItemTableau`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ItemTableau

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ItemTableau`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/ItemTableau.cs`

## Overview

`ItemTableau` lives in `TaleWorlds.MountAndBlade.View.Tableaus` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.Tableaus` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Texture` | `public Texture Texture { get; }` |

## Key Methods

### SetTargetSize
`public void SetTargetSize(int width, int height)`

**Purpose:** Sets the value or state of `target size`.

### OnFinalize
`public void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### SetStringId
`public void SetStringId(string stringId)`

**Purpose:** Sets the value or state of `string id`.

### SetAmmo
`public void SetAmmo(int ammo)`

**Purpose:** Sets the value or state of `ammo`.

### SetAverageUnitCost
`public void SetAverageUnitCost(int averageUnitCost)`

**Purpose:** Sets the value or state of `average unit cost`.

### SetItemModifierId
`public void SetItemModifierId(string itemModifierId)`

**Purpose:** Sets the value or state of `item modifier id`.

### SetBannerCode
`public void SetBannerCode(string bannerCode)`

**Purpose:** Sets the value or state of `banner code`.

### Recalculate
`public void Recalculate()`

**Purpose:** Handles logic related to `recalculate`.

### Initialize
`public void Initialize()`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### RotateItem
`public void RotateItem(bool value)`

**Purpose:** Handles logic related to `rotate item`.

### RotateItemVerticalWithAmount
`public void RotateItemVerticalWithAmount(float value)`

**Purpose:** Handles logic related to `rotate item vertical with amount`.

### RotateItemHorizontalWithAmount
`public void RotateItemHorizontalWithAmount(float value)`

**Purpose:** Handles logic related to `rotate item horizontal with amount`.

### OnTick
`public void OnTick(float dt)`

**Purpose:** Called when the `tick` event is raised.

### SetInitialTiltRotation
`public void SetInitialTiltRotation(float amount)`

**Purpose:** Sets the value or state of `initial tilt rotation`.

### SetInitialPanRotation
`public void SetInitialPanRotation(float amount)`

**Purpose:** Sets the value or state of `initial pan rotation`.

### Zoom
`public void Zoom(double value)`

**Purpose:** Handles logic related to `zoom`.

### SetItem
`public void SetItem(ItemRosterElement itemRosterElement)`

**Purpose:** Sets the value or state of `item`.

## Usage Example

```csharp
var value = new ItemTableau();
value.SetTargetSize(0, 0);
```

## See Also

- [Complete Class Catalog](../catalog)