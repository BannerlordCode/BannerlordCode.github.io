---
title: "MapEventVisualsVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapEventVisualsVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MapEventVisualsVM

**Namespace:** SandBox.ViewModelCollection.Map
**Module:** SandBox.ViewModelCollection
**Type:** `public class MapEventVisualsVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Map/MapEventVisualsVM.cs`

## 概述

`MapEventVisualsVM` 位于 `SandBox.ViewModelCollection.Map`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.Map` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `MapEvents` | `public MBBindingList<MapEventVisualItemVM> MapEvents { get; set; }` |

## 主要方法

### Update
`public void Update(float dt)`

**用途 / Purpose:** 更新 `update` 的状态或数据。

### OnMapEventVisibilityChanged
`public void OnMapEventVisibilityChanged(MapEvent mapEvent)`

**用途 / Purpose:** 当 `map event visibility changed` 事件触发时调用此方法。

### OnMapEventStarted
`public void OnMapEventStarted(MapEvent mapEvent)`

**用途 / Purpose:** 当 `map event started` 事件触发时调用此方法。

### OnMapEventEnded
`public void OnMapEventEnded(MapEvent mapEvent)`

**用途 / Purpose:** 当 `map event ended` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new MapEventVisualsVM();
value.Update(0);
```

## 参见

- [完整类目录](../catalog)