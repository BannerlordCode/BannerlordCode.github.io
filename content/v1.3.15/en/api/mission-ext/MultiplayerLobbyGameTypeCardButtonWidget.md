---
title: "MultiplayerLobbyGameTypeCardButtonWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerLobbyGameTypeCardButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerLobbyGameTypeCardButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyGameTypeCardButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/MultiplayerLobbyGameTypeCardButtonWidget.cs`

## Overview

`MultiplayerLobbyGameTypeCardButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerLobbyGameTypeCardButtonWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `GameTypeId` | `public string GameTypeId { get; set; }` |
| `GameTypeImageWidget` | `public BrushWidget GameTypeImageWidget { get; set; }` |
| `CheckboxWidget` | `public Widget CheckboxWidget { get; set; }` |

## Usage Example

```csharp
var widget = new MultiplayerLobbyGameTypeCardButtonWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)