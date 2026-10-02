---
title: "RecruitVolunteerOwnerVM"
description: "RecruitVolunteerOwnerVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment, inheriting HeroVM; 7 exposed members (4 methods, 2 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Recruitment/RecruitVolunteerOwnerVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# RecruitVolunteerOwnerVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class RecruitVolunteerOwnerVM : HeroVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Recruitment/RecruitVolunteerOwnerVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

RecruitVolunteerOwnerVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Recruitment/RecruitVolunteerOwnerVM.cs. It is a public class, implementing/inheriting HeroVM; the inheritance chain is RecruitVolunteerOwnerVM → HeroVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 7 public/protected members: 4 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: RecruitVolunteerOwnerVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment`, inheritance chain RecruitVolunteerOwnerVM → HeroVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 4/7, properties 2/7), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Recruitment/RecruitVolunteerOwnerVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `RecruitVolunteerOwnerVM` | `public RecruitVolunteerOwnerVM(Hero hero, int relation) : base(hero, hero != null && hero.IsNotable)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `ExecuteOpenEncyclopedia` | `public void ExecuteOpenEncyclopedia()` | method |
| `ExecuteFocus` | `public void ExecuteFocus()` | method |
| `ExecuteUnfocus` | `public void ExecuteUnfocus()` | method |
| `TitleText` | `public string TitleText` | property |
| `RelationToPlayer` | `public int RelationToPlayer` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface HeroVM](../HeroVM/)
- [same namespace RecruitmentVM](../RecruitmentVM/)
- [same namespace RecruitVolunteerTroopVM](../RecruitVolunteerTroopVM/)
- [same namespace RecruitVolunteerVM](../RecruitVolunteerVM/)
