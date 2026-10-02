---
title: "EncyclopediaHeroPageVM"
description: "EncyclopediaHeroPageVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting EncyclopediaContentPageVM; 53 exposed members (7 methods, 45 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Pages/EncyclopediaHeroPageVM.cs."
---
# EncyclopediaHeroPageVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class EncyclopediaHeroPageVM : EncyclopediaContentPageVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Pages/EncyclopediaHeroPageVM.cs`

## Overview

EncyclopediaHeroPageVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Pages/EncyclopediaHeroPageVM.cs. It is a public class, implementing/inheriting EncyclopediaContentPageVM; the inheritance chain is EncyclopediaHeroPageVM → EncyclopediaContentPageVM → EncyclopediaPageVM → ViewModel. It exposes 53 public/protected members: 7 methods, 45 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EncyclopediaHeroPageVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages) the module directory; inheritance chain EncyclopediaHeroPageVM → EncyclopediaContentPageVM → EncyclopediaPageVM → ViewModel. The surface is property-led (properties 45/53, methods 7/53), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Pages/EncyclopediaHeroPageVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `EncyclopediaHeroPageVM` | `public EncyclopediaHeroPageVM(EncyclopediaPageArgs args) : base(args)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `Refresh` | `public override void Refresh()` | method |
| `GetName` | `public override string GetName()` | method |
| `GetNavigationBarURL` | `public override string GetNavigationBarURL()` | method |
| `ExecuteLink` | `public void ExecuteLink(string link)` | method |
| `ExecuteSwitchBookmarkedState` | `public override void ExecuteSwitchBookmarkedState()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `Faction` | `public EncyclopediaFactionVM Faction` | property |
| `IsCompanion` | `public bool IsCompanion` | property |
| `IsPregnant` | `public bool IsPregnant` | property |
| `Master` | `public HeroVM Master` | property |
| `ClanText` | `public string ClanText` | property |
| `InfoText` | `public string InfoText` | property |
| `TraitsText` | `public string TraitsText` | property |
| `MasterText` | `public string MasterText` | property |
| `KingdomRankText` | `public string KingdomRankText` | property |
| `InfoHiddenReasonText` | `public string InfoHiddenReasonText` | property |
| `SkillsText` | `public string SkillsText` | property |
| `HeroCharacter` | `public HeroViewModel HeroCharacter` | property |
| `LastSeenText` | `public string LastSeenText` | property |
| `DeceasedText` | `public string DeceasedText` | property |
| `NameText` | `public string NameText` | property |
| `SettlementsText` | `public string SettlementsText` | property |
| `DwellingsText` | `public string DwellingsText` | property |
| `CompanionsText` | `public string CompanionsText` | property |
| `AlliesText` | `public string AlliesText` | property |
| `EnemiesText` | `public string EnemiesText` | property |
| `FamilyText` | `public string FamilyText` | property |
| `MBBindingList` | `public MBBindingList<StringPairItemVM>Stats` | property |
| `MBBindingList` | `public MBBindingList<EncyclopediaTraitItemVM>Traits` | property |
| `MBBindingList` | `public MBBindingList<EncyclopediaSkillVM>Skills` | property |
| `MBBindingList` | `public MBBindingList<EncyclopediaDwellingVM>Dwellings` | property |
| `MBBindingList` | `public MBBindingList<EncyclopediaSettlementVM>Settlements` | property |
| `MBBindingList` | `public MBBindingList<EncyclopediaFamilyMemberVM>Family` | property |
| `MBBindingList` | `public MBBindingList<HeroVM>Companions` | property |
| `MBBindingList` | `public MBBindingList<HeroVM>Enemies` | property |
| `MBBindingList` | `public MBBindingList<HeroVM>Allies` | property |
| `MBBindingList` | `public MBBindingList<EncyclopediaHistoryEventVM>History` | property |
| `HasNeutralClan` | `public bool HasNeutralClan` | property |
| `IsDead` | `public bool IsDead` | property |
| `IsInformationHidden` | `public bool IsInformationHidden` | property |
| `InformationText` | `public string InformationText` | property |
| `PregnantHint` | `public HintViewModel PregnantHint` | property |
| `HasAnySkills` | `public bool HasAnySkills` | property |
| `MBBindingList` | `public MBBindingList<HeroVM>AdditionalEnemies` | property |
| `MBBindingList` | `public MBBindingList<HeroVM>AdditionalAllies` | property |
| `AnyAdditionalAllies` | `public bool AnyAdditionalAllies` | property |
| `AnyAdditionalEnemies` | `public bool AnyAdditionalEnemies` | property |
| `AdditionalAlliesString` | `public string AdditionalAlliesString` | property |
| `AdditionalEnemiesString` | `public string AdditionalEnemiesString` | property |
| `AdditionalAlliesHint` | `public BasicTooltipViewModel AdditionalAlliesHint` | property |
| `AdditionalEnemiesHint` | `public BasicTooltipViewModel AdditionalEnemiesHint` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface EncyclopediaContentPageVM](../EncyclopediaContentPageVM)
- [same namespace EncyclopediaClanPageVM](../EncyclopediaClanPageVM)
- [same namespace EncyclopediaConceptPageVM](../EncyclopediaConceptPageVM)
- [same namespace EncyclopediaContentPageVM](../EncyclopediaContentPageVM)
- [same namespace EncyclopediaFactionPageVM](../EncyclopediaFactionPageVM)
