---
title: "CustomGameManager"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CustomGameManager`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CustomGameManager

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomGameManager : MBGameManager`
**Base:** `MBGameManager`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/CustomGameManager.cs`

## Overview

`CustomGameManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `CustomGameManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnAfterCampaignStart
`public override void OnAfterCampaignStart(Game game)`

**Purpose:** Called when the `after campaign start` event is raised.

### OnLoadFinished
`public override void OnLoadFinished()`

**Purpose:** Called when the `load finished` event is raised.

## Usage Example

```csharp
var manager = CustomGameManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)