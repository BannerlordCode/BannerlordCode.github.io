<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ManagedScriptComponent`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ManagedScriptComponent

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class ManagedScriptComponent : ScriptComponent`
**Base:** `ScriptComponent`
**File:** `TaleWorlds.Engine/ManagedScriptComponent.cs`

## Overview

`ManagedScriptComponent` is an AgentComponent — per-agent state/logic attached to an Agent. Access via `agent.GetComponent<ManagedScriptComponent>()` (some have a typed agent property). Subclass AgentComponent to add your own.

## Key Properties

| Name | Signature |
|------|-----------|
| `ScriptComponentBehavior` | `public ScriptComponentBehavior ScriptComponentBehavior { get { return EngineApplicationInterface.IScriptComponent.GetScriptComponentBehavior(base.Pointer); }` |

## Key Methods

### SetVariableEditorWidgetStatus
```csharp
public void SetVariableEditorWidgetStatus(string field, bool enabled)
```

### SetVariableEditorWidgetValue
```csharp
public void SetVariableEditorWidgetValue(string field, RglScriptFieldType fieldType, double value)
```

## Usage Example

```csharp
// Typical usage of ManagedScriptComponent (Component)
agent.GetComponent<ManagedScriptComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)