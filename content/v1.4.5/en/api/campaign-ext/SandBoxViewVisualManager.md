---
title: "SandBoxViewVisualManager"
description: "Auto-generated class reference for SandBoxViewVisualManager."
---
# SandBoxViewVisualManager

**Namespace:** SandBox.View
**Module:** SandBox.View
**Type:** `public class SandBoxViewVisualManager`
**Base:** none
**File:** `Modules.SandBox/SandBox.View/SandBox.View/SandBoxViewVisualManager.cs`

## Overview

`SandBoxViewVisualManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `SandBoxViewVisualManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### VisualTick
`public static void VisualTick(MapScreen screen, float realDt, float dt)`

**Purpose:** Executes the VisualTick logic.

```csharp
// Static call; no instance required
SandBoxViewVisualManager.VisualTick(screen, 0, 0);
```

### OnTick
`public static void OnTick(float realDt, float dt)`

**Purpose:** Invoked when the tick event is raised.

```csharp
// Static call; no instance required
SandBoxViewVisualManager.OnTick(0, 0);
```

### ClearVisualMemory
`public static void ClearVisualMemory()`

**Purpose:** Removes all visual memory from the this instance.

```csharp
// Static call; no instance required
SandBoxViewVisualManager.ClearVisualMemory();
```

### OnFrameTick
`public static void OnFrameTick(float dt)`

**Purpose:** Invoked when the frame tick event is raised.

```csharp
// Static call; no instance required
SandBoxViewVisualManager.OnFrameTick(0);
```

### OnMouseClick
`public static bool OnMouseClick(MapEntityVisual visualOfSelectedEntity, Vec3 intersectionPoint, PathFaceRecord mouseOverFaceIndex, bool isDoubleClick)`

**Purpose:** Invoked when the mouse click event is raised.

```csharp
// Static call; no instance required
SandBoxViewVisualManager.OnMouseClick(visualOfSelectedEntity, intersectionPoint, mouseOverFaceIndex, false);
```

### OnGameLoadFinished
`public static void OnGameLoadFinished()`

**Purpose:** Invoked when the game load finished event is raised.

```csharp
// Static call; no instance required
SandBoxViewVisualManager.OnGameLoadFinished();
```

### GetComponents
`public MBList<CampaignEntityVisualComponent> GetComponents()`

**Purpose:** Reads and returns the components value held by the this instance.

```csharp
// Obtain an instance of SandBoxViewVisualManager from the subsystem API first
SandBoxViewVisualManager sandBoxViewVisualManager = ...;
var result = sandBoxViewVisualManager.GetComponents();
```

## Usage Example

```csharp
var manager = SandBoxViewVisualManager.Current;
```

## See Also

- [Area Index](../)