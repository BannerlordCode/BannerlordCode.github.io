---
title: "MissionMainAgentInteractionComponent"
description: "Auto-generated class reference for MissionMainAgentInteractionComponent."
---
# MissionMainAgentInteractionComponent

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMainAgentInteractionComponent`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionMainAgentInteractionComponent.cs`

## Overview

`MissionMainAgentInteractionComponent` is a plain class — **not** a mission behaviour, not an `AgentComponent` — whose entire job is to decide what the main agent is looking at. It derives from nothing (`MissionMainAgentInteractionComponent.cs:11`) and is constructed with a reference to the `MissionMainAgentController` that owns it (`MissionMainAgentInteractionComponent.cs:118`). Its `Mission`, `MissionScreen` and `Scene` properties are all computed on demand by reaching back through that controller (`MissionMainAgentInteractionComponent.cs:89`, `MissionMainAgentInteractionComponent.cs:93`, `MissionMainAgentInteractionComponent.cs:99`, `MissionMainAgentInteractionComponent.cs:109`) — there are no cached fields for them, which is why a null controller is a deferred rather than an immediate failure.

It exposes two read-only focus properties, `CurrentFocusedObject` and `CurrentFocusedMachine` (`MissionMainAgentInteractionComponent.cs:31`, `MissionMainAgentInteractionComponent.cs:36`), one mutator `SetCurrentFocusedObject` (`MissionMainAgentInteractionComponent.cs:39`), a `ClearFocus` (`MissionMainAgentInteractionComponent.cs:69`) and three events: `OnFocusGained`, `OnFocusLost` and `OnFocusHealthChanged` (`MissionMainAgentInteractionComponent.cs:16`, `MissionMainAgentInteractionComponent.cs:21`, `MissionMainAgentInteractionComponent.cs:26`). `FocusTick` is the entry point the controller drives each frame.

## Mental Model

`SetCurrentFocusedObject` is a **differential** method, not a setter, and its first branch is the one that matters. If something is already focused and the new target differs — or the interactability of the *already-focused* object flips — it clears focus and returns (`MissionMainAgentInteractionComponent.cs:41`). So the method is not idempotent in the naive sense: calling it twice with the same object can still clear, because the second call sees `_currentInteractableObject` disagreeing with the incoming `isInteractable` (`MissionMainAgentInteractionComponent.cs:41`, `MissionMainAgentInteractionComponent.cs:62`). Read the existing state before you call it.

Gaining focus is only reported once. The gained path is guarded by `this.CurrentFocusedObject == null && focusedObject != null` (`MissionMainAgentInteractionComponent.cs:49`) and then re-checks `focusedObject != this.CurrentFocusedObject` (`MissionMainAgentInteractionComponent.cs:51`), and `FocusGained` returns early when the `OnFocusGained` delegate is null (`MissionMainAgentInteractionComponent.cs:154`). Losing focus returns early on a null delegate too (`MissionMainAgentInteractionComponent.cs:174`). So all three are safe no-op paths with no subscriber, and you cannot force a re-gain event by refocusing the same object.

`FocusTick` short-circuits on mission mode first. In `Conversation` or `CutScene` it does nothing at all; otherwise, if something is focused and the mode is not `Conversation`, it drops the focus (`MissionMainAgentInteractionComponent.cs:189`, `MissionMainAgentInteractionComponent.cs:191`). Only after that does it consider picking a new target, and the gate is a six-part condition — item interaction enabled or a mountable target, order menu closed, game key 25 **not** held, and the main agent able to use a machine (`MissionMainAgentInteractionComponent.cs:198`). Game key 25 being held is the "don't retarget while the player is doing something with the object" rule.

The picking itself is a ray cast from the agent's eye, not from the agent's position: `GetCollisionDistanceSquaredOfIntersectionFromMainAgentEye` (`MissionMainAgentInteractionComponent.cs:124`) feeds `RayCastForClosestEntityOrTerrain` with a `0.01f` margin (`MissionMainAgentInteractionComponent.cs:208`), and returns `-1` when the ray misses everything (`MissionMainAgentInteractionComponent.cs:132`). A returned agent is then rejected if it is killed, unconscious, or is a mount in a conflicting pairing (`MissionMainAgentInteractionComponent.cs:214`).

`MissionMainAgentController` is the owner. That means the correct way to reach this class is through the controller, not through a component lookup — and `agent.GetComponent<MissionMainAgentInteractionComponent>()` cannot compile for it in any case, because `Agent.GetComponent<T>()` is constrained to `where T : AgentComponent` (`Agent.cs:3107`) and this class is not one.

## How to use

**Getting it.** Ask the main-agent controller. There is no registration and no behaviour lookup.

```csharp
using TaleWorlds.MountAndBlade.View.MissionViews;

MissionMainAgentController controller = Mission.GetMissionBehavior<MissionMainAgentController>();
if (controller != null)
{
    MissionMainAgentInteractionComponent focus = controller.InteractionComponent;
    if (focus != null)
    {
        focus.OnFocusGained += (obj, machine) => Debug.Print("gained " + obj, false);
        focus.OnFocusLost += (obj, machine) => Debug.Print("lost", false);
    }
}
```

Inspect what is focused from your own behaviour, each tick:

```csharp
public class FocusProbe : MissionBehavior
{
    public override void OnMissionScreenTick(float dt)
    {
        base.OnMissionScreenTick(dt);
        MissionMainAgentController c = Mission.GetMissionBehavior<MissionMainAgentController>();
        MissionMainAgentInteractionComponent focus = c?.InteractionComponent;
        if (focus != null && focus.CurrentFocusedObject != null)
        {
            Debug.Print("looking at " + focus.CurrentFocusedObject.GetType().Name, false);
        }
    }
}
```

