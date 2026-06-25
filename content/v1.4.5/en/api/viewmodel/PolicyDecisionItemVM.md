---
title: "PolicyDecisionItemVM"
description: "Auto-generated class reference for PolicyDecisionItemVM."
---
# PolicyDecisionItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PolicyDecisionItemVM : DecisionItemBaseVM`
**Base:** `DecisionItemBaseVM`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes/PolicyDecisionItemVM.cs`

## Overview

`PolicyDecisionItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `NameText` | `public string NameText { get; set; }` |
| `PolicyDescriptionText` | `public string PolicyDescriptionText { get; set; }` |
| `PolicyEffectList` | `public MBBindingList<StringItemWithHintVM> PolicyEffectList { get; set; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
PolicyDecisionItemVM instance = ...;
```

## See Also

- [Area Index](../)