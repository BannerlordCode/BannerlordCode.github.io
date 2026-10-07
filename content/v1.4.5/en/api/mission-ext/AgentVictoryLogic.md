---
title: "AgentVictoryLogic"
description: "The mission behavior that gives agents victory cheer animations and voice lines, with a private per-agent bookkeeping record tracking orders received and paused cheer."
---

# AgentVictoryLogic

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class AgentVictoryLogic : MissionLogic`
**Base:** `MissionLogic`
**Source:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AgentVictoryLogic.cs`

## One-line responsibility

It is the presentation layer of a battle's ending: it picks which cheer animation group plays, decides when each agent is allowed to cheer, and suppresses cheer from agents who have just received an order.

## Mental model

The interesting design decision is buried in a private nested class, so start there. `CheeringAgent` is the per-agent record, and its shape tells you what "cheering" means to the game:

- `readonly Agent Agent` and `readonly bool IsCheeringOnRetreat` — identity plus which of the two cheer contexts this is.
- `GotOrderRecently` — set by `OrderReceived()`, and read by the tick.
- `IsCheeringPaused` — a pause flag the animation layer sets.

The logic is built on three thresholds and one probability, all `private const`:

| Constant | Value | Role |
| --- | --- | --- |
| `HighCheerThreshold` | `0.25f` | Below this the side is doing so badly the cheer is the loudest tier. |
| `MidCheerThreshold` | `0.75f` | The boundary for the middle tier. |
| `YellIfOrderedInRetreatProbability` | `0.25f` | Even an agent who just got an order still yells on retreat one time in four. |

So `CheerActionGroupEnum` is not a mood setting you pick by hand in most cases — it is the tier the engine derives from how the battle is going, and the three tag-shaped thresholds are what map situation onto tier. `None`, `LowCheerActions`, `MidCheerActions`, `HighCheerActions` are the four states, and `SetCheerActionGroup` maps each to a different private action array (`_lowCheerActions`, `_midCheerActions`, `_highCheerActions`), with `None` nulling the selection out.

The `AfterStart` hook is where the wiring happens, and it is worth reading closely because of what it does *not* clean up:

```csharp
base.Mission.MissionCloseTimeAfterFinish = 60f;
_cheeringAgents = new List<CheeringAgent>();
SetCheerReactionTimerSettings();
if (base.Mission.PlayerTeam != null)
    base.Mission.PlayerTeam.PlayerOrderController.OnOrderIssued += MasterOrderControllerOnOrderIssued;
Mission.Current.IsBattleInRetreatEvent += CheckIfIsInRetreat;
```

`MissionCloseTimeAfterFinish` is set to 60 seconds — this logic is what buys the game time to play the cheer sequence before the end screen. It subscribes to the **player** team's order controller only, and it subscribes to `IsBattleInRetreatEvent`. `OnEndMission` unsubscribes exactly one of those two: it removes `IsBattleInRetreatEvent` and leaves the `OnOrderIssued` subscription in place. `OnClearScene` clears `_cheeringAgents` but unsubscribes nothing.

That asymmetry is a real, verifiable leak-shaped observation rather than a style complaint: a handler bound to a player team's order controller outlives the mission. Whether it matters in practice depends on how long the controller lives, which is outside this file. State it as what it is — an asymmetry you can see — not as a proven crash.

The order-suppression rule is the last piece: `MasterOrderControllerOnOrderIssued` walks `_cheeringAgents` and flags `GotOrderRecently` for every agent in an affected formation. That is why a soldier who has just been told to hold does not break into a victory cheer.

## Key members

