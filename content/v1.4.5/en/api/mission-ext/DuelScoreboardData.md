---
title: "DuelScoreboardData"
description: "Auto-generated class reference for DuelScoreboardData."
---
# DuelScoreboardData

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DuelScoreboardData : IScoreboardData`
**Base:** `IScoreboardData`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer/DuelScoreboardData.cs`

## Overview

`DuelScoreboardData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `DuelScoreboardData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetScoreboardHeaders
`public ScoreboardHeader GetScoreboardHeaders()`

**Purpose:** Reads and returns the scoreboard headers value held by the this instance.

```csharp
// Obtain an instance of DuelScoreboardData from the subsystem API first
DuelScoreboardData duelScoreboardData = ...;
var result = duelScoreboardData.GetScoreboardHeaders();
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
DuelScoreboardData entry = ...;
```

## See Also

- [Area Index](../)