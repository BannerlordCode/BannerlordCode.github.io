---
title: "StickAnimStage"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StickAnimStage`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# StickAnimStage

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class StickAnimStage`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial/TutorialObjectiveStickParentWidget.cs`

## Overview

`StickAnimStage` lives in `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsCompleted` | `public bool IsCompleted { get; }` |
| `AnimTime` | `public float AnimTime { get; }` |
| `Direction` | `public Vec2 Direction { get; }` |
| `AnimType` | `public AnimTypes AnimType { get; }` |
| `WidgetToManipulate` | `public Widget WidgetToManipulate { get; }` |

## Key Methods

### Tick
`public void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

## Usage Example

```csharp
var value = new StickAnimStage();
value.Tick(0);
```

## See Also

- [Complete Class Catalog](../catalog)