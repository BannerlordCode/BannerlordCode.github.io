---
title: "Kingdom"
description: "战役层的王国势力：统治家族统领多个家族、封地、定居点与军队，与 Clan 并列实现 IFaction，是外交、战争、政策与决议的承载者。"
---
# Kingdom

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public sealed class Kingdom : MBObjectBase, IFaction`
**Source:** `TaleWorlds.CampaignSystem/Kingdom.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`Kingdom` 是战役层的**王国势力**——一个由统治家族（`RulingClan`）统领、包含多个家族（`Clans`）、封地（`Fiefs`）、定居点（`Settlements`）与军队（`Armies`）的政治实体。它在 `Kingdom.cs:26` 声明为 `public sealed class Kingdom : MBObjectBase, IFaction`，全文 1,389 行，是战役里最重的聚合类之一。

它在战役系统里的位置可以用一句话概括：**`Clan` 是家族，`Kingdom` 是家族组成的国家**。两者都实现 `IFaction`，所以所有接受 `IFaction` 的外交、战争、领地逻辑对两者一视同仁；但只有 `Kingdom` 承载政策（`ActivePolicies`）、决议（`UnresolvedDecisions`）、王国级钱包（`MercenaryWallet` 等）与同盟（`AlliedKingdoms`）。

## 心智模型

**把 `Kingdom` 想成「`Clan` 的容器 + 外交状态的只读视图」。**

**第一，`Kingdom` 与 `Clan` 并列实现 `IFaction`。** 战役里 `IFaction` 只有两个实现：`Clan`（一个家族，可能独立存在）和 `Kingdom`（多个家族组成的王国）。写 mod 时凡是收 `IFaction` 的 API（宣战、关系、领地）都能直接传 `Kingdom` 或 `Clan`。判断「这个势力是不是王国」用 `IsKingdomFaction`（`Kingdom.cs` 内显式接口实现，恒为 true）；`IsClan` 在 `Kingdom` 上恒为 false（`Kingdom.cs:532`）。

**第二，`Clan.MapFaction` 可能指向 `Kingdom`，也可能指向 `Clan` 自身。** 家族加入王国后，`clan.MapFaction` 返回它所属的 `Kingdom`；独立家族（无王国）的 `MapFaction` 返回自己。而 `Kingdom.MapFaction` 恒返回 `this`（`Kingdom.cs:682`）。**推论：拿到一个 `Clan` 要查外交时，用 `clan.MapFaction`，不要假设 `clan.Kingdom` 非空**——独立家族的 `Kingdom` 是 null，但它的 `MapFaction` 依然有效。

**第三，外交状态存在 `StanceLink` 里，不要自己缓存。** 每对势力之间有一条 `StanceLink`（由 `FactionManager` 管理），只有 `Neutral` 与 `War` 两种 `StanceType`。`Kingdom.IsAtWarWith`（`Kingdom.cs:942`）转发给 `FactionManager.IsAtWarAgainstFaction`，`GetStanceWith`（`Kingdom.cs:954`）返回那条 `StanceLink`。注意 `FactionManager` 会先查 `DiplomacyModel` 的「浅层立场」再回退到 `StanceLink`——**所以战争状态可能被外交模型动态覆盖，自己缓存一份「我们处于战争」的布尔值是最常见的 mod bug**。和平就是 `StanceLink.IsNeutral`，没有单独的「和平」标志。

**第四，`Kingdom.All` 是静态快捷方式，不是另一个集合。** `Kingdom.All`（`Kingdom.cs:650`）直接返回 `Campaign.Current.Kingdoms`，也就是对象管理器里的那份 `MBReadOnlyList<Kingdom>`。两者是同一个列表对象，**都包含已被消灭的王国**——要「活着的王国」必须自己过滤 `IsEliminated`（`Kingdom.cs:666`）。

**第五，它是一个缓存聚合体。** `Clans`、`Fiefs`、`Towns`、`Villages`、`Settlements`、`Heroes`、`AliveLords`、`DeadLords`、`WarPartyComponents`、`Armies` 全部是内部 `MBList` 缓存，由 `OnFortificationAdded`（`Kingdom.cs:1161`）、`OnHeroAdded`（`Kingdom.cs:1209`）、`OnWarPartyAdded`（`Kingdom.cs:1251`）等内部方法在战役事件里增量维护，`AfterLoad`（`Kingdom.cs:904`）在读档后重建并修复。**读这些缓存是 O(1) 拿到列表，但它们是「当前快照」，不是查询接口**。

