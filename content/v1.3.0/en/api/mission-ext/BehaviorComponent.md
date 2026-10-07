---
title: "BehaviorComponent"
description: "Auto-generated class reference for BehaviorComponent."
---
# BehaviorComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class BehaviorComponent`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/BehaviorComponent.cs`

## Overview

`BehaviorComponent` is the abstract base every `FormationAI` behaviour derives from — one instance per behaviour per formation, owned by that formation's AI, not by the mission behaviour list. It is declared `public abstract class BehaviorComponent` (`BehaviorComponent.cs:9`) with exactly one abstract member, `GetAiWeight()`.

The lifecycle is activate / cancel / tick. `OnBehaviorActivated` is `internal`, so only the engine's formation AI can start one — the AI picks a behaviour, then calls the internal entry, which raises the "soldier instruction" quick-info for a player-controlled troop, informs the player sergeant, and finally calls `OnBehaviorActivatedAux()` but **only if `Formation.IsAIControlled`** (`BehaviorComponent.cs:57`). From there the behaviour participates in weighted selection through `GetAIWeight()`, refreshes its order through `PrecalculateMovementOrder()`, and is eventually told it is done via `OnBehaviorCanceled`, `OnLostAIControl`, `OnAgentRemoved`, `ResetBehavior`, `TickOccasionally` and `OnDeploymentFinished`.

Two constructors exist and they are not interchangeable. `BehaviorComponent(Formation formation)` stores the formation, zeroes `PreserveExpireTime`, and builds a 50-second penalty `Timer` (`BehaviorComponent.cs:22`, `BehaviorComponent.cs:26`). `BehaviorComponent()` does nothing at all (`BehaviorComponent.cs:30`) — `Formation` stays null and `_navmeshlessTargetPenaltyTime` stays null.

## Mental Model

The method pair `GetAIWeight()` and `GetAiWeight()` differs only in the case of one letter, and they do completely different jobs. `GetAiWeight()` is `protected abstract` and is *yours* to implement (`BehaviorComponent.cs:142`). `GetAIWeight()` is `public`, non-virtual, and multiplies your value by `NavmeshlessTargetPositionPenalty` (`BehaviorComponent.cs:136`). Override the lower-case one; call the upper-case one. Getting this backwards means either nothing happens (you implement the public one, which is never virtual-dispatched to) or the penalty is bypassed (you read your raw weight directly from outside and select on it yourself, so a navmesh-less target never gets damped).

`NavmeshlessTargetPositionPenalty` is a rate-limiter, not a boolean. Reading it drives a 50-second timer whose first 5 seconds return the stored value unchanged, the next 5 lerp toward `1f`, and after 10 seconds it latches at `1f` permanently (`BehaviorComponent.cs:107`, `BehaviorComponent.cs:122`, `BehaviorComponent.cs:117`). Assigning to it resets the timer. So a behaviour that sets a penalty of `0.5f` is ignored for 5 seconds, ramps over the next 5, and is fully un-penalised after 10 — from then on reassigning does nothing, because the getter short-circuits on the `== 1f` check before touching the timer.

`Equals` is overridden to compare types only (`BehaviorComponent.cs:204`): two behaviours of the same class on different formations are equal. Do not put behaviour instances in a `Dictionary` or `HashSet` expecting formation identity. That same line dereferences `obj` without a null check, so `behavior.Equals(null)` throws instead of returning false.

`GetBehaviorString()` feeds your type's `Name` into the localized key `str_formation_ai_sergeant_instruction_behavior_text` (`BehaviorComponent.cs:177`, `BehaviorComponent.cs:180`), and `OnBehaviorActivated` separately builds a `TextObject` from `this.ToString().Replace("MBModule.Behavior", "")` (`BehaviorComponent.cs:57`). That replacement hardcodes the shipped assembly's namespace. A behaviour class living outside `MBModule.Behavior` produces an unstripped, fully-qualified string as a localization key, which resolves to nothing and shows a blank label in the order UI.

`CurrentOrder` has a `protected` setter that also raises the `IsCurrentOrderChanged` flag (`BehaviorComponent.cs:156`). That flag is the only way the AI learns your order changed; assigning the backing field by any other route leaves the AI acting on a stale order.

## How to use

**Getting it.** You never construct behaviours directly in normal play — `FormationAI` owns them, one per formation. You write a subclass, register the type, and the AI instantiates it during mission start:

```csharp
public class MyDefensiveBehavior : BehaviorComponent
{
    // Required: the formation-aware ctor wires Formation and the penalty timer.
    public MyDefensiveBehavior(Formation formation) : base(formation) { }

    protected override float GetAiWeight()
    {
        // Lower-case 'i' — this is the one the AI calls.
        return Formation.GetCountOfUnits() > 20 ? 2f : 0.5f;
    }

    protected override void CalculateCurrentOrder()
    {
        CurrentOrder = MovementOrder.Defensive;
    }

    public override void OnBehaviorCanceled()
    {
        base.OnBehaviorCanceled();
    }
}
```

**Typical use** — damp a behaviour's priority while its target is off the navmesh:

```csharp
protected override float GetAiWeight()
{
    // Assigning resets the 50s timer; the getter ramps this back to 1f over 10s.
    if (TargetPositionOffNavmesh) NavmeshlessTargetPositionPenalty = 0.3f;
    return 1f;
}

// Elsewhere, read the *damped* weight — this is what selection uses:
float effective = behavior.GetAIWeight();
```

