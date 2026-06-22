<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyManageTroopPopupWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyManageTroopPopupWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PartyManageTroopPopupWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyManageTroopPopupWidget.cs`

## Overview

`PartyManageTroopPopupWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `PrimaryInputKeyVisualParent` | `public Widget PrimaryInputKeyVisualParent { get; set; }` |
| `SecondaryInputKeyVisualParent` | `public Widget SecondaryInputKeyVisualParent { get; set; }` |
| `TertiaryInputKeyVisualParent` | `public Widget TertiaryInputKeyVisualParent { get; set; }` |
| `IsPrimaryActionAvailable` | `public bool IsPrimaryActionAvailable { get; set; }` |
| `IsSecondaryActionAvailable` | `public bool IsSecondaryActionAvailable { get; set; }` |
| `IsTertiaryActionAvailable` | `public bool IsTertiaryActionAvailable { get; set; }` |

## Usage Example

```csharp
// Typical usage of PartyManageTroopPopupWidget (Widget)
// 声明/访问一个 PartyManageTroopPopupWidget
var widget = root.GetChild("partyManageTroopPopupWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)