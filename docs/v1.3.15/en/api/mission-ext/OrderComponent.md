<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OrderComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OrderComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class OrderComponent`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/OrderComponent.cs`

## Overview

`OrderComponent` is an AgentComponent — per-agent state/logic attached to an Agent. Access via `agent.GetComponent<OrderComponent>()` (some have a typed agent property). Subclass AgentComponent to add your own.

## Key Properties

| Name | Signature |
|------|-----------|
| `OrderType` | `public abstract OrderType OrderType { get; }` |

## Key Methods

### GetDirection
```csharp
public Vec2 GetDirection(Formation f)
```

## Usage Example

```csharp
// Typical usage of OrderComponent (Component)
agent.GetComponent<OrderComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)