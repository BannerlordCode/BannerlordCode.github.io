---
title: "DeclareWarDecisionItemVM"
description: "DeclareWarDecisionItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting DecisionItemBaseVM; 13 exposed members (1 methods, 11 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/ItemTypes/DeclareWarDecisionItemVM.cs."
---
# DeclareWarDecisionItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class DeclareWarDecisionItemVM : DecisionItemBaseVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/ItemTypes/DeclareWarDecisionItemVM.cs`

## Overview

DeclareWarDecisionItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/ItemTypes/DeclareWarDecisionItemVM.cs. It is a public class, implementing/inheriting DecisionItemBaseVM; the inheritance chain is DeclareWarDecisionItemVM → DecisionItemBaseVM → ViewModel. It exposes 13 public/protected members: 1 methods, 11 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DeclareWarDecisionItemVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes) the module directory; inheritance chain DeclareWarDecisionItemVM → DecisionItemBaseVM → ViewModel. The surface is property-led (properties 11/13, methods 1/13), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/ItemTypes/DeclareWarDecisionItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TargetFaction` | `public IFaction TargetFaction` | property |
| `DeclareWarDecisionItemVM` | `public DeclareWarDecisionItemVM(DeclareWarDecision decision, Action onDecisionOver) : base(decision, onDecisionOver)` | constructor |
| `InitValues` | `protected override void InitValues()` | method |
| `NameText` | `public string NameText` | property |
| `WarDescriptionText` | `public string WarDescriptionText` | property |
| `SourceFactionBanner` | `public BannerImageIdentifierVM SourceFactionBanner` | property |
| `TargetFactionBanner` | `public BannerImageIdentifierVM TargetFactionBanner` | property |
| `MBBindingList` | `public MBBindingList<KingdomWarComparableStatVM>ComparedStats` | property |
| `LeaderText` | `public string LeaderText` | property |
| `SourceFactionLeader` | `public HeroVM SourceFactionLeader` | property |
| `TargetFactionLeader` | `public HeroVM TargetFactionLeader` | property |
| `IsTargetFactionOtherWarsVisible` | `public bool IsTargetFactionOtherWarsVisible` | property |
| `MBBindingList` | `public MBBindingList<KingdomDiplomacyFactionItemVM>TargetFactionOtherWars` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface DecisionItemBaseVM](../DecisionItemBaseVM)
- [same namespace AcceptingCallToWarAgreementDecisionItemVM](../AcceptingCallToWarAgreementDecisionItemVM)
- [same namespace DecisionItemBaseVM](../DecisionItemBaseVM)
- [same namespace ExpelClanDecisionItemVM](../ExpelClanDecisionItemVM)
- [same namespace KingdomPolicyDecisionItemVM](../KingdomPolicyDecisionItemVM)
