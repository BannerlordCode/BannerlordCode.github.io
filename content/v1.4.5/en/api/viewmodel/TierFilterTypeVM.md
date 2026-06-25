---
title: "TierFilterTypeVM"
description: "Auto-generated class reference for TierFilterTypeVM."
---
# TierFilterTypeVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TierFilterTypeVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign/TierFilterTypeVM.cs`

## Overview

`TierFilterTypeVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `FilterType` | `public WeaponDesignVM.CraftingPieceTierFilter FilterType { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `TierName` | `public string TierName { get; set; }` |

## Key Methods

### ExecuteSelectTier
`public void ExecuteSelectTier()`

**Purpose:** Runs the operation or workflow associated with select tier.

```csharp
// Obtain an instance of TierFilterTypeVM from the subsystem API first
TierFilterTypeVM tierFilterTypeVM = ...;
tierFilterTypeVM.ExecuteSelectTier();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TierFilterTypeVM tierFilterTypeVM = ...;
tierFilterTypeVM.ExecuteSelectTier();
```

## See Also

- [Area Index](../)