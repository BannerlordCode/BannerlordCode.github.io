<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AnimatedNumberTextWidget`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AnimatedNumberTextWidget

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class AnimatedNumberTextWidget : TextWidget`
**Base:** `TextWidget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/AnimatedNumberTextWidget.cs`

## Overview

`AnimatedNumberTextWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `AnimationDelay` | `public float AnimationDelay { get { return this._animationDelay; }` |
| `AnimationDuration` | `public float AnimationDuration { get { return this._animationDuration; }` |
| `ReferenceNumber` | `public int ReferenceNumber { get { return this._referenceNumber; }` |
| `Number` | `public int Number { get { return this._number; }` |
| `AutoStart` | `public bool AutoStart { get { return this._autoStart; }` |

## Key Methods

### StartAnimation
```csharp
public void StartAnimation()
```

### Reset
```csharp
public void Reset()
```

## Usage Example

```csharp
// Typical usage of AnimatedNumberTextWidget (Widget)
// 声明/访问一个 AnimatedNumberTextWidget
var widget = root.GetChild("animatedNumberTextWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)