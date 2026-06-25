---
title: "SettlementDecisionItemVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SettlementDecisionItemVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SettlementDecisionItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SettlementDecisionItemVM : DecisionItemBaseVM`
**Base:** `DecisionItemBaseVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/ItemTypes/SettlementDecisionItemVM.cs`

## Overview

`SettlementDecisionItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Settlement` | `public Settlement Settlement { get; }` |
| `HasBoundSettlement` | `public bool HasBoundSettlement { get; set; }` |
| `SettlementCropPosition` | `public double SettlementCropPosition { get; set; }` |
| `BoundSettlementText` | `public string BoundSettlementText { get; set; }` |
| `DetailsText` | `public string DetailsText { get; set; }` |
| `SettlementPath` | `public string SettlementPath { get; set; }` |
| `SettlementName` | `public string SettlementName { get; set; }` |
| `InformationText` | `public string InformationText { get; set; }` |
| `Owner` | `public HeroVM Owner { get; set; }` |
| `VillagesText` | `public string VillagesText { get; set; }` |
| `SettlementImageID` | `public string SettlementImageID { get; set; }` |
| `NotableCharactersText` | `public string NotableCharactersText { get; set; }` |
| `BoundVillages` | `public MBBindingList<EncyclopediaSettlementVM> BoundVillages { get; set; }` |
| `NotableCharacters` | `public MBBindingList<HeroVM> NotableCharacters { get; set; }` |
| `MilitasHint` | `public BasicTooltipViewModel MilitasHint { get; set; }` |
| `FoodHint` | `public BasicTooltipViewModel FoodHint { get; set; }` |
| `GarrisonHint` | `public BasicTooltipViewModel GarrisonHint { get; set; }` |
| `ProsperityHint` | `public BasicTooltipViewModel ProsperityHint { get; set; }` |
| `LoyaltyHint` | `public BasicTooltipViewModel LoyaltyHint { get; set; }` |
| `SecurityHint` | `public BasicTooltipViewModel SecurityHint { get; set; }` |
| `WallsHint` | `public BasicTooltipViewModel WallsHint { get; set; }` |
| `MilitasText` | `public string MilitasText { get; set; }` |
| `ProsperityText` | `public string ProsperityText { get; set; }` |
| `LoyaltyText` | `public string LoyaltyText { get; set; }` |
| `SecurityText` | `public string SecurityText { get; set; }` |
| `WallsText` | `public string WallsText { get; set; }` |
| `FoodText` | `public string FoodText { get; set; }` |
| `GarrisonText` | `public string GarrisonText { get; set; }` |
| `DescriptorText` | `public string DescriptorText { get; set; }` |
| `OwnerText` | `public string OwnerText { get; set; }` |
| `Governor` | `public HeroVM Governor { get; set; }` |
| `HasNotables` | `public bool HasNotables { get; set; }` |

## Usage Example

```csharp
var example = new SettlementDecisionItemVM();
```

## See Also

- [Complete Class Catalog](../catalog)