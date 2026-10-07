---
title: "AgentComponent"
description: "The per-agent behaviour mixin base: 21 all-virtual hooks the agent calls on itself, from per-tick updates to hits, mounts, discipline, formation changes, and removal."
---

# AgentComponent

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class AgentComponent`
**Base:** `object` — no base class, no interface
**Source:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AgentComponent.cs`

## One-line responsibility

It is the composition seam of the agent: instead of a single monolith `Agent` class with fifty responsibilities, every self-contained agent behaviour becomes a small object you attach, and the agent calls each attached object's hooks at the right moment.

## Mental model

The mental model is **an event sink with no return values**. Look at all 21 members: nineteen are `public virtual void`, and the only two that return anything are `GetMoraleAddition()` and `GetMoraleDecreaseConstant()`. There is not one boolean or "handled" return anywhere. An `AgentComponent` **cannot** veto or consume the event it is being told about — it observes and contributes, nothing more. If your logic needs to cancel a hit, suppress a mount, or reject an input, this is the wrong extension point, and no override signature will let you express it.

The constructor is `protected AgentComponent(Agent agent)` and it stores into `protected readonly Agent Agent`. That is the single reference a component gets; there is no `Mission` property, no `Team`, no `Formation`. If you need the mission, go through `Agent.Mission` yourself.

Every override is optional because every one has an empty body. That default-empty convention is what makes this type usable: a component that only cares about morale overrides two methods and inherits nineteen no-ops. The cost is that a misspelled override name fails silently — the class still compiles, still gets attached, still ticks, and simply never hears about anything. There is no `abstract` member forcing you to name the thing.

The lifecycle is agent-driven and you should know its order: `Initialize()` once after attach, then `OnTick` / `OnTickParallel` per frame, then assorted event hooks, then `OnComponentRemoved()` when the agent detaches or dies. `OnComponentRemoved()` is the one people forget, and it is the correct place to unsubscribe from static events — [`AgentHumanAILogic`](../AgentHumanAILogic) shows the mirror-image mistake, where a mission behavior subscribes and never unsubscribes.

Two members deserve special attention because their defaults are load-bearing rather than obviously zero. `GetMoraleDecreaseConstant()` returns `1f`, not `0f`. The meaning is a multiplier on morale loss, so `1f` means "normal decay"; if a component overrides it and returns `0f` thinking "no decrease", morale stops dropping entirely. Similarly `GetMoraleAddition()` returns `0f`, meaning "contribute nothing" — which is the intuitive reading and the correct one.

## Key members

