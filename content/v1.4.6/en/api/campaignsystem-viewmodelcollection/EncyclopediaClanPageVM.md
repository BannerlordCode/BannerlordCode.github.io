---
title: "EncyclopediaClanPageVM"
description: "EncyclopediaClanPageVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting EncyclopediaContentPageVM; 33 exposed members (5 methods, 27 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Pages/EncyclopediaClanPageVM.cs."
---
# EncyclopediaClanPageVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class EncyclopediaClanPageVM : EncyclopediaContentPageVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Pages/EncyclopediaClanPageVM.cs`

## Overview

EncyclopediaClanPageVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Pages/EncyclopediaClanPageVM.cs. It is a public class, implementing/inheriting EncyclopediaContentPageVM; the inheritance chain is EncyclopediaClanPageVM → EncyclopediaContentPageVM → EncyclopediaPageVM → ViewModel. It exposes 33 public/protected members: 5 methods, 27 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EncyclopediaClanPageVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages) the module directory; inheritance chain EncyclopediaClanPageVM → EncyclopediaContentPageVM → EncyclopediaPageVM → ViewModel. The surface is property-led (properties 27/33, methods 5/33), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Pages/EncyclopediaClanPageVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `EncyclopediaClanPageVM` | `public EncyclopediaClanPageVM(EncyclopediaPageArgs args) : base(args)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `Refresh` | `public override void Refresh()` | method |
| `GetName` | `public override string GetName()` | method |
| `GetNavigationBarURL` | `public override string GetNavigationBarURL()` | method |
| `ExecuteSwitchBookmarkedState` | `public override void ExecuteSwitchBookmarkedState()` | method |
| `MBBindingList` | `public MBBindingList<StringPairItemVM>ClanInfo` | property |
| `MBBindingList` | `public MBBindingList<HeroVM>Members` | property |
| `MBBindingList` | `public MBBindingList<EncyclopediaFactionVM>Enemies` | property |
| `MBBindingList` | `public MBBindingList<EncyclopediaSettlementVM>Settlements` | property |
| `MBBindingList` | `public MBBindingList<EncyclopediaHistoryEventVM>History` | property |
| `ParentKingdom` | `public EncyclopediaFactionVM ParentKingdom` | property |
| `HasParentKingdom` | `public bool HasParentKingdom` | property |
| `IsClanDestroyed` | `public bool IsClanDestroyed` | property |
| `DestroyedText` | `public string DestroyedText` | property |
| `PartOfText` | `public string PartOfText` | property |
| `TierText` | `public string TierText` | property |
| `InfoText` | `public string InfoText` | property |
| `Leader` | `public HeroVM Leader` | property |
| `Banner` | `public BannerImageIdentifierVM Banner` | property |
| `NameText` | `public string NameText` | property |
| `MembersText` | `public string MembersText` | property |
| `EnemiesText` | `public string EnemiesText` | property |
| `AlliesText` | `public string AlliesText` | property |
| `SettlementsText` | `public string SettlementsText` | property |
| `VillagesText` | `public string VillagesText` | property |
| `InformationText` | `public string InformationText` | property |
| `LeaderText` | `public string LeaderText` | property |
| `DescriptorText` | `public string DescriptorText` | property |
| `ProsperityText` | `public string ProsperityText` | property |
| `StrengthText` | `public string StrengthText` | property |
| `ProsperityHint` | `public HintViewModel ProsperityHint` | property |
| `StrengthHint` | `public HintViewModel StrengthHint` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface EncyclopediaContentPageVM](../EncyclopediaContentPageVM)
- [same namespace EncyclopediaConceptPageVM](../EncyclopediaConceptPageVM)
- [same namespace EncyclopediaContentPageVM](../EncyclopediaContentPageVM)
- [same namespace EncyclopediaFactionPageVM](../EncyclopediaFactionPageVM)
- [same namespace EncyclopediaHeroPageVM](../EncyclopediaHeroPageVM)
