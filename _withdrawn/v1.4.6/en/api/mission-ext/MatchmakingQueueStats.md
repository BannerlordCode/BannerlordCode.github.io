---
title: "MatchmakingQueueStats"
description: "MatchmakingQueueStats: a public class in TaleWorlds.MountAndBlade.Diamond; 8 exposed members (4 methods, 3 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Diamond/MatchmakingQueueStats.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MatchmakingQueueStats

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public class MatchmakingQueueStats`
**File:** `TaleWorlds.MountAndBlade.Diamond/MatchmakingQueueStats.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MatchmakingQueueStats lives in the TaleWorlds.MountAndBlade.Diamond module, source file TaleWorlds.MountAndBlade.Diamond/MatchmakingQueueStats.cs. It is a public class; the inheritance chain is MatchmakingQueueStats. It exposes 8 public/protected members: 4 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MatchmakingQueueStats lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Diamond`, inheritance chain MatchmakingQueueStats. The surface is method-led (methods 4/8, properties 3/8), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Diamond/MatchmakingQueueStats.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Empty` | `public static MatchmakingQueueStats Empty` | property |
| `TotalCount` | `public int TotalCount` | property |
| `AverageWaitTime` | `public int AverageWaitTime` | property |
| `MatchmakingQueueStats` | `public MatchmakingQueueStats()` | constructor |
| `AddRegionStats` | `public void AddRegionStats(MatchmakingQueueRegionStats matchmakingQueueRegionStats)` | method |
| `GetRegionStats` | `public MatchmakingQueueRegionStats GetRegionStats(string region)` | method |
| `GetQueueCountOf` | `public int GetQueueCountOf(string region, string[]gameTypes)` | method |
| `string[]GetRegionNames` | `public string[]GetRegionNames()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace Announcement](../Announcement/)
- [same namespace AnnouncementType](../AnnouncementType/)
- [same namespace AnotherPlayerData](../AnotherPlayerData/)
- [same namespace AnotherPlayerState](../AnotherPlayerState/)
