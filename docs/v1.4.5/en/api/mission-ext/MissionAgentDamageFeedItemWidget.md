<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionAgentDamageFeedItemWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionAgentDamageFeedItemWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.DamageFeed
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionAgentDamageFeedItemWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.DamageFeed/MissionAgentDamageFeedItemWidget.cs`

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

**Purpose:** Handles logic related to `show feed`.

### SetSpeedModifier
`public void SetSpeedModifier(float newSpeed)`

**Purpose:** Sets the value or state of `speed modifier`.

## Usage Example

```csharp
var widget = new MissionAgentDamageFeedItemWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)