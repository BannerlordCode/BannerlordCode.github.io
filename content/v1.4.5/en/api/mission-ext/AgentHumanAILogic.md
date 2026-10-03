---
title: "AgentHumanAILogic"
description: "The mission behavior that owns HumanAIComponent's lifetime for humanoid agents and re-syncs mount reservations every time a rider mounts up."
---

# AgentHumanAILogic

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class AgentHumanAILogic : MissionLogic`
**Base:** `MissionLogic`
**Source:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AgentHumanAILogic.cs`

## One-line responsibility

It is the humanoid half of the AI attachment pair: while the AI drives a humanoid agent this behavior keeps a `HumanAIComponent` on it, and separately it tells the mission to re-reserve a mount slot whenever a rider mounts.

## Mental model

Compare this class against [`AgentCommonAILogic`](./AgentCommonAILogic) line by line and the design becomes obvious in three differences.

**Difference one — the gate is `IsHuman`, not `IsAIControlled`.** `OnAgentCreated` attaches when `agent.IsAIControlled && agent.IsHuman`. `IsHuman` reads `(GetAgentFlags() & AgentFlag.IsHumanoid) != 0` on the agent, so it is a property of what the agent *is*, not who is driving it. That is why the transfer callback can safely check only `IsHuman` and still be correct: if the agent is not humanoid, attaching a humanoid behaviour-tree component would be pointless, so the whole method early-outs.

**Difference two — the transfer path drops the `IsActive()` check.** `AgentCommonAILogic` guards `OnAgentControllerChanged` with `agent.IsActive()`; this class guards with `agent.IsHuman` only. Whether that is an oversight or a deliberate bet on mount-reservation ordering cannot be determined from the 1.4.5 source alone — there is no comment, and the class is 37 lines with no other context. If you depend on the difference, verify it at runtime rather than trusting the source shape.

**Difference three — the extra mount hook.** `OnAgentMount` calls `Mission.Current.UpdateMountReservationsAfterRiderMounts(agent, agent.MountAgent)` with no guard at all. Not `IsActive()`, not `IsHuman`, not a null check on `MountAgent`. This runs for every rider that mounts during the mission, human or not, and it hands the mission a possibly-null `agent.MountAgent`. This is the single most surprising member in the class and the reason it is more than a copy of the common logic: it is a global mount-reservation re-sync smuggled into an AI behavior.

The attach/detach state machine is otherwise identical to the common logic, including the same unguarded `AI` → `AI` double-attach: `OnAgentControllerChanged` calls `AddComponent(new HumanAIComponent(agent))` whenever `agent.Controller == AgentControllerType.AI`, without comparing against `oldController` first. A synthetic controller change that reports `AI` as the previous value attaches a second component.

The engine installs this behavior in three places — `BannerlordMissions.cs:138`, `:210`, and `:279` all construct `new AgentHumanAILogic()` — while the common logic comes from `MissionState.cs:329`. So `HumanAIComponent` is attached by the mission-type-specific lists and `CommonAIComponent` by the shared state list; that is why you sometimes see one without the other in edge-case mission setups.

## Key members

| Member | Signature | What it is for |
| --- | --- | --- |
| `OnAgentCreated` | `public override void OnAgentCreated(Agent agent)` | Spawn-time attach, gated on `IsAIControlled && IsHuman`. A humanoid that the player controls deliberately never gets a `HumanAIComponent` at creation — the component arrives later, via the transfer callback, if the controller ever flips to AI. |
| `OnAgentControllerChanged` | `protected internal override void OnAgentControllerChanged(Agent agent, AgentControllerType oldController)` | Transfer-time attach/detach, gated on `IsHuman` instead of `IsActive()`. Attaches whenever the new controller is `AI`; detaches `agent.HumanAIComponent` when the previous controller was `AI`. Both paths are null-guarded on the read side. |
| `OnAgentMount` | `public override void OnAgentMount(Agent agent)` | The reason this class exists alongside the common one. Calls `Mission.Current.UpdateMountReservationsAfterRiderMounts(agent, agent.MountAgent)` so the mission re-sorts which mount is spoken for after a rider mounts. Fires for every rider, human or not, and passes `agent.MountAgent` unguarded. |
| `IsHuman` (used) | `agent.IsHuman => (GetAgentFlags() & AgentFlag.IsHumanoid) != 0` | The structural gate. Not "is a human character" in the campaign sense — it is the humanoid skeleton flag, which horses and other mounts fail and which a humanoid-shaped mount may pass. |
| `HumanAIComponent` (on `Agent`) | `public HumanAIComponent HumanAIComponent { get; private set; }` | Single-slot back-reference written by `AddComponent`/`RemoveComponent`. Holds the behaviour-tree parameters, the item-pickup state machine, and the formation-movement controller. |
| `UpdateMountReservationsAfterRiderMounts` (on `Mission`) | `public void UpdateMountReservationsAfterRiderMounts(Agent rider, Agent mount)` | The mission-side operation `OnAgentMount` triggers. Two arguments, both agents, no return value — it mutates mission bookkeeping rather than answering a question. |

