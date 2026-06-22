<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SaddleComponent`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SaddleComponent

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class SaddleComponent : ItemComponent`
**Base:** `ItemComponent`
**File:** `TaleWorlds.Core/SaddleComponent.cs`

## Overview

`SaddleComponent` is an AgentComponent — per-agent state/logic attached to an Agent. Access via `agent.GetComponent<SaddleComponent>()` (some have a typed agent property). Subclass AgentComponent to add your own.

## Key Methods

### GetCopy
```csharp
public override ItemComponent GetCopy()
```

## Usage Example

```csharp
// Typical usage of SaddleComponent (Component)
agent.GetComponent<SaddleComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)