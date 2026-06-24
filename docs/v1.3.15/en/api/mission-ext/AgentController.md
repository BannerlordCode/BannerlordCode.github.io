
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AgentController`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AgentController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** public class AgentController
**Base:** none
**File:** `TaleWorlds.MountAndBlade/AgentController.cs`

## Overview

`AgentController` is the base for per-agent controllers (movement, AI, etc.) attached to an `Agent`. Each controller has an `Owner` agent and a `Mission`. Mods define custom controller types (via `AgentControllerType`) and add them to agents to run per-tick logic. Controllers are initialized via `OnInitialize`.

## Mental Model

Treat `AgentController` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

## Key Properties

| Name | Signature |
|------|-----------|
| `Owner` | `public Agent Owner { get; set; }` |
| `Mission` | `public Mission Mission { get; set; }` |

## Key Methods

### OnInitialize
```csharp
public virtual void OnInitialize()
```

## Usage Example

```csharp
// Add a custom controller to a newly spawned agent
public class MyAgentController : AgentController
{
    public override void OnTick(float dt)
    {
        // per-tick logic for this agent
        base.OnTick(dt);
    }
}

// On agent spawn:
var ctrl = agent.AddComponent<MyAgentController>();
ctrl.OnInitialize();
```

## See Also

- [Complete Class Catalog](../catalog)