---
title: "StartAllianceDecisionItemVM"
description: "Auto-generated class reference for StartAllianceDecisionItemVM."
---
# StartAllianceDecisionItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class StartAllianceDecisionItemVM : DecisionItemBaseVM`
**Base:** `DecisionItemBaseVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/ItemTypes/StartAllianceDecisionItemVM.cs`

## Overview

`StartAllianceDecisionItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TargetFaction` | `public IFaction TargetFaction { get; }` |
| `NameText` | `public string NameText { get; set; }` |
| `StartAllianceDescriptionText` | `public string StartAllianceDescriptionText { get; set; }` |
| `SourceFactionBanner` | `public BannerImageIdentifierVM SourceFactionBanner { get; set; }` |
| `TargetFactionBanner` | `public BannerImageIdentifierVM TargetFactionBanner { get; set; }` |
| `ComparedStats` | `public MBBindingList<KingdomWarComparableStatVM> ComparedStats { get; set; }` |
| `LeaderText` | `public string LeaderText { get; set; }` |
| `SourceFactionLeader` | `public HeroVM SourceFactionLeader { get; set; }` |
| `TargetFactionLeader` | `public HeroVM TargetFactionLeader { get; set; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
StartAllianceDecisionItemVM instance = ...;
```

## See Also

- [Area Index](../)