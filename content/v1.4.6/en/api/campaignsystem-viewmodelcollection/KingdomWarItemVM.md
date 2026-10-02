---
title: "KingdomWarItemVM"
description: "KingdomWarItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting KingdomDiplomacyItemVM; 11 exposed members (3 methods, 7 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomWarItemVM.cs."
---
# KingdomWarItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class KingdomWarItemVM : KingdomDiplomacyItemVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomWarItemVM.cs`

## Overview

KingdomWarItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomWarItemVM.cs. It is a public class, implementing/inheriting KingdomDiplomacyItemVM; the inheritance chain is KingdomWarItemVM → KingdomDiplomacyItemVM → KingdomItemVM → ViewModel. It exposes 11 public/protected members: 3 methods, 7 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: KingdomWarItemVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy) the module directory; inheritance chain KingdomWarItemVM → KingdomDiplomacyItemVM → KingdomItemVM → ViewModel. The surface is property-led (properties 7/11, methods 3/11), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomWarItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface KingdomDiplomacyItemVM](../KingdomDiplomacyItemVM)
- [same namespace KingdomDiplomacyFactionItemVM](../KingdomDiplomacyFactionItemVM)
- [same namespace KingdomDiplomacyItemVM](../KingdomDiplomacyItemVM)
- [same namespace KingdomDiplomacyProposalActionItemVM](../KingdomDiplomacyProposalActionItemVM)
- [same namespace KingdomDiplomacyVM](../KingdomDiplomacyVM)
