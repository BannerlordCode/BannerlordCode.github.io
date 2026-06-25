---
title: "SallyOutMissionNotificationsHandler"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SallyOutMissionNotificationsHandler`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SallyOutMissionNotificationsHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SallyOutMissionNotificationsHandler`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/SallyOutMissionNotificationsHandler.cs`

## Overview

`SallyOutMissionNotificationsHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `SallyOutMissionNotificationsHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnBesiegedSideFallsbackToKeep
`public void OnBesiegedSideFallsbackToKeep()`

**Purpose:** Called when the `besieged side fallsback to keep` event is raised.

### OnAfterStart
`public void OnAfterStart()`

**Purpose:** Called when the `after start` event is raised.

### OnMissionEnd
`public void OnMissionEnd()`

**Purpose:** Called when the `mission end` event is raised.

### OnDeploymentFinished
`public void OnDeploymentFinished()`

**Purpose:** Called when the `deployment finished` event is raised.

### OnMissionTick
`public void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new SallyOutMissionNotificationsHandler());
```

## See Also

- [Complete Class Catalog](../catalog)