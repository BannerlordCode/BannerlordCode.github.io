---
title: "LocationComplex"
description: "LocationComplex 的自动生成类参考。"
---
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

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 always 的前置条件。

```csharp
// 静态调用，不需要实例
LocationComplex.CanAlways(locationCharacter, location);
```

### CanNever
`public static bool CanNever(LocationCharacter locationCharacter, Location location)`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 never 的前置条件。

```csharp
// 静态调用，不需要实例
LocationComplex.CanNever(locationCharacter, location);
```

### CanIfHero
`public static bool CanIfHero(LocationCharacter locationCharacter, Location location)`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 if hero 的前置条件。

```csharp
// 静态调用，不需要实例
LocationComplex.CanIfHero(locationCharacter, location);
```

### CanIfDay
`public static bool CanIfDay(LocationCharacter locationCharacter, Location location)`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 if day 的前置条件。

```csharp
// 静态调用，不需要实例
LocationComplex.CanIfDay(locationCharacter, location);
```

### CanIfPriceIsPaid
`public static bool CanIfPriceIsPaid(LocationCharacter locationCharacter, Location location)`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 if price is paid 的前置条件。

```csharp
// 静态调用，不需要实例
LocationComplex.CanIfPriceIsPaid(locationCharacter, location);
```

### CanIfGrownUpMaleOrHero
`public static bool CanIfGrownUpMaleOrHero(LocationCharacter locationCharacter, Location location)`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 if grown up male or hero 的前置条件。

```csharp
// 静态调用，不需要实例
LocationComplex.CanIfGrownUpMaleOrHero(locationCharacter, location);
```

### CanIfMaleOrHero
`public static bool CanIfMaleOrHero(LocationCharacter locationCharacter, Location location)`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 if male or hero 的前置条件。

```csharp
// 静态调用，不需要实例
LocationComplex.CanIfMaleOrHero(locationCharacter, location);
```

### CanIfSettlementAccessModelLetsPlayer
`public static bool CanIfSettlementAccessModelLetsPlayer(LocationCharacter locationCharacter, Location location)`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 if settlement access model lets player 的前置条件。

```csharp
// 静态调用，不需要实例
LocationComplex.CanIfSettlementAccessModelLetsPlayer(locationCharacter, location);
```

### Initialize
`public void Initialize(LocationComplexTemplate complexTemplate)`

**用途 / Purpose:** **用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 LocationComplex 实例
LocationComplex locationComplex = ...;
locationComplex.Initialize(complexTemplate);
```

### AddPassage
`public void AddPassage(Location firstLocation, Location secondLocation)`

**用途 / Purpose:** **用途 / Purpose:** 将 passage 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 LocationComplex 实例
LocationComplex locationComplex = ...;
locationComplex.AddPassage(firstLocation, secondLocation);
```

### ChangeLocation
`public void ChangeLocation(LocationCharacter locationCharacter, Location fromLocation, Location toLocation)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ChangeLocation 对应的操作。

```csharp
// 先通过子系统 API 拿到 LocationComplex 实例
LocationComplex locationComplex = ...;
locationComplex.ChangeLocation(locationCharacter, fromLocation, toLocation);
```

### GetListOfCharactersInLocation
`public IEnumerable<LocationCharacter> GetListOfCharactersInLocation(string locationName)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 list of characters in location 的结果。

```csharp
// 先通过子系统 API 拿到 LocationComplex 实例
LocationComplex locationComplex = ...;
var result = locationComplex.GetListOfCharactersInLocation("example");
```

### GetListOfCharacters
`public IList<LocationCharacter> GetListOfCharacters()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 list of characters 的结果。

```csharp
// 先通过子系统 API 拿到 LocationComplex 实例
LocationComplex locationComplex = ...;
var result = locationComplex.GetListOfCharacters();
```

### GetListOfLocations
`public IEnumerable<Location> GetListOfLocations()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 list of locations 的结果。

```csharp
// 先通过子系统 API 拿到 LocationComplex 实例
LocationComplex locationComplex = ...;
var result = locationComplex.GetListOfLocations();
```

