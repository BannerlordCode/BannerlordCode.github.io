---
title: "MissionAgentDamageFeedItemWidget"
description: "Auto-generated class reference for MissionAgentDamageFeedItemWidget."
---
# MissionAgentDamageFeedItemWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.DamageFeed
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionAgentDamageFeedItemWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/DamageFeed/MissionAgentDamageFeedItemWidget.cs`

## Overview

`MissionAgentDamageFeedItemWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MissionAgentDamageFeedItemWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `FadeInTime` | `public float FadeInTime { get; }` |
| `StayTime` | `public float StayTime { get; }` |
| `FadeOutTime` | `public float FadeOutTime { get; }` |
| `TimeSinceCreation` | `public float TimeSinceCreation { get; }` |

## Key Methods

### ShowFeed
`public void ShowFeed()`

**Purpose:** **Purpose:** Displays the UI or element associated with feed.

```csharp
// Obtain an instance of MissionAgentDamageFeedItemWidget from the subsystem API first
MissionAgentDamageFeedItemWidget missionAgentDamageFeedItemWidget = ...;
missionAgentDamageFeedItemWidget.ShowFeed();
```

### SetSpeedModifier
`public void SetSpeedModifier(float newSpeed)`

**Purpose:** **Purpose:** Assigns a new value to speed modifier and updates the object's internal state.

```csharp
// Obtain an instance of MissionAgentDamageFeedItemWidget from the subsystem API first
MissionAgentDamageFeedItemWidget missionAgentDamageFeedItemWidget = ...;
missionAgentDamageFeedItemWidget.SetSpeedModifier(0);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
MissionAgentDamageFeedItemWidget widget = ...;
```

## See Also

- [Area Index](../)