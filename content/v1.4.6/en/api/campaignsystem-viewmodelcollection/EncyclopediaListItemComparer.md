---
title: "EncyclopediaListItemComparer"
description: "EncyclopediaListItemComparer: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting IComparer<EncyclopediaListItemVM>; 3 exposed members (1 methods, 1 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/EncyclopediaListItemComparer.cs."
---
# EncyclopediaListItemComparer

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class EncyclopediaListItemComparer : IComparer<EncyclopediaListItemVM>`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/EncyclopediaListItemComparer.cs`

## Overview

EncyclopediaListItemComparer lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/EncyclopediaListItemComparer.cs. It is a public class, implementing/inheriting IComparer<EncyclopediaListItemVM>; the inheritance chain is EncyclopediaListItemComparer → IComparer. It exposes 3 public/protected members: 1 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EncyclopediaListItemComparer is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List) the module directory; inheritance chain EncyclopediaListItemComparer → IComparer. The surface is method-led (methods 1/3, properties 1/3), so it mostly exposes operations. IComparer on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/EncyclopediaListItemComparer.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SortController` | `public EncyclopediaSortController SortController` | property |
| `EncyclopediaListItemComparer` | `public EncyclopediaListItemComparer(EncyclopediaSortController sortController)` | constructor |
| `Compare` | `public int Compare(EncyclopediaListItemVM x, EncyclopediaListItemVM y)` | method |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace EncyclopediaFilterGroupVM](../EncyclopediaFilterGroupVM)
- [same namespace EncyclopediaListFilterVM](../EncyclopediaListFilterVM)
- [same namespace EncyclopediaListItemVM](../EncyclopediaListItemVM)
- [same namespace EncyclopediaListSelectorItemVM](../EncyclopediaListSelectorItemVM)
