---
title: "TextureWidget"
description: "Auto-generated class reference for TextureWidget."
---
# TextureWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class TextureWidget : ImageWidget`
**Base:** `ImageWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/TextureWidget.cs`

## Overview

`TextureWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `TextureWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `LoadingIconWidget` | `public Widget LoadingIconWidget { get; }` |
| `TextureProvider` | `public TextureProvider TextureProvider { get; }` |
| `SetForClearNextFrame` | `public bool SetForClearNextFrame { get; set; }` |
| `TextureProviderName` | `public string TextureProviderName { get; set; }` |
| `Texture` | `public Texture Texture { get; set; }` |

## Key Methods

### OnClearTextureProvider
`public virtual void OnClearTextureProvider()`

**Purpose:** Invoked when the clear texture provider event is raised.

```csharp
// Obtain an instance of TextureWidget from the subsystem API first
TextureWidget textureWidget = ...;
textureWidget.OnClearTextureProvider();
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
TextureWidget widget = ...;
```

## See Also

- [Area Index](../)