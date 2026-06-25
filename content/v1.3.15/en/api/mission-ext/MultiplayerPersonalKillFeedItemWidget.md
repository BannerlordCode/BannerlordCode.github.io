---
title: "MultiplayerPersonalKillFeedItemWidget"
description: "Auto-generated class reference for MultiplayerPersonalKillFeedItemWidget."
---
# MultiplayerPersonalKillFeedItemWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.KillFeed
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerPersonalKillFeedItemWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/KillFeed/MultiplayerPersonalKillFeedItemWidget.cs`

## Overview

`MultiplayerPersonalKillFeedItemWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerPersonalKillFeedItemWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `NotificationTypeIconWidget` | `public Widget NotificationTypeIconWidget { get; set; }` |
| `NotificationBackgroundWidget` | `public Widget NotificationBackgroundWidget { get; set; }` |
| `AmountTextWidget` | `public TextWidget AmountTextWidget { get; set; }` |
| `MessageTextWidget` | `public RichTextWidget MessageTextWidget { get; set; }` |
| `FadeInTime` | `public float FadeInTime { get; set; }` |
| `StayTime` | `public float StayTime { get; set; }` |
| `FadeOutTime` | `public float FadeOutTime { get; }` |
| `TimeSinceCreation` | `public float TimeSinceCreation { get; }` |
| `IsDamage` | `public bool IsDamage { get; set; }` |
| `Message` | `public string Message { get; set; }` |
| `ItemType` | `public int ItemType { get; set; }` |
| `Amount` | `public int Amount { get; set; }` |

## Key Methods

### SetSpeedModifier
`public void SetSpeedModifier(float newSpeed)`

**Purpose:** Assigns a new value to `speed modifier` and updates the object's internal state.

```csharp
// Obtain an instance of MultiplayerPersonalKillFeedItemWidget from the subsystem API first
MultiplayerPersonalKillFeedItemWidget multiplayerPersonalKillFeedItemWidget = ...;
multiplayerPersonalKillFeedItemWidget.SetSpeedModifier(0);
```

### SetMaxAlphaValue
`public void SetMaxAlphaValue(float newMaxAlpha)`

**Purpose:** Assigns a new value to `max alpha value` and updates the object's internal state.

```csharp
// Obtain an instance of MultiplayerPersonalKillFeedItemWidget from the subsystem API first
MultiplayerPersonalKillFeedItemWidget multiplayerPersonalKillFeedItemWidget = ...;
multiplayerPersonalKillFeedItemWidget.SetMaxAlphaValue(0);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
MultiplayerPersonalKillFeedItemWidget widget = ...;
```

## See Also

- [Area Index](../)