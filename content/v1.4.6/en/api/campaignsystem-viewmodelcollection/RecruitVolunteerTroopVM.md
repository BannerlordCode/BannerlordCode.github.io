---
title: "RecruitVolunteerTroopVM"
description: "RecruitVolunteerTroopVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 21 exposed members (8 methods, 12 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Recruitment/RecruitVolunteerTroopVM.cs."
---
# RecruitVolunteerTroopVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class RecruitVolunteerTroopVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Recruitment/RecruitVolunteerTroopVM.cs`

## Overview

RecruitVolunteerTroopVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Recruitment/RecruitVolunteerTroopVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is RecruitVolunteerTroopVM → ViewModel. It exposes 21 public/protected members: 8 methods, 12 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: RecruitVolunteerTroopVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment) the module directory; inheritance chain RecruitVolunteerTroopVM → ViewModel. The surface is property-led (properties 12/21, methods 8/21), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Recruitment/RecruitVolunteerTroopVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RecruitVolunteerTroopVM` | `public RecruitVolunteerTroopVM(RecruitVolunteerVM owner, CharacterObject character, int index, Action<RecruitVolunteerTroopVM>onClick, Action<RecruitVolunteerTroopVM>onRemoveFromCart)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `ExecuteRecruit` | `public void ExecuteRecruit()` | method |
| `ExecuteOpenEncyclopedia` | `public void ExecuteOpenEncyclopedia()` | method |
| `ExecuteRemoveFromCart` | `public void ExecuteRemoveFromCart()` | method |
| `ExecuteBeginHint` | `public virtual void ExecuteBeginHint()` | method |
| `ExecuteEndHint` | `public virtual void ExecuteEndHint()` | method |
| `ExecuteFocus` | `public void ExecuteFocus()` | method |
| `ExecuteUnfocus` | `public void ExecuteUnfocus()` | method |
| `Level` | `public string Level` | property |
| `CanBeRecruited` | `public bool CanBeRecruited` | property |
| `IsHiglightEnabled` | `public bool IsHiglightEnabled` | property |
| `Wage` | `public int Wage` | property |
| `Cost` | `public int Cost` | property |
| `IsInCart` | `public bool IsInCart` | property |
| `IsTroopEmpty` | `public bool IsTroopEmpty` | property |
| `PlayerHasEnoughRelation` | `public bool PlayerHasEnoughRelation` | property |
| `ImageIdentifier` | `public CharacterImageIdentifierVM ImageIdentifier` | property |
| `NameText` | `public string NameText` | property |
| `TierIconData` | `public StringItemWithHintVM TierIconData` | property |
| `TypeIconData` | `public StringItemWithHintVM TypeIconData` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace RecruitmentVM](../RecruitmentVM)
- [same namespace RecruitVolunteerOwnerVM](../RecruitVolunteerOwnerVM)
- [same namespace RecruitVolunteerVM](../RecruitVolunteerVM)
