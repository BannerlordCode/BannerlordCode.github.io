---
title: "KingdomArmySortControllerVM"
description: "KingdomArmySortControllerVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies, inheriting ViewModel; 23 exposed members (0 methods, 16 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Armies/KingdomArmySortControllerVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# KingdomArmySortControllerVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class KingdomArmySortControllerVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Armies/KingdomArmySortControllerVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

KingdomArmySortControllerVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Armies/KingdomArmySortControllerVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is KingdomArmySortControllerVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 23 public/protected members: 16 properties, 1 constructors, 6 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: KingdomArmySortControllerVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies`, inheritance chain KingdomArmySortControllerVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 16/23, methods 0/23), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Armies/KingdomArmySortControllerVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `KingdomArmySortControllerVM` | `public KingdomArmySortControllerVM(ref MBBindingList<KingdomArmyItemVM>listToControl)` | constructor |
| `OwnerState` | `public int OwnerState` | property |
| `PartiesState` | `public int PartiesState` | property |
| `StrengthState` | `public int StrengthState` | property |
| `NameState` | `public int NameState` | property |
| `DistanceState` | `public int DistanceState` | property |
| `IsNameSelected` | `public bool IsNameSelected` | property |
| `IsPartiesSelected` | `public bool IsPartiesSelected` | property |
| `IsStrengthSelected` | `public bool IsStrengthSelected` | property |
| `IsOwnerSelected` | `public bool IsOwnerSelected` | property |
| `IsDistanceSelected` | `public bool IsDistanceSelected` | property |
| `IComparer` | `public abstract class ItemComparerBase : IComparer<KingdomArmyItemVM>` | property |
| `KingdomArmySortControllerVM.ItemComparerBase` | `public class ItemNameComparer : KingdomArmySortControllerVM.ItemComparerBase` | property |
| `KingdomArmySortControllerVM.ItemComparerBase` | `public class ItemOwnerComparer : KingdomArmySortControllerVM.ItemComparerBase` | property |
| `KingdomArmySortControllerVM.ItemComparerBase` | `public class ItemStrengthComparer : KingdomArmySortControllerVM.ItemComparerBase` | property |
| `KingdomArmySortControllerVM.ItemComparerBase` | `public class ItemPartiesComparer : KingdomArmySortControllerVM.ItemComparerBase` | property |
| `KingdomArmySortControllerVM.ItemComparerBase` | `public class ItemDistanceComparer : KingdomArmySortControllerVM.ItemComparerBase` | property |
| `IComparer` | `public abstract class ItemComparerBase : IComparer<KingdomArmyItemVM>` | nested type |
| `KingdomArmySortControllerVM.ItemComparerBase` | `public class ItemNameComparer : KingdomArmySortControllerVM.ItemComparerBase` | nested type |
| `KingdomArmySortControllerVM.ItemComparerBase` | `public class ItemOwnerComparer : KingdomArmySortControllerVM.ItemComparerBase` | nested type |
| `KingdomArmySortControllerVM.ItemComparerBase` | `public class ItemStrengthComparer : KingdomArmySortControllerVM.ItemComparerBase` | nested type |
| `KingdomArmySortControllerVM.ItemComparerBase` | `public class ItemPartiesComparer : KingdomArmySortControllerVM.ItemComparerBase` | nested type |
| `KingdomArmySortControllerVM.ItemComparerBase` | `public class ItemDistanceComparer : KingdomArmySortControllerVM.ItemComparerBase` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace KingdomArmyItemVM](../KingdomArmyItemVM/)
- [same namespace KingdomArmyPartyItemVM](../KingdomArmyPartyItemVM/)
- [same namespace KingdomArmyVM](../KingdomArmyVM/)
- [same namespace KingdomSettlementVillageItemVM](../KingdomSettlementVillageItemVM/)
