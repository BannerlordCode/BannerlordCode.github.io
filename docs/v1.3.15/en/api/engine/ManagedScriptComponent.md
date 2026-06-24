<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ManagedScriptComponent`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ManagedScriptComponent

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class ManagedScriptComponent : ScriptComponent`
**Base:** `ScriptComponent`
**File:** `TaleWorlds.Engine/ManagedScriptComponent.cs`

## Overview

`ManagedScriptComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `ManagedScriptComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ScriptComponentBehavior` | `public ScriptComponentBehavior ScriptComponentBehavior { get; }` |

## Key Methods

### SetVariableEditorWidgetStatus
`public void SetVariableEditorWidgetStatus(string field, bool enabled)`

**Purpose:** Sets the value or state of `variable editor widget status`.

### SetVariableEditorWidgetValue
`public void SetVariableEditorWidgetValue(string field, RglScriptFieldType fieldType, double value)`

**Purpose:** Sets the value or state of `variable editor widget value`.

## Usage Example

```csharp
var component = agent.GetComponent<ManagedScriptComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)