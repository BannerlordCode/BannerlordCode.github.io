---
title: "AgentMovementMode"
description: "The agent movement-medium byte: two unrelated groups packed into one byte. The low two bits are a mutually-exclusive Land/WaterSurface/WaterDiving field, and bits 3 and 4 are two independent PhysicsCheck and NoPhysics switches. Always mask before comparing, or HasAnyFlag(Land) reports true for a diving unit."
---

# AgentMovementMode

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public enum AgentMovementMode : byte`
**Base:** `byte`
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/AgentMovementMode.cs`

## Overview

`AgentMovementMode` is the **packed byte** describing what an agent is standing on and whether it participates in physics simulation. It is only eight bits wide (a `byte`), and it packs two groups of completely unrelated semantics: the low two bits are a **three-way mutually-exclusive mode** (`Land` / `WaterSurface` / `WaterDiving`), while bit 3 (`PhysicsCheck`) and bit 4 (`NoPhysics`) are **two independent switches**. The byte is owned by native (`TaleWorlds.MountAndBlade/Properties/AssemblyInfo.cs:12` carries `DefineAsEngineStruct(..., true, "amm", null)` — note the second argument is **`true`**, i.e. this *is* a flag set), and managed code reads it through `Agent.MovementMode`.

The role it plays is **the single source of truth for movement medium**. Every battle-logic question of the form "can this unit be anchored to its formation", "is it in the water", "does it need a physics check" runs through it. It is orthogonal to [AgentState](../AgentState) (alive or not) and [AgentControllerType](../AgentControllerType) (who is operating it) — three independent axes.

## Mental Model

Of the six types on this page, this is **the easiest one to get wrong**, because its declaration (it carries `[Flags]`) disagrees with its semantics (a masked field plus two independent bits). Write the byte layout out; that is the only reliable way to hold it in your head:

```
bit:  7 6 5 4 3 2 1 0
      0 0 0 N P M M
                  └─ low 2 bits = the mode field (MovementModeMask = 3)
                    Land = 1, WaterSurface = 2, WaterDiving = 3
              └─────┴─ bit 3 = PhysicsCheck (4)
        └─────────── = bit 4 = NoPhysics (8)
```

**The low two bits are a "pick one of three", not bits that can coexist.** `Land` (1), `WaterSurface` (2), and `WaterDiving` (3) happen to be bit patterns, but they are mutually exclusive: `WaterDiving` is `11` in binary, so it contains both `Land`'s `01` and `WaterSurface`'s `10`. The correct test for "this unit is on land" is therefore not `mode.HasFlag(Land)` but `(mode & MovementModeMask) == Land`. The source offers two equivalent spellings: the `Agent.IsOnWater` family writes `(MovementMode & AgentMovementMode.WaterDiving) == AgentMovementMode.Land` (`Agent.cs:3316`), using the value-3 member `WaterDiving` *as* the mask (it is numerically identical to `MovementModeMask`), while `IsInWater` (`Agent.cs:3319-3326`) masks first and then compares. **`MovementModeMask` exists for exactly one purpose: reminding you that you must mask.**

Three conclusions follow, and they are the ones to memorise. First, **`HasAnyFlag(Land)` returns true while diving — a real trap.** `WaterDiving` (3) has its bit 0 set, so `HasAnyFlag` is true for it. The repository contains exactly that mistake: `Agent.cs:2660` reads `if (!WalkMode || !MovementMode.HasAnyFlag(AgentFlag.Land))`, so **copying that line gives you "a diving unit is treated as being on land"**. It is a known blemish in the official code (the negation makes the practical impact small), but it is enough to prove the pattern is unreliable. Second, **`MovementMode` has a getter and no setter.** `Agent.cs:682` is `public AgentMovementMode MovementMode => AgentHelper.GetAgentMovementMode(_movementModePointer);` — an expression-bodied property with **no setter**, and there is no managed `SetAgentMovementMode` anywhere in the tree. You can only read it; changing medium means changing terrain, buoyancy, or mission settings. Third, **`PhysicsCheck` and `NoPhysics` live outside the mode field, above the mask.** Consequently `(mode & MovementModeMask)` strips them completely, which is precisely the behaviour you want: "is it in water" should not be perturbed by a physics toggle. The converse is that comparing the whole byte (`mode == AgentMovementMode.Land`) is **always wrong** — turn on `NoPhysics` and the value becomes 9, producing a false negative on a unit that is standing on land.

## Key Members

