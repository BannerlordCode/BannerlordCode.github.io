---
title: "EncyclopediaPageVM"
description: "EncyclopediaPageVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages, inheriting ViewModel; 14 exposed members (6 methods, 7 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Pages/EncyclopediaPageVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# EncyclopediaPageVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class EncyclopediaPageVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Pages/EncyclopediaPageVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

EncyclopediaPageVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Pages/EncyclopediaPageVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is EncyclopediaPageVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 14 public/protected members: 6 methods, 7 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EncyclopediaPageVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages`, inheritance chain EncyclopediaPageVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 7/14, methods 6/14), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Pages/EncyclopediaPageVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace EncyclopediaClanPageVM](../EncyclopediaClanPageVM/)
- [same namespace EncyclopediaConceptPageVM](../EncyclopediaConceptPageVM/)
- [same namespace EncyclopediaContentPageVM](../EncyclopediaContentPageVM/)
- [same namespace EncyclopediaFactionPageVM](../EncyclopediaFactionPageVM/)
