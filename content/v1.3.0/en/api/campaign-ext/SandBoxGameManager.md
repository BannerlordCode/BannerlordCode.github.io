---
title: "SandBoxGameManager"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SandBoxGameManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Called when the `game end` event is raised.

### OnAfterCampaignStart
`public override void OnAfterCampaignStart(Game game)`

**Purpose:** Called when the `after campaign start` event is raised.

### OnLoadFinished
`public override void OnLoadFinished()`

**Purpose:** Called when the `load finished` event is raised.

### CampaignCreatorDelegate
`public delegate Campaign CampaignCreatorDelegate()`

**Purpose:** Handles logic related to `campaign creator delegate`.

## Usage Example

```csharp
var manager = SandBoxGameManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)