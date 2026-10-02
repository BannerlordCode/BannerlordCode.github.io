---
title: "ClanMembersVM"
description: "ClanMembersVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 17 exposed members (4 methods, 12 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanMembersVM.cs."
---
# ClanMembersVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ClanMembersVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanMembersVM.cs`

## Overview

ClanMembersVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanMembersVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is ClanMembersVM → ViewModel. It exposes 17 public/protected members: 4 methods, 12 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClanMembersVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories) the module directory; inheritance chain ClanMembersVM → ViewModel. The surface is property-led (properties 12/17, methods 4/17), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanMembersVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ClanMembersVM` | `public ClanMembersVM(Action onRefresh, Action<Hero>showHeroOnMap)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `RefreshMembersList` | `public void RefreshMembersList()` | method |
| `SelectMember` | `public void SelectMember(Hero hero)` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `IsAnyValidMemberSelected` | `public bool IsAnyValidMemberSelected` | property |
| `IsSelected` | `public bool IsSelected` | property |
| `FamilyText` | `public string FamilyText` | property |
| `TraitsText` | `public string TraitsText` | property |
| `SkillsText` | `public string SkillsText` | property |
| `NameText` | `public string NameText` | property |
| `LocationText` | `public string LocationText` | property |
| `CompanionsText` | `public string CompanionsText` | property |
| `MBBindingList` | `public MBBindingList<ClanLordItemVM>Companions` | property |
| `MBBindingList` | `public MBBindingList<ClanLordItemVM>Family` | property |
| `CurrentSelectedMember` | `public ClanLordItemVM CurrentSelectedMember` | property |
| `SortController` | `public ClanMembersSortControllerVM SortController` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ClanFiefsSortControllerVM](../ClanFiefsSortControllerVM)
- [same namespace ClanFiefsVM](../ClanFiefsVM)
- [same namespace ClanIncomeSortControllerVM](../ClanIncomeSortControllerVM)
- [same namespace ClanIncomeVM](../ClanIncomeVM)
