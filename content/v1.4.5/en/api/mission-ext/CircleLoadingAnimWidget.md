---
title: "CircleLoadingAnimWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CircleLoadingAnimWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CircleLoadingAnimWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CircleLoadingAnimWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets/CircleLoadingAnimWidget.cs`

## Overview

`CircleLoadingAnimWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `CircleLoadingAnimWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `NumOfCirclesInASecond` | `public float NumOfCirclesInASecond { get; set; }` |
| `FullAlpha` | `public float FullAlpha { get; set; }` |
| `CircleRadius` | `public float CircleRadius { get; set; }` |
| `StaySeconds` | `public float StaySeconds { get; set; }` |
| `FadeInSeconds` | `public float FadeInSeconds { get; set; }` |
| `FadeOutSeconds` | `public float FadeOutSeconds { get; set; }` |

## Usage Example

```csharp
var widget = new CircleLoadingAnimWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)