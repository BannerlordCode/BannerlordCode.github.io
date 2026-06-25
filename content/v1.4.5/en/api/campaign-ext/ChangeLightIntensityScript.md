---
title: "ChangeLightIntensityScript"
description: "Auto-generated class reference for ChangeLightIntensityScript."
---
# ChangeLightIntensityScript

**Namespace:** SandBox.Missions
**Module:** SandBox.Missions
**Type:** `public class ChangeLightIntensityScript : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `Modules.SandBox/SandBox/SandBox.Missions/ChangeLightIntensityScript.cs`

## Overview

`ChangeLightIntensityScript` lives in `SandBox.Missions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Missions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetTickRequirement
`public override TickRequirement GetTickRequirement()`

**Purpose:** **Purpose:** Reads and returns the tick requirement value held by the this instance.

```csharp
// Obtain an instance of ChangeLightIntensityScript from the subsystem API first
ChangeLightIntensityScript changeLightIntensityScript = ...;
var result = changeLightIntensityScript.GetTickRequirement();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ChangeLightIntensityScript changeLightIntensityScript = ...;
changeLightIntensityScript.GetTickRequirement();
```

## See Also

- [Area Index](../)