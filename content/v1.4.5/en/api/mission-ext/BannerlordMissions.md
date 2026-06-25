---
title: "BannerlordMissions"
description: "Auto-generated class reference for BannerlordMissions."
---
# BannerlordMissions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class BannerlordMissions`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/BannerlordMissions.cs`

## Overview

`BannerlordMissions` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateAtmosphereInfoForMission
`public static AtmosphereInfo CreateAtmosphereInfoForMission(string seasonId, int timeOfDay)`

**Purpose:** Constructs a new atmosphere info for mission entity and returns it to the caller.

```csharp
// Static call; no instance required
BannerlordMissions.CreateAtmosphereInfoForMission("example", 0);
```

### OpenCustomBattleMission
`public static Mission OpenCustomBattleMission(string scene, BasicCharacterObject playerCharacter, CustomBattleCombatant playerParty, CustomBattleCombatant enemyParty, bool isPlayerGeneral, BasicCharacterObject playerSideGeneralCharacter, string sceneLevels = "", string seasonString = "", float timeOfDay = 6f)`

**Purpose:** Opens the resource or UI associated with custom battle mission.

```csharp
// Static call; no instance required
BannerlordMissions.OpenCustomBattleMission("example", playerCharacter, playerParty, enemyParty, false, playerSideGeneralCharacter, "example", "example", 0);
```

### OpenSiegeMissionWithDeployment
`public static Mission OpenSiegeMissionWithDeployment(string scene, BasicCharacterObject playerCharacter, CustomBattleCombatant playerParty, CustomBattleCombatant enemyParty, bool isPlayerGeneral, float wallHitPointPercentages, bool hasAnySiegeTower, List<MissionSiegeWeapon> siegeWeaponsOfAttackers, List<MissionSiegeWeapon> siegeWeaponsOfDefenders, bool isPlayerAttacker, int sceneUpgradeLevel = 0, string seasonString = "", bool isSallyOut = false, bool isReliefForceAttack = false, float timeOfDay = 6f)`

**Purpose:** Opens the resource or UI associated with siege mission with deployment.

```csharp
// Static call; no instance required
BannerlordMissions.OpenSiegeMissionWithDeployment("example", playerCharacter, playerParty, enemyParty, false, 0, false, siegeWeaponsOfAttackers, siegeWeaponsOfDefenders, false, 0, "example", false, false, 0);
```

### OpenCustomBattleLordsHallMission
`public static Mission OpenCustomBattleLordsHallMission(string scene, BasicCharacterObject playerCharacter, CustomBattleCombatant playerParty, CustomBattleCombatant enemyParty, BasicCharacterObject playerSideGeneralCharacter, string sceneLevels = "", int sceneUpgradeLevel = 0, string seasonString = "")`

**Purpose:** Opens the resource or UI associated with custom battle lords hall mission.

```csharp
// Static call; no instance required
BannerlordMissions.OpenCustomBattleLordsHallMission("example", playerCharacter, playerParty, enemyParty, playerSideGeneralCharacter, "example", 0, "example");
```

## Usage Example

```csharp
BannerlordMissions.CreateAtmosphereInfoForMission("example", 0);
```

## See Also

- [Area Index](../)