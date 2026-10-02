---
title: "Kingdom"
description: "战役地图上的王国聚合体：氏族、封地、村庄、军队、战争与联盟集合、政策、决策、统治氏族与被消灭状态。"
---

# Kingdom

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class Kingdom : MBObjectBase, IFaction`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.CampaignSystem/Kingdom.cs`

## 概述

`Kingdom` 是王国层的 `IFaction` 实现——位于 [Clan](../Clan) 之上、再无上层的政治容器。一个王国聚合：

- **附庸。** `Clans`、`RulingClan`、`Leader`。
- **土地。** `Fiefs`、`Villages`、`Settlements`、`InitialHomeSettlement`、`FactionMidSettlement`。
- **武力。** `Armies`、`WarPartyComponents`、`CurrentTotalStrength`。
- **政治。** `ActivePolicies`、`UnresolvedDecisions`、`Aggressiveness`、`IsEliminated`。
- **外交。** `FactionsAtWarWith`、`AlliedKingdoms`、`IsAllyWith`、`IsAtWarWith`、`GetStanceWith`。

大部分战役 mod 代码通过 `IFaction` 统一对待 `Clan` 与 `Kingdom`，因为官方的立场、战争与价值模型都是针对这个接口编写的。只有当你需要其中一方独有的东西——氏族影响力，或王国决策——才需要区分。

## 心智模型

`Kingdom` 位于 `Campaign` 之下，与 `Clan` 同层：

```
Kingdom : IFaction
 ├─ RulingClan ──► Clan ──► Clan.Kingdom（反向引用）
 ├─ Leader ──► Hero（统治氏族的领袖，或选举中的国王）
 ├─ Clans ──► 附庸（含统治氏族自身）
 ├─ Fiefs (Town) / Villages / Settlements
 ├─ Armies ──► Army ──► MobileParty[]
 ├─ ActivePolicies (PolicyObject)
 ├─ UnresolvedDecisions (KingdomDecision)
 └─ FactionsAtWarWith / AlliedKingdoms
```

典型调用顺序：

```
MBSubModuleBase.OnCampaignStart
    Kingdom.All 已填充；统治氏族与领袖已解析
CampaignBehaviorBase.RegisterEvents()
    CampaignEvents.RulingClanChanged / OnClanChangedKingdomEvent / HourlyTickEvent
DailyTick
    读取 kingdom.Armies、kingdom.CurrentTotalStrength、ActivePolicies
    通过 kingdom.CreateArmy(...) / AddPolicy(...) 修改
    只有领导权真正转移时才会触发 RulingClanChanged
```

实际开发中最容易踩的坑：

- **`Leader` 与 `RulingClan` 不是一回事。** `RulingClan` 是氏族；`Leader` 是一个英雄，在继承危机或选举期间可能另有其人（甚至暂时空缺）。假设 `kingdom.Leader.Clan == kingdom.RulingClan` 的代码会在选举期间崩掉。
- **`FactionsAtWarWith` 是缓存。** `UpdateFactionsAtWarWith()` 会从立场图重算它。在缔结和约后立刻读取，得到的仍是和约前的集合。
- **被消灭的王国仍然作为对象存在。** 它们仍在 `Kingdom.All` 中，只是没有军队与封地。请显式过滤，不要假定“存在即有效”。
- **军队属于王国，部队属于氏族。** `kingdom.Armies` 返回 `Army` 对象，其成员是统治氏族与附庸的部队。把所有部队的 `CurrentTotalStrength` 相加会重复计算附属部队。
- **`CreateArmy` 需要领袖和目标。** 传入没有部队的英雄，或传入空目标聚落，会得到一个永远无法结算的军队。读一下重载的 `partiesToCallToArmy` 默认值（null）：它意味着“使用王国自己的部队”。
- **`ChangeKingdomName` 会同时写两个字段。** `Name` 与 `InformalName` 一起变化；只改其一会让百科与地图显示不一致。

