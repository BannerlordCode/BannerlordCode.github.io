---
title: "KingdomSettlementItemVM"
description: "KingdomSettlementItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Settlements, inheriting KingdomItemVM; 20 exposed members (4 methods, 15 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Settlements/KingdomSettlementItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# KingdomSettlementItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Settlements`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class KingdomSettlementItemVM : KingdomItemVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Settlements/KingdomSettlementItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

KingdomSettlementItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Settlements/KingdomSettlementItemVM.cs. It is a public class, implementing/inheriting KingdomItemVM; the inheritance chain is KingdomSettlementItemVM → KingdomItemVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 20 public/protected members: 4 methods, 15 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: KingdomSettlementItemVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Settlements`, inheritance chain KingdomSettlementItemVM → KingdomItemVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 15/20, methods 4/20), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Settlements/KingdomSettlementItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Garrison` | `public int Garrison` | property |
| `Militia` | `public int Militia` | property |
| `KingdomSettlementItemVM` | `public KingdomSettlementItemVM(Settlement settlement, Action<KingdomSettlementItemVM>onSelect)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `UpdateProperties` | `protected virtual void UpdateProperties()` | method |
| `OnSelect` | `protected override void OnSelect()` | method |
| `ExecuteLink` | `public void ExecuteLink()` | method |
| `MBBindingList` | `public MBBindingList<SelectableFiefItemPropertyVM>ItemProperties` | property |
| `MBBindingList` | `public MBBindingList<KingdomSettlementVillageItemVM>Villages` | property |
| `IconPath` | `public string IconPath` | property |
| `Defenders` | `public int Defenders` | property |
| `Name` | `public string Name` | property |
| `ImageName` | `public string ImageName` | property |
| `SettlementImagePath` | `public string SettlementImagePath` | property |
| `GovernorName` | `public string GovernorName` | property |
| `OwnerClanBanner` | `public BannerImageIdentifierVM OwnerClanBanner` | property |
| `OwnerClanBanner_9` | `public BannerImageIdentifierVM OwnerClanBanner_9` | property |
| `Owner` | `public HeroVM Owner` | property |
| `WallLevel` | `public int WallLevel` | property |
| `Prosperity` | `public int Prosperity` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface KingdomItemVM](../KingdomItemVM/)
- [same namespace KingdomSettlementSortControllerVM](../KingdomSettlementSortControllerVM/)
- [same namespace KingdomSettlementVM](../KingdomSettlementVM/)
