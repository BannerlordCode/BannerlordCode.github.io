---
title: "CampaignSiegeStateHandler"
description: "A MissionLogic that remembers how a siege mission ended and advances the siege phase from OnEndMission — constructed with no arguments and it grabs PlayerEncounter.Battle immediately, so it only works inside an active siege encounter."
---

# CampaignSiegeStateHandler

**Namespace:** `SandBox.Missions.MissionLogics`
**Module:** `SandBox.Missions`
**Type:** `public class CampaignSiegeStateHandler : MissionLogic`
**Base:** `TaleWorlds.MountAndBlade.MissionLogic`
**File:** `Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/CampaignSiegeStateHandler.cs`

## Overview

A siege assault ends in one of three ways, and the campaign layer has to know which. This handler is the bridge that carries that answer out of the Mission and back into the settlement's siege bookkeeping. It hooks three `MissionLogic` callbacks — `OnRetreatMission`, `OnSurrenderMission`, `OnMissionResultReady` — accumulates the answer into two private flags, and then does exactly one thing in `OnEndMission`: if the player was the attacking side in a siege assault, did not retreat, and did not win, it calls `Settlement.SetNextSiegeState()` to advance the siege clock.

That is the whole design, and its shape is worth naming: **the class decides nothing, it only accumulates flags and forwards one call.** All the policy — what a retreat means, what a surrender costs — lives elsewhere.

## Mental Model

The two private fields are a three-state accumulator, and they are deliberately independent of each other:

- `_isRetreat` is set by `OnRetreatMission`. Retreating is *not* a loss, and the handler treats it that way: `_isRetreat` short-circuits the whole `OnEndMission` condition, so a retreat does **not** advance the siege phase.
- `_defenderVictory` is set by `OnMissionResultReady` as `missionResult.BattleState == 1`. Since the mission is only a siege mission from the *attacker's* perspective, a defender victory means the attack failed.
- `OnSurrenderMission` does not set a flag at all — it writes `PlayerEncounter.PlayerSurrender = true` directly on the encounter.

The `OnEndMission` predicate is the whole thing, and every clause narrows it:

```
IsSiege && _mapEvent.PlayerSide == 1 && !_isRetreat && !_defenderVictory
```

`IsSiege` is `_mapEvent.IsSiegeAssault`, `PlayerSide == 1` restricts this to the attacking side (a defender mission should not push the siege clock), `!_isRetreat` skips voluntary withdrawal, and `!_defenderVictory` skips an actual loss. Note what is *absent*: there is no check that `Settlement` is still under siege, no check that the player still owns an army, and no check that the flags were actually written. **A siege mission that ends without ever calling `OnMissionResultReady` leaves `_defenderVictory` at `false`** — its initial value — and therefore counts as "not a defender victory", which satisfies the condition and advances the siege phase. Read the flags as "was this outcome explicitly recorded", not "what happened".

The construction constraint is the sharpest edge. The parameterless constructor immediately evaluates `PlayerEncounter.Battle` and stores it. If `PlayerEncounter.Battle` is `null` — outside an encounter, or in a plain field battle — `_mapEvent` is null, and then every property (`IsSiege`, `IsSallyOut`, `Settlement`) and the whole of `OnEndMission` dereference null. There is no guard anywhere in the class. Add it only from a mission that was entered through a siege encounter.

## Key Members

| Member | Signature | What it is for |
| --- | --- | --- |
| `Settlement` | `public Settlement Settlement => _mapEvent.MapEventSettlement` | The settlement under siege, forwarded straight off the captured `MapEvent`. Convenient for other `MissionLogic` on the same mission that need the settlement without re-deriving it from the encounter — but it throws if the handler was constructed outside an encounter. |
| `IsSiege` | `public bool IsSiege => _mapEvent.IsSiegeAssault` | Distinguishes an actual siege assault from a plain field battle or a sally-out. This is the first clause of the `OnEndMission` gate, so it is also the cheapest way for other mission code to ask "is this mission one of ours". |
| `IsSallyOut` | `public bool IsSallyOut => _mapEvent.IsSallyOut` | Tells a sally-out apart from the main assault. Nothing in this class branches on it, so it exists purely as a read-only query for other `MissionLogic` sharing the encounter. |
| `OnRetreatMission` | `public override void OnRetreatMission()` | Marks `_isRetreat = true`. Called by the mission when the player withdraws voluntarily, and the single most important flag in the class because it suppresses the siege-phase advance on an otherwise inconclusive end. |
| `OnMissionResultReady` | `public override void OnMissionResultReady(MissionResult missionResult)` | Records `_defenderVictory = (missionResult.BattleState == 1)`. This is the only place the actual battle outcome enters the class, and note the comparison is against the ordinal `1`, not a named constant. |
| `OnSurrenderMission` | `public override void OnSurrenderMission()` | Sets `PlayerEncounter.PlayerSurrender = true` on the encounter rather than a local flag, because the surrender itself is meaningful to the whole encounter, not just to this mission. No return value, no event. |
| `OnEndMission` | `protected override void OnEndMission()` | The one place the accumulated flags are spent: when the player attacked, did not retreat, and did not win, it advances the siege by calling `Settlement.SetNextSiegeState()`. Being `protected` and `override`, it is not callable from outside the mission. |

