---
title: "SandBoxMissionManager"
description: "Auto-generated class reference for SandBoxMissionManager."
---
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

**Purpose:** Opens the resource or UI associated with `tournament fight mission`.

```csharp
// Obtain an instance of SandBoxMissionManager from the subsystem API first
SandBoxMissionManager sandBoxMissionManager = ...;
var result = sandBoxMissionManager.OpenTournamentFightMission("example", tournamentGame, settlement, culture, false);
```

### OpenTournamentHorseRaceMission
`public IMission OpenTournamentHorseRaceMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)`

**Purpose:** Opens the resource or UI associated with `tournament horse race mission`.

```csharp
// Obtain an instance of SandBoxMissionManager from the subsystem API first
SandBoxMissionManager sandBoxMissionManager = ...;
var result = sandBoxMissionManager.OpenTournamentHorseRaceMission("example", tournamentGame, settlement, culture, false);
```

### OpenTournamentJoustingMission
`public IMission OpenTournamentJoustingMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)`

**Purpose:** Opens the resource or UI associated with `tournament jousting mission`.

```csharp
// Obtain an instance of SandBoxMissionManager from the subsystem API first
SandBoxMissionManager sandBoxMissionManager = ...;
var result = sandBoxMissionManager.OpenTournamentJoustingMission("example", tournamentGame, settlement, culture, false);
```

### OpenTournamentArcheryMission
`public IMission OpenTournamentArcheryMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)`

**Purpose:** Opens the resource or UI associated with `tournament archery mission`.

```csharp
// Obtain an instance of SandBoxMissionManager from the subsystem API first
SandBoxMissionManager sandBoxMissionManager = ...;
var result = sandBoxMissionManager.OpenTournamentArcheryMission("example", tournamentGame, settlement, culture, false);
```

## Usage Example

```csharp
var manager = SandBoxMissionManager.Current;
```

## See Also

- [Area Index](../)