<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `FlattenedTroopRoster`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FlattenedTroopRoster

**命名空间:** TaleWorlds.CampaignSystem.Roster
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`FlattenedTroopRoster` 是 `TaleWorlds.CampaignSystem.Roster` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `this` | `public FlattenedTroopRosterElement this { get; set; }` |
| `Troops` | `public IEnumerable<CharacterObject> Troops { get; }` |


## 主要方法

### Add

```csharp
public void Add(MBList<TroopRosterElement> roster)
```

### Add

```csharp
public void Add(TroopRosterElement troop)
```

### Add

```csharp
public void Add(CharacterObject troop, int number, int woundedNumber = 0)
```

### Add

```csharp
public UniqueTroopDescriptor Add(CharacterObject troop, bool isWounded = false, int xp = 0)
```

### GenerateUniqueNoFromParty

```csharp
public static int GenerateUniqueNoFromParty(MobileParty party, int troopIndex)
```

### Remove

```csharp
public void Remove(UniqueTroopDescriptor descriptor)
```

### Clear

```csharp
public void Clear()
```

### RemoveIf

```csharp
public ICollection<FlattenedTroopRosterElement> RemoveIf(Predicate<FlattenedTroopRosterElement> match)
```

### FindIndexOfCharacter

```csharp
public UniqueTroopDescriptor FindIndexOfCharacter(CharacterObject character)
```

### GetEnumerator

```csharp
public IEnumerator<FlattenedTroopRosterElement> GetEnumerator()
```

### OnTroopKilled

```csharp
public void OnTroopKilled(UniqueTroopDescriptor troopSeed)
```

### OnTroopWounded

```csharp
public void OnTroopWounded(UniqueTroopDescriptor troopSeed)
```

### OnTroopRouted

```csharp
public void OnTroopRouted(UniqueTroopDescriptor troopSeed)
```

### OnTroopGainXp

```csharp
public void OnTroopGainXp(UniqueTroopDescriptor troopSeed, int xpGained)
```

### ResetTroopXP

```csharp
public void ResetTroopXP()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)