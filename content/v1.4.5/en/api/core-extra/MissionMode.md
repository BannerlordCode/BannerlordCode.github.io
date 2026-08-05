---
title: "MissionMode"
description: "The Mission runtime mode enum; together with SetMissionMode callbacks it controls how deployment, battle, conversation, stealth, and other mission phases are handled."
---

# MissionMode

**Namespace:** `TaleWorlds.Core`  
**Module:** `TaleWorlds.Core`  
**Type:** `public enum MissionMode`  
**Base:** `System.Enum`  
**Source:** `bin/TaleWorlds.Core/TaleWorlds.Core/MissionMode.cs`

## Responsibility

It gives the active Mission a semantic mode value so `Mission`, behaviors, and listeners can switch logic for deployment, battle, conversation, stealth, and related phases.

## Mental model

`MissionMode` is a value, not an independent state machine. `Mission` owns the current value. Mod code normally reads `Mission.Current.Mode` and requests a transition through `Mission.Current.SetMissionMode(newMode, atStart)`. The implementation stores the old value, writes the new value, then calls `OnMissionModeChange` on every `MissionBehavior` and `IMissionListener`, passing the old mode and `atStart`.

The transition is therefore a Mission lifecycle event with side effects. A behavior should clean up old-mode state in the callback and read the new `Mission.Mode`; it should not maintain an uncoordinated copy of the enum. Once the Mission is `Over`, the source still updates the value but does not notify listeners, so that call cannot restart a Mission.

## When to use it

Use it in Mission behaviors, Mission logic, or listeners to branch on `Deployment`, `Battle`, `Conversation`, and the other modes. Use `Mission.SetMissionMode` when all attached behaviors must observe a transition.

Do not replace the enum with guessed integer values, use it as a Campaign-wide state outside a Mission, or depend on a mode callback for cleanup after the Mission has entered `Over`. End/removal callbacks are the correct cleanup boundary.

## Values

| Value | Typical meaning |
|---|---|
| `StartUp` | Mission startup. |
| `Conversation` | Conversation inside a Mission. |
| `Battle` | Active battle. |
| `Duel` | Duel. |
| `Stealth` | Stealth or concealment mission. |
| `Barter` | Barter inside a Mission. |
| `Deployment` | Deployment before battle. |
| `Tournament` | Tournament mission. |
| `Replay` | Replay. |
| `CutScene` | Cutscene. |
| `Benchmark` | Benchmark run. |

The enum values have no `Apply` or save side effect by themselves. Side effects come from `Mission.SetMissionMode` and the behavior/listener code that handles its notification.

## Dependencies

- **Owner:** [`Mission`](../../mission/Mission) stores the current `Mode`.
- **Transition:** `Mission.SetMissionMode`; campaign missions can also forward this through [`ICampaignMission`](../../campaign/ICampaignMission).
- **Consumers:** [`MissionBehavior`](../../mission/MissionBehavior) and Mission listeners receive `OnMissionModeChange(oldMissionMode, atStart)`.
- **Initialization relation:** [`MissionInitializerRecord`](../MissionInitializerRecord) controls how a Mission opens; it does not control every runtime mode transition.

## Real example

Deployment code uses the real transition shape `SetMissionMode(MissionMode.Deployment, atStart: true)`.

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public sealed class DeploymentGate : MissionBehavior
{
    public void BeginDeployment()
    {
        Mission.Current.SetMissionMode(MissionMode.Deployment, atStart: true);
    }

    public override void OnMissionModeChange(
        MissionMode oldMissionMode, bool atStart)
    {
        // Mission has already stored the new value; read Mode for it.
        if (!atStart && oldMissionMode == MissionMode.Deployment &&
            Mission.Current.Mode == MissionMode.Battle)
        {
            // Release short-lived deployment state here.
        }
    }
}
```

`Mission.SetMissionMode` returns immediately when the old and new values match. If the Mission is already `Over`, it does not notify behaviors. Cleanup that must always run cannot depend only on this mode callback.

## Risks

1. `Mission.Current` can be `null` on the campaign map or after Mission cleanup; reads and transitions belong inside an active Mission lifecycle.
2. A transition during `Initializing`, `EndingNextFrame`, or `Over` can meet a behavior that is not ready or is already being removed. Do not use it to bypass lifecycle boundaries.
3. The `oldMissionMode` callback parameter is the old value. Read `Mission.Mode` for the new value; confusing the two sends behavior down the wrong branch.
4. `atStart` is not a substitute for checking whether the mode is `Battle`; it describes the transition's startup context.
5. Integer casts, cross-Mission cached modes, and forced transitions from Campaign ticks separate scene state from the actual Mission state.

## Navigation

- Parent: [core-extra index](../)
- Siblings: [`MissionInitializerRecord`](../MissionInitializerRecord) · [`MissionResult`](../MissionResult)
- Runtime entries: [`Mission`](../../mission/Mission) · [`MissionBehavior`](../../mission/MissionBehavior) · [`MissionLogic`](../../mission-ext/MissionLogic)
- Architecture: [developer roadmap](../../../architecture/developer-roadmap) · [documentation contract](../../../architecture/doc-contract)
