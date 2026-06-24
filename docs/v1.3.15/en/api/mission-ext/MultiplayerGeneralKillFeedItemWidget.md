<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerGeneralKillFeedItemWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerGeneralKillFeedItemWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.KillFeed
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerGeneralKillFeedItemWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/KillFeed/MultiplayerGeneralKillFeedItemWidget.cs`

## Overview

`MultiplayerGeneralKillFeedItemWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerGeneralKillFeedItemWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `TimeSinceCreation` | `public float TimeSinceCreation { get; }` |

## Key Methods

### SetSpeedModifier
`public void SetSpeedModifier(float newSpeed)`

**Purpose:** Sets the value or state of `speed modifier`.

## Usage Example

```csharp
var widget = new MultiplayerGeneralKillFeedItemWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)