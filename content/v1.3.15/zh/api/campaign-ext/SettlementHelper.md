---
title: "SettlementHelper"
description: "聚落侧门面：按部队或地图坐标查找最近的聚落/藏身处/城镇/村庄/要塞，随机选择，名望生成，以及守军数值解释。"
---
# SettlementHelper

**Namespace:** `Helpers`
**Module:** Helpers（TaleWorlds.CampaignSystem 程序集内）
**Type:** `public static class SettlementHelper`
**Base:** 无（静态类）
**Source:** `TaleWorlds.CampaignSystem/Helpers/SettlementHelper.cs`

## 概述

`SettlementHelper` 是 `Helpers` 命名空间里的聚落侧门面，与 [HeroHelper](../HeroHelper/)、[CharacterHelper](../CharacterHelper/)、[FactionHelper](../FactionHelper/)、[DiplomacyHelper](../DiplomacyHelper/) 并列。它的主体是一族二十个"找最近的……"方法，按起点（一个聚落、一支移动部队，或一个地图坐标）以及一个 `Func<Settlement, bool>` 过滤器参数化：村庄、城镇、城堡、要塞、藏身处，外加"最远的"与"部队周围的下一个"变体。围绕它们的是随机选择辅助方法（`FindRandomSettlement`、`FindRandomHideout`、`GetRandomTown`）、聚落内容辅助方法（`SpawnNotablesIfNeeded`、`GetAllHeroesOfSettlement`、`IsGarrisonStarving`、`GetGarrisonChangeExplainedNumber`、`TakeEnemyVillagersOutsideSettlements`）以及评分辅助方法（`GetBestSettlementToSpawnAround`、`GetNeighborScoreForConsideringClan`）。

三十多个公开成员，全部为 `static`，分布在 760 行里。它们几乎**全都是对某个聚落列表的完整线性扫描**，因此单次调用是 O(n)，适合偶尔调用几次——不适合逐 agent，也不适合逐帧。其中两个（`SpawnNotablesIfNeeded`、`TakeEnemyVillagersOutsideSettlements`）会修改战役状态。和兄弟们一样，命名空间是裸的 `Helpers`，所以 `using Helpers;` 是必需的。

## 心智模型

把 `SettlementHelper` 理解成**"聚落查找工具箱——每次查询都是全量扫描，每个答案都尊重你的导航类型"**：

- **mod 里的典型调用顺序。** 通过 [CampaignGameStarter](../CampaignGameStarter/) 注册一个 [CampaignBehaviorBase](../CampaignBehaviorBase/)，在 `RegisterEvents` 里订阅 [CampaignEvents](../CampaignEvents/)，然后在每日/每小时 tick 上向 `SettlementHelper` 询问某支部队附近最近的匹配聚落，或某个聚落里有哪些英雄。这个辅助类本身没有注册或拆卸流程。
- **`navCapabilities` 参数正是这些距离方法的重点。** 所有针对移动部队的 `FindNearest*` 重载都会把 `navCapabilities` 传给 `DistanceHelper.FindClosestDistanceFromMobilePartyToSettlement`，后者同时返回可达距离与最短路径边距离。传 `MobileParty.NavigationType.All` 得到的是"世界上最近的"；传一个仅陆路的标志集合，则让一支被困内陆的部队找到最近的**可达**聚落而不是隔海的。搞错它是使用这些方法时最常见的功能性缺陷。
- **`condition` 谓词作用于 `Settlement`，而不是子类型对象。** `FindNearestHideoutToMobileParty` 把 `hideout.Settlement` 传给谓词，之后才返回 `settlement.Hideout`。针对 `Hideout` 属性写的谓词会静默地永不匹配。所有 `FindNearest*` 重载都是如此。
- **坑：城镇/藏身处变体返回子类型，其余返回 `Settlement`。** `FindNearestTownToMobileParty` 返回 `Town`，`FindNearestHideoutToMobileParty` 返回 `Hideout`；`FindNearestVillageToMobileParty` 返回 `Village`；而 `FindNearestSettlement*`、`FindNearestCastle*`、`FindNearestFortification*` 返回 `Settlement`。在写 `var x = ...;` 并假定 `x.Settlement` 存在之前，请先看返回类型。
- **坑：`null` 意味着"没匹配上"，不是"没有数据"。** 每个 `FindNearest*` 在谓词匹配不到任何东西时返回 `null`。`FindRandomInternal` 在过滤后候选列表为空时返回 `null`。`GetRandomTown` 在该派系没有城镇/村庄时返回 `null`，计数为 0 时也是如此。永远要对 null 分支处理。
- **坑：`FindRandomInternal` 无条件解引用 `condition`。** `FindRandomSettlement(null)` 与 `FindRandomHideout(null)` 会把 `null` 传给 `FindRandomInternal`，而后者调用 `condition(settlement)`——直接 `NullReferenceException`。默认参数写着 `= null`，但实现并不容忍它。请始终传入谓词（或 `s => true`）。
- **坑：`GetRandomTown` 有一个偏一缺陷，只有一个候选时可能返回 `null`。** 它把候选计数进 `num`，掷出 `MBRandom.RandomInt(0, num - 1)`，再遍历候选递减。当恰好只有一个候选时，`RandomInt(0, 0)` 加上遍历可能错过它；`num == 0` 时那次掷法本身就是 `RandomInt(0, -1)`。把它的 null 返回当作正常情况，始终判空。
- **`SpawnNotablesIfNeeded` 是一个有模型意图的修改成员。** 它把 `settlement.Notables.Count` 与对聚落允许职业求和得到的 `Campaign.Current.Models.NotableSpawnModel.GetTargetNotableCountForSettlement(...)` 作比较，在缺口概率掷中时随机生成。它大量消耗 `MBRandom`。

