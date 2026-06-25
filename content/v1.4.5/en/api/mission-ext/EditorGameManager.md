---
title: "EditorGameManager"
description: "Auto-generated class reference for EditorGameManager."
---
# EditorGameManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class EditorGameManager : MBGameManager`
**Base:** `MBGameManager`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/EditorGameManager.cs`

## Overview

`EditorGameManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `EditorGameManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnAfterCampaignStart
`public override void OnAfterCampaignStart(Game game)`

**Purpose:** Invoked when the `after campaign start` event is raised.

```csharp
// Obtain an instance of EditorGameManager from the subsystem API first
EditorGameManager editorGameManager = ...;
editorGameManager.OnAfterCampaignStart(game);
```

### OnLoadFinished
`public override void OnLoadFinished()`

**Purpose:** Invoked when the `load finished` event is raised.

```csharp
// Obtain an instance of EditorGameManager from the subsystem API first
EditorGameManager editorGameManager = ...;
editorGameManager.OnLoadFinished();
```

## Usage Example

```csharp
var manager = EditorGameManager.Current;
```

## See Also

- [Area Index](../)