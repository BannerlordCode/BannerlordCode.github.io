---
title: "MPLobbyProfileGameModeSelectorItemVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPLobbyProfileGameModeSelectorItemVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPLobbyProfileGameModeSelectorItemVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyProfileGameModeSelectorItemVM : SelectorItemVM`
**Base:** `SelectorItemVM`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile/MPLobbyProfileGameModeSelectorItemVM.cs`

## Overview

`MPLobbyProfileGameModeSelectorItemVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `GameModeCode` | `public string GameModeCode { get; }` |

## Usage Example

```csharp
var value = new MPLobbyProfileGameModeSelectorItemVM();
```

## See Also

- [Complete Class Catalog](../catalog)