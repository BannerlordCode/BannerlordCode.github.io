---
title: "KingdomDiplomacyVM"
description: "KingdomDiplomacyVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy, inheriting KingdomCategoryVM; 21 exposed members (3 methods, 17 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomDiplomacyVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# KingdomDiplomacyVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class KingdomDiplomacyVM : KingdomCategoryVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomDiplomacyVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

KingdomDiplomacyVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomDiplomacyVM.cs. It is a public class, implementing/inheriting KingdomCategoryVM; the inheritance chain is KingdomDiplomacyVM → KingdomCategoryVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 21 public/protected members: 3 methods, 17 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: KingdomDiplomacyVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy`, inheritance chain KingdomDiplomacyVM → KingdomCategoryVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 17/21, methods 3/21), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomDiplomacyVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `KingdomDiplomacyVM` | `public KingdomDiplomacyVM(Action<KingdomDecision>forceDecision)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `RefreshDiplomacyList` | `public void RefreshDiplomacyList()` | method |
| `SelectKingdom` | `public void SelectKingdom(Kingdom kingdom)` | method |
| `MBBindingList` | `public MBBindingList<KingdomWarItemVM>PlayerWars` | property |
| `IsDisplayingWarLogs` | `public bool IsDisplayingWarLogs` | property |
| `IsDisplayingStatComparisons` | `public bool IsDisplayingStatComparisons` | property |
| `IsWar` | `public bool IsWar` | property |
| `BehaviorSelectionTitle` | `public string BehaviorSelectionTitle` | property |
| `MBBindingList` | `public MBBindingList<KingdomTruceItemVM>PlayerTruces` | property |
| `CurrentSelectedDiplomacyItem` | `public KingdomDiplomacyItemVM CurrentSelectedDiplomacyItem` | property |
| `WarsSortController` | `public KingdomWarSortControllerVM WarsSortController` | property |
| `PlayerWarsText` | `public string PlayerWarsText` | property |
| `WarsText` | `public string WarsText` | property |
| `NumOfPlayerWarsText` | `public string NumOfPlayerWarsText` | property |
| `PlayerTrucesText` | `public string PlayerTrucesText` | property |
| `NumOfPlayerTrucesText` | `public string NumOfPlayerTrucesText` | property |
| `SelectorVM` | `public SelectorVM<SelectorItemVM>BehaviorSelection` | property |
| `ShowStatBarsHint` | `public HintViewModel ShowStatBarsHint` | property |
| `ShowWarLogsHint` | `public HintViewModel ShowWarLogsHint` | property |
| `MBBindingList` | `public MBBindingList<KingdomDiplomacyProposalActionItemVM>Actions` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface KingdomCategoryVM](../KingdomCategoryVM/)
- [same namespace KingdomDiplomacyFactionItemVM](../KingdomDiplomacyFactionItemVM/)
- [same namespace KingdomDiplomacyItemVM](../KingdomDiplomacyItemVM/)
- [same namespace KingdomDiplomacyProposalActionItemVM](../KingdomDiplomacyProposalActionItemVM/)
- [same namespace KingdomTruceItemVM](../KingdomTruceItemVM/)
