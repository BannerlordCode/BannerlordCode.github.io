---
title: "GauntletBarberScreen"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GauntletBarberScreen`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletBarberScreen

**Namespace:** SandBox.GauntletUI
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletBarberScreen : ScreenBase, IGameStateListener, IFaceGeneratorScreen`
**Base:** `ScreenBase`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI/GauntletBarberScreen.cs`

## Overview

`GauntletBarberScreen` lives in `SandBox.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnExit
`public void OnExit()`

**Purpose:** Called when the `exit` event is raised.

## Usage Example

```csharp
var value = new GauntletBarberScreen();
value.OnExit();
```

## See Also

- [Complete Class Catalog](../catalog)