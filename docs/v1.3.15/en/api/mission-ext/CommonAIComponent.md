<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CommonAIComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CommonAIComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CommonAIComponent : AgentComponent`
**Base:** `AgentComponent`
**File:** `TaleWorlds.MountAndBlade/CommonAIComponent.cs`

## Overview

`CommonAIComponent` is an AgentComponent — per-agent state/logic attached to an Agent. Access via `agent.GetComponent<CommonAIComponent>()` (some have a typed agent property). Subclass AgentComponent to add your own.

## Key Properties

| Name | Signature |
|------|-----------|
| `InitialMorale` | `public float InitialMorale { get { return this._initialMorale; }` |
| `RecoveryMorale` | `public float RecoveryMorale { get { return this._recoveryMorale; }` |
| `Morale` | `public float Morale { get { return this._morale; }` |

## Key Methods

### Initialize
```csharp
public override void Initialize()
```

### OnTickParallel
```csharp
public override void OnTickParallel(float dt)
```

### OnTick
```csharp
public override void OnTick(float dt)
```

### Panic
```csharp
public void Panic()
```

### Retreat
```csharp
public void Retreat(bool useCachingSystem = false)
```

### StopRetreating
```csharp
public void StopRetreating()
```

### CanPanic
```csharp
public bool CanPanic()
```

### OnHit
```csharp
public override void OnHit(Agent affectorAgent, int damage, in MissionWeapon affectorWeapon, in Blow b, in AttackCollisionData collisionData)
```

### OnAgentRemoved
```csharp
public override void OnAgentRemoved()
```

### OnComponentRemoved
```csharp
public override void OnComponentRemoved()
```

## Usage Example

```csharp
// Typical usage of CommonAIComponent (Component)
agent.GetComponent<CommonAIComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)