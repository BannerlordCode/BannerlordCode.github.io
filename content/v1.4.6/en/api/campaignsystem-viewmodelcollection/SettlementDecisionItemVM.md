---
title: "SettlementDecisionItemVM"
description: "SettlementDecisionItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting DecisionItemBaseVM; 34 exposed members (1 methods, 32 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/ItemTypes/SettlementDecisionItemVM.cs."
---
# SettlementDecisionItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class SettlementDecisionItemVM : DecisionItemBaseVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/ItemTypes/SettlementDecisionItemVM.cs`

## Overview

SettlementDecisionItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/ItemTypes/SettlementDecisionItemVM.cs. It is a public class, implementing/inheriting DecisionItemBaseVM; the inheritance chain is SettlementDecisionItemVM → DecisionItemBaseVM → ViewModel. It exposes 34 public/protected members: 1 methods, 32 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SettlementDecisionItemVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes) the module directory; inheritance chain SettlementDecisionItemVM → DecisionItemBaseVM → ViewModel. The surface is property-led (properties 32/34, methods 1/34), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/ItemTypes/SettlementDecisionItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Settlement` | `public Settlement Settlement` | property |
| `SettlementDecisionItemVM` | `public SettlementDecisionItemVM(Settlement settlement, KingdomDecision decision, Action onDecisionOver) : base(decision, onDecisionOver)` | constructor |
| `InitValues` | `protected override void InitValues()` | method |
| `HasBoundSettlement` | `public bool HasBoundSettlement` | property |
| `SettlementCropPosition` | `public double SettlementCropPosition` | property |
| `BoundSettlementText` | `public string BoundSettlementText` | property |
| `DetailsText` | `public string DetailsText` | property |
| `SettlementPath` | `public string SettlementPath` | property |
| `SettlementName` | `public string SettlementName` | property |
| `InformationText` | `public string InformationText` | property |
| `Owner` | `public HeroVM Owner` | property |
| `VillagesText` | `public string VillagesText` | property |
| `SettlementImageID` | `public string SettlementImageID` | property |
| `NotableCharactersText` | `public string NotableCharactersText` | property |
| `MBBindingList` | `public MBBindingList<EncyclopediaSettlementVM>BoundVillages` | property |
| `MBBindingList` | `public MBBindingList<HeroVM>NotableCharacters` | property |
| `MilitasHint` | `public BasicTooltipViewModel MilitasHint` | property |
| `FoodHint` | `public BasicTooltipViewModel FoodHint` | property |
| `GarrisonHint` | `public BasicTooltipViewModel GarrisonHint` | property |
| `ProsperityHint` | `public BasicTooltipViewModel ProsperityHint` | property |
| `LoyaltyHint` | `public BasicTooltipViewModel LoyaltyHint` | property |
| `SecurityHint` | `public BasicTooltipViewModel SecurityHint` | property |
| `WallsHint` | `public BasicTooltipViewModel WallsHint` | property |
| `MilitasText` | `public string MilitasText` | property |
| `ProsperityText` | `public string ProsperityText` | property |
| `LoyaltyText` | `public string LoyaltyText` | property |
| `SecurityText` | `public string SecurityText` | property |
| `WallsText` | `public string WallsText` | property |
| `FoodText` | `public string FoodText` | property |
| `GarrisonText` | `public string GarrisonText` | property |
| `DescriptorText` | `public string DescriptorText` | property |
| `OwnerText` | `public string OwnerText` | property |
| `Governor` | `public HeroVM Governor` | property |
| `HasNotables` | `public bool HasNotables` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface DecisionItemBaseVM](../DecisionItemBaseVM)
- [same namespace AcceptingCallToWarAgreementDecisionItemVM](../AcceptingCallToWarAgreementDecisionItemVM)
- [same namespace DecisionItemBaseVM](../DecisionItemBaseVM)
- [same namespace DeclareWarDecisionItemVM](../DeclareWarDecisionItemVM)
- [same namespace ExpelClanDecisionItemVM](../ExpelClanDecisionItemVM)
