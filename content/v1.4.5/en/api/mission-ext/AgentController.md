---
title: "AgentController"
description: "A per-agent out-of-band driver: an attachable object that owns the agent's reference and mission handle and performs its own per-frame work outside the component system."
---

# AgentController

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class AgentController`
**Base:** `object` — no base class, no interface
**Source:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AgentController.cs`

## One-line responsibility

It is the sibling of [`AgentComponent`](./AgentComponent) for behaviour that needs to be *pulled* rather than *pushed*: the agent never calls it, so the controller drives itself each frame and reaches back through `Owner` whenever it wants.

## Mental model

The type is twelve lines: two auto-properties and one empty `virtual` method. The mental model has to come from the attach protocol, so read `Agent.AddController(Type)` at `Agent.cs:4054` and the type becomes obvious:

```csharp
AgentController agentController = Activator.CreateInstance(type) as AgentController;
agentController.Owner = this;
agentController.Mission = Mission;
_agentControllers.Add(agentController);
agentController.OnInitialize();
```

Four consequences follow, and each one is a constraint you must design around.

**It is constructed by reflection from a `System.Type`, not by you.** `AddController` takes a `Type`, calls the parameterless `Activator.CreateInstance`, and casts. That means your controller **must have a public parameterless constructor** — no constructor arguments, ever. Anything the controller needs must arrive later through `Owner`, `Mission`, or `OnInitialize`.

**`OnInitialize()` is called exactly once, immediately after attachment.** The agent populates `Owner` and `Mission` *before* calling it, which is why `ArcheryTournamentAgentController.OnInitialize` can safely do `Mission.Current.GetMissionBehavior<TournamentArcheryMissionController>()` — both handles are already valid. There is no `OnTick` in the base class. The base class does nothing for you after initialization; if your controller needs per-frame work you declare your own `OnTick` and call it yourself, because **nothing in `Agent` will call it for you**. That is the real difference from `AgentComponent`, where the agent pushes `OnTick` into every attached component.

**`Owner` and `Mission` are `{ get; set; }`, not `{ get; private set; }`.** Both are publicly writable on a `protected`-free, open class. You can repoint a controller at a different agent or mission, and nothing validates it. That is the same class of foot-gun as the public setter on [`ItemComponent`](../../core-extra/ItemComponent)'s `Item`, and it has the same shape of consequence: a repointed controller quietly operates on the wrong owner.

**`AddController` returns `null` rather than throwing** if the type is not a subclass of `AgentController` or the activator fails. And it returns the base-typed `AgentController`, so retrieving a specific subclass means a second cast or a call to `Agent.GetController<T>()`.

One naming caution that will bite you: `Agent.Controller` is an `AgentControllerType` **enum** describing *who is driving* the agent (`AI`, `Player`, `Agent`). It is not the `AgentController` object. `AddController` attaches the object; `Controller` reports the driving mode. Reading one when you want the other compiles fine because the enum and the class are unrelated types — it fails at the point of use, not at the call.

## Key members

| Member | Signature | What it is for |
| --- | --- | --- |
| `Owner` | `public Agent Owner { get; set; }` | Back-reference to the agent this controller drives, assigned by `Agent.AddController` immediately before `OnInitialize`. **The setter is public with no validation** — repointing it at a different agent silently redirects every subsequent operation, with no assertion and no event. Treat it as read-only in your own code. |
| `Mission` | `public Mission Mission { get; set; }` | The mission the controller belongs to, also assigned by `AddController` before `OnInitialize`. Note that the real tournament controllers still reach for the static `Mission.Current` rather than this property, so both routes work and only one is safe when more than one mission exists. |
| `OnInitialize` | `public virtual void OnInitialize()` | The one hook the base class provides, and it is called exactly once by `AddController`. This is the correct place to resolve mission behaviors, cache references, and register state — by the time it runs, `Owner` and `Mission` are populated but nothing else is guaranteed. The default body is empty, so overriding it is entirely optional. |

## Real example

A controller in the shape `AddController` actually requires — public parameterless constructor, everything resolved in `OnInitialize`:

