---
title: "Kingdom"
description: "王国：多个氏族组成的最高级政治实体，管理战争、政策、军团和外交。"
---
# Kingdom

**Namespace:** TaleWorlds.CampaignSystem  
**Module:** TaleWorlds.CampaignSystem  
**Type:** `public class Kingdom : IFaction`  
**Base:** —  
**File:** `TaleWorlds.CampaignSystem/Kingdom.cs`

## 概述

`Kingdom` 是 Bannerlord 中**由多个 `Clan` 组成的最高政治实体**。它管理战争与和平状态、外交立场、王国政策、军团创建、以及整个王国的战略决策。每个王国有一个文化、一套颜色、一面旗帜和一个（可选的）统治者。

主要作用：

- 聚合所有 `Clan`，形成阵营关系。
- 判断战争/和平：`IsAtWarWith`、`IsAllyWith`。
- 创建军团（`CreateArmy`）。
- 管理王国决议（`KingdomDecision`）和政策（`PolicyObject`）。
- 追踪王国的总兵力、定居点、颜色与旗帜。

## 心智模型

把 `Kingdom` 看作**“多个氏族组成的政治联盟”**：

- 单个 `Hero` 属于 `Clan`，氏族属于 `Kingdom`。
- 战争与和平是在王国/氏族之间发生的；单独的英雄不会外交宣战。
- 王国政策会影响所有氏族的行为和经济。
- 军团是战役地图上临时召集的多支部队，用于攻城或决战。

## 核心属性

| 属性 | 说明 |
|------|------|
| `All` | 所有王国。 |
| `Name` / `InformalName` | 王国名称。 |
| `Culture` | 王国文化。 |
| `Ruler` | 当前统治者。 |
| `Clans` | 王国下属氏族。 |
| `Settlements` | 王国所有据点。 |
| `Armies` | 当前军团列表。 |
| `Banner` | 王国旗帜。 |
| `Color` / `Color2` | 王国主副色。 |
| `MercenaryWallet` | 佣兵资金。 |

## 主要方法

### `public static Kingdom CreateKingdom(string stringID)`
创建一个新王国。

```csharp
Kingdom myKingdom = Kingdom.CreateKingdom("my_mod_kingdom");
myKingdom.InitializeKingdom(
    new TextObject("My Kingdom"),
    new TextObject("My Folk"),
    CultureObject.GetCulture("empire"),
    myBanner,
    0xFF0000U, 0xFFFFFFU,
    startingSettlement,
    new TextObject("Encyclopedia text"),
    new TextObject("My Kingdom"),
    new TextObject("High King"));
```

### `public void InitializeKingdom(...)`
初始化王国名称、文化、旗帜、颜色和初始据点。

### `public bool IsAtWarWith(IFaction other)` / `public bool IsAllyWith(Kingdom other)`
判断战争/同盟关系。

```csharp
if (enemyKingdom.IsAtWarWith(Clan.PlayerClan))
{
    // 与玩家开战
}
```

### `public void CreateArmy(Hero armyLeader, Settlement targetSettlement, Army.ArmyTypes selectedArmyType, ...)`
创建一支军团。

```csharp
myKingdom.CreateArmy(myRuler, targetCastle, Army.ArmyTypes.Besieger);
```

### `public void AddPolicy(PolicyObject policy)` / `RemovePolicy(PolicyObject policy)` / `HasPolicy(PolicyObject policy)`
管理王国政策。

```csharp
if (!myKingdom.HasPolicy(DefaultPolicies.Citizenship))
{
    myKingdom.AddPolicy(DefaultPolicies.Citizenship);
}
```

### `public void AddDecision(KingdomDecision kingdomDecision, bool ignoreInfluenceCost = false)`
向王国提交一个王国决议（如宣战、和平、放逐）。

```csharp
var warDecision = new DeclareWarDecision(myKingdom, enemyKingdom);
myKingdom.AddDecision(warDecision);
```

### `public StanceLink GetStanceWith(IFaction other)`
获取与另一阵营的立场链接（战争/和平/中立信息）。

```csharp
StanceLink stance = myKingdom.GetStanceWith(enemyClan);
bool atWar = stance.IsAtWar;
```

## 典型用法示例

### 示例 1：强制两个王国和平

```csharp
Kingdom a = Kingdom.FindFirst(k => k.StringId == "empire");
Kingdom b = Kingdom.FindFirst(k => k.StringId == "sturgia");
if (a != null && b != null && a.IsAtWarWith(b))
{
    a.SetStance(b, 0f, true); // 和平
}
```

### 示例 2：给玩家王国所有氏族发工资

```csharp
foreach (Clan clan in Clan.PlayerClan.Kingdom.Clans)
{
    clan.Leader.Gold += 10000;
}
```

### 示例 3：检查一个定居点属于敌国

```csharp
bool IsEnemySettlement(Settlement s) =>
    s.OwnerClan.Kingdom != null && s.OwnerClan.Kingdom.IsAtWarWith(Clan.PlayerClan.Kingdom);
```

## 跨版本提示

- v1.3.0 / v1.3.15 / v1.4.5 的王国 API 一致。
- v1.4.5 对王国决议和外交 AI 做了扩展，新增了更多 `KingdomDecision` 子类。

## 参见

- [Clan](../Clan/) — 王国的组成单元
- [Hero](../Hero/) — 氏族成员与统治者
- [Settlement](../Settlement/) — 王国资产
- [Army](../../campaign-ext/Army/) — 王国军团
- [PolicyObject](../../campaign-ext/PolicyObject/) — 王国政策
- [KingdomDecision](../../campaign-ext/KingdomDecision/) — 王国决议机制
