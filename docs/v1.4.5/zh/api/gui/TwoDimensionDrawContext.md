<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TwoDimensionDrawContext`
- [← 本领域 / 返回 gui](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# TwoDimensionDrawContext

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public class TwoDimensionDrawContext`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.TwoDimension/TaleWorlds.TwoDimension/TwoDimensionDrawContext.cs`

## 概述

`TwoDimensionDrawContext` 位于 `TaleWorlds.TwoDimension`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.TwoDimension` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Reset
`public void Reset()`

**用途 / Purpose:** 将 `reset` 重置为初始状态。

### CreateSimpleMaterial
`public SimpleMaterial CreateSimpleMaterial()`

**用途 / Purpose:** 创建一个 `simple material` 实例或对象。

### CreateTextMaterial
`public TextMaterial CreateTextMaterial()`

**用途 / Purpose:** 创建一个 `text material` 实例或对象。

### PushScissor
`public void PushScissor(in Rectangle2D newScissorRectangle)`

**用途 / Purpose:** 处理 `push scissor` 相关逻辑。

### PopScissor
`public void PopScissor()`

**用途 / Purpose:** 处理 `pop scissor` 相关逻辑。

### IsDiscardedByAnyScissor
`public bool IsDiscardedByAnyScissor(in Rectangle2D rect)`

**用途 / Purpose:** 处理 `is discarded by any scissor` 相关逻辑。

### SetCircualMask
`public void SetCircualMask(Vector2 position, float radius, float smoothingRadius)`

**用途 / Purpose:** 设置 `circual mask` 的值或状态。

### ClearCircualMask
`public void ClearCircualMask()`

**用途 / Purpose:** 处理 `clear circual mask` 相关逻辑。

### DrawTo
`public void DrawTo(TwoDimensionContext twoDimensionContext)`

**用途 / Purpose:** 处理 `draw to` 相关逻辑。

### DrawSprite
`public void DrawSprite(Sprite sprite, SimpleMaterial material, in Rectangle2D rectangle, float scale)`

**用途 / Purpose:** 处理 `draw sprite` 相关逻辑。

### Draw
`public void Draw(SimpleMaterial material, in ImageDrawObject drawObject)`

**用途 / Purpose:** 处理 `draw` 相关逻辑。

### Draw
`public void Draw(TextMaterial material, in TextDrawObject drawObject)`

**用途 / Purpose:** 处理 `draw` 相关逻辑。

### Draw
`public void Draw(Text text, TextMaterial materialOriginal, in Rectangle2D parentRectangle, in Rectangle2D rectangle)`

**用途 / Purpose:** 处理 `draw` 相关逻辑。

## 使用示例

```csharp
var value = new TwoDimensionDrawContext();
value.Reset();
```

## 参见

- [完整类目录](../catalog)