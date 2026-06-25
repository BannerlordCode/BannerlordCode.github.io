---
title: "AnimatedNumberTextWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AnimatedNumberTextWidget`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# AnimatedNumberTextWidget

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class AnimatedNumberTextWidget : TextWidget`
**Base:** `TextWidget`
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI.ExtraWidgets/TaleWorlds.GauntletUI.ExtraWidgets/AnimatedNumberTextWidget.cs`

## Overview

`AnimatedNumberTextWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `AnimatedNumberTextWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `AnimationDelay` | `public float AnimationDelay { get; set; }` |
| `AnimationDuration` | `public float AnimationDuration { get; set; }` |
| `ReferenceNumber` | `public int ReferenceNumber { get; set; }` |
| `Number` | `public int Number { get; set; }` |
| `AutoStart` | `public bool AutoStart { get; set; }` |

## Key Methods

### StartAnimation
`public void StartAnimation()`

**Purpose:** Handles logic related to `start animation`.

### Reset
`public void Reset()`

**Purpose:** Resets `reset` to its initial state.

## Usage Example

```csharp
var widget = new AnimatedNumberTextWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)