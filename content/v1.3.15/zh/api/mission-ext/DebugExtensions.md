---
title: "DebugExtensions"
description: "DebugExtensions 的自动生成类参考。"
---
# DebugExtensions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class DebugExtensions`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/DebugExtensions.cs`

## 概述

`DebugExtensions` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### RenderDebugCircleOnTerrain
`public static void RenderDebugCircleOnTerrain(Scene scene, MatrixFrame frame, float radius, uint color, bool depthCheck = true, bool isDotted = false)`

**用途 / Purpose:** 处理与 「render debug circle on terrain」 相关的逻辑。

```csharp
// 静态调用，不需要实例
DebugExtensions.RenderDebugCircleOnTerrain(scene, frame, 0, 0, false, false);
```

### RenderDebugArcOnTerrain
`public static void RenderDebugArcOnTerrain(Scene scene, MatrixFrame frame, float radius, float beginAngle, float endAngle, uint color, bool depthCheck = true, bool isDotted = false)`

**用途 / Purpose:** 处理与 「render debug arc on terrain」 相关的逻辑。

```csharp
// 静态调用，不需要实例
DebugExtensions.RenderDebugArcOnTerrain(scene, frame, 0, 0, 0, 0, false, false);
```

### RenderDebugLineOnTerrain
`public static void RenderDebugLineOnTerrain(Scene scene, Vec3 position, Vec3 direction, uint color, bool depthCheck = true, float time = 0f, bool isDotted = false, float pointDensity = 1f)`

**用途 / Purpose:** 处理与 「render debug line on terrain」 相关的逻辑。

```csharp
// 静态调用，不需要实例
DebugExtensions.RenderDebugLineOnTerrain(scene, position, direction, 0, false, 0, false, 0);
```

## 使用示例

```csharp
DebugExtensions.RenderDebugCircleOnTerrain(scene, frame, 0, 0, false, false);
```

## 参见

- [本区域目录](../)