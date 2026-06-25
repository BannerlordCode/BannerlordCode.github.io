---
title: "TextureView"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TextureView`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TextureView

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class TextureView : View`
**Base:** `View`
**File:** `TaleWorlds.Engine/TextureView.cs`

## Overview

`TextureView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `TextureView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CreateTextureView
`public static TextureView CreateTextureView()`

**Purpose:** Creates a new `texture view` instance or object.

### SetTexture
`public void SetTexture(Texture texture)`

**Purpose:** Sets the value or state of `texture`.

## Usage Example

```csharp
var view = new TextureView();
```

## See Also

- [Complete Class Catalog](../catalog)