## 依赖关系

| 方向 | 类型 | 关系 |
|-----------|------|--------------|
| 存储 | `MBObjectBase` | 可存档，由 `Id` / `StringId` 标识 |
| 阵营契约 | `IFaction` | 与 [Clan](../Clan) 共享的战争与立场 |
| 附庸 | [Clan](../Clan) | `Clans`、`RulingClan` |
| 人物 | [Hero](../Hero) | `Leader`、`AliveLords`、`DeadLords`、`Heroes` |
| 土地 | [Town](../Town)、[Village](../Village)、[Settlement](../Settlement) | `Fiefs`、`Villages`、`Settlements` |
| 武力 | `Army`、[MobileParty](../MobileParty) | `Armies`、`WarPartyComponents`、`AllParties` |
| 管理器 | [FactionManager](../FactionManager)、`KingdomManager` | 立场解析、选举与决策 |
| 事件 | [CampaignEvents](../CampaignEvents) | `RulingClanChanged`、`OnClanChangedKingdomEvent` |

## 主要成员

### 身份

#### `public static MBReadOnlyList<Kingdom> All`

包含已消灭王国的全部王国。活动视图。

#### `public static Kingdom CreateKingdom(string stringID)`

引擎工厂。唯一受支持的构造路径——`new Kingdom()` 产出的是未注册对象，既不在 `All` 中也永远不会被存档。

#### `public void InitializeKingdom(TextObject name, TextObject informalName, CultureObject culture, Banner banner, uint kingdomColor1, uint kingdomColor2, Settlement initialHomeSettlement, TextObject encyclopediaText, TextObject encyclopediaTitle, TextObject encyclopediaRulerTitle)`

一次性完整初始化。这里的每一项都可存档，因此必须且只能调用一次，且要在王国进入任何注册表之前。

#### `public void ChangeKingdomName(TextObject name, TextObject informalName)`

同时重命名正式名与简称。

#### `public void ReactivateKingdom()` / `public bool IsEliminated`

复活一个已被消灭的王国（无统治氏族、无封地、无军队）。

### 领导权

#### `public Clan RulingClan`

位居顶层的氏族。王国被消灭时为 `null`。

#### `public Hero Leader`

王国的领袖英雄。部分游戏模式下由选举产生；选举期间它可能与统治氏族的领袖不一致。

#### `public bool IsMapFaction`

当王国是地图上真实存在的政治实体时为 `true`。小型派系与强盗“王国”返回 `false`。

### 土地与实力

#### `public MBReadOnlyList<Town> Fiefs` / `public MBReadOnlyList<Village> Villages` / `public MBReadOnlyList<Settlement> Settlements`

跨所有氏族聚合出的领地。缓存视图。

#### `public Settlement InitialHomeSettlement`

最初的首都。保留它是为了历史记录与百科；改变它不会移动首都的生产。

#### `public Settlement FactionMidSettlement` / `public void CalculateMidSettlement()`

王国 AI 推理所围绕的地理中心。领土变化后请重算。

#### `public float CurrentTotalStrength` / `public float Aggressiveness`

聚合军事实力，以及 AI 采取行动的积极程度。

### 战争与外交

#### `public bool IsAtWarWith(IFaction other)` / `IsAtConstantWarWith(IFaction other)` / `IsAllyWith(Kingdom other)` / `HasCalledToWar(Kingdom other)` / `public StanceLink GetStanceWith(IFaction other)`

外交判定。`GetStanceWith` 是原语，其余都是它的阈值封装。

#### `public MBReadOnlyList<IFaction> FactionsAtWarWith` / `public void UpdateFactionsAtWarWith()`

缓存的战争集合与重算触发器。热路径请优先用布尔判定。

#### `public MBReadOnlyList<Kingdom> AlliedKingdoms` / `public void UpdateAlliedKingdoms()`

联盟缓存与重算。

