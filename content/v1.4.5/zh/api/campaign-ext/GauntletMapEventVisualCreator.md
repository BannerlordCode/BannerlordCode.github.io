---
title: "GauntletMapEventVisualCreator"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GauntletMapEventVisualCreator`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletMapEventVisualCreator

**Namespace:** SandBox.GauntletUI.Map
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletMapEventVisualCreator : IMapEventVisualCreator`
**Base:** `IMapEventVisualCreator`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI.Map/GauntletMapEventVisualCreator.cs`

## 概述

`GauntletMapEventVisualCreator` 位于 `SandBox.GauntletUI.Map`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.GauntletUI.Map` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CreateMapEventVisual
`public IMapEventVisual CreateMapEventVisual(MapEvent mapEvent)`

**用途 / Purpose:** 创建一个 `map event visual` 实例或对象。

### GetCurrentEvents
`public IEnumerable<GauntletMapEventVisual> GetCurrentEvents()`

**用途 / Purpose:** 获取 `current events` 的当前值。

## 使用示例

```csharp
var value = new GauntletMapEventVisualCreator();
value.CreateMapEventVisual(mapEvent);
```

## 参见

- [完整类目录](../catalog)