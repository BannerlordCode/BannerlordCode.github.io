<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LobbyPracticeStateGauntletScreen`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# LobbyPracticeStateGauntletScreen

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LobbyPracticeStateGauntletScreen : ScreenBase, IGameStateListener`
**Base:** `ScreenBase`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.GauntletUI/TaleWorlds.MountAndBlade.Multiplayer.GauntletUI/LobbyPracticeStateGauntletScreen.cs`

## Overview

`LobbyPracticeStateGauntletScreen` lives in `TaleWorlds.MountAndBlade.Multiplayer.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Layer` | `public GauntletLayer Layer { get; }` |

## Usage Example

```csharp
var value = new LobbyPracticeStateGauntletScreen();
```

## See Also

- [Complete Class Catalog](../catalog)