## 怎么用

### 怎么拿到

```csharp
// 遍历所有王国（含已消灭的）
foreach (Kingdom kingdom in Kingdom.All)
{
    if (!kingdom.IsEliminated)
    {
        // 活着的王国
    }
}

// 玩家家族所属的王国（可能为 null：玩家还是独立家族时）
Kingdom playerKingdom = Clan.PlayerClan.Kingdom;
```

### 典型用法

```csharp
Kingdom kingdom = Clan.PlayerClan.Kingdom;
IFaction neighbor = someClan.MapFaction;

// 外交三问：是否交战 / 是否世仇 / 完整立场
bool atWar = kingdom.IsAtWarWith(neighbor);          // Kingdom.cs:942
bool constantWar = kingdom.IsAtConstantWarWith(neighbor);
StanceLink stance = kingdom.GetStanceWith(neighbor); // Kingdom.cs:954

// 政策：加一条政策并确认
kingdom.AddPolicy(myPolicy);                          // Kingdom.cs:1037
bool active = kingdom.HasPolicy(myPolicy);            // Kingdom.cs:1055

// 决议：提案（默认扣影响力），进入选举或待决列表
kingdom.AddDecision(myDecision);                      // Kingdom.cs:997
```

### 坑

- **不要缓存外交状态。** 战争与中立由 `FactionManager` + `DiplomacyModel` 共同决定，且 `DiplomacyModel` 可以动态覆盖。每次需要时调 `IsAtWarWith` / `GetStanceWith`。
- **`Kingdom.All` 含已消灭的王国。** 过滤 `IsEliminated`（`Kingdom.cs:666`）再遍历。
- **`RulingClan` 可能为 null**（王国没有统治家族时），此时 `Leader`（`Kingdom.cs:471`）返回 null。访问 `kingdom.Leader` 前判空。
- **`AddDecision` 默认扣影响力**（`Kingdom.cs:997`）：提案家族按决议的 `GetInfluenceCost` 扣影响力，除非传 `ignoreInfluenceCost: true`。
- **没有 `IsAtPeaceWith`。** 和平 = `GetStanceWith(other).IsNeutral`，或 `!IsAtWarWith(other)`（注意世仇 `IsAtConstantWarWith` 也算交战）。
- **`RulingClan` 有 public setter**（`Kingdom.cs:563`）——这是给存档反序列化与内部流程用的，mod 不要直接改它，改归属走 `ChangeKingdomAction`。

## 关键成员

取舍判据：1,389 行的类不可能逐成员写全。按功能分四组，每组写代表成员的用途与坑；**纯缓存属性（`Towns`、`Villages`、`Heroes`、`DeadLords`、`WarPartyComponents` 等）与内部维护方法（`OnFortificationRemoved`、`OnHeroRemoved`、`OnWarPartyRemoved`、`DeactivateKingdom`、`Deserialize` 的细节）从略**——它们的用途从同组的「Added」版本与缓存属性名即可推断。

### 身份与集合

| 成员 | 用途 |
| --- | --- |
| `All`（`Kingdom.cs:650`） | 静态属性，返回 `Campaign.Current.Kingdoms`——所有王国（含已消灭）的只读列表。遍历王国的唯一入口 |
| `Clans`（`Kingdom.cs:552`） | 王国内所有家族的只读缓存。家族加入/退出时由内部方法维护 |
| `RulingClan`（`Kingdom.cs:563`） | 统治家族。可能为 null；有 public setter 但 mod 不要直接改 |
| `Fiefs`（`Kingdom.cs:361`） | 王国所有封地（城镇）的只读缓存 |
| `Settlements`（`Kingdom.cs:391`） | 王国所有定居点（城镇+村庄）的只读缓存，是 `Fiefs` 的超集 |
| `Armies`（`Kingdom.cs:577`） | 王国所有军队的只读缓存 |
| `AlliedKingdoms`（`Kingdom.cs:351`） | 同盟王国列表，由 `UpdateAlliedKingdoms`（`Kingdom.cs:757`）通过 `IAllianceCampaignBehavior` 重建 |
| `FactionsAtWarWith`（`Kingdom.cs:341`） | 当前交战势力列表（含王国与家族），由 `UpdateFactionsAtWarWith`（`Kingdom.cs:737`）重建 |
| `IsEliminated`（`Kingdom.cs:666`） | 王国是否已被消灭。`Kingdom.All` 里要过滤它 |
| `Leader`（`Kingdom.cs:471`） | 统治家族的领袖；`RulingClan` 为 null 时返回 null |
| `Name`（`Kingdom.cs:221`） | 王国名（`TextObject`，可本地化） |
| `Culture`（`Kingdom.cs:281`） | 王国文化，决定默认政策、基础兵种、航海能力 |
| `EncyclopediaLink`（`Kingdom.cs:249`） | 百科链接标识，用于 UI 超链接 |

