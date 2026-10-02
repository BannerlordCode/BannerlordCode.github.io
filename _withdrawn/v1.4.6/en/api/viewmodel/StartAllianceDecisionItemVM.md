---
title: "StartAllianceDecisionItemVM"
description: "StartAllianceDecisionItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes, inheriting DecisionItemBaseVM; 13 exposed members (1 methods, 11 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/ItemTypes/StartAllianceDecisionItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# StartAllianceDecisionItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class StartAllianceDecisionItemVM : DecisionItemBaseVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/ItemTypes/StartAllianceDecisionItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

StartAllianceDecisionItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/ItemTypes/StartAllianceDecisionItemVM.cs. It is a public class, implementing/inheriting DecisionItemBaseVM; the inheritance chain is StartAllianceDecisionItemVM → DecisionItemBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 13 public/protected members: 1 methods, 11 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: StartAllianceDecisionItemVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes`, inheritance chain StartAllianceDecisionItemVM → DecisionItemBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 11/13, methods 1/13), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/ItemTypes/StartAllianceDecisionItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `TargetFaction` | `public IFaction TargetFaction` | property |
| `StartAllianceDecisionItemVM` | `public StartAllianceDecisionItemVM(StartAllianceDecision decision, Action onDecisionOver) : base(decision, onDecisionOver)` | constructor |
| `InitValues` | `protected override void InitValues()` | method |
| `NameText` | `public string NameText` | property |
| `StartAllianceDescriptionText` | `public string StartAllianceDescriptionText` | property |
| `SourceFactionBanner` | `public BannerImageIdentifierVM SourceFactionBanner` | property |
| `TargetFactionBanner` | `public BannerImageIdentifierVM TargetFactionBanner` | property |
| `MBBindingList` | `public MBBindingList<KingdomWarComparableStatVM>ComparedStats` | property |
| `LeaderText` | `public string LeaderText` | property |
| `SourceFactionLeader` | `public HeroVM SourceFactionLeader` | property |
| `TargetFactionLeader` | `public HeroVM TargetFactionLeader` | property |
| `IsTargetFactionOtherWarsVisible` | `public bool IsTargetFactionOtherWarsVisible` | property |
| `MBBindingList` | `public MBBindingList<KingdomDiplomacyFactionItemVM>TargetFactionOtherWars` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface DecisionItemBaseVM](../DecisionItemBaseVM/)
- [same namespace AcceptingCallToWarAgreementDecisionItemVM](../AcceptingCallToWarAgreementDecisionItemVM/)
- [same namespace DecisionItemBaseVM](../DecisionItemBaseVM/)
- [same namespace DeclareWarDecisionItemVM](../DeclareWarDecisionItemVM/)
- [same namespace ExpelClanDecisionItemVM](../ExpelClanDecisionItemVM/)
