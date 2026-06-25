---
title: "LobbyGameStateScreen"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LobbyGameStateScreen`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# LobbyGameStateScreen

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.View.Screens
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LobbyGameStateScreen : ScreenBase, IGameStateListener`
**Base:** `ScreenBase`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.View/TaleWorlds.MountAndBlade.Multiplayer.View.Screens/LobbyGameStateScreen.cs`

## Overview

`LobbyGameStateScreen` lives in `TaleWorlds.MountAndBlade.Multiplayer.View.Screens` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.View.Screens` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var value = new LobbyGameStateScreen();
```

## See Also

- [Complete Class Catalog](../catalog)