### 何时使用

**使用 `SettlementHelper` 的场景：**
- 你需要相对于某支部队或某个地图坐标、最近的某类聚落，并且要尊重导航（`FindNearestVillageToMobileParty`、`FindNearestTownToPoint`、`FindNearestFortificationToSettlement` 等）。
- 你需要部队沿其路线实际能到达的下一个聚落：`FindNextSettlementAroundMobileParty` 给你一个可迭代的 `Settlement.All` 下标。
- 你需要"随便某个聚落，任意聚落，符合 X 即可"：`FindRandomSettlement`、`FindRandomHideout`、`GetRandomTown`。
- 你需要某个聚落里的所有人：`GetAllHeroesOfSettlement(settlement, includePrisoners)`。
- 你需要聚落范围的状态检查：`IsGarrisonStarving`、`GetGarrisonChangeExplainedNumber`。
- 你需要英雄或名望的生成目标：`GetBestSettlementToSpawnAround`、`SpawnNotablesIfNeeded`。

**不要用 `SettlementHelper` 的场景：**
- 你需要修改聚落*状态*（繁荣、粮食、忠诚、归属）。那些是 `*Action.Apply` 与聚落/城镇模型——这个类是查找与生成的门面。
- 你需要在热循环里找最近聚落。每个方法都是全量扫描；热路径请用 `Settlement.StartFindingLocatablesAroundPosition` 空间索引。
- 你想要某个英雄的位置。那是 [HeroHelper](../HeroHelper/) 的 `GetClosestSettlement`，它本身又把大部分距离工作委派到这里。
- 你需要聚落归属或派系立场。那是 [FactionHelper](../FactionHelper/) 与 [DiplomacyHelper](../DiplomacyHelper/)。
- 你想把这些结果存进档。这里什么都不序列化；请自己保存需要的东西。

## 依赖关系

