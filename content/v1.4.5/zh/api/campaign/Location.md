---
title: "Location"
description: "Location 的自动生成类参考。"
---
# Location

**Namespace:** TaleWorlds.CampaignSystem.Settlements.Locations
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class Location`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Settlements.Locations/Location.cs`

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

**用途 / Purpose:** 加载当前对象所需的初始资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 Location 实例
Location location = ...;
location.Initialize(locationTemplate, ownerComplex);
```

### CanAIExit
`public bool CanAIExit(LocationCharacter character)`

**用途 / Purpose:** 检查当前对象是否满足 a i exit 的前置条件。

```csharp
// 先通过子系统 API 拿到 Location 实例
Location location = ...;
var result = location.CanAIExit(character);
```

### CanAIEnter
`public bool CanAIEnter(LocationCharacter character)`

**用途 / Purpose:** 检查当前对象是否满足 a i enter 的前置条件。

```csharp
// 先通过子系统 API 拿到 Location 实例
Location location = ...;
var result = location.CanAIEnter(character);
```

### CanPlayerEnter
`public bool CanPlayerEnter()`

**用途 / Purpose:** 检查当前对象是否满足 player enter 的前置条件。

```csharp
// 先通过子系统 API 拿到 Location 实例
Location location = ...;
var result = location.CanPlayerEnter();
```

### CanPlayerSee
`public bool CanPlayerSee()`

**用途 / Purpose:** 检查当前对象是否满足 player see 的前置条件。

```csharp
// 先通过子系统 API 拿到 Location 实例
Location location = ...;
var result = location.CanPlayerSee();
```

### ReserveLocation
`public void ReserveLocation(TextObject locationName, TextObject doorName)`

**用途 / Purpose:** 调用 ReserveLocation 对应的操作。

```csharp
// 先通过子系统 API 拿到 Location 实例
Location location = ...;
location.ReserveLocation(locationName, doorName);
```

### RemoveReservation
`public void RemoveReservation()`

**用途 / Purpose:** 从当前容器或状态中移除 reservation。

```csharp
// 先通过子系统 API 拿到 Location 实例
Location location = ...;
location.RemoveReservation();
```

### SetOwnerComplex
`public void SetOwnerComplex(LocationComplex locationComplex)`

**用途 / Purpose:** 为 owner complex 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Location 实例
Location location = ...;
location.SetOwnerComplex(locationComplex);
```

### AddCharacter
`public void AddCharacter(LocationCharacter locationCharacter)`

**用途 / Purpose:** 将 character 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Location 实例
Location location = ...;
location.AddCharacter(locationCharacter);
```

### AddLocationCharacters
`public void AddLocationCharacters(CreateLocationCharacterDelegate createDelegate, CultureObject culture, LocationCharacter.CharacterRelations relation, int count)`

**用途 / Purpose:** 将 location characters 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Location 实例
Location location = ...;
location.AddLocationCharacters(createDelegate, culture, relation, 0);
```

### AddLocationCharacter
`public LocationCharacter AddLocationCharacter(CreateLocationCharacterDelegate createDelegate, CultureObject culture, LocationCharacter.CharacterRelations relation)`

**用途 / Purpose:** 将 location character 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Location 实例
Location location = ...;
var result = location.AddLocationCharacter(createDelegate, culture, relation);
```

### AddSpecialItem
`public void AddSpecialItem(ItemObject itemObject)`

**用途 / Purpose:** 将 special item 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Location 实例
Location location = ...;
location.AddSpecialItem(itemObject);
```

### GetSceneName
`public string GetSceneName(int upgradeLevel)`

**用途 / Purpose:** 读取并返回当前对象中 scene name 的结果。

```csharp
// 先通过子系统 API 拿到 Location 实例
Location location = ...;
var result = location.GetSceneName(0);
```

### SetSceneName
`public void SetSceneName(int upgradeLevel, string sceneName)`

