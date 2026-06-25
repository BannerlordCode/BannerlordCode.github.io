---
title: "KingdomWarComparableStatVM"
description: "Auto-generated class reference for KingdomWarComparableStatVM."
---
# KingdomWarComparableStatVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class KingdomWarComparableStatVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomWarComparableStatVM.cs`

## Overview

`KingdomWarComparableStatVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Faction1Hint` | `public BasicTooltipViewModel Faction1Hint { get; set; }` |
| `Faction2Hint` | `public BasicTooltipViewModel Faction2Hint { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `Faction1Color` | `public string Faction1Color { get; set; }` |
| `Faction2Color` | `public string Faction2Color { get; set; }` |
| `Faction1Percentage` | `public int Faction1Percentage { get; set; }` |
| `Faction1Value` | `public int Faction1Value { get; set; }` |
| `Faction2Percentage` | `public int Faction2Percentage { get; set; }` |
| `Faction2Value` | `public int Faction2Value { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of KingdomWarComparableStatVM from the subsystem API first
KingdomWarComparableStatVM kingdomWarComparableStatVM = ...;
kingdomWarComparableStatVM.RefreshValues();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
KingdomWarComparableStatVM kingdomWarComparableStatVM = ...;
kingdomWarComparableStatVM.RefreshValues();
```

## See Also

- [Area Index](../)