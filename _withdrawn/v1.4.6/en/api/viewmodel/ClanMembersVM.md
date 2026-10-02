---
title: "ClanMembersVM"
description: "ClanMembersVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories, inheriting ViewModel; 17 exposed members (4 methods, 12 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanMembersVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ClanMembersVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ClanMembersVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanMembersVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

ClanMembersVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanMembersVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is ClanMembersVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 17 public/protected members: 4 methods, 12 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClanMembersVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories`, inheritance chain ClanMembersVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 12/17, methods 4/17), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanMembersVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ClanFiefsSortControllerVM](../ClanFiefsSortControllerVM/)
- [same namespace ClanFiefsVM](../ClanFiefsVM/)
- [same namespace ClanIncomeSortControllerVM](../ClanIncomeSortControllerVM/)
- [same namespace ClanIncomeVM](../ClanIncomeVM/)
