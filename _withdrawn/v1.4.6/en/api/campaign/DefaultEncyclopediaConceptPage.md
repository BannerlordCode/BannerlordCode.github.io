---
title: "DefaultEncyclopediaConceptPage"
description: "DefaultEncyclopediaConceptPage: a public class in TaleWorlds.CampaignSystem.Encyclopedia.Pages, inheriting EncyclopediaPage; 9 exposed members (8 methods, 0 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/Encyclopedia/Pages/DefaultEncyclopediaConceptPage.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultEncyclopediaConceptPage

**Namespace:** `TaleWorlds.CampaignSystem.Encyclopedia.Pages`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultEncyclopediaConceptPage : EncyclopediaPage`
**File:** `TaleWorlds.CampaignSystem/Encyclopedia/Pages/DefaultEncyclopediaConceptPage.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

DefaultEncyclopediaConceptPage lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Encyclopedia/Pages/DefaultEncyclopediaConceptPage.cs. It is a public class, implementing/inheriting EncyclopediaPage; the inheritance chain is DefaultEncyclopediaConceptPage → EncyclopediaPage. It exposes 9 public/protected members: 8 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultEncyclopediaConceptPage lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem.Encyclopedia.Pages`, inheritance chain DefaultEncyclopediaConceptPage → EncyclopediaPage. The surface is method-led (methods 8/9, properties 0/9), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Encyclopedia/Pages/DefaultEncyclopediaConceptPage.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `DefaultEncyclopediaConceptPage` | `public DefaultEncyclopediaConceptPage()` | constructor |
| `IEnumerable` | `protected override IEnumerable<EncyclopediaListItem>InitializeListItems()` | method |
| `IEnumerable` | `protected override IEnumerable<EncyclopediaFilterGroup>InitializeFilterItems()` | method |
| `IEnumerable` | `protected override IEnumerable<EncyclopediaSortController>InitializeSortControllers()` | method |
| `GetViewFullyQualifiedName` | `public override string GetViewFullyQualifiedName()` | method |
| `GetName` | `public override TextObject GetName()` | method |
| `GetDescriptionText` | `public override TextObject GetDescriptionText()` | method |
| `GetStringID` | `public override string GetStringID()` | method |
| `IsValidEncyclopediaItem` | `public override bool IsValidEncyclopediaItem(object o)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface EncyclopediaPage](../EncyclopediaPage/)
- [same namespace DefaultEncyclopediaClanPage](../DefaultEncyclopediaClanPage/)
- [same namespace DefaultEncyclopediaFactionPage](../DefaultEncyclopediaFactionPage/)
- [same namespace DefaultEncyclopediaHeroPage](../DefaultEncyclopediaHeroPage/)
- [same namespace DefaultEncyclopediaSettlementPage](../DefaultEncyclopediaSettlementPage/)
