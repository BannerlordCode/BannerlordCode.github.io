---
title: "MaskedTextureWidget"
description: "Auto-generated class reference for MaskedTextureWidget."
---
# MaskedTextureWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class MaskedTextureWidget : TextureWidget`
**Base:** `TextureWidget`
**File:** `bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI.BaseTypes/MaskedTextureWidget.cs`

## Overview

`MaskedTextureWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MaskedTextureWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `OverlayTextureScale` | `public float OverlayTextureScale { get; set; }` |
| `ImageId` | `public string ImageId { get; set; }` |
| `AdditionalArgs` | `public string AdditionalArgs { get; set; }` |
| `IsBig` | `public bool IsBig { get; set; }` |

## Key Methods

### OnClearTextureProvider
`public override void OnClearTextureProvider()`

**Purpose:** Invoked when the `clear texture provider` event is raised.

```csharp
// Obtain an instance of MaskedTextureWidget from the subsystem API first
MaskedTextureWidget maskedTextureWidget = ...;
maskedTextureWidget.OnClearTextureProvider();
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
MaskedTextureWidget widget = ...;
```

## See Also

- [Area Index](../)