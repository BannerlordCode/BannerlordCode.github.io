---
title: "RotateObjectScript"
description: "Auto-generated class reference for RotateObjectScript."
---
# RotateObjectScript

**Namespace:** SandBox.Missions
**Module:** SandBox.Missions
**Type:** `public class RotateObjectScript : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `SandBox/Missions/RotateObjectScript.cs`

## Overview

`RotateObjectScript` lives in `SandBox.Missions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Missions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**Purpose:** Reads and returns the tick requirement value held by the this instance.

```csharp
// Obtain an instance of RotateObjectScript from the subsystem API first
RotateObjectScript rotateObjectScript = ...;
var result = rotateObjectScript.GetTickRequirement();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
RotateObjectScript rotateObjectScript = ...;
rotateObjectScript.GetTickRequirement();
```

## See Also

- [Area Index](../)