### 外交与战争

| 成员 | 用途 |
| --- | --- |
| `IsAtWarWith(IFaction)`（`Kingdom.cs:942`） | 是否与某势力交战。转发 `FactionManager.IsAtWarAgainstFaction`，会先查外交模型的浅层立场 |
| `IsAtConstantWarWith(IFaction)`（`Kingdom.cs:948`） | 是否世仇（恒定战争）。世仇不受外交模型覆盖 |
| `GetStanceWith(IFaction)`（`Kingdom.cs:954`） | 返回与某势力的 `StanceLink`——战争起始日、和平日、伤亡、贡金等完整历史都在里面 |
| `IsAllyWith(Kingdom)`（`Kingdom.cs:936`） | 是否与另一王国同盟，查 `AlliedKingdoms` 缓存 |
| `CurrentTotalStrength`（`Kingdom.cs:599`） | 王国总军力 = 所有家族 `CurrentTotalStrength` 之和 |
| `AllParties`（`Kingdom.cs:713`） | 遍历 `Campaign.Current.MobileParties` 中 `MapFaction == this` 的部队。**注意这是每帧 LINQ 式遍历，别在 tick 里高频调** |
| `UpdateFactionsAtWarWith()`（`Kingdom.cs:737`） | 重建交战列表：遍历 `Kingdom.All` 与 `Clan.All` 逐个 `IsAtWarWith` |
| `UpdateAlliedKingdoms()`（`Kingdom.cs:757`） | 重建同盟列表，数据源是 `IAllianceCampaignBehavior` |

### 政策与决议

| 成员 | 用途 |
| --- | --- |
| `ActivePolicies`（`Kingdom.cs:640`） | 当前生效政策列表（`IList<PolicyObject>`） |
| `AddPolicy(PolicyObject)`（`Kingdom.cs:1037`） | 加政策（去重）。建国时由 `InitializeKingdom` 批量添加文化默认政策 |
| `RemovePolicy(PolicyObject)`（`Kingdom.cs:1046`） | 移除政策 |
| `HasPolicy(PolicyObject)`（`Kingdom.cs:1055`） | 是否已有某政策 |
| `AddDecision(KingdomDecision, bool)`（`Kingdom.cs:997`） | 提决议：扣影响力 → 派发 `OnKingdomDecisionAdded` → 非本王国走 `KingdomElection` 选举，本王国进 `UnresolvedDecisions` |
| `RemoveDecision(KingdomDecision)`（`Kingdom.cs:1025`） | 从待决列表移除 |
| `OnKingdomDecisionConcluded()`（`Kingdom.cs:1031`） | 决议表决完成时由选举流程回调，更新 `LastKingdomDecisionConclusionDate` |
| `UnresolvedDecisions`（`Kingdom.cs:269`） | 待决决议列表（玩家王国的决议进这里，等玩家在界面表决） |
| `LastKingdomDecisionConclusionDate`（`Kingdom.cs:662`） | 上一次决议表决完成时间，决议冷却用 |

### 经济与运行时

