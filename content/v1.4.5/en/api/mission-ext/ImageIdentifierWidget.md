---
title: "ImageIdentifierWidget"
description: "Auto-generated class reference for ImageIdentifierWidget."
---
# ImageIdentifierWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ImageIdentifierWidget : TextureWidget`
**Base:** `TextureWidget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets/ImageIdentifierWidget.cs`

## Overview

`ImageIdentifierWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `ImageIdentifierWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ImageId` | `public string ImageId { get; set; }` |
| `AdditionalArgs` | `public string AdditionalArgs { get; set; }` |
| `IsBig` | `public bool IsBig { get; set; }` |
| `HideWhenNull` | `public bool HideWhenNull { get; set; }` |

## Key Methods

### OnClearTextureProvider
`public override void OnClearTextureProvider()`

**Purpose:** Invoked when the clear texture provider event is raised.

```csharp
// Obtain an instance of ImageIdentifierWidget from the subsystem API first
ImageIdentifierWidget imageIdentifierWidget = ...;
imageIdentifierWidget.OnClearTextureProvider();
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
ImageIdentifierWidget widget = ...;
```

## See Also

- [Area Index](../)