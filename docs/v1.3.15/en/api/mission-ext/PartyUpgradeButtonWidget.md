<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyUpgradeButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyUpgradeButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PartyUpgradeButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyUpgradeButtonWidget.cs`

## Overview

`PartyUpgradeButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `ImageIdentifierWidget` | `public ImageIdentifierWidget ImageIdentifierWidget { get; set; }` |
| `DefaultBrush` | `public Brush DefaultBrush { get; set; }` |
| `MarinerTroopBrush` | `public BrushWidget MarinerTroopBrush { get; set; }` |
| `UnavailableBrush` | `public Brush UnavailableBrush { get; set; }` |
| `InsufficientBrush` | `public Brush InsufficientBrush { get; set; }` |
| `IsAvailable` | `public bool IsAvailable { get; set; }` |
| `IsInsufficient` | `public bool IsInsufficient { get; set; }` |

## Usage Example

```csharp
// Typical usage of PartyUpgradeButtonWidget (Widget)
// 声明/访问一个 PartyUpgradeButtonWidget
var widget = root.GetChild("partyUpgradeButtonWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)