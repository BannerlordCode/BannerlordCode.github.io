---
title: "BrightnessDemoTableau"
description: "Auto-generated class reference for BrightnessDemoTableau."
---
# BrightnessDemoTableau

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BrightnessDemoTableau`
**Base:** none
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.Tableaus/BrightnessDemoTableau.cs`

## Overview

`BrightnessDemoTableau` lives in `TaleWorlds.MountAndBlade.View.Tableaus` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.Tableaus` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Texture` | `public Texture Texture { get; }` |

## Key Methods

### SetDemoType
`public void SetDemoType(int demoType)`

**Purpose:** Assigns a new value to demo type and updates the object's internal state.

```csharp
// Obtain an instance of BrightnessDemoTableau from the subsystem API first
BrightnessDemoTableau brightnessDemoTableau = ...;
brightnessDemoTableau.SetDemoType(0);
```

### SetTargetSize
`public void SetTargetSize(int width, int height)`

**Purpose:** Assigns a new value to target size and updates the object's internal state.

```csharp
// Obtain an instance of BrightnessDemoTableau from the subsystem API first
BrightnessDemoTableau brightnessDemoTableau = ...;
brightnessDemoTableau.SetTargetSize(0, 0);
```

### OnFinalize
`public void OnFinalize()`

**Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of BrightnessDemoTableau from the subsystem API first
BrightnessDemoTableau brightnessDemoTableau = ...;
brightnessDemoTableau.OnFinalize();
```

### SetScene
`public void SetScene()`

**Purpose:** Assigns a new value to scene and updates the object's internal state.

```csharp
// Obtain an instance of BrightnessDemoTableau from the subsystem API first
BrightnessDemoTableau brightnessDemoTableau = ...;
brightnessDemoTableau.SetScene();
```

### OnTick
`public void OnTick(float dt)`

**Purpose:** Invoked when the tick event is raised.

```csharp
// Obtain an instance of BrightnessDemoTableau from the subsystem API first
BrightnessDemoTableau brightnessDemoTableau = ...;
brightnessDemoTableau.OnTick(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BrightnessDemoTableau brightnessDemoTableau = ...;
brightnessDemoTableau.SetDemoType(0);
```

## See Also

- [Area Index](../)