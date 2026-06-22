<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyPlayerNameplateWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyPlayerNameplateWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Nameplate
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PartyPlayerNameplateWidget : PartyNameplateWidget`
**Base:** `PartyNameplateWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Nameplate/PartyPlayerNameplateWidget.cs`

## Overview

`PartyPlayerNameplateWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsPrisoner` | `public bool IsPrisoner { get; set; }` |
| `MainPartyArrowWidget` | `public Widget MainPartyArrowWidget { get; set; }` |

## Usage Example

```csharp
// Typical usage of PartyPlayerNameplateWidget (Widget)
// 声明/访问一个 PartyPlayerNameplateWidget
var widget = root.GetChild("partyPlayerNameplateWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)