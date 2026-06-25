---
title: "GauntletGameOverScreen"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GauntletGameOverScreen`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletGameOverScreen

**Namespace:** SandBox.GauntletUI
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletGameOverScreen : ScreenBase, IGameOverStateHandler, IGameStateListener`
**Base:** `ScreenBase`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI/GauntletGameOverScreen.cs`

## Overview

`GauntletGameOverScreen` lives in `SandBox.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var value = new GauntletGameOverScreen();
```

## See Also

- [Complete Class Catalog](../catalog)