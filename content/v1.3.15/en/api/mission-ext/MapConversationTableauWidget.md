---
title: "MapConversationTableauWidget"
description: "Auto-generated class reference for MapConversationTableauWidget."
---
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

**Purpose:** Invoked when the `clear texture provider` event is raised.

```csharp
// Obtain an instance of MapConversationTableauWidget from the subsystem API first
MapConversationTableauWidget mapConversationTableauWidget = ...;
mapConversationTableauWidget.OnClearTextureProvider();
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
MapConversationTableauWidget widget = ...;
```

## See Also

- [Area Index](../)