---
title: "KingdomSettlementVillageItemVM"
description: "KingdomSettlementVillageItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 6 exposed members (2 methods, 3 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Armies/KingdomSettlementVillageItemVM.cs."
---
# KingdomSettlementVillageItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class KingdomSettlementVillageItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Armies/KingdomSettlementVillageItemVM.cs`

## Overview

KingdomSettlementVillageItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Armies/KingdomSettlementVillageItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is KingdomSettlementVillageItemVM → ViewModel. It exposes 6 public/protected members: 2 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: KingdomSettlementVillageItemVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies) the module directory; inheritance chain KingdomSettlementVillageItemVM → ViewModel. The surface is property-led (properties 3/6, methods 2/6), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Armies/KingdomSettlementVillageItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `KingdomSettlementVillageItemVM` | `public KingdomSettlementVillageItemVM(Village village)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `ExecuteLink` | `public void ExecuteLink()` | method |
| `Visual` | `public ImageIdentifierVM Visual` | property |
| `Name` | `public string Name` | property |
| `VisualPath` | `public string VisualPath` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace KingdomArmyItemVM](../KingdomArmyItemVM)
- [same namespace KingdomArmyPartyItemVM](../KingdomArmyPartyItemVM)
- [same namespace KingdomArmySortControllerVM](../KingdomArmySortControllerVM)
- [same namespace KingdomArmyVM](../KingdomArmyVM)
