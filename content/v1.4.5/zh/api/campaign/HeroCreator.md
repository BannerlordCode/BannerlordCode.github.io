---
title: "HeroCreator"
description: "HeroCreator 的自动生成类参考。"
---
# HeroCreator

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class HeroCreator`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/HeroCreator.cs`

## 概述

`HeroCreator` 位于 `TaleWorlds.CampaignSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

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

### SetGenerateFirstAndFullName
`public HeroInitializationArgs SetGenerateFirstAndFullName(bool value)`

**用途 / Purpose:** 为 「generate first and full name」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 HeroCreator 实例
HeroCreator heroCreator = ...;
var result = heroCreator.SetGenerateFirstAndFullName(false);
```

### SetName
`public HeroInitializationArgs SetName(TextObject name)`

**用途 / Purpose:** 为 「name」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 HeroCreator 实例
HeroCreator heroCreator = ...;
var result = heroCreator.SetName(name);
```

### SetFirstName
`public HeroInitializationArgs SetFirstName(TextObject firstName)`

**用途 / Purpose:** 为 「first name」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 HeroCreator 实例
HeroCreator heroCreator = ...;
var result = heroCreator.SetFirstName(firstName);
```

### SetMother
`public HeroInitializationArgs SetMother(Hero mother)`

**用途 / Purpose:** 为 「mother」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 HeroCreator 实例
HeroCreator heroCreator = ...;
var result = heroCreator.SetMother(mother);
```

### SetFather
`public HeroInitializationArgs SetFather(Hero father)`

**用途 / Purpose:** 为 「father」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 HeroCreator 实例
HeroCreator heroCreator = ...;
var result = heroCreator.SetFather(father);
```

### SetIsFemale
`public HeroInitializationArgs SetIsFemale(bool isFemale)`

**用途 / Purpose:** 为 「is female」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 HeroCreator 实例
HeroCreator heroCreator = ...;
var result = heroCreator.SetIsFemale(false);
```

### SetBornSettlement
`public HeroInitializationArgs SetBornSettlement(Settlement bornSettlement)`

**用途 / Purpose:** 为 「born settlement」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 HeroCreator 实例
HeroCreator heroCreator = ...;
var result = heroCreator.SetBornSettlement(bornSettlement);
```

### SetLevel
`public HeroInitializationArgs SetLevel(int level)`

**用途 / Purpose:** 为 「level」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 HeroCreator 实例
HeroCreator heroCreator = ...;
var result = heroCreator.SetLevel(0);
```

### SetAppearance
`public HeroInitializationArgs SetAppearance(StaticBodyProperties? staticBodyProperties, float weight = -1f, float build = -1f, int hair = -1, int beard = -1, int tattoo = -1)`

**用途 / Purpose:** 为 「appearance」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 HeroCreator 实例
HeroCreator heroCreator = ...;
var result = heroCreator.SetAppearance(staticBodyProperties, 0, 0, 0, 0, 0);
```

### SetPreferredUpgradeFormation
`public HeroInitializationArgs SetPreferredUpgradeFormation(FormationClass preferredUpgradeFormation)`

**用途 / Purpose:** 为 「preferred upgrade formation」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 HeroCreator 实例
HeroCreator heroCreator = ...;
var result = heroCreator.SetPreferredUpgradeFormation(preferredUpgradeFormation);
```

### SetClan
`public HeroInitializationArgs SetClan(Clan clan)`

**用途 / Purpose:** 为 「clan」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 HeroCreator 实例
HeroCreator heroCreator = ...;
var result = heroCreator.SetClan(clan);
```

### SetCulture
`public HeroInitializationArgs SetCulture(CultureObject culture)`

**用途 / Purpose:** 为 「culture」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 HeroCreator 实例
HeroCreator heroCreator = ...;
var result = heroCreator.SetCulture(culture);
```

### SetSupporterOf
`public HeroInitializationArgs SetSupporterOf(Clan supporterOf)`

**用途 / Purpose:** 为 「supporter of」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 HeroCreator 实例
HeroCreator heroCreator = ...;
var result = heroCreator.SetSupporterOf(supporterOf);
```

### SetOccupation
`public HeroInitializationArgs SetOccupation(Occupation occupation)`

**用途 / Purpose:** 为 「occupation」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 HeroCreator 实例
HeroCreator heroCreator = ...;
var result = heroCreator.SetOccupation(occupation);
```

### CreateNotable
`public static Hero CreateNotable(Occupation occupation, Settlement settlement = null)`

**用途 / Purpose:** 构建一个新的 「notable」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
HeroCreator.CreateNotable(occupation, null);
```

### CreateSpecialHero
`public static Hero CreateSpecialHero(CharacterObject template, Settlement bornSettlement = null, Clan faction = null, Clan supporterOfClan = null, int age = -1)`

**用途 / Purpose:** 构建一个新的 「special hero」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
HeroCreator.CreateSpecialHero(template, null, null, null, 0);
```

### CreateChild
`public static Hero CreateChild(CharacterObject template, Settlement bornSettlement, Clan clan, int age)`

**用途 / Purpose:** 构建一个新的 「child」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
HeroCreator.CreateChild(template, bornSettlement, clan, 0);
```

### CreateRelativeNotableHero
`public static Hero CreateRelativeNotableHero(Hero relative)`

**用途 / Purpose:** 构建一个新的 「relative notable hero」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
HeroCreator.CreateRelativeNotableHero(relative);
```

### CreateBasicHero
`public static bool CreateBasicHero(string stringId, CharacterObject character, out Hero hero, bool isAlive = true)`

**用途 / Purpose:** 构建一个新的 「basic hero」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
HeroCreator.CreateBasicHero("example", character, hero, false);
```

### DeliverOffSpring
`public static Hero DeliverOffSpring(Hero mother, Hero father, bool isOffspringFemale)`

**用途 / Purpose:** 处理与 「deliver off spring」 相关的逻辑。

```csharp
// 静态调用，不需要实例
HeroCreator.DeliverOffSpring(mother, father, false);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
HeroCreator heroCreator = ...;
heroCreator.SetGenerateFirstAndFullName(false);
```

## 参见

- [本区域目录](../)