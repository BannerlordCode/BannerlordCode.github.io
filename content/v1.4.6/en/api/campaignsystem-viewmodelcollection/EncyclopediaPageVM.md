---
title: "EncyclopediaPageVM"
description: "EncyclopediaPageVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 14 exposed members (6 methods, 7 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Pages/EncyclopediaPageVM.cs."
---
# EncyclopediaPageVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class EncyclopediaPageVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Pages/EncyclopediaPageVM.cs`

## Overview

EncyclopediaPageVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Pages/EncyclopediaPageVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is EncyclopediaPageVM → ViewModel. It exposes 14 public/protected members: 6 methods, 7 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EncyclopediaPageVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages) the module directory; inheritance chain EncyclopediaPageVM → ViewModel. The surface is property-led (properties 7/14, methods 6/14), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Pages/EncyclopediaPageVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Obj` | `public object Obj` | property |
| `GetName` | `public virtual string GetName()` | method |
| `GetNavigationBarURL` | `public virtual string GetNavigationBarURL()` | method |
| `Refresh` | `public virtual void Refresh()` | method |
| `EncyclopediaPageVM` | `public EncyclopediaPageVM(EncyclopediaPageArgs args)` | constructor |
| `OnTick` | `public virtual void OnTick()` | method |
| `ExecuteSwitchBookmarkedState` | `public virtual void ExecuteSwitchBookmarkedState()` | method |
| `UpdateBookmarkHintText` | `protected void UpdateBookmarkHintText()` | method |
| `IsLoadingOver` | `public bool IsLoadingOver` | property |
| `IsBookmarked` | `public bool IsBookmarked` | property |
| `BookmarkHint` | `public HintViewModel BookmarkHint` | property |
| `MBBindingList` | `public virtual MBBindingList<EncyclopediaListItemVM>Items` | property |
| `MBBindingList` | `public virtual MBBindingList<EncyclopediaFilterGroupVM>FilterGroups` | property |
| `SortController` | `public virtual EncyclopediaListSortControllerVM SortController` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace EncyclopediaClanPageVM](../EncyclopediaClanPageVM)
- [same namespace EncyclopediaConceptPageVM](../EncyclopediaConceptPageVM)
- [same namespace EncyclopediaContentPageVM](../EncyclopediaContentPageVM)
- [same namespace EncyclopediaFactionPageVM](../EncyclopediaFactionPageVM)
