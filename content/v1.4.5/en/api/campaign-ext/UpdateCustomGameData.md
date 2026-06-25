---
title: "UpdateCustomGameData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `UpdateCustomGameData`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# UpdateCustomGameData

**Namespace:** Messages.FromCustomBattleServer.ToCustomBattleServerManager
**Module:** Messages.FromCustomBattleServer
**Type:** `public class UpdateCustomGameData : Message`
**Base:** `Message`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/Messages.FromCustomBattleServer.ToCustomBattleServerManager/UpdateCustomGameData.cs`

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
var value = new UpdateCustomGameData();
```

## See Also

- [Complete Class Catalog](../catalog)