---
title: "MultiplayerBattleColors"
description: "MultiplayerBattleColors — struct in TaleWorlds.MountAndBlade.Missions.Multiplayer. 6 public members (1 static)."
---

<!-- v147-skeleton -->
# MultiplayerBattleColors

**Namespace:** `TaleWorlds.MountAndBlade.Missions.Multiplayer`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public readonly struct MultiplayerBattleColors`  
**Source:** `TaleWorlds.MountAndBlade/Missions/Multiplayer/MultiplayerBattleColors.cs`

## Overview

`MultiplayerBattleColors` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `MultiplayerBattleColors`.
- **Static entry points** (1): `CreateWith`.
- **Instance members** (2): `GetPeerColors`, `MultiplayerCultureColorInfo`.
- **Data and constants** (2): `AttackerColors`, `DefenderColors`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CreateWith` | method (static) | Static entry point. Takes 2 arguments: `BasicCultureObject attackerCulture`, `BasicCultureObject defenderCulture`. Returns `MultiplayerBattleColors`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `GetPeerColors` | method | Instance entry point. Takes 1 argument: `MissionPeer peer`. Returns `MultiplayerBattleColors.MultiplayerCultureColorInfo`. Read path: prefer it over reaching for the backing store. |
| `MultiplayerCultureColorInfo` | property | Instance entry point `struct` property. Read it for current state; a declared setter writes that state in place. |
| `MultiplayerBattleColors` | ctor | Instance entry point. Takes 2 arguments: `MultiplayerBattleColors.MultiplayerCultureColorInfo attackerColors`, `MultiplayerBattleColors.MultiplayerCultureColorInfo defenderColors`. Returns ``. |
| `AttackerColors` | field | Instance entry point `MultiplayerBattleColors.MultiplayerCultureColorInfo` field — direct storage with no validation or notification. |
| `DefenderColors` | field | Instance entry point `MultiplayerBattleColors.MultiplayerCultureColorInfo` field — direct storage with no validation or notification. |

- Constructed as `public MultiplayerBattleColors(MultiplayerBattleColors.MultiplayerCultureColorInfo attackerColors, MultiplayerBattleColors.MultiplayerCultureColorInfo defenderColors)`.

## Usage Example

```csharp
var data = new MultiplayerBattleColors
{
    AttackerColors = default,
    DefenderColors = default,
    MultiplayerCultureColorInfo = default,
};
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- The declaration in `TaleWorlds.MountAndBlade/Missions/Multiplayer/MultiplayerBattleColors.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/mission-ext/](../) — the other types in this bucket.
