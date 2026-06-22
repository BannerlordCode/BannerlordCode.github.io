<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBWindowManager`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBWindowManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MBWindowManager`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/MBWindowManager.cs`

## 概述

`MBWindowManager` 是一个管理器（通常经 Current 单例或 Mission.Current 访问）。用它访问/修改其管理的子系统。

## 主要方法

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

## 使用示例

```csharp
// MBWindowManager (Manager) 的典型用法
MBWindowManager.Current;
```

## 参见

- [完整类目录](../catalog)