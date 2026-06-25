---
title: "UpdateCustomGameData"
description: "Auto-generated class reference for UpdateCustomGameData."
---
# UpdateCustomGameData

**Namespace:** Messages.FromCustomBattleServer.ToCustomBattleServerManager
**Module:** Messages.FromCustomBattleServer
**Type:** `public class UpdateCustomGameData : Message`
**Base:** `Message`
**File:** `TaleWorlds.MountAndBlade.Diamond/Messages/FromCustomBattleServer/ToCustomBattleServerManager/UpdateCustomGameData.cs`

## Overview

`UpdateCustomGameData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `UpdateCustomGameData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `NewGameType` | `public string NewGameType { get; }` |
| `NewMap` | `public string NewMap { get; }` |
| `NewMaxNumberOfPlayers` | `public int NewMaxNumberOfPlayers { get; }` |

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
UpdateCustomGameData entry = ...;
```

## See Also

- [Area Index](../)