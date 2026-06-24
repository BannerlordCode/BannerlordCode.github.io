<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBWindowManager`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MBWindowManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MBWindowManager`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MBWindowManager.cs`

## 概述

`MBWindowManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `MBWindowManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### WorldToScreen
`public static float WorldToScreen(Camera camera, Vec3 worldSpacePosition, ref float screenX, ref float screenY, ref float w)`

**用途 / Purpose:** 处理 `world to screen` 相关逻辑。

### WorldToScreenInsideUsableArea
`public static float WorldToScreenInsideUsableArea(Camera camera, Vec3 worldSpacePosition, ref float screenX, ref float screenY, ref float w)`

**用途 / Purpose:** 处理 `world to screen inside usable area` 相关逻辑。

### WorldToScreenWithFixedZ
`public static float WorldToScreenWithFixedZ(Camera camera, Vec3 cameraPosition, Vec3 worldSpacePosition, ref float screenX, ref float screenY, ref float w)`

**用途 / Purpose:** 处理 `world to screen with fixed z` 相关逻辑。

### ScreenToWorld
`public static void ScreenToWorld(Camera camera, float screenX, float screenY, float w, ref Vec3 worldSpacePosition)`

**用途 / Purpose:** 处理 `screen to world` 相关逻辑。

### GetScreenResolution
`public static Vec2 GetScreenResolution()`

**用途 / Purpose:** 获取 `screen resolution` 的当前值。

### PreDisplay
`public static void PreDisplay()`

**用途 / Purpose:** 处理 `pre display` 相关逻辑。

### DontChangeCursorPos
`public static void DontChangeCursorPos()`

**用途 / Purpose:** 处理 `dont change cursor pos` 相关逻辑。

## 使用示例

```csharp
var manager = MBWindowManager.Current;
```

## 参见

- [完整类目录](../catalog)