---
title: "CombatLogData"
description: "Auto-generated class reference for CombatLogData."
---
# CombatLogData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct CombatLogData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/CombatLogData.cs`

## Overview

`CombatLogData` is the `struct` the mission fills in as a blow lands, so the combat log can later describe
what happened. `Mission.RegisterBlow` takes it as a `ref CombatLogData`
(`Mission.cs:5284`) and `Mission.OnEntityHit` likewise (`Mission.cs:1155`) — the engine writes into your
instance rather than returning a fresh one.

Its shape is unusual: about half the members are `public readonly` fields set once by a **16-parameter
public constructor** (`CombatLogData.cs:270`), and the rest are ordinary mutable public fields — damage
numbers, `BodyPartHit`, `HitSpeed`, `Distance`, and a family of `Is*` flags (`IsRangedAttack`,
`IsFriendlyFire`, `IsFatalDamage`, `IsSneakAttack`, `CrushedThrough`, `Chamber`). Six more booleans are
`private` and only ever read inside the struct: `IsValidForPlayer`, `IsImportant`, `IsAttackerPlayer`,
`IsVictimPlayer`, `IsAttackerMount`, `IsVictimMount` (`CombatLogData.cs:15` … `CombatLogData.cs:73`).

Two computed members sit on top. `TotalDamage` is `InflictedDamage + ModifiedDamage`
(`CombatLogData.cs:87`) — note it does *not* subtract `AbsorbedDamage` or add `ReflectedDamage`, both of
which are stored separately. `AttackProgress` has an `internal set`, so it is engine-writable only
(`CombatLogData.cs:94`).

`GetLogString()` renders the row the combat log shows (`CombatLogData.cs:97`).

## Mental Model

Read it as an engine-written event record with a rendering step bolted on, and mind the static cache. The
boundaries:

- **`GetLogString()` returns a shared, mutable static list.** It clears and refills `_logStringCache`
  (`CombatLogData.cs:99`, `CombatLogData.cs:329`) and returns that same instance. Two callers that keep the
  result — or one caller that calls it again before consuming the first result — see each other's rows.
  Copy it if you need to hold on to it.
- **The whole render is gated on a player flag and an options value.** Nothing is emitted unless
  `IsValidForPlayer` is set and `ManagedOptions.ReportDamage > 0`
  (`CombatLogData.cs:100`). `IsValidForPlayer` is private with no public writer, so a `CombatLogData` you
  constructed yourself renders as an empty list no matter how many flags you set.
- **The flags are additive, not exclusive.** A sneak attack by the player on a friendly also emits
  `combat_log_sneak_attack`, `combat_log_friendly_fire` and possibly a crushed-through line — the `if`
  chain has no `else` between them (`CombatLogData.cs:102` … `CombatLogData.cs:114`). One blow can produce
  three log lines.
- **`CrushedThrough` is suppressed on friendly fire** by an explicit `&& !this.IsFriendlyFire`
  (`CombatLogData.cs:114`), so that pairing is the one place where two flags interact.
- **The colours are packed uints, not `Color` structs** — `DamageReceivedColor` and `DamageDealedColor`
  (`CombatLogData.cs:323`, `CombatLogData.cs:326`) are raw literals passed through as the tuple's second
  element, so consumers must unpack them.
- **`SetVictimAgent` prefers the peer's displayed name** over the agent's own name
  (`CombatLogData.cs:310`), and tolerates a null agent by storing `null`
  (`CombatLogData.cs:313`).
- Because the type is a `struct` passed by `ref`, copying it — for example storing it in a list mid-blow —
  freezes whatever the engine had written at that moment.

## How to use

**Getting one.** The engine creates it. Declare a local, pass it by `ref` to the blow-registration path your
behaviour is part of, and read it from `CombatLogManager`'s `OnPrintCombatLogHandler` delegate
(`CombatLogManager.cs:82`) or after the hit is registered.

```csharp
public class BlowNarrator : MissionLogic
{
    private CombatLogData _last;   // your own copy, filled by the engine

    public override void OnEntityHit(WeakGameEntity entity, Agent attackerAgent, int inflictedDamage,
        DamageTypes damageType, Vec3 impactPosition, Vec3 impactDirection, in MissionWeapon weapon,
        int affectorWeaponSlotOrMissileIndex, ref CombatLogData combatLog)   // Mission.cs:1155
    {
        // The engine writes into YOUR instance; this is a struct, so copying freezes it.
        _last = combatLog;

        // AbsorbedDamage and ReflectedDamage are stored separately and are NOT in TotalDamage
        // (CombatLogData.cs:87).
        Debug.Print("hit for " + combatLog.InflictedDamage
                  + " (" + combatLog.AbsorbedDamage + " absorbed, "
                  + combatLog.ReflectedDamage + " reflected) on "
                  + combatLog.BodyPartHit);

        // Copy the result - GetLogString returns a shared static list (CombatLogData.cs:99).
        var rows = new System.Collections.Generic.List<System.ValueTuple<string, uint>>(
            combatLog.GetLogString());
    }
}
```

**The mistake that bites.** Holding on to the list returned by `GetLogString()`. It is a single static
buffer that the next call clears (`CombatLogData.cs:99`), so a mod that stores the returned list and reads
it later — after the next blow, or after two blows in the same frame — sees the *other* blow's rows, or an
empty list. Take a copy at the point of the call.



## Key Properties

| Name | Signature |
|------|-----------|
| `TotalDamage` | `public int TotalDamage { get; set; }` |
| `AttackProgress` | `public float AttackProgress { get; set; }` |

## Key Methods

### GetLogString
`public List<ValueTuple<string, uint>> GetLogString()`

**Purpose:** Reads and returns the log string value held by the this instance.

```csharp
// Obtain an instance of CombatLogData from the subsystem API first
CombatLogData combatLogData = ...;
var result = combatLogData.GetLogString();
```

### SetVictimAgent
`public void SetVictimAgent(Agent victimAgent)`

**Purpose:** Assigns a new value to victim agent and updates the object's internal state.

```csharp
// Obtain an instance of CombatLogData from the subsystem API first
CombatLogData combatLogData = ...;
combatLogData.SetVictimAgent(victimAgent);
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
CombatLogData entry = ...;
```

## See Also

- [Area Index](../)
- [AttackCollisionData](../AttackCollisionData)
- [BattleEndLogic](../BattleEndLogic)
- [AgentDecideKilledOrUnconsciousModel](../AgentDecideKilledOrUnconsciousModel)
- [中文页面](../../../../zh/api/mission-ext/CombatLogData)