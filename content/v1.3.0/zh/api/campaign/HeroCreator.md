---
title: "HeroCreator"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `HeroCreator`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# HeroCreator

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class HeroCreator`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/HeroCreator.cs`

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

### CreateNotable
`public static Hero CreateNotable(Occupation occupation, Settlement settlement = null)`

**用途 / Purpose:** 创建一个 `notable` 实例或对象。

### CreateSpecialHero
`public static Hero CreateSpecialHero(CharacterObject template, Settlement bornSettlement = null, Clan faction = null, Clan supporterOfClan = null, int age = -1)`

**用途 / Purpose:** 创建一个 `special hero` 实例或对象。

### CreateChild
`public static Hero CreateChild(CharacterObject template, Settlement bornSettlement, Clan clan, int age)`

**用途 / Purpose:** 创建一个 `child` 实例或对象。

### CreateRelativeNotableHero
`public static Hero CreateRelativeNotableHero(Hero relative)`

**用途 / Purpose:** 创建一个 `relative notable hero` 实例或对象。

### CreateBasicHero
`public static bool CreateBasicHero(string stringId, CharacterObject character, out Hero hero, bool isAlive = true)`

**用途 / Purpose:** 创建一个 `basic hero` 实例或对象。

### DeliverOffSpring
`public static Hero DeliverOffSpring(Hero mother, Hero father, bool isOffspringFemale)`

**用途 / Purpose:** 处理 `deliver off spring` 相关逻辑。

### SetGenerateFirstAndFullName
`public HeroCreator.HeroInitializationArgs SetGenerateFirstAndFullName(bool value)`

**用途 / Purpose:** 设置 `generate first and full name` 的值或状态。

### SetName
`public HeroCreator.HeroInitializationArgs SetName(TextObject name)`

**用途 / Purpose:** 设置 `name` 的值或状态。

### SetFirstName
`public HeroCreator.HeroInitializationArgs SetFirstName(TextObject firstName)`

**用途 / Purpose:** 设置 `first name` 的值或状态。

### SetMother
`public HeroCreator.HeroInitializationArgs SetMother(Hero mother)`

**用途 / Purpose:** 设置 `mother` 的值或状态。

### SetFather
`public HeroCreator.HeroInitializationArgs SetFather(Hero father)`

**用途 / Purpose:** 设置 `father` 的值或状态。

### SetIsFemale
`public HeroCreator.HeroInitializationArgs SetIsFemale(bool isFemale)`

**用途 / Purpose:** 设置 `is female` 的值或状态。

### SetBornSettlement
`public HeroCreator.HeroInitializationArgs SetBornSettlement(Settlement bornSettlement)`

**用途 / Purpose:** 设置 `born settlement` 的值或状态。

### SetLevel
`public HeroCreator.HeroInitializationArgs SetLevel(int level)`

**用途 / Purpose:** 设置 `level` 的值或状态。

### SetAppearance
`public HeroCreator.HeroInitializationArgs SetAppearance(StaticBodyProperties? staticBodyProperties, float weight = -1f, float build = -1f, int hair = -1, int beard = -1, int tattoo = -1)`

**用途 / Purpose:** 设置 `appearance` 的值或状态。

### SetPreferredUpgradeFormation
`public HeroCreator.HeroInitializationArgs SetPreferredUpgradeFormation(FormationClass preferredUpgradeFormation)`

**用途 / Purpose:** 设置 `preferred upgrade formation` 的值或状态。

### SetClan
`public HeroCreator.HeroInitializationArgs SetClan(Clan clan)`

**用途 / Purpose:** 设置 `clan` 的值或状态。

### SetCulture
`public HeroCreator.HeroInitializationArgs SetCulture(CultureObject culture)`

**用途 / Purpose:** 设置 `culture` 的值或状态。

### SetSupporterOf
`public HeroCreator.HeroInitializationArgs SetSupporterOf(Clan supporterOf)`

**用途 / Purpose:** 设置 `supporter of` 的值或状态。

### SetOccupation
`public HeroCreator.HeroInitializationArgs SetOccupation(Occupation occupation)`

**用途 / Purpose:** 设置 `occupation` 的值或状态。

## 使用示例

```csharp
HeroCreator.CreateNotable(occupation, null);
```

## 参见

- [完整类目录](../catalog)