---
title: "TwoDimensionView"
description: "Auto-generated class reference for TwoDimensionView."
---
# TwoDimensionView

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class TwoDimensionView : View`
**Base:** `View`
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/TwoDimensionView.cs`

## Overview

`TwoDimensionView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `TwoDimensionView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CreateTwoDimension
`public static TwoDimensionView CreateTwoDimension(string viewName)`

**Purpose:** **Purpose:** Constructs a new two dimension entity and returns it to the caller.

```csharp
// Static call; no instance required
TwoDimensionView.CreateTwoDimension("example");
```

### BeginFrame
`public void BeginFrame()`

**Purpose:** **Purpose:** Executes the BeginFrame logic.

```csharp
// Obtain an instance of TwoDimensionView from the subsystem API first
TwoDimensionView twoDimensionView = ...;
twoDimensionView.BeginFrame();
```

### EndFrame
`public void EndFrame()`

**Purpose:** **Purpose:** Executes the EndFrame logic.

```csharp
// Obtain an instance of TwoDimensionView from the subsystem API first
TwoDimensionView twoDimensionView = ...;
twoDimensionView.EndFrame();
```

### Clear
`public void Clear()`

**Purpose:** **Purpose:** Removes all content from the this instance.

```csharp
// Obtain an instance of TwoDimensionView from the subsystem API first
TwoDimensionView twoDimensionView = ...;
twoDimensionView.Clear();
```

### CreateMeshFromDescription
`public void CreateMeshFromDescription(WeakMaterial material, TwoDimensionMeshDrawData meshDrawData)`

**Purpose:** **Purpose:** Constructs a new mesh from description entity and returns it to the caller.

```csharp
// Obtain an instance of TwoDimensionView from the subsystem API first
TwoDimensionView twoDimensionView = ...;
twoDimensionView.CreateMeshFromDescription(material, meshDrawData);
```

### CreateTextMeshFromCache
`public bool CreateTextMeshFromCache(Material material, TwoDimensionTextMeshDrawData meshDrawData)`

**Purpose:** **Purpose:** Constructs a new text mesh from cache entity and returns it to the caller.

```csharp
// Obtain an instance of TwoDimensionView from the subsystem API first
TwoDimensionView twoDimensionView = ...;
var result = twoDimensionView.CreateTextMeshFromCache(material, meshDrawData);
```

### CreateTextMeshFromDescription
`public void CreateTextMeshFromDescription(float vertices, float uvs, uint indices, int indexCount, Material material, TwoDimensionTextMeshDrawData meshDrawData)`

**Purpose:** **Purpose:** Constructs a new text mesh from description entity and returns it to the caller.

```csharp
// Obtain an instance of TwoDimensionView from the subsystem API first
TwoDimensionView twoDimensionView = ...;
twoDimensionView.CreateTextMeshFromDescription(0, 0, 0, 0, material, meshDrawData);
```

### GetOrCreateMaterial
`public WeakMaterial GetOrCreateMaterial(Texture mainTexture, Texture overlayTexture)`

**Purpose:** **Purpose:** Reads and returns the or create material value held by the this instance.

```csharp
// Obtain an instance of TwoDimensionView from the subsystem API first
TwoDimensionView twoDimensionView = ...;
var result = twoDimensionView.GetOrCreateMaterial(mainTexture, overlayTexture);
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
TwoDimensionView view = ...;
```

## See Also

- [Area Index](../)