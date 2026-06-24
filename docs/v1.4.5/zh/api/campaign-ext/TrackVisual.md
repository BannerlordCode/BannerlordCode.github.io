<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TrackVisual`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# TrackVisual

**Namespace:** SandBox.View.Map.Visuals
**Module:** SandBox.View
**Type:** `public class TrackVisual : MapEntityVisual<Track>`
**Base:** `MapEntityVisual<Track>`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.View/SandBox.View.Map.Visuals/TrackVisual.cs`

## 概述

`TrackVisual` 位于 `SandBox.View.Map.Visuals`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.View.Map.Visuals` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetVisualPosition
`public override Vec3 GetVisualPosition()`

**用途 / Purpose:** 获取 `visual position` 的当前值。

### IsVisibleOrFadingOut
`public override bool IsVisibleOrFadingOut()`

**用途 / Purpose:** 处理 `is visible or fading out` 相关逻辑。

### OnHover
`public override void OnHover()`

**用途 / Purpose:** 当 `hover` 事件触发时调用此方法。

### OnMapClick
`public override bool OnMapClick(bool followModifierUsed)`

**用途 / Purpose:** 当 `map click` 事件触发时调用此方法。

### OnOpenEncyclopedia
`public override void OnOpenEncyclopedia()`

**用途 / Purpose:** 当 `open encyclopedia` 事件触发时调用此方法。

### ReleaseResources
`public override void ReleaseResources()`

**用途 / Purpose:** 处理 `release resources` 相关逻辑。

## 使用示例

```csharp
var value = new TrackVisual();
value.GetVisualPosition();
```

## 参见

- [完整类目录](../catalog)