#### `public float MainHeroCrimeRating { get; set; }` / `public float DailyCrimeRatingChange` / `public CampaignTime NotAttackableByPlayerUntilTime { get; set; }`

面向玩家的声望，以及冒犯之后的宽限期。

### 军队与战争部队

#### `public MBReadOnlyList<Army> Armies`

该王国集结的军队。每支军队持有成员部队；不去重地累加成员实力会重复计算。

#### `public IEnumerable<MobileParty> AllParties`

属于该王国或其任一氏族的所有部队。

#### `public MBReadOnlyList<WarPartyComponent> WarPartyComponents`

登记在该王国名下的战争部队组件，供关注战争部队记账而非机动部队的代码使用。

#### `public void CreateArmy(Hero armyLeader, Settlement targetSettlement, Army.ArmyTypes selectedArmyType, MBReadOnlyList<MobileParty> partiesToCallToArmy = null)`

集结军队。`partiesToCallToArmy` 传 `null` 表示使用王国自己的部队；传显式列表则强制指定编成。

#### `public int LastArmyCreationDay { get; private set; }`

军队集结的节流值。它是 `private set`，不要指望能把它当作可重置的“冷却”。

### 政策与决策

#### `public IList<PolicyObject> ActivePolicies` / `public void AddPolicy(PolicyObject policy)` / `RemovePolicy(PolicyObject)` / `public bool HasPolicy(PolicyObject policy)`

王国当前生效的政策列表。`ActivePolicies` 是可变列表，add / remove 方法是受支持的封装。

#### `public MBReadOnlyList<KingdomDecision> UnresolvedDecisions` / `public void AddDecision(KingdomDecision kingdomDecision, bool ignoreInfluenceCost = false)` / `RemoveDecision(...)` / `OnKingdomDecisionConcluded()`

进行中的王国决策。`ignoreInfluenceCost` 供直接授予决策的脚本路径使用。

#### `public CampaignTime LastKingdomDecisionConclusionDate { get; private set; }` / `public CampaignTime LastMercenaryOfferTime { get; set; }`

决策节奏控制。前者是只读的。

### 成员记账

#### `public void OnHeroAdded(Hero hero)` / `OnHeroRemoved(Hero hero)` / `OnHeroChangedState(Hero hero, Hero.CharacterStates oldState)`

成员变化时由氏族 / 英雄生命周期调用。手动调用会让 `Heroes` 与 `AliveLords` 失去同步。

#### `public void OnFortificationAdded(Town fortification)` / `OnFortificationRemoved(Town fortification)`

封地索引维护。连通到聚落易主路径。

## 使用示例

### 示例 1：不重复计算地找出最强王国

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;

public static string StrongestKingdom()
{
    Campaign campaign = Campaign.Current;
    if (campaign == null)
    {
        return "无战役";
    }

    Kingdom best = campaign.Kingdoms
        .Where(k => !k.IsEliminated)
        .OrderByDescending(k => k.CurrentTotalStrength)
        .FirstOrDefault();

    return best == null ? "无王国" : $"{best.Name.Name}：{best.CurrentTotalStrength:0}";
}
```

### 示例 2：为玩家所属王国集结军队

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Settlements;

public static void RaiseArmy(Settlement target)
{
    Campaign campaign = Campaign.Current;
    if (campaign == null || target == null)
    {
        return;
    }

    Kingdom kingdom = campaign.MainParty?.ActualClan?.Kingdom;
    if (kingdom == null || kingdom.IsEliminated || kingdom.Leader == null)
    {
        return;
    }

    kingdom.CreateArmy(kingdom.Leader, target, Army.ArmyTypes.Besieger);
    InformationManager.DisplayMessage(new InformationMessage($"{kingdom.Name.Name} 正在动员"));
}
```

### 示例 3：跟踪一个决策从提案到结论

