---
title: "GauntletOptionsScreen"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GauntletOptionsScreen`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletOptionsScreen

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GauntletOptionsScreen : ScreenBase`
**Base:** `ScreenBase`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI/GauntletOptionsScreen.cs`

## Overview

`GauntletOptionsScreen` lives in `TaleWorlds.MountAndBlade.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var value = new GauntletOptionsScreen();
```

## See Also

- [Complete Class Catalog](../catalog)