<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBWindowManager`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `world to screen`.

### WorldToScreenInsideUsableArea
`public static float WorldToScreenInsideUsableArea(Camera camera, Vec3 worldSpacePosition, ref float screenX, ref float screenY, ref float w)`

**Purpose:** Handles logic related to `world to screen inside usable area`.

### WorldToScreenWithFixedZ
`public static float WorldToScreenWithFixedZ(Camera camera, Vec3 cameraPosition, Vec3 worldSpacePosition, ref float screenX, ref float screenY, ref float w)`

**Purpose:** Handles logic related to `world to screen with fixed z`.

### ScreenToWorld
`public static void ScreenToWorld(Camera camera, float screenX, float screenY, float w, ref Vec3 worldSpacePosition)`

**Purpose:** Handles logic related to `screen to world`.

### GetScreenResolution
`public static Vec2 GetScreenResolution()`

**Purpose:** Gets the current value of `screen resolution`.

### PreDisplay
`public static void PreDisplay()`

**Purpose:** Handles logic related to `pre display`.

### DontChangeCursorPos
`public static void DontChangeCursorPos()`

**Purpose:** Handles logic related to `dont change cursor pos`.

## Usage Example

```csharp
var manager = MBWindowManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)