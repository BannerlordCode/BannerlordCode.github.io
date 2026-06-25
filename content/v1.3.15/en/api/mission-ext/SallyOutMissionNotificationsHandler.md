---
title: "SallyOutMissionNotificationsHandler"
description: "Auto-generated class reference for SallyOutMissionNotificationsHandler."
---
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

**Purpose:** Invoked when the `besieged side fallsback to keep` event is raised.

```csharp
// Obtain an instance of SallyOutMissionNotificationsHandler from the subsystem API first
SallyOutMissionNotificationsHandler sallyOutMissionNotificationsHandler = ...;
sallyOutMissionNotificationsHandler.OnBesiegedSideFallsbackToKeep();
```

### OnAfterStart
`public void OnAfterStart()`

**Purpose:** Invoked when the `after start` event is raised.

```csharp
// Obtain an instance of SallyOutMissionNotificationsHandler from the subsystem API first
SallyOutMissionNotificationsHandler sallyOutMissionNotificationsHandler = ...;
sallyOutMissionNotificationsHandler.OnAfterStart();
```

### OnMissionEnd
`public void OnMissionEnd()`

**Purpose:** Invoked when the `mission end` event is raised.

```csharp
// Obtain an instance of SallyOutMissionNotificationsHandler from the subsystem API first
SallyOutMissionNotificationsHandler sallyOutMissionNotificationsHandler = ...;
sallyOutMissionNotificationsHandler.OnMissionEnd();
```

### OnDeploymentFinished
`public void OnDeploymentFinished()`

**Purpose:** Invoked when the `deployment finished` event is raised.

```csharp
// Obtain an instance of SallyOutMissionNotificationsHandler from the subsystem API first
SallyOutMissionNotificationsHandler sallyOutMissionNotificationsHandler = ...;
sallyOutMissionNotificationsHandler.OnDeploymentFinished();
```

### OnMissionTick
`public void OnMissionTick(float dt)`

**Purpose:** Invoked when the `mission tick` event is raised.

```csharp
// Obtain an instance of SallyOutMissionNotificationsHandler from the subsystem API first
SallyOutMissionNotificationsHandler sallyOutMissionNotificationsHandler = ...;
sallyOutMissionNotificationsHandler.OnMissionTick(0);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<SallyOutMissionNotificationsHandler>();
```

## See Also

- [Area Index](../)