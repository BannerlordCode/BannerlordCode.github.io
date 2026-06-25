---
title: "CommunityClientOnlineLobbyGameHandler"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CommunityClientOnlineLobbyGameHandler`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CommunityClientOnlineLobbyGameHandler

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CommunityClientOnlineLobbyGameHandler : ICommunityClientHandler`
**Base:** `ICommunityClientHandler`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer/CommunityClientOnlineLobbyGameHandler.cs`

## Overview

`CommunityClientOnlineLobbyGameHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `CommunityClientOnlineLobbyGameHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `LobbyState` | `public LobbyState LobbyState { get; }` |

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new CommunityClientOnlineLobbyGameHandler());
```

## See Also

- [Complete Class Catalog](../catalog)