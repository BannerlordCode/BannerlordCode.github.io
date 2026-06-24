<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BrushAnimation`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BrushAnimation

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class BrushAnimation`
**Base:** 无
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushAnimation.cs`

## 概述

`BrushAnimation` 位于 `TaleWorlds.GauntletUI`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; set; }` |
| `Duration` | `public float Duration { get; set; }` |
| `Loop` | `public bool Loop { get; set; }` |
| `InterpolationType` | `public AnimationInterpolation.Type InterpolationType { get; set; }` |
| `InterpolationFunction` | `public AnimationInterpolation.Function InterpolationFunction { get; set; }` |
| `StyleAnimation` | `public BrushLayerAnimation StyleAnimation { get; set; }` |

## 主要方法

### AddAnimationProperty
`public void AddAnimationProperty(BrushAnimationProperty property)`

**用途 / Purpose:** 向当前集合/状态中添加 `animation property`。

### RemoveAnimationProperty
`public void RemoveAnimationProperty(BrushAnimationProperty property)`

**用途 / Purpose:** 从当前集合/状态中移除 `animation property`。

### FillFrom
`public void FillFrom(BrushAnimation animation)`

**用途 / Purpose:** 处理 `fill from` 相关逻辑。

### GetLayerAnimation
`public BrushLayerAnimation GetLayerAnimation(string name)`

**用途 / Purpose:** 获取 `layer animation` 的当前值。

### GetLayerAnimations
`public IEnumerable<BrushLayerAnimation> GetLayerAnimations()`

**用途 / Purpose:** 获取 `layer animations` 的当前值。

## 使用示例

```csharp
var value = new BrushAnimation();
value.AddAnimationProperty(property);
```

## 参见

- [完整类目录](../catalog)