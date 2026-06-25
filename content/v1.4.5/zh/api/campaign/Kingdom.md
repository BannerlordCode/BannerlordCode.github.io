---
title: "Kingdom"
description: "Kingdom 的自动生成类参考。"
---
# Kingdom

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class Kingdom : MBObjectBase, IFaction`
**Base:** `MBObjectBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/Kingdom.cs`

## 概述

`Kingdom` 位于 `TaleWorlds.CampaignSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Name` | `public TextObject Name { get; }` |
| `InformalName` | `public TextObject InformalName { get; }` |
| `EncyclopediaText` | `public TextObject EncyclopediaText { get; }` |
| `EncyclopediaTitle` | `public TextObject EncyclopediaTitle { get; }` |
| `EncyclopediaRulerTitle` | `public TextObject EncyclopediaRulerTitle { get; }` |
| `Culture` | `public CultureObject Culture { get; }` |
| `InitialHomeSettlement` | `public Settlement InitialHomeSettlement { get; }` |
| `Color` | `public uint Color { get; }` |
| `Color2` | `public uint Color2 { get; }` |
| `PrimaryBannerColor` | `public uint PrimaryBannerColor { get; }` |
| `SecondaryBannerColor` | `public uint SecondaryBannerColor { get; }` |
| `MainHeroCrimeRating` | `public float MainHeroCrimeRating { get; set; }` |
| `Banner` | `public Banner Banner { get; set; }` |
| `IsBanditFaction` | `public bool IsBanditFaction { get; }` |
| `IsOutlaw` | `public bool IsOutlaw { get; }` |
| `RulingClan` | `public Clan RulingClan { get; set; }` |
| `CurrentTotalStrength` | `public float CurrentTotalStrength { get; }` |
| `DistanceToClosestNonAllyFortification` | `public float DistanceToClosestNonAllyFortification { get; }` |
| `LastKingdomDecisionConclusionDate` | `public CampaignTime LastKingdomDecisionConclusionDate { get; }` |
| `LastMercenaryOfferTime` | `public CampaignTime LastMercenaryOfferTime { get; set; }` |
| `NotAttackableByPlayerUntilTime` | `public CampaignTime NotAttackableByPlayerUntilTime { get; set; }` |
| `Aggressiveness` | `public float Aggressiveness { get; set; }` |
| `AllParties` | `public IEnumerable<MobileParty> AllParties { get; }` |
| `MercenaryWallet` | `public int MercenaryWallet { get; set; }` |
| `TributeWallet` | `public int TributeWallet { get; set; }` |
| `KingdomBudgetWallet` | `public int KingdomBudgetWallet { get; set; }` |
| `CallToWarWallet` | `public int CallToWarWallet { get; set; }` |

## 主要方法

### GetName
`public override TextObject GetName()`

**用途 / Purpose:** 读取并返回当前对象中 「name」 的结果。

```csharp
// 先通过子系统 API 拿到 Kingdom 实例
Kingdom kingdom = ...;
var result = kingdom.GetName();
```

### ToString
`public override string ToString()`

**用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 Kingdom 实例
Kingdom kingdom = ...;
var result = kingdom.ToString();
```

### UpdateFactionsAtWarWith
`public void UpdateFactionsAtWarWith()`

**用途 / Purpose:** 重新计算并更新 「factions at war with」 的最新表示。

```csharp
// 先通过子系统 API 拿到 Kingdom 实例
Kingdom kingdom = ...;
kingdom.UpdateFactionsAtWarWith();
```

### UpdateAlliedKingdoms
`public void UpdateAlliedKingdoms()`

**用途 / Purpose:** 重新计算并更新 「allied kingdoms」 的最新表示。

```csharp
// 先通过子系统 API 拿到 Kingdom 实例
Kingdom kingdom = ...;
kingdom.UpdateAlliedKingdoms();
```

### CreateKingdom
`public static Kingdom CreateKingdom(string stringID)`

**用途 / Purpose:** 构建一个新的 「kingdom」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
Kingdom.CreateKingdom("example");
```

### InitializeKingdom
`public void InitializeKingdom(TextObject name, TextObject informalName, CultureObject culture, Banner banner, uint kingdomColor1, uint kingdomColor2, Settlement initialHomeSettlement, TextObject encyclopediaText, TextObject encyclopediaTitle, TextObject encyclopediaRulerTitle)`

**用途 / Purpose:** 为 「kingdom」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 Kingdom 实例
Kingdom kingdom = ...;
kingdom.InitializeKingdom(name, informalName, culture, banner, 0, 0, initialHomeSettlement, encyclopediaText, encyclopediaTitle, encyclopediaRulerTitle);
```

### ChangeKingdomName
`public void ChangeKingdomName(TextObject name, TextObject informalName)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Kingdom 实例
Kingdom kingdom = ...;
kingdom.ChangeKingdomName(name, informalName);
```

### OnHeroChangedState
`public void OnHeroChangedState(Hero hero, Hero.CharacterStates oldState)`