- [Settlement](../../campaign/Settlement/) — 通用返回类型，也是多数方法扫描的列表（`Settlement.All` 或 `Campaign.Current.Settlements`）。
- [MobileParty](../../campaign/MobileParty/) — 部队相对方法的起点对象，以及定义可达性的 `NavigationType` 参数。
- [DistanceHelper](../DistanceHelper/) — `FindClosestDistanceFromMobilePartyToSettlement` 是每个最近查找背后真正的距离计算。
- [HeroHelper](../HeroHelper/) — `GetClosestSettlement` 会调用这里的 `FindNearestSettlementToMobileParty` / `FindNearestSettlementToSettlement`。
- [DiplomacyHelper](../DiplomacyHelper/) — `GetBestSettlementToSpawnAround` 调用它的 `IsSameFactionAndNotEliminated` 来给盟友聚落加权。
- [FactionHelper](../FactionHelper/) — clan/王国侧兄弟类；提供 `GetRandomTown` 过滤所用的派系成员问题。
- [CharacterHelper](../CharacterHelper/) — 角色侧兄弟类；与名望模板生成的共享逻辑。
- [MapDistanceModel](../MapDistanceModel/) — 战役其他地方（包括 `HeroHelper.GetClosestSettlement` 内部）一致的距离语义模型。
- [Town](../../campaign/Town/) — `FindNearestTownTo*` 遍历 `Town.AllTowns` 并返回 `Town`；`IsGarrisonStarving` 与 `GetGarrisonChangeExplainedNumber` 接收 `Town`。
- [Hideout](../Hideout/) — `FindNearestHideoutTo*` 遍历 `Hideout.All` 并返回 `Hideout`。
- [Village](../../campaign/Village/) — `FindNearestVillageTo*` 遍历 `Village.All` 并返回 `Village`。
- [LocationComplex](../LocationComplex/) 与 [LocationCharacter](../LocationCharacter/) — 名望生成写入的聚落地点列表。
- [Campaign](../../campaign/Campaign/) — `Campaign.Current.Settlements`、`Campaign.MapDiagonal` 与 `Campaign.Current.Models.NotableSpawnModel` 是多数成员背后的实时读取。
- [CampaignEvents](../CampaignEvents/) — 你的 Behavior 在调用本辅助类之前订阅的 dispatcher。
- [CampaignBehaviorBase](../CampaignBehaviorBase/) — 调用方代码通常住的地方。

## 主要成员

#### `public static Settlement FindNearestSettlementToMobileParty(MobileParty mobileParty, MobileParty.NavigationType navCapabilities, Func<Settlement, bool> condition = null)`

相对一支部队的通用最近聚落查找。
- **算法：** 初始化 `best = Campaign.MapDiagonal * 2f`；遍历 `Settlement.All`；对每个通过谓词的聚落调用 `DistanceHelper.FindClosestDistanceFromMobilePartyToSettlement(mobileParty, settlement, navCapabilities, out _)`，保留最小值。
- **返回值语义：** 满足谓词且最近的聚落，一个都没有则 `null`。距离调用的 `out` 参数（最短路径边距离）在此被丢弃——只用总距离。
- **坑：** `condition` 的默认值 `null` 在这里被正确处理（`condition == null || condition(s)`），不像 `FindRandomSettlement`。这里传 `null` 是安全的。
- **坑：** 初始界 `MapDiagonal * 2f` 是哨兵值而不是真实距离。若地图大到合法距离超过它，会静默地得到 `null`。
- **开销：** O(`Settlement.All`)，每次还带一次路径感知距离计算。不要逐 agent 调用。

#### `public static Settlement FindNearestSettlementToSettlement(Settlement fromSettlement, MobileParty.NavigationType navCapabilities, Func<Settlement, bool> condition = null)`

聚落到聚落的变体。扫描形状、谓词处理、`MapDiagonal * 2f` 哨兵都相同。
- **坑：** 它**不会**排除 `fromSettlement` 自身。若没有其他匹配，`fromSettlement` 可能作为自己的最近邻居被返回。必要时在谓词里加 `s => s != fromSettlement`。

#### `public static Settlement FindNearestSettlementToPoint(in CampaignVec2 point, Func<Settlement, bool> condition = null)`

直线距离变体，**没有**导航类型。
- **算法：** 扫描 `Settlement.All`，比较 `settlement.Position.Distance(point)`，保留最小值。
- **返回值语义：** 按**欧氏**距离最近的聚落，忽略地形、河流与部队移动类型。
- **坑：** 它不是"部队最先能到达的地方"。只把它用于纯几何问题（小地图标记、评分），绝不要用于 AI 行军决策。
- **坑：** `point` 是 `in CampaignVec2`；一个未初始化（无效）的坐标只会给出无意义的距离，而不是异常。

#### `public static Settlement FindNearestFortificationToSettlement(...)` / `FindNearestFortificationToMobileParty(...)` / `FindFurthestFortificationToSettlement(MBReadOnlyList<Town> candidates, MobileParty.NavigationType navCapabilities, Settlement fromSettlement, out float furthestDistance)`