### AgentPassageUsageTick
`public void AgentPassageUsageTick()`

**用途 / Purpose:** **用途 / Purpose:** 调用 AgentPassageUsageTick 对应的操作。

```csharp
// 先通过子系统 API 拿到 LocationComplex 实例
LocationComplex locationComplex = ...;
locationComplex.AgentPassageUsageTick();
```

### GetLocationOfCharacter
`public Location GetLocationOfCharacter(LocationCharacter character)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 location of character 的结果。

```csharp
// 先通过子系统 API 拿到 LocationComplex 实例
LocationComplex locationComplex = ...;
var result = locationComplex.GetLocationOfCharacter(character);
```

### GetLocationOfCharacter
`public Location GetLocationOfCharacter(Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 location of character 的结果。

```csharp
// 先通过子系统 API 拿到 LocationComplex 实例
LocationComplex locationComplex = ...;
var result = locationComplex.GetLocationOfCharacter(hero);
```

### GetLocationCharacterOfHero
`public LocationCharacter GetLocationCharacterOfHero(Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 location character of hero 的结果。

```csharp
// 先通过子系统 API 拿到 LocationComplex 实例
LocationComplex locationComplex = ...;
var result = locationComplex.GetLocationCharacterOfHero(hero);
```

### GetFirstLocationCharacterOfCharacter
`public LocationCharacter GetFirstLocationCharacterOfCharacter(CharacterObject character)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 first location character of character 的结果。

```csharp
// 先通过子系统 API 拿到 LocationComplex 实例
LocationComplex locationComplex = ...;
var result = locationComplex.GetFirstLocationCharacterOfCharacter(character);
```

### RemoveCharacterIfExists
`public void RemoveCharacterIfExists(Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 从当前容器或状态中移除 character if exists。

```csharp
// 先通过子系统 API 拿到 LocationComplex 实例
LocationComplex locationComplex = ...;
locationComplex.RemoveCharacterIfExists(hero);
```

### RemoveCharacterIfExists
`public void RemoveCharacterIfExists(LocationCharacter locationCharacter)`

**用途 / Purpose:** **用途 / Purpose:** 从当前容器或状态中移除 character if exists。

```csharp
// 先通过子系统 API 拿到 LocationComplex 实例
LocationComplex locationComplex = ...;
locationComplex.RemoveCharacterIfExists(locationCharacter);
```

### ClearTempCharacters
`public void ClearTempCharacters()`

**用途 / Purpose:** **用途 / Purpose:** 清空当前对象中的temp characters。

```csharp
// 先通过子系统 API 拿到 LocationComplex 实例
LocationComplex locationComplex = ...;
locationComplex.ClearTempCharacters();
```

### GetLocationWithId
`public Location GetLocationWithId(string id)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 location with id 的结果。

```csharp
// 先通过子系统 API 拿到 LocationComplex 实例
LocationComplex locationComplex = ...;
var result = locationComplex.GetLocationWithId("example");
```

### GetScene
`public string GetScene(string stringId, int upgradeLevel)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 scene 的结果。

```csharp
// 先通过子系统 API 拿到 LocationComplex 实例
LocationComplex locationComplex = ...;
var result = locationComplex.GetScene("example", 0);
```

### FindCharacter
`public LocationCharacter FindCharacter(IAgent agent)`

**用途 / Purpose:** **用途 / Purpose:** 在当前集合/范围内查找满足条件的character。

```csharp
// 先通过子系统 API 拿到 LocationComplex 实例
LocationComplex locationComplex = ...;
var result = locationComplex.FindCharacter(agent);
```

### FindAll
`public IEnumerable<Location> FindAll(Func<string, bool> predicate)`

**用途 / Purpose:** **用途 / Purpose:** 在当前集合/范围内查找满足条件的all。

```csharp
// 先通过子系统 API 拿到 LocationComplex 实例
LocationComplex locationComplex = ...;
var result = locationComplex.FindAll(func<string, false);
```

## 使用示例

```csharp
LocationComplex.CanAlways(locationCharacter, location);
```

## 参见

- [本区域目录](../)