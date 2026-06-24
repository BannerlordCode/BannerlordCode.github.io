<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ProposeCallToWarAgreementDecisionItemVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ProposeCallToWarAgreementDecisionItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ProposeCallToWarAgreementDecisionItemVM : DecisionItemBaseVM`
**Base:** `DecisionItemBaseVM`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes/ProposeCallToWarAgreementDecisionItemVM.cs`

## Overview

`ProposeCallToWarAgreementDecisionItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `NameText` | `public string NameText { get; set; }` |
| `ProposeCallToWarAgreementDescriptionText` | `public string ProposeCallToWarAgreementDescriptionText { get; set; }` |
| `SourceFactionBanner` | `public BannerImageIdentifierVM SourceFactionBanner { get; set; }` |
| `TargetFactionBanner` | `public BannerImageIdentifierVM TargetFactionBanner { get; set; }` |
| `ComparedStats` | `public MBBindingList<KingdomWarComparableStatVM> ComparedStats { get; set; }` |
| `LeaderText` | `public string LeaderText { get; set; }` |
| `SourceFactionLeader` | `public HeroVM SourceFactionLeader { get; set; }` |
| `TargetFactionLeader` | `public HeroVM TargetFactionLeader { get; set; }` |
| `IsTargetFactionOtherWarsVisible` | `public bool IsTargetFactionOtherWarsVisible { get; set; }` |
| `TargetFactionOtherWars` | `public MBBindingList<KingdomDiplomacyFactionItemVM> TargetFactionOtherWars { get; set; }` |

## Usage Example

```csharp
var example = new ProposeCallToWarAgreementDecisionItemVM();
```

## See Also

- [Complete Class Catalog](../catalog)