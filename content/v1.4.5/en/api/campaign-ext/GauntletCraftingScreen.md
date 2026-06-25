---
title: "GauntletCraftingScreen"
description: "Auto-generated class reference for GauntletCraftingScreen."
---
# GauntletCraftingScreen

**Namespace:** SandBox.GauntletUI
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletCraftingScreen : ScreenBase, ICraftingStateHandler, IGameStateListener`
**Base:** `ScreenBase`
**File:** `Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI/GauntletCraftingScreen.cs`

## Overview

`GauntletCraftingScreen` lives in `SandBox.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Initialize
`public void Initialize()`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of GauntletCraftingScreen from the subsystem API first
GauntletCraftingScreen gauntletCraftingScreen = ...;
gauntletCraftingScreen.Initialize();
```

### OnCraftingLogicInitialized
`public void OnCraftingLogicInitialized()`

**Purpose:** **Purpose:** Invoked when the crafting logic initialized event is raised.

```csharp
// Obtain an instance of GauntletCraftingScreen from the subsystem API first
GauntletCraftingScreen gauntletCraftingScreen = ...;
gauntletCraftingScreen.OnCraftingLogicInitialized();
```

### OnCraftingLogicRefreshed
`public void OnCraftingLogicRefreshed()`

**Purpose:** **Purpose:** Invoked when the crafting logic refreshed event is raised.

```csharp
// Obtain an instance of GauntletCraftingScreen from the subsystem API first
GauntletCraftingScreen gauntletCraftingScreen = ...;
gauntletCraftingScreen.OnCraftingLogicRefreshed();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GauntletCraftingScreen gauntletCraftingScreen = ...;
gauntletCraftingScreen.Initialize();
```

## See Also

- [Area Index](../)