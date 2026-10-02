---
title: "MarriageOfferPopupHeroVM"
description: "MarriageOfferPopupHeroVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 18 exposed members (5 methods, 12 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MarriageOfferPopup/MarriageOfferPopupHeroVM.cs."
---
# MarriageOfferPopupHeroVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MarriageOfferPopup`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class MarriageOfferPopupHeroVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MarriageOfferPopup/MarriageOfferPopupHeroVM.cs`

## Overview

MarriageOfferPopupHeroVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MarriageOfferPopup/MarriageOfferPopupHeroVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MarriageOfferPopupHeroVM → ViewModel. It exposes 18 public/protected members: 5 methods, 12 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MarriageOfferPopupHeroVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.Map.MarriageOfferPopup) the module directory; inheritance chain MarriageOfferPopupHeroVM → ViewModel. The surface is property-led (properties 12/18, methods 5/18), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MarriageOfferPopup/MarriageOfferPopupHeroVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Hero` | `public Hero Hero` | property |
| `MarriageOfferPopupHeroVM` | `public MarriageOfferPopupHeroVM(Hero hero)` | constructor |
| `Update` | `public void Update()` | method |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `ExecuteHeroLink` | `public void ExecuteHeroLink()` | method |
| `ExecuteClanLink` | `public void ExecuteClanLink()` | method |
| `EncyclopediaLinkWithName` | `public string EncyclopediaLinkWithName` | property |
| `AgeString` | `public string AgeString` | property |
| `OccupationString` | `public string OccupationString` | property |
| `Relation` | `public int Relation` | property |
| `ClanName` | `public string ClanName` | property |
| `ClanBanner` | `public BannerImageIdentifierVM ClanBanner` | property |
| `Model` | `public HeroViewModel Model` | property |
| `MBBindingList` | `public MBBindingList<EncyclopediaTraitItemVM>Traits` | property |
| `MBBindingList` | `public MBBindingList<MarriageOfferPopupHeroAttributeVM>Attributes` | property |
| `MBBindingList` | `public MBBindingList<EncyclopediaSkillVM>OtherSkills` | property |
| `HasOtherSkills` | `public bool HasOtherSkills` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MarriageOfferPopupHeroAttributeVM](../MarriageOfferPopupHeroAttributeVM)
- [same namespace MarriageOfferPopupVM](../MarriageOfferPopupVM)
