<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BasicMissionHandler`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BasicMissionHandler

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions.Handlers
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BasicMissionHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Source/Missions/Handlers/BasicMissionHandler.cs`

## Overview

`BasicMissionHandler` is a mission handler (reaction logic). Add via AddMissionBehavior; it reacts to specific mission events.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsWarningWidgetOpened` | `public bool IsWarningWidgetOpened { get; }` |

## Key Methods

### OnBehaviorInitialize
```csharp
public override void OnBehaviorInitialize()
```

### CreateWarningWidgetForResult
```csharp
public void CreateWarningWidgetForResult(BattleEndLogic.ExitResult result)
```

## Usage Example

```csharp
// Typical usage of BasicMissionHandler (Handler)
Mission.Current.AddMissionBehavior(new BasicMissionHandler());
```

## See Also

- [Complete Class Catalog](../catalog)