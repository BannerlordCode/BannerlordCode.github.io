---
title: "GauntletBarberScreen"
description: "Auto-generated class reference for GauntletBarberScreen."
---
# GauntletBarberScreen

**Namespace:** SandBox.GauntletUI
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletBarberScreen : ScreenBase, IGameStateListener, IFaceGeneratorScreen`
**Base:** `ScreenBase`
**File:** `Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI/GauntletBarberScreen.cs`

## Overview

`GauntletBarberScreen` lives in `SandBox.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnExit
`public void OnExit()`

**Purpose:** Invoked when the exit event is raised.

```csharp
// Obtain an instance of GauntletBarberScreen from the subsystem API first
GauntletBarberScreen gauntletBarberScreen = ...;
gauntletBarberScreen.OnExit();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GauntletBarberScreen gauntletBarberScreen = ...;
gauntletBarberScreen.OnExit();
```

## See Also

- [Area Index](../)