```csharp
public class MyFacingController : AgentController
{
    private Agent _cachedOwner;

    public override void OnInitialize()
    {
        this._cachedOwner = this.Owner;
        Debug.Print("controller attached to agent " + this._cachedOwner.Index, 0);
    }

    public void FaceNearestEnemy()
    {
        Agent self = this.Owner;
        if (self == null || !self.IsActive())
        {
            return;
        }

        Agent nearest = null;
        float nearestDistance = float.MaxValue;

        foreach (Agent candidate in Mission.Current.Agents)
        {
            if (candidate == self || !candidate.IsActive() || candidate.Team == self.Team)
            {
                continue;
            }

            float distance = candidate.Position.Distance(self.Position);
            if (distance < nearestDistance)
            {
                nearestDistance = distance;
                nearest = candidate;
            }
        }

        if (nearest != null)
        {
            Vec2 direction = nearest.Position.AsVec2 - self.Position.AsVec2;
            self.LookDirection = new Vec3(direction.x, direction.y, 0f);
        }
    }
}
```

`Agent` has no `SetLookAtDirection` method in 1.4.5. The look direction is the settable `Agent.LookDirection` (`Vec3`, declared at `Agent.cs:1453`), and the angle form is the `LookDirectionAsAngle` property. Distance is `Vec3.Distance(Vec3)`, an instance method on the value type.

Attaching it — note the `Type` argument and the null check, because `AddController` returns `null` rather than throwing:

```csharp
public class MyControllerInstaller : MissionLogic
{
    public override void OnAgentCreated(Agent agent)
    {
        AgentController controller = agent.AddController(typeof(MyFacingController));
        if (controller == null)
        {
            Debug.Print("controller type rejected by Agent.AddController", 0);
        }
    }

    public override void OnMissionTick(float dt)
    {
        Agent main = Mission.Current.MainAgent;
        if (main == null)
        {
            return;
        }

        MyFacingController facing = main.GetController<MyFacingController>();
        if (facing != null)
        {
            facing.FaceNearestEnemy();
        }
    }
}
```

The `OnMissionTick` half is the point of this pattern: because the base class has no `OnTick`, someone has to drive the controller. That someone is a mission behavior, which means the controller's per-frame cost is opt-in rather than automatic — the opposite of [`AgentComponent`](./AgentComponent), where attaching is enough.

## Risks and boundaries

1. **A public parameterless constructor is mandatory.** `AddController(Type)` uses `Activator.CreateInstance`. A controller with a required constructor parameter will be rejected and `AddController` will return `null`. This is the single most common reason a custom controller silently fails to attach.
2. **Nothing calls your `OnTick`.** There is no tick hook on the base class and the agent does not poll controllers. Declare one and drive it from a mission behavior, or it never runs.
3. **`Owner` and `Mission` have public setters and no validation.** Repointing either silently redirects the controller. There is no invariant check and no event, so a mistake shows up as behaviour in the wrong place rather than as an exception.
4. **`AddController` returns the base type.** It is declared `public AgentController AddController(Type type)`, so recovering your subclass needs either a cast or `Agent.GetController<T>()`, which scans the agent's controller list by type.
5. **Failure is silent.** A type that is not a subclass of `AgentController`, or one the activator cannot construct, yields `null` — not an exception. Always check the return value.
6. **`Agent.Controller` is not this type.** It is the `AgentControllerType` enum describing who is driving the agent. The class and the enum share a name prefix and nothing else; reading one where you want the other compiles and fails at use.
7. **Multiple controllers of the same type can coexist.** `AddController` appends to a list and does not check for duplicates, while `RemoveController(Type)` removes the first match. Adding twice and removing once leaves an orphan controller that `GetController<T>` may or may not surface depending on ordering.
8. **There is no disposal hook.** No `OnRemove`, no finaliser. A controller that subscribes to anything must unsubscribe from wherever it drives itself, because the agent will not tell it when it is detached.
9. **Not serialized.** Controllers live inside a mission. Nothing here reaches a savegame.

## Dependencies

- **Host:** [`Agent`](../../mission/Agent) owns the controller list; `AddController(Type)`, `RemoveController(Type)`, and `GetController<T>()` are the three operations that matter.
- **Reflection constraint:** the activator requirement comes from `Agent.AddController`, not from this file — read both together.
- **Sibling pattern:** [`AgentComponent`](./AgentComponent) is the push-based counterpart; same attachment lifetime, opposite call direction.
- **Reference implementations:** `ArcheryTournamentAgentController`, `JoustingAgentController`, and `TownHorseRaceAgentController` in the SandBox tournaments module are the only in-tree subclasses and all follow the public-parameterless-constructor shape.
- **Mission data:** [`Mission`](../../mission/Mission) is assigned by the attach path, which is why [`AgentCommonAILogic`](./AgentCommonAILogic) can resolve mission behaviors the same way.
- Bucket home: [mission-ext API section](../)