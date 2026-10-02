---
title: "KingdomPoliciesVM"
description: "KingdomPoliciesVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Policies, inheriting KingdomCategoryVM; 26 exposed members (3 methods, 22 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Policies/KingdomPoliciesVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# KingdomPoliciesVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Policies`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class KingdomPoliciesVM : KingdomCategoryVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Policies/KingdomPoliciesVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

KingdomPoliciesVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Policies/KingdomPoliciesVM.cs. It is a public class, implementing/inheriting KingdomCategoryVM; the inheritance chain is KingdomPoliciesVM → KingdomCategoryVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 26 public/protected members: 3 methods, 22 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: KingdomPoliciesVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Policies`, inheritance chain KingdomPoliciesVM → KingdomCategoryVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 22/26, methods 3/26), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Policies/KingdomPoliciesVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `KingdomPoliciesVM` | `public KingdomPoliciesVM(Action<KingdomDecision>forceDecide)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `SelectPolicy` | `public void SelectPolicy(PolicyObject policy)` | method |
| `RefreshPolicyList` | `public void RefreshPolicyList()` | method |
| `DoneHint` | `public HintViewModel DoneHint` | property |
| `MBBindingList` | `public MBBindingList<KingdomPolicyItemVM>ActivePolicies` | property |
| `MBBindingList` | `public MBBindingList<KingdomPolicyItemVM>OtherPolicies` | property |
| `CurrentSelectedPolicy` | `public KingdomPolicyItemVM CurrentSelectedPolicy` | property |
| `CanProposeOrDisavowPolicy` | `public bool CanProposeOrDisavowPolicy` | property |
| `ProposalAndDisavowalCost` | `public int ProposalAndDisavowalCost` | property |
| `NumOfActivePoliciesText` | `public string NumOfActivePoliciesText` | property |
| `NumOfOtherPoliciesText` | `public string NumOfOtherPoliciesText` | property |
| `IsInProposeMode` | `public bool IsInProposeMode` | property |
| `DisavowPolicyText` | `public string DisavowPolicyText` | property |
| `CurrentActiveModeText` | `public string CurrentActiveModeText` | property |
| `CurrentActionText` | `public string CurrentActionText` | property |
| `ProposeNewPolicyText` | `public string ProposeNewPolicyText` | property |
| `BackText` | `public string BackText` | property |
| `PoliciesText` | `public string PoliciesText` | property |
| `ActivePoliciesText` | `public string ActivePoliciesText` | property |
| `PolicyLikelihoodText` | `public string PolicyLikelihoodText` | property |
| `LikelihoodHint` | `public HintViewModel LikelihoodHint` | property |
| `PolicyLikelihood` | `public int PolicyLikelihood` | property |
| `OtherPoliciesText` | `public string OtherPoliciesText` | property |
| `ProposeOrDisavowText` | `public string ProposeOrDisavowText` | property |
| `ProposeActionExplanationText` | `public string ProposeActionExplanationText` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface KingdomCategoryVM](../KingdomCategoryVM/)
- [same namespace KingdomPolicyItemVM](../KingdomPolicyItemVM/)
