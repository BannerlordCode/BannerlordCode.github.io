---
title: "CameraJumpScript"
description: "Auto-generated class reference for CameraJumpScript."
---
# CameraJumpScript

**Namespace:** SandBox.Missions
**Module:** SandBox.Missions
**Type:** `public class CameraJumpScript : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `Modules.SandBox/SandBox/SandBox.Missions/CameraJumpScript.cs`

## Overview

`CameraJumpScript` lives in `SandBox.Missions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Missions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetTickRequirement
`public override TickRequirement GetTickRequirement()`

**Purpose:** Reads and returns the `tick requirement` value held by the current object.

```csharp
// Obtain an instance of CameraJumpScript from the subsystem API first
CameraJumpScript cameraJumpScript = ...;
var result = cameraJumpScript.GetTickRequirement();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CameraJumpScript cameraJumpScript = ...;
cameraJumpScript.GetTickRequirement();
```

## See Also

- [Area Index](../)