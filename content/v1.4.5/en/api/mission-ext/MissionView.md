---
title: "MissionView"
description: "MissionView is the abstract mission-screen behavior base for camera, input, UI, conversation, and rendering hooks."
---
# MissionView

**Namespace:** `TaleWorlds.MountAndBlade.View.MissionViews`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public abstract class MissionView : MissionBehavior`  
**Base:** [MissionBehavior](../../mission/MissionBehavior)  
**Source file:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews/MissionView.cs`

## One-sentence responsibility

It provides the view-layer lifecycle that connects a live [Mission](../../mission/Mission) to `MissionScreen`, input, camera policy, photo mode, conversation, and rendering events.

## Mental Model

`MissionView` is a specialized `MissionBehavior`, but it is not the mission's simulation logic. A view is owned by the mission-screen view container; its `MissionScreen` and `Input` are populated by the screen layer, and its callbacks are driven by screen activation, rendering, focus, conversation, and deployment events. `BehaviorType` is `MissionBehaviorType.View`. The base implementation mostly supplies safe defaults: escape/photo mode are allowed, readiness is true, camera override is false, and empty lifecycle hooks do nothing.

`SuspendView()` and `ResumeView()` are the explicit view pause boundary. They call protected `OnSuspendView`/`OnResumeView` and update `IsViewSuspended`; they do not end the Mission. `OnEndMissionInternal()` is sealed and forwards to the behavior's end hook, so a subclass should override the appropriate protected/public hook instead of trying to replace the sealed bridge.

## When to use and when not to use

- Derive from it for mission HUD, camera, photo-mode, conversation, or rendering integrations that belong to the screen layer.
- Override only the callbacks the view needs, and use `MissionScreen` after the screen has initialized the view.
- Do not use it for Agent spawning or mission rules; use [MissionLogic](../MissionLogic) or a related mission behavior.
- Do not assign `MissionScreen` or `Input`; both are engine-owned (`MissionScreen` has an internal setter and `Input` is derived from its scene layer).
- Do not treat `SuspendView` as mission pause or persist a view reference after `OnRemoveBehavior`/mission end.

## Dependencies

```text
Mission view factory
  -> MissionView subclass
  -> MissionScreen attaches and initializes it
  -> screen/rendering/focus callbacks
  -> OnEndMissionInternal -> MissionBehavior end hook
```

- Base lifecycle: [MissionBehavior](../../mission/MissionBehavior) owns the mission association and end bridge.
- Simulation peer: [MissionLogic](../MissionLogic) is the correct layer for non-visual mission rules.
- State owner: [Mission](../../mission/Mission) supplies live Agents, scene, and mission time.
- Screen state: [MissionState](../../campaign-ext/MissionState) owns the game-state transition that hosts the Mission.

## Public surface and timing

| Area | Members | Meaning |
| --- | --- | --- |
| Screen | `MissionScreen`, `Input` | Engine-provided screen and input access; valid after attachment. |
| Ordering | `ViewOrderPriority` | View-container ordering value used by the screen layer. |
| Readiness | `IsReady()` | Defaults to `true`; override when the view must finish asynchronous setup. |
| Camera and escape | `OnEscape()`, `IsOpeningEscapeMenuOnFocusChangeAllowed()`, `UpdateOverridenCamera(float)` | Policy hooks; defaults are no escape handling, allowed focus-menu opening, and no camera override. |
| Screen lifecycle | `OnMissionScreenInitialize`, `OnMissionScreenActivate`, `OnMissionScreenDeactivate`, `OnMissionScreenFinalize` | Screen attachment and active-state boundaries. |
| Presentation | `OnMissionScreenTick`, `OnSceneRenderingStarted`, `OnFocusChangeOnGameWindow` | Per-frame/render/focus hooks. |
| Modes | `OnPhotoModeActivated`, `OnPhotoModeDeactivated`, `OnConversationBegin`, `OnConversationEnd`, `OnDeploymentPlanMade` | Context-specific presentation hooks. |
| Suspension | `SuspendView()`, `ResumeView()`, `IsViewSuspended` | Pauses view work without ending the Mission. |

## Real example

This is a real extension shape: the view reads mission-local time only while the engine has attached it to the screen and mission.

```csharp
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.View.MissionViews;

public sealed class MissionClockView : MissionView
{
    private float _elapsed;

    public override void OnMissionScreenInitialize()
    {
        _elapsed = 0f;
    }

    public override void OnMissionScreenTick(float dt)
    {
        if (Mission.Current == null || MissionScreen == null || IsViewSuspended)
        {
            return;
        }

        _elapsed += dt;
    }

    protected override void OnSuspendView()
    {
        _elapsed = 0f;
    }
}
```

The concrete instance must be returned by the module's mission-view creation path or added through `MissionScreen.AddMissionView`; creating the object alone does not attach `MissionScreen` or make callbacks run.

## Risks and boundaries

- `MissionScreen` and `Input` are unavailable or incomplete before view initialization; null-check the screen when a callback can run during transitions.
- A view callback can be called during focus, photo-mode, or conversation transitions when Mission simulation is paused or changing.
- `OnMissionScreenFinalize` and `OnRemoveBehavior` are cleanup boundaries. Release input, layers, and event listeners there.
- `OnEndMissionInternal` is sealed in this base class; overriding the wrong method can bypass intended cleanup.
- `UpdateOverridenCamera` is opt-in. Returning `true` without supplying a coherent camera override can disturb the active mission camera.

## Version note

This page follows the v1.4.5 `MissionView` defaults and screen callbacks. Recheck `MissionScreen` ownership and the view-container ordering rules when targeting another version.

## Navigation

- Parent: [Mission extension API](../)
- Siblings: [MissionLogic](../MissionLogic) · [IMissionBehavior](../IMissionBehavior)
- Related: [Mission](../../mission/Mission) · [MissionBehavior](../../mission/MissionBehavior) · [MissionState](../../campaign-ext/MissionState)
