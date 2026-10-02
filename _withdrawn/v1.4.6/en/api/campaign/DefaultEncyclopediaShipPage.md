---
title: "DefaultEncyclopediaShipPage"
description: "DefaultEncyclopediaShipPage: a public class in TaleWorlds.CampaignSystem.Encyclopedia.Pages, inheriting EncyclopediaPage; 13 exposed members (9 methods, 1 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/Encyclopedia/Pages/DefaultEncyclopediaShipPage.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultEncyclopediaShipPage

**Namespace:** `TaleWorlds.CampaignSystem.Encyclopedia.Pages`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultEncyclopediaShipPage : EncyclopediaPage`
**File:** `TaleWorlds.CampaignSystem/Encyclopedia/Pages/DefaultEncyclopediaShipPage.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

DefaultEncyclopediaShipPage lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Encyclopedia/Pages/DefaultEncyclopediaShipPage.cs. It is a public class, implementing/inheriting EncyclopediaPage; the inheritance chain is DefaultEncyclopediaShipPage → EncyclopediaPage. It exposes 13 public/protected members: 9 methods, 1 properties, 1 constructors, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultEncyclopediaShipPage lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem.Encyclopedia.Pages`, inheritance chain DefaultEncyclopediaShipPage → EncyclopediaPage. The surface is method-led (methods 9/13, properties 1/13), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Encyclopedia/Pages/DefaultEncyclopediaShipPage.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `DefaultEncyclopediaShipPage` | `public DefaultEncyclopediaShipPage()` | constructor |
| `IsRelevant` | `public override bool IsRelevant()` | method |
| `IEnumerable` | `protected override IEnumerable<EncyclopediaListItem>InitializeListItems()` | method |
| `IEnumerable` | `protected override IEnumerable<EncyclopediaFilterGroup>InitializeFilterItems()` | method |
| `IEnumerable` | `protected override IEnumerable<EncyclopediaSortController>InitializeSortControllers()` | method |
| `GetViewFullyQualifiedName` | `public override string GetViewFullyQualifiedName()` | method |
| `GetStringID` | `public override string GetStringID()` | method |
| `GetName` | `public override TextObject GetName()` | method |
| `GetObject` | `public override MBObjectBase GetObject(string typeName, string stringID)` | method |
| `IsValidEncyclopediaItem` | `public override bool IsValidEncyclopediaItem(object o)` | method |
| `EncyclopediaListItemComparerBase` | `public abstract class EncyclopediaListShipComparer : EncyclopediaListItemComparerBase` | property |
| `EncyclopediaListItemComparerBase` | `public abstract class EncyclopediaListShipComparer : EncyclopediaListItemComparerBase` | nested type |
| `ShipVisibilityComparerDelegate` | `protected delegate bool ShipVisibilityComparerDelegate(ShipHull s1, ShipHull s2, out int comparisonResult)` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface EncyclopediaPage](../EncyclopediaPage/)
- [same namespace DefaultEncyclopediaClanPage](../DefaultEncyclopediaClanPage/)
- [same namespace DefaultEncyclopediaConceptPage](../DefaultEncyclopediaConceptPage/)
- [same namespace DefaultEncyclopediaFactionPage](../DefaultEncyclopediaFactionPage/)
- [same namespace DefaultEncyclopediaHeroPage](../DefaultEncyclopediaHeroPage/)
