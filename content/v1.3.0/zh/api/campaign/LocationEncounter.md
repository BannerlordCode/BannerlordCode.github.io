---
title: "LocationEncounter"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `LocationEncounter`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# LocationEncounter

**Namespace:** TaleWorlds.CampaignSystem.Encounters
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class LocationEncounter`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Encounters/LocationEncounter.cs`

## 概述

`LocationEncounter` 位于 `TaleWorlds.CampaignSystem.Encounters`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Encounters` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Settlement` | `public Settlement Settlement { get; }` |
| `CharactersAccompanyingPlayer` | `public List<AccompanyingCharacter> CharactersAccompanyingPlayer { get; }` |

## 主要方法

### AddAccompanyingCharacter
`public void AddAccompanyingCharacter(LocationCharacter locationCharacter, bool isFollowing = false)`

**用途 / Purpose:** 向当前集合/状态中添加 `accompanying character`。

### GetAccompanyingCharacter
`public AccompanyingCharacter GetAccompanyingCharacter(LocationCharacter locationCharacter)`

**用途 / Purpose:** 获取 `accompanying character` 的当前值。

### GetAccompanyingCharacter
`public AccompanyingCharacter GetAccompanyingCharacter(CharacterObject character)`

**用途 / Purpose:** 获取 `accompanying character` 的当前值。

### RemoveAccompanyingCharacter
`public void RemoveAccompanyingCharacter(LocationCharacter locationCharacter)`

**用途 / Purpose:** 从当前集合/状态中移除 `accompanying character`。

### RemoveAccompanyingCharacter
`public void RemoveAccompanyingCharacter(Hero hero)`

**用途 / Purpose:** 从当前集合/状态中移除 `accompanying character`。

### RemoveAllAccompanyingCharacters
`public void RemoveAllAccompanyingCharacters()`

**用途 / Purpose:** 从当前集合/状态中移除 `all accompanying characters`。

### OnCharacterLocationChanged
`public void OnCharacterLocationChanged(LocationCharacter locationCharacter, Location fromLocation, Location toLocation)`

**用途 / Purpose:** 当 `character location changed` 事件触发时调用此方法。

### IsWorkshopLocation
`public virtual bool IsWorkshopLocation(Location location)`

**用途 / Purpose:** 处理 `is workshop location` 相关逻辑。

### IsTavern
`public virtual bool IsTavern(Location location)`

**用途 / Purpose:** 处理 `is tavern` 相关逻辑。

### CreateAndOpenMissionController
`public virtual IMission CreateAndOpenMissionController(Location nextLocation, Location previousLocation = null, CharacterObject talkToChar = null, string playerSpecialSpawnTag = null)`

**用途 / Purpose:** 创建一个 `and open mission controller` 实例或对象。

## 使用示例

```csharp
var value = new LocationEncounter();
value.AddAccompanyingCharacter(locationCharacter, false);
```

## 参见

- [完整类目录](../catalog)