<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NativeScriptComponent`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NativeScriptComponent

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class NativeScriptComponent : ScriptComponent`
**Base:** `ScriptComponent`
**File:** `TaleWorlds.Engine/NativeScriptComponent.cs`

## Overview

`NativeScriptComponent` is an AgentComponent — per-agent state/logic attached to an Agent. Access via `agent.GetComponent<NativeScriptComponent>()` (some have a typed agent property). Subclass AgentComponent to add your own.

## Usage Example

```csharp
// Typical usage of NativeScriptComponent (Component)
agent.GetComponent<NativeScriptComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)