---
title: "PlayerLeaderboardData"
description: "Auto-generated class reference for PlayerLeaderboardData."
---
# PlayerLeaderboardData

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PlayerLeaderboardData`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/PlayerLeaderboardData.cs`

## Overview

`PlayerLeaderboardData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `PlayerLeaderboardData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `PlayerId` | `public PlayerId PlayerId { get; set; }` |
| `RankId` | `public string RankId { get; set; }` |
| `Rating` | `public int Rating { get; set; }` |
| `Name` | `public string Name { get; set; }` |

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
PlayerLeaderboardData entry = ...;
```

## See Also

- [Area Index](../)