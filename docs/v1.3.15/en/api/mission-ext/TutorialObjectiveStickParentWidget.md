<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TutorialObjectiveStickParentWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TutorialObjectiveStickParentWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TutorialObjectiveStickParentWidget : TextWidget`
**Base:** `TextWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tutorial/TutorialObjectiveStickParentWidget.cs`

## Overview

`TutorialObjectiveStickParentWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `TutorialObjectiveStickParentWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `StickMiddle` | `public Widget StickMiddle { get; set; }` |
| `MovementType` | `public int MovementType { get; set; }` |
| `IsCompleted` | `public bool IsCompleted { get; }` |
| `AnimTime` | `public float AnimTime { get; }` |
| `Direction` | `public Vec2 Direction { get; }` |
| `AnimType` | `public TutorialObjectiveStickParentWidget.StickAnimStage.AnimTypes AnimType { get; }` |
| `WidgetToManipulate` | `public Widget WidgetToManipulate { get; }` |

## Key Methods

### Tick
`public void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

## Usage Example

```csharp
var widget = new TutorialObjectiveStickParentWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)