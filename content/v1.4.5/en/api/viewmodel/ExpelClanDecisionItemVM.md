---
title: "ExpelClanDecisionItemVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ExpelClanDecisionItemVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ExpelClanDecisionItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ExpelClanDecisionItemVM : DecisionItemBaseVM`
**Base:** `DecisionItemBaseVM`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes/ExpelClanDecisionItemVM.cs`

## Overview

`ExpelClanDecisionItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Members` | `public MBBindingList<HeroVM> Members { get; set; }` |
| `Fiefs` | `public MBBindingList<EncyclopediaSettlementVM> Fiefs { get; set; }` |
| `Leader` | `public HeroVM Leader { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `MembersText` | `public string MembersText { get; set; }` |
| `SettlementsText` | `public string SettlementsText { get; set; }` |
| `InformationText` | `public string InformationText { get; set; }` |
| `LeaderText` | `public string LeaderText { get; set; }` |
| `ProsperityText` | `public string ProsperityText { get; set; }` |
| `StrengthText` | `public string StrengthText { get; set; }` |
| `ProsperityHint` | `public BasicTooltipViewModel ProsperityHint { get; set; }` |
| `StrengthHint` | `public BasicTooltipViewModel StrengthHint { get; set; }` |

## Usage Example

```csharp
var example = new ExpelClanDecisionItemVM();
```

## See Also

- [Complete Class Catalog](../catalog)