## Real example

Checking whether the humanoid behaviour tree is even present before you poke at it:

```csharp
public class MyHumanAIProbe : MissionLogic
{
    public override void OnAgentControllerChanged(Agent agent, AgentControllerType oldController)
    {
        if (!agent.IsHuman)
        {
            return;
        }

        HumanAIComponent humanAi = agent.HumanAIComponent;
        Debug.Print(
            "agent " + agent.Index + " humanoid=" + agent.IsHuman +
            " ai-driven=" + (agent.Controller == AgentControllerType.AI) +
            " component=" + (humanAi != null),
            0);
    }
}
```

Re-doing the mount reservation yourself, guarded the way the shipped version is not:

```csharp
public class MyGuardedMountLogic : MissionLogic
{
    public override void OnAgentMount(Agent agent)
    {
        if (agent.MountAgent == null)
        {
            return;
        }

        Mission.Current.UpdateMountReservationsAfterRiderMounts(agent, agent.MountAgent);
        Debug.Print("mount reservations refreshed for agent " + agent.Index, 0);
    }
}
```

Adding your own behaviour parameters to an AI-driven humanoid, using the `SetAIBehaviorParams` surface on the agent:

```csharp
public class MyBehaviourTweak : MissionLogic
{
    public override void OnAgentControllerChanged(Agent agent, AgentControllerType oldController)
    {
        if (oldController == AgentControllerType.AI || !agent.IsHuman)
        {
            return;
        }

        agent.SetAIBehaviorParams(HumanAIComponent.AISimpleBehaviorKind.Melee, 0f, 0f, 0f, 0f, 0f);
    }
}
```

## Risks and boundaries

1. **The engine already installs this in three places.** `BannerlordMissions.cs:138`, `:210`, `:279`. A fourth copy from your own `AddMissionBehavior` means four attachers racing on the same agent, and therefore up to four `HumanAIComponent`s.
2. **`OnAgentMount` has no guards at all.** No `IsHuman`, no `IsActive`, no null check on `agent.MountAgent`, and it reads `Mission.Current` directly. Any behaviour of yours that forces a mount on a dummy or a removed agent will run this path.
3. **`AI` → `AI` double-attach.** Same as the common logic: the attach branch never compares `oldController` against the new controller before adding. Synthesise that transition only in a test harness, never in shipped code.
4. **`IsHuman` is a flag, not a decision.** It is `AgentFlag.IsHumanoid`. A humanoid mount will pass this gate and receive a humanoid behaviour tree; a horse-shaped humanoid would too. Do not use it to decide "is this a soldier".
5. **`OnAgentControllerChanged` is `protected internal`.** Overridable in a subclass, not callable from outside. The agent raises it.
6. **The `IsActive()` difference from `AgentCommonAILogic` is unexplained.** This class's transfer path can attach a component to an inactive agent where the common logic would not. Whether that is safe cannot be determined from the 1.4.5 source; if it matters to your mod, test it.
7. **`Mission.Current` dependency.** `OnAgentMount` dereferences the static current mission. In mission-editor or pre-mission contexts this is null.
8. **Component lifetime, not behaviour.** This class manages *whether* a `HumanAIComponent` exists. It does not configure the behaviour tree, does not set formation movement, and does not affect pathfinding — those are the component's own job.

## Dependencies

- **Base contract:** [`MissionLogic`](./MissionLogic) supplies the `Mission` back-reference and the rules-participant classification.
- **Attached component:** [`HumanAIComponent`](../HumanAIComponent) is the humanoid behaviour tree this logic owns; it also declares the nested `AISimpleBehaviorKind` enum used by `SetAIBehaviorParams`.
- **Agent surface:** [`Agent`](../../mission/Agent) `AddComponent` / `RemoveComponent` / `IsHuman` / `Controller` / `MountAgent` / `SetAIBehaviorParams`.
- **Mission surface:** [`Mission`](../../mission/Mission) `UpdateMountReservationsAfterRiderMounts` and `Mission.Current`.
- **Callback declarations:** [`MissionBehavior`](../../mission/MissionBehavior) declares `OnAgentCreated`, `OnAgentMount`, and `OnAgentControllerChanged`.
- **Sibling logic:** [`AgentCommonAILogic`](./AgentCommonAILogic) covers morale and retreat for every agent, human or not.
- **Installation sites:** `BannerlordMissions.cs:138`, `:210`, `:279`.
- Bucket home: [mission-ext API section](../)