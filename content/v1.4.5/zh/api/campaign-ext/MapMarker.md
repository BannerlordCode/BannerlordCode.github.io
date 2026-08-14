---
title: "MapMarker"
description: "MapMarker 的自动生成类参考。"
---
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

**用途 / Purpose:** 读取并返回当前对象中 banner 的结果。

```csharp
// 先通过子系统 API 拿到 MapMarker 实例
MapMarker mapMarker = ...;
var result = mapMarker.GetBanner();
```

### GetName
`public TextObject GetName()`

**用途 / Purpose:** 读取并返回当前对象中 name 的结果。

```csharp
// 先通过子系统 API 拿到 MapMarker 实例
MapMarker mapMarker = ...;
var result = mapMarker.GetName();
```

### GetPosition
`public Vec3 GetPosition()`

**用途 / Purpose:** 读取并返回当前对象中 position 的结果。

```csharp
// 先通过子系统 API 拿到 MapMarker 实例
MapMarker mapMarker = ...;
var result = mapMarker.GetPosition();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MapMarker mapMarker = ...;
mapMarker.GetBanner();
```

## 参见

- [本区域目录](../)