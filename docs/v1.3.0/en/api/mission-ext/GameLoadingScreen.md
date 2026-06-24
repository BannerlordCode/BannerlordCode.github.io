<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameLoadingScreen`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GameLoadingScreen

**Namespace:** TaleWorlds.MountAndBlade.View.Screens
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GameLoadingScreen : ScreenBase, IGameStateListener`
**Base:** `ScreenBase`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Screens/GameLoadingScreen.cs`

## Overview

`GameLoadingScreen` lives in `TaleWorlds.MountAndBlade.View.Screens` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.Screens` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var value = new GameLoadingScreen();
```

## See Also

- [Complete Class Catalog](../catalog)