---
title: "ManagedScriptComponent"
description: "Auto-generated class reference for ManagedScriptComponent."
---
# ManagedScriptComponent

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class ManagedScriptComponent : ScriptComponent`
**Base:** `ScriptComponent`
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/ManagedScriptComponent.cs`

## Overview

`ManagedScriptComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `ManagedScriptComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### SetVariableEditorWidgetStatus
`public void SetVariableEditorWidgetStatus(string field, bool enabled)`

**Purpose:** Assigns a new value to variable editor widget status and updates the object's internal state.

```csharp
// Obtain an instance of ManagedScriptComponent from the subsystem API first
ManagedScriptComponent managedScriptComponent = ...;
managedScriptComponent.SetVariableEditorWidgetStatus("example", false);
```

### SetVariableEditorWidgetValue
`public void SetVariableEditorWidgetValue(string field, RglScriptFieldType fieldType, double value)`

**Purpose:** Assigns a new value to variable editor widget value and updates the object's internal state.

```csharp
// Obtain an instance of ManagedScriptComponent from the subsystem API first
ManagedScriptComponent managedScriptComponent = ...;
managedScriptComponent.SetVariableEditorWidgetValue("example", fieldType, 0);
```

## Usage Example

```csharp
var component = agent.GetComponent<ManagedScriptComponent>();
```

## See Also

- [Area Index](../)