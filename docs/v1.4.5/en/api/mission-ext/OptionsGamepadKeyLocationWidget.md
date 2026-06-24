<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OptionsGamepadKeyLocationWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# OptionsGamepadKeyLocationWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options.Gamepad
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OptionsGamepadKeyLocationWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options.Gamepad/OptionsGamepadKeyLocationWidget.cs`

## Overview

`OptionsGamepadKeyLocationWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `OptionsGamepadKeyLocationWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

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
var widget = new OptionsGamepadKeyLocationWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)