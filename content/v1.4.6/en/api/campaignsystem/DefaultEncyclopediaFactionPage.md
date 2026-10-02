---
title: "DefaultEncyclopediaFactionPage"
description: "DefaultEncyclopediaFactionPage: a public class in TaleWorlds.CampaignSystem, inheriting EncyclopediaPage; 12 exposed members (9 methods, 1 properties, 0 fields). Source: TaleWorlds.CampaignSystem/Encyclopedia/Pages/DefaultEncyclopediaFactionPage.cs."
---
# DefaultEncyclopediaFactionPage

**Namespace:** `TaleWorlds.CampaignSystem.Encyclopedia.Pages`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultEncyclopediaFactionPage : EncyclopediaPage`
**File:** `TaleWorlds.CampaignSystem/Encyclopedia/Pages/DefaultEncyclopediaFactionPage.cs`

## Overview

DefaultEncyclopediaFactionPage lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Encyclopedia/Pages/DefaultEncyclopediaFactionPage.cs. It is a public class, implementing/inheriting EncyclopediaPage; the inheritance chain is DefaultEncyclopediaFactionPage → EncyclopediaPage. It exposes 12 public/protected members: 9 methods, 1 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultEncyclopediaFactionPage is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.Encyclopedia.Pages) the module directory; inheritance chain DefaultEncyclopediaFactionPage → EncyclopediaPage. The surface is method-led (methods 9/12, properties 1/12), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Encyclopedia/Pages/DefaultEncyclopediaFactionPage.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DefaultEncyclopediaFactionPage` | `public DefaultEncyclopediaFactionPage()` | constructor |
| `GetViewFullyQualifiedName` | `public override string GetViewFullyQualifiedName()` | method |
| `GetName` | `public override TextObject GetName()` | method |
| `GetDescriptionText` | `public override TextObject GetDescriptionText()` | method |
| `GetStringID` | `public override string GetStringID()` | method |
| `GetObject` | `public override MBObjectBase GetObject(string typeName, string stringID)` | method |
| `IsValidEncyclopediaItem` | `public override bool IsValidEncyclopediaItem(object o)` | method |
| `IEnumerable` | `protected override IEnumerable<EncyclopediaListItem>InitializeListItems()` | method |
| `IEnumerable` | `protected override IEnumerable<EncyclopediaFilterGroup>InitializeFilterItems()` | method |
| `IEnumerable` | `protected override IEnumerable<EncyclopediaSortController>InitializeSortControllers()` | method |
| `EncyclopediaListItemComparerBase` | `public abstract class EncyclopediaListKingdomComparer : EncyclopediaListItemComparerBase` | property |
| `EncyclopediaListItemComparerBase` | `public abstract class EncyclopediaListKingdomComparer : EncyclopediaListItemComparerBase` | nested type |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface EncyclopediaPage](../EncyclopediaPage)
- [same namespace DefaultEncyclopediaClanPage](../DefaultEncyclopediaClanPage)
- [same namespace DefaultEncyclopediaConceptPage](../DefaultEncyclopediaConceptPage)
- [same namespace DefaultEncyclopediaHeroPage](../DefaultEncyclopediaHeroPage)
- [same namespace DefaultEncyclopediaSettlementPage](../DefaultEncyclopediaSettlementPage)
