<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BrushRenderer`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BrushRenderer

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class BrushRenderer`
**Base:** 无
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushRenderer.cs`

## 概述

`BrushRenderer` 位于 `TaleWorlds.GauntletUI`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `LastUpdatedFrameNumber` | `public ulong LastUpdatedFrameNumber { get; }` |
| `ForcePixelPerfectPlacement` | `public bool ForcePixelPerfectPlacement { get; set; }` |
| `CurrentStyle` | `public Style CurrentStyle { get; set; }` |
| `Brush` | `public Brush Brush { get; set; }` |
| `CurrentState` | `public string CurrentState { get; set; }` |

## 主要方法

### Update
`public void Update(ulong frameNumber, float globalAnimTime, float dt)`

**用途 / Purpose:** 更新 `update` 的状态或数据。

### IsUpdateNeeded
`public bool IsUpdateNeeded()`

**用途 / Purpose:** 处理 `is update needed` 相关逻辑。

### Render
`public void Render(TwoDimensionDrawContext drawContext, in Rectangle2D rect, float scale, float contextAlpha, Vector2 overlayOffset = default(Vector2), Vector2 overlaySize = default(Vector2))`

**用途 / Purpose:** 处理 `render` 相关逻辑。

### CreateTextMaterial
`public TextMaterial CreateTextMaterial(TwoDimensionDrawContext drawContext)`

**用途 / Purpose:** 创建一个 `text material` 实例或对象。

### RestartAnimation
`public void RestartAnimation()`

**用途 / Purpose:** 处理 `restart animation` 相关逻辑。

### SetSeed
`public void SetSeed(int seed)`

**用途 / Purpose:** 设置 `seed` 的值或状态。

## 使用示例

```csharp
var value = new BrushRenderer();
value.Update(0, 0, 0);
```

## 参见

- [完整类目录](../catalog)