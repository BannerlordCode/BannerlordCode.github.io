---
title: "MapConversationTableauWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapConversationTableauWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapConversationTableauWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.MapConversation
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MapConversationTableauWidget : TextureWidget`
**Base:** `TextureWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/MapConversation/MapConversationTableauWidget.cs`

## Overview

`MapConversationTableauWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MapConversationTableauWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Data` | `public object Data { get; set; }` |

## Key Methods

### OnClearTextureProvider
`public override void OnClearTextureProvider()`

**Purpose:** Called when the `clear texture provider` event is raised.

## Usage Example

```csharp
var widget = new MapConversationTableauWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)