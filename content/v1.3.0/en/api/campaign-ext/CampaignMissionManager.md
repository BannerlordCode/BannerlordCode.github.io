---
title: "CampaignMissionManager"
description: "Auto-generated class reference for CampaignMissionManager."
---
# CampaignMissionManager

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public class CampaignMissionManager : CampaignMission.ICampaignMissionManager`
**Base:** `CampaignMission.ICampaignMissionManager`
**File:** `SandBox/CampaignMissionManager.cs`

## Overview

`CampaignMissionManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `CampaignMissionManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OpenArenaDuelMission
`public IMission OpenArenaDuelMission(string scene, Location location, CharacterObject duelCharacter, bool requireCivilianEquipment, bool spawnBOthSidesWithHorse, Action<CharacterObject> onDuelEndAction, float customAgentHealth)`

**Purpose:** Opens the resource or UI associated with `arena duel mission`.

```csharp
// Obtain an instance of CampaignMissionManager from the subsystem API first
CampaignMissionManager campaignMissionManager = ...;
var result = campaignMissionManager.OpenArenaDuelMission("example", location, duelCharacter, false, false, onDuelEndAction, 0);
```

### OpenDisguiseMission
`public IMission OpenDisguiseMission(string scene, bool willSetUpContact, string sceneLevels, Location fromLocation)`

**Purpose:** Opens the resource or UI associated with `disguise mission`.

```csharp
// Obtain an instance of CampaignMissionManager from the subsystem API first
CampaignMissionManager campaignMissionManager = ...;
var result = campaignMissionManager.OpenDisguiseMission("example", false, "example", fromLocation);
```

### OpenNavalBattleMission
`public IMission OpenNavalBattleMission(MissionInitializerRecord rec)`

**Purpose:** Opens the resource or UI associated with `naval battle mission`.

```csharp
// Obtain an instance of CampaignMissionManager from the subsystem API first
CampaignMissionManager campaignMissionManager = ...;
var result = campaignMissionManager.OpenNavalBattleMission(rec);
```

### OpenNavalSetPieceBattleMission
`public IMission OpenNavalSetPieceBattleMission(MissionInitializerRecord rec, MBList<IShipOrigin> playerShips, MBList<IShipOrigin> playerAllyShips, MBList<IShipOrigin> enemyShips)`

**Purpose:** Opens the resource or UI associated with `naval set piece battle mission`.

```csharp
// Obtain an instance of CampaignMissionManager from the subsystem API first
CampaignMissionManager campaignMissionManager = ...;
var result = campaignMissionManager.OpenNavalSetPieceBattleMission(rec, playerShips, playerAllyShips, enemyShips);
```

## Usage Example

```csharp
var manager = CampaignMissionManager.Current;
```

## See Also

- [Area Index](../)