---
title: "KingdomArmyItemVM"
description: "Auto-generated class reference for KingdomArmyItemVM."
---
# KingdomArmyItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class KingdomArmyItemVM : KingdomItemVM`
**Base:** `KingdomItemVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Armies/KingdomArmyItemVM.cs`

## Overview

`KingdomArmyItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DistanceToMainParty` | `public float DistanceToMainParty { get; set; }` |
| `Parties` | `public MBBindingList<KingdomArmyPartyItemVM> Parties { get; set; }` |
| `Leader` | `public HeroVM Leader { get; set; }` |
| `ArmyName` | `public string ArmyName { get; set; }` |
| `Cohesion` | `public int Cohesion { get; set; }` |
| `CohesionLabel` | `public string CohesionLabel { get; set; }` |
| `LordCount` | `public int LordCount { get; set; }` |
| `Strength` | `public int Strength { get; set; }` |
| `StrengthLabel` | `public string StrengthLabel { get; set; }` |
| `ShipCount` | `public int ShipCount { get; set; }` |
| `ShipCountLabel` | `public string ShipCountLabel { get; set; }` |
| `Location` | `public string Location { get; set; }` |
| `Behavior` | `public string Behavior { get; set; }` |
| `IsMainArmy` | `public bool IsMainArmy { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of KingdomArmyItemVM from the subsystem API first
KingdomArmyItemVM kingdomArmyItemVM = ...;
kingdomArmyItemVM.RefreshValues();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
KingdomArmyItemVM kingdomArmyItemVM = ...;
kingdomArmyItemVM.RefreshValues();
```

## See Also

- [Area Index](../)