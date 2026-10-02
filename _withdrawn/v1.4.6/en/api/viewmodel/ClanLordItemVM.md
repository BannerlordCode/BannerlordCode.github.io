---
title: "ClanLordItemVM"
description: "ClanLordItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement, inheriting ViewModel; 39 exposed members (13 methods, 25 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanLordItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ClanLordItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ClanLordItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanLordItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

ClanLordItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanLordItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is ClanLordItemVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 39 public/protected members: 13 methods, 25 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClanLordItemVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement`, inheritance chain ClanLordItemVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 25/39, methods 13/39), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanLordItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ClanLordItemVM` | `public ClanLordItemVM(Hero hero, ITeleportationCampaignBehavior teleportationBehavior, Action<Hero>showHeroOnMap, Action<ClanLordItemVM>onCharacterSelect, Action onRecall, Action onTalk)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `ExecuteLocationLink` | `public void ExecuteLocationLink(string link)` | method |
| `UpdateProperties` | `public void UpdateProperties()` | method |
| `ExecuteLink` | `public void ExecuteLink()` | method |
| `OnCharacterSelect` | `public void OnCharacterSelect()` | method |
| `ExecuteBeginHint` | `public virtual void ExecuteBeginHint()` | method |
| `ExecuteEndHint` | `public virtual void ExecuteEndHint()` | method |
| `GetHero` | `public Hero GetHero()` | method |
| `ExecuteRename` | `public void ExecuteRename()` | method |
| `ExecuteShowOnMap` | `public void ExecuteShowOnMap()` | method |
| `ExecuteRecall` | `public void ExecuteRecall()` | method |
| `ExecuteTalk` | `public void ExecuteTalk()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `MBBindingList` | `public MBBindingList<EncyclopediaSkillVM>Skills` | property |
| `MBBindingList` | `public MBBindingList<EncyclopediaTraitItemVM>Traits` | property |
| `HeroModel` | `public HeroViewModel HeroModel` | property |
| `IsSelected` | `public bool IsSelected` | property |
| `IsChild` | `public bool IsChild` | property |
| `IsTeleporting` | `public bool IsTeleporting` | property |
| `IsRecallVisible` | `public bool IsRecallVisible` | property |
| `IsRecallEnabled` | `public bool IsRecallEnabled` | property |
| `IsTalkVisible` | `public bool IsTalkVisible` | property |
| `IsTalkEnabled` | `public bool IsTalkEnabled` | property |
| `CanShowLocationOfHero` | `public bool CanShowLocationOfHero` | property |
| `IsMainHero` | `public bool IsMainHero` | property |
| `IsFamilyMember` | `public bool IsFamilyMember` | property |
| `IsPregnant` | `public bool IsPregnant` | property |
| `Visual` | `public CharacterImageIdentifierVM Visual` | property |
| `Banner_9` | `public BannerImageIdentifierVM Banner_9` | property |
| `LocationText` | `public string LocationText` | property |
| `CurrentActionText` | `public string CurrentActionText` | property |
| `RelationToMainHeroText` | `public string RelationToMainHeroText` | property |
| `GovernorOfText` | `public string GovernorOfText` | property |
| `Name` | `public string Name` | property |
| `PregnantHint` | `public HintViewModel PregnantHint` | property |
| `ShowOnMapHint` | `public HintViewModel ShowOnMapHint` | property |
| `RecallHint` | `public HintViewModel RecallHint` | property |
| `TalkHint` | `public HintViewModel TalkHint` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace CardSelectionItemSpriteType](../CardSelectionItemSpriteType/)
- [same namespace ClanCardSelectionInfo](../ClanCardSelectionInfo/)
- [same namespace ClanCardSelectionItemInfo](../ClanCardSelectionItemInfo/)
- [same namespace ClanCardSelectionItemPropertyInfo](../ClanCardSelectionItemPropertyInfo/)
