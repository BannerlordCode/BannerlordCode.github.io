---
title: "KingdomPolicyItemVM"
description: "KingdomPolicyItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting KingdomItemVM; 11 exposed members (2 methods, 8 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Policies/KingdomPolicyItemVM.cs."
---
# KingdomPolicyItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Policies`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class KingdomPolicyItemVM : KingdomItemVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Policies/KingdomPolicyItemVM.cs`

## Overview

KingdomPolicyItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Policies/KingdomPolicyItemVM.cs. It is a public class, implementing/inheriting KingdomItemVM; the inheritance chain is KingdomPolicyItemVM → KingdomItemVM → ViewModel. It exposes 11 public/protected members: 2 methods, 8 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: KingdomPolicyItemVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Policies) the module directory; inheritance chain KingdomPolicyItemVM → KingdomItemVM → ViewModel. The surface is property-led (properties 8/11, methods 2/11), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Policies/KingdomPolicyItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `KingdomPolicyItemVM` | `public KingdomPolicyItemVM(PolicyObject policy, Action<KingdomPolicyItemVM>onSelect, Func<PolicyObject, bool>getIsPolicyActive)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OnSelect` | `protected override void OnSelect()` | method |
| `PolicyAcceptanceText` | `public string PolicyAcceptanceText` | property |
| `MBBindingList` | `public MBBindingList<StringItemWithHintVM>PolicyEffectList` | property |
| `PolicyLikelihoodText` | `public string PolicyLikelihoodText` | property |
| `LikelihoodHint` | `public HintViewModel LikelihoodHint` | property |
| `Policy` | `public PolicyObject Policy` | property |
| `PolicyLikelihood` | `public int PolicyLikelihood` | property |
| `Name` | `public string Name` | property |
| `Explanation` | `public string Explanation` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface KingdomItemVM](../KingdomItemVM)
- [same namespace KingdomPoliciesVM](../KingdomPoliciesVM)
