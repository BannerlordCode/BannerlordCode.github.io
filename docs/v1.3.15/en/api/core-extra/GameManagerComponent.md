<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameManagerComponent`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameManagerComponent

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class GameManagerComponent : IEntityComponent`
**Base:** `IEntityComponent`
**File:** `TaleWorlds.Core/GameManagerComponent.cs`

## Overview

`GameManagerComponent` is an AgentComponent — per-agent state/logic attached to an Agent. Access via `agent.GetComponent<GameManagerComponent>()` (some have a typed agent property). Subclass AgentComponent to add your own.

## Key Properties

| Name | Signature |
|------|-----------|
| `GameManager` | `public GameManagerBase GameManager { get; internal set; }` |

## Usage Example

```csharp
// Typical usage of GameManagerComponent (Component)
agent.GetComponent<GameManagerComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)