---
title: "MissionMessageUIHandler"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionMessageUIHandler`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionMessageUIHandler

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMessageUIHandler : MissionView`
**Base:** `MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Singleplayer/MissionMessageUIHandler.cs`

## Overview

`MissionMessageUIHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MissionMessageUIHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### ShowMessage
`public void ShowMessage(string str, float duration, bool hasPriority = true)`

**Purpose:** Handles logic related to `show message`.

### DeleteMessage
`public void DeleteMessage(string str)`

**Purpose:** Handles logic related to `delete message`.

### DeleteCurrentMessage
`public void DeleteCurrentMessage()`

**Purpose:** Handles logic related to `delete current message`.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new MissionMessageUIHandler());
```

## See Also

- [Complete Class Catalog](../catalog)