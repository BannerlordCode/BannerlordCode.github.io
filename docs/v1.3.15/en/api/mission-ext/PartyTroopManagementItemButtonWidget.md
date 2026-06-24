<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyTroopManagementItemButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
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

## Mental Model

Treat `PartyTroopManagementItemButtonWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ActionButtonsContainer` | `public Widget ActionButtonsContainer { get; set; }` |

## Key Methods

### GetActionButtonAtIndex
`public Widget GetActionButtonAtIndex(int index)`

**Purpose:** Gets the current value of `action button at index`.

## Usage Example

```csharp
var widget = new PartyTroopManagementItemButtonWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)