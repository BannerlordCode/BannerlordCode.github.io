---
title: "MBEquipmentRosterExtensions"
description: "MBEquipmentRosterExtensions: a public class in TaleWorlds.CampaignSystem; 6 exposed members (5 methods, 1 properties, 0 fields). Source: TaleWorlds.CampaignSystem/Extensions/MBEquipmentRosterExtensions.cs."
---
# MBEquipmentRosterExtensions

**Namespace:** `TaleWorlds.CampaignSystem.Extensions`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class MBEquipmentRosterExtensions`
**File:** `TaleWorlds.CampaignSystem/Extensions/MBEquipmentRosterExtensions.cs`

## Overview

MBEquipmentRosterExtensions lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Extensions/MBEquipmentRosterExtensions.cs. It is a public class; the inheritance chain is MBEquipmentRosterExtensions. It exposes 6 public/protected members: 5 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MBEquipmentRosterExtensions is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.Extensions) the module directory; inheritance chain MBEquipmentRosterExtensions. The surface is method-led (methods 5/6, properties 1/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Extensions/MBEquipmentRosterExtensions.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MBReadOnlyList` | `public static MBReadOnlyList<MBEquipmentRoster>All` | property |
| `IEnumerable` | `public static IEnumerable<Equipment>GetCivilianEquipments(this MBEquipmentRoster instance)` | method |
| `IEnumerable` | `public static IEnumerable<Equipment>GetStealthEquipments(this MBEquipmentRoster instance)` | method |
| `IEnumerable` | `public static IEnumerable<Equipment>GetBattleEquipments(this MBEquipmentRoster instance)` | method |
| `GetRandomCivilianEquipment` | `public static Equipment GetRandomCivilianEquipment(this MBEquipmentRoster instance)` | method |
| `GetRandomStealthEquipment` | `public static Equipment GetRandomStealthEquipment(this MBEquipmentRoster instance)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace Attributes](../Attributes)
- [same namespace ItemCategories](../ItemCategories)
- [same namespace ItemObjectExtensions](../ItemObjectExtensions)
- [same namespace Items](../Items)
