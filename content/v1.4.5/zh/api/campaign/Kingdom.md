---
title: "Kingdom"
description: "Kingdom 是战役层代表一个政权（国家）的核心类型：聚合成员家族、统治家族、军队、领地、政策与待决议案，并作为外交（战争/和平/同盟）关系的阵营节点。"
---
# Kingdom

**Namespace:** TaleWorlds.CampaignSystem  
**Module:** TaleWorlds.CampaignSystem  
**类型：** `public sealed class Kingdom : MBObjectBase, IFaction`  
**Base:** [MBObjectBase](../../core/MBObjectBase)  
**源文件:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/Kingdom.cs`

## 一句话职责

`Kingdom` 把若干个家族聚合成一个处于和平或战争状态中的国家，统一管理统治家族、军队、领地、政策与决策，并作为外交关系的阵营节点——你读取它的政治与外交状态，而创建、换统治家族、宣战议和都要走专门的管理器或 Action。

## 概述

`Kingdom` 不是“更大的 Clan”，而是一个**拥有制度状态的政权容器**：它聚合一组 `Clan`，由其中一个 `RulingClan`（统治家族）代表，持有军队（`Armies`）、领地（由家族派生）、已启用政策（`ActivePolicies`）和待决议案（`UnresolvedDecisions`），并作为外交关系的阵营节点（`IFaction`）。读它的正确心智是：“这是一个正处于和平或战争状态中的国家对象图”。它适合用来读取国家级政治状态、成员家族、统治者与外交关系；而创建王国、更换统治家族、宣战、议和或解散王国，都必须走专门的管理器或 Action，让成员、战争关系和事件级联保持一致。

## 心智模型

把 `Kingdom` 想成“一张国家级的政治快照 + 制度容器”：**你通常读取它，而不是自己组装它**。

- **它是什么**：一个 `IFaction` 实现，内部聚合 `Clans`、`RulingClan`、`Armies`、`ActivePolicies`、`UnresolvedDecisions`，并派生出 `Fiefs`/`Towns`/`Villages`/`Settlements`、`Heroes`/`AliveLords`/`DeadLords`、`WarPartyComponents` 等缓存列表。它的大部分“领土/领主”信息其实是按家族与派对关系计算并缓存的，不是第二份独立维护的真相源。
- **谁创建/持有它**：`Kingdom.All`（`=> Campaign.Current.Kingdoms`）从当前 [Campaign](../Campaign) 返回全部已注册王国；`Clan.Faction` 或 `Clan.PlayerClan.Kingdom` 是拿到某个家族所属王国的常见路径。初始化由 [KingdomManager](../KingdomManager) 的 `CreateKingdom(...)` 与 `Kingdom.InitializeKingdom(...)` 完成，内层再经 `ChangeKingdomAction.ApplyByCreateKingdom` 接纳创始家族——它不是让 mod 直接 `new Kingdom()` 后写几个属性就能得到的完整世界对象。
- **为什么要用 Action 而不是 setter**：`RulingClan` 的 setter 只是局部赋值；宣战/议和改写的是 `FactionManager` 维护的 stance 关系，而 `Clans`/`Armies` 的增删会触发缓存与事件（`OnFortificationAdded`、`AddClanInternal` 等）。直接改这些集合会跳过外交模型、事件级联与存档完整性检查。
- **层级**：战役层（Campaign）的核心类型，比 `Clan`/`Hero` 更高一层；它依赖 [Campaign](../Campaign) 与 `FactionManager`，并驱动 [CampaignEvents](../CampaignEvents) 的生命周期事件。

## 何时用 / 何时不要用

- **用**：读取某个家族所属的政治容器、成员家族、统治者、政策、军队、决策与外交状态；通过 `Kingdom.All` 或 `Clan.PlayerClan?.Kingdom` 取得已注册王国。
- **用**：只读查询 `IsAtWarWith`、`FactionsAtWarWith`、`AlliedKingdoms` 来判断外交态势——这些查询不广播任何变化，安全。
- **不要用 Kingdom 代替外交 Action**：宣战用 [DeclareWarAction.ApplyByDefault](../../campaign-ext/DeclareWarAction)，议和用 [MakePeaceAction.Apply](../../campaign-ext/MakePeaceAction)；[DiplomacyModel](../DiplomacyModel) 只计算评分，不提交关系。
- **不要直接写 `RulingClan`、`Clans`、`Armies` 或政策列表**：这些集合和事件由专门流程维护，直接写会让 UI、家族、领地与外交缓存分叉。换统治家族用 [ChangeRulingClanAction](../../campaign-ext/ChangeRulingClanAction)，加入/离开用 `ChangeKingdomAction`，解散用 [DestroyKingdomAction](../../campaign-ext/DestroyKingdomAction)。
- **不要在模块加载/无 Campaign 阶段访问 `Kingdom.All`**：静态集合依赖 `Campaign.Current`，读档中间态也可能让 `RulingClan` 或某 `Clan.Kingdom` 短暂为 `null`，读取前判空。

## 依赖

- 上游 / 相关：[Campaign](../Campaign)（`Kingdoms` 集合与当前 `Models`，`Kingdom.All` 仅在运行中可用）、[Clan](../Clan)（成员单位，带来领袖、领地、军队与派对；家族可合法地没有王国）、[Hero](../Hero)（统治家族的 `Leader` 即国家统治者）、[CultureObject](../CultureObject)（文化与基础兵种）、`Banner`（旗帜）、[DiplomacyModel](../DiplomacyModel) 与 `FactionManager`（外交评分与 stance 真相）。
- 下游 / 边界：[KingdomManager](../KingdomManager) 与 [KingdomDecision](../KingdomDecision) 负责组装与决策；[Army](../Army) 承载临时军队；[CampaignEvents](../CampaignEvents) 发布创建/毁灭/统治家族/政策/决策事件，行为应订阅这些生命周期事件；[DeclareWarAction](../../campaign-ext/DeclareWarAction)、[MakePeaceAction](../../campaign-ext/MakePeaceAction)、[ChangeRulingClanAction](../../campaign-ext/ChangeRulingClanAction)、[DestroyKingdomAction](../../campaign-ext/DestroyKingdomAction) 承担状态级联。

## 关键成员与调用时机

### 身份与统治（identity）

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `Name` / `InformalName`（`TextObject`） | 王国全名与简称，只读；改名走 `ChangeKingdomName`。 |
| `Leader`（`Hero`） | 派生自 `RulingClan?.Leader`，即国家统治者；`RulingClan` 为空时为 `null`，读取前判空。 |
| `RulingClan`（`Clan`，可读写） | 统治家族。getter 直接返回；**setter 仅做局部赋值**，不会发布统治家族事件或处理继承——换统治家族必须用 `ChangeRulingClanAction.Apply`。 |
| `IsEliminated`（`bool`） | 王国是否已被摧毁/停用（`DeactivateKingdom` 置位）。枚举 `Kingdom.All` 时用它过滤已消亡王国。 |
| `IsBanditFaction` / `IsOutlaw`（`bool`） | 派生自 `RulingClan` 的同名属性；用于区分强盗/法外阵营。 |
| `MapFaction`（`IFaction`） | 恒返回 `this`，满足 `IFaction` 契约。 |

### 成员：家族与军队（clans & members）

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `Clans`（`MBReadOnlyList<Clan>`） | 成员家族。**不要直接增删**——加入/离开应走 `ChangeKingdomAction`，由 `AddClanInternal`/`RemoveClanInternal` 维护缓存与中点据点。 |
| `All`（`static MBReadOnlyList<Kingdom>`） | `=> Campaign.Current.Kingdoms`；遍历当前战役全部王国。枚举期内若可能执行创建/毁灭，先复制或筛选结果。 |
| `Armies`（`MBReadOnlyList<Army>`） | 当前王国军队；军队随地图事件/解散/领袖死亡而消失，不要当作长期编制。 |
| `Heroes` / `AliveLords` / `DeadLords` / `WarPartyComponents` | 派生的缓存列表，随 `OnHeroAdded`/`OnWarPartyAdded` 等回调刷新。 |
| `Settlements` / `Fiefs` / `Towns` / `Villages` | 由成员家族据点派生并缓存（`OnFortificationAdded/Removed` 维护）；不要自己维护第二份领地列表。 |
| `CurrentTotalStrength`（`float`） | 各成员家族 `CurrentTotalStrength` 之和；用于实力对比，每次访问都会累加计算。 |
| `AllParties`（`IEnumerable<MobileParty>`） | 遍历 `MapFaction == this` 的所有移动派对；惰性枚举，调用时查询 `Campaign.Current.MobileParties`。 |

### 外交与战争（diplomacy & war）

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `FactionsAtWarWith`（`MBReadOnlyList<IFaction>`） | 当前交战阵营的**缓存**列表；由 `UpdateFactionsAtWarWith()` 依据 `IsAtWarWith` 重建（含王国与家族）。只读查询安全。 |
| `AlliedKingdoms`（`MBReadOnlyList<Kingdom>`） | 同盟王国缓存，由 `UpdateAlliedKingdoms()` 依据 `IAllianceCampaignBehavior.IsAllyWithKingdom` 重建。 |
| `IsAtWarWith(IFaction)` / `IsAtConstantWarWith(IFaction)`（`bool`） | 委托 `FactionManager` 查询真实 stance；只读，不广播变化。 |
| `IsAllyWith(Kingdom)`（`bool`） | 检查是否出现在 `AlliedKingdoms` 中。 |
| `GetStanceWith(IFaction)`（`StanceLink`） | 取两阵营间的关系链接（好感度/战争状态等）。 |
| 宣战 / 议和 | 必须经 [DeclareWarAction](../../campaign-ext/DeclareWarAction) / [MakePeaceAction](../../campaign-ext/MakePeaceAction)；**不要**直接改 `FactionsAtWarWith` 或 stance 集合。 |

### 文化、旗帜与配色（culture & visuals）

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `Culture`（`CultureObject`） | 王国文化；决定基础兵种、默认政策与旗帜模板。只读（由 `InitializeKingdom` 设置）。 |
| `Banner`（`Banner`） | 王国旗帜；可公开 `set`（见 `Deserialize` 中按 `banner_key` 重建）。 |
| `Color` / `Color2`（`uint`） | 主/次阵营色；初始化时设定，通常对应 `PrimaryBannerColor`/`SecondaryBannerColor`。 |
| `PrimaryBannerColor` / `SecondaryBannerColor`（`uint`） | 旗帜主/次色；`InitializeKingdom` 默认取 `Color`/`Color2`。 |
| `BasicTroop`（`CharacterObject`） | 派生自 `Culture.BasicTroop`，即该文化的基础兵种。 |
| `HasNavalNavigationCapability`（`bool`） | 派生自 `Culture.DefaultPartyTemplate.ShipHulls.Any()`，判断是否有航海能力。 |

### 政治：政策与决策（politics）

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `ActivePolicies`（`IList<PolicyObject>`） | 已启用政策；政策增删通常由 [KingdomDecision](../KingdomDecision)/选举流程驱动，不要直接改列表。 |
| `UnresolvedDecisions`（`MBReadOnlyList<KingdomDecision>`） | 待决议案；读取用，提交用 `AddDecision`。 |
| `AddDecision(KingdomDecision, bool ignoreInfluenceCost = false)` | 提交议案：默认会扣除提案家族影响力（`ChangeClanInfluenceAction`），发布 `OnKingdomDecisionAdded`；非玩家王国立即 `StartElection`。**仅在 Campaign 完成初始化后调用**，不要在存档 `SyncData` 或对象未注册时添加。 |
| `RemoveDecision` / `OnKingdomDecisionConcluded` | 撤销待议案 / 记录上次决议时间（`LastKingdomDecisionConclusionDate`）。 |
| `AddPolicy` / `RemovePolicy` / `HasPolicy` | 底层政策维护入口；正常应通过决策流程，而非直接调用。 |
| `PoliticalStagnation`（`int`） | 影响选举节奏的存档字段；初始化时随机或置 100。 |
| `TributeWallet` / `KingdomBudgetWallet` / `CallToWarWallet` / `MercenaryWallet` / `Aggressiveness` | 经济与侵略性状态；内部 setter 会 clamp（`Aggressiveness` 限 0–100）。经相应行为/Action 维护，勿直接赋值破坏平衡。 |

### 创建与初始化（creation）

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `CreateKingdom(string stringID)`（`static`） | 低层创建：取唯一 StringId、`new Kingdom()` 并加入 `CampaignObjectManager`。一般 mod 应使用 `KingdomManager.CreateKingdom(...)` 而不是它。 |
| `InitializeKingdom(...)` | 设置名称、文化、旗帜、配色、百科文本并套用文化默认政策；由 `KingdomManager` 或反序列化调用。 |
| `KingdomManager.CreateKingdom(...)` | 高层入口：创建、注册、初始化并经过 `ChangeKingdomAction.ApplyByCreateKingdom` 接纳创始家族。 |

## Action、事件与 Model 边界

| 目标 | 正确入口 | 不能用什么替代 |
| --- | --- | --- |
| 宣战 | `DeclareWarAction.ApplyByDefault(f1, f2)` 或匹配原因的 `ApplyBy*` | 不要直接改 `FactionsAtWarWith` 或 `FactionManager` 的 stance。 |
| 议和 | `MakePeaceAction.Apply(f1, f2)` | 不要从集合中移除敌对阵营。 |
| 更换统治家族 | `ChangeRulingClanAction.Apply(...)` | 不要只赋值 `RulingClan`，那不会发布统治家族事件。 |
| 创建/加入王国 | `KingdomManager.CreateKingdom(...)` + `ChangeKingdomAction` | 不要把 `Kingdom.CreateKingdom` 当作完整加入流程。 |
| 解散王国 | `DestroyKingdomAction.Apply(...)` | 不要遍历 `Clans` 自己逐个删来模拟毁灭。 |
| 计算战争评分 | `Campaign.Current.Models.DiplomacyModel.GetScoreOfDeclaringWar(...)` | Model 只返回分数/理由，不会宣战。 |

## 风险边界

- **空王国/空统治者**：叛乱、销毁与读档中间态可能让 `Kingdom`、`RulingClan` 或某个 `Clan.Kingdom` 暂时为 `null`；读取 `Leader`、领地或成员前务必判空。
- **直接改 `RulingClan`**：只做局部 setter，不会替代领袖事件与继承逻辑，可能导致 UI 与外交状态不同步。
- **直接增删 `Clans`/`Armies`**：会绕过 `ChangeKingdomAction`/`AddClanInternal` 的缓存刷新（`CalculateMidSettlement`、据点距离缓存），造成地图与外交缓存分叉。
- **决策时机**：`AddDecision` 会扣影响力并进入事件/选举队列；不要在 `SyncData`、对象未注册或正在销毁时调用。
- **军队是短命关系**：`Army`/`MobileParty`/领袖状态随地图事件或死亡改变，回调中不要保存旧军队实例作为永久状态。
- **外交级联**：宣战与议和影响家族、领地、派对与可见地图对象；只能在正确 Campaign 阶段使用对应 Action。
- **存档加载**：王国先重建集合（`OnLoad` → `InitializeCachedLists`），再回填家族与领地引用；自定义保存只存稳定 StringId，加载完成后重新查找。

## 真实示例

### 1. 从玩家家族取得王国并找出最强成员家族

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;

Clan playerClan = Clan.PlayerClan;
Kingdom playerKingdom = playerClan?.Kingdom;   // Clan.Kingdom 即所属王国

if (playerKingdom != null && !playerKingdom.IsEliminated)
{
    Clan strongestClan = playerKingdom.Clans
        .Where(clan => !clan.IsEliminated)
        .OrderByDescending(clan => clan.CurrentTotalStrength)
        .FirstOrDefault();
}
```

