---
title: "MBEquipmentRosterExtensions"
description: "MBEquipmentRosterExtensions: a public class in TaleWorlds.CampaignSystem.Extensions; 6 exposed members (5 methods, 1 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/Extensions/MBEquipmentRosterExtensions.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MBEquipmentRosterExtensions

**Namespace:** `TaleWorlds.CampaignSystem.Extensions`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class MBEquipmentRosterExtensions`
**File:** `TaleWorlds.CampaignSystem/Extensions/MBEquipmentRosterExtensions.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

MBEquipmentRosterExtensions lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Extensions/MBEquipmentRosterExtensions.cs. It is a public class; the inheritance chain is MBEquipmentRosterExtensions. It exposes 6 public/protected members: 5 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MBEquipmentRosterExtensions lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem.Extensions`, inheritance chain MBEquipmentRosterExtensions. The surface is method-led (methods 5/6, properties 1/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Extensions/MBEquipmentRosterExtensions.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MBReadOnlyList` | `public static MBReadOnlyList<MBEquipmentRoster>All` | property |
| `IEnumerable` | `public static IEnumerable<Equipment>GetCivilianEquipments(this MBEquipmentRoster instance)` | method |
| `IEnumerable` | `public static IEnumerable<Equipment>GetStealthEquipments(this MBEquipmentRoster instance)` | method |
| `IEnumerable` | `public static IEnumerable<Equipment>GetBattleEquipments(this MBEquipmentRoster instance)` | method |
| `GetRandomCivilianEquipment` | `public static Equipment GetRandomCivilianEquipment(this MBEquipmentRoster instance)` | method |
| `GetRandomStealthEquipment` | `public static Equipment GetRandomStealthEquipment(this MBEquipmentRoster instance)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace Attributes](../Attributes/)
- [same namespace ItemCategories](../ItemCategories/)
- [same namespace ItemObjectExtensions](../ItemObjectExtensions/)
- [same namespace Items](../Items/)