| Member | Signature | What this member is for |
| --- | --- | --- |
| `None` | `None = 0` | Mode field 0, meaning "on no known medium". Note it is **not** among the three legal mode values under `MovementModeMask` (1/2/3), so a masked result of 0 is a possible state that needs its own handling. |
| `Land` | `Land = 1` (`0b01`) | On land. The correct test is `(mode & AgentMovementMode.MovementModeMask) == AgentMovementMode.Land` — which is exactly how the `IsOnWater` family at `Agent.cs:3316` is written. Using `== Land` or `HasFlag(Land)` gives the wrong answer whenever `NoPhysics` is also set. |
| `WaterSurface` | `WaterSurface = 2` (`0b10`) | Floating on the surface. `Agent.IsInWater()` (`Agent.cs:3319-3326`) folds this together with `WaterDiving` into "is in water", because for battle logic the two behave almost identically. |
| `WaterDiving` | `WaterDiving = 3` (`0b11`) | Underwater. **Its dual identity is the biggest trap source on this page**: it is both a legal mode value and, numerically, the mask `MovementModeMask`, so `Agent.cs:3316/3321/2055` all use it *as* the mask. Read as a mode value, its bit 0 makes `HasAnyFlag(Land)` wrongly true. |
| `MovementModeMask` | `MovementModeMask = 3` (`0b11`) | **The mask constant — low two bits, all set.** Its single reason for existing is to lift the mode field out from under `PhysicsCheck` / `NoPhysics`. Every "which medium is this unit on" test should read `(mode & MovementModeMask) == X`. |
| `PhysicsCheck` | `PhysicsCheck = 4` (`0b100`) | Bit 3: whether a physics check is performed. Semantically independent of the mode field and stripped by `MovementModeMask`. The exact meaning lives on the native side; managed code only reads it. |
| `NoPhysics` | `NoPhysics = 8` (`0b1000`) | Bit 4: physics simulation disabled. Also outside the mask. **It is the canonical source of "whole-byte equality fails"**: a unit on land with physics off has the value `Land | NoPhysics` = 9, which does not equal `Land`. |
| (assembly attribute) `DefineAsEngineStruct` | `[assembly: DefineAsEngineStruct(typeof(AgentMovementMode), "Agent_movement_modes", true, "amm", null)]`, at `TaleWorlds.MountAndBlade/Properties/AssemblyInfo.cs:12` | Binds it to the native `Agent_movement_modes` struct. **The second argument `true` explicitly marks it as a flag set**, and `"amm"` is its debugger abbreviation. Unlike the other enums in this bucket, that `true` is meaningful — it is why the compiler permits `|`. But it does **not** change the fact that the low two bits are a mutually-exclusive field. |

## Real Example

The safe way to read it: mask out the mode field, then compare by equality (mirroring `Agent.cs:3316-3326`):

```csharp
public static class MediumClassifier
{
    public static bool IsOnLand(AgentMovementMode mode)
    {
        // Land is 1, but WaterDiving is 3 and has the Land bit set, so a bare
        // HasAnyFlag(Land) would report true for a diving unit. Mask first.
        return (mode & AgentMovementMode.MovementModeMask) == AgentMovementMode.Land;
    }

    public static bool IsWet(AgentMovementMode mode)
    {
        AgentMovementMode medium = mode & AgentMovementMode.MovementModeMask;
        return medium == AgentMovementMode.WaterSurface
            || medium == AgentMovementMode.WaterDiving;
    }

    public static bool HasPhysics(AgentMovementMode mode)
    {
        // PhysicsCheck and NoPhysics sit outside MovementModeMask, so they survive
        // the mask and can be tested on the full value.
        return mode.HasAnyFlag(AgentMovementMode.PhysicsCheck)
            && !mode.HasAnyFlag(AgentMovementMode.NoPhysics);
    }
}
```

Reading a unit's current mode inside a mission, alongside the predicates the engine already provides:

```csharp
Agent unit = Mission.Current.MainAgent;
if (unit == null)
{
    Debug.Print("no main agent", 0);
    return;
}

AgentMovementMode mode = unit.MovementMode;
Debug.Print("medium masked = " + (mode & AgentMovementMode.MovementModeMask), 0);
Debug.Print("raw byte      = " + (byte)mode, 0);

// The engine already wraps the common cases -- use these when you do not need
// the raw byte.
Debug.Print("IsOnWater path / on land = " + unit.IsOnLand(), 0);
Debug.Print("IsInWater = " + unit.IsInWater(), 0);
Debug.Print("IsAbleToUseMachine = " + unit.IsAbleToUseMachine(), 0);
```

Demonstrating why `==` cannot be used — the most practically useful block on this page:

