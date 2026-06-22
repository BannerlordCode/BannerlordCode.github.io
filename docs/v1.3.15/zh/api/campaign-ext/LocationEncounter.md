<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `LocationEncounter`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LocationEncounter

**命名空间:** TaleWorlds.CampaignSystem.Encounters
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`LocationEncounter` 是 `TaleWorlds.CampaignSystem.Encounters` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Settlement` | `public Settlement Settlement { get; }` |
| `CharactersAccompanyingPlayer` | `public List<AccompanyingCharacter> CharactersAccompanyingPlayer { get; }` |


## 主要方法

### AddAccompanyingCharacter

```csharp
public void AddAccompanyingCharacter(LocationCharacter locationCharacter, bool isFollowing = false)
```

### GetAccompanyingCharacter

```csharp
public AccompanyingCharacter GetAccompanyingCharacter(LocationCharacter locationCharacter)
```

### GetAccompanyingCharacter

```csharp
public AccompanyingCharacter GetAccompanyingCharacter(CharacterObject character)
```

### RemoveAccompanyingCharacter

```csharp
public void RemoveAccompanyingCharacter(LocationCharacter locationCharacter)
```

### RemoveAccompanyingCharacter

```csharp
public void RemoveAccompanyingCharacter(Hero hero)
```

### RemoveAllAccompanyingCharacters

```csharp
public void RemoveAllAccompanyingCharacters()
```

### OnCharacterLocationChanged

```csharp
public void OnCharacterLocationChanged(LocationCharacter locationCharacter, Location fromLocation, Location toLocation)
```

### IsWorkshopLocation

```csharp
public virtual bool IsWorkshopLocation(Location location)
```

### IsTavern

```csharp
public virtual bool IsTavern(Location location)
```

### CreateAndOpenMissionController

```csharp
public virtual IMission CreateAndOpenMissionController(Location nextLocation, Location previousLocation = null, CharacterObject talkToChar = null, string playerSpecialSpawnTag = null)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)