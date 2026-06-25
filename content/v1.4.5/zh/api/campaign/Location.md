---
title: "Location"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Location`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# Location

**Namespace:** TaleWorlds.CampaignSystem.Settlements.Locations
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class Location`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Settlements.Locations/Location.cs`

## 概述

`Location` 位于 `TaleWorlds.CampaignSystem.Settlements.Locations`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Settlements.Locations` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `StringId` | `public string StringId { get; }` |
| `SpecialItems` | `public List<ItemObject> SpecialItems { get; }` |
| `IsReserved` | `public bool IsReserved { get; }` |
| `LocationsOfPassages` | `public List<Location> LocationsOfPassages { get; }` |
| `Name` | `public TextObject Name { get; }` |
| `DoorName` | `public TextObject DoorName { get; }` |
| `IsIndoor` | `public bool IsIndoor { get; }` |
| `CanBeReserved` | `public bool CanBeReserved { get; }` |
| `IsInitialized` | `public bool IsInitialized { get; }` |

## 主要方法

### Initialize
`public void Initialize(Location locationTemplate, LocationComplex ownerComplex)`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### CanAIExit
`public bool CanAIExit(LocationCharacter character)`

**用途 / Purpose:** 判断当前对象是否可以执行 `a i exit`。

### CanAIEnter
`public bool CanAIEnter(LocationCharacter character)`

**用途 / Purpose:** 判断当前对象是否可以执行 `a i enter`。

### CanPlayerEnter
`public bool CanPlayerEnter()`

**用途 / Purpose:** 判断当前对象是否可以执行 `player enter`。

### CanPlayerSee
`public bool CanPlayerSee()`

**用途 / Purpose:** 判断当前对象是否可以执行 `player see`。

### ReserveLocation
`public void ReserveLocation(TextObject locationName, TextObject doorName)`

**用途 / Purpose:** 处理 `reserve location` 相关逻辑。

### RemoveReservation
`public void RemoveReservation()`

**用途 / Purpose:** 从当前集合/状态中移除 `reservation`。

### SetOwnerComplex
`public void SetOwnerComplex(LocationComplex locationComplex)`

**用途 / Purpose:** 设置 `owner complex` 的值或状态。

### AddCharacter
`public void AddCharacter(LocationCharacter locationCharacter)`

**用途 / Purpose:** 向当前集合/状态中添加 `character`。

### AddLocationCharacters
`public void AddLocationCharacters(CreateLocationCharacterDelegate createDelegate, CultureObject culture, LocationCharacter.CharacterRelations relation, int count)`

**用途 / Purpose:** 向当前集合/状态中添加 `location characters`。

### AddLocationCharacter
`public LocationCharacter AddLocationCharacter(CreateLocationCharacterDelegate createDelegate, CultureObject culture, LocationCharacter.CharacterRelations relation)`

**用途 / Purpose:** 向当前集合/状态中添加 `location character`。

### AddSpecialItem
`public void AddSpecialItem(ItemObject itemObject)`

**用途 / Purpose:** 向当前集合/状态中添加 `special item`。

### GetSceneName
`public string GetSceneName(int upgradeLevel)`

**用途 / Purpose:** 获取 `scene name` 的当前值。

### SetSceneName
`public void SetSceneName(int upgradeLevel, string sceneName)`

**用途 / Purpose:** 设置 `scene name` 的值或状态。

### GetSceneCount
`public int GetSceneCount()`

**用途 / Purpose:** 获取 `scene count` 的当前值。

### RemoveAllHeroCharactersFromPrison
`public void RemoveAllHeroCharactersFromPrison()`

**用途 / Purpose:** 从当前集合/状态中移除 `all hero characters from prison`。

### RemoveAllCharacters
`public void RemoveAllCharacters()`

**用途 / Purpose:** 从当前集合/状态中移除 `all characters`。

### RemoveAllCharacters
`public void RemoveAllCharacters(Predicate<LocationCharacter> predicate)`

**用途 / Purpose:** 从当前集合/状态中移除 `all characters`。

### RemoveLocationCharacter
`public void RemoveLocationCharacter(LocationCharacter locationCharacter)`

**用途 / Purpose:** 从当前集合/状态中移除 `location character`。

### RemoveCharacter
`public void RemoveCharacter(Hero hero)`

**用途 / Purpose:** 从当前集合/状态中移除 `character`。

### ContainsCharacter
`public bool ContainsCharacter(LocationCharacter locationCharacter)`

**用途 / Purpose:** 处理 `contains character` 相关逻辑。

### ContainsCharacter
`public bool ContainsCharacter(Hero hero)`

**用途 / Purpose:** 处理 `contains character` 相关逻辑。

### AddPassageToLocation
`public void AddPassageToLocation(Location passageToLocation)`

**用途 / Purpose:** 向当前集合/状态中添加 `passage to location`。

### GetCharacterList
`public IEnumerable<LocationCharacter> GetCharacterList()`

**用途 / Purpose:** 获取 `character list` 的当前值。

### GetPassageToLocation
`public Location GetPassageToLocation(string locationId)`

**用途 / Purpose:** 获取 `passage to location` 的当前值。

### OnAIChangeLocation
`public void OnAIChangeLocation(Location previousLocation)`

**用途 / Purpose:** 当 `a i change location` 事件触发时调用此方法。

### GetLocationCharacter
`public LocationCharacter GetLocationCharacter(Hero hero)`

**用途 / Purpose:** 获取 `location character` 的当前值。

### GetLocationCharacter
`public LocationCharacter GetLocationCharacter(IAgentOriginBase agentOrigin)`

**用途 / Purpose:** 获取 `location character` 的当前值。

## 使用示例

```csharp
var value = new Location();
value.Initialize(locationTemplate, ownerComplex);
```

## 参见

- [完整类目录](../catalog)