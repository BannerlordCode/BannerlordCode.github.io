---
title: "BasicMissionHandler"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BasicMissionHandler`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BasicMissionHandler

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions.Handlers
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BasicMissionHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Source/Missions/Handlers/BasicMissionHandler.cs`

## Overview

`BasicMissionHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `BasicMissionHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsWarningWidgetOpened` | `public bool IsWarningWidgetOpened { get; }` |

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Called when the `behavior initialize` event is raised.

### CreateWarningWidgetForResult
`public void CreateWarningWidgetForResult(BattleEndLogic.ExitResult result)`

**Purpose:** Creates a new `warning widget for result` instance or object.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new BasicMissionHandler());
```

## See Also

- [Complete Class Catalog](../catalog)