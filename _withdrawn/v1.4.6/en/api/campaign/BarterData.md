---
title: "BarterData"
description: "BarterData: a public class in TaleWorlds.CampaignSystem.BarterSystem; 10 exposed members (6 methods, 3 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/BarterSystem/BarterData.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BarterData

**Namespace:** `TaleWorlds.CampaignSystem.BarterSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class BarterData`
**File:** `TaleWorlds.CampaignSystem/BarterSystem/BarterData.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

BarterData lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/BarterSystem/BarterData.cs. It is a public class; the inheritance chain is BarterData. It exposes 10 public/protected members: 6 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BarterData lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem.BarterSystem`, inheritance chain BarterData. The surface is method-led (methods 6/10, properties 3/10), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/BarterSystem/BarterData.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OffererMapFaction` | `public IFaction OffererMapFaction` | property |
| `OtherMapFaction` | `public IFaction OtherMapFaction` | property |
| `IsAiBarter` | `public bool IsAiBarter` | property |
| `BarterData` | `public BarterData(Hero offerer, Hero other, PartyBase offererParty, PartyBase otherParty, BarterManager.BarterContextInitializer contextInitializer = null, int persuasionCostReduction = 0, bool isAiBarter = false)` | constructor |
| `AddBarterable` | `public void AddBarterable<T>(Barterable barterable, bool isContextDependent = false)` | method |
| `AddBarterGroup` | `public void AddBarterGroup(BarterGroup barterGroup)` | method |
| `List` | `public List<BarterGroup>GetBarterGroups()` | method |
| `List` | `public List<Barterable>GetBarterables()` | method |
| `GetBarterGroup` | `public BarterGroup GetBarterGroup<T>()` | method |
| `List` | `public List<Barterable>GetOfferedBarterables()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace BarterGroup](../BarterGroup/)
- [same namespace BarterManager](../BarterManager/)
- [same namespace BarterResult](../BarterResult/)
- [same namespace DefaultsBarterGroup](../DefaultsBarterGroup/)
