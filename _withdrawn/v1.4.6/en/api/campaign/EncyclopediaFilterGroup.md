---
title: "EncyclopediaFilterGroup"
description: "EncyclopediaFilterGroup: a public class in TaleWorlds.CampaignSystem.Encyclopedia, inheriting ViewModel; 2 exposed members (0 methods, 1 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/Encyclopedia/EncyclopediaFilterGroup.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# EncyclopediaFilterGroup

**Namespace:** `TaleWorlds.CampaignSystem.Encyclopedia`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class EncyclopediaFilterGroup : ViewModel`
**File:** `TaleWorlds.CampaignSystem/Encyclopedia/EncyclopediaFilterGroup.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

EncyclopediaFilterGroup lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Encyclopedia/EncyclopediaFilterGroup.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is EncyclopediaFilterGroup → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 2 public/protected members: 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EncyclopediaFilterGroup lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem.Encyclopedia`, inheritance chain EncyclopediaFilterGroup → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 1/2, methods 0/2), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Encyclopedia/EncyclopediaFilterGroup.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `EncyclopediaFilterGroup` | `public EncyclopediaFilterGroup(List<EncyclopediaFilterItem>filters, TextObject name)` | constructor |
| `Predicate` | `public Predicate<object>Predicate` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace EncyclopediaFilterItem](../EncyclopediaFilterItem/)
- [same namespace EncyclopediaListItem](../EncyclopediaListItem/)
- [same namespace EncyclopediaListItemComparerBase](../EncyclopediaListItemComparerBase/)
- [same namespace EncyclopediaManager](../EncyclopediaManager/)
