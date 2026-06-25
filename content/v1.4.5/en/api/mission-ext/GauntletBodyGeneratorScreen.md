---
title: "GauntletBodyGeneratorScreen"
description: "Auto-generated class reference for GauntletBodyGeneratorScreen."
---
# GauntletBodyGeneratorScreen

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.BodyGenerator
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GauntletBodyGeneratorScreen : ScreenBase, IFaceGeneratorScreen`
**Base:** `ScreenBase`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI.BodyGenerator/GauntletBodyGeneratorScreen.cs`

## Overview

`GauntletBodyGeneratorScreen` lives in `TaleWorlds.MountAndBlade.GauntletUI.BodyGenerator` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.BodyGenerator` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnExit
`public void OnExit()`

**Purpose:** Invoked when the `exit` event is raised.

```csharp
// Obtain an instance of GauntletBodyGeneratorScreen from the subsystem API first
GauntletBodyGeneratorScreen gauntletBodyGeneratorScreen = ...;
gauntletBodyGeneratorScreen.OnExit();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GauntletBodyGeneratorScreen gauntletBodyGeneratorScreen = ...;
gauntletBodyGeneratorScreen.OnExit();
```

## See Also

- [Area Index](../)