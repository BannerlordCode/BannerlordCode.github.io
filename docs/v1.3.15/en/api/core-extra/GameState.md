<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameState`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameState

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** class
**Area:** Core

## Overview

> This is an auto-generated stub. `GameState` is a class in the `TaleWorlds.Core` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Predecessor` | `public GameState Predecessor { get; }` |
| `IsActive` | `public bool IsActive { get; }` |
| `Listeners` | `public IReadOnlyCollection<IGameStateListener> Listeners { get; set; }` |
| `GameStateManager` | `public GameStateManager GameStateManager { get; set; }` |
| `IsMusicMenuState` | `public virtual bool IsMusicMenuState { get; }` |
| `IsMenuState` | `public virtual bool IsMenuState { get; }` |
| `Activated` | `public bool Activated { get; }` |


## Key Methods

### RegisterListener

```csharp
public bool RegisterListener(IGameStateListener listener)
```

### UnregisterListener

```csharp
public bool UnregisterListener(IGameStateListener listener)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)