---
title: "MultiplayerPracticeMissions"
description: "Auto-generated class reference for MultiplayerPracticeMissions."
---
# MultiplayerPracticeMissions

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MultiplayerPracticeMissions`
**Base:** none
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer/MultiplayerPracticeMissions.cs`

## Overview

`MultiplayerPracticeMissions` lives in `TaleWorlds.MountAndBlade.Multiplayer` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OpenMultiplayerPracticeMission
`public static Mission OpenMultiplayerPracticeMission(string scene, BasicCharacterObject playerCharacter, CustomBattleCombatant playerParty, CustomBattleCombatant enemyParty, bool isPlayerGeneral, BasicCharacterObject playerSideGeneralCharacter, string sceneLevels = "", string seasonString = "", float timeOfDay = 6f)`

**Purpose:** **Purpose:** Opens the resource or UI associated with multiplayer practice mission.

```csharp
// Static call; no instance required
MultiplayerPracticeMissions.OpenMultiplayerPracticeMission("example", playerCharacter, playerParty, enemyParty, false, playerSideGeneralCharacter, "example", "example", 0);
```

## Usage Example

```csharp
MultiplayerPracticeMissions.OpenMultiplayerPracticeMission("example", playerCharacter, playerParty, enemyParty, false, playerSideGeneralCharacter, "example", "example", 0);
```

## See Also

- [Area Index](../)