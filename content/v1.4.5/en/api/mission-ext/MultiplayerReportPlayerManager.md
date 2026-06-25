---
title: "MultiplayerReportPlayerManager"
description: "Auto-generated class reference for MultiplayerReportPlayerManager."
---
# MultiplayerReportPlayerManager

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MultiplayerReportPlayerManager`
**Base:** none
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer/MultiplayerReportPlayerManager.cs`

## Overview

`MultiplayerReportPlayerManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `MultiplayerReportPlayerManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### RequestReportPlayer
`public static void RequestReportPlayer(string gameId, PlayerId playerId, string playerName, bool isRequestedFromMission)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MultiplayerReportPlayerManager.RequestReportPlayer("example", playerId, "example", false);
```

### OnPlayerReported
`public static void OnPlayerReported(PlayerId playerId)`

**Purpose:** Invoked when the `player reported` event is raised.

```csharp
// Static call; no instance required
MultiplayerReportPlayerManager.OnPlayerReported(playerId);
```

### IsPlayerReportedOverLimit
`public static bool IsPlayerReportedOverLimit(PlayerId player)`

**Purpose:** Determines whether the current object is in the `player reported over limit` state or condition.

```csharp
// Static call; no instance required
MultiplayerReportPlayerManager.IsPlayerReportedOverLimit(player);
```

## Usage Example

```csharp
var manager = MultiplayerReportPlayerManager.Current;
```

## See Also

- [Area Index](../)