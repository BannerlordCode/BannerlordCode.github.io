---
title: "TutorialArrowWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TutorialArrowWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TutorialArrowWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TutorialArrowWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial/TutorialArrowWidget.cs`

## Overview

`TutorialArrowWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `TutorialArrowWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsArrowEnabled` | `public bool IsArrowEnabled { get; set; }` |
| `FadeInTime` | `public float FadeInTime { get; set; }` |
| `BigCircleRadius` | `public float BigCircleRadius { get; set; }` |
| `SmallCircleRadius` | `public float SmallCircleRadius { get; set; }` |

## Key Methods

### SetArrowProperties
`public void SetArrowProperties(float width, float height, bool isDirectionDown, bool isDirectionRight)`

**Purpose:** Sets the value or state of `arrow properties`.

### ResetFade
`public void ResetFade()`

**Purpose:** Resets `fade` to its initial state.

### DisableFade
`public void DisableFade()`

**Purpose:** Handles logic related to `disable fade`.

## Usage Example

```csharp
var widget = new TutorialArrowWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)