---
title: "SandBoxGameManager"
description: "Auto-generated class reference for SandBoxGameManager."
---
# SandBoxGameManager

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public class SandBoxGameManager : MBGameManager`
**Base:** `MBGameManager`
**File:** `SandBox/SandBoxGameManager.cs`

## Overview

`SandBoxGameManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `SandBoxGameManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `LoadingSavedGame` | `public bool LoadingSavedGame { get; }` |
| `MetaData` | `public MetaData MetaData { get; }` |

## Key Methods

### OnGameEnd
`public override void OnGameEnd(Game game)`

**Purpose:** Invoked when the `game end` event is raised.

```csharp
// Obtain an instance of SandBoxGameManager from the subsystem API first
SandBoxGameManager sandBoxGameManager = ...;
sandBoxGameManager.OnGameEnd(game);
```

### OnAfterCampaignStart
`public override void OnAfterCampaignStart(Game game)`

**Purpose:** Invoked when the `after campaign start` event is raised.

```csharp
// Obtain an instance of SandBoxGameManager from the subsystem API first
SandBoxGameManager sandBoxGameManager = ...;
sandBoxGameManager.OnAfterCampaignStart(game);
```

### OnLoadFinished
`public override void OnLoadFinished()`

**Purpose:** Invoked when the `load finished` event is raised.

```csharp
// Obtain an instance of SandBoxGameManager from the subsystem API first
SandBoxGameManager sandBoxGameManager = ...;
sandBoxGameManager.OnLoadFinished();
```

### CampaignCreatorDelegate
`public delegate Campaign CampaignCreatorDelegate()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of SandBoxGameManager from the subsystem API first
SandBoxGameManager sandBoxGameManager = ...;
var result = sandBoxGameManager.CampaignCreatorDelegate();
```

## Usage Example

```csharp
var manager = SandBoxGameManager.Current;
```

## See Also

- [Area Index](../)