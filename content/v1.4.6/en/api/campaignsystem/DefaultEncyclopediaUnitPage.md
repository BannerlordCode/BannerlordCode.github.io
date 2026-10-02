---
title: "DefaultEncyclopediaUnitPage"
description: "DefaultEncyclopediaUnitPage: a public class in TaleWorlds.CampaignSystem, inheriting EncyclopediaPage; 15 exposed members (12 methods, 1 properties, 0 fields). Source: TaleWorlds.CampaignSystem/Encyclopedia/Pages/DefaultEncyclopediaUnitPage.cs."
---
# DefaultEncyclopediaUnitPage

**Namespace:** `TaleWorlds.CampaignSystem.Encyclopedia.Pages`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultEncyclopediaUnitPage : EncyclopediaPage`
**File:** `TaleWorlds.CampaignSystem/Encyclopedia/Pages/DefaultEncyclopediaUnitPage.cs`

## Overview

DefaultEncyclopediaUnitPage lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Encyclopedia/Pages/DefaultEncyclopediaUnitPage.cs. It is a public class, implementing/inheriting EncyclopediaPage; the inheritance chain is DefaultEncyclopediaUnitPage → EncyclopediaPage. It exposes 15 public/protected members: 12 methods, 1 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultEncyclopediaUnitPage is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.Encyclopedia.Pages) the module directory; inheritance chain DefaultEncyclopediaUnitPage → EncyclopediaPage. The surface is method-led (methods 12/15, properties 1/15), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Encyclopedia/Pages/DefaultEncyclopediaUnitPage.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DefaultEncyclopediaUnitPage` | `public DefaultEncyclopediaUnitPage()` | constructor |
| `IEnumerable` | `protected override IEnumerable<EncyclopediaListItem>InitializeListItems()` | method |
| `IEnumerable` | `protected override IEnumerable<EncyclopediaFilterGroup>InitializeFilterItems()` | method |
| `List` | `protected virtual List<EncyclopediaFilterItem>GetTypeFilterItems()` | method |
| `List` | `protected virtual List<EncyclopediaFilterItem>GetOccupationFilterItems()` | method |
| `List` | `protected virtual List<EncyclopediaFilterItem>GetCultureFilterItems()` | method |
| `List` | `protected virtual List<EncyclopediaFilterItem>GetOutlawFilterItems()` | method |
| `IEnumerable` | `protected override IEnumerable<EncyclopediaSortController>InitializeSortControllers()` | method |
| `GetViewFullyQualifiedName` | `public override string GetViewFullyQualifiedName()` | method |
| `GetName` | `public override TextObject GetName()` | method |
| `GetDescriptionText` | `public override TextObject GetDescriptionText()` | method |
| `GetStringID` | `public override string GetStringID()` | method |
| `IsValidEncyclopediaItem` | `public override bool IsValidEncyclopediaItem(object o)` | method |
| `EncyclopediaListItemComparerBase` | `public abstract class EncyclopediaListUnitComparer : EncyclopediaListItemComparerBase` | property |
| `EncyclopediaListItemComparerBase` | `public abstract class EncyclopediaListUnitComparer : EncyclopediaListItemComparerBase` | nested type |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface EncyclopediaPage](../EncyclopediaPage)
- [same namespace DefaultEncyclopediaClanPage](../DefaultEncyclopediaClanPage)
- [same namespace DefaultEncyclopediaConceptPage](../DefaultEncyclopediaConceptPage)
- [same namespace DefaultEncyclopediaFactionPage](../DefaultEncyclopediaFactionPage)
- [same namespace DefaultEncyclopediaHeroPage](../DefaultEncyclopediaHeroPage)
