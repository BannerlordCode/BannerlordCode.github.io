---
title: "PolicyDecisionItemVM"
description: "PolicyDecisionItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting DecisionItemBaseVM; 7 exposed members (1 methods, 5 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/ItemTypes/PolicyDecisionItemVM.cs."
---
# PolicyDecisionItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class PolicyDecisionItemVM : DecisionItemBaseVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/ItemTypes/PolicyDecisionItemVM.cs`

## Overview

PolicyDecisionItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/ItemTypes/PolicyDecisionItemVM.cs. It is a public class, implementing/inheriting DecisionItemBaseVM; the inheritance chain is PolicyDecisionItemVM → DecisionItemBaseVM → ViewModel. It exposes 7 public/protected members: 1 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PolicyDecisionItemVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes) the module directory; inheritance chain PolicyDecisionItemVM → DecisionItemBaseVM → ViewModel. The surface is property-led (properties 5/7, methods 1/7), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/ItemTypes/PolicyDecisionItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PolicyDecision` | `public KingdomPolicyDecision PolicyDecision` | property |
| `Policy` | `public PolicyObject Policy` | property |
| `PolicyDecisionItemVM` | `public PolicyDecisionItemVM(KingdomPolicyDecision decision, Action onDecisionOver) : base(decision, onDecisionOver)` | constructor |
| `InitValues` | `protected override void InitValues()` | method |
| `NameText` | `public string NameText` | property |
| `PolicyDescriptionText` | `public string PolicyDescriptionText` | property |
| `MBBindingList` | `public MBBindingList<StringItemWithHintVM>PolicyEffectList` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface DecisionItemBaseVM](../DecisionItemBaseVM)
- [same namespace AcceptingCallToWarAgreementDecisionItemVM](../AcceptingCallToWarAgreementDecisionItemVM)
- [same namespace DecisionItemBaseVM](../DecisionItemBaseVM)
- [same namespace DeclareWarDecisionItemVM](../DeclareWarDecisionItemVM)
- [same namespace ExpelClanDecisionItemVM](../ExpelClanDecisionItemVM)
