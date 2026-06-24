<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerReportPlayerManager`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerReportPlayerManager

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MultiplayerReportPlayerManager`
**Base:** none
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer/MultiplayerReportPlayerManager.cs`

## Overview

`MultiplayerReportPlayerManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `MultiplayerReportPlayerManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### RequestReportPlayer
`public static void RequestReportPlayer(string gameId, PlayerId playerId, string playerName, bool isRequestedFromMission)`

**Purpose:** Handles logic related to `request report player`.

### OnPlayerReported
`public static void OnPlayerReported(PlayerId playerId)`

**Purpose:** Called when the `player reported` event is raised.

### IsPlayerReportedOverLimit
`public static bool IsPlayerReportedOverLimit(PlayerId player)`

**Purpose:** Handles logic related to `is player reported over limit`.

## Usage Example

```csharp
var manager = MultiplayerReportPlayerManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)