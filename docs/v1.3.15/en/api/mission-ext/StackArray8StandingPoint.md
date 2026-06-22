<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StackArray8StandingPoint`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# StackArray8StandingPoint

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** struct
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `StackArray8StandingPoint` is a struct in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `DisableScriptedFrameFlags` | `public virtual Agent.AIScriptedFrameFlags DisableScriptedFrameFlags { get; }` |
| `DisableCombatActionsOnUse` | `public override bool DisableCombatActionsOnUse { get; set; }` |
| `FavoredUser` | `public Agent FavoredUser { get; set; }` |
| `PlayerStopsUsingWhenInteractsWithOther` | `public virtual bool PlayerStopsUsingWhenInteractsWithOther { get; }` |
| `UseOwnPositionInsteadOfWorldPosition` | `public bool UseOwnPositionInsteadOfWorldPosition { get; }` |
| `CustomPlayerInteractionDistance` | `public float CustomPlayerInteractionDistance { get; }` |
| `this` | `public StandingPoint this { get; }` |


## Key Methods

### OnParentMachinePhysicsStateChanged

```csharp
public void OnParentMachinePhysicsStateChanged()
```

### IsDisabledForAgent

```csharp
public override bool IsDisabledForAgent(Agent agent)
```

### GetTickRequirement

```csharp
public override ScriptComponentBehavior.TickRequirement GetTickRequirement()
```

### OnUse

```csharp
public override void OnUse(Agent userAgent, sbyte agentBoneIndex)
```

### OnUseStopped

```csharp
public override void OnUseStopped(Agent userAgent, bool isSuccessful, int preferenceIndex)
```

### GetUserFrameForAgent

```csharp
public override WorldFrame GetUserFrameForAgent(Agent agent)
```

### HasAlternative

```csharp
public virtual bool HasAlternative()
```

### GetUsageScoreForAgent

```csharp
public virtual float GetUsageScoreForAgent(Agent agent)
```

### GetUsageScoreForAgent

```csharp
public virtual float GetUsageScoreForAgent(ValueTuple<Agent, float> agentPair)
```

### SetupOnUsingStoppedBehavior

```csharp
public void SetupOnUsingStoppedBehavior(bool autoAttach, Action<Agent, bool> action)
```

### OnEndMission

```csharp
public override void OnEndMission()
```

### GetDescriptionText

```csharp
public override TextObject GetDescriptionText(WeakGameEntity gameEntity)
```

### IsUsableByAgent

```csharp
public override bool IsUsableByAgent(Agent userAgent)
```

### SetUsableByAIOnly

```csharp
public void SetUsableByAIOnly()
```

### SetUsableByPlayerOnly

```csharp
public void SetUsableByPlayerOnly()
```

### SetUsableByPlayerOrAI

```csharp
public void SetUsableByPlayerOrAI()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)