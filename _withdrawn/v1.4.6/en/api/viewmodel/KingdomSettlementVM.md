---
title: "KingdomSettlementVM"
description: "KingdomSettlementVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Settlements, inheriting KingdomCategoryVM; 25 exposed members (4 methods, 20 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Settlements/KingdomSettlementVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# KingdomSettlementVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Settlements`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class KingdomSettlementVM : KingdomCategoryVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Settlements/KingdomSettlementVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

KingdomSettlementVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Settlements/KingdomSettlementVM.cs. It is a public class, implementing/inheriting KingdomCategoryVM; the inheritance chain is KingdomSettlementVM → KingdomCategoryVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 25 public/protected members: 4 methods, 20 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: KingdomSettlementVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Settlements`, inheritance chain KingdomSettlementVM → KingdomCategoryVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 20/25, methods 4/25), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Settlements/KingdomSettlementVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `KingdomSettlementVM` | `public KingdomSettlementVM(Action<KingdomDecision>forceDecision, Action<Settlement>onGrantFief)` | constructor |
| `CreateSettlementItemVM` | `protected virtual KingdomSettlementItemVM CreateSettlementItemVM(Settlement settlement, Action<KingdomSettlementItemVM>onSelect)` | method |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `RefreshSettlementList` | `public void RefreshSettlementList()` | method |
| `SelectSettlement` | `public void SelectSettlement(Settlement settlement)` | method |
| `CurrentSelectedSettlement` | `public KingdomSettlementItemVM CurrentSelectedSettlement` | property |
| `SettlementSortController` | `public KingdomSettlementSortControllerVM SettlementSortController` | property |
| `AnnexHint` | `public HintViewModel AnnexHint` | property |
| `ProposeText` | `public string ProposeText` | property |
| `AnnexActionExplanationText` | `public string AnnexActionExplanationText` | property |
| `ProsperityText` | `public string ProsperityText` | property |
| `VillagesText` | `public string VillagesText` | property |
| `OwnerText` | `public string OwnerText` | property |
| `NameText` | `public string NameText` | property |
| `ClanText` | `public string ClanText` | property |
| `FoodText` | `public string FoodText` | property |
| `GarrisonText` | `public string GarrisonText` | property |
| `MilitiaText` | `public string MilitiaText` | property |
| `AnnexText` | `public string AnnexText` | property |
| `TypeText` | `public string TypeText` | property |
| `AnnexCost` | `public int AnnexCost` | property |
| `DefendersText` | `public string DefendersText` | property |
| `MBBindingList` | `public MBBindingList<KingdomSettlementItemVM>Settlements` | property |
| `CanAnnexCurrentSettlement` | `public bool CanAnnexCurrentSettlement` | property |
| `HasCost` | `public bool HasCost` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface KingdomCategoryVM](../KingdomCategoryVM/)
- [same namespace KingdomSettlementItemVM](../KingdomSettlementItemVM/)
- [same namespace KingdomSettlementSortControllerVM](../KingdomSettlementSortControllerVM/)
