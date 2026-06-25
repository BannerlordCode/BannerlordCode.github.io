---
title: "CustomMissionSpawnHandler"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CustomMissionSpawnHandler`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CustomMissionSpawnHandler

**Namespace:** TaleWorlds.MountAndBlade.MissionSpawnHandlers
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomMissionSpawnHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.MissionSpawnHandlers/CustomMissionSpawnHandler.cs`

## Overview

`CustomMissionSpawnHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `CustomMissionSpawnHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Called when the `behavior initialize` event is raised.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new CustomMissionSpawnHandler());
```

## See Also

- [Complete Class Catalog](../catalog)