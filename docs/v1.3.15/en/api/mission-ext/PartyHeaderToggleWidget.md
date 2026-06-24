<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyHeaderToggleWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyHeaderToggleWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PartyHeaderToggleWidget : ToggleButtonWidget`
**Base:** `ToggleButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyHeaderToggleWidget.cs`

## Overview

`PartyHeaderToggleWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `PartyHeaderToggleWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `AutoToggleTransferButtonState` | `public bool AutoToggleTransferButtonState { get; set; }` |
| `ListPanel` | `public ListPanel ListPanel { get; set; }` |
| `TransferButtonWidget` | `public ButtonWidget TransferButtonWidget { get; set; }` |
| `CollapseIndicator` | `public BrushWidget CollapseIndicator { get; set; }` |
| `IsRelevant` | `public bool IsRelevant { get; set; }` |
| `BlockInputsWhenDisabled` | `public bool BlockInputsWhenDisabled { get; set; }` |

## Key Methods

### SetState
`public override void SetState(string stateName)`

**Purpose:** Sets the value or state of `state`.

## Usage Example

```csharp
var widget = new PartyHeaderToggleWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)