成员列表属于当前王国对象图，且 `playerKingdom` 可能在退盟或读档时变为 `null`；不要把结果保存成跨战役引用。

### 2. 通过当前 Models 读取宣战评分（只读，不提交）

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.Localization;

if (Campaign.Current != null && Clan.PlayerClan?.Kingdom != null)
{
    Kingdom source = Clan.PlayerClan.Kingdom;
    Kingdom target = Kingdom.All.FirstOrDefault(
        k => k != source && !k.IsEliminated);

    if (target != null)
    {
        TextObject reason;
        float score = Campaign.Current.Models.DiplomacyModel.GetScoreOfDeclaringWar(
            source, target, Clan.PlayerClan, out reason, includeReason: true);
        // 仅得到评分；真正宣战仍需 DeclareWarAction.ApplyByDefault(source, target)
    }
}
```

这段代码只读取装配好的 `DiplomacyModel`；得到分数后世界变化须由游戏流程或相应 `DeclareWarAction` 提交。

### 3. 正确地宣战 / 议和（走 Action，不碰集合）

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

// 两个 IFaction（Kingdom 即 IFaction 实现）
IFaction a = Clan.PlayerClan.Kingdom;
IFaction b = Kingdom.All.FirstOrDefault(k => k != a && !k.IsEliminated);

if (a != null && b != null && !a.IsAtWarWith(b))
{
    DeclareWarAction.ApplyByDefault(a, b);   // 提交战争关系 + 事件级联
}

// 议和（如已交战）
if (a != null && b != null && a.IsAtWarWith(b))
{
    MakePeaceAction.Apply(a, b);             // 移除战争关系 + 事件级联
}
```

