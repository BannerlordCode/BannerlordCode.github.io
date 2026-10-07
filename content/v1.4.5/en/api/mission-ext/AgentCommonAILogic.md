---
title: "AgentCommonAILogic"
description: "The mission behavior that keeps a CommonAIComponent attached to exactly the agents the AI is currently driving, adding and removing it as controller ownership flips."
---

# AgentCommonAILogic

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class AgentCommonAILogic : MissionLogic`
**Base:** `MissionLogic`
**Source:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AgentCommonAILogic.cs`

## One-line responsibility

It is the attach/detach switch for every soldier-level AI in the mission: the common morale, panic, retreat, and reservation state lives in a `CommonAIComponent`, and this behavior is the only thing that guarantees that component exists exactly while the AI owns that agent.

## Mental model

There is exactly **one** class that decides whether a `CommonAIComponent` exists, and it is 31 lines long. Read those 31 lines as a two-input truth table driven by two callbacks, and the whole thing becomes obvious.

`OnAgentCreated` fires once, at spawn, and asks a single question: `agent.IsAIControlled`. If true, attach. There is no `IsActive()` check here and no `IsHuman` check — a freshly created agent that is AI-controlled gets the component unconditionally, because a just-created agent is by definition active and this logic does not care whether it is a humanoid.

`OnAgentControllerChanged` fires every time ownership moves, and it carries the **old** controller in its parameter. That parameter is the whole mechanism:

| `oldController` | new `agent.Controller` | Action |
| --- | --- | --- |
| `AI` | `AI` | `AddComponent(new CommonAIComponent(agent))` — a **second** component. See the trap below. |
| not `AI` | `AI` | attach |
| `AI` | not `AI` | `RemoveComponent(agent.CommonAIComponent)` if non-null |
| not `AI` | not `AI` | nothing |

Two details are easy to miss and both matter. First, the attach branch is guarded by `agent.IsActive()` at the top of the method — a dead or already-removed agent never gains a component on transfer. Second, the guard conditions are **asymmetric between the two callbacks**: creation checks `IsAIControlled` but not `IsHuman`, while transfer checks `IsActive()` but not `IsAIControlled`. That is deliberate — `IsAIControlled` is a *cached* flag on the agent that may not have been refreshed yet during a controller handoff, whereas `Controller == AgentControllerType.AI` is the live authority. Use `Controller`, not `IsAIControlled`, when you need the truth.

The trap worth naming: in the `AI` → `AI` row the component is attached again. Nothing checks whether one is already attached, and `Agent.AddComponent` does not reject duplicates. If your code ever re-triggers `OnAgentControllerChanged` with `AI` as the old controller, you get two `CommonAIComponent`s on one agent, both ticking, both writing morale — and `agent.CommonAIComponent` will point at whichever was assigned last, so `RemoveComponent(agent.CommonAIComponent)` later cleans up only one of them. The engine's own flow does not hit this because a controller *change* to the value it already holds is not a real transition. Do not synthesise one.

The engine installs this behavior for you. `MissionState.cs:329` does `list.Add(new AgentCommonAILogic())` when building the standard behavior list, so in a normal battle it is already attached and your own `AddMissionBehavior` call for the same type would produce a second, duplicate copy that races the first one to attach components.

## Key members

| Member | Signature | What it is for |
| --- | --- | --- |
| `OnAgentCreated` | `public override void OnAgentCreated(Agent agent)` | The spawn-time attach. Reads `agent.IsAIControlled` once and, if true, attaches a fresh `CommonAIComponent`. This is the *only* place a brand-new agent gets AI state, so an agent spawned after mission start is not covered by any other path. |
| `OnAgentControllerChanged` | `protected internal override void OnAgentControllerChanged(Agent agent, AgentControllerType oldController)` | The transfer-time attach/detach. `protected internal` means a derived class elsewhere can override it but external code cannot call it — controller changes are raised by the agent, never by you. The `oldController` parameter is what distinguishes "just became AI" from "just stopped being AI". |
| `IsActive()` (used, not declared) | `agent.IsActive()` | Gate on the transfer path only. Filters out agents that are mid-removal, so a controller handoff during a death or a mission teardown does not resurrect AI state on a corpse. |
| `CommonAIComponent` (on `Agent`) | `public CommonAIComponent CommonAIComponent { get; private set; }` | The single-slot back-reference this behavior writes through `AddComponent`/`RemoveComponent`. Read it to get the morale, panic, and reservation state; never assign it. |
| `RemoveComponent` return value | `public bool RemoveComponent(AgentComponent agentComponent)` | Returns `bool`. This logic ignores the return, so a failed removal is silent — if `CommonAIComponent` was never attached, the detach branch simply does nothing and the agent walks away with stale state rather than erroring. |

