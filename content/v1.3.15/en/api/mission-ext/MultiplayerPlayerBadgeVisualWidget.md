---
title: "MultiplayerPlayerBadgeVisualWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerPlayerBadgeVisualWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerPlayerBadgeVisualWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerPlayerBadgeVisualWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/MultiplayerPlayerBadgeVisualWidget.cs`

## Overview

`MultiplayerPlayerBadgeVisualWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerPlayerBadgeVisualWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `BadgeId` | `public string BadgeId { get; set; }` |

## Key Methods

### SetForcedSize
`public void SetForcedSize(float width, float height)`

**Purpose:** Sets the value or state of `forced size`.

## Usage Example

```csharp
var widget = new MultiplayerPlayerBadgeVisualWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)