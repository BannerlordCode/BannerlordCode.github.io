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

`CombatLogData` is the record of a single blow: who hit whom, for how much, and with what. It is a value type — `public struct CombatLogData` (`CombatLogData.cs:11`) — constructed once per hit by the combat pipeline (`MissionCombatMechanicsHelper.cs:317`) and immediately handed to `CombatLogManager.GenerateCombatLog`, which turns it into the floating damage numbers the player sees (`CombatLogManager.cs:74`).

It is a mutable bag by design. Most of its state is `public` fields with no properties at all (`CombatLogData.cs:313` onwards), so the engine fills in `InflictedDamage`, `AbsorbedDamage`, `ModifiedDamage`, `ReflectedDamage`, `BodyPartHit`, `HitSpeed` and `Distance` after construction. The constructor itself only sets up the *who* facts — human, mine, mounted, rider ownership — and deliberately zeroes every number and defaults every flag (`CombatLogData.cs:268`), so a freshly constructed instance is a benign all-zero record.

The interesting behaviour is `GetLogString`, which turns the record into a list of `(text, colour)` pairs for the HUD.

## Mental Model

Read it as a HUD payload that has to be rendered immediately, not as history you can keep. `GetLogString` returns `CombatLogData._logStringCache` — a **`static` field** shared by every instance of the type (`CombatLogData.cs:310`). The method clears that one list on entry (`CombatLogData.cs:99`) and returns it (`CombatLogData.cs:248`). So the list you receive is a process-wide singleton. Hold onto it across another hit and it will have been cleared and refilled with the other blow's lines; two records' log strings are the same object.

That design also means an empty result is normal, not an error. The body only runs when `IsValidForPlayer` holds — `IsImportant && (IsAttackerPlayer || IsVictimPlayer)` (`CombatLogData.cs:19`) — where `IsImportant` is `TotalDamage > 0 || CrushedThrough || Chamber` (`CombatLogData.cs:29`), and on top of that only when `ManagedOptions.GetConfig(ReportDamage) > 0f` (`CombatLogData.cs:100`), a player setting. A glancing blow, a shove that did no damage, or a player who turned combat damage display off all produce an empty list with no diagnostic.

Two more boundaries. `TotalDamage` is not a stored field but a computed property, `InflictedDamage + ModifiedDamage` (`CombatLogData.cs:87`) — so a perk that *reduces* damage shows up as a negative `ModifiedDamage` and still subtracts from the headline number, and a perk that adds damage inflates it. And `AttackProgress` is the odd one out: `{ get; internal set; }` (`CombatLogData.cs:94`), the only member with a setter, and `internal` — a mod outside the `TaleWorlds.MountAndBlade` assembly cannot record attack progress even though every other public field is wide open.

## How to use

**Getting one.** Construct it, or better, read it from the `OnGenerateCombatLog` event that `CombatLogManager` exposes — that fires before the log lines are rendered (`CombatLogManager.cs:69`).

```csharp
using System.Collections.Generic;
using TaleWorlds.Core;
using TaleWorlds.Engine;
using TaleWorlds.Library;
using TaleWorlds.MountAndBlade;

CombatLogManager.OnGenerateCombatLog += OnCombatLog;

private void OnCombatLog(CombatLogData logData)
{
    // Read the public fields — this is a struct, so you are reading a copy.
    int inflicted = logData.InflictedDamage;
    int modified = logData.ModifiedDamage;
    int total = logData.TotalDamage;      // InflictedDamage + ModifiedDamage
    BoneBodyPartType bodyPart = logData.BodyPartHit;

    // The colour constants: DamageReceivedColor (4292917946) vs DamageDealedColor (4210351871).
    // Render NOW. The list you get back is a shared static singleton and is
    // cleared by the very next call.
    List<(string, uint)> lines = logData.GetLogString();
    foreach ((string line, uint colour) in lines)
    {
        Debug.Print(line);
    }
}
```

Building one yourself for a test or a custom hit:

```csharp
// All 17 arguments; damage numbers start at zero and are set afterwards.
CombatLogData data = new CombatLogData(
    isVictimAgentSameAsAttackerAgent: false,
    isAttackerAgentHuman: true,
    isAttackerAgentMine: true,
    doesAttackerAgentHaveRiderAgent: false,
    isAttackerAgentRiderAgentMine: false,
    isAttackerAgentMount: false,
    isVictimAgentHuman: true,
    isVictimAgentMine: false,
    isVictimAgentDead: false,
    doesVictimAgentHaveRiderAgent: false,
    isVictimAgentRiderAgentIsMine: false,
    isVictimAgentMount: false,
    missionObjectHit: null,
    isVictimRiderAgentSameAsAttackerAgent: false,
    crushedThrough: false,
    chamber: false,
    distance: 0f);

data.InflictedDamage = 42;
data.ModifiedDamage = -8;      // negative = damage reduced by a perk
data.BodyPartHit = BoneBodyPartType.Head;
data.VictimAgentName = "Some Bandit";
// data.TotalDamage now reads 34.
```

**The most common mistake** is caching the list returned by `GetLogString`. `CombatLogData._logStringCache` is a single `static` list shared by every `CombatLogData` in the process, cleared at the top of each call (`CombatLogData.cs:99`), so a reference you stored for later is emptied and refilled by the next hit — your tooltip shows the *previous* blow's text, or nothing. Copy the contents out during the call, the way `CombatLogManager.GenerateCombatLog` does by iterating immediately (`CombatLogManager.cs:74`), rather than holding the list.

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
- [CombatLogManager](../CombatLogManager) — consumes the struct and exposes `OnGenerateCombatLog`
- [InformationManager](../../core-extra/InformationManager) — displays the rendered log lines
- [MissionObject](../MissionObject) — the optional non-agent thing that was hit
- [DamageTypes](../../core-extra/DamageTypes) — the `DamageType` field, defaulting to `Blunt`