要塞搜索，包含"最远"变体。
- **返回值语义：** `FindFurthestFortificationToSettlement` 把胜出的距离写进 `out furthestDistance` 并返回该聚落——这个距离才是这个问题答案里真正有用的另一半。
- **坑：** 它接收显式的 `MBReadOnlyList<Town> candidates`，所以候选集是**你**给的，而不是 `Town.AllFiefs`。传空列表会得到 `null` 以及一个未写入/无意义的 `furthestDistance`。
- **坑：** `FindNearestFortification*` 在内部按 `IsFortification` 过滤（城堡与城镇）；它并不排除藏身处。

#### `public static Settlement FindNearestCastleToSettlement(...)` / `FindNearestCastleToMobileParty(...)`

仅城堡的变体，按 `IsCastle` 过滤。
- **坑：** 城镇**不是**城堡。当你想要"一般的有城墙聚落"时请用 `FindNearestFortification*`。

#### `public static Village FindNearestVillageToSettlement(...)` / `FindNearestVillageToMobileParty(...)` / `public static Town FindNearestTownToSettlement(...)` / `public static Town FindNearestTownToMobileParty(...)` / `public static Hideout FindNearestHideoutToSettlement(...)` / `public static Hideout FindNearestHideoutToMobileParty(...)`

按子类型扫描并返回子类型对象。
- **算法（藏身处）：** 遍历 `Hideout.All`；对 `hideout.Settlement` 应用谓词；保留最小距离；随后返回 `settlement.Hideout`（做了 null 安全处理：没匹配上就返回 `null`）。城镇与村庄变体分别是 `Town.AllTowns` 与 `Village.All` 上的同形逻辑。
- **返回值语义：** 没匹配上时为 `null`。由于谓词作用于 `.Settlement`，`s => s.Hideout != null` 这种能工作，但针对藏身处专有成员的谓词不能。
- **坑：** 这是三个不同的迭代池。被 mod 改过类型的村庄（例如城堡转成村庄）会从城堡池消失、出现在村庄池里。
- **开销：** 每个都是对它自己那个池的全量扫描，外加路径感知距离计算。

#### `public static int FindNextSettlementAroundMobileParty(MobileParty mobileParty, MobileParty.NavigationType navCapabilities, float maxDistance, int lastIndex, Func<Settlement, bool> condition = null)`

在 `maxDistance` 内按 `Settlement.All` 顺序遍历聚落的游标。
- **算法：** 对 `i` 从 `lastIndex + 1` 到 `Settlement.All.Count - 1`，在第一个既通过谓词又最近距离小于 `maxDistance` 的聚落处返回 `i`；扫描耗尽则返回 `-1`。
- **返回值语义：** 一个**指向 `Settlement.All` 的下标**，不是聚落。`-1` 是终止符。把它作为 `lastIndex` 传回去以继续下一次调用。
- **坑：** 顺序是 `Settlement.All` 顺序，由数据驱动且不按距离排序。若要"最近优先"，必须自己完整扫描。
- **坑：** 它一旦找到**任意**匹配就返回，所以把返回值当下标持续调用的调用方，在最坏情况下每一步都要做一次 O(n) 全扫。

#### `public static Settlement FindRandomSettlement(Func<Settlement, bool> condition = null)` / `FindRandomHideout(Func<Settlement, bool> condition = null)`

均匀随机的聚落（或藏身处）。
- **算法（共享的私有 `FindRandomInternal`）：** 构建一个包含所有通过 `condition` 的 `List<Settlement>`；非空时返回 `list[MBRandom.RandomInt(list.Count)]`；否则 `null`。
- **坑——重要的一条：** `FindRandomInternal` 调用 `condition(settlement)` 时**没有 null 检查**，所以用文档写明的 `= null` 默认值调用 `FindRandomSettlement()` 会抛 `NullReferenceException`。请始终传入谓词（不过滤就用 `_ => true`）。
- **坑：** 会消耗随机数，因此不可复现。
- **坑：** 构建列表是按池大小额外分配一次。不要逐帧调用。
- `FindRandomHideout` 在 `Hideout.All` 上跑同样形状，然后转成 `hideout.Settlement`，所以它返回的是一个 `Hideout` 非空的 `Settlement`。

#### `public static Settlement GetRandomTown(Clan fromFaction = null)`

