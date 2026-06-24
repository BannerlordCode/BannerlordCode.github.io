<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyFormationDropdownWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
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

## Mental Model

Treat `PartyFormationDropdownWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `SeperatorStateChanger` | `public DelayedStateChanger SeperatorStateChanger { get; set; }` |
| `ListStateChanger` | `public DelayedStateChanger ListStateChanger { get; set; }` |

## Usage Example

```csharp
var widget = new PartyFormationDropdownWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)