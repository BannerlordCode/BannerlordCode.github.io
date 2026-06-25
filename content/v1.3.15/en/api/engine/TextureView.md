---
title: "TextureView"
description: "Auto-generated class reference for TextureView."
---
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

**Purpose:** **Purpose:** Constructs a new texture view entity and returns it to the caller.

```csharp
// Static call; no instance required
TextureView.CreateTextureView();
```

### SetTexture
`public void SetTexture(Texture texture)`

**Purpose:** **Purpose:** Assigns a new value to texture and updates the object's internal state.

```csharp
// Obtain an instance of TextureView from the subsystem API first
TextureView textureView = ...;
textureView.SetTexture(texture);
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
TextureView view = ...;
```

## See Also

- [Area Index](../)