| 成员 | 用途 |
| --- | --- |
| `MercenaryWallet`（`Kingdom.cs:734`） | 佣兵钱包（`internal set`，mod 只能读） |
| `TributeWallet`（`Kingdom.cs:773`） | 贡金钱包（public set） |
| `KingdomBudgetWallet`（`Kingdom.cs:788`） | 王国预算钱包（public set） |
| `CallToWarWallet`（`Kingdom.cs:803`） | 参战号召钱包（public set） |
| `PoliticalStagnation`（`Kingdom.cs:1363`） | 政治停滞值，public field，构造时随机 10–110，建国时设为 100 |
| `Aggressiveness`（`Kingdom.cs:699`） | 侵略性（0–100，setter 内部 clamp） |
| `CreateKingdom(string)`（`Kingdom.cs:833`） | 静态工厂：分配唯一 StringId 并注册到对象管理器。**只创建空壳，还要调 `InitializeKingdom`** |
| `InitializeKingdom(...)`（`Kingdom.cs:843`） | 完整初始化：名称、文化、旗帜、颜色、百科、初始定居点、默认政策，并把 `PoliticalStagnation` 设为 100 |
| `CreateArmy(Hero, Settlement, Army.ArmyTypes, ...)`（`Kingdom.cs:972`） | 以某领主为领袖组建军队并集结，派发 `OnArmyCreated` |
| `ReactivateKingdom()`（`Kingdom.cs:1272`） | 复活已消灭的王国（`IsEliminated = false`） |
| `CalculateMidSettlement()`（`Kingdom.cs:1263`） | 重算王国几何中心定居点（`FactionMidSettlement`） |
| `OnHeroChangedState(Hero, Hero.CharacterStates)`（`Kingdom.cs:887`） | 领主死亡时把缓存从 `AliveLords` 挪到 `DeadLords` |
| `AfterLoad()`（`Kingdom.cs:904`） | 读档后回调：清理无效政策、处理世仇家族的地图事件、重算中心 |
| `ChangeKingdomName(TextObject, TextObject)`（`Kingdom.cs:880`） | 改王国名与非正式名 |

## 真实示例

```csharp
using System.Collections.Generic;
using TaleWorlds.CampaignSystem;

public static class KingdomHelper
{
    // 找到玩家王国当前的所有交战势力
    public static List<IFaction> GetEnemiesOfPlayerKingdom()
    {
        Kingdom playerKingdom = Clan.PlayerClan.Kingdom;
        List<IFaction> enemies = new List<IFaction>();
        if (playerKingdom == null)
        {
            return enemies;
        }
        foreach (Kingdom kingdom in Kingdom.All)
        {
            if (!kingdom.IsEliminated && playerKingdom.IsAtWarWith(kingdom))
            {
                enemies.Add(kingdom);
            }
        }
        foreach (Clan clan in Clan.All)
        {
            if (!clan.IsEliminated && playerKingdom.IsAtWarWith(clan))
            {
                enemies.Add(clan);
            }
        }
        return enemies;
    }

    // 给玩家王国加一条政策（若尚未生效）
    public static void EnsurePolicy(PolicyObject policy)
    {
        Kingdom playerKingdom = Clan.PlayerClan.Kingdom;
        if (playerKingdom != null && !playerKingdom.HasPolicy(policy))
        {
            playerKingdom.AddPolicy(policy);
        }
    }

    // 查询与某势力的完整外交立场
    public static StanceLink GetStance(IFaction other)
    {
        Kingdom playerKingdom = Clan.PlayerClan.Kingdom;
        return playerKingdom != null ? playerKingdom.GetStanceWith(other) : null;
    }
}
```

## 参见

- [`../Clan`](../Clan) —— `IFaction` 的另一个实现：家族。`Clan.MapFaction` 指向王国或自身，是理解本类的关键对照。
- [`../CampaignEvents`](../CampaignEvents) —— 全局事件总线：`KingdomCreatedEvent`、`WarDeclared`、`RulingClanChanged` 等王国事件都在这里发布。
- [`../ChangeKingdomAction`](../ChangeKingdomAction) —— 家族加入/退出王国的统一入口，`Kingdom.Clans` 缓存的变更都经过它。
- [`../../campaign-ext/MBObjectBase`](../../campaign-ext/MBObjectBase) —— 基类：`StringId`、`Id`、对象管理器注册。
- [`../_index`](../_index) —— `campaign` 桶全类型索引。

## 导航

- 同桶：[`../MapEvent`](../MapEvent) · [`../CampaignEventDispatcher`](../CampaignEventDispatcher) · [`../MobileParty`](../MobileParty)
- 父索引：[`../_index`](../_index)
