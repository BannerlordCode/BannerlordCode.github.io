---
title: "MatchmakingQueueRegionStats"
description: "MatchmakingQueueRegionStats: a public class in TaleWorlds.MountAndBlade.Diamond; 11 exposed members (4 methods, 6 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Diamond/MatchmakingQueueRegionStats.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MatchmakingQueueRegionStats

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public class MatchmakingQueueRegionStats`
**File:** `TaleWorlds.MountAndBlade.Diamond/MatchmakingQueueRegionStats.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MatchmakingQueueRegionStats lives in the TaleWorlds.MountAndBlade.Diamond module, source file TaleWorlds.MountAndBlade.Diamond/MatchmakingQueueRegionStats.cs. It is a public class; the inheritance chain is MatchmakingQueueRegionStats. It exposes 11 public/protected members: 4 methods, 6 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MatchmakingQueueRegionStats lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Diamond`, inheritance chain MatchmakingQueueRegionStats. The surface is property-led (properties 6/11, methods 4/11), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Diamond/MatchmakingQueueRegionStats.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Region` | `public string Region` | property |
| `TotalCount` | `public int TotalCount` | property |
| `MaxWaitTime` | `public int MaxWaitTime` | property |
| `MinWaitTime` | `public int MinWaitTime` | property |
| `MedianWaitTime` | `public int MedianWaitTime` | property |
| `AverageWaitTime` | `public int AverageWaitTime` | property |
| `MatchmakingQueueRegionStats` | `public MatchmakingQueueRegionStats(string region)` | constructor |
| `GetQueueCountObjectOf` | `public MatchmakingQueueGameTypeStats GetQueueCountObjectOf(string[]gameTypes)` | method |
| `AddStats` | `public void AddStats(MatchmakingQueueGameTypeStats matchmakingQueueGameTypeStats)` | method |
| `GetQueueCountOf` | `public int GetQueueCountOf(string[]gameTypes)` | method |
| `SetWaitTimeStats` | `public void SetWaitTimeStats(int averageWaitTime, int maxWaitTime, int minWaitTime, int medianWaitTime)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace Announcement](../Announcement/)
- [same namespace AnnouncementType](../AnnouncementType/)
- [same namespace AnotherPlayerData](../AnotherPlayerData/)
- [same namespace AnotherPlayerState](../AnotherPlayerState/)