## Dead members and traps

Dead-member status on this page is unknown: every member here falls under UNSUPPORTED (ambiguous multiple declarers, among other causes), so the call-site count must not be read as a conclusion; no call site could be confirmed by an independent probe this pass.

## Real example

Reading the morale this logic maintains, from any other mission behavior:

```csharp
public class MyMoraleProbeBehavior : MissionLogic
{
    public override void OnMissionTick(float dt)
    {
        if (Mission.Current.MainAgent == null)
        {
            return;
        }

        CommonAIComponent commonAi = Mission.Current.MainAgent.CommonAIComponent;
        if (commonAi == null)
        {
            Debug.Print("main agent is not AI-driven, no common AI state", 0);
            return;
        }

        if (commonAi.IsPanicked)
        {
            Debug.Print("panicked, morale = " + commonAi.Morale, 0);
        }
    }
}
```

Reimplementing the same attach rule in your own logic, which is what you do when you need the component installed *earlier* than the standard list does:

```csharp
public class MyEarlyAIAttacher : MissionLogic
{
    public override void OnAgentCreated(Agent agent)
    {
        if (agent.IsAIControlled && agent.CommonAIComponent == null)
        {
            agent.AddComponent(new CommonAIComponent(agent));
        }
    }

    protected internal override void OnAgentControllerChanged(Agent agent, AgentControllerType oldController)
    {
        if (!agent.IsActive())
        {
            return;
        }

        if (agent.Controller == AgentControllerType.AI && oldController != AgentControllerType.AI)
        {
            agent.AddComponent(new CommonAIComponent(agent));
        }
        else if (oldController == AgentControllerType.AI && agent.CommonAIComponent != null)
        {
            agent.RemoveComponent(agent.CommonAIComponent);
        }
    }
}
```

The `oldController != AgentControllerType.AI` guard in the middle is the one the engine's own version omits. Keep it in yours; see the trap above.

## Risks and boundaries

1. **The engine already installs this.** `MissionState.cs:329` adds it to the standard behavior list. Adding your own instance produces two copies racing to attach, and the duplicate-component bug is a direct consequence.
2. **`AI` → `AI` attaches twice.** The attach branch does not check `agent.CommonAIComponent != null`. Any synthetic controller change with `AI` as the old value yields two components on one agent, and the later `RemoveComponent` cleans up only one.
3. **Not thread-safe and not idempotent.** Neither callback is guarded against re-entry. Callbacks that mutate `agent.Controller` from inside `OnAgentCreated` will re-enter `OnAgentControllerChanged` before the outer call finishes.
4. **`OnAgentControllerChanged` is `protected internal`.** You can override it in a subclass but you cannot invoke it. There is no public "tell the AI logic the controller changed" entry point — the agent raises it.
5. **It attaches components to agents it does not own.** The check is `IsAIControlled`, which is true for mission enemies as well as for the player's companions. Do not assume `CommonAIComponent != null` means "friendly soldier".
6. **Attachment order matters for other behaviors.** `CommonAIComponent`'s constructor reads `Mission.Current.CurrentTime` and `agent.Monster.BodyCapsuleRadius` at construction time. Attaching outside a mission context throws.
7. **Removal ignores the `bool` result.** `RemoveComponent` returning `false` (never attached) is swallowed. This is why the `!= null` guard exists — it prevents passing `null`, not because the return value matters.
8. **Scope is morale, not pathfinding.** `CommonAIComponent` handles morale, panic, retreat distance, and rider reservation. Behaviour trees and movement live in the mission's behaviour list, not here.

## Dependencies

- **Base contract:** [`MissionLogic`](../MissionLogic) supplies the `Mission` back-reference and classifies this behavior as a rules participant.
- **Attached component:** [`CommonAIComponent`](../CommonAIComponent) is the `AgentComponent` this logic owns the lifetime of — morale, panic, retreat, rider reservation.
- **Agent surface:** [`Agent`](../../mission/Agent) `AddComponent` / `RemoveComponent` / `GetComponent<T>` / `IsAIControlled` / `IsActive` / `Controller`.
- **Callback declarations:** [`MissionBehavior`](../../mission/MissionBehavior) declares `OnAgentCreated` and the `protected internal virtual OnAgentControllerChanged`.
- **Sibling logic:** [`AgentHumanAILogic`](../AgentHumanAILogic) does the same job for the humanoid behaviour tree, with a different guard set.
- **Installation site:** `MissionState.cs:329` adds this behavior to the standard list.
- Bucket home: [mission-ext API section](../)