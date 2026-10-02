---
title: "KingdomWarItemVM"
description: "KingdomWarItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy, inheriting KingdomDiplomacyItemVM; 11 exposed members (3 methods, 7 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomWarItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# KingdomWarItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class KingdomWarItemVM : KingdomDiplomacyItemVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomWarItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

KingdomWarItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomWarItemVM.cs. It is a public class, implementing/inheriting KingdomDiplomacyItemVM; the inheritance chain is KingdomWarItemVM → KingdomDiplomacyItemVM → KingdomItemVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 11 public/protected members: 3 methods, 7 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: KingdomWarItemVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy`, inheritance chain KingdomWarItemVM → KingdomDiplomacyItemVM → KingdomItemVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 7/11, methods 3/11), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomWarItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `KingdomWarItemVM` | `public KingdomWarItemVM(StanceLink war, Action<KingdomWarItemVM>onSelect) : base(war.Faction1, war.Faction2)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OnSelect` | `protected override void OnSelect()` | method |
| `UpdateDiplomacyProperties` | `protected override void UpdateDiplomacyProperties()` | method |
| `WarName` | `public string WarName` | property |
| `NumberOfDaysSinceWarBegan` | `public string NumberOfDaysSinceWarBegan` | property |
| `IsBehaviorSelectionEnabled` | `public bool IsBehaviorSelectionEnabled` | property |
| `Score` | `public int Score` | property |
| `CasualtiesOfFaction1` | `public int CasualtiesOfFaction1` | property |
| `CasualtiesOfFaction2` | `public int CasualtiesOfFaction2` | property |
| `MBBindingList` | `public MBBindingList<KingdomWarLogItemVM>WarLog` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface KingdomDiplomacyItemVM](../KingdomDiplomacyItemVM/)
- [same namespace KingdomDiplomacyFactionItemVM](../KingdomDiplomacyFactionItemVM/)
- [same namespace KingdomDiplomacyItemVM](../KingdomDiplomacyItemVM/)
- [same namespace KingdomDiplomacyProposalActionItemVM](../KingdomDiplomacyProposalActionItemVM/)
- [same namespace KingdomDiplomacyVM](../KingdomDiplomacyVM/)
