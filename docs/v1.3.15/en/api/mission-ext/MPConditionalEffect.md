<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPConditionalEffect`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MPConditionalEffect

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `MPConditionalEffect` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Conditions` | `public MBReadOnlyList<MPPerkCondition> Conditions { get; }` |
| `Effects` | `public MBReadOnlyList<MPPerkEffectBase> Effects { get; }` |
| `EventFlags` | `public MPPerkCondition.PerkEventFlags EventFlags { get; }` |
| `IsTickRequired` | `public bool IsTickRequired { get; }` |
| `IsSatisfied` | `public bool IsSatisfied { get; set; }` |


## Key Methods

### Check

```csharp
public bool Check(MissionPeer peer)
```

### Check

```csharp
public bool Check(Agent agent)
```

### OnEvent

```csharp
public void OnEvent(bool isWarmup, MissionPeer peer, MPConditionalEffect.ConditionalEffectContainer container)
```

### OnEvent

```csharp
public void OnEvent(bool isWarmup, Agent agent, MPConditionalEffect.ConditionalEffectContainer container)
```

### OnTick

```csharp
public void OnTick(bool isWarmup, MissionPeer peer, int tickCount)
```

### GetState

```csharp
public bool GetState(MPConditionalEffect conditionalEffect, Agent agent)
```

### SetState

```csharp
public void SetState(MPConditionalEffect conditionalEffect, Agent agent, bool state)
```

### ResetStates

```csharp
public void ResetStates()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)