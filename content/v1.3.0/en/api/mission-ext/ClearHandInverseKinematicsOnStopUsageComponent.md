---
title: "ClearHandInverseKinematicsOnStopUsageComponent"
description: "Auto-generated class reference for ClearHandInverseKinematicsOnStopUsageComponent."
---
# ClearHandInverseKinematicsOnStopUsageComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ClearHandInverseKinematicsOnStopUsageComponent : UsableMissionObjectComponent`
**Base:** `UsableMissionObjectComponent`
**File:** `TaleWorlds.MountAndBlade/ClearHandInverseKinematicsOnStopUsageComponent.cs`

## Overview

`ClearHandInverseKinematicsOnStopUsageComponent` is a `UsableMissionObjectComponent` (`ClearHandInverseKinematicsOnStopUsageComponent.cs:6`) whose entire body is a single override: when anything stops using the object this component is attached to, it clears the using agent's hand inverse kinematics (`ClearHandInverseKinematicsOnStopUsageComponent.cs:9`, `ClearHandInverseKinematicsOnStopUsageComponent.cs:11`).

It has no fields, no lifecycle of its own, and no knowledge of which agent or which usable object it is bound to — both arrive as parameters. Its whole purpose is to stop a usable that involves holding a physical prop (a siege ram rope, a ladder, a battering pick) from leaving the agent's hands locked to the prop's skeleton pose after the interaction ends.

It is attached per usable mission object, in the same component list that the object's own behaviour occupies, so its lifetime is the object's lifetime.

## Mental Model

The signature has a defaulted parameter that the implementation ignores entirely:

```csharp
protected internal override void OnUseStopped(Agent userAgent, bool isSuccessful = true)
{
    userAgent.ClearHandInverseKinematics();
}
```

`isSuccessful` is accepted and then never read. The override clears IK on the happy path and on the failure path identically. So if your usable object cancels a use — the target becomes invalid mid-interaction, the agent is knocked down, the mission phase changes — the hands are still released, which is usually what you want and occasionally is not: a usable that *intentionally* holds a prop pose after an interrupted use will have that pose snapped off by this component.

The other thing to internalise is that `userAgent` is dereferenced without a null check. The base `UsableMissionObjectComponent` passes the agent that was using the object; a stop-usage notification raised with no agent attached reaches this line as a `NullReferenceException`.

Because the class is `protected internal` on the override, a subclass can still widen the behaviour by overriding `OnUseStopped` again — but it has to re-call `base` to keep the IK clearing, since there is nothing else in the chain doing it.

## How to use

**Getting it.** Attach it to a `UsableMissionObject` from that object's `Initialize`/behaviour-construction path, alongside its other components:

```csharp
public class MyBatteringRam : MissionSiegeWeapon
{
    public override void InitializeComponents()
    {
        base.InitializeComponents();
        AddComponent(new ClearHandInverseKinematicsOnStopUsageComponent());
    }
}
```

From an existing usable you can check whether it already carries the component rather than adding a second copy:

```csharp
var clearIk = this.GetComponent<ClearHandInverseKinematicsOnStopUsageComponent>();
if (clearIk == null)
{
    AddComponent(new ClearHandInverseKinematicsOnStopUsageComponent());
}
```

**Typical use** — release the pose yourself when you need to do it early, before `OnUseStopped` fires:

```csharp
public override void OnUseStopped(Agent userAgent, bool isSuccessful = true)
{
    // Do your own failure handling first, then let the shipped component clear IK.
    if (!isSuccessful)
    {
        MBDebug.Print("use interrupted for " + userAgent.Name);
    }
    base.OnUseStopped(userAgent, isSuccessful);
}
```

**Most common mistake, and what it costs.** Reading `isSuccessful` as a signal that something happened, or worse, assuming the override lets you *suppress* the clear by inspecting it. The parameter is not consulted at all (`ClearHandInverseKinematicsOnStopUsageComponent.cs:11`), so an override that handles the failure case and deliberately skips `base` is the only way to keep IK locked — and skipping `base` also drops the clear on the *successful* path, so the agent walks away from a completed interaction with their hands still posed on a prop that no longer exists. In practice the visible cost of doing nothing is milder than doing this: the shipped behaviour always releases, and an agent that stays IK-locked after the prop despawns animates with arms locked until the next animation channel overwrite.

## Usage Example

```csharp
var component = agent.GetComponent<ClearHandInverseKinematicsOnStopUsageComponent>();
```

## See Also

- [Area Index](../)
- [RemoveExtraWeaponOnStopUsageComponent](../RemoveExtraWeaponOnStopUsageComponent)
- [RangedSiegeWeaponViewController](../RangedSiegeWeaponViewController)
- [MissionSiegeEnginesLogic](../MissionSiegeEnginesLogic)
- [UsableMissionObjectComponent (中文页面)](../../../../zh/api/mission-ext/UsableMissionObjectComponent)