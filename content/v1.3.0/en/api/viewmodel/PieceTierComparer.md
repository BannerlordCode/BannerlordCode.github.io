---
title: "PieceTierComparer"
description: "Auto-generated class reference for PieceTierComparer."
---
# PieceTierComparer

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PieceTierComparer : IComparer<CraftingPieceVM>`
**Base:** `IComparer<CraftingPieceVM>`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponDesignVM.cs`

## Overview

`PieceTierComparer` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Compare
`public int Compare(CraftingPieceVM x, CraftingPieceVM y)`

**Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of PieceTierComparer from the subsystem API first
PieceTierComparer pieceTierComparer = ...;
var result = pieceTierComparer.Compare(x, y);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PieceTierComparer pieceTierComparer = ...;
pieceTierComparer.Compare(x, y);
```

## See Also

- [Area Index](../)