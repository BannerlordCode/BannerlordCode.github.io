<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OptionsGamepadKeyLocationWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OptionsGamepadKeyLocationWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options.Gamepad
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OptionsGamepadKeyLocationWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Options/Gamepad/OptionsGamepadKeyLocationWidget.cs`

## Overview

`OptionsGamepadKeyLocationWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `ForceVisible` | `public bool ForceVisible { get; set; }` |
| `KeyID` | `public int KeyID { get; }` |
| `NormalPositionXOffset` | `public int NormalPositionXOffset { get; }` |
| `NormalPositionYOffset` | `public int NormalPositionYOffset { get; }` |
| `NormalSizeXOfImage` | `public int NormalSizeXOfImage { get; }` |
| `NormalSizeYOfImage` | `public int NormalSizeYOfImage { get; }` |
| `CurrentSizeXOfImage` | `public int CurrentSizeXOfImage { get; }` |
| `CurrentSizeYOfImage` | `public int CurrentSizeYOfImage { get; }` |
| `IsKeyToTheLeftOfTheGamepad` | `public bool IsKeyToTheLeftOfTheGamepad { get; }` |

## Usage Example

```csharp
// Typical usage of OptionsGamepadKeyLocationWidget (Widget)
// 声明/访问一个 OptionsGamepadKeyLocationWidget
var widget = root.GetChild("optionsGamepadKeyLocationWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)