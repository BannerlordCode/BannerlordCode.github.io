---
title: "MultiplayerPlayerContextMenuHelper"
description: "Auto-generated class reference for MultiplayerPlayerContextMenuHelper."
---
# MultiplayerPlayerContextMenuHelper

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MultiplayerPlayerContextMenuHelper`
**Base:** none
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/MultiplayerPlayerContextMenuHelper.cs`

## Overview

`MultiplayerPlayerContextMenuHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `MultiplayerPlayerContextMenuHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AddLobbyViewProfileOptions
`public static void AddLobbyViewProfileOptions(MPLobbyPlayerBaseVM player, MBBindingList<StringPairItemWithActionVM> contextMenuOptions)`

**Purpose:** Adds lobby view profile options to the current collection or state.

```csharp
// Static call; no instance required
MultiplayerPlayerContextMenuHelper.AddLobbyViewProfileOptions(player, contextMenuOptions);
```

### AddMissionViewProfileOptions
`public static void AddMissionViewProfileOptions(MPPlayerVM player, MBBindingList<StringPairItemWithActionVM> contextMenuOptions)`

**Purpose:** Adds mission view profile options to the current collection or state.

```csharp
// Static call; no instance required
MultiplayerPlayerContextMenuHelper.AddMissionViewProfileOptions(player, contextMenuOptions);
```

## Usage Example

```csharp
MultiplayerPlayerContextMenuHelper.Initialize();
```

## See Also

- [Area Index](../)