<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyHealthFillBarWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyHealthFillBarWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PartyHealthFillBarWidget : FillBar`
**Base:** `FillBar`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyHealthFillBarWidget.cs`

## Overview

`PartyHealthFillBarWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `Health` | `public int Health { get; set; }` |
| `IsWounded` | `public bool IsWounded { get; set; }` |
| `HealthText` | `public TextWidget HealthText { get; set; }` |

## Usage Example

```csharp
// Typical usage of PartyHealthFillBarWidget (Widget)
// 声明/访问一个 PartyHealthFillBarWidget
var widget = root.GetChild("partyHealthFillBarWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)