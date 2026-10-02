---
title: "KingdomArmyPartyItemVM"
description: "KingdomArmyPartyItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies, inheriting ViewModel; 5 exposed members (2 methods, 2 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Armies/KingdomArmyPartyItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# KingdomArmyPartyItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class KingdomArmyPartyItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Armies/KingdomArmyPartyItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

KingdomArmyPartyItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Armies/KingdomArmyPartyItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is KingdomArmyPartyItemVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 5 public/protected members: 2 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: KingdomArmyPartyItemVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies`, inheritance chain KingdomArmyPartyItemVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 2/5, properties 2/5), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Armies/KingdomArmyPartyItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `KingdomArmyPartyItemVM` | `public KingdomArmyPartyItemVM(MobileParty party)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `ExecuteLink` | `public void ExecuteLink()` | method |
| `Visual` | `public CharacterImageIdentifierVM Visual` | property |
| `Name` | `public string Name` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace KingdomArmyItemVM](../KingdomArmyItemVM/)
- [same namespace KingdomArmySortControllerVM](../KingdomArmySortControllerVM/)
- [same namespace KingdomArmyVM](../KingdomArmyVM/)
- [same namespace KingdomSettlementVillageItemVM](../KingdomSettlementVillageItemVM/)
