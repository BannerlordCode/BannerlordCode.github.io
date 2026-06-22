<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameMenuWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameMenuWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.GameMenu
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GameMenuWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/GameMenu/GameMenuWidget.cs`

## Overview

`GameMenuWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `EncounterModeMenuWidth` | `public int EncounterModeMenuWidth { get; set; }` |
| `EncounterModeMenuHeight` | `public int EncounterModeMenuHeight { get; set; }` |
| `EncounterModeMenuMarginTop` | `public int EncounterModeMenuMarginTop { get; set; }` |
| `NormalModeMenuWidth` | `public int NormalModeMenuWidth { get; set; }` |
| `NormalModeMenuHeight` | `public int NormalModeMenuHeight { get; }` |
| `NormalModeMenuMarginTop` | `public int NormalModeMenuMarginTop { get; }` |
| `IsOverlayExtended` | `public bool IsOverlayExtended { get; }` |
| `ScopeTargeter` | `public NavigationScopeTargeter ScopeTargeter { get; set; }` |
| `TitleTextWidget` | `public TextWidget TitleTextWidget { get; set; }` |
| `TitleContainerWidget` | `public Widget TitleContainerWidget { get; set; }` |
| `IsNight` | `public bool IsNight { get; set; }` |
| `IsEncounterMenu` | `public bool IsEncounterMenu { get; set; }` |
| `Overlay` | `public Widget Overlay { get; set; }` |
| `ExtendButtonWidget` | `public ButtonWidget ExtendButtonWidget { get; set; }` |
| `ExtendButtonArrowWidget` | `public BrushWidget ExtendButtonArrowWidget { get; set; }` |
| `OptionItemsList` | `public ListPanel OptionItemsList { get; set; }` |
| `SpriteName` | `public string SpriteName { get; set; }` |
| `MenuId` | `public string MenuId { get; set; }` |
| `OverriddenSpriteMapBrush` | `public Brush OverriddenSpriteMapBrush { get; set; }` |

## Key Methods

### UpdateOverlayState
```csharp
public void UpdateOverlayState()
```

### OnOptionStateChanged
```csharp
public void OnOptionStateChanged()
```

## Usage Example

```csharp
// Typical usage of GameMenuWidget (Widget)
// 声明/访问一个 GameMenuWidget
var widget = root.GetChild("gameMenuWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)