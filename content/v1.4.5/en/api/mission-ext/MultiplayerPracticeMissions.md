---
title: "MultiplayerPracticeMissions"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerPracticeMissions`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerPracticeMissions

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MultiplayerPracticeMissions`
**Area:** mission-ext

## Overview

`MultiplayerPracticeMissions` lives in `TaleWorlds.MountAndBlade.Multiplayer`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OpenMultiplayerPracticeMission
`public static Mission OpenMultiplayerPracticeMission(string scene, BasicCharacterObject playerCharacter, CustomBattleCombatant playerParty, CustomBattleCombatant enemyParty, bool isPlayerGeneral, BasicCharacterObject playerSideGeneralCharacter, string sceneLevels = "", string seasonString = "", float timeOfDay = 6f)`

**Purpose:** Handles logic related to `open multiplayer practice mission`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
MultiplayerPracticeMissions.OpenMultiplayerPracticeMission("example", playerCharacter, playerParty, enemyParty, false, playerSideGeneralCharacter, "example", "example", 0);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
