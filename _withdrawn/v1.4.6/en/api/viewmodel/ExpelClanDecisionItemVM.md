---
title: "ExpelClanDecisionItemVM"
description: "ExpelClanDecisionItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes, inheriting DecisionItemBaseVM; 16 exposed members (1 methods, 14 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/ItemTypes/ExpelClanDecisionItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ExpelClanDecisionItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ExpelClanDecisionItemVM : DecisionItemBaseVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/ItemTypes/ExpelClanDecisionItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

ExpelClanDecisionItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/ItemTypes/ExpelClanDecisionItemVM.cs. It is a public class, implementing/inheriting DecisionItemBaseVM; the inheritance chain is ExpelClanDecisionItemVM → DecisionItemBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 16 public/protected members: 1 methods, 14 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ExpelClanDecisionItemVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes`, inheritance chain ExpelClanDecisionItemVM → DecisionItemBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 14/16, methods 1/16), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/ItemTypes/ExpelClanDecisionItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ExpelDecision` | `public ExpelClanFromKingdomDecision ExpelDecision` | property |
| `Clan` | `public Clan Clan` | property |
| `ExpelClanDecisionItemVM` | `public ExpelClanDecisionItemVM(ExpelClanFromKingdomDecision decision, Action onDecisionOver) : base(decision, onDecisionOver)` | constructor |
| `InitValues` | `protected override void InitValues()` | method |
| `MBBindingList` | `public MBBindingList<HeroVM>Members` | property |
| `MBBindingList` | `public MBBindingList<EncyclopediaSettlementVM>Fiefs` | property |
| `Leader` | `public HeroVM Leader` | property |
| `NameText` | `public string NameText` | property |
| `MembersText` | `public string MembersText` | property |
| `SettlementsText` | `public string SettlementsText` | property |
| `InformationText` | `public string InformationText` | property |
| `LeaderText` | `public string LeaderText` | property |
| `ProsperityText` | `public string ProsperityText` | property |
| `StrengthText` | `public string StrengthText` | property |
| `ProsperityHint` | `public BasicTooltipViewModel ProsperityHint` | property |
| `StrengthHint` | `public BasicTooltipViewModel StrengthHint` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface DecisionItemBaseVM](../DecisionItemBaseVM/)
- [same namespace AcceptingCallToWarAgreementDecisionItemVM](../AcceptingCallToWarAgreementDecisionItemVM/)
- [same namespace DecisionItemBaseVM](../DecisionItemBaseVM/)
- [same namespace DeclareWarDecisionItemVM](../DeclareWarDecisionItemVM/)
- [same namespace KingdomPolicyDecisionItemVM](../KingdomPolicyDecisionItemVM/)
