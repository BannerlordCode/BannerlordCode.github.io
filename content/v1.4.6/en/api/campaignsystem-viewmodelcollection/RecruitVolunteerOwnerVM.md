---
title: "RecruitVolunteerOwnerVM"
description: "RecruitVolunteerOwnerVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting HeroVM; 7 exposed members (4 methods, 2 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Recruitment/RecruitVolunteerOwnerVM.cs."
---
# RecruitVolunteerOwnerVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class RecruitVolunteerOwnerVM : HeroVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Recruitment/RecruitVolunteerOwnerVM.cs`

## Overview

RecruitVolunteerOwnerVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Recruitment/RecruitVolunteerOwnerVM.cs. It is a public class, implementing/inheriting HeroVM; the inheritance chain is RecruitVolunteerOwnerVM → HeroVM → ViewModel. It exposes 7 public/protected members: 4 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: RecruitVolunteerOwnerVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment) the module directory; inheritance chain RecruitVolunteerOwnerVM → HeroVM → ViewModel. The surface is method-led (methods 4/7, properties 2/7), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Recruitment/RecruitVolunteerOwnerVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RecruitVolunteerOwnerVM` | `public RecruitVolunteerOwnerVM(Hero hero, int relation) : base(hero, hero != null && hero.IsNotable)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `ExecuteOpenEncyclopedia` | `public void ExecuteOpenEncyclopedia()` | method |
| `ExecuteFocus` | `public void ExecuteFocus()` | method |
| `ExecuteUnfocus` | `public void ExecuteUnfocus()` | method |
| `TitleText` | `public string TitleText` | property |
| `RelationToPlayer` | `public int RelationToPlayer` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface HeroVM](../HeroVM)
- [same namespace RecruitmentVM](../RecruitmentVM)
- [same namespace RecruitVolunteerTroopVM](../RecruitVolunteerTroopVM)
- [same namespace RecruitVolunteerVM](../RecruitVolunteerVM)
