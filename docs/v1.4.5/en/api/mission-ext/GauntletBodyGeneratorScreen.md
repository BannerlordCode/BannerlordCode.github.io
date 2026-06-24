<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GauntletBodyGeneratorScreen`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletBodyGeneratorScreen

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.BodyGenerator
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GauntletBodyGeneratorScreen : ScreenBase, IFaceGeneratorScreen`
**Base:** `ScreenBase`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI.BodyGenerator/GauntletBodyGeneratorScreen.cs`

## Overview

`GauntletBodyGeneratorScreen` lives in `TaleWorlds.MountAndBlade.GauntletUI.BodyGenerator` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.BodyGenerator` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnExit
`public void OnExit()`

**Purpose:** Called when the `exit` event is raised.

## Usage Example

```csharp
var value = new GauntletBodyGeneratorScreen();
value.OnExit();
```

## See Also

- [Complete Class Catalog](../catalog)