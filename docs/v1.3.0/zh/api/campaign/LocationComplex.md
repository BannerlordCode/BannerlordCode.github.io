<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `LocationComplex`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# LocationComplex

**Namespace:** TaleWorlds.CampaignSystem.Settlements.Locations
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class LocationComplex`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Settlements/Locations/LocationComplex.cs`

## 概述

`LocationComplex` 位于 `TaleWorlds.CampaignSystem.Settlements.Locations`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Settlements.Locations` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Current` | `public static LocationComplex Current { get; }` |

## 主要方法

### CanAlways
`public static bool CanAlways(LocationCharacter locationCharacter, Location location)`

**用途 / Purpose:** 判断当前对象是否可以执行 `always`。

### CanNever
`public static bool CanNever(LocationCharacter locationCharacter, Location location)`

**用途 / Purpose:** 判断当前对象是否可以执行 `never`。

### CanIfHero
`public static bool CanIfHero(LocationCharacter locationCharacter, Location location)`

**用途 / Purpose:** 判断当前对象是否可以执行 `if hero`。

### CanIfDay
`public static bool CanIfDay(LocationCharacter locationCharacter, Location location)`

**用途 / Purpose:** 判断当前对象是否可以执行 `if day`。

### CanIfPriceIsPaid
`public static bool CanIfPriceIsPaid(LocationCharacter locationCharacter, Location location)`

**用途 / Purpose:** 判断当前对象是否可以执行 `if price is paid`。

### CanIfGrownUpMaleOrHero
`public static bool CanIfGrownUpMaleOrHero(LocationCharacter locationCharacter, Location location)`

**用途 / Purpose:** 判断当前对象是否可以执行 `if grown up male or hero`。

### CanIfMaleOrHero
`public static bool CanIfMaleOrHero(LocationCharacter locationCharacter, Location location)`

**用途 / Purpose:** 判断当前对象是否可以执行 `if male or hero`。

### CanIfSettlementAccessModelLetsPlayer
`public static bool CanIfSettlementAccessModelLetsPlayer(LocationCharacter locationCharacter, Location location)`

**用途 / Purpose:** 判断当前对象是否可以执行 `if settlement access model lets player`。

### Initialize
`public void Initialize(LocationComplexTemplate complexTemplate)`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### AddPassage
`public void AddPassage(Location firstLocation, Location secondLocation)`

**用途 / Purpose:** 向当前集合/状态中添加 `passage`。

### ChangeLocation
`public void ChangeLocation(LocationCharacter locationCharacter, Location fromLocation, Location toLocation)`

**用途 / Purpose:** 处理 `change location` 相关逻辑。

### GetListOfCharactersInLocation
`public IEnumerable<LocationCharacter> GetListOfCharactersInLocation(string locationName)`

**用途 / Purpose:** 获取 `list of characters in location` 的当前值。

### GetListOfCharacters
`public IList<LocationCharacter> GetListOfCharacters()`

**用途 / Purpose:** 获取 `list of characters` 的当前值。

### GetListOfLocations
`public IEnumerable<Location> GetListOfLocations()`

**用途 / Purpose:** 获取 `list of locations` 的当前值。

### AgentPassageUsageTick
`public void AgentPassageUsageTick()`

**用途 / Purpose:** 处理 `agent passage usage tick` 相关逻辑。

### GetLocationOfCharacter
`public Location GetLocationOfCharacter(LocationCharacter character)`

**用途 / Purpose:** 获取 `location of character` 的当前值。

### GetLocationOfCharacter
`public Location GetLocationOfCharacter(Hero hero)`

**用途 / Purpose:** 获取 `location of character` 的当前值。

### GetLocationCharacterOfHero
`public LocationCharacter GetLocationCharacterOfHero(Hero hero)`

**用途 / Purpose:** 获取 `location character of hero` 的当前值。

### GetFirstLocationCharacterOfCharacter
`public LocationCharacter GetFirstLocationCharacterOfCharacter(CharacterObject character)`

**用途 / Purpose:** 获取 `first location character of character` 的当前值。

### RemoveCharacterIfExists
`public void RemoveCharacterIfExists(Hero hero)`

**用途 / Purpose:** 从当前集合/状态中移除 `character if exists`。

### RemoveCharacterIfExists
`public void RemoveCharacterIfExists(LocationCharacter locationCharacter)`

**用途 / Purpose:** 从当前集合/状态中移除 `character if exists`。

### ClearTempCharacters
`public void ClearTempCharacters()`

**用途 / Purpose:** 处理 `clear temp characters` 相关逻辑。

### GetLocationWithId
`public Location GetLocationWithId(string id)`

**用途 / Purpose:** 获取 `location with id` 的当前值。

### GetScene
`public string GetScene(string stringId, int upgradeLevel)`

**用途 / Purpose:** 获取 `scene` 的当前值。

### FindCharacter
`public LocationCharacter FindCharacter(IAgent agent)`

**用途 / Purpose:** 处理 `find character` 相关逻辑。

### FindAll
`public IEnumerable<Location> FindAll(Func<string, bool> predicate)`

**用途 / Purpose:** 处理 `find all` 相关逻辑。

## 使用示例

```csharp
LocationComplex.CanAlways(locationCharacter, location);
```

## 参见

- [完整类目录](../catalog)