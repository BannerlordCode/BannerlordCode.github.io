---
title: "MBWindowManager"
description: "Auto-generated class reference for MBWindowManager."
---
# MBWindowManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MBWindowManager`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/MBWindowManager.cs`

## Overview

`MBWindowManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `MBWindowManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### WorldToScreen
`public static float WorldToScreen(Camera camera, Vec3 worldSpacePosition, ref float screenX, ref float screenY, ref float w)`

**Purpose:** Executes the WorldToScreen logic.

```csharp
// Static call; no instance required
MBWindowManager.WorldToScreen(camera, worldSpacePosition, screenX, screenY, w);
```

### WorldToScreenInsideUsableArea
`public static float WorldToScreenInsideUsableArea(Camera camera, Vec3 worldSpacePosition, ref float screenX, ref float screenY, ref float w)`

**Purpose:** Executes the WorldToScreenInsideUsableArea logic.

```csharp
// Static call; no instance required
MBWindowManager.WorldToScreenInsideUsableArea(camera, worldSpacePosition, screenX, screenY, w);
```

### WorldToScreenWithFixedZ
`public static float WorldToScreenWithFixedZ(Camera camera, Vec3 cameraPosition, Vec3 worldSpacePosition, ref float screenX, ref float screenY, ref float w)`

**Purpose:** Executes the WorldToScreenWithFixedZ logic.

```csharp
// Static call; no instance required
MBWindowManager.WorldToScreenWithFixedZ(camera, cameraPosition, worldSpacePosition, screenX, screenY, w);
```

### ScreenToWorld
`public static void ScreenToWorld(Camera camera, float screenX, float screenY, float w, ref Vec3 worldSpacePosition)`

**Purpose:** Executes the ScreenToWorld logic.

```csharp
// Static call; no instance required
MBWindowManager.ScreenToWorld(camera, 0, 0, 0, worldSpacePosition);
```

### GetScreenResolution
`public static Vec2 GetScreenResolution()`

**Purpose:** Reads and returns the screen resolution value held by the this instance.

```csharp
// Static call; no instance required
MBWindowManager.GetScreenResolution();
```

### PreDisplay
`public static void PreDisplay()`

**Purpose:** Executes the PreDisplay logic.

```csharp
// Static call; no instance required
MBWindowManager.PreDisplay();
```

### DontChangeCursorPos
`public static void DontChangeCursorPos()`

**Purpose:** Executes the DontChangeCursorPos logic.

```csharp
// Static call; no instance required
MBWindowManager.DontChangeCursorPos();
```

## Usage Example

```csharp
var manager = MBWindowManager.Current;
```

## See Also

- [Area Index](../)