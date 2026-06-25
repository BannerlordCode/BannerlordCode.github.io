---
title: "MissionBoardGameDebugHandler"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionBoardGameDebugHandler`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionBoardGameDebugHandler

**Namespace:** SandBox.BoardGames.MissionLogics
**Module:** SandBox.BoardGames
**Type:** `public class MissionBoardGameDebugHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/BoardGames/MissionLogics/MissionBoardGameDebugHandler.cs`

## Overview

`MissionBoardGameDebugHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MissionBoardGameDebugHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new MissionBoardGameDebugHandler());
```

## See Also

- [Complete Class Catalog](../catalog)