```csharp
using TaleWorlds.CampaignSystem;

public sealed class KingdomDecisionBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.RulingClanChanged.AddNonSerializedListener(this, OnRulingClanChanged);
    }

    public override void SyncData(IDataStore dataStore)
    {
    }

    // IMbEvent<Kingdom, Clan>
    private void OnRulingClanChanged(Kingdom kingdom, Clan newRulingClan)
    {
        if (kingdom == null || newRulingClan == null)
        {
            return;
        }

        InformationManager.DisplayMessage(new InformationMessage(
            $"{kingdom.Name.Name} 现由 {newRulingClan.Name.Name} 统治" +
            $"（未决决策 {kingdom.UnresolvedDecisions.Count} 项）"));
    }
}
```

### 示例 4：授予并检查一项王国政策

```csharp
using TaleWorlds.CampaignSystem;

public static void GrantPolicy(Kingdom kingdom, PolicyObject policy)
{
    if (kingdom == null || policy == null || kingdom.HasPolicy(policy))
    {
        return;
    }

    kingdom.AddPolicy(policy);
    _ = kingdom.ActivePolicies.Count;
    InformationManager.DisplayMessage(
        new InformationMessage($"{kingdom.Name.Name} 采纳了 {policy.Name}"));
}
```

## 风险与崩溃边界

1. **被消灭的王国中 `RulingClan` 与 `Leader` 均为 null。** 所有解引用它们的成员都必须判空。`IsEliminated` 是最廉价的检查方式。
2. **未注册的王国会凭空消失。** `new Kingdom()` 既不在 `All` 中也永远不会被存档。请用 `Kingdom.CreateKingdom` 加上 `InitializeKingdom`。
3. **外交缓存会滞后。** `FactionsAtWarWith` 与 `AlliedKingdoms` 由各自的 `Update*` 方法刷新。热路径请用 `IsAtWarWith` / `IsAllyWith`，而不是遍历缓存。
4. **`Aggressiveness` 没有上限。** `MainHeroCrimeRating` 是可写 float；mod 直接写它会跳过每日罪案值计算与通知。
5. **与存档耦合。** `Name`、`InformalName`、`Culture`、`InitialHomeSettlement`、`LastArmyCreationDay`、`Color`、`Banner`、`MainHeroCrimeRating` 与雇佣兵钱包都是 `[SaveableProperty]`。重新编号会破坏已有存档，参见 [存档系统](../../../architecture/save-system)。
6. **军队重复计算。** `Armies` 与 `AllParties` 在附属部队上存在重叠。两者相加会夸大实力并带偏 AI。
7. **记账钩子不幂等。** 直接调用 `OnHeroAdded` 或 `OnFortificationAdded` 会在 `Heroes`、`AliveLords` 与 `Fiefs` 中产生重复条目。
8. **决策的影响力。** `AddDecision(..., ignoreInfluenceCost: true)` 会跳过影响力检查直接授予决策；在面向玩家的流程中用它会让王国显得毫无约束。

## 跨版本提示

- `CreateKingdom`、`InitializeKingdom`、`RulingClan`、`CreateArmy` 与各 `Is*` 外交判定在 1.3.x 与 1.4.x 中形状相同。
- 后续构建增加了更多王国决策字段与 `PolicyObject` 成员。由于政策列表由实例驱动，遍历 `ActivePolicies` 的消费方代码可以继续工作。

## 参见

- [Clan](../Clan) — 王国内部的附庸
- [FactionManager](../FactionManager) — 战争与立场解析
- [Hero](../Hero) — 领主与领袖
- [MobileParty](../MobileParty) — 构成军队的部队
- [Settlement](../Settlement) — 王国持有的土地
- [Town](../Town) — 计入 `Fiefs` 的封地
- [Campaign](../Campaign) — 王国注册表与每日 tick
- [存档系统](../../../architecture/save-system) — Saveable 属性纪律
- [战役基础](../../../guide/campaign-basics) — 以任务为导向的上手指南