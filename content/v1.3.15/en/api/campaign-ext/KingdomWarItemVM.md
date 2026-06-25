---
title: "KingdomWarItemVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `KingdomWarItemVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# KingdomWarItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class KingdomWarItemVM : KingdomDiplomacyItemVM`
**Base:** `KingdomDiplomacyItemVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomWarItemVM.cs`

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

**Purpose:** Refreshes the display or cache of `values`.

## Usage Example

```csharp
var value = new KingdomWarItemVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)