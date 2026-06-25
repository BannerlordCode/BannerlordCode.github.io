---
title: "SingleplayerGeneralKillFeedItemWidget"
description: "Auto-generated class reference for SingleplayerGeneralKillFeedItemWidget."
---
# SingleplayerGeneralKillFeedItemWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.KillFeed.General
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SingleplayerGeneralKillFeedItemWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/KillFeed/General/SingleplayerGeneralKillFeedItemWidget.cs`

## Overview

`SingleplayerGeneralKillFeedItemWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `SingleplayerGeneralKillFeedItemWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `TroopTypeIconBrush` | `public Brush TroopTypeIconBrush { get; set; }` |
| `MurdererTypeWidget` | `public Widget MurdererTypeWidget { get; set; }` |
| `VictimTypeWidget` | `public Widget VictimTypeWidget { get; set; }` |
| `ActionIconWidget` | `public Widget ActionIconWidget { get; set; }` |
| `VictimNameWidget` | `public TextWidget VictimNameWidget { get; set; }` |
| `MurdererNameWidget` | `public TextWidget MurdererNameWidget { get; set; }` |
| `FadeInTime` | `public float FadeInTime { get; }` |
| `StayTime` | `public float StayTime { get; }` |
| `FadeOutTime` | `public float FadeOutTime { get; }` |
| `TimeSinceCreation` | `public float TimeSinceCreation { get; }` |
| `MurdererName` | `public string MurdererName { get; set; }` |
| `MurdererType` | `public string MurdererType { get; set; }` |
| `VictimName` | `public string VictimName { get; set; }` |
| `VictimType` | `public string VictimType { get; set; }` |
| `IsUnconscious` | `public bool IsUnconscious { get; set; }` |
| `IsHeadshot` | `public bool IsHeadshot { get; set; }` |
| `IsSuicide` | `public bool IsSuicide { get; set; }` |
| `IsDrowning` | `public bool IsDrowning { get; set; }` |
| `IsPaused` | `public bool IsPaused { get; set; }` |

## Key Methods

### SetSpeedModifier
`public void SetSpeedModifier(float newSpeed)`

**Purpose:** Assigns a new value to `speed modifier` and updates the object's internal state.

```csharp
// Obtain an instance of SingleplayerGeneralKillFeedItemWidget from the subsystem API first
SingleplayerGeneralKillFeedItemWidget singleplayerGeneralKillFeedItemWidget = ...;
singleplayerGeneralKillFeedItemWidget.SetSpeedModifier(0);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
SingleplayerGeneralKillFeedItemWidget widget = ...;
```

## See Also

- [Area Index](../)