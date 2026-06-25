---
title: "SingleplayerPersonalKillFeedItemWidget"
description: "Auto-generated class reference for SingleplayerPersonalKillFeedItemWidget."
---
# SingleplayerPersonalKillFeedItemWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.KillFeed.Personal
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SingleplayerPersonalKillFeedItemWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/KillFeed/Personal/SingleplayerPersonalKillFeedItemWidget.cs`

## Overview

`SingleplayerPersonalKillFeedItemWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `SingleplayerPersonalKillFeedItemWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `NotificationTypeIconWidget` | `public Widget NotificationTypeIconWidget { get; set; }` |
| `NotificationBackgroundWidget` | `public Widget NotificationBackgroundWidget { get; set; }` |
| `AmountTextWidget` | `public TextWidget AmountTextWidget { get; set; }` |
| `MessageTextWidget` | `public RichTextWidget MessageTextWidget { get; set; }` |
| `FadeInTime` | `public float FadeInTime { get; }` |
| `StayTime` | `public float StayTime { get; }` |
| `FadeOutTime` | `public float FadeOutTime { get; }` |
| `TimeSinceCreation` | `public float TimeSinceCreation { get; }` |
| `IsDamage` | `public bool IsDamage { get; set; }` |
| `Amount` | `public int Amount { get; set; }` |
| `ItemType` | `public int ItemType { get; set; }` |
| `Message` | `public string Message { get; set; }` |
| `TypeID` | `public string TypeID { get; set; }` |
| `TroopTypeIconBrush` | `public Brush TroopTypeIconBrush { get; set; }` |
| `TroopTypeWidget` | `public Widget TroopTypeWidget { get; set; }` |
| `IsPaused` | `public bool IsPaused { get; set; }` |

## Key Methods

### SetSpeedModifier
`public void SetSpeedModifier(float newSpeed)`

**Purpose:** Assigns a new value to speed modifier and updates the object's internal state.

```csharp
// Obtain an instance of SingleplayerPersonalKillFeedItemWidget from the subsystem API first
SingleplayerPersonalKillFeedItemWidget singleplayerPersonalKillFeedItemWidget = ...;
singleplayerPersonalKillFeedItemWidget.SetSpeedModifier(0);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
SingleplayerPersonalKillFeedItemWidget widget = ...;
```

## See Also

- [Area Index](../)