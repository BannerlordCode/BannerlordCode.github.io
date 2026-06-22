<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DisabledAlphaChangerWidget`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DisabledAlphaChangerWidget

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class DisabledAlphaChangerWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/DisabledAlphaChangerWidget.cs`

## Overview

`DisabledAlphaChangerWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `DisabledAlpha` | `public float DisabledAlpha { get { return this._disabledAlpha; }` |
| `AnimationDuration` | `public float AnimationDuration { get { return this._animationDuration; }` |
| `UpdateChildrenAlphas` | `public bool UpdateChildrenAlphas { get { return this._updateChildrenAlphas; }` |

## Usage Example

```csharp
// Typical usage of DisabledAlphaChangerWidget (Widget)
// 声明/访问一个 DisabledAlphaChangerWidget
var widget = root.GetChild("disabledAlphaChangerWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)