```csharp
AgentMovementMode plainLand = AgentMovementMode.Land;                       // 1
AgentMovementMode landNoPhysics = AgentMovementMode.Land
    | AgentMovementMode.NoPhysics;                                          // 9

Debug.Print("plain == Land      : " + (plainLand == AgentMovementMode.Land), 0);
Debug.Print("noPhysics == Land  : " + (landNoPhysics == AgentMovementMode.Land), 0);

// Both are on land, but only the masked form says so for both.
Debug.Print("masked plain       : "
    + ((plainLand & AgentMovementMode.MovementModeMask) == AgentMovementMode.Land), 0);
Debug.Print("masked noPhysics   : "
    + ((landNoPhysics & AgentMovementMode.MovementModeMask) == AgentMovementMode.Land), 0);

// And here is the trap: HasAnyFlag(Land) is true even for a diving unit,
// because WaterDiving == 3 has the Land bit set.
Debug.Print("diving HasAnyFlag(Land) : "
    + AgentMovementMode.WaterDiving.HasAnyFlag(AgentMovementMode.Land), 0);
```

## Risks and Boundaries

- **`HasAnyFlag(Land)` is true while diving.** `WaterDiving` (3) contains `Land`'s low bit. `Agent.cs:2660` in the repository writes exactly that (`!MovementMode.HasAnyFlag(AgentMovementMode.Land)`) — **do not copy it.**
- **Whole-byte equality (`== Land`) yields a false negative when `NoPhysics` is set.** The value 9 (`Land | NoPhysics`) is not equal to `Land`, even though the unit is plainly on land.
- **It is one byte and everything shares it.** `byte` means bits 5 through 8 have no members assigned. **Never invent high bits** — native only understands the low five; a managed-only high bit produces a value the engine cannot interpret.
- **Getter only, no setter.** `Agent.cs:682` is an expression-bodied property reading `AgentHelper.GetAgentMovementMode(_movementModePointer)`. There is no managed write path in the tree. To change the medium you must change terrain, buoyancy, or mission setup — you cannot assign it.
- **`None` (0) is not a legal mode value.** A masked result of 0 means the engine has not finished initialising the unit; do not treat it as "not in water", or you will read "not yet initialised" as "safe".
- **`MovementModeMask` and `WaterDiving` share the value 3.** Official code uses both as the mask (`Agent.cs:3316` uses `WaterDiving`, while `MovementModeMask` is the same-valued named constant). **Semantically you should use `MovementModeMask`** — it reads better and it is the one that stays correct if the value of `WaterDiving` ever changes.
- **It is fully orthogonal to [AgentState](../AgentState) and [AgentControllerType](../AgentControllerType).** All three enums coexist and do not influence each other; never infer one from another.
- **`HasAnyFlag` is TaleWorlds' extension method.** For a `[Flags]` enum it computes "bitwise-and, non-zero" rather than going through `Enum.HasFlag`, so it avoids boxing.

## Cross-Version Notes

`AgentMovementMode.cs` is 15 lines with 7 members in 1.4.5, in that version's original-source form; the 1.3.x / 1.4.6 counterparts are decompiled output and noticeably longer. **Three things are worth checking when migrating across versions.** Whether the second argument of `DefineAsEngineStruct` is still `true` (if it becomes `false`, native has stopped treating this as a flag set and every conclusion on this page about masking and bit operations must be rewritten). Whether `MovementModeMask` is still 3 — it is the anchor for the whole "low two bits are a mutually-exclusive field" convention, and a change to 4 or anything else means the mode field's width changed. And whether any bit was added beyond `PhysicsCheck` / `NoPhysics`. Separately, note that `Agent.cs:2660`'s incorrect `HasAnyFlag(Land)` is *existing official code* — if that line disappears in a later version, do not assume it was a fix; it may just be a refactor elsewhere.

## Dependencies

- Definition source: `TaleWorlds.MountAndBlade/Properties/AssemblyInfo.cs:12`'s `DefineAsEngineStruct` (second argument `true` = flag set)
- Sole read entry point: [Agent](../../mission/Agent)'s `MovementMode` property (`Agent.cs:682`) — getter-only, backed by `AgentHelper.GetAgentMovementMode(_movementModePointer)`
- Ready-made semantic wrappers: `Agent.IsOnLand()` (`Agent.cs:3316`), `Agent.IsInWater()` (`:3319`), `Agent.IsAbleToUseMachine()` (`:3330`) — prefer these over masking by hand
- Tactics and teleporting: `Agent.GetBaseFormationFrame` (`Agent.cs:2055`) only anchors to the formation when "on land, or `Mission.IsTeleportingAgents`"
- Interaction distance: the code around `Agent.cs:2660` uses `MovementMode` to pick a player-interaction distance tier (and its `HasAnyFlag` usage there is wrong — see Risks)
- Bitwise helper: `HasAnyFlag`, the `TaleWorlds.Library` enum extension, which differs from `Enum.HasFlag`
- Orthogonal enums: [AgentState](../AgentState) (life state), [AgentControllerType](../AgentControllerType) (control ownership)
- Bucket index: [core-extra API section](../)