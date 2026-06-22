<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ScriptComponent`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ScriptComponent

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public abstract class ScriptComponent : NativeObject`
**Base:** `NativeObject`
**File:** `TaleWorlds.Engine/ScriptComponent.cs`

## Overview

`ScriptComponent` is an AgentComponent — per-agent state/logic attached to an Agent. Access via `agent.GetComponent<ScriptComponent>()` (some have a typed agent property). Subclass AgentComponent to add your own.

## Key Methods

### GetName
```csharp
public string GetName()
```

## Usage Example

```csharp
// Typical usage of ScriptComponent (Component)
agent.GetComponent<ScriptComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)