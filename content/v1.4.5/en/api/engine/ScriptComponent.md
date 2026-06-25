---
title: "ScriptComponent"
description: "Auto-generated class reference for ScriptComponent."
---
# ScriptComponent

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public abstract class ScriptComponent : NativeObject`
**Base:** `NativeObject`
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/ScriptComponent.cs`

## Overview

`ScriptComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `ScriptComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetName
`public string GetName()`

**Purpose:** Reads and returns the name value held by the this instance.

```csharp
// Obtain an instance of ScriptComponent from the subsystem API first
ScriptComponent scriptComponent = ...;
var result = scriptComponent.GetName();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
ScriptComponent instance = ...;
```

## See Also

- [Area Index](../)