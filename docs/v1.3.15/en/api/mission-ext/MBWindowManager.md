<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBWindowManager`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBWindowManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MBWindowManager`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/MBWindowManager.cs`

## Overview

`MBWindowManager` is a manager (often reached via a Current singleton or Mission.Current). Use it to access/modify its managed subsystem.

## Key Methods

### WorldToScreen
```csharp
public static float WorldToScreen(Camera camera, Vec3 worldSpacePosition, ref float screenX, ref float screenY, ref float w)
```

### WorldToScreenInsideUsableArea
```csharp
public static float WorldToScreenInsideUsableArea(Camera camera, Vec3 worldSpacePosition, ref float screenX, ref float screenY, ref float w)
```

### WorldToScreenWithFixedZ
```csharp
public static float WorldToScreenWithFixedZ(Camera camera, Vec3 cameraPosition, Vec3 worldSpacePosition, ref float screenX, ref float screenY, ref float w)
```

### ScreenToWorld
```csharp
public static void ScreenToWorld(Camera camera, float screenX, float screenY, float w, ref Vec3 worldSpacePosition)
```

### GetScreenResolution
```csharp
public static Vec2 GetScreenResolution()
```

### PreDisplay
```csharp
public static void PreDisplay()
```

### DontChangeCursorPos
```csharp
public static void DontChangeCursorPos()
```

## Usage Example

```csharp
// Typical usage of MBWindowManager (Manager)
MBWindowManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)