---
title: "MapMarker"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapMarker`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapMarker

**Namespace:** TaleWorlds.CampaignSystem.Map
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MapMarker : ITrackableCampaignObject, ITrackableBase`
**Base:** `ITrackableCampaignObject`
**File:** `TaleWorlds.CampaignSystem/Map/MapMarker.cs`

## 概述

`MapMarker` 位于 `TaleWorlds.CampaignSystem.Map`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Map` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Banner` | `public Banner Banner { get; }` |
| `Name` | `public TextObject Name { get; }` |
| `Position` | `public Vec3 Position { get; }` |
| `IsVisibleOnMap` | `public bool IsVisibleOnMap { get; }` |
| `QuestId` | `public string QuestId { get; }` |
| `IsReady` | `public bool IsReady { get; }` |

## 主要方法

### GetBanner
`public Banner GetBanner()`

**用途 / Purpose:** 获取 `banner` 的当前值。

### GetName
`public TextObject GetName()`

**用途 / Purpose:** 获取 `name` 的当前值。

### GetPosition
`public Vec3 GetPosition()`

**用途 / Purpose:** 获取 `position` 的当前值。

## 使用示例

```csharp
var value = new MapMarker();
value.GetBanner();
```

## 参见

- [完整类目录](../catalog)