<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapViewsContainer`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MapViewsContainer

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public class MapViewsContainer`
**Base:** 无
**File:** `SandBox.View/Map/MapViewsContainer.cs`

## 概述

`MapViewsContainer` 位于 `SandBox.View.Map`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.View.Map` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Add
`public void Add(MapView mapView)`

**用途 / Purpose:** 向当前集合/状态中添加 `add`。

### Remove
`public void Remove(MapView mapView)`

**用途 / Purpose:** 从当前集合/状态中移除 `remove`。

### Contains
`public bool Contains(MapView mapView)`

**用途 / Purpose:** 处理 `contains` 相关逻辑。

### Foreach
`public void Foreach(Action<MapView> action)`

**用途 / Purpose:** 处理 `foreach` 相关逻辑。

### ForeachReverse
`public void ForeachReverse(Action<MapView> action)`

**用途 / Purpose:** 处理 `foreach reverse` 相关逻辑。

### ReturnFirstElementWithCondition
`public MapView ReturnFirstElementWithCondition(Func<MapView, bool> condition)`

**用途 / Purpose:** 处理 `return first element with condition` 相关逻辑。

### GetContextToChangeTo
`public TutorialContexts GetContextToChangeTo()`

**用途 / Purpose:** 获取 `context to change to` 的当前值。

### IsThereAnyViewIsEscaped
`public bool IsThereAnyViewIsEscaped()`

**用途 / Purpose:** 处理 `is there any view is escaped` 相关逻辑。

### IsOpeningEscapeMenuOnFocusChangeAllowedForAll
`public bool IsOpeningEscapeMenuOnFocusChangeAllowedForAll()`

**用途 / Purpose:** 处理 `is opening escape menu on focus change allowed for all` 相关逻辑。

## 使用示例

```csharp
var value = new MapViewsContainer();
value.Add(mapView);
```

## 参见

- [完整类目录](../catalog)