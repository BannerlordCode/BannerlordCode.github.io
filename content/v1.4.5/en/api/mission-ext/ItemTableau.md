---
title: "ItemTableau"
description: "Auto-generated class reference for ItemTableau."
---
# ItemTableau

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ItemTableau`
**Base:** none
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.Tableaus/ItemTableau.cs`

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

**Purpose:** Assigns a new value to `target size` and updates the object's internal state.

```csharp
// Obtain an instance of ItemTableau from the subsystem API first
ItemTableau itemTableau = ...;
itemTableau.SetTargetSize(0, 0);
```

### OnFinalize
`public void OnFinalize()`

**Purpose:** Invoked when the `finalize` event is raised.

```csharp
// Obtain an instance of ItemTableau from the subsystem API first
ItemTableau itemTableau = ...;
itemTableau.OnFinalize();
```

### SetStringId
`public void SetStringId(string stringId)`

**Purpose:** Assigns a new value to `string id` and updates the object's internal state.

```csharp
// Obtain an instance of ItemTableau from the subsystem API first
ItemTableau itemTableau = ...;
itemTableau.SetStringId("example");
```

### SetAmmo
`public void SetAmmo(int ammo)`

**Purpose:** Assigns a new value to `ammo` and updates the object's internal state.

```csharp
// Obtain an instance of ItemTableau from the subsystem API first
ItemTableau itemTableau = ...;
itemTableau.SetAmmo(0);
```

### SetAverageUnitCost
`public void SetAverageUnitCost(int averageUnitCost)`

**Purpose:** Assigns a new value to `average unit cost` and updates the object's internal state.

```csharp
// Obtain an instance of ItemTableau from the subsystem API first
ItemTableau itemTableau = ...;
itemTableau.SetAverageUnitCost(0);
```

### SetItemModifierId
`public void SetItemModifierId(string itemModifierId)`

**Purpose:** Assigns a new value to `item modifier id` and updates the object's internal state.

```csharp
// Obtain an instance of ItemTableau from the subsystem API first
ItemTableau itemTableau = ...;
itemTableau.SetItemModifierId("example");
```

### SetBannerCode
`public void SetBannerCode(string bannerCode)`

**Purpose:** Assigns a new value to `banner code` and updates the object's internal state.

```csharp
// Obtain an instance of ItemTableau from the subsystem API first
ItemTableau itemTableau = ...;
itemTableau.SetBannerCode("example");
```

### Recalculate
`public void Recalculate()`

**Purpose:** Recalculates `recalculate` to reflect the latest state.

```csharp
// Obtain an instance of ItemTableau from the subsystem API first
ItemTableau itemTableau = ...;
itemTableau.Recalculate();
```

### Initialize
`public void Initialize()`

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Obtain an instance of ItemTableau from the subsystem API first
ItemTableau itemTableau = ...;
itemTableau.Initialize();
```

### RotateItem
`public void RotateItem(bool value)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ItemTableau from the subsystem API first
ItemTableau itemTableau = ...;
itemTableau.RotateItem(false);
```

### RotateItemVerticalWithAmount
`public void RotateItemVerticalWithAmount(float value)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ItemTableau from the subsystem API first
ItemTableau itemTableau = ...;
itemTableau.RotateItemVerticalWithAmount(0);
```

### RotateItemHorizontalWithAmount
`public void RotateItemHorizontalWithAmount(float value)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ItemTableau from the subsystem API first
ItemTableau itemTableau = ...;
itemTableau.RotateItemHorizontalWithAmount(0);
```

### OnTick
`public void OnTick(float dt)`

**Purpose:** Invoked when the `tick` event is raised.

```csharp
// Obtain an instance of ItemTableau from the subsystem API first
ItemTableau itemTableau = ...;
itemTableau.OnTick(0);
```

### SetInitialTiltRotation
`public void SetInitialTiltRotation(float amount)`

**Purpose:** Assigns a new value to `initial tilt rotation` and updates the object's internal state.

```csharp
// Obtain an instance of ItemTableau from the subsystem API first
ItemTableau itemTableau = ...;
itemTableau.SetInitialTiltRotation(0);
```

### SetInitialPanRotation
`public void SetInitialPanRotation(float amount)`

**Purpose:** Assigns a new value to `initial pan rotation` and updates the object's internal state.

```csharp
// Obtain an instance of ItemTableau from the subsystem API first
ItemTableau itemTableau = ...;
itemTableau.SetInitialPanRotation(0);
```

### Zoom
`public void Zoom(double value)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ItemTableau from the subsystem API first
ItemTableau itemTableau = ...;
itemTableau.Zoom(0);
```

### SetItem
`public void SetItem(ItemRosterElement itemRosterElement)`

**Purpose:** Assigns a new value to `item` and updates the object's internal state.

```csharp
// Obtain an instance of ItemTableau from the subsystem API first
ItemTableau itemTableau = ...;
itemTableau.SetItem(itemRosterElement);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ItemTableau itemTableau = ...;
itemTableau.SetTargetSize(0, 0);
```

## See Also

- [Area Index](../)