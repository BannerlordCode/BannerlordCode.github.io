<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CraftingPieceTypeSelectorButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CraftingPieceTypeSelectorButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CraftingPieceTypeSelectorButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Crafting/CraftingPieceTypeSelectorButtonWidget.cs`

## Overview

`CraftingPieceTypeSelectorButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `CraftingPieceTypeSelectorButtonWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `VisualsWidget` | `public Widget VisualsWidget { get; set; }` |

## Key Methods

### SetState
`public override void SetState(string stateName)`

**Purpose:** Sets the value or state of `state`.

## Usage Example

```csharp
var widget = new CraftingPieceTypeSelectorButtonWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)