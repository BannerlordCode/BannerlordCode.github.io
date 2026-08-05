---
title: "UsableMissionObjectComponent"
description: "Lifecycle extension component for usable Mission objects, covering focus, use, reset, editor validation, and optional ticking."
---
# UsableMissionObjectComponent

**Namespace:** `TaleWorlds.MountAndBlade`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public abstract class UsableMissionObjectComponent`  
**Base:** none  
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/UsableMissionObjectComponent.cs`

## One-line responsibility

This class is the small, owner-controlled extension point for adding reusable behavior to a [`UsableMissionObject`](../UsableMissionObject) without replacing its Agent and network lifecycle.

## Mental model

The component has no independent Mission registration. A usable object owns a private list of components; `AddComponent` appends the component, calls `OnAdded(Scene)`, and recalculates the owner's tick requirement. `RemoveComponent` calls `OnRemoved`, removes it, and recalculates again. Every other callback is dispatched by the owner or, for `OnMissionObjectDisabled`, by the `UsableMachine` disable path.

Use a component for orthogonal interaction behavior such as telemetry, a local animation trigger, validation, or a small reusable use rule. Use a derived [`UsableMissionObject`](../UsableMissionObject) when you need to change ownership, Agent selection, child-entity discovery, or the main use workflow. Do not assume a component is a `MissionBehavior`, a saveable object, or a network endpoint: it receives the owner's callbacks and must keep any durable campaign consequence in the proper Campaign layer.

## Dependencies

[`UsableMissionObject`](../UsableMissionObject) owns the component list and is the only normal acquisition path. It supplies the [`Mission`](../../mission/Mission) Scene, dispatches Agent callbacks, and decides whether `OnTick` is needed. The component inherits scene identity and network context indirectly from [`MissionObject`](../MissionObject) and [`SynchedMissionObject`](../SynchedMissionObject); it does not register or serialize itself.

## Callback contract

- `OnAdded(Scene scene)` runs when the component is attached. Cache scene-local resources here; the owner passes its current Scene.
- `OnRemoved()` runs when explicitly removed and when the owner is removed. Release native or Agent references here and make the method idempotent.
- `OnFocusGain(Agent userAgent)` and `OnFocusLose(Agent userAgent)` mirror the owner's focus transitions. They are notifications, not permission to claim `UserAgent`.
- `IsOnTickRequired()` defaults to `false`. Return `true` only while the component needs `OnTick(float dt)`; the owner uses the answer in `GetTickRequirement()`.
- `OnTick(float dt)` runs on the owner's normal tick path when ticking is requested. `OnEditorTick` and `OnEditorValidate` are the corresponding editor hooks.
- `OnUse(Agent userAgent)` runs during the authoritative `UsableMissionObject.OnUse` path before the owner assigns its `UserAgent`. `OnUseStopped(Agent userAgent, bool isSuccessful)` runs when use ends and receives the outcome.
- `OnMissionReset()` runs during Mission object reset for scene objects. `OnMissionObjectDisabled()` is a special notification used by `UsableMachine` when it deactivates its standing points; it is not a general replacement for `OnRemoved`.

The component cannot opt into network serialization by itself. If its state changes what clients see, the owning usable object must use its synchronized API, and an override of the owner's `WriteToNetwork`/`OnAfterReadFromNetwork` must preserve base processing.

## Real component pattern

Create the component in mod code, acquire a registered usable object from the current Mission, and attach it through `AddComponent`. The host then invokes the protected callbacks; the mod does not call `OnUse` or `OnTick` manually.

```csharp
using TaleWorlds.Engine;
using TaleWorlds.MountAndBlade;

public sealed class UseCounterComponent : UsableMissionObjectComponent
{
    public int Count { get; private set; }

    protected internal override void OnUse(Agent userAgent)
    {
        Count++;
    }

    protected internal override void OnMissionReset()
    {
        Count = 0;
    }

    public override bool IsOnTickRequired()
    {
        return false;
    }
}

public static bool AttachCounterToFirstUsable(Mission mission)
{
    foreach (MissionObject missionObject in mission.ActiveMissionObjects)
    {
        if (missionObject is UsableMissionObject usable)
        {
            usable.AddComponent(new UseCounterComponent());
            return true;
        }
    }

    return false;
}
```

The component in this example is intentionally non-ticking. A component that needs periodic work should return `true` only while that work is pending, and should be removed or released before its owner is removed.

## Risks and boundaries

- `OnAdded` receives the owner's Scene, but the component is still not a separately registered Mission object. Do not look it up through `Mission.ActiveMissionObjects`.
- `OnRemoved` can be reached from both `RemoveComponent` and owner removal. Cleanup must tolerate repeated or already-cleared native references.
- Returning `true` forever from `IsOnTickRequired` keeps the owner ticking even when no Agent is using it. This can multiply cost across many scene objects.
- Do not retain `Agent` references after `OnUseStopped`, `OnMissionReset`, `OnRemoved`, or Mission end without checking that the Agent remains active.
- Component callbacks do not grant authority. A client-side `OnUse` observation cannot commit a multiplayer result or a campaign save mutation.
- A component added after `OnInit` receives `OnAdded`, but any custom assumptions about child entities or the owner's `GameEntityWithWorldPosition` remain the owner's responsibility.

## See also and reciprocal navigation

- ↑ Parent: [Mission-ext module index](../)
- ↔ Owner: [UsableMissionObject](../UsableMissionObject)
- ↔ Base lifecycle: [MissionObject](../MissionObject) · [SynchedMissionObject](../SynchedMissionObject)
- Special owner: [UsableMachine](../UsableMachine)
- Mission coordination: [Mission](../../mission/Mission) · [MissionBehavior](../../mission/MissionBehavior)
- 中文/English: [UsableMissionObjectComponent](../../../../zh/api/mission-ext/UsableMissionObjectComponent)
