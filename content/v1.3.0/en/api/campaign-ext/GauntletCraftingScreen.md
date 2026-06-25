---
title: "GauntletCraftingScreen"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GauntletCraftingScreen`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletCraftingScreen

**Namespace:** SandBox.GauntletUI
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletCraftingScreen : ScreenBase, ICraftingStateHandler, IGameStateListener`
**Base:** `ScreenBase`
**File:** `SandBox.GauntletUI/GauntletCraftingScreen.cs`

## Overview

`GauntletCraftingScreen` lives in `SandBox.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Initialize
`public void Initialize()`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### OnCraftingLogicInitialized
`public void OnCraftingLogicInitialized()`

**Purpose:** Called when the `crafting logic initialized` event is raised.

### OnCraftingLogicRefreshed
`public void OnCraftingLogicRefreshed()`

**Purpose:** Called when the `crafting logic refreshed` event is raised.

## Usage Example

```csharp
var value = new GauntletCraftingScreen();
value.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)