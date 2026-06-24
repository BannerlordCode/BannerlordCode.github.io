<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StickAnimStage`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# StickAnimStage

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class StickAnimStage`
**Area:** mission-ext

## Overview

`StickAnimStage` lives in `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

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
// First obtain a StickAnimStage instance from game state, then call one of its public methods
var value = new StickAnimStage();
value.Tick(0);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
