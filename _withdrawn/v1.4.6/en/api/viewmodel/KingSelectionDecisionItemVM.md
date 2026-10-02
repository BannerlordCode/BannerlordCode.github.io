---
title: "KingSelectionDecisionItemVM"
description: "KingSelectionDecisionItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes, inheriting DecisionItemBaseVM; 14 exposed members (1 methods, 12 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/ItemTypes/KingSelectionDecisionItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# KingSelectionDecisionItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class KingSelectionDecisionItemVM : DecisionItemBaseVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/ItemTypes/KingSelectionDecisionItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

KingSelectionDecisionItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/ItemTypes/KingSelectionDecisionItemVM.cs. It is a public class, implementing/inheriting DecisionItemBaseVM; the inheritance chain is KingSelectionDecisionItemVM → DecisionItemBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 14 public/protected members: 1 methods, 12 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: KingSelectionDecisionItemVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes`, inheritance chain KingSelectionDecisionItemVM → DecisionItemBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 12/14, methods 1/14), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/ItemTypes/KingSelectionDecisionItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface DecisionItemBaseVM](../DecisionItemBaseVM/)
- [same namespace AcceptingCallToWarAgreementDecisionItemVM](../AcceptingCallToWarAgreementDecisionItemVM/)
- [same namespace DecisionItemBaseVM](../DecisionItemBaseVM/)
- [same namespace DeclareWarDecisionItemVM](../DeclareWarDecisionItemVM/)
- [same namespace ExpelClanDecisionItemVM](../ExpelClanDecisionItemVM/)
