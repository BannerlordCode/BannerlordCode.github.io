---
title: "CraftingListPropertyItem"
description: "Auto-generated class reference for CraftingListPropertyItem."
---
# CraftingListPropertyItem

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CraftingListPropertyItem : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/CraftingListPropertyItem.cs`

## Overview

`CraftingListPropertyItem` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsValidForUsage` | `public bool IsValidForUsage { get; set; }` |
| `IsExceedingBeneficial` | `public bool IsExceedingBeneficial { get; set; }` |
| `HasValidTarget` | `public bool HasValidTarget { get; set; }` |
| `HasValidValue` | `public bool HasValidValue { get; set; }` |
| `TargetValue` | `public float TargetValue { get; set; }` |
| `TargetValueText` | `public string TargetValueText { get; set; }` |
| `IsAlternativeUsageProperty` | `public bool IsAlternativeUsageProperty { get; set; }` |
| `PropertyLbl` | `public string PropertyLbl { get; set; }` |
| `PropertyValue` | `public float PropertyValue { get; set; }` |
| `PropertyMaxValue` | `public float PropertyMaxValue { get; set; }` |
| `PropertyValueText` | `public string PropertyValueText { get; set; }` |
| `SeparatorText` | `public string SeparatorText { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of CraftingListPropertyItem from the subsystem API first
CraftingListPropertyItem craftingListPropertyItem = ...;
craftingListPropertyItem.RefreshValues();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CraftingListPropertyItem craftingListPropertyItem = ...;
craftingListPropertyItem.RefreshValues();
```

## See Also

- [Area Index](../)