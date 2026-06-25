---
title: "ItemTableauTextureProvider"
description: "Auto-generated class reference for ItemTableauTextureProvider."
---
# ItemTableauTextureProvider

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.TextureProviders
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ItemTableauTextureProvider : TextureProvider`
**Base:** `TextureProvider`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/ItemTableauTextureProvider.cs`

## Overview

`ItemTableauTextureProvider` lives in `TaleWorlds.MountAndBlade.GauntletUI.TextureProviders` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.TextureProviders` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ItemModifierId` | `public string ItemModifierId { get; set; }` |
| `StringId` | `public string StringId { get; set; }` |
| `Item` | `public ItemRosterElement Item { get; set; }` |
| `Ammo` | `public int Ammo { get; set; }` |
| `AverageUnitCost` | `public int AverageUnitCost { get; set; }` |
| `BannerCode` | `public string BannerCode { get; set; }` |
| `CurrentlyRotating` | `public bool CurrentlyRotating { get; set; }` |
| `RotateItemVertical` | `public float RotateItemVertical { get; set; }` |
| `RotateItemHorizontal` | `public float RotateItemHorizontal { get; set; }` |
| `InitialTiltRotation` | `public float InitialTiltRotation { get; set; }` |
| `InitialPanRotation` | `public float InitialPanRotation { get; set; }` |

## Key Methods

### Clear
`public override void Clear(bool clearNextFrame)`

**Purpose:** **Purpose:** Removes all content from the this instance.

```csharp
// Obtain an instance of ItemTableauTextureProvider from the subsystem API first
ItemTableauTextureProvider itemTableauTextureProvider = ...;
itemTableauTextureProvider.Clear(false);
```

### SetTargetSize
`public override void SetTargetSize(int width, int height)`

**Purpose:** **Purpose:** Assigns a new value to target size and updates the object's internal state.

```csharp
// Obtain an instance of ItemTableauTextureProvider from the subsystem API first
ItemTableauTextureProvider itemTableauTextureProvider = ...;
itemTableauTextureProvider.SetTargetSize(0, 0);
```

### Tick
`public override void Tick(float dt)`

**Purpose:** **Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of ItemTableauTextureProvider from the subsystem API first
ItemTableauTextureProvider itemTableauTextureProvider = ...;
itemTableauTextureProvider.Tick(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ItemTableauTextureProvider itemTableauTextureProvider = ...;
itemTableauTextureProvider.Clear(false);
```

## See Also

- [Area Index](../)