**用途 / Purpose:** 为 scene name 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Location 实例
Location location = ...;
location.SetSceneName(0, "example");
```

### GetSceneCount
`public int GetSceneCount()`

**用途 / Purpose:** 读取并返回当前对象中 scene count 的结果。

```csharp
// 先通过子系统 API 拿到 Location 实例
Location location = ...;
var result = location.GetSceneCount();
```

### RemoveAllHeroCharactersFromPrison
`public void RemoveAllHeroCharactersFromPrison()`

**用途 / Purpose:** 从当前容器或状态中移除 all hero characters from prison。

```csharp
// 先通过子系统 API 拿到 Location 实例
Location location = ...;
location.RemoveAllHeroCharactersFromPrison();
```

### RemoveAllCharacters
`public void RemoveAllCharacters()`

**用途 / Purpose:** 从当前容器或状态中移除 all characters。

```csharp
// 先通过子系统 API 拿到 Location 实例
Location location = ...;
location.RemoveAllCharacters();
```

### RemoveAllCharacters
`public void RemoveAllCharacters(Predicate<LocationCharacter> predicate)`

**用途 / Purpose:** 从当前容器或状态中移除 all characters。

```csharp
// 先通过子系统 API 拿到 Location 实例
Location location = ...;
location.RemoveAllCharacters(predicate);
```

### RemoveLocationCharacter
`public void RemoveLocationCharacter(LocationCharacter locationCharacter)`

**用途 / Purpose:** 从当前容器或状态中移除 location character。

```csharp
// 先通过子系统 API 拿到 Location 实例
Location location = ...;
location.RemoveLocationCharacter(locationCharacter);
```

### RemoveCharacter
`public void RemoveCharacter(Hero hero)`

**用途 / Purpose:** 从当前容器或状态中移除 character。

```csharp
// 先通过子系统 API 拿到 Location 实例
Location location = ...;
location.RemoveCharacter(hero);
```

### ContainsCharacter
`public bool ContainsCharacter(LocationCharacter locationCharacter)`

**用途 / Purpose:** 检查当前对象是否含有character。

```csharp
// 先通过子系统 API 拿到 Location 实例
Location location = ...;
var result = location.ContainsCharacter(locationCharacter);
```

### ContainsCharacter
`public bool ContainsCharacter(Hero hero)`

**用途 / Purpose:** 检查当前对象是否含有character。

```csharp
// 先通过子系统 API 拿到 Location 实例
Location location = ...;
var result = location.ContainsCharacter(hero);
```

### AddPassageToLocation
`public void AddPassageToLocation(Location passageToLocation)`

**用途 / Purpose:** 将 passage to location 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Location 实例
Location location = ...;
location.AddPassageToLocation(passageToLocation);
```

### GetCharacterList
`public IEnumerable<LocationCharacter> GetCharacterList()`

**用途 / Purpose:** 读取并返回当前对象中 character list 的结果。

```csharp
// 先通过子系统 API 拿到 Location 实例
Location location = ...;
var result = location.GetCharacterList();
```

### GetPassageToLocation
`public Location GetPassageToLocation(string locationId)`

**用途 / Purpose:** 读取并返回当前对象中 passage to location 的结果。

```csharp
// 先通过子系统 API 拿到 Location 实例
Location location = ...;
var result = location.GetPassageToLocation("example");
```

### OnAIChangeLocation
`public void OnAIChangeLocation(Location previousLocation)`

**用途 / Purpose:** 在 a i change location 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Location 实例
Location location = ...;
location.OnAIChangeLocation(previousLocation);
```

### GetLocationCharacter
`public LocationCharacter GetLocationCharacter(Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 location character 的结果。

```csharp
// 先通过子系统 API 拿到 Location 实例
Location location = ...;
var result = location.GetLocationCharacter(hero);
```

### GetLocationCharacter
`public LocationCharacter GetLocationCharacter(IAgentOriginBase agentOrigin)`

**用途 / Purpose:** 读取并返回当前对象中 location character 的结果。

```csharp
// 先通过子系统 API 拿到 Location 实例
Location location = ...;
var result = location.GetLocationCharacter(agentOrigin);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
Location location = ...;
location.Initialize(locationTemplate, ownerComplex);
```

## 参见

- [本区域目录](../)