| Member | Signature | What it is for |
| --- | --- | --- |
| `Agent` | `protected readonly Agent Agent` | The host, captured in the constructor and never reassigned. `readonly` on a `protected` field means a derived component can read it freely and cannot swap it — so a component is permanently bound to the agent it was constructed with. Constructing one component and attaching it to a second agent is impossible by type, though nothing stops you from calling `AddComponent` with a mismatched pair at runtime. `Agent.GetAgentFlags()` is public, so the raw flag set is readable from inside a component even though `Agent` itself is `protected`. |
| `Initialize` | `public virtual void Initialize()` | Called once after the component is attached. This is the correct place to subscribe to static mission events and to compute anything derived from the agent's current equipment or formation. Nothing about the agent's runtime state is guaranteed fresh before this point. |
| `OnTick` | `public virtual void OnTick(float dt)` | Per-frame update on the main thread. This is where per-frame cost accumulates, so anything here runs for every attached component on every agent — hundreds of times per frame in a full battle. Keep it to arithmetic; do not allocate. |
| `OnTickParallel` | `public virtual void OnTickParallel(float dt)` | A second per-frame slot with a different threading contract. It exists separately from `OnTick` so the engine can run one group in parallel and one group serially; putting cross-agent state in the wrong one is a race rather than a compile error. |
| `GetMoraleAddition` | `public virtual float GetMoraleAddition()` | Contributes a flat amount to the agent's morale. Returns `0f` by default, which means "contribute nothing". This is one of only two members that give you a channel back into the agent's own computation — every other hook is pure notification. |
| `GetMoraleDecreaseConstant` | `public virtual float GetMoraleDecreaseConstant()` | Scales morale loss, and the default is `1f`, **not** `0f`. `1f` means normal decay. Returning `0f` freezes morale decay entirely — a real and easily-mistaken foot-gun, because zero looks like "no contribution" here when it actually means "no decay at all". |
| `OnAIInputSet` | `public virtual void OnAIInputSet(ref Agent.EventControlFlag eventFlag, ref Agent.MovementControlFlag movementFlag, ref Vec2 inputVector)` | The AI steering hook, and the one place the three `ref` parameters are load-bearing. All three are `ref` because a component is expected to *modify* them: contribute to the event flag, add to the movement flag, or nudge the input vector. This is how steering pressure is layered onto an AI agent without replacing its behaviour tree. |
| `OnHit` | `public virtual void OnHit(Agent affectorAgent, int damage, in MissionWeapon affectorWeapon, in Blow b, in AttackCollisionData collisionData)` | Fires on the **victim** when it takes a hit. Note the argument shape differs from `MissionBehavior.OnAgentHit`, which takes the victim as its first parameter — here the receiver *is* the victim, so the first argument is the attacker. Confusing the two shapes is the most common bug when porting behavior. |
| `OnMount` / `OnDismount` | `public virtual void OnMount(Agent mount)` / `OnDismount(Agent mount)` | Mount-state transitions, with the mount passed in. These pair with [`AgentHumanAILogic`](../AgentHumanAILogic)'s `OnAgentMount`, which performs the mission-side reservation update — the component sees the transition, the behavior reconciles the mission. |
| `OnWeaponDrop` | `public virtual void OnWeaponDrop(MissionWeapon droppedWeapon)` | Fires on the agent that lost the weapon. Relevant to AI that must re-plan after losing its primary, and to anything tracking ammo. |
| `OnItemPickup` | `public virtual void OnItemPickup(SpawnedItemEntity item)` | Fires when the agent picks something up, carrying the spawned entity rather than a plain item reference. Note this is separate from `OnWeaponDrop`: the pickup path and the drop path are independent notifications, not one paired event. |
| `OnWeaponHPChanged` | `public virtual void OnWeaponHPChanged(ItemObject item, int hitPoints)` | Weapon durability reached zero. The event carries the item and its remaining hit points but no "before" value, so a component that needs the delta must cache the previous value itself. |
| `OnDisciplineChanged` | `public virtual void OnDisciplineChanged()` | Fires when the agent's formation discipline state changes. No payload at all — read the agent's discipline state if you need details. |
| `OnRetreating` | `public virtual void OnRetreating()` | The agent has begun to retreat. Not the same as `IsRetreating` on `CommonAIComponent`: this is the transition notification, that one is the state. |
| `OnFormationSet` | `public virtual void OnFormationSet()` | Fires when the agent is assigned to a formation. The place to react to being moved between formations, which happens often enough in battle that caching formation-derived state here is worth it. |
| `OnAgentTeleported` | `public virtual void OnAgentTeleported()` | The agent was moved by a teleport rather than by walking. Movement-dependent logic must distinguish this from ordinary movement or a teleporting agent will register impossible velocity. |
| `OnStopUsingGameObject` | `public virtual void OnStopUsingGameObject()` | The agent released a world entity it was operating — a lever, a chest, a siege engine. Pair it with your own "started using" hook if you track interactions. |
| `OnAgentRemoved` | `public virtual void OnAgentRemoved()` | The agent is being destroyed. Fires on the component while the agent is still reachable, which makes it the last safe point to read agent state. |
| `OnComponentRemoved` | `public virtual void OnComponentRemoved()` | **This** component specifically was detached, as opposed to the whole agent going away. Unsubscribe from static events here. It is easy to confuse with `OnAgentRemoved` and the consequence of getting it backwards is a leak that only shows up on mission teardown. |

## Dead members and traps

Sibling virtuals on the same class are dispatched by Agent; this one is dispatched nowhere.

| `Member` | Declaration | override | Call sites | Verdict | Notes |
|---|---|---:|---:|---|---|
| `OnDisciplineChanged` | bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AgentComponent.cs:69 | 0 | 0 times (0 lines, re-verified) | MEASURED | `public virtual void`, yet the name occurs exactly once in the tree — its own declaration. Positive control: sibling `OnAgentRemoved` (:73) is dispatched at Agent.cs:5156, so this class's virtuals do get called; this particular callback is simply not wired. |

## Real example

A minimal component: attach it, contribute morale, and clean up after itself.

```csharp
public class MyStandingBuffComponent : AgentComponent
{
    private AgentFlag _flagsAtAttachTime;

    public MyStandingBuffComponent(Agent agent)
        : base(agent)
    {
    }

    public override void Initialize()
    {
        this._flagsAtAttachTime = this.Agent.GetAgentFlags();
    }

    public override float GetMoraleAddition()
    {
        if (!this.Agent.IsActive())
        {
            return 0f;
        }

        return this.Agent.HasMount ? 5f : 0f;
    }

    public override void OnDisciplineChanged()
    {
        this._flagsAtAttachTime = this.Agent.GetAgentFlags();
    }

    public override void OnComponentRemoved()
    {
        this._flagsAtAttachTime = 0;
    }
}
```

