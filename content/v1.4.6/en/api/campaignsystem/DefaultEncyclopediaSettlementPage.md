---
title: "DefaultEncyclopediaSettlementPage"
description: "DefaultEncyclopediaSettlementPage: a public class in TaleWorlds.CampaignSystem, inheriting EncyclopediaPage; 12 exposed members (8 methods, 1 properties, 0 fields). Source: TaleWorlds.CampaignSystem/Encyclopedia/Pages/DefaultEncyclopediaSettlementPage.cs."
---
# DefaultEncyclopediaSettlementPage

**Namespace:** `TaleWorlds.CampaignSystem.Encyclopedia.Pages`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultEncyclopediaSettlementPage : EncyclopediaPage`
**File:** `TaleWorlds.CampaignSystem/Encyclopedia/Pages/DefaultEncyclopediaSettlementPage.cs`

## Overview

DefaultEncyclopediaSettlementPage lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Encyclopedia/Pages/DefaultEncyclopediaSettlementPage.cs. It is a public class, implementing/inheriting EncyclopediaPage; the inheritance chain is DefaultEncyclopediaSettlementPage → EncyclopediaPage. It exposes 12 public/protected members: 8 methods, 1 properties, 1 constructors, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultEncyclopediaSettlementPage is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.Encyclopedia.Pages) the module directory; inheritance chain DefaultEncyclopediaSettlementPage → EncyclopediaPage. The surface is method-led (methods 8/12, properties 1/12), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Encyclopedia/Pages/DefaultEncyclopediaSettlementPage.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DefaultEncyclopediaSettlementPage` | `public DefaultEncyclopediaSettlementPage()` | constructor |
| `IEnumerable` | `protected override IEnumerable<EncyclopediaListItem>InitializeListItems()` | method |
| `IEnumerable` | `protected override IEnumerable<EncyclopediaFilterGroup>InitializeFilterItems()` | method |
| `IEnumerable` | `protected override IEnumerable<EncyclopediaSortController>InitializeSortControllers()` | method |
| `GetViewFullyQualifiedName` | `public override string GetViewFullyQualifiedName()` | method |
| `GetName` | `public override TextObject GetName()` | method |
| `GetDescriptionText` | `public override TextObject GetDescriptionText()` | method |
| `GetStringID` | `public override string GetStringID()` | method |
| `IsValidEncyclopediaItem` | `public override bool IsValidEncyclopediaItem(object o)` | method |
| `EncyclopediaListItemComparerBase` | `public abstract class EncyclopediaListSettlementComparer : EncyclopediaListItemComparerBase` | property |
| `EncyclopediaListItemComparerBase` | `public abstract class EncyclopediaListSettlementComparer : EncyclopediaListItemComparerBase` | nested type |
| `SettlementVisibilityComparerDelegate` | `protected delegate bool SettlementVisibilityComparerDelegate(Settlement s1, Settlement s2, out int comparisonResult)` | nested type |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface EncyclopediaPage](../EncyclopediaPage)
- [same namespace DefaultEncyclopediaClanPage](../DefaultEncyclopediaClanPage)
- [same namespace DefaultEncyclopediaConceptPage](../DefaultEncyclopediaConceptPage)
- [same namespace DefaultEncyclopediaFactionPage](../DefaultEncyclopediaFactionPage)
- [same namespace DefaultEncyclopediaHeroPage](../DefaultEncyclopediaHeroPage)