随机一个城镇或村庄，可按派系限制。
- **算法：** 在 `Campaign.Current.Settlements` 上统计匹配项（`IsTown || IsVillage`，可选 `MapFaction == fromFaction`）得到 `num`；掷出 `MBRandom.RandomInt(0, num - 1)`；遍历同样的候选并递减，返回跨过零的那一个。
- **返回值语义：** 一个是城镇或村庄的 `Settlement`，没有匹配时为 `null`。
- **坑：** `num == 0` 时 `RandomInt(0, num - 1)` 就是 `RandomInt(0, -1)`；而排他上界意味着单候选池也可能掷出未命中并返回 `null`。null 是正常的；务必判空。
- **坑：** 派系过滤是 `settlement.MapFaction == fromFaction`，也就是**地图**派系。一个在地图上没有任何领地的 clan 会匹配不到任何东西，哪怕它有 `HomeSettlement`。

#### `public static bool IsGarrisonStarving(Settlement settlement)`

城镇的守军是否真的在挨饿，而不只是食物为负。
- **算法：** 仅当 `settlement.IsStarving` **且** `settlement.Town.FoodChange < -(settlement.Town.Prosperity / Campaign.Current.Models.SettlementFoodModel.NumberOfProsperityToEatOneFood)` 时返回 true。
- **返回值语义：** 一个比单看 `settlement.IsStarving` 更严格的信号。城镇可以处于饥荒状态却仍养得起守军，只要它的繁荣度足够高。
- **坑：** 它无条件解引用 `settlement.Town`——传村庄或城堡（它们没有 `Town`）会抛异常。
- **坑：** 它除以食物模型的 `NumberOfProsperityToEatOneFood`；模型返回 `0` 会除零得到无穷。

#### `public static IEnumerable<Hero> GetAllHeroesOfSettlement(Settlement settlement, bool includePrisoners)`

实际在场的所有英雄。
- **算法（yield 顺序）：** `settlement.Parties` 中每个部队的 `LeaderHero`；然后是 `settlement.HeroesWithoutParty` 的每一位；然后若 `includePrisoners`，是 `settlement.Party.PrisonRoster` 中 `TroopRosterElement.Character.IsHero` 的每位囚犯。
- **返回值语义：** 一个惰性 `IEnumerable<Hero>`。空聚落得到空序列（绝不是 `null`）。若某英雄同时以部队领袖和别的身份出现，**可能出现重复**。
- **坑：** 部队分支只 yield `LeaderHero`，不是每个来访部队里的每个英雄。要拿到来访部队里的同伴，你需要 `party.Party.LeaderHero` 再自己遍历名册。
- **坑：** 囚犯分支只包含 `IsHero` 的囚犯——也就是只有名望层级的囚犯。

#### `public static void SpawnNotablesIfNeeded(Settlement settlement)`

按概率把聚落的名望名册补到模型目标值。
- **算法：** 只有城镇与村庄参与。城镇目标职业为 `{GangLeader, Artisan, Merchant}`；村庄为 `{RuralNotable, Headman}`。对这些职业求和 `Campaign.Current.Models.NotableSpawnModel.GetTargetNotableCountForSettlement(settlement, occupation)` 得到 `target`；计算 `ratio = (target - Notables.Count) / target`（当 `Notables.Count == 0` 时取 1）；再 `ratio *= pow(ratio, 0.36f)`；掷一个 `MBRandom.RandomFloat`，若 `<= ratio` 则按职业统计现有名望并补足缺口。
- **副作用：** 创建英雄并把他们加入聚落。**大量消耗随机数。**
- **坑：** 若 `target == 0` 而 `Notables.Count > 0`，ratio 会变成负数，`pow(负数, 0.36f)` 得到 `NaN`，于是比较永远不成立、名望不再增长。名望数已超过模型目标的聚落就此停止增长——结果正确，但原因是错的。
- **坑：** 对同一聚落反复调用会一直掷骰；除名望数量本身外它没有"已完成"标志。
- **坑：** 不适用于藏身处或城堡——`IsTown || IsVillage` 这道判断让它们变成静默空操作。

#### `public static ExplainedNumber GetGarrisonChangeExplainedNumber(Town town)`

