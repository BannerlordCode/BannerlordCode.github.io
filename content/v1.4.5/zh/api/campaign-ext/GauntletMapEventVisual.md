---
title: "GauntletMapEventVisual"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GauntletMapEventVisual`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletMapEventVisual

**Namespace:** SandBox.GauntletUI.Map
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletMapEventVisual : IMapEventVisual`
**Base:** `IMapEventVisual`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI.Map/GauntletMapEventVisual.cs`

## 概述

`GauntletMapEventVisual` 位于 `SandBox.GauntletUI.Map`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.GauntletUI.Map` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `MapEvent` | `public MapEvent MapEvent { get; }` |
| `WorldPosition` | `public Vec2 WorldPosition { get; }` |
| `IsVisible` | `public bool IsVisible { get; }` |

## 主要方法

### Initialize
`public void Initialize(CampaignVec2 position, bool isVisible)`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### OnMapEventEnd
`public void OnMapEventEnd()`

**用途 / Purpose:** 当 `map event end` 事件触发时调用此方法。

### SetVisibility
`public void SetVisibility(bool isVisible)`

**用途 / Purpose:** 设置 `visibility` 的值或状态。

## 使用示例

```csharp
var value = new GauntletMapEventVisual();
value.Initialize(position, false);
```

## 参见

- [完整类目录](../catalog)