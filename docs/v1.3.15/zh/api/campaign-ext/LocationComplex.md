<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `LocationComplex`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LocationComplex

**命名空间:** TaleWorlds.CampaignSystem.Settlements.Locations
**模块:** TaleWorlds.CampaignSystem
**类型:** `public class LocationComplex`
**领域:** campaign-ext

## 概述

`LocationComplex` 位于 `TaleWorlds.CampaignSystem.Settlements.Locations`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

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

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
LocationComplex.CanAlways(locationCharacter, location);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
