---
title: "EncyclopediaManager"
description: "EncyclopediaManager: a public class in TaleWorlds.CampaignSystem.Encyclopedia; 11 exposed members (7 methods, 1 properties, 3 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/Encyclopedia/EncyclopediaManager.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# EncyclopediaManager

**Namespace:** `TaleWorlds.CampaignSystem.Encyclopedia`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class EncyclopediaManager`
**File:** `TaleWorlds.CampaignSystem/Encyclopedia/EncyclopediaManager.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

EncyclopediaManager lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Encyclopedia/EncyclopediaManager.cs. It is a public class; the inheritance chain is EncyclopediaManager. It exposes 11 public/protected members: 7 methods, 1 properties, 3 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EncyclopediaManager lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem.Encyclopedia`, inheritance chain EncyclopediaManager. The surface is method-led (methods 7/11, properties 1/11), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Encyclopedia/EncyclopediaManager.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ViewDataTracker` | `public IViewDataTracker ViewDataTracker` | property |
| `CreateEncyclopediaPages` | `public void CreateEncyclopediaPages()` | method |
| `IEnumerable` | `public IEnumerable<EncyclopediaPage>GetEncyclopediaPages()` | method |
| `GetPageOf` | `public EncyclopediaPage GetPageOf(Type type)` | method |
| `GetIdentifier` | `public string GetIdentifier(Type type)` | method |
| `GoToLink` | `public void GoToLink(string pageType, string stringID)` | method |
| `GoToLink` | `public void GoToLink(string link)` | method |
| `SetLinkCallback` | `public void SetLinkCallback(Action<string, object>ExecuteLink)` | method |
| `HOME_ID` | `public const string HOME_ID` | field |
| `LIST_PAGE_ID` | `public const string LIST_PAGE_ID` | field |
| `LAST_PAGE_ID` | `public const string LAST_PAGE_ID` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace EncyclopediaFilterGroup](../EncyclopediaFilterGroup/)
- [same namespace EncyclopediaFilterItem](../EncyclopediaFilterItem/)
- [same namespace EncyclopediaListItem](../EncyclopediaListItem/)
- [same namespace EncyclopediaListItemComparerBase](../EncyclopediaListItemComparerBase/)