一个带标签贡献项的逐 tick 守军变化量。
- **算法：** 先 `new ExplainedNumber(0f, true, null)`；向 `Campaign.Current.GetCampaignBehavior<IGarrisonRecruitmentBehavior>()` 取它自己的解释数值，当 `BaseNumber > 0` 时以 `"{=basevalue}Base"` 为标签加入；然后当 `town.GarrisonParty != null` 时，减去 `Campaign.Current.Models.PartyDesertionModel.GetTroopsToDesert(town.GarrisonParty).TotalManCount`，标签为 `"{=ojBJ3aTO}Desertion"`。
- **返回值语义：** 一个 `ExplainedNumber`，其 `Result` 是带符号的变化量，`GetAffectedGameStrings()` 给出解释。
- **坑：** `GetCampaignBehavior<IGarrisonRecruitmentBehavior>()` 返回 null 会在第一次解引用时抛异常。没有注册该 Behavior 的战役根本无法使用这个方法。
- **坑：** 这些标签字符串是带翻译键的内联字面量，而不是 `GameTexts.FindText` 查找——它们不会出现在字符串表导出里。
- **坑：** 只有正的基准贡献才被加入，因此为负的基准招募会从解释里被静默丢掉，尽管 Behavior 本身仍然应用了它。不要把这个解释当成对该变化量的完整审计。

#### `public static float GetNeighborScoreForConsideringClan(Settlement settlement, Clan consideringClan)`

从某个氏族视角出发，为一个要塞打出的防御位置评分。
- **算法：** 仅当 `settlement.MapFaction == consideringClan.MapFaction && settlement.IsFortification` 时才打分。把 `settlement.Town.GetNeighborFortifications(NavigationType.All)` 收集进一个集合；对每个**直接**邻居：若该聚落的地图派系与邻居交战则 `-0.2`，若邻居与考虑者氏族同地图派系则 `+0.1`，否则 `+0.05`。然后对每个邻居的邻居中既不在第一集合也不在第二集合的：与考虑者派系交战则 `-0.04`，同派系 `+0.02`，否则 `+0.01`。
- **返回值语义：** 一个小的带符号 `float`。当聚落不是要塞、或其地图派系与考虑者氏族不同时为 `0f`——所以零表示"不适用"，而不是"中立"。
- **坑：** 分支顺序意味着 `+0.1` 与 `+0.05` 以 `consideringClan.MapFaction` 为键，而 `-0.2` 以 `settlement.MapFaction` 为键。由于入口判断已要求两者相等，它们恰好一致；但**第二**环的正分支用 `consideringClan.MapFaction`、负分支用 `settlement.MapFaction`。在假定对称之前请仔细读。
- **坑：** `0.2 / 0.1 / 0.05 / 0.04 / 0.02 / 0.01` 这些权重是辅助类里的字面量，不是模型值。
- **用途：** 在"选择你的驻地"界面里为氏族排列候选封地。

#### `public static void TakeEnemyVillagersOutsideSettlements(Settlement settlementWhichChangedFaction)`

聚落归属翻转时使用的战役状态修改方法。
- **副作用：** 把属于落败派系的村民迁出该聚落，使用静态的 `StuffToCarryForMan` / `StuffToCarryForWoman` 物品 id 数组以及轮转的 `_stuffToCarryIndex` 字段。
- **坑：** 它修改一个由 `MBRandom.NondeterministicRandomInt` 播种的**静态** `_stuffToCarryIndex`，因此输出不可复现，其行为取决于本进程内它已被调用过多少次。
- **坑：** 它是为归属变更路径写的。对一个并未变更派系的聚落调用它，依然会把村民迁出去。
- **用途：** 只用在你自己的归属变更处理里，紧接在变更动作之后。

#### `public static string GetRandomStuff(bool isFemale)`

村民携带货物用的随机装饰物品 id 字符串。
- **返回值语义：** 一个来自 `StuffToCarryForMan` 或 `StuffToCarryForWoman` 的物品**字符串 id**，由轮转的静态下标选出。
- **坑：** 结果不保证在你的物品 XML 中存在；把它当提示，而不是经过校验的 id。

## 使用示例

### 示例 1 — 为被困内陆的部队找最近的**可达**村庄

```csharp
public Settlement FindRefugeTarget(MobileParty party)
{
    // NavigationType 很关键：NavigationType.All 会欣然返回
    // 隔海那边的聚落。
    return SettlementHelper.FindNearestVillageToMobileParty(
        party,
        MobileParty.NavigationType.AllowAllNavigation,
        s => s.MapFaction != party.MapFaction);
}
```

