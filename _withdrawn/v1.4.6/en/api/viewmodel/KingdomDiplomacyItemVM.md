---
title: "KingdomDiplomacyItemVM"
description: "KingdomDiplomacyItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy, inheriting KingdomItemVM; 21 exposed members (1 methods, 19 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomDiplomacyItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# KingdomDiplomacyItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public abstract class KingdomDiplomacyItemVM : KingdomItemVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomDiplomacyItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

KingdomDiplomacyItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomDiplomacyItemVM.cs. It is a public class (abstract), implementing/inheriting KingdomItemVM; the inheritance chain is KingdomDiplomacyItemVM → KingdomItemVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 21 public/protected members: 1 methods, 19 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: KingdomDiplomacyItemVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy`, inheritance chain KingdomDiplomacyItemVM → KingdomItemVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 19/21, methods 1/21), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomDiplomacyItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `KingdomDiplomacyItemVM` | `protected KingdomDiplomacyItemVM(IFaction faction1, IFaction faction2)` | constructor |
| `UpdateDiplomacyProperties` | `protected virtual void UpdateDiplomacyProperties()` | method |
| `MBBindingList` | `public MBBindingList<KingdomDiplomacyFactionItemVM>Faction1OwnedClans` | property |
| `MBBindingList` | `public MBBindingList<KingdomDiplomacyFactionItemVM>Faction2OwnedClans` | property |
| `MBBindingList` | `public MBBindingList<KingdomDiplomacyFactionItemVM>Faction2OtherWars` | property |
| `MBBindingList` | `public MBBindingList<KingdomDiplomacyFactionItemVM>Faction2OtherTradeAgreements` | property |
| `MBBindingList` | `public MBBindingList<KingdomDiplomacyFactionItemVM>Faction2OtherAlliances` | property |
| `MBBindingList` | `public MBBindingList<KingdomWarComparableStatVM>Stats` | property |
| `Faction1Visual` | `public BannerImageIdentifierVM Faction1Visual` | property |
| `Faction2Visual` | `public BannerImageIdentifierVM Faction2Visual` | property |
| `Faction1Name` | `public string Faction1Name` | property |
| `Faction2Name` | `public string Faction2Name` | property |
| `Faction1TributeText` | `public string Faction1TributeText` | property |
| `Faction2TributeText` | `public string Faction2TributeText` | property |
| `Faction1TributeHint` | `public HintViewModel Faction1TributeHint` | property |
| `Faction2TributeHint` | `public HintViewModel Faction2TributeHint` | property |
| `IsFaction2OtherWarsVisible` | `public bool IsFaction2OtherWarsVisible` | property |
| `IsFaction2OtherTradeAgreementsVisible` | `public bool IsFaction2OtherTradeAgreementsVisible` | property |
| `IsFaction2OtherAlliancesVisible` | `public bool IsFaction2OtherAlliancesVisible` | property |
| `Faction1Leader` | `public HeroVM Faction1Leader` | property |
| `Faction2Leader` | `public HeroVM Faction2Leader` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface KingdomItemVM](../KingdomItemVM/)
- [same namespace KingdomDiplomacyFactionItemVM](../KingdomDiplomacyFactionItemVM/)
- [same namespace KingdomDiplomacyProposalActionItemVM](../KingdomDiplomacyProposalActionItemVM/)
- [same namespace KingdomDiplomacyVM](../KingdomDiplomacyVM/)
- [same namespace KingdomTruceItemVM](../KingdomTruceItemVM/)
