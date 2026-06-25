---
title: "MultiplayerPlayerHelper"
description: "Auto-generated class reference for MultiplayerPlayerHelper."
---
# MultiplayerPlayerHelper

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MultiplayerPlayerHelper`
**Base:** none
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/MultiplayerPlayerHelper.cs`

## Overview

`MultiplayerPlayerHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `MultiplayerPlayerHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### IsBlocked
`public static bool IsBlocked(PlayerId playerID)`

**Purpose:** Determines whether the current object is in the `blocked` state or condition.

```csharp
// Static call; no instance required
MultiplayerPlayerHelper.IsBlocked(playerID);
```

## Usage Example

```csharp
MultiplayerPlayerHelper.Initialize();
```

## See Also

- [Area Index](../)