**The mistake that fires focus events twice and tears down UI that is still in use.** Calling `SetCurrentFocusedObject` yourself from another behaviour. The method is differential — it clears first when the new target differs or interactability flips (`MissionMainAgentInteractionComponent.cs:41`) — so your call and the controller's own `FocusTick` both drive the same state machine in the same frame. The `OnFocusLost` your call raises reaches UI that has already been told the object is focused, and the mid-frame clear means the UI's teardown runs against a half-updated focus. Let the controller own the transition and subscribe to the events instead.

## Key Properties

| Name | Signature |
|------|-----------|
| `CurrentFocusedObject` | `public IFocusable CurrentFocusedObject { get; }` |
| `CurrentFocusedMachine` | `public IFocusable CurrentFocusedMachine { get; }` |

## Key Methods

### SetCurrentFocusedObject
`public void SetCurrentFocusedObject(IFocusable focusedObject, IFocusable focusedMachine, sbyte focusedObjectBoneIndex, bool isInteractable)`

**Purpose:** Assigns a new value to current focused object and updates the object's internal state.

```csharp
// Obtain an instance of MissionMainAgentInteractionComponent from the subsystem API first
MissionMainAgentInteractionComponent missionMainAgentInteractionComponent = ...;
missionMainAgentInteractionComponent.SetCurrentFocusedObject(focusedObject, focusedMachine, 0, false);
```

### ClearFocus
`public void ClearFocus()`

**Purpose:** Removes all focus from the this instance.

```csharp
// Obtain an instance of MissionMainAgentInteractionComponent from the subsystem API first
MissionMainAgentInteractionComponent missionMainAgentInteractionComponent = ...;
missionMainAgentInteractionComponent.ClearFocus();
```

### OnClearScene
`public void OnClearScene()`

**Purpose:** Invoked when the clear scene event is raised.

```csharp
// Obtain an instance of MissionMainAgentInteractionComponent from the subsystem API first
MissionMainAgentInteractionComponent missionMainAgentInteractionComponent = ...;
missionMainAgentInteractionComponent.OnClearScene();
```

### FocusTick
`public void FocusTick()`

**Purpose:** Executes the FocusTick logic.

```csharp
// Obtain an instance of MissionMainAgentInteractionComponent from the subsystem API first
MissionMainAgentInteractionComponent missionMainAgentInteractionComponent = ...;
missionMainAgentInteractionComponent.FocusTick();
```

### FocusStateCheckTick
`public void FocusStateCheckTick()`

**Purpose:** Executes the FocusStateCheckTick logic.

```csharp
// Obtain an instance of MissionMainAgentInteractionComponent from the subsystem API first
MissionMainAgentInteractionComponent missionMainAgentInteractionComponent = ...;
missionMainAgentInteractionComponent.FocusStateCheckTick();
```

### FocusedItemHealthTick
`public void FocusedItemHealthTick()`

**Purpose:** Executes the FocusedItemHealthTick logic.

```csharp
// Obtain an instance of MissionMainAgentInteractionComponent from the subsystem API first
MissionMainAgentInteractionComponent missionMainAgentInteractionComponent = ...;
missionMainAgentInteractionComponent.FocusedItemHealthTick();
```

### MissionFocusGainedEventDelegate
`public delegate void MissionFocusGainedEventDelegate(Agent agent, IFocusable focusableObject, bool isInteractable)`

**Purpose:** Executes the MissionFocusGainedEventDelegate logic.

```csharp
// Obtain an instance of MissionMainAgentInteractionComponent from the subsystem API first
MissionMainAgentInteractionComponent missionMainAgentInteractionComponent = ...;
missionMainAgentInteractionComponent.MissionFocusGainedEventDelegate(agent, focusableObject, false);
```

### MissionFocusLostEventDelegate
`public delegate void MissionFocusLostEventDelegate(Agent agent, IFocusable focusableObject)`

**Purpose:** Executes the MissionFocusLostEventDelegate logic.

```csharp
// Obtain an instance of MissionMainAgentInteractionComponent from the subsystem API first
MissionMainAgentInteractionComponent missionMainAgentInteractionComponent = ...;
missionMainAgentInteractionComponent.MissionFocusLostEventDelegate(agent, focusableObject);
```

### MissionFocusHealthChangeDelegate
`public delegate void MissionFocusHealthChangeDelegate(IFocusable focusable, float healthPercentage, bool hideHealthbarWhenFull)`

**Purpose:** Executes the MissionFocusHealthChangeDelegate logic.

```csharp
// Obtain an instance of MissionMainAgentInteractionComponent from the subsystem API first
MissionMainAgentInteractionComponent missionMainAgentInteractionComponent = ...;
missionMainAgentInteractionComponent.MissionFocusHealthChangeDelegate(focusable, 0, false);
```

## Usage Example

```csharp
The `agent.GetComponent<MissionMainAgentInteractionComponent>()` line previously on this page cannot compile: `Agent.GetComponent<T>()` requires `where T : AgentComponent` (`Agent.cs:3107`) and this class derives from nothing. Go through the main-agent controller instead:

```csharp
var focus = Mission.Current.GetMissionBehavior<MissionMainAgentController>()?.InteractionComponent;
```
```

## See Also

- [MissionAgentContourControllerView — a mission view that reacts to the same focus events](../MissionAgentContourControllerView)
- [MissionMainAgentControlModeView — the other main-agent-facing view slot](../MissionMainAgentControlModeView)
- [Mission — behaviour list the controller lives in](../../mission/Mission)
- [Area Index](../)