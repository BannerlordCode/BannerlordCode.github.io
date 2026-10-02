---
title: "KingdomWarSortControllerVM"
description: "KingdomWarSortControllerVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy, inheriting ViewModel; 7 exposed members (0 methods, 4 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomWarSortControllerVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# KingdomWarSortControllerVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class KingdomWarSortControllerVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomWarSortControllerVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

KingdomWarSortControllerVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomWarSortControllerVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is KingdomWarSortControllerVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 7 public/protected members: 4 properties, 1 constructors, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: KingdomWarSortControllerVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy`, inheritance chain KingdomWarSortControllerVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 4/7, methods 0/7), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomWarSortControllerVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `KingdomWarSortControllerVM` | `public KingdomWarSortControllerVM(ref MBBindingList<KingdomWarItemVM>listToControl)` | constructor |
| `ScoreState` | `public int ScoreState` | property |
| `IsScoreSelected` | `public bool IsScoreSelected` | property |
| `IComparer` | `public abstract class ItemComparerBase : IComparer<KingdomWarItemVM>` | property |
| `KingdomWarSortControllerVM.ItemComparerBase` | `public class ItemScoreComparer : KingdomWarSortControllerVM.ItemComparerBase` | property |
| `IComparer` | `public abstract class ItemComparerBase : IComparer<KingdomWarItemVM>` | nested type |
| `KingdomWarSortControllerVM.ItemComparerBase` | `public class ItemScoreComparer : KingdomWarSortControllerVM.ItemComparerBase` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace KingdomDiplomacyFactionItemVM](../KingdomDiplomacyFactionItemVM/)
- [same namespace KingdomDiplomacyItemVM](../KingdomDiplomacyItemVM/)
- [same namespace KingdomDiplomacyProposalActionItemVM](../KingdomDiplomacyProposalActionItemVM/)
- [same namespace KingdomDiplomacyVM](../KingdomDiplomacyVM/)