| Member | Signature | What it is for |
| --- | --- | --- |
| `CheerActionGroupEnum` | `public enum CheerActionGroupEnum { None, LowCheerActions, MidCheerActions, HighCheerActions }` | The four cheer tiers. `None` clears the selected action set entirely; the other three each map to a private animation array in `SetCheerActionGroup`. The tier is normally chosen by the engine from battle progress, using the private thresholds. |
| `CheerReactionTimeSettings` | `public struct CheerReactionTimeSettings(float minDuration, float maxDuration)` | A two-field readonly struct holding the window each cheer animation may play for. Defaults come from `SetCheerReactionTimerSettings`, which takes `1f` and `8f`. |
| `CheerActionGroup` | `public CheerActionGroupEnum CheerActionGroup => _cheerActionGroup` | Read-only view of the currently selected tier. The backing field is private and only `SetCheerActionGroup` writes it. |
| `CheerReactionTimerData` | `public CheerReactionTimeSettings CheerReactionTimerData => _cheerReactionTimerData` | Read-only view of the current animation-duration window. Change it through `SetCheerReactionTimerSettings`, not by assignment. |
| `AfterStart` | `public override void AfterStart()` | The whole setup: extends `MissionCloseTimeAfterFinish` to 60s, allocates the cheering list, applies default timer settings, subscribes to the **player** order controller, and subscribes to `IsBattleInRetreatEvent`. Also the reason this behavior must not be attached twice — a second instance doubles both subscriptions. |
| `SetCheerActionGroup` | `public void SetCheerActionGroup(CheerActionGroupEnum cheerActionGroup = CheerActionGroupEnum.None)` | Switches tier and repoints `_selectedCheerActions` at the matching private array, with `None` setting it to `null`. This is the entry point a mod uses to force a cheer mood for a scripted moment. |
| `SetCheerReactionTimerSettings` | `public void SetCheerReactionTimerSettings(float minDuration = 1f, float maxDuration = 8f)` | Resizes the per-cheer animation window. The shipped defaults are a one-second minimum and an eight-second maximum; a max below the min is not validated here. |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | Runs `CheckAnimationAndVoice` only when `_cheeringAgents.Count > 0`. The guard means the per-frame cost is zero for most of a mission and only becomes non-trivial once someone is cheering. |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)` | Cleanup on death: removes the agent's `VictoryComponent` and then removes it from `_cheeringAgents` by linear scan. The `break` after `RemoveAt` is correct here because a given agent appears at most once. |
| `SetTimersOfVictoryReactionsOnBattleEnd` | `public void SetTimersOfVictoryReactionsOnBattleEnd(BattleSideEnum side)` | Schedules cheer start times for a side at battle end, using the configured min/max window. The scripted-moment entry point. |
| `SetTimersOfVictoryReactionsOnRetreat` | `public void SetTimersOfVictoryReactionsOnRetreat(BattleSideEnum side)` | The retreat equivalent, and the path that pairs with `YellIfOrderedInRetreatProbability` — the case where an agent who just got an order still has a one-in-four chance of yelling. |
| `SetTimersOfVictoryReactionsOnTournamentVictoryForAgent` | `public void SetTimersOfVictoryReactionsOnTournamentVictoryForAgent(Agent agent, float minStartTime, float maxStartTime)` | Single-agent tournament variant with an explicit time window, rather than a per-side schedule derived from the shared settings. |
| `CheeringAgent` | `private class CheeringAgent` | The per-agent bookkeeping record, and the most instructive member despite being private. `readonly Agent Agent`, `readonly bool IsCheeringOnRetreat`, plus `GotOrderRecently` and `IsCheeringPaused` state. `OrderReceived()` and `UpdatePauseState(bool)` are its only mutators. |

## Dead members and traps

Of the 14 fields and properties on this page, 9 were reported by the inventory as having 0 call sites — all 9 have live references. That is a tool blind spot, not dead code. For the remaining 5 no reference could be reproduced, and no conclusion is drawn.

| `Member` | Declaration | override | Call sites | Verdict | Notes |
|---|---|---:|---:|---|---|
| `MasterOrderControllerOnOrderIssued` | bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AgentVictoryLogic.cs:119 | 0 | 1 time (1 line) | MEASURED | Inventory says 0 call sites. Measured: it is **wired up** as an event handler at AgentVictoryLogic.cs:114 (`OnOrderIssued += MasterOrderControllerOnOrderIssued`). An implicit event dispatch is not call-shaped, so the tool scores it 0. |
| `_cheeringAgents` | bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AgentVictoryLogic.cs:99 | 0 | 18 times (18 lines) | MEASURED | The cheering roster — the busiest field on the class. Created at :110, appended at :301, walked backwards at :122-127, updated every tick at :194-223, cleared at :159. The 0 is a blind spot. |
| `_cheerReactionTimerData` | bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AgentVictoryLogic.cs:61 | 0 | 6 times (4 lines) | MEASURED | **The only name out of 43 where occurrences differ from lines**: :293 and :358 each carry it twice (`…TimerData.MinDuration, …TimerData.MaxDuration`), hence 6 occurrences across 4 lines. The inventory 0 is a blind spot. |
| `_selectedCheerActions` | bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AgentVictoryLogic.cs:97 | 0 | 6 times (6 lines) | MEASURED | Currently selected cheer action array, assigned from `_low/mid/highCheerActions` and read at :414. The 0 is a blind spot. |
| `_cheerActionGroup` | bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AgentVictoryLogic.cs:59 | 0 | 4 times (4 lines) | MEASURED | Storage for the cheer action group enum; written by `SetCheerActionGroup` (:132), read in the switch at :135 and the test at :244. The 0 is a blind spot. |
| `_isInRetreat` | bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AgentVictoryLogic.cs:101 | 0 | 3 times (3 lines) | MEASURED | Retreat flag: set true at :306, false at :273, read and returned by `CheckIfIsInRetreat` at :427. The 0 is a blind spot. |
| `_midCheerActions` | bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AgentVictoryLogic.cs:77 | 0 | 3 times (3 lines) | MEASURED | Mid-intensity cheer table; assigned to the current selection at :141 and :364, read at :417. The 0 is a blind spot. |
| `_lowCheerActions` | bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AgentVictoryLogic.cs:63 | 0 | 1 time (1 line) | MEASURED | Low-intensity cheer table; assigned to `_selectedCheerActions` at :138. The 0 is a blind spot. |
| `_highCheerActions` | bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AgentVictoryLogic.cs:85 | 0 | 1 time (1 line) | MEASURED | High-intensity cheer table; assigned to `_selectedCheerActions` at :144. The 0 is a blind spot. |
| `CheerActionGroup` | bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AgentVictoryLogic.cs:103 | — | — | UNSUPPORTED | Public read-only property (exposing `_cheerActionGroup`). **No reference could be reproduced; no conclusion is drawn** — this is not a confirmation that it is unreferenced. |
| `CheerReactionTimerData` | bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AgentVictoryLogic.cs:105 | — | — | UNSUPPORTED | Public read-only property (exposing `_cheerReactionTimerData`). **No reference could be reproduced; no conclusion is drawn.** |
| `HighCheerThreshold` | bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AgentVictoryLogic.cs:53 | — | — | UNSUPPORTED | `private const float = 0.25f`. **No reference could be reproduced; no conclusion is drawn.** |
| `MidCheerThreshold` | bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AgentVictoryLogic.cs:55 | — | — | UNSUPPORTED | `private const float = 0.75f`. **No reference could be reproduced; no conclusion is drawn.** |
| `YellIfOrderedInRetreatProbability` | bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AgentVictoryLogic.cs:57 | — | — | UNSUPPORTED | `private const float = 0.25f`. **No reference could be reproduced; no conclusion is drawn.** |

## Real example

Forcing a cheer mood for a scripted moment and scheduling it — the whole public surface in two calls:

```csharp
public class MyVictoryScript : MissionLogic
{
    public override void AfterStart()
    {
        AgentVictoryLogic victory = this.Mission.GetMissionBehavior<AgentVictoryLogic>();
        if (victory == null)
        {
            Debug.Print("no AgentVictoryLogic in this mission", 0);
            return;
        }

        victory.SetCheerActionGroup(AgentVictoryLogic.CheerActionGroupEnum.HighCheerActions);
        victory.SetCheerReactionTimerSettings(2f, 12f);
        victory.SetTimersOfVictoryReactionsOnBattleEnd(BattleSideEnum.Defender);
    }
}
```

Reading the current tier without changing it, which is the safe read when you only want to observe:

```csharp
public class MyCheerObserver : MissionLogic
{
    public override void OnMissionTick(float dt)
    {
        AgentVictoryLogic victory = this.Mission.GetMissionBehavior<AgentVictoryLogic>();
        if (victory == null)
        {
            return;
        }

        AgentVictoryLogic.CheerActionGroupEnum tier = victory.CheerActionGroup;
        AgentVictoryLogic.CheerReactionTimeSettings window = victory.CheerReactionTimerData;

        Debug.Print(
            "tier = " + tier + " min = " + window.MinDuration + " max = " + window.MaxDuration,
            0);
    }
}
```

Reinforcing the pause yourself, which is the behaviour the private `IsCheeringPaused` flag performs internally:

```csharp
public class MyCheerPurger : MissionLogic
{
    public override void OnAgentRemoved(
        Agent affectedAgent,
        Agent affectorAgent,
        AgentState agentState,
        KillingBlow killingBlow)
    {
        Debug.Print(
            "agent " + affectedAgent.Index + " removed with state " + agentState,
            0);
    }
}
```

## Risks and boundaries

1. **A duplicated `AfterStart` doubles both subscriptions.** It subscribes to the player order controller and to `IsBattleInRetreatEvent`. Attaching two instances of this behavior means both receive every order and every retreat signal. Verify the behavior is not already in the mission's behavior list before adding your own.
2. **Only one of the two subscriptions is removed.** `OnEndMission` unsubscribes `IsBattleInRetreatEvent`. The `OnOrderIssued` subscription on the player team's order controller is never removed by this class — `OnClearScene` clears the cheering list and nothing else. Whether that is harmful depends on how long the order controller outlives the mission, which this file cannot answer.
3. **The player team is special-cased.** Order suppression only listens to `Mission.PlayerTeam.PlayerOrderController`, and only when `PlayerTeam != null`. Enemy-side orders never suppress cheer. In a mission with no player team, nothing subscribes at all.
4. **The thresholds and action arrays are private.** `HighCheerThreshold`, `MidCheerThreshold`, `YellIfOrderedInRetreatProbability`, and all three action arrays are `private const` / private fields. You can select a tier through `SetCheerActionGroup` but you cannot change what a tier contains or how the tier is chosen.
5. **Tier selection is not automatically reactive.** `SetCheerActionGroup` only assigns. Nothing in this class re-evaluates the tier as the battle progresses, so a mod that sets it once must set it again at the moment it wants the change.
6. **`OnAgentRemoved` scans `_cheeringAgents` linearly.** That is fine for a handful of cheerers and would not be fine for hundreds; do not call the removal path from your own code per-agent in a large battle.
7. **No timer validation.** `SetCheerReactionTimerSettings(8f, 1f)` is accepted without complaint. What happens downstream with an inverted window cannot be determined from this file.
8. **Extending the end sequence costs 60 seconds.** `AfterStart` sets `MissionCloseTimeAfterFinish = 60f`. Attaching this behavior to a mission that does not want a cheer sequence makes the player wait.
9. **Not saved.** All state, including the cheering list and the tier, is per-mission and rebuilt on load.

## Dependencies

- **Base contract:** [`MissionLogic`](../MissionLogic) supplies the `Mission` back-reference; this behavior inherits the victory and end-mission protocol from it.
- **Host:** [`Mission`](../../mission/Mission) `MissionCloseTimeAfterFinish` is what buys the cheer sequence its 60 seconds; `GetMissionBehavior<T>()` is how a mod retrieves an existing instance.
- **Order input:** [`Team`](../Team) `PlayerOrderController` and its `OnOrderIssued` event are the only source of `GotOrderRecently`.
- **Retreat input:** `Mission.IsBattleInRetreatEvent` (`Func<bool>`) is subscribed in `AfterStart` and unsubscribed in `OnEndMission`.
- **Per-agent work:** [`Agent`](../../mission/Agent) and its [`VictoryComponent`](../VictoryComponent) are what `OnAgentRemoved` cleans up.
- **Spawning counterpart:** [`BattleSpawnModel`](../BattleSpawnModel) decides who is on the field for the side whose victory this logic celebrates.
- Bucket home: [mission-ext API section](../)