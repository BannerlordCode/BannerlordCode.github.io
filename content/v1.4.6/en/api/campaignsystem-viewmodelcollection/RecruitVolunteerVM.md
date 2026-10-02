---
title: "RecruitVolunteerVM"
description: "RecruitVolunteerVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 16 exposed members (5 methods, 10 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Recruitment/RecruitVolunteerVM.cs."
---
# RecruitVolunteerVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class RecruitVolunteerVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Recruitment/RecruitVolunteerVM.cs`

## Overview

RecruitVolunteerVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Recruitment/RecruitVolunteerVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is RecruitVolunteerVM → ViewModel. It exposes 16 public/protected members: 5 methods, 10 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: RecruitVolunteerVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment) the module directory; inheritance chain RecruitVolunteerVM → ViewModel. The surface is property-led (properties 10/16, methods 5/16), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Recruitment/RecruitVolunteerVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OwnerHero` | `public Hero OwnerHero` | property |
| `List` | `public List<CharacterObject>VolunteerTroops` | property |
| `GoldCost` | `public int GoldCost` | property |
| `RecruitVolunteerVM` | `public RecruitVolunteerVM(Hero owner, List<CharacterObject>troops, Action<RecruitVolunteerVM, RecruitVolunteerTroopVM>onRecruit, Action<RecruitVolunteerVM, RecruitVolunteerTroopVM>onRemoveFromCart)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `ExecuteRecruit` | `public void ExecuteRecruit(RecruitVolunteerTroopVM troop)` | method |
| `ExecuteRemoveFromCart` | `public void ExecuteRemoveFromCart(RecruitVolunteerTroopVM troop)` | method |
| `OnRecruitMoveToCart` | `public void OnRecruitMoveToCart(RecruitVolunteerTroopVM troop)` | method |
| `OnRecruitRemovedFromCart` | `public void OnRecruitRemovedFromCart(RecruitVolunteerTroopVM troop)` | method |
| `MBBindingList` | `public MBBindingList<RecruitVolunteerTroopVM>Troops` | property |
| `Owner` | `public RecruitVolunteerOwnerVM Owner` | property |
| `CanRecruit` | `public bool CanRecruit` | property |
| `ButtonIsVisible` | `public bool ButtonIsVisible` | property |
| `QuantityText` | `public string QuantityText` | property |
| `RecruitText` | `public string RecruitText` | property |
| `RecruitHint` | `public HintViewModel RecruitHint` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace RecruitmentVM](../RecruitmentVM)
- [same namespace RecruitVolunteerOwnerVM](../RecruitVolunteerOwnerVM)
- [same namespace RecruitVolunteerTroopVM](../RecruitVolunteerTroopVM)
