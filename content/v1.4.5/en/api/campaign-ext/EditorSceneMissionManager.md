---
title: "EditorSceneMissionManager"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EditorSceneMissionManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# EditorSceneMissionManager

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public class EditorSceneMissionManager : MBGameManager`
**Base:** `MBGameManager`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/Sandbox/EditorSceneMissionManager.cs`

## Overview

`EditorSceneMissionManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `EditorSceneMissionManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnAfterCampaignStart
`public override void OnAfterCampaignStart(Game game)`

**Purpose:** Called when the `after campaign start` event is raised.

### OnLoadFinished
`public override void OnLoadFinished()`

**Purpose:** Called when the `load finished` event is raised.

## Usage Example

```csharp
var manager = EditorSceneMissionManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)