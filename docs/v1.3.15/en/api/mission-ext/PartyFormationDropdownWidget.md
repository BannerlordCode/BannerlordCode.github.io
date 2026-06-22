<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyFormationDropdownWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyFormationDropdownWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PartyFormationDropdownWidget : DropdownWidget`
**Base:** `DropdownWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyFormationDropdownWidget.cs`

## Overview

`PartyFormationDropdownWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `SeperatorStateChanger` | `public DelayedStateChanger SeperatorStateChanger { get; set; }` |
| `ListStateChanger` | `public DelayedStateChanger ListStateChanger { get; set; }` |

## Usage Example

```csharp
// Typical usage of PartyFormationDropdownWidget (Widget)
// 声明/访问一个 PartyFormationDropdownWidget
var widget = root.GetChild("partyFormationDropdownWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)