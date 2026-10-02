---
title: "BadgeDataEntry"
description: "BadgeDataEntry: a public class in TaleWorlds.MountAndBlade.Diamond; 6 exposed members (2 methods, 4 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Diamond/BadgeDataEntry.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BadgeDataEntry

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public class BadgeDataEntry`
**File:** `TaleWorlds.MountAndBlade.Diamond/BadgeDataEntry.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

BadgeDataEntry lives in the TaleWorlds.MountAndBlade.Diamond module, source file TaleWorlds.MountAndBlade.Diamond/BadgeDataEntry.cs. It is a public class; the inheritance chain is BadgeDataEntry. It exposes 6 public/protected members: 2 methods, 4 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BadgeDataEntry lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Diamond`, inheritance chain BadgeDataEntry. The surface is property-led (properties 4/6, methods 2/6), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Diamond/BadgeDataEntry.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `PlayerId` | `public PlayerId PlayerId` | property |
| `BadgeId` | `public string BadgeId` | property |
| `ConditionId` | `public string ConditionId` | property |
| `Count` | `public int Count` | property |
| `int>ToDictionary` | `public static Dictionary<ValueTuple<PlayerId, string, string>, int>ToDictionary(List<BadgeDataEntry>entries)` | method |
| `List` | `public static List<BadgeDataEntry>ToList(Dictionary<ValueTuple<PlayerId, string, string>, int>dictionary)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace Announcement](../Announcement/)
- [same namespace AnnouncementType](../AnnouncementType/)
- [same namespace AnotherPlayerData](../AnotherPlayerData/)
- [same namespace AnotherPlayerState](../AnotherPlayerState/)
