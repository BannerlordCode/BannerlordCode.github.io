<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyTroopManagementItemButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyTroopManagementItemButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PartyTroopManagementItemButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyTroopManagementItemButtonWidget.cs`

## Overview

`PartyTroopManagementItemButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `ActionButtonsContainer` | `public Widget ActionButtonsContainer { get; set; }` |

## Key Methods

### GetActionButtonAtIndex
```csharp
public Widget GetActionButtonAtIndex(int index)
```

## Usage Example

```csharp
// Typical usage of PartyTroopManagementItemButtonWidget (Widget)
// 声明/访问一个 PartyTroopManagementItemButtonWidget
var widget = root.GetChild("partyTroopManagementItemButtonWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)