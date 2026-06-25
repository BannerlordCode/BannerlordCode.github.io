---
title: "LocationEncounter"
description: "LocationEncounter 的自动生成类参考。"
---
# LocationEncounter

**Namespace:** TaleWorlds.CampaignSystem.Encounters
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class LocationEncounter`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Encounters/LocationEncounter.cs`

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

**用途 / Purpose:** **用途 / Purpose:** 将 accompanying character 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 LocationEncounter 实例
LocationEncounter locationEncounter = ...;
locationEncounter.AddAccompanyingCharacter(locationCharacter, false);
```

### GetAccompanyingCharacter
`public AccompanyingCharacter GetAccompanyingCharacter(LocationCharacter locationCharacter)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 accompanying character 的结果。

```csharp
// 先通过子系统 API 拿到 LocationEncounter 实例
LocationEncounter locationEncounter = ...;
var result = locationEncounter.GetAccompanyingCharacter(locationCharacter);
```

### GetAccompanyingCharacter
`public AccompanyingCharacter GetAccompanyingCharacter(CharacterObject character)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 accompanying character 的结果。

```csharp
// 先通过子系统 API 拿到 LocationEncounter 实例
LocationEncounter locationEncounter = ...;
var result = locationEncounter.GetAccompanyingCharacter(character);
```

### RemoveAccompanyingCharacter
`public void RemoveAccompanyingCharacter(LocationCharacter locationCharacter)`

**用途 / Purpose:** **用途 / Purpose:** 从当前容器或状态中移除 accompanying character。

```csharp
// 先通过子系统 API 拿到 LocationEncounter 实例
LocationEncounter locationEncounter = ...;
locationEncounter.RemoveAccompanyingCharacter(locationCharacter);
```

### RemoveAccompanyingCharacter
`public void RemoveAccompanyingCharacter(Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 从当前容器或状态中移除 accompanying character。

```csharp
// 先通过子系统 API 拿到 LocationEncounter 实例
LocationEncounter locationEncounter = ...;
locationEncounter.RemoveAccompanyingCharacter(hero);
```

### RemoveAllAccompanyingCharacters
`public void RemoveAllAccompanyingCharacters()`

**用途 / Purpose:** **用途 / Purpose:** 从当前容器或状态中移除 all accompanying characters。

```csharp
// 先通过子系统 API 拿到 LocationEncounter 实例
LocationEncounter locationEncounter = ...;
locationEncounter.RemoveAllAccompanyingCharacters();
```

### OnCharacterLocationChanged
`public void OnCharacterLocationChanged(LocationCharacter locationCharacter, Location fromLocation, Location toLocation)`

**用途 / Purpose:** **用途 / Purpose:** 在 character location changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LocationEncounter 实例
LocationEncounter locationEncounter = ...;
locationEncounter.OnCharacterLocationChanged(locationCharacter, fromLocation, toLocation);
```

### IsWorkshopLocation
`public virtual bool IsWorkshopLocation(Location location)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 workshop location 状态或条件。

```csharp
// 先通过子系统 API 拿到 LocationEncounter 实例
LocationEncounter locationEncounter = ...;
var result = locationEncounter.IsWorkshopLocation(location);
```

### IsTavern
`public virtual bool IsTavern(Location location)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 tavern 状态或条件。

```csharp
// 先通过子系统 API 拿到 LocationEncounter 实例
LocationEncounter locationEncounter = ...;
var result = locationEncounter.IsTavern(location);
```

### CreateAndOpenMissionController
`public virtual IMission CreateAndOpenMissionController(Location nextLocation, Location previousLocation = null, CharacterObject talkToChar = null, string playerSpecialSpawnTag = null)`

**用途 / Purpose:** **用途 / Purpose:** 构建一个新的 and open mission controller 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 LocationEncounter 实例
LocationEncounter locationEncounter = ...;
var result = locationEncounter.CreateAndOpenMissionController(nextLocation, null, null, "example");
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
LocationEncounter locationEncounter = ...;
locationEncounter.AddAccompanyingCharacter(locationCharacter, false);
```

## 参见

- [本区域目录](../)