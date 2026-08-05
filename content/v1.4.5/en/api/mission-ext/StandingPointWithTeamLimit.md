---
title: "StandingPointWithTeamLimit"
description: "StandingPoint specialization that limits use to one configured Mission Team and its battle side."
---
# StandingPointWithTeamLimit

**Namespace:** `TaleWorlds.MountAndBlade`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public class StandingPointWithTeamLimit : StandingPoint`  
**Base:** [`StandingPoint`](../StandingPoint)  
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/StandingPointWithTeamLimit.cs`

## One-line responsibility

This point admits only Agents whose `Team` is the configured `UsableTeam`, and it exposes only that Team's battle side to detachment selection.

## Overview

The class is a team identity gate layered over [`StandingPoint`](../StandingPoint). The comparison is `agent.Team == UsableTeam`, not a loose side comparison, so two teams on the same side are still distinct. `IsUsableBySide` then reads `UsableTeam.Side` before delegating to the base side and occupancy checks.

## Mental model

`UsableTeam` must be assigned by the owning machine after the Mission has created its teams and before `UsableMachine` evaluates detachment slots. In the game source, [`CastleGate`](../CastleGate) walks its collected points and assigns the configured team to every `StandingPointWithTeamLimit`. This class does not discover a team on its own and does not persist the assignment.

There are two filters: an individual Agent must reference the exact configured Team, and a detachment request must arrive for that Team's `BattleSideEnum`. The base point still handles deactivation, instant use, occupancy, controller type, and any entity tags.

## Dependencies

- [`StandingPoint`](../StandingPoint) supplies the common use lifecycle and base side/occupancy rules.
- [`UsableMachine`](../UsableMachine) calls both `IsDisabledForAgent` and `IsUsableBySide` while choosing a slot.
- [`Team`](../Team) supplies the identity and `Side` read by this class; [`Mission`](../../mission/Mission) owns the live Team instances.
- [`CastleGate`](../CastleGate) is a source-confirmed consumer that assigns `UsableTeam` during machine initialization.

## When to use and when not to

**Use it when:**

- One machine slot belongs to a specific Team, even when another Team shares its battle side.
- The owning machine can configure the Team before AI detachment evaluation begins.

**Do not use it when:**

- Any Team on a side may use the point; use a normal [`StandingPoint`](../StandingPoint) with scene side tags.
- The allowed set is a changing list of individual actors; use [`StandingPointWithAgentLimit`](../StandingPointWithAgentLimit).
- Team membership has not been created yet. Waiting for a non-null Mission Team is safer than relying on an unconfigured point.

## Key members and timing

- `UsableTeam` is the required configuration property. Changing it changes both individual eligibility and side eligibility.
- `IsDisabledForAgent` rejects `null` or differently assigned Teams and delegates the accepted Agent to the base implementation.
- `IsUsableBySide` compares the requested side to `UsableTeam.Side`, then delegates to the base implementation.

The property has no setter-side validation. The caller owns configuration order and must not change it while the machine is concurrently assigning Agents.

## Real acquisition and configuration example

The following follows the same acquisition shape as a Mission-owned machine: it reads a live Team from `Mission.Current.Teams` and configures a point already registered in the active object collection.

```csharp
using TaleWorlds.MountAndBlade;

static void BindAttackerTeamPoints()
{
    Mission mission = Mission.Current;
    if (mission == null || mission.Teams == null)
    {
        return;
    }

    Team attackers = mission.Teams.Attacker;
    foreach (StandingPointWithTeamLimit point in
             mission.ActiveMissionObjects.FindAllWithType<StandingPointWithTeamLimit>())
    {
        point.UsableTeam = attackers;
    }
}
```

Run this while the machine and Teams are initialized, before its detachment selection is used. The point does not create or register a Team.

## Risks and crash boundaries

- `IsUsableBySide` dereferences `UsableTeam.Side` without a null guard. Leaving the property unset can crash side evaluation; configure it before the machine is queried.
- A Team object belongs to a Mission. Do not retain or reuse `UsableTeam` after that Mission ends.
- Changing the property mid-use can make the current Agent fail later checks. Stop or reassign the machine through its owner instead of mutating the gate during movement.
- A same-side Team is not equivalent to the configured Team. Use the exact live object from the current Mission.

## See also and reciprocal navigation

- ↑ Parent: [Mission-ext module index](../)
- ↔ Siblings: [StandingPoint](../StandingPoint) · [StandingPointWithAgentLimit](../StandingPointWithAgentLimit)
- Related constraints: [StandingPointWithWeaponRequirement](../StandingPointWithWeaponRequirement) · [StandingPointWithVolumeBox](../StandingPointWithVolumeBox)
- Consumers and host: [CastleGate](../CastleGate) · [UsableMachine](../UsableMachine) · [Mission](../../mission/Mission)
- 中文/English: [StandingPointWithTeamLimit](../../../../zh/api/mission-ext/StandingPointWithTeamLimit)
