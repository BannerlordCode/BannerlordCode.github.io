<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AccompanyingCharacter`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 判断当前对象是否可以执行 `enter location`。

### AllowEntranceToLocations
`public void AllowEntranceToLocations(Func<Location, bool> predicate)`

**用途 / Purpose:** 处理 `allow entrance to locations` 相关逻辑。

### DisallowEntranceToLocations
`public void DisallowEntranceToLocations(Func<Location, bool> predicate)`

**用途 / Purpose:** 处理 `disallow entrance to locations` 相关逻辑。

### AllowEntranceToAllLocations
`public void AllowEntranceToAllLocations()`

**用途 / Purpose:** 处理 `allow entrance to all locations` 相关逻辑。

### DisallowEntranceToAllLocations
`public void DisallowEntranceToAllLocations()`

**用途 / Purpose:** 处理 `disallow entrance to all locations` 相关逻辑。

## 使用示例

```csharp
var value = new AccompanyingCharacter();
value.CanEnterLocation(location);
```

## 参见

- [完整类目录](../catalog)