`ApplyByDefault` / `Apply` 是官方提交入口；直接改 `FactionsAtWarWith` 或 stance 集合会被外交模型与 UI 忽略，并破坏存档一致性。

## 版本注记

本页以 v1.4.5 的 `Kingdom.cs`、`KingdomManager.cs`、`DiplomacyModel.cs` 及 `TaleWorlds.CampaignSystem.Actions` 下各 Action 源码为准。跨版本 mod 应重新确认 `KingdomDecision` 决策类型、军队创建参数与外交 Action 的原因枚举（`ApplyBy*`），不要把旧版本的直接 setter 行为当作完整 API。

## 导航

- ↑ 父级：[战役 API 索引](../)
- ↔ 同级：[Campaign](../Campaign) · [Clan](../Clan) · [Hero](../Hero) · [Settlement](../Settlement) · [MobileParty](../MobileParty) · [PartyBase](../PartyBase) · [Army](../Army) · [KingdomManager](../KingdomManager) · [KingdomDecision](../KingdomDecision) · [CampaignEvents](../CampaignEvents) · [DiplomacyModel](../DiplomacyModel)
- 相关 Action：[DeclareWarAction](../../campaign-ext/DeclareWarAction) · [MakePeaceAction](../../campaign-ext/MakePeaceAction) · [ChangeRulingClanAction](../../campaign-ext/ChangeRulingClanAction) · [DestroyKingdomAction](../../campaign-ext/DestroyKingdomAction)
- 基类：[MBObjectBase](../../core/MBObjectBase)
