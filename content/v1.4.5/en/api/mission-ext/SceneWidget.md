---
title: "SceneWidget"
description: "Auto-generated class reference for SceneWidget."
---
# SceneWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SceneWidget : TextureWidget`
**Base:** `TextureWidget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets/SceneWidget.cs`

## Overview

`SceneWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `SceneWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Scene` | `public object Scene { get; set; }` |
| `AffirmativeButton` | `public ButtonWidget AffirmativeButton { get; set; }` |
| `CancelButton` | `public ButtonWidget CancelButton { get; set; }` |
| `ClickToContinueTextWidget` | `public RichTextWidget ClickToContinueTextWidget { get; set; }` |
| `TitleTextWidget` | `public TextWidget TitleTextWidget { get; set; }` |
| `FadeImageWidget` | `public Widget FadeImageWidget { get; set; }` |
| `PreparingVisualWidget` | `public Widget PreparingVisualWidget { get; set; }` |
| `EndProgress` | `public float EndProgress { get; set; }` |
| `FadeInDuration` | `public float FadeInDuration { get; set; }` |
| `IsOkShown` | `public bool IsOkShown { get; set; }` |
| `IsCancelShown` | `public bool IsCancelShown { get; set; }` |
| `IsReady` | `public bool IsReady { get; set; }` |
| `AffirmativeTitleText` | `public string AffirmativeTitleText { get; set; }` |
| `NegativeTitleText` | `public string NegativeTitleText { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
SceneWidget widget = ...;
```

## See Also

- [Area Index](../)