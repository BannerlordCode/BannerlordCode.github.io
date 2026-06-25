---
title: "WeaponPropertyComparer"
description: "Auto-generated class reference for WeaponPropertyComparer."
---
# WeaponPropertyComparer

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class WeaponPropertyComparer : IComparer<CraftingListPropertyItem>`
**Base:** `IComparer<CraftingListPropertyItem>`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponDesignVM.cs`

## Overview

`WeaponPropertyComparer` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Compare
`public int Compare(CraftingListPropertyItem x, CraftingListPropertyItem y)`

**Purpose:** **Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of WeaponPropertyComparer from the subsystem API first
WeaponPropertyComparer weaponPropertyComparer = ...;
var result = weaponPropertyComparer.Compare(x, y);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
WeaponPropertyComparer weaponPropertyComparer = ...;
weaponPropertyComparer.Compare(x, y);
```

## See Also

- [Area Index](../)