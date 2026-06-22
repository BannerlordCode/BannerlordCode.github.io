<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VisualDefinition`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VisualDefinition

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `VisualDefinition` is a class in the `TaleWorlds.GauntletUI` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; }` |
| `TransitionDuration` | `public float TransitionDuration { get; }` |
| `DelayOnBegin` | `public float DelayOnBegin { get; }` |
| `EaseType` | `public AnimationInterpolation.Type EaseType { get; }` |
| `EaseFunction` | `public AnimationInterpolation.Function EaseFunction { get; }` |
| `VisualStates` | `public Dictionary<string, VisualState> VisualStates { get; }` |


## Key Methods

### AddVisualState

```csharp
public void AddVisualState(VisualState visualState)
```

### GetVisualState

```csharp
public VisualState GetVisualState(string state)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)