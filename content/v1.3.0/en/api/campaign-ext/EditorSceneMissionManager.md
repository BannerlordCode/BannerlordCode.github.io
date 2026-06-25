---
title: "EditorSceneMissionManager"
description: "Auto-generated class reference for EditorSceneMissionManager."
---
# EditorSceneMissionManager

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public class EditorSceneMissionManager : MBGameManager`
**Base:** `MBGameManager`
**File:** `SandBox/EditorSceneMissionManager.cs`

## Overview

`EditorSceneMissionManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `EditorSceneMissionManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnAfterCampaignStart
`public override void OnAfterCampaignStart(Game game)`

**Purpose:** **Purpose:** Invoked when the after campaign start event is raised.

```csharp
// Obtain an instance of EditorSceneMissionManager from the subsystem API first
EditorSceneMissionManager editorSceneMissionManager = ...;
editorSceneMissionManager.OnAfterCampaignStart(game);
```

### OnLoadFinished
`public override void OnLoadFinished()`

**Purpose:** **Purpose:** Invoked when the load finished event is raised.

```csharp
// Obtain an instance of EditorSceneMissionManager from the subsystem API first
EditorSceneMissionManager editorSceneMissionManager = ...;
editorSceneMissionManager.OnLoadFinished();
```

## Usage Example

```csharp
var manager = EditorSceneMissionManager.Current;
```

## See Also

- [Area Index](../)