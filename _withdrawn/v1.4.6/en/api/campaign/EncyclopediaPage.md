---
title: "EncyclopediaPage"
description: "EncyclopediaPage: a public class in TaleWorlds.CampaignSystem.Encyclopedia; 20 exposed members (17 methods, 2 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/Encyclopedia/EncyclopediaPage.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# EncyclopediaPage

**Namespace:** `TaleWorlds.CampaignSystem.Encyclopedia`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class EncyclopediaPage`
**File:** `TaleWorlds.CampaignSystem/Encyclopedia/EncyclopediaPage.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

EncyclopediaPage lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Encyclopedia/EncyclopediaPage.cs. It is a public class (abstract); the inheritance chain is EncyclopediaPage. It exposes 20 public/protected members: 17 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EncyclopediaPage lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem.Encyclopedia`, inheritance chain EncyclopediaPage. The surface is method-led (methods 17/20, properties 2/20), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Encyclopedia/EncyclopediaPage.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IEnumerable` | `protected abstract IEnumerable<EncyclopediaListItem>InitializeListItems();` | method |
| `IEnumerable` | `protected abstract IEnumerable<EncyclopediaFilterGroup>InitializeFilterItems();` | method |
| `IEnumerable` | `protected abstract IEnumerable<EncyclopediaSortController>InitializeSortControllers();` | method |
| `HomePageOrderIndex` | `public int HomePageOrderIndex` | property |
| `Parent` | `public EncyclopediaPage Parent` | property |
| `EncyclopediaPage` | `public EncyclopediaPage()` | constructor |
| `IsRelevant` | `public virtual bool IsRelevant()` | method |
| `HasIdentifierType` | `public bool HasIdentifierType(Type identifierType)` | method |
| `GetIdentifier` | `public string GetIdentifier(Type identifierType)` | method |
| `string[]GetIdentifierNames` | `public string[]GetIdentifierNames()` | method |
| `IsFiltered` | `public bool IsFiltered(object o)` | method |
| `GetViewFullyQualifiedName` | `public virtual string GetViewFullyQualifiedName()` | method |
| `GetStringID` | `public virtual string GetStringID()` | method |
| `GetName` | `public virtual TextObject GetName()` | method |
| `GetObject` | `public virtual MBObjectBase GetObject(string typeName, string stringID)` | method |
| `IsValidEncyclopediaItem` | `public virtual bool IsValidEncyclopediaItem(object o)` | method |
| `GetDescriptionText` | `public virtual TextObject GetDescriptionText()` | method |
| `IEnumerable` | `public IEnumerable<EncyclopediaListItem>GetListItems()` | method |
| `IEnumerable` | `public IEnumerable<EncyclopediaFilterGroup>GetFilterItems()` | method |
| `IEnumerable` | `public IEnumerable<EncyclopediaSortController>GetSortControllers()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace EncyclopediaFilterGroup](../EncyclopediaFilterGroup/)
- [same namespace EncyclopediaFilterItem](../EncyclopediaFilterItem/)
- [same namespace EncyclopediaListItem](../EncyclopediaListItem/)
- [same namespace EncyclopediaListItemComparerBase](../EncyclopediaListItemComparerBase/)
