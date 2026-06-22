<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BrushWidget`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BrushWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class BrushWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/BrushWidget.cs`

## Overview

`BrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `ReadOnlyBrush` | `public Brush ReadOnlyBrush { get { if (this._clonedBrush != null) { return this._clonedBrush; }` |
| `Sprite` | `public new Sprite Sprite { get { return this.ReadOnlyBrush.DefaultStyle.GetLayer("Default").Sprite; }` |

## Key Methods

### UpdateBrushes
```csharp
public override void UpdateBrushes(float dt)
```

### SetState
```csharp
public override void SetState(string stateName)
```

### UpdateAnimationPropertiesSubTask
```csharp
public override void UpdateAnimationPropertiesSubTask(float alphaFactor)
```

### OnBrushChanged
```csharp
public virtual void OnBrushChanged()
```

## Usage Example

```csharp
// Typical usage of BrushWidget (Widget)
// 声明/访问一个 BrushWidget
var widget = root.GetChild("brushWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)