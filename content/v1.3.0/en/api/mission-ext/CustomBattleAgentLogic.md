---
title: "CustomBattleAgentLogic"
description: "Auto-generated class reference for CustomBattleAgentLogic."
---
# CustomBattleAgentLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleAgentLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/CustomBattleAgentLogic.cs`

## Overview

`CustomBattleAgentLogic` is the bridge between mission hits and campaign bookkeeping. It is a `MissionLogic` (`CustomBattleAgentLogic.cs:7`) with two overrides and one private helper, and it does not touch combat resolution at all — it only forwards what already happened to the agent's *origin*, which is the object that knows where that agent came from (a campaign party, a formation, a spawned troop).

`OnAgentHit` (`CustomBattleAgentLogic.cs:10`) is guarded on both agents having a non-null `Character` and the victim being `AgentState.Active` (`CustomBattleAgentLogic.cs:12`), then derives two booleans and forwards. The `isFatal` flag is `affectedAgent.Health - (float)blow.InflictedDamage < 1f` (`CustomBattleAgentLogic.cs:14`) — and note this is computed *after* damage has been applied, so `Health` is already post-hit and the subtraction is a second, approximate subtraction. The `isTeamKill` flag is `affectedAgent.Team.Side == affectorAgent.Team.Side` (`CustomBattleAgentLogic.cs:15`), i.e. true means friendly fire. The call itself is `affectorAgent.Origin.OnScoreHit(character, formationCaptain, inflictedDamage, isFatal, isTeamKill, missionWeapon.CurrentUsageItem)` (`CustomBattleAgentLogic.cs:33`) — matching `IAgentOriginBase.OnScoreHit` (`IAgentOriginBase.cs:69`).

`OnAgentRemoved` (`CustomBattleAgentLogic.cs:38`) maps the final agent state onto the origin's lifecycle: `SetWounded` for unconscious, `SetKilled` for killed, `SetRouted` otherwise (`CustomBattleAgentLogic.cs:48`, `CustomBattleAgentLogic.cs:59`, `CustomBattleAgentLogic.cs:62`).

## Mental Model

The wounded path for the main agent never reaches `SetRouted`. If the victim is the main agent and goes unconscious, `BecomeGhost()` runs and the method returns (`CustomBattleAgentLogic.cs:51`). So the origin of the player's own hero is told `SetWounded` and nothing more, while every other agent gets exactly one of the three calls. If you are counting origins by state, the player's hero is the one that stops reporting.

`BecomeGhost` is a handover, not a removal (`CustomBattleAgentLogic.cs:68`): it puts `Mission.PlayerEnemyTeam.Leader` under AI control and puts `Mission.MainAgent` under AI control (`CustomBattleAgentLogic.cs:73`, `CustomBattleAgentLogic.cs:75`). It does not clear `Mission.MainAgent`. Anything that keeps reading `Mission.MainAgent` still gets a valid but now AI-controlled agent.

Routed mounts are excluded on purpose. The very first thing `OnAgentRemoved` does is return when `affectorAgent == null && affectedAgent.IsMount && agentState == AgentState.Routed` (`CustomBattleAgentLogic.cs:40`) — an unattached horse that broke off is not an origin casualty. Get the ordering of that guard wrong and every spooked horse inflates your routed count.

The captain reported to the score system is the *formation's* captain, not the killer's. It reads `affectorAgent.Formation` and then `.Captain.Character`, mapping a null formation to a null captain (`CustomBattleAgentLogic.cs:20`). A lone attacker with no formation therefore scores with a null captain, and any downstream code that dereferences it must cope with that.

Nothing here null-checks `affectedAgent.Origin` in the hit path — `affectorAgent.Origin` is dereferenced unconditionally at `CustomBattleAgentLogic.cs:33` — whereas the removal path does check `affectedAgent.Origin != null` (`CustomBattleAgentLogic.cs:44`). An agent without an origin can be removed safely but cannot be hit without throwing.

## How to use

**Getting one.** It is a plain `MissionLogic`, added by the battle mission definitions rather than by the engine core. Reach it as `Mission.GetMissionBehavior<CustomBattleAgentLogic>()`; to observe the same events yourself, override the same hooks in your own behaviour.

**Typical use** — mirroring the origin bookkeeping for a mod-specific casualty report:

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyOriginWatcher : MissionLogic
{
    public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent,
        in MissionWeapon affectorWeapon, in Blow blow, in AttackCollisionData attackCollisionData)
    {
        // Same guard the shipped logic uses: both need a Character, victim must be Active.
        if (affectedAgent.Character == null ||
            affectorAgent == null || affectorAgent.Character == null ||
            affectedAgent.State != AgentState.Active)
        {
            return;
        }

        if (affectorAgent.Origin == null)
        {
            return; // the shipped path does not guard this
        }

        IAgentOriginBase origin = affectorAgent.Origin;
        Formation formation = affectorAgent.Formation;
        BasicCharacterObject captain = formation?.Captain?.Character;

        origin.OnScoreHit(
            affectedAgent.Character,
            captain,
            blow.InflictedDamage,
            isFatal: false,
            isTeamKill: affectedAgent.Team.Side == affectorAgent.Team.Side,
            affectorWeapon.CurrentUsageItem);
    }

    public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent,
        AgentState agentState, KillingBlow killingBlow)
    {
        if (affectorAgent == null && affectedAgent.IsMount && agentState == AgentState.Routed)
        {
            return; // spooked horses are not casualties
        }

        IAgentOriginBase origin = affectedAgent.Origin;
        if (origin == null)
        {
            return;
        }

        if (agentState == AgentState.Unconscious)
        {
            origin.SetWounded();
        }
        else if (agentState == AgentState.Killed)
        {
            origin.SetKilled();
        }
        else
        {
            origin.SetRouted();
        }
    }
}
```

`IAgentOriginBase` declares all four members used here (`IAgentOriginBase.cs:57`, `IAgentOriginBase.cs:60`, `IAgentOriginBase.cs:63`, `IAgentOriginBase.cs:69`). Note that this logic *duplicates* the shipped behaviour rather than replacing it — the origins get told twice.

**Most common mistake:** adding this as an extra behaviour and assuming it replaces the game's own.

```csharp
mission.AddMissionBehavior(new CustomBattleAgentLogic());   // one more, not one instead
```

The mission already carries the shipped instance, and `OnAgentRemoved` calls `SetKilled`/`SetWounded`/`SetRouted` unconditionally rather than guarding against a prior call. Two instances means every origin is notified twice, and for an origin that decrements a live count on each call the campaign roster loses two soldiers per death. This class is not a registration point — add your *own* behaviour that observes, as above, and do not instantiate this one.

## Key Methods

### OnAgentHit
`public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent, in MissionWeapon affectorWeapon, in Blow blow, in AttackCollisionData attackCollisionData)`

**Purpose:** Invoked when the agent hit event is raised.

```csharp
// Obtain an instance of CustomBattleAgentLogic from the subsystem API first
CustomBattleAgentLogic customBattleAgentLogic = ...;
customBattleAgentLogic.OnAgentHit(affectedAgent, affectorAgent, affectorWeapon, blow, attackCollisionData);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of CustomBattleAgentLogic from the subsystem API first
CustomBattleAgentLogic customBattleAgentLogic = ...;
customBattleAgentLogic.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<CustomBattleAgentLogic>();
```

## See Also

- [Area Index](../)
- [IAgentOriginBase — the interface every call here targets](../../core-extra/IAgentOriginBase)
- [MissionLogic — the base class it extends](../MissionLogic)
- [中文页面](../../../../zh/api/mission-ext/CustomBattleAgentLogic)