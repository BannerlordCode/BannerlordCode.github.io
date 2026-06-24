<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyUpgradesContainerWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PartyUpgradesContainerWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PartyUpgradesContainerWidget`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party/PartyUpgradesContainerWidget.cs`

## Overview

`PartyUpgradesContainerWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `PartyUpgradesContainerWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `AnyUpgradeHasRequirement` | `public bool AnyUpgradeHasRequirement { get; set; }` |

## Key Methods

### PartyUpgradesContainerWidget
`public class PartyUpgradesContainerWidget(UIContext context)`

**Purpose:** Handles logic related to `party upgrades container widget`.

## Usage Example

```csharp
var widget = new PartyUpgradesContainerWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)