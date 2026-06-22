<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TutorialArrowWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TutorialArrowWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TutorialArrowWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tutorial/TutorialArrowWidget.cs`

## Overview

`TutorialArrowWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsArrowEnabled` | `public bool IsArrowEnabled { get; set; }` |
| `FadeInTime` | `public float FadeInTime { get; set; }` |
| `BigCircleRadius` | `public float BigCircleRadius { get; set; }` |
| `SmallCircleRadius` | `public float SmallCircleRadius { get; set; }` |

## Key Methods

### SetArrowProperties
```csharp
public void SetArrowProperties(float width, float height, bool isDirectionDown, bool isDirectionRight)
```

### ResetFade
```csharp
public void ResetFade()
```

### DisableFade
```csharp
public void DisableFade()
```

## Usage Example

```csharp
// Typical usage of TutorialArrowWidget (Widget)
// 声明/访问一个 TutorialArrowWidget
var widget = root.GetChild("tutorialArrowWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)