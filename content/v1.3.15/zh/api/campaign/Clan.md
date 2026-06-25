---
title: "Clan"
description: "氏族/家族：一组英雄、部队和据点的拥有者，也是王国最基本的组成单位。"
---
# Clan

**Namespace:** TaleWorlds.CampaignSystem  
**Module:** TaleWorlds.CampaignSystem  
**Type:** `public class Clan : IFaction`  
**Base:** —  
**File:** `TaleWorlds.CampaignSystem/Clan.cs`

## 概述

`Clan` 是 Bannerlord 中**氏族/家族**的对象化表示。一个氏族拥有一组 `Hero`、若干 `MobileParty`、零个或多个 `Settlement`（城镇/城堡/村庄），并通常隶属于一个 `Kingdom`。它是游戏社会结构的中间层：个人（Hero）→ 氏族（Clan）→ 王国（Kingdom）。

主要作用：

- 管理氏族的声望、影响力、金币、文化与外交关系。
- 追踪氏族成员（`Heroes` / `Lords` / `Companions`）。
- 持有 `PlayerClan` 这个玩家氏族的全局入口。
- 判断氏族类型：贵族、强盗、佣兵、小派系、游牧、叛军等。

## 心智模型

把 `Clan` 看作**“拥有资产和人口的家族公司”**：

- 单个 `Hero` 可以属于一个 `Clan`，氏族首领就是公司的 CEO。
- 氏族拥有据点和军队，这些是它的资产。
- 在任务脚本中，最常见的判断就是 `someHero.Clan == Clan.PlayerClan` 或 `settlement.OwnerClan`。
- 创建新的氏族一般通过 `Clan.CreateClan(...)` 或克隆相关 API。

## 核心属性

| 属性 | 说明 |
|------|------|
| `PlayerClan` | 玩家所在氏族。 |
| `All` | 所有氏族。 |
| `NonBanditFactions` / `BanditFactions` | 非强盗 / 强盗群体。 |
| `Name` / `InformalName` | 氏族名称。 |
| `Culture` | 氏族文化。 |
| `Renown` | 声望。 |
| `Heroes` | 氏族内所有英雄。 |
| `Lords` / `Companions` | 领主 / 同伴。 |
| `Settlements` | 氏族拥有的据点。 |
| `Leader` | 氏族首领。 |
| `Kingdom` | 所属王国。 |
| `IsNoble` / `IsMinorFaction` / `IsOutlaw` / `IsBanditFaction` / `IsRebelClan` / `IsUnderMercenaryService` | 氏族类型。 |
| `Color` / `Color2` | 氏族颜色。 |

## 主要方法

### `public static Clan CreateClan(string stringID)`
创建一个新氏族。

```csharp
Clan myClan = Clan.CreateClan("my_mod_clan");
myClan.Name = new TextObject("{=my_clan_name}My Custom Clan");
myClan.Culture = CultureObject.GetCulture("empire");
```

### `public static Clan CreateCompanionToLordClan(Hero hero, Settlement settlement, TextObject clanName, int newClanIconId)`
把一名同伴提升为领主并创建独立氏族。

```csharp
Clan newClan = Clan.CreateCompanionToLordClan(myCompanion, grantSettlement, clanName, 1);
```

### `public static Clan CreateSettlementRebelClan(Settlement settlement, Hero owner, int iconMeshId = -1)`
为据点创建叛军氏族。

```csharp
Clan rebels = Clan.CreateSettlementRebelClan(revoltTarget, rebellionLeader);
```

### `public static Clan FindFirst(Predicate<Clan> predicate)`
按条件查找氏族。

```csharp
Clan enemy = Clan.FindFirst(c => c.IsAtWarWith(Clan.PlayerClan));
```

## 典型用法示例

### 示例 1：给玩家氏族加声望

```csharp
Clan.PlayerClan.Renown += 100f;
```

### 示例 2：把一座城封给某英雄的新氏族

```csharp
Settlement castle = Settlement.Find("castle_A1");
Clan newClan = Clan.CreateCompanionToLordClan(promotedHero, castle, new TextObject("New Banner"), 1);
castle.OwnerClan = newClan;
```

### 示例 3：遍历敌对氏族的所有领主

```csharp
foreach (Clan clan in Clan.All)
{
    if (clan.IsAtWarWith(Clan.PlayerClan))
    {
        foreach (Hero lord in clan.Lords)
        {
            // ...
        }
    }
}
```

## 跨版本提示

- v1.3.0 / v1.3.15 / v1.4.5 的氏族 API 基本稳定。
- v1.4.5 对强盗氏族和小派系做了更细分类（`IsMafia`、`IsSect`、`IsNomad`）。

## 参见

- [Kingdom](../Kingdom/) — 氏族所属的王国
- [Hero](../Hero/) — 氏族成员
- [Settlement](../Settlement/) — 氏族资产
- [MobileParty](../MobileParty/) — 氏族的部队
