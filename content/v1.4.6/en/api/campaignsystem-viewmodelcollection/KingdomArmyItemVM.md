---
title: "KingdomArmyItemVM"
description: "KingdomArmyItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting KingdomItemVM; 18 exposed members (3 methods, 14 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Armies/KingdomArmyItemVM.cs."
---
# KingdomArmyItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class KingdomArmyItemVM : KingdomItemVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Armies/KingdomArmyItemVM.cs`

## Overview

KingdomArmyItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Armies/KingdomArmyItemVM.cs. It is a public class, implementing/inheriting KingdomItemVM; the inheritance chain is KingdomArmyItemVM → KingdomItemVM → ViewModel. It exposes 18 public/protected members: 3 methods, 14 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: KingdomArmyItemVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies) the module directory; inheritance chain KingdomArmyItemVM → KingdomItemVM → ViewModel. The surface is property-led (properties 14/18, methods 3/18), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Armies/KingdomArmyItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DistanceToMainParty` | `public float DistanceToMainParty` | property |
| `KingdomArmyItemVM` | `public KingdomArmyItemVM(Army army, Action<KingdomArmyItemVM>onSelect)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OnSelect` | `protected override void OnSelect()` | method |
| `ExecuteLink` | `protected void ExecuteLink(string link)` | method |
| `MBBindingList` | `public MBBindingList<KingdomArmyPartyItemVM>Parties` | property |
| `Leader` | `public HeroVM Leader` | property |
| `ArmyName` | `public string ArmyName` | property |
| `Cohesion` | `public int Cohesion` | property |
| `CohesionLabel` | `public string CohesionLabel` | property |
| `LordCount` | `public int LordCount` | property |
| `Strength` | `public int Strength` | property |
| `StrengthLabel` | `public string StrengthLabel` | property |
| `ShipCount` | `public int ShipCount` | property |
| `ShipCountLabel` | `public string ShipCountLabel` | property |
| `Location` | `public string Location` | property |
| `Behavior` | `public string Behavior` | property |
| `IsMainArmy` | `public bool IsMainArmy` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface KingdomItemVM](../KingdomItemVM)
- [same namespace KingdomArmyPartyItemVM](../KingdomArmyPartyItemVM)
- [same namespace KingdomArmySortControllerVM](../KingdomArmySortControllerVM)
- [same namespace KingdomArmyVM](../KingdomArmyVM)
- [same namespace KingdomSettlementVillageItemVM](../KingdomSettlementVillageItemVM)
