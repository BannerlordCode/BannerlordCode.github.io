---
title: "GauntletEducationScreen"
description: "Auto-generated class reference for GauntletEducationScreen."
---
# GauntletEducationScreen

**Namespace:** SandBox.GauntletUI
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletEducationScreen : ScreenBase, IGameStateListener`
**Base:** `ScreenBase`
**File:** `Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI/GauntletEducationScreen.cs`

## Overview

`GauntletEducationScreen` lives in `SandBox.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CharacterLayer` | `public SceneLayer CharacterLayer { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
GauntletEducationScreen instance = ...;
```

## See Also

- [Area Index](../)