<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `KingSelectionDecisionItemVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# KingSelectionDecisionItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class KingSelectionDecisionItemVM : DecisionItemBaseVM`
**Base:** `DecisionItemBaseVM`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes/KingSelectionDecisionItemVM.cs`

## Overview

`KingSelectionDecisionItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `NameText` | `public string NameText { get; set; }` |
| `FactionName` | `public string FactionName { get; set; }` |
| `FactionBanner` | `public BannerImageIdentifierVM FactionBanner { get; set; }` |
| `SettlementsText` | `public string SettlementsText { get; set; }` |
| `SettlementsListText` | `public string SettlementsListText { get; set; }` |
| `CastlesText` | `public string CastlesText { get; set; }` |
| `CastlesListText` | `public string CastlesListText { get; set; }` |
| `TotalStrengthText` | `public string TotalStrengthText { get; set; }` |
| `TotalStrength` | `public int TotalStrength { get; set; }` |
| `ActivePoliciesText` | `public string ActivePoliciesText { get; set; }` |
| `ActivePoliciesListText` | `public string ActivePoliciesListText { get; set; }` |

## Usage Example

```csharp
var example = new KingSelectionDecisionItemVM();
```

## See Also

- [Complete Class Catalog](../catalog)