---
title: "CameraFadeState"
description: "Auto-generated class reference for CameraFadeState."
---
# CameraFadeState

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public enum CameraFadeState`
**Base:** none
**File:** `SandBox.View/Map/MapCameraFadeView.cs`

## Overview

`CameraFadeState` lives in `SandBox.View.Map` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.View.Map` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
CameraFadeState instance = ...;
```

## See Also

- [Area Index](../)