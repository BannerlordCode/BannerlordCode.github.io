---
title: "KingdomArmyVM"
description: "KingdomArmyVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting KingdomCategoryVM; 30 exposed members (3 methods, 26 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Armies/KingdomArmyVM.cs."
---
# KingdomArmyVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class KingdomArmyVM : KingdomCategoryVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Armies/KingdomArmyVM.cs`

## Overview

KingdomArmyVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Armies/KingdomArmyVM.cs. It is a public class, implementing/inheriting KingdomCategoryVM; the inheritance chain is KingdomArmyVM → KingdomCategoryVM → ViewModel. It exposes 30 public/protected members: 3 methods, 26 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: KingdomArmyVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies) the module directory; inheritance chain KingdomArmyVM → KingdomCategoryVM → ViewModel. The surface is property-led (properties 26/30, methods 3/30), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Armies/KingdomArmyVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `KingdomArmyVM` | `public KingdomArmyVM(Action onManageArmy, Action refreshDecision, Action<Army>showArmyOnMap)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `RefreshArmyList` | `public void RefreshArmyList()` | method |
| `SelectArmy` | `public void SelectArmy(Army army)` | method |
| `ArmySortController` | `public KingdomArmySortControllerVM ArmySortController` | property |
| `CreateArmyText` | `public string CreateArmyText` | property |
| `DisbandActionExplanationText` | `public string DisbandActionExplanationText` | property |
| `ManageActionExplanationText` | `public string ManageActionExplanationText` | property |
| `CurrentSelectedArmy` | `public KingdomArmyItemVM CurrentSelectedArmy` | property |
| `CreateArmyHint` | `public HintViewModel CreateArmyHint` | property |
| `ManageArmyHint` | `public HintViewModel ManageArmyHint` | property |
| `PlayerHasArmy` | `public bool PlayerHasArmy` | property |
| `CanCreateArmy` | `public bool CanCreateArmy` | property |
| `LeaderText` | `public string LeaderText` | property |
| `ShowOnMapText` | `public string ShowOnMapText` | property |
| `ArmyNameText` | `public string ArmyNameText` | property |
| `StrengthText` | `public string StrengthText` | property |
| `PartiesText` | `public string PartiesText` | property |
| `LocationText` | `public string LocationText` | property |
| `MBBindingList` | `public MBBindingList<KingdomArmyItemVM>Armies` | property |
| `CanDisbandCurrentArmy` | `public bool CanDisbandCurrentArmy` | property |
| `CanManageCurrentArmy` | `public bool CanManageCurrentArmy` | property |
| `CanChangeLeaderOfCurrentArmy` | `public bool CanChangeLeaderOfCurrentArmy` | property |
| `CanShowLocationOfCurrentArmy` | `public bool CanShowLocationOfCurrentArmy` | property |
| `DisbandText` | `public string DisbandText` | property |
| `ManageText` | `public string ManageText` | property |
| `DisbandCost` | `public int DisbandCost` | property |
| `ChangeLeaderText` | `public string ChangeLeaderText` | property |
| `ChangeLeaderCost` | `public int ChangeLeaderCost` | property |
| `DisbandHint` | `public HintViewModel DisbandHint` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface KingdomCategoryVM](../KingdomCategoryVM)
- [same namespace KingdomArmyItemVM](../KingdomArmyItemVM)
- [same namespace KingdomArmyPartyItemVM](../KingdomArmyPartyItemVM)
- [same namespace KingdomArmySortControllerVM](../KingdomArmySortControllerVM)
- [same namespace KingdomSettlementVillageItemVM](../KingdomSettlementVillageItemVM)
