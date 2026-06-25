---
title: "KingdomPolicyItemVM"
description: "Auto-generated class reference for KingdomPolicyItemVM."
---
# KingdomPolicyItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Policies
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class KingdomPolicyItemVM : KingdomItemVM`
**Base:** `KingdomItemVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Policies/KingdomPolicyItemVM.cs`

## Overview

`KingdomPolicyItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Policies` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Policies` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PolicyAcceptanceText` | `public string PolicyAcceptanceText { get; set; }` |
| `PolicyEffectList` | `public MBBindingList<StringItemWithHintVM> PolicyEffectList { get; set; }` |
| `PolicyLikelihoodText` | `public string PolicyLikelihoodText { get; set; }` |
| `LikelihoodHint` | `public HintViewModel LikelihoodHint { get; set; }` |
| `Policy` | `public PolicyObject Policy { get; set; }` |
| `PolicyLikelihood` | `public int PolicyLikelihood { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `Explanation` | `public string Explanation { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of KingdomPolicyItemVM from the subsystem API first
KingdomPolicyItemVM kingdomPolicyItemVM = ...;
kingdomPolicyItemVM.RefreshValues();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
KingdomPolicyItemVM kingdomPolicyItemVM = ...;
kingdomPolicyItemVM.RefreshValues();
```

## See Also

- [Area Index](../)