### 示例 2 — 不额外分配列表地遍历范围内的所有聚落

```csharp
public List<Settlement> GetSettlementsInRange(MobileParty party, float maxDistance)
{
    var found = new List<Settlement>();
    int index = -1;
    // 返回的是指向 Settlement.All 的下标，耗尽时为 -1。
    while ((index = SettlementHelper.FindNextSettlementAroundMobileParty(
                party, MobileParty.NavigationType.AllowAllNavigation, maxDistance, index)) >= 0)
    {
        found.Add(Settlement.All[index]);
    }
    return found;
}
```

### 示例 3 — 随机聚落——注意 API 不容忍的 null 谓词

```csharp
public Settlement PickQuestTarget()
{
    // 不传谓词调用 FindRandomSettlement() 会抛异常——FindRandomInternal
    // 会解引用 condition。永远传一个，哪怕是最简单的那个。
    return SettlementHelper.FindRandomSettlement(s => s.IsVillage && !s.IsUnderRaid);
}
```

### 示例 4 — 聚落里的所有人，包含囚犯

```csharp
public List<Hero> GetEveryoneInside(Settlement settlement)
{
    var heroes = new List<Hero>();
    foreach (Hero hero in SettlementHelper.GetAllHeroesOfSettlement(settlement, includePrisoners: true))
    {
        heroes.Add(hero);
    }
    return heroes;
}
```

### 示例 5 — 用真实的饥荒信号把守 AI 决策

```csharp
public bool ShouldSendGrain(Settlement settlement)
{
    // 只有城镇才有 Town 组件——传村庄在这里会抛异常。
    if (!settlement.IsTown)
    {
        return false;
    }
    return SettlementHelper.IsGarrisonStarving(settlement);
}
```

### 示例 6 — 为氏族排列候选封地

```csharp
public List<Settlement> RankFiefsFor(Clan consideringClan, IEnumerable<Settlement> candidates)
{
    return candidates
        .Where(s => s.IsFortification)
        .OrderByDescending(s => SettlementHelper.GetNeighborScoreForConsideringClan(s, consideringClan))
        .ThenBy(s => s.SettlementTier)
        .ToList();
}
```

## 风险与崩溃边界

- **随机类辅助方法里的 null 谓词崩溃。** `FindRandomInternal` 调用 `condition(settlement)` 时没有 null 保护，所以用文档写明的 `= null` 默认值调用 `FindRandomSettlement()` / `FindRandomHideout()` 会抛 `NullReferenceException`。这是已发布 API 里真实存在的坑，不是误用——请始终传入谓词。
- **`GetRandomTown` 会常态性地返回 `null`。** `num == 1` 时 `MBRandom.RandomInt(0, num - 1)` 可能掷出越界，`num == 0` 时那次掷法就是 `RandomInt(0, -1)`。null 是正常的"没匹配上"答案；要对它分支处理。
- **全量扫描的开销。** 每个 `FindNearest*` 都会遍历一整个聚落池，并对每个候选做一次路径感知的距离计算。在大型 mod 地图上，逐帧或逐 agent 调用是实打实的帧时间开销。热路径请改用 `Settlement.StartFindingLocatablesAroundPosition`。
- **导航类型敏感。** 漏传或传错 `navCapabilities` 会静默返回一个地理最近但**不可达**的聚落。没有错误——只有一个错误答案，表现为 AI 原地绕圈。
- **`IsGarrisonStarving` 要求城镇。** 它无条件解引用 `settlement.Town`；村庄、城堡或藏身处都会抛异常。它还除以 `SettlementFoodModel.NumberOfProsperityToEatOneFood`，被 mod 改成 `0` 就会除零。
- **`GetGarrisonChangeExplainedNumber` 要求已注册的 Behavior。** `Campaign.Current.GetCampaignBehavior<IGarrisonRecruitmentBehavior>()` 返回 null 会立即抛异常。它还会把*负的*基准贡献从解释里静默省略，尽管 Behavior 仍会应用它——这个解释不是完整审计。
- **带隐藏状态的修改成员。** `TakeEnemyVillagersOutsideSettlements` 会推进一个由 `MBRandom.NondeterministicRandomInt` 播种的静态 `_stuffToCarryIndex`；`SpawnNotablesIfNeeded` 会多次掷 `MBRandom`。两者都不可复现，因此都不该出现在联网、回放或确定性路径上。
- **`SpawnNotablesIfNeeded` 的数值边界。** 当 `target == 0` 而名望已存在时，ratio 变负，`pow(ratio, 0.36f)` 得到 `NaN`，比较于是永不成立。名望数已超过模型目标的聚落会就此停止增长。
- **跨域依赖。** 该类位于 `TaleWorlds.CampaignSystem` 的 `Helpers` 命名空间，但返回 `TaleWorlds.Core` 的类型（`ExplainedNumber`、`TextObject`、`CampaignVec2`），并读取 `TaleWorlds.ObjectSystem` 的对象列表（`Town.AllTowns`、`Hideout.All`、`Village.All`）。缺少其中任一引用都是首次调用时的加载期程序集故障，而不是编译错误。
- **加载顺序。** 每个成员都在调用时读取 `Campaign.Current.Settlements`、`Campaign.MapDiagonal` 或 `Campaign.Current.Models.*`。在角色创建、百科预览或编辑器里这些尚未初始化，你会拿到 `NullReferenceException`。任何也会在战役之外运行的代码都要加 `Campaign.Current != null` 判断。
- **存档序列化与 ID 稳定性。** 这里什么都不保存。`FindNextSettlementAroundMobileParty` 给你的是**指向 `Settlement.All` 的下标**，它**不是**稳定标识符：在你的 XML 里插入一个聚落会移动后面所有下标，并静默改变一个已保存游标所指向的聚落。绝不要持久化那个下标——请持久化聚落的 `StringId` 并自行解析。
- **谓词/类型不匹配。** 对于返回子类型的那些重载，谓词收到的是 `Settlement` 而不是 `Hideout`/`Town`/`Village`。针对子类型成员写的谓词永不匹配，产生一个看起来很合理的 `null`。

