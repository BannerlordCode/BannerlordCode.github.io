<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `HeroCreator`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# HeroCreator

**命名空间:** TaleWorlds.CampaignSystem
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`HeroCreator` 是 `TaleWorlds.CampaignSystem` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Hero` | `public Hero Hero { get; }` |
| `Name` | `public TextObject Name { get; }` |
| `FirstName` | `public TextObject FirstName { get; }` |
| `Mother` | `public Hero Mother { get; }` |
| `Father` | `public Hero Father { get; }` |
| `IsFemale` | `public bool IsFemale { get; }` |
| `BornSettlement` | `public Settlement BornSettlement { get; }` |
| `Level` | `public int Level { get; }` |
| `Weight` | `public float Weight { get; }` |
| `Build` | `public float Build { get; }` |
| `StaticBodyProperties` | `public StaticBodyProperties? StaticBodyProperties { get; }` |
| `PreferredUpgradeFormation` | `public FormationClass? PreferredUpgradeFormation { get; }` |
| `Clan` | `public Clan Clan { get; }` |
| `Culture` | `public CultureObject Culture { get; }` |
| `SupporterOf` | `public Clan SupporterOf { get; }` |
| `Occupation` | `public Occupation Occupation { get; }` |
| `IsOffspring` | `public bool IsOffspring { get; }` |
| `GenerateFirstAndFullName` | `public bool GenerateFirstAndFullName { get; }` |
| `HasBornSettlementBeenSet` | `public bool HasBornSettlementBeenSet { get; }` |
| `HasClanBeenSet` | `public bool HasClanBeenSet { get; }` |


## 主要方法

### CreateNotable

```csharp
public static Hero CreateNotable(Occupation occupation, Settlement settlement = null)
```

### CreateSpecialHero

```csharp
public static Hero CreateSpecialHero(CharacterObject template, Settlement bornSettlement = null, Clan faction = null, Clan supporterOfClan = null, int age = -1)
```

### CreateChild

```csharp
public static Hero CreateChild(CharacterObject template, Settlement bornSettlement, Clan clan, int age)
```

### CreateRelativeNotableHero

```csharp
public static Hero CreateRelativeNotableHero(Hero relative)
```

### CreateBasicHero

```csharp
public static bool CreateBasicHero(string stringId, CharacterObject character, out Hero hero, bool isAlive = true)
```

### DeliverOffSpring

```csharp
public static Hero DeliverOffSpring(Hero mother, Hero father, bool isOffspringFemale)
```

### SetGenerateFirstAndFullName

```csharp
public HeroCreator.HeroInitializationArgs SetGenerateFirstAndFullName(bool value)
```

### SetName

```csharp
public HeroCreator.HeroInitializationArgs SetName(TextObject name)
```

### SetFirstName

```csharp
public HeroCreator.HeroInitializationArgs SetFirstName(TextObject firstName)
```

### SetMother

```csharp
public HeroCreator.HeroInitializationArgs SetMother(Hero mother)
```

### SetFather

```csharp
public HeroCreator.HeroInitializationArgs SetFather(Hero father)
```

### SetIsFemale

```csharp
public HeroCreator.HeroInitializationArgs SetIsFemale(bool isFemale)
```

### SetBornSettlement

```csharp
public HeroCreator.HeroInitializationArgs SetBornSettlement(Settlement bornSettlement)
```

### SetLevel

```csharp
public HeroCreator.HeroInitializationArgs SetLevel(int level)
```

### SetAppearance

```csharp
public HeroCreator.HeroInitializationArgs SetAppearance(StaticBodyProperties? staticBodyProperties, float weight = -1f, float build = -1f, int hair = -1, int beard = -1, int tattoo = -1)
```

### SetPreferredUpgradeFormation

```csharp
public HeroCreator.HeroInitializationArgs SetPreferredUpgradeFormation(FormationClass preferredUpgradeFormation)
```

### SetClan

```csharp
public HeroCreator.HeroInitializationArgs SetClan(Clan clan)
```

### SetCulture

```csharp
public HeroCreator.HeroInitializationArgs SetCulture(CultureObject culture)
```

### SetSupporterOf

```csharp
public HeroCreator.HeroInitializationArgs SetSupporterOf(Clan supporterOf)
```

### SetOccupation

```csharp
public HeroCreator.HeroInitializationArgs SetOccupation(Occupation occupation)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)