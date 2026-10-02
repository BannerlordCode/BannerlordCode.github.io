---
title: "EncyclopediaListItemComparerBase"
description: "EncyclopediaListItemComparerBase: a public class in TaleWorlds.CampaignSystem, inheriting IComparer<EncyclopediaListItem>; 9 exposed members (6 methods, 1 properties, 2 fields). Source: TaleWorlds.CampaignSystem/Encyclopedia/EncyclopediaListItemComparerBase.cs."
---
# EncyclopediaListItemComparerBase

**Namespace:** `TaleWorlds.CampaignSystem.Encyclopedia`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class EncyclopediaListItemComparerBase : IComparer<EncyclopediaListItem>`
**File:** `TaleWorlds.CampaignSystem/Encyclopedia/EncyclopediaListItemComparerBase.cs`

## Overview

EncyclopediaListItemComparerBase lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Encyclopedia/EncyclopediaListItemComparerBase.cs. It is a public class (abstract), implementing/inheriting IComparer<EncyclopediaListItem>; the inheritance chain is EncyclopediaListItemComparerBase → IComparer. It exposes 9 public/protected members: 6 methods, 1 properties, 2 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EncyclopediaListItemComparerBase is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.Encyclopedia) the module directory; inheritance chain EncyclopediaListItemComparerBase → IComparer. The surface is method-led (methods 6/9, properties 1/9), so it mostly exposes operations. IComparer on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Encyclopedia/EncyclopediaListItemComparerBase.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsAscending` | `public bool IsAscending` | property |
| `SetSortOrder` | `public void SetSortOrder(bool isAscending)` | method |
| `SwitchSortOrder` | `public void SwitchSortOrder()` | method |
| `SetDefaultSortOrder` | `public void SetDefaultSortOrder()` | method |
| `Compare` | `public abstract int Compare(EncyclopediaListItem x, EncyclopediaListItem y);` | method |
| `GetComparedValueText` | `public abstract string GetComparedValueText(EncyclopediaListItem item);` | method |
| `ResolveEquality` | `protected int ResolveEquality(EncyclopediaListItem x, EncyclopediaListItem y)` | method |
| `_emptyValue` | `protected readonly TextObject _emptyValue` | field |
| `_missingValue` | `protected readonly TextObject _missingValue` | field |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace EncyclopediaFilterGroup](../EncyclopediaFilterGroup)
- [same namespace EncyclopediaFilterItem](../EncyclopediaFilterItem)
- [same namespace EncyclopediaListItem](../EncyclopediaListItem)
- [same namespace EncyclopediaManager](../EncyclopediaManager)
