---
title: "KingdomSettlementVillageItemVM"
description: "KingdomSettlementVillageItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies, inheriting ViewModel; 6 exposed members (2 methods, 3 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Armies/KingdomSettlementVillageItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# KingdomSettlementVillageItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class KingdomSettlementVillageItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Armies/KingdomSettlementVillageItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

KingdomSettlementVillageItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Armies/KingdomSettlementVillageItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is KingdomSettlementVillageItemVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 6 public/protected members: 2 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: KingdomSettlementVillageItemVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies`, inheritance chain KingdomSettlementVillageItemVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 3/6, methods 2/6), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Armies/KingdomSettlementVillageItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `KingdomSettlementVillageItemVM` | `public KingdomSettlementVillageItemVM(Village village)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `ExecuteLink` | `public void ExecuteLink()` | method |
| `Visual` | `public ImageIdentifierVM Visual` | property |
| `Name` | `public string Name` | property |
| `VisualPath` | `public string VisualPath` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace KingdomArmyItemVM](../KingdomArmyItemVM/)
- [same namespace KingdomArmyPartyItemVM](../KingdomArmyPartyItemVM/)
- [same namespace KingdomArmySortControllerVM](../KingdomArmySortControllerVM/)
- [same namespace KingdomArmyVM](../KingdomArmyVM/)
