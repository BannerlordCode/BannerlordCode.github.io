<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `KingdomPoliciesVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# KingdomPoliciesVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Policies
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `KingdomPoliciesVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Policies` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


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


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### SelectPolicy

```csharp
public void SelectPolicy(PolicyObject policy)
```

### RefreshPolicyList

```csharp
public void RefreshPolicyList()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)