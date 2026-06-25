---
title: "CustomGameManager"
description: "Auto-generated class reference for CustomGameManager."
---
# CustomGameManager

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomGameManager : MBGameManager`
**Base:** `MBGameManager`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/CustomGameManager.cs`

## Overview

`CustomGameManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `CustomGameManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnAfterCampaignStart
`public override void OnAfterCampaignStart(Game game)`

**Purpose:** **Purpose:** Invoked when the after campaign start event is raised.

```csharp
// Obtain an instance of CustomGameManager from the subsystem API first
CustomGameManager customGameManager = ...;
customGameManager.OnAfterCampaignStart(game);
```

### OnLoadFinished
`public override void OnLoadFinished()`

**Purpose:** **Purpose:** Invoked when the load finished event is raised.

```csharp
// Obtain an instance of CustomGameManager from the subsystem API first
CustomGameManager customGameManager = ...;
customGameManager.OnLoadFinished();
```

## Usage Example

```csharp
var manager = CustomGameManager.Current;
```

## See Also

- [Area Index](../)