## Real Example

Add the handler to a siege mission and read its context from other mission logic:

```csharp
public class MySiegeObserver : MissionLogic
{
    private CampaignSiegeStateHandler _siegeState;

    public override void OnBattleEnded()
    {
        _siegeState = new CampaignSiegeStateHandler();
        if (_siegeState.IsSiege)
        {
            Debug.Print("besieging " + _siegeState.Settlement.Name, 0);
        }
        else if (_siegeState.IsSallyOut)
        {
            Debug.Print("sally-out at " + _siegeState.Settlement.Name, 0);
        }
    }
}
```

Read the encounter's surrender state that `OnSurrenderMission` wrote, rather than tracking it yourself:

```csharp
if (PlayerEncounter.PlayerSurrender)
{
    Debug.Print("player surrendered during " + PlayerEncounter.Battle.MapEventSettlement.Name, 0);
}
```

Advance the siege phase yourself when your own condition says the assault has stalled — the same call the handler would make:

```csharp
if (MobileParty.MainParty.SiegeEvent != null)
{
    MobileParty.MainParty.SiegeEvent.BesiegedSettlement.SetNextSiegeState();
}
```

## Risks and Boundaries

- **Parameterless constructor dereferences `PlayerEncounter.Battle` immediately.** If there is no battle, `_mapEvent` is null and every member throws on first use. There is no null guard anywhere in the class.
- **The flags default to `false`, and `false` is the actionable value.** A siege mission that ends without calling `OnMissionResultReady` is treated as "not a defender victory" and *will* advance the siege phase.
- **`BattleState` is compared to the ordinal `1`.** There is no named enum reference in the code, so the meaning is positional and fragile across versions.
- **`OnEndMission` is `protected`.** You cannot invoke the phase advance through this handler from outside the mission; either let the lifecycle run or call `Settlement.SetNextSiegeState()` yourself.
- **Only the attacking side is handled.** `PlayerSide == 1` means a defender mission never advances the phase, so this logic is asymmetric by design.
- **Retreat suppresses the advance entirely.** `_isRetreat` short-circuits the whole predicate, so a tactical withdrawal is free — which is exactly the balance lever mods usually reach for.
- **No `IDataStore` contract.** Both flags are plain private fields with no `SaveableProperty`; they live only for the duration of the mission and are never serialised.
- **Adds no mission logic of its own.** This class contributes zero behaviour during the battle; it is pure bookkeeping that fires at the end.

## Cross-version note

The v1.4.5 file is 54 lines. The three recording callbacks and the single `OnEndMission` advance are the entire class. There is no overload or additional query member, and the `_isRetreat` / `_defenderVictory` pair is unchanged in shape from the surrounding campaign-era code.

## Dependencies

- Captured state: [PlayerEncounter](../campaign/PlayerEncounter) supplies `Battle` at construction time and receives the `PlayerSurrender` flag from `OnSurrenderMission`.
- Mission data: [MapEvent](../campaign/MapEvent) is the stored object; `IsSiegeAssault`, `IsSallyOut`, `PlayerSide`, and `MapEventSettlement` are all read directly off it.
- Phase advance: [Settlement](../campaign/Settlement) is what `SetNextSiegeState` moves forward.
- Base class: [MissionLogic](../mission-ext/MissionLogic) supplies the `MissionStart` / `OnEndMission` / `OnMissionResultReady` lifecycle hooks this class overrides.
- Bucket index: [campaign-ext API section](../)
