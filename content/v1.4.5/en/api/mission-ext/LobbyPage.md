---
title: "LobbyPage"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LobbyPage`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# LobbyPage

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public enum LobbyPage`
**Area:** mission-ext

## Overview

`LobbyPage` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `NotAssigned` |
| `0` |
| `Authentication` |
| `1` |
| `Rejoin` |
| `2` |
| `Options` |
| `3` |
| `Home` |
| `4` |
| `Armory` |
| `5` |
| `Matchmaking` |
| `6` |
| `Profile` |
| `7` |
| `HotkeySelectablePageBegin` |
| `3` |
| `HotkeySelectablePageEnd` |

## Usage Example

```csharp
LobbyPage example = LobbyPage.NotAssigned;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