## 跨版本提示

- **v1.3.x（本页）：** 上述成员集合与 1.3.15 一致，包括 `FindNearestSettlementToPoint(in CampaignVec2, ...)` 与 `GetGarrisonChangeExplainedNumber`。`FindRandomInternal` 的 null 谓词行为如本文所述——这就是 1.3.15 已发布的实现。
- **v1.4.x：** 最近查找这一族在形态上未变，仍然是全量扫描。新版本增加了更多聚落模型；`IsGarrisonStarving` 继续读取 `SettlementFoodModel`，所以它确实会跟随被替换的食物模型——这与 `GetNeighborScoreForConsideringClan` 内部的字面量常量不同。
- **v1.5.x：** 预计会有更多聚落类型和额外的生成辅助方法。可依赖构建的稳定契约是 `FindNearest*ToMobileParty` 这一族（尊重 `NavigationType`，始终给出谓词）加上 `GetAllHeroesOfSettlement`。请把 `GetNeighborScoreForConsideringClan` 内部的权重和 `GetRandomStuff` 内部的物品列表当作版本敏感的实现细节。

## 参见

- ↑ 父级目录：[Campaign-Ext API 索引](./)
- ↔ 同级：[HeroHelper](../HeroHelper/) — `GetClosestSettlement` 把距离工作委派到这里
- ↔ 同级：[FactionHelper](../FactionHelper/) — clan/王国侧兄弟类
- ↔ 同级：[DiplomacyHelper](../DiplomacyHelper/) — `GetBestSettlementToSpawnAround` 使用它的同派系判定
- ↔ 同级：[CharacterHelper](../CharacterHelper/) — 角色侧兄弟类；共享名望模板逻辑
- ↔ 同级：[DistanceHelper](../DistanceHelper/) — 每个查找背后真正的距离计算
- ↔ 同级：[MapDistanceModel](../MapDistanceModel/) — 战役中一致的距离语义
- ↔ 同级：[Hideout](../Hideout/)、[Town](../../campaign/Town/) 与 [Village](../../campaign/Village/) — 扫描所迭代的子类型池
- ↑ Settlement：[Settlement](../../campaign/Settlement/)
- ↑ MobileParty：[MobileParty](../../campaign/MobileParty/)
- ↑ 战役世界：[Campaign](../../campaign/Campaign/)