`GetAgentFlags()` is public on `Agent`, so a component can snapshot the flag set and diff it later. Note that `Mission` exposes no public static `OnEndMission` event to subscribe to in 1.4.5 — the only public event of that shape is the per-instance `Mission.IsBattleInRetreatEvent`, which is a `Func<bool>`. If your component really needs to unsubscribe from something, pick the event deliberately rather than assuming a symmetric pair exists.

Layering steering pressure onto an AI agent — the one place `ref` parameters are the point:

```csharp
public class MyPressForwardComponent : AgentComponent
{
    public MyPressForwardComponent(Agent agent)
        : base(agent)
    {
    }

    public override void OnAIInputSet(
        ref Agent.EventControlFlag eventFlag,
        ref Agent.MovementControlFlag movementFlag,
        ref Vec2 inputVector)
    {
        if (this.Agent.GetAgentFlags() == 0)
        {
            return;
        }

        inputVector.y += 0.25f;
    }
}
```

Attaching and detaching components, and reading one back:

```csharp
public class MyComponentInstaller : MissionLogic
{
    public override void OnAgentCreated(Agent agent)
    {
        if (!agent.IsAIControlled)
        {
            return;
        }

        agent.AddComponent(new MyPressForwardComponent(agent));
    }

    public override void OnAgentRemoved(
        Agent affectedAgent,
        Agent affectorAgent,
        AgentState agentState,
        KillingBlow killingBlow)
    {
        MyPressForwardComponent component = affectedAgent.GetComponent<MyPressForwardComponent>();
        if (component != null)
        {
            affectedAgent.RemoveComponent(component);
        }
    }
}
```

`RemoveComponent` returns `bool`, so the `!= null` guard above is belt-and-braces rather than required. The important half is that removing it fires `OnComponentRemoved`, which is where the static subscription is dropped.

## Risks and boundaries

1. **Every hook is void; nothing can be vetoed.** There is no `bool` return anywhere except the two morale getters. A component that needs to cancel an event cannot do it here — you need the mission behavior layer or a model instead.
2. **A misspelled override compiles and silently never fires.** All 21 members are `virtual` with empty bodies, so nothing forces you to spell a name correctly. A component attached and ticking but never receiving `OnFormationSet` is almost always a typo, not a lifecycle bug.
3. **`GetMoraleDecreaseConstant` defaults to `1f`.** Returning `0f` does not mean "contribute nothing" — it means morale never decays. Read the multiplicative intent before touching it.
4. **`OnHit` has a different argument order from `MissionBehavior.OnAgentHit`.** On the component the receiver is the victim and the first parameter is the *attacker*; on the behavior the first parameter is the *victim*. Porting code between the two without swapping the arguments compiles cleanly and attacks the wrong agent.
5. **`OnAgentRemoved` and `OnComponentRemoved` are different events.** The first means the agent died or despawned; the second means only this component was detached. Unsubscribe in the second, and do it in both.
6. **`OnAIInputSet` mutates three `ref` parameters across a possibly-parallel tick.** Writing shared state from it races. `OnTick` and `OnTickParallel` are separate slots with different threading contracts; do not assume `OnTickParallel` is single-threaded.
7. **No `Mission` back-reference.** The constructor receives only an `Agent`. Everything mission-scoped has to be reached through `Agent.Mission` or the static `Mission.Current`, which reintroduces the global dependency you were avoiding.
8. **Nothing is serialized.** Components live for the mission and are rebuilt on load. Do not store anything you expect to survive a save — use a campaign object instead.
9. **`Agent` is `protected`, not `public`.** External code cannot read the host reference off a component it did not construct. Expose what you need via your own property if another type must see it.

## Dependencies

- **Host:** [`Agent`](../../mission/Agent) constructs the component, calls its hooks, and owns its lifetime through `AddComponent` / `RemoveComponent` / `GetComponent<T>`.
- **Peer components:** [`CommonAIComponent`](../CommonAIComponent) and [`HumanAIComponent`](../HumanAIComponent) are both `AgentComponent` subclasses and are the reference implementations of this pattern.
- **Attach logic:** [`AgentCommonAILogic`](../AgentCommonAILogic) and [`AgentHumanAILogic`](../AgentHumanAILogic) decide when a component exists; they are [`MissionLogic`](../MissionLogic) subclasses.
- **Hook payload types:** [`SpawnedItemEntity`](../SpawnedItemEntity), [`MissionWeapon`](../MissionWeapon), [`Blow`](../Blow), [`AttackCollisionData`](../AttackCollisionData), and [`ItemObject`](../../core-extra/ItemObject) appear in the signatures.
- **Callback declarations:** [`MissionBehavior`](../../mission/MissionBehavior) declares the mission-level equivalents of several of these hooks, with different argument shapes.
- Bucket home: [mission-ext API section](../)