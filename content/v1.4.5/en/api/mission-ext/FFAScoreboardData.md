---
title: "FFAScoreboardData"
description: "Auto-generated class reference for FFAScoreboardData."
---
# FFAScoreboardData

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FFAScoreboardData : IScoreboardData`
**Base:** `IScoreboardData`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer/FFAScoreboardData.cs`

## Overview

`FFAScoreboardData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `FFAScoreboardData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetScoreboardHeaders
`public ScoreboardHeader GetScoreboardHeaders()`

**Purpose:** Reads and returns the scoreboard headers value held by the this instance.

```csharp
// Obtain an instance of FFAScoreboardData from the subsystem API first
FFAScoreboardData fFAScoreboardData = ...;
var result = fFAScoreboardData.GetScoreboardHeaders();
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
FFAScoreboardData entry = ...;
```

## See Also

- [Area Index](../)