**Most common mistake, and what it costs.** Implementing `GetAiWeight()` and then testing your behaviour by calling `GetAIWeight()` on the instance. They are different methods and only the protected one is virtual: if you write a mod that probes `GetAIWeight()` to check whether a behaviour is currently attractive, you bypass `NavmeshlessTargetPositionPenalty` entirely and see the raw weight. The symptom is a behaviour that the formation AI correctly refuses to select — because its damped weight lost the comparison — while your own probe insists it should have won. Probe `GetAIWeight()` for the real answer, and treat the protected `GetAiWeight()` as an implementation detail you must never call.

## Key Properties

| Name | Signature |
|------|-----------|
| `Formation` | `public Formation Formation { get; }` |
| `BehaviorCoherence` | `public float BehaviorCoherence { get; set; }` |
| `NavmeshlessTargetPositionPenalty` | `public virtual float NavmeshlessTargetPositionPenalty { get; }` |
| `CurrentOrder` | `public MovementOrder CurrentOrder { get; set; }` |
| `PreserveExpireTime` | `public float PreserveExpireTime { get; set; }` |
| `WeightFactor` | `public float WeightFactor { get; set; }` |

## Key Methods

### OnBehaviorCanceled
`public virtual void OnBehaviorCanceled()`

**Purpose:** Invoked when the behavior canceled event is raised.

```csharp
// Obtain an instance of BehaviorComponent from the subsystem API first
BehaviorComponent behaviorComponent = ...;
behaviorComponent.OnBehaviorCanceled();
```

### OnLostAIControl
`public virtual void OnLostAIControl()`

**Purpose:** Invoked when the lost a i control event is raised.

```csharp
// Obtain an instance of BehaviorComponent from the subsystem API first
BehaviorComponent behaviorComponent = ...;
behaviorComponent.OnLostAIControl();
```

### OnAgentRemoved
`public virtual void OnAgentRemoved(Agent agent)`

**Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of BehaviorComponent from the subsystem API first
BehaviorComponent behaviorComponent = ...;
behaviorComponent.OnAgentRemoved(agent);
```

### RemindSergeantPlayer
`public void RemindSergeantPlayer()`

**Purpose:** Executes the RemindSergeantPlayer logic.

```csharp
// Obtain an instance of BehaviorComponent from the subsystem API first
BehaviorComponent behaviorComponent = ...;
behaviorComponent.RemindSergeantPlayer();
```

### TickOccasionally
`public virtual void TickOccasionally()`

**Purpose:** Advances the occasionally state each frame or update cycle.

```csharp
// Obtain an instance of BehaviorComponent from the subsystem API first
BehaviorComponent behaviorComponent = ...;
behaviorComponent.TickOccasionally();
```

### GetAIWeight
`public float GetAIWeight()`

**Purpose:** Reads and returns the a i weight value held by the this instance.

```csharp
// Obtain an instance of BehaviorComponent from the subsystem API first
BehaviorComponent behaviorComponent = ...;
var result = behaviorComponent.GetAIWeight();
```

### ResetBehavior
`public virtual void ResetBehavior()`

**Purpose:** Returns behavior to its default or initial condition.

```csharp
// Obtain an instance of BehaviorComponent from the subsystem API first
BehaviorComponent behaviorComponent = ...;
behaviorComponent.ResetBehavior();
```

### GetBehaviorString
`public virtual TextObject GetBehaviorString()`

**Purpose:** Reads and returns the behavior string value held by the this instance.

```csharp
// Obtain an instance of BehaviorComponent from the subsystem API first
BehaviorComponent behaviorComponent = ...;
var result = behaviorComponent.GetBehaviorString();
```

### OnValidBehaviorSideChanged
`public virtual void OnValidBehaviorSideChanged()`

**Purpose:** Invoked when the valid behavior side changed event is raised.

```csharp
// Obtain an instance of BehaviorComponent from the subsystem API first
BehaviorComponent behaviorComponent = ...;
behaviorComponent.OnValidBehaviorSideChanged();
```

### PrecalculateMovementOrder
`public void PrecalculateMovementOrder()`

**Purpose:** Executes the PrecalculateMovementOrder logic.

```csharp
// Obtain an instance of BehaviorComponent from the subsystem API first
BehaviorComponent behaviorComponent = ...;
behaviorComponent.PrecalculateMovementOrder();
```

### Equals
`public override bool Equals(object obj)`

**Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of BehaviorComponent from the subsystem API first
BehaviorComponent behaviorComponent = ...;
var result = behaviorComponent.Equals(obj);
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Returns a hash code for the this instance, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of BehaviorComponent from the subsystem API first
BehaviorComponent behaviorComponent = ...;
var result = behaviorComponent.GetHashCode();
```

### OnDeploymentFinished
`public virtual void OnDeploymentFinished()`

**Purpose:** Invoked when the deployment finished event is raised.

```csharp
// Obtain an instance of BehaviorComponent from the subsystem API first
BehaviorComponent behaviorComponent = ...;
behaviorComponent.OnDeploymentFinished();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
BehaviorComponent instance = ...;
```

## See Also

- [Area Index](../)
- [FormationAI](../FormationAI)
- [BehaviorData](../BehaviorData)
- [HumanAIComponent](../HumanAIComponent)
- [CommonAIComponent (中文页面)](../../../../zh/api/mission-ext/CommonAIComponent)