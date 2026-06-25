---
title: "GauntletGamepadCursor"
description: "Auto-generated class reference for GauntletGamepadCursor."
---
# GauntletGamepadCursor

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GauntletGamepadCursor : GlobalLayer`
**Base:** `GlobalLayer`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI/GauntletGamepadCursor.cs`

## Overview

`GauntletGamepadCursor` lives in `TaleWorlds.MountAndBlade.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Initialize
`public static void Initialize()`

**Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Static call; no instance required
GauntletGamepadCursor.Initialize();
```

## Usage Example

```csharp
GauntletGamepadCursor.Initialize();
```

## See Also

- [Area Index](../)