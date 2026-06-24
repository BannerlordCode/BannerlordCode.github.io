<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SandBoxViewVisualManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SandBoxViewVisualManager

**Namespace:** SandBox.View
**Module:** SandBox.View
**Type:** `public class SandBoxViewVisualManager`
**Base:** 无
**File:** `SandBox.View/SandBoxViewVisualManager.cs`

## 概述

`SandBoxViewVisualManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `SandBoxViewVisualManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### VisualTick
`public static void VisualTick(MapScreen screen, float realDt, float dt)`

**用途 / Purpose:** 处理 `visual tick` 相关逻辑。

### OnTick
`public static void OnTick(float realDt, float dt)`

**用途 / Purpose:** 当 `tick` 事件触发时调用此方法。

### OnFrameTick
`public static void OnFrameTick(float dt)`

**用途 / Purpose:** 当 `frame tick` 事件触发时调用此方法。

### OnMouseClick
`public static bool OnMouseClick(MapEntityVisual visualOfSelectedEntity, Vec3 intersectionPoint, PathFaceRecord mouseOverFaceIndex, bool isDoubleClick)`

**用途 / Purpose:** 当 `mouse click` 事件触发时调用此方法。

### OnGameLoadFinished
`public static void OnGameLoadFinished()`

**用途 / Purpose:** 当 `game load finished` 事件触发时调用此方法。

## 使用示例

```csharp
var manager = SandBoxViewVisualManager.Current;
```

## 参见

- [完整类目录](../catalog)