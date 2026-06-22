<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyUpgradesContainerWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyUpgradesContainerWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PartyUpgradesContainerWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyUpgradesContainerWidget.cs`

## Overview

`PartyUpgradesContainerWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `AnyUpgradeHasRequirement` | `public bool AnyUpgradeHasRequirement { get; set; }` |

## Usage Example

```csharp
// Typical usage of PartyUpgradesContainerWidget (Widget)
// 声明/访问一个 PartyUpgradesContainerWidget
var widget = root.GetChild("partyUpgradesContainerWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)