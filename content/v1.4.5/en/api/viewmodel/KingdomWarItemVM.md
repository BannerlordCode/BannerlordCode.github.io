---
title: "KingdomWarItemVM"
description: "Auto-generated class reference for KingdomWarItemVM."
---
# KingdomWarItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class KingdomWarItemVM : KingdomDiplomacyItemVM`
**Base:** `KingdomDiplomacyItemVM`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy/KingdomWarItemVM.cs`

## Overview

`KingdomWarItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `WarName` | `public string WarName { get; set; }` |
| `NumberOfDaysSinceWarBegan` | `public string NumberOfDaysSinceWarBegan { get; set; }` |
| `IsBehaviorSelectionEnabled` | `public bool IsBehaviorSelectionEnabled { get; set; }` |
| `Score` | `public int Score { get; set; }` |
| `CasualtiesOfFaction1` | `public int CasualtiesOfFaction1 { get; set; }` |
| `CasualtiesOfFaction2` | `public int CasualtiesOfFaction2 { get; set; }` |
| `WarLog` | `public MBBindingList<KingdomWarLogItemVM> WarLog { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of KingdomWarItemVM from the subsystem API first
KingdomWarItemVM kingdomWarItemVM = ...;
kingdomWarItemVM.RefreshValues();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
KingdomWarItemVM kingdomWarItemVM = ...;
kingdomWarItemVM.RefreshValues();
```

## See Also

- [Area Index](../)