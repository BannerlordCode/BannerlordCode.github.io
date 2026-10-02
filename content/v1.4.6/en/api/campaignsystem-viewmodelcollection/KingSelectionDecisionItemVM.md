---
title: "KingSelectionDecisionItemVM"
description: "KingSelectionDecisionItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting DecisionItemBaseVM; 14 exposed members (1 methods, 12 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/ItemTypes/KingSelectionDecisionItemVM.cs."
---
# KingSelectionDecisionItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class KingSelectionDecisionItemVM : DecisionItemBaseVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/ItemTypes/KingSelectionDecisionItemVM.cs`

## Overview

KingSelectionDecisionItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/ItemTypes/KingSelectionDecisionItemVM.cs. It is a public class, implementing/inheriting DecisionItemBaseVM; the inheritance chain is KingSelectionDecisionItemVM → DecisionItemBaseVM → ViewModel. It exposes 14 public/protected members: 1 methods, 12 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: KingSelectionDecisionItemVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes) the module directory; inheritance chain KingSelectionDecisionItemVM → DecisionItemBaseVM → ViewModel. The surface is property-led (properties 12/14, methods 1/14), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/ItemTypes/KingSelectionDecisionItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TargetFaction` | `public IFaction TargetFaction` | property |
| `KingSelectionDecisionItemVM` | `public KingSelectionDecisionItemVM(KingSelectionKingdomDecision decision, Action onDecisionOver) : base(decision, onDecisionOver)` | constructor |
| `InitValues` | `protected override void InitValues()` | method |
| `NameText` | `public string NameText` | property |
| `FactionName` | `public string FactionName` | property |
| `FactionBanner` | `public BannerImageIdentifierVM FactionBanner` | property |
| `SettlementsText` | `public string SettlementsText` | property |
| `SettlementsListText` | `public string SettlementsListText` | property |
| `CastlesText` | `public string CastlesText` | property |
| `CastlesListText` | `public string CastlesListText` | property |
| `TotalStrengthText` | `public string TotalStrengthText` | property |
| `TotalStrength` | `public int TotalStrength` | property |
| `ActivePoliciesText` | `public string ActivePoliciesText` | property |
| `ActivePoliciesListText` | `public string ActivePoliciesListText` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface DecisionItemBaseVM](../DecisionItemBaseVM)
- [same namespace AcceptingCallToWarAgreementDecisionItemVM](../AcceptingCallToWarAgreementDecisionItemVM)
- [same namespace DecisionItemBaseVM](../DecisionItemBaseVM)
- [same namespace DeclareWarDecisionItemVM](../DeclareWarDecisionItemVM)
- [same namespace ExpelClanDecisionItemVM](../ExpelClanDecisionItemVM)
