---
title: "MBWindowManager"
description: "MBWindowManager 的自动生成类参考。"
---
# MBWindowManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MBWindowManager`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/MBWindowManager.cs`

## 概述

`MBWindowManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `MBWindowManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### WorldToScreen
`public static float WorldToScreen(Camera camera, Vec3 worldSpacePosition, ref float screenX, ref float screenY, ref float w)`

**用途 / Purpose:** **用途 / Purpose:** 调用 WorldToScreen 对应的操作。

```csharp
// 静态调用，不需要实例
MBWindowManager.WorldToScreen(camera, worldSpacePosition, screenX, screenY, w);
```

### WorldToScreenInsideUsableArea
`public static float WorldToScreenInsideUsableArea(Camera camera, Vec3 worldSpacePosition, ref float screenX, ref float screenY, ref float w)`

**用途 / Purpose:** **用途 / Purpose:** 调用 WorldToScreenInsideUsableArea 对应的操作。

```csharp
// 静态调用，不需要实例
MBWindowManager.WorldToScreenInsideUsableArea(camera, worldSpacePosition, screenX, screenY, w);
```

### WorldToScreenWithFixedZ
`public static float WorldToScreenWithFixedZ(Camera camera, Vec3 cameraPosition, Vec3 worldSpacePosition, ref float screenX, ref float screenY, ref float w)`

**用途 / Purpose:** **用途 / Purpose:** 调用 WorldToScreenWithFixedZ 对应的操作。

```csharp
// 静态调用，不需要实例
MBWindowManager.WorldToScreenWithFixedZ(camera, cameraPosition, worldSpacePosition, screenX, screenY, w);
```

### ScreenToWorld
`public static void ScreenToWorld(Camera camera, float screenX, float screenY, float w, ref Vec3 worldSpacePosition)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ScreenToWorld 对应的操作。

```csharp
// 静态调用，不需要实例
MBWindowManager.ScreenToWorld(camera, 0, 0, 0, worldSpacePosition);
```

### GetScreenResolution
`public static Vec2 GetScreenResolution()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 screen resolution 的结果。

```csharp
// 静态调用，不需要实例
MBWindowManager.GetScreenResolution();
```

### PreDisplay
`public static void PreDisplay()`

**用途 / Purpose:** **用途 / Purpose:** 调用 PreDisplay 对应的操作。

```csharp
// 静态调用，不需要实例
MBWindowManager.PreDisplay();
```

### DontChangeCursorPos
`public static void DontChangeCursorPos()`

**用途 / Purpose:** **用途 / Purpose:** 调用 DontChangeCursorPos 对应的操作。

```csharp
// 静态调用，不需要实例
MBWindowManager.DontChangeCursorPos();
```

## 使用示例

```csharp
var manager = MBWindowManager.Current;
```

## 参见

- [本区域目录](../)