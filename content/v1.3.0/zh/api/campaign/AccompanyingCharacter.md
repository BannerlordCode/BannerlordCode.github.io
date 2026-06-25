---
title: "AccompanyingCharacter"
description: "AccompanyingCharacter 的自动生成类参考。"
---
# AccompanyingCharacter

**Namespace:** TaleWorlds.CampaignSystem.Settlements.Locations
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class AccompanyingCharacter`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Settlements/Locations/AccompanyingCharacter.cs`

## 概述

`AccompanyingCharacter` 位于 `TaleWorlds.CampaignSystem.Settlements.Locations`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Settlements.Locations` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsFollowingPlayerAtMissionStart` | `public bool IsFollowingPlayerAtMissionStart { get; }` |

## 主要方法

### CanEnterLocation
`public bool CanEnterLocation(Location location)`

**用途 / Purpose:** 检查当前对象是否满足 enter location 的前置条件。

```csharp
// 先通过子系统 API 拿到 AccompanyingCharacter 实例
AccompanyingCharacter accompanyingCharacter = ...;
var result = accompanyingCharacter.CanEnterLocation(location);
```

### AllowEntranceToLocations
`public void AllowEntranceToLocations(Func<Location, bool> predicate)`

**用途 / Purpose:** 允许当前对象启用或执行entrance to locations。

```csharp
// 先通过子系统 API 拿到 AccompanyingCharacter 实例
AccompanyingCharacter accompanyingCharacter = ...;
accompanyingCharacter.AllowEntranceToLocations(func<Location, false);
```

### DisallowEntranceToLocations
`public void DisallowEntranceToLocations(Func<Location, bool> predicate)`

**用途 / Purpose:** 禁止当前对象启用或执行entrance to locations。

```csharp
// 先通过子系统 API 拿到 AccompanyingCharacter 实例
AccompanyingCharacter accompanyingCharacter = ...;
accompanyingCharacter.DisallowEntranceToLocations(func<Location, false);
```

### AllowEntranceToAllLocations
`public void AllowEntranceToAllLocations()`

**用途 / Purpose:** 允许当前对象启用或执行entrance to all locations。

```csharp
// 先通过子系统 API 拿到 AccompanyingCharacter 实例
AccompanyingCharacter accompanyingCharacter = ...;
accompanyingCharacter.AllowEntranceToAllLocations();
```

### DisallowEntranceToAllLocations
`public void DisallowEntranceToAllLocations()`

**用途 / Purpose:** 禁止当前对象启用或执行entrance to all locations。

```csharp
// 先通过子系统 API 拿到 AccompanyingCharacter 实例
AccompanyingCharacter accompanyingCharacter = ...;
accompanyingCharacter.DisallowEntranceToAllLocations();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
AccompanyingCharacter accompanyingCharacter = ...;
accompanyingCharacter.CanEnterLocation(location);
```

## 参见

- [本区域目录](../)