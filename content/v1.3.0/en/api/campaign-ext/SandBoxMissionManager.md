---
title: "SandBoxMissionManager"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SandBoxMissionManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SandBoxMissionManager

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public class SandBoxMissionManager : ISandBoxMissionManager`
**Base:** `ISandBoxMissionManager`
**File:** `SandBox/SandBoxMissionManager.cs`

## Overview

`SandBoxMissionManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `SandBoxMissionManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OpenTournamentFightMission
`public IMission OpenTournamentFightMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)`

**Purpose:** Handles logic related to `open tournament fight mission`.

### OpenTournamentHorseRaceMission
`public IMission OpenTournamentHorseRaceMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)`

**Purpose:** Handles logic related to `open tournament horse race mission`.

### OpenTournamentJoustingMission
`public IMission OpenTournamentJoustingMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)`

**Purpose:** Handles logic related to `open tournament jousting mission`.

### OpenTournamentArcheryMission
`public IMission OpenTournamentArcheryMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)`

**Purpose:** Handles logic related to `open tournament archery mission`.

## Usage Example

```csharp
var manager = SandBoxMissionManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)