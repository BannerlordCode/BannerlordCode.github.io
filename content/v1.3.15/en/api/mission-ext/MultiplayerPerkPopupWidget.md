---
title: "MultiplayerPerkPopupWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerPerkPopupWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerPerkPopupWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Perks
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerPerkPopupWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Perks/MultiplayerPerkPopupWidget.cs`

## Overview

`MultiplayerPerkPopupWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerPerkPopupWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ShowAboveContainer` | `public bool ShowAboveContainer { get; set; }` |

## Key Methods

### SetPopupPerksContainer
`public void SetPopupPerksContainer(MultiplayerPerkContainerPanelWidget container)`

**Purpose:** Sets the value or state of `popup perks container`.

## Usage Example

```csharp
var widget = new MultiplayerPerkPopupWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)