---
title: "ScriptComponent"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ScriptComponent`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ScriptComponent

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public abstract class ScriptComponent : NativeObject`
**Base:** `NativeObject`
**File:** `TaleWorlds.Engine/ScriptComponent.cs`

## Overview

`ScriptComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `ScriptComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetName
`public string GetName()`

**Purpose:** Gets the current value of `name`.

## Usage Example

```csharp
var implementation = new CustomScriptComponent();
```

## See Also

- [Complete Class Catalog](../catalog)