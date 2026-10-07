---
title: "BattleHighlightsController"
description: "Auto-generated class reference for BattleHighlightsController."
---
# BattleHighlightsController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleHighlightsController : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/BattleHighlightsController.cs`

## Overview

`BattleHighlightsController` is the battle-scene extension of the replay highlight system. It is a `MissionLogic` (`BattleHighlightsController.cs:10`) added to every shipped battle in `SandBoxMissions` (`SandBoxMissions.cs:468`), and it does two things: at `AfterStart` it registers three extra highlight types, and in `OnAgentRemoved` it decides which of those three the current kill deserves.

The three types are hard-coded as string ids in a private list initialised inline (`BattleHighlightsController.cs:82`): `hlid_kill_last_enemy_on_battlefield` ("Take No Prisoners"), `hlid_win_battle_as_last_man_standing` ("Last Man Standing") and `hlid_wall_break_kill` ("Wall Break Kill"). All three use the group id `grpid_incidents`. Registration goes through the static `HighlightsController.AddHighlightType` (`BattleHighlightsController.cs:18`), while the runtime instance it later talks to is fetched from the mission with `Mission.Current.GetMissionBehavior<HighlightsController>()` (`BattleHighlightsController.cs:15`).

The detection logic is narrower than it looks. `OnAgentRemoved` requires an affector, an affected agent, **both** of them human, and a state of `Killed` or `Unconscious` (`BattleHighlightsController.cs:25`) before it does anything at all.

## Mental Model

Two separate stores, and confusing them is the trap. Highlight *types* live in a static list owned by `HighlightsController`; the *controller* that filters and queues them is a per-mission behavior. This logic writes to the static list without touching the instance, then later dereferences the instance. So the two can disagree: the types can be registered while the controller is absent, and nothing in `AfterStart` notices.

That disagreement is sharpened by `HighlightsController`'s own lifecycle. `HighlightsController.AfterStart` *reassigns* `HighlightsController.HighlightTypes` to a fresh list (`HighlightsController.cs:66`), and `AddHighlightType` only calls `Highlights.AddHighlight` when `IsHighlightsInitialized` is already true (`HighlightsController.cs:253`). Registering from `AfterStart` before `HighlightsController.AfterStart` therefore means your three types are wiped; registering after means they land in the list but are never announced to the video subsystem. There is no ordering guarantee that avoids both.

The third boundary is filtering, and it is where most highlights quietly disappear. `BattleHighlightsController` calls the two-argument `SaveHighlight`, which runs `CanSaveHighlight` first (`HighlightsController.cs:270`): distance from the render camera must be within `MaxHighlightDistance`, the camera-facing score must reach `MinVisibilityScore`, and if `IsVisibilityRequired` the position must be unoccluded (`HighlightsController.cs:279`). The two "last enemy" types are configured with `0f`, `float.MaxValue` and `false` and therefore always pass; `hlid_wall_break_kill` is configured with `0.25f`, `100f` and `true` (`BattleHighlightsController.cs:86`) and so is dropped unless the kill was visible, within 100 units, and in view.

`Mission.AfterStart` walks `MissionBehaviors` in list order calling `AfterStart` on each (`Mission.cs:3437`), so the ordering advice below is not a convention — it is the mechanism.

## How to use

**Getting one.** Add it to a battle mission's behavior list, alongside `HighlightsController` itself. Ordering matters as described above — put `BattleHighlightsController` after `HighlightsController` in the behavior array so the static list is not overwritten underneath it.

```csharp
using TaleWorlds.MountAndBlade;

public class MyModBattleLogic : MissionLogic
{
    public override void onInitialization()
    {
        base.onInitialization();

        // Add AFTER HighlightsController so its AfterStart does not replace
        // the static HighlightTypes list these types were just added to.
        Mission.Current.AddMissionBehavior(new BattleHighlightsController());
    }

    public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)
    {
        base.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);

        if (affectorAgent == null || !affectorAgent.IsMainAgent || affectedAgent == null)
            return;

        HighlightsController controller = Mission.Current.GetMissionBehavior<HighlightsController>();

        // Reuse the same ids this logic registers. `GetHighlightTypeWithId` throws
        // rather than returning a default, so guard the behaviour's presence first.
        HighlightsController.HighlightType type =
            controller.GetHighlightTypeWithId("hlid_wall_break_kill");

        HighlightsController.Highlight highlight = default(HighlightsController.Highlight);
        highlight.Start = Mission.Current.CurrentTime;
        highlight.End = Mission.Current.CurrentTime;
        highlight.HighlightType = type;

        // The two-argument overload filters through CanSaveHighlight itself; a
        // highlight that fails the filter is discarded without any error.
        controller.SaveHighlight(highlight, affectedAgent.Position);
    }
}
```

**The most common mistake** is adding this logic to a mission without a `HighlightsController`, or letting it run before one. `GetHighlightTypeWithId` is implemented as `HighlightTypes.First(h => h.Id == highlightId)` (`HighlightsController.cs:48`) — LINQ `First`, not `FirstOrDefault` — so the first kill that reaches the wall-break branch throws `InvalidOperationException: Sequence contains no matching element` rather than quietly doing nothing. Guard with `Mission.Current.GetMissionBehavior<HighlightsController>() == null` before you rely on it.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of BattleHighlightsController from the subsystem API first
BattleHighlightsController battleHighlightsController = ...;
battleHighlightsController.AfterStart();
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of BattleHighlightsController from the subsystem API first
BattleHighlightsController battleHighlightsController = ...;
battleHighlightsController.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<BattleHighlightsController>();
```

## See Also

- [Area Index](../)
- [HighlightsController](../HighlightsController) — owns the static type registry and the per-mission filtering
- [MissionLogic](../MissionLogic) — the base type it derives from
- [KillingBlow](../KillingBlow) — carries the weapon flags this logic branches on
- [Agent](../../mission/Agent) — the `OnAgentRemoved` participants, both of which must be human