**用途 / Purpose:** 在 「hero changed state」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Kingdom 实例
Kingdom kingdom = ...;
kingdom.OnHeroChangedState(hero, oldState);
```

### IsAllyWith
`public bool IsAllyWith(Kingdom other)`

**用途 / Purpose:** 判断当前对象是否处于 「ally with」 状态或条件。

```csharp
// 先通过子系统 API 拿到 Kingdom 实例
Kingdom kingdom = ...;
var result = kingdom.IsAllyWith(other);
```

### IsAtWarWith
`public bool IsAtWarWith(IFaction other)`

**用途 / Purpose:** 判断当前对象是否处于 「at war with」 状态或条件。

```csharp
// 先通过子系统 API 拿到 Kingdom 实例
Kingdom kingdom = ...;
var result = kingdom.IsAtWarWith(other);
```

### IsAtConstantWarWith
`public bool IsAtConstantWarWith(IFaction other)`

**用途 / Purpose:** 判断当前对象是否处于 「at constant war with」 状态或条件。

```csharp
// 先通过子系统 API 拿到 Kingdom 实例
Kingdom kingdom = ...;
var result = kingdom.IsAtConstantWarWith(other);
```

### GetStanceWith
`public StanceLink GetStanceWith(IFaction other)`

**用途 / Purpose:** 读取并返回当前对象中 「stance with」 的结果。

```csharp
// 先通过子系统 API 拿到 Kingdom 实例
Kingdom kingdom = ...;
var result = kingdom.GetStanceWith(other);
```

### CreateArmy
`public void CreateArmy(Hero armyLeader, Settlement targetSettlement, Army.ArmyTypes selectedArmyType, MBReadOnlyList<MobileParty> partiesToCallToArmy = null)`

**用途 / Purpose:** 构建一个新的 「army」 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 Kingdom 实例
Kingdom kingdom = ...;
kingdom.CreateArmy(armyLeader, targetSettlement, selectedArmyType, null);
```

### AddDecision
`public void AddDecision(KingdomDecision kingdomDecision, bool ignoreInfluenceCost = false)`

**用途 / Purpose:** 将 「decision」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Kingdom 实例
Kingdom kingdom = ...;
kingdom.AddDecision(kingdomDecision, false);
```

### RemoveDecision
`public void RemoveDecision(KingdomDecision kingdomDecision)`

**用途 / Purpose:** 从当前容器或状态中移除 「decision」。

```csharp
// 先通过子系统 API 拿到 Kingdom 实例
Kingdom kingdom = ...;
kingdom.RemoveDecision(kingdomDecision);
```

### OnKingdomDecisionConcluded
`public void OnKingdomDecisionConcluded()`

**用途 / Purpose:** 在 「kingdom decision concluded」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Kingdom 实例
Kingdom kingdom = ...;
kingdom.OnKingdomDecisionConcluded();
```

### AddPolicy
`public void AddPolicy(PolicyObject policy)`

**用途 / Purpose:** 将 「policy」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Kingdom 实例
Kingdom kingdom = ...;
kingdom.AddPolicy(policy);
```

### RemovePolicy
`public void RemovePolicy(PolicyObject policy)`

**用途 / Purpose:** 从当前容器或状态中移除 「policy」。

```csharp
// 先通过子系统 API 拿到 Kingdom 实例
Kingdom kingdom = ...;
kingdom.RemovePolicy(policy);
```

### HasPolicy
`public bool HasPolicy(PolicyObject policy)`

**用途 / Purpose:** 判断当前对象是否已经持有 「policy」。

```csharp
// 先通过子系统 API 拿到 Kingdom 实例
Kingdom kingdom = ...;
var result = kingdom.HasPolicy(policy);
```

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**用途 / Purpose:** 从序列化数据还原当前对象。

```csharp
// 先通过子系统 API 拿到 Kingdom 实例
Kingdom kingdom = ...;
kingdom.Deserialize(objectManager, node);
```

### OnFortificationAdded
`public void OnFortificationAdded(Town fortification)`

**用途 / Purpose:** 在 「fortification added」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Kingdom 实例
Kingdom kingdom = ...;
kingdom.OnFortificationAdded(fortification);
```

### OnFortificationRemoved
`public void OnFortificationRemoved(Town fortification)`

**用途 / Purpose:** 在 「fortification removed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Kingdom 实例
Kingdom kingdom = ...;
kingdom.OnFortificationRemoved(fortification);
```

### OnHeroAdded
`public void OnHeroAdded(Hero hero)`

**用途 / Purpose:** 在 「hero added」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Kingdom 实例
Kingdom kingdom = ...;
kingdom.OnHeroAdded(hero);
```

### OnHeroRemoved
`public void OnHeroRemoved(Hero hero)`

**用途 / Purpose:** 在 「hero removed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Kingdom 实例
Kingdom kingdom = ...;
kingdom.OnHeroRemoved(hero);
```

### OnWarPartyAdded
`public void OnWarPartyAdded(WarPartyComponent warPartyComponent)`

**用途 / Purpose:** 在 「war party added」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Kingdom 实例
Kingdom kingdom = ...;
kingdom.OnWarPartyAdded(warPartyComponent);
```

### OnWarPartyRemoved
`public void OnWarPartyRemoved(WarPartyComponent warPartyComponent)`

**用途 / Purpose:** 在 「war party removed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Kingdom 实例
Kingdom kingdom = ...;
kingdom.OnWarPartyRemoved(warPartyComponent);
```

### CalculateMidSettlement
`public void CalculateMidSettlement()`

**用途 / Purpose:** 计算「mid settlement」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 Kingdom 实例
Kingdom kingdom = ...;
kingdom.CalculateMidSettlement();
```

### ReactivateKingdom
`public void ReactivateKingdom()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Kingdom 实例
Kingdom kingdom = ...;
kingdom.ReactivateKingdom();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
Kingdom kingdom = ...;
kingdom.GetName();
```

## 参见

- [本区域目录](../)