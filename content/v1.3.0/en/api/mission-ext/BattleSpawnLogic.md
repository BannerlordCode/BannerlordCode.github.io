---
title: "BattleSpawnLogic"
description: "Auto-generated class reference for BattleSpawnLogic."
---
# BattleSpawnLogic

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleSpawnLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Source/Missions/BattleSpawnLogic.cs`

## Overview

`BattleSpawnLogic` is a one-shot `MissionLogic` whose only job is to decide *which set of spawn points the battle scene keeps alive*. It is constructed with a single string — the tag of the spawn-point set the player or scenario chose — and holds no other state beyond a done-flag (`BattleSpawnLogic.cs:9`, `BattleSpawnLogic.cs:12`).

The scene ships several overlapping sets of spawn markers, each tagged `spawnpoint_set` (`BattleSpawnLogic.cs:47`). On its first `OnPreMissionTick` this logic finds the entity carrying the selected tag, collects every *other* `spawnpoint_set` entity in the scene, and removes each one (`BattleSpawnLogic.cs:24`, `BattleSpawnLogic.cs:27`, `BattleSpawnLogic.cs:31`). After that it raises `_isScenePrepared` and never does the work again (`BattleSpawnLogic.cs:34`).

The three public tag constants are the vocabulary it expects: `BattleTag = "battle_set"`, `SallyOutTag = "sally_out_set"` and `ReliefForceAttackTag = "relief_force_attack_set"` (`BattleSpawnLogic.cs:38`, `BattleSpawnLogic.cs:41`, `BattleSpawnLogic.cs:44`). It does not validate the string you hand it — it is matched verbatim against scene entity tags.

## Mental Model

The whole lifecycle is one attempt, and the failure mode is quiet rather than loud.

`OnPreMissionTick` returns immediately once `_isScenePrepared` is set (`BattleSpawnLogic.cs:20`), and `_isScenePrepared` is set at the *end* of the method whether or not the lookup succeeded (`BattleSpawnLogic.cs:34`). So if the entity for your tag is not in the scene on that first tick — a streaming scene, a custom mission whose spawn sets are added by another behaviour, a tag typo — the logic marks itself done and does nothing forever after. There is no retry, no warning, and no log. The visible symptom is that all spawn-point sets remain in the scene and the agent spawner picks among them, so your carefully chosen side ends up spawning from the wrong markers.

Read it as "delete everything except mine", not "select mine". The deletion path only runs when the tagged entity was found; when it is not found the whole `if` block is skipped and the other sets are left alone.

The deletion also uses an explicit removal index — `Remove(76)` (`BattleSpawnLogic.cs:31`) — rather than a plain removal. That is the engine's entity-removal index for spawn markers and is not a free choice; changing it is not a supported way to extend this class, because there is nothing to override (the class is not sealed but has no virtual members).

## How to use

**Getting it.** Construct it in the mission behaviour array with the tag of the set you want, usually one of the shipped constants:

```csharp
MissionSpawnSettings settings = new MissionSpawnSettings();
var spawnSelector = new BattleSpawnLogic(BattleSpawnLogic.BattleTag);
mission.AddBehavior(spawnSelector);
```

`BattleSpawnLogic.BattleTag` and the other two constants are `public const`, so they inline at compile time and are safe to use from a subclass.

**Typical use** — make sure your tag actually exists in the scene before the first pre-mission tick, and fail loudly if not:

```csharp
public class SpawnSetGuard : MissionLogic
{
    public override void OnPreMissionTick(float dt)
    {
        BattleSpawnLogic selector = Mission.Current.GetMissionBehavior<BattleSpawnLogic>();
        if (selector == null) return;

        // If your tag were missing, every spawnpoint_set would still be live.
        int surviving = Mission.Current.Scene.FindWeakEntitiesWithTag("spawnpoint_set").Count();
        MBDebug.Print("spawnpoint_set entities still in scene: " + surviving);
    }
}
```

**Typical use** — choosing the relief-force set for a scripted counter-attack:

```csharp
var selector = new BattleSpawnLogic(BattleSpawnLogic.ReliefForceAttackTag);
// The literal is "relief_force_attack_set"; it must match the scene entity tag
// exactly, including underscores.
```

**Most common mistake, and what it costs.** Passing a tag that is not one of the three shipped constants, or one that does not match your scene's entity tag. Nothing throws, no assert fires, and the `_isScenePrepared` flag is set anyway (`BattleSpawnLogic.cs:34`), so the selection silently never happens. The cost is that every spawn-point set stays alive and the spawner chooses among them — reinforcements and initial deployment both come from the wrong positions, which reads as "the AI spawns behind the lines" rather than as a configuration error. Validate the tag against your scene's actual entity tags before constructing the behaviour.

## Key Methods

### OnPreMissionTick
`public override void OnPreMissionTick(float dt)`

**Purpose:** Invoked when the pre mission tick event is raised.

```csharp
// Obtain an instance of BattleSpawnLogic from the subsystem API first
BattleSpawnLogic battleSpawnLogic = ...;
battleSpawnLogic.OnPreMissionTick(0);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<BattleSpawnLogic>();
```

## See Also

- [Area Index](../)
- [MissionLogic](../MissionLogic)
- [SpawnPathData](../SpawnPathData)
- [MissionAgentSpawnLogic](../MissionAgentSpawnLogic)
- [BattleSpawnLogic (中文页面)](../../../../zh/api/mission-ext/BattleSpawnLogic)