<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerPollProgressionWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerPollProgressionWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerPollProgressionWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer/MultiplayerPollProgressionWidget.cs`

## Overview

`MultiplayerPollProgressionWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerPollProgressionWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `HasOngoingPoll` | `public bool HasOngoingPoll { get; set; }` |
| `PollExtension` | `public ListPanel PollExtension { get; set; }` |

## Usage Example

```csharp
var widget = new MultiplayerPollProgressionWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)