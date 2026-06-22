<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `UsableMissionObjectComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# UsableMissionObjectComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class UsableMissionObjectComponent`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/UsableMissionObjectComponent.cs`

## Overview

`UsableMissionObjectComponent` is an AgentComponent — per-agent state/logic attached to an Agent. Access via `agent.GetComponent<UsableMissionObjectComponent>()` (some have a typed agent property). Subclass AgentComponent to add your own.

## Key Methods

### IsOnTickRequired
```csharp
public virtual bool IsOnTickRequired()
```

## Usage Example

```csharp
// Typical usage of UsableMissionObjectComponent (Component)
agent.GetComponent<UsableMissionObjectComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)