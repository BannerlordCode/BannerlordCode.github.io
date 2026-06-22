<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameEntityComponent`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameEntityComponent

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public abstract class GameEntityComponent : NativeObject`
**Base:** `NativeObject`
**File:** `TaleWorlds.Engine/GameEntityComponent.cs`

## Overview

`GameEntityComponent` is an AgentComponent — per-agent state/logic attached to an Agent. Access via `agent.GetComponent<GameEntityComponent>()` (some have a typed agent property). Subclass AgentComponent to add your own.

## Key Methods

### GetEntity
```csharp
public WeakGameEntity GetEntity()
```

### GetFirstMetaMesh
```csharp
public virtual MetaMesh GetFirstMetaMesh()
```

## Usage Example

```csharp
// Typical usage of GameEntityComponent (Component)
agent.GetComponent<GameEntityComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)