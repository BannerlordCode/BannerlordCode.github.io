<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerClassLoadoutTroopTupleVisualWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerClassLoadoutTroopTupleVisualWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.ClassLoadout
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerClassLoadoutTroopTupleVisualWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/ClassLoadout/MultiplayerClassLoadoutTroopTupleVisualWidget.cs`

## Overview

`MultiplayerClassLoadoutTroopTupleVisualWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `FactionCode` | `public string FactionCode { get; set; }` |
| `TroopTypeCode` | `public string TroopTypeCode { get; set; }` |

## Usage Example

```csharp
// Typical usage of MultiplayerClassLoadoutTroopTupleVisualWidget (Widget)
// 声明/访问一个 MultiplayerClassLoadoutTroopTupleVisualWidget
var widget = root.GetChild("multiplayerClassLoadoutTroopTupleVisualWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)