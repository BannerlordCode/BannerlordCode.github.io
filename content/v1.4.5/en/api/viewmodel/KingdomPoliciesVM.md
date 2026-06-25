---
title: "KingdomPoliciesVM"
description: "Auto-generated class reference for KingdomPoliciesVM."
---
# KingdomPoliciesVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Policies
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class KingdomPoliciesVM : KingdomCategoryVM`
**Base:** `KingdomCategoryVM`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Policies/KingdomPoliciesVM.cs`

## Overview

`KingdomPoliciesVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Policies` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Policies` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DoneHint` | `public HintViewModel DoneHint { get; set; }` |
| `ActivePolicies` | `public MBBindingList<KingdomPolicyItemVM> ActivePolicies { get; set; }` |
| `OtherPolicies` | `public MBBindingList<KingdomPolicyItemVM> OtherPolicies { get; set; }` |
| `CurrentSelectedPolicy` | `public KingdomPolicyItemVM CurrentSelectedPolicy { get; set; }` |
| `CanProposeOrDisavowPolicy` | `public bool CanProposeOrDisavowPolicy { get; set; }` |
| `ProposalAndDisavowalCost` | `public int ProposalAndDisavowalCost { get; set; }` |
| `NumOfActivePoliciesText` | `public string NumOfActivePoliciesText { get; set; }` |
| `NumOfOtherPoliciesText` | `public string NumOfOtherPoliciesText { get; set; }` |
| `IsInProposeMode` | `public bool IsInProposeMode { get; set; }` |
| `DisavowPolicyText` | `public string DisavowPolicyText { get; set; }` |
| `CurrentActiveModeText` | `public string CurrentActiveModeText { get; set; }` |
| `CurrentActionText` | `public string CurrentActionText { get; set; }` |
| `ProposeNewPolicyText` | `public string ProposeNewPolicyText { get; set; }` |
| `BackText` | `public string BackText { get; set; }` |
| `PoliciesText` | `public string PoliciesText { get; set; }` |
| `ActivePoliciesText` | `public string ActivePoliciesText { get; set; }` |
| `PolicyLikelihoodText` | `public string PolicyLikelihoodText { get; set; }` |
| `LikelihoodHint` | `public HintViewModel LikelihoodHint { get; set; }` |
| `PolicyLikelihood` | `public int PolicyLikelihood { get; set; }` |
| `OtherPoliciesText` | `public string OtherPoliciesText { get; set; }` |
| `ProposeOrDisavowText` | `public string ProposeOrDisavowText { get; set; }` |
| `ProposeActionExplanationText` | `public string ProposeActionExplanationText { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of KingdomPoliciesVM from the subsystem API first
KingdomPoliciesVM kingdomPoliciesVM = ...;
kingdomPoliciesVM.RefreshValues();
```

### SelectPolicy
`public void SelectPolicy(PolicyObject policy)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of KingdomPoliciesVM from the subsystem API first
KingdomPoliciesVM kingdomPoliciesVM = ...;
kingdomPoliciesVM.SelectPolicy(policy);
```

### RefreshPolicyList
`public void RefreshPolicyList()`

**Purpose:** Keeps the display or cache of `policy list` in sync with the underlying state.

```csharp
// Obtain an instance of KingdomPoliciesVM from the subsystem API first
KingdomPoliciesVM kingdomPoliciesVM = ...;
kingdomPoliciesVM.RefreshPolicyList();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
KingdomPoliciesVM kingdomPoliciesVM = ...;
kingdomPoliciesVM.RefreshValues();
```

## See Also

- [Area Index](../)