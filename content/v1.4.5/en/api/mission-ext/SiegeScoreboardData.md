---
title: "SiegeScoreboardData"
description: "Auto-generated class reference for SiegeScoreboardData."
---
# SiegeScoreboardData

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SiegeScoreboardData : IScoreboardData`
**Base:** `IScoreboardData`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer/SiegeScoreboardData.cs`

## Overview

`SiegeScoreboardData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `SiegeScoreboardData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetScoreboardHeaders
`public ScoreboardHeader GetScoreboardHeaders()`

**Purpose:** Reads and returns the scoreboard headers value held by the this instance.

```csharp
// Obtain an instance of SiegeScoreboardData from the subsystem API first
SiegeScoreboardData siegeScoreboardData = ...;
var result = siegeScoreboardData.GetScoreboardHeaders();
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
SiegeScoreboardData entry = ...;
```

## See Also

- [Area Index](../)