---
title: "Clan"
description: "Clan 的自动生成类参考。"
---
# Clan

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class Clan : MBObjectBase, IFaction`
**Base:** `MBObjectBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/Clan.cs`

## 概述

`Clan` 位于 `TaleWorlds.CampaignSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Name` | `public TextObject Name { get; }` |
| `InformalName` | `public TextObject InformalName { get; }` |
| `Culture` | `public CultureObject Culture { get; set; }` |
| `LastFactionChangeTime` | `public CampaignTime LastFactionChangeTime { get; set; }` |
| `DefaultPartyTemplate` | `public PartyTemplateObject DefaultPartyTemplate { get; }` |
| `AutoRecruitmentExpenses` | `public int AutoRecruitmentExpenses { get; }` |
| `EncyclopediaText` | `public TextObject EncyclopediaText { get; }` |
| `IsNoble` | `public bool IsNoble { get; set; }` |
| `Kingdom` | `public Kingdom Kingdom { get; set; }` |
| `DungeonPrisonersOfClan` | `public IEnumerable<CharacterObject> DungeonPrisonersOfClan { get; }` |
| `Influence` | `public float Influence { get; set; }` |
| `CurrentTotalStrength` | `public float CurrentTotalStrength { get; }` |
| `MercenaryAwardMultiplier` | `public int MercenaryAwardMultiplier { get; }` |
| `InitialHomeSettlement` | `public Settlement InitialHomeSettlement { get; }` |
| `IsRebelClan` | `public bool IsRebelClan { get; }` |
| `IsMinorFaction` | `public bool IsMinorFaction { get; }` |
| `IsOutlaw` | `public bool IsOutlaw { get; }` |
| `IsNomad` | `public bool IsNomad { get; }` |
| `IsMafia` | `public bool IsMafia { get; }` |
| `IsClanTypeMercenary` | `public bool IsClanTypeMercenary { get; }` |
| `IsSect` | `public bool IsSect { get; }` |
| `IsUnderMercenaryService` | `public bool IsUnderMercenaryService { get; }` |
| `ShouldStayInKingdomUntil` | `public CampaignTime ShouldStayInKingdomUntil { get; set; }` |
| `Color` | `public uint Color { get; set; }` |
| `Color2` | `public uint Color2 { get; set; }` |
| `BasicTroop` | `public CharacterObject BasicTroop { get; set; }` |
| `Banner` | `public Banner Banner { get; set; }` |
| `IsBanditFaction` | `public bool IsBanditFaction { get; }` |
| `Renown` | `public float Renown { get; set; }` |
| `MainHeroCrimeRating` | `public float MainHeroCrimeRating { get; set; }` |
| `Tier` | `public int Tier { get; }` |
| `MapFaction` | `public IFaction MapFaction { get; set; }` |
| `NotAttackableByPlayerUntilTime` | `public CampaignTime NotAttackableByPlayerUntilTime { get; set; }` |
| `Aggressiveness` | `public float Aggressiveness { get; set; }` |
| `TributeWallet` | `public int TributeWallet { get; }` |
| `HomeSettlement` | `public Settlement HomeSettlement { get; }` |
| `DebtToKingdom` | `public int DebtToKingdom { get; set; }` |
| `DistanceToClosestNonAllyFortification` | `public float DistanceToClosestNonAllyFortification { get; }` |
| `NonBanditFactions` | `public static IEnumerable<Clan> NonBanditFactions { get; }` |
| `BanditFactions` | `public static IEnumerable<Clan> BanditFactions { get; }` |

## 主要方法

### UpdateFactionsAtWarWith
`public void UpdateFactionsAtWarWith()`

**用途 / Purpose:** 重新计算并更新 「factions at war with」 的最新表示。

```csharp
// 先通过子系统 API 拿到 Clan 实例
Clan clan = ...;
clan.UpdateFactionsAtWarWith();
```

### UpdateCurrentStrength
`public void UpdateCurrentStrength()`

**用途 / Purpose:** 重新计算并更新 「current strength」 的最新表示。

```csharp
// 先通过子系统 API 拿到 Clan 实例
Clan clan = ...;
clan.UpdateCurrentStrength();
```

### IsAtWarWith
`public bool IsAtWarWith(IFaction other)`

**用途 / Purpose:** 判断当前对象是否处于 「at war with」 状态或条件。

```csharp
// 先通过子系统 API 拿到 Clan 实例
Clan clan = ...;
var result = clan.IsAtWarWith(other);
```

### CreateClan
`public static Clan CreateClan(string stringID)`

**用途 / Purpose:** 构建一个新的 「clan」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
Clan.CreateClan("example");
```

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**用途 / Purpose:** 从序列化数据还原当前对象。

```csharp
// 先通过子系统 API 拿到 Clan 实例
Clan clan = ...;
clan.Deserialize(objectManager, node);
```

### GetRelationWithClan
`public int GetRelationWithClan(Clan other)`

**用途 / Purpose:** 读取并返回当前对象中 「relation with clan」 的结果。

```csharp
// 先通过子系统 API 拿到 Clan 实例
Clan clan = ...;
var result = clan.GetRelationWithClan(other);
```

### SetLeader
`public void SetLeader(Hero leader)`

**用途 / Purpose:** 为 「leader」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Clan 实例
Clan clan = ...;
clan.SetLeader(leader);
```

### SetInitialHomeSettlement
`public void SetInitialHomeSettlement(Settlement initialHomeSettlement)`

**用途 / Purpose:** 为 「initial home settlement」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Clan 实例
Clan clan = ...;
clan.SetInitialHomeSettlement(initialHomeSettlement);
```

### ConsiderAndUpdateHomeSettlement
`public void ConsiderAndUpdateHomeSettlement()`

**用途 / Purpose:** 处理与 「consider and update home settlement」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Clan 实例
Clan clan = ...;
clan.ConsiderAndUpdateHomeSettlement();
```

### GetName
`public override TextObject GetName()`

**用途 / Purpose:** 读取并返回当前对象中 「name」 的结果。

```csharp
// 先通过子系统 API 拿到 Clan 实例
Clan clan = ...;
var result = clan.GetName();
```

### ChangeClanName
`public void ChangeClanName(TextObject name, TextObject informalName)`

**用途 / Purpose:** 处理与 「change clan name」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Clan 实例
Clan clan = ...;
clan.ChangeClanName(name, informalName);
```

### ToString
`public override string ToString()`

**用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 Clan 实例
Clan clan = ...;
var result = clan.ToString();
```

### GetStanceWith
`public StanceLink GetStanceWith(IFaction other)`

**用途 / Purpose:** 读取并返回当前对象中 「stance with」 的结果。

```csharp
// 先通过子系统 API 拿到 Clan 实例
Clan clan = ...;
var result = clan.GetStanceWith(other);
```

### ClanLeaveKingdom
`public void ClanLeaveKingdom(bool giveBackFiefs = false)`

**用途 / Purpose:** 处理与 「clan leave kingdom」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Clan 实例
Clan clan = ...;
clan.ClanLeaveKingdom(false);
```

### CalculateTotalSettlementBaseValue
`public float CalculateTotalSettlementBaseValue()`

**用途 / Purpose:** 计算「total settlement base value」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 Clan 实例
Clan clan = ...;
var result = clan.CalculateTotalSettlementBaseValue();
```

### StartMercenaryService
`public void StartMercenaryService()`

**用途 / Purpose:** 启动「mercenary service」流程或状态机。

```csharp
// 先通过子系统 API 拿到 Clan 实例
Clan clan = ...;
clan.StartMercenaryService();
```

### ResetPlayerHomeAndFactionMidSettlement
`public void ResetPlayerHomeAndFactionMidSettlement()`

**用途 / Purpose:** 将 「player home and faction mid settlement」 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 Clan 实例
Clan clan = ...;
clan.ResetPlayerHomeAndFactionMidSettlement();
```

### FindFirst
`public static Clan FindFirst(Predicate<Clan> predicate)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的「first」。

```csharp
// 静态调用，不需要实例
Clan.FindFirst(predicate);
```

### EndMercenaryService
`public void EndMercenaryService(bool isByLeavingKingdom)`

**用途 / Purpose:** 处理与 「end mercenary service」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Clan 实例
Clan clan = ...;
clan.EndMercenaryService(false);
```

### FindAll
`public static IEnumerable<Clan> FindAll(Predicate<Clan> predicate)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的「all」。

```csharp
// 静态调用，不需要实例
Clan.FindAll(predicate);
```

### CalculateTotalSettlementValueForFaction
`public float CalculateTotalSettlementValueForFaction(Kingdom kingdom)`

**用途 / Purpose:** 计算「total settlement value for faction」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 Clan 实例
Clan clan = ...;
var result = clan.CalculateTotalSettlementValueForFaction(kingdom);
```

### OnHeroChangedState
`public void OnHeroChangedState(Hero hero, Hero.CharacterStates oldState)`

**用途 / Purpose:** 在 「hero changed state」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Clan 实例
Clan clan = ...;
clan.OnHeroChangedState(hero, oldState);
```

### AddRenown
`public void AddRenown(float value, bool shouldNotify = true)`

**用途 / Purpose:** 将 「renown」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Clan 实例
Clan clan = ...;
clan.AddRenown(0, false);
```

### ResetClanRenown
`public void ResetClanRenown()`

**用途 / Purpose:** 将 「clan renown」 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 Clan 实例
Clan clan = ...;
clan.ResetClanRenown();
```

### OnSupportedByClan
`public void OnSupportedByClan(Clan supporterClan)`

**用途 / Purpose:** 在 「supported by clan」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Clan 实例
Clan clan = ...;
clan.OnSupportedByClan(supporterClan);
```

### CreateSettlementRebelClan
`public static Clan CreateSettlementRebelClan(Settlement settlement, Hero owner, int iconMeshId = -1)`

**用途 / Purpose:** 构建一个新的 「settlement rebel clan」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
Clan.CreateSettlementRebelClan(settlement, owner, 0);
```

### CalculateMidSettlement
`public void CalculateMidSettlement()`

**用途 / Purpose:** 计算「mid settlement」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 Clan 实例
Clan clan = ...;
clan.CalculateMidSettlement();
```

### CreateCompanionToLordClan
`public static Clan CreateCompanionToLordClan(Hero hero, Settlement settlement, TextObject clanName, int newClanIconId)`

**用途 / Purpose:** 构建一个新的 「companion to lord clan」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
Clan.CreateCompanionToLordClan(hero, settlement, clanName, 0);
```

### GetHeirApparents
`public Dictionary<Hero, int> GetHeirApparents()`

**用途 / Purpose:** 读取并返回当前对象中 「heir apparents」 的结果。

```csharp
// 先通过子系统 API 拿到 Clan 实例
Clan clan = ...;
var result = clan.GetHeirApparents();
```

### UpdateBannerColor
`public void UpdateBannerColor(uint backgroundColor, uint iconColor)`

**用途 / Purpose:** 重新计算并更新 「banner color」 的最新表示。

```csharp
// 先通过子系统 API 拿到 Clan 实例
Clan clan = ...;
clan.UpdateBannerColor(0, 0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
Clan clan = ...;
clan.UpdateFactionsAtWarWith();
```

## 参见

- [本区域目录](../)