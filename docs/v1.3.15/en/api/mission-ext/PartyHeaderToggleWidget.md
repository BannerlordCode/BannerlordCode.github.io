<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyHeaderToggleWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
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
```csharp
public override void SetState(string stateName)
```

## Usage Example

```csharp
// Typical usage of PartyHeaderToggleWidget (Widget)
// 声明/访问一个 PartyHeaderToggleWidget
var widget = root.GetChild("partyHeaderToggleWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)