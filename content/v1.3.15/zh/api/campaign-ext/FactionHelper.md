---
title: "FactionHelper"
description: "氏族与王国门面：战力比、纳贡加权实力、立场枚举、潜在开战对象、玩家加入资格，以及敌对行为拆除。"
---
# FactionHelper

**Namespace:** `Helpers`
**Module:** Helpers（TaleWorlds.CampaignSystem 程序集内）
**Type:** `public static class FactionHelper`
**Base:** 无（静态类）
**Source:** `TaleWorlds.CampaignSystem/Helpers/FactionHelper.cs`

## 概述

`FactionHelper` 是 `Helpers` 命名空间里 clan/王国侧的门面——[DiplomacyHelper](../DiplomacyHelper/)、[HeroHelper](../HeroHelper/)、[SettlementHelper](../SettlementHelper/) 和 [CharacterHelper](../CharacterHelper/) 的兄弟类。约四十个公开成员分属五个方向：**实力计算**（`FindPotentialStrength`、`GetTotalEnemyKingdomPower`、`GetPowerRatioToEnemies`、`GetPowerRatioToTributePayedKingdoms` 以及守军规模常量）、**立场枚举**（`GetStances`、`GetEnemyKingdoms`）、**名称校验与生成**（`IsClanNameApplicable`、`IsKingdomNameApplicable`、`GenerateClanNameforPlayer`、`GetAdjectiveForFaction`）、**玩家加入资格**（`CanPlayerEnterFaction`、`CanPlayerOfferVassalage`、`CanPlayerOfferMercenaryService`）以及**状态拆除**（`FinishAllRelatedHostileActions*`、`AdjustFactionStancesForClanJoiningKingdom`）。

几乎所有成员都是纯查询，但有相当一部分**会修改状态**——`AdjustFactionStancesForClanJoiningKingdom` 内部的 `MakePeaceAction.Apply`、`FinishAllRelatedHostileActions*` 系列里的 `SetMoveModeHold`，以及 `StanceLink.ResetPeaceStats` 调用。请把它看作带一条很重写边界的查询门面，在调用任何修改类之前先读"主要成员"里的说明。命名空间是裸的 `Helpers`，因此 `using Helpers;` 是必需的。

## 心智模型

把 `FactionHelper` 理解成**"AI 与外交界面共享的政治算术层"**：

- **mod 里的典型调用顺序。** 通过 [CampaignGameStarter](../CampaignGameStarter/) 注册一个 [CampaignBehaviorBase](../CampaignBehaviorBase/)，在 `RegisterEvents` 里订阅 [CampaignEvents](../CampaignEvents/)，然后在每日/每小时 tick 上向 `FactionHelper` 提问，例如"玩家能否加入这个王国"或"我的敌人有多强"。资格类方法同时返回判定*和*两个 `out` 列表，所以自然的调用方式是同一帧内先判定、再解释。
- **两种不同的"实力"数字，切勿混用。** `FindPotentialStrength(faction)` 是*静态*的、基于 tier 的数字：每个 clan `tier * 100`，佣兵 clan 按王国领袖的富裕程度打折，最后乘 2。`Kingdom.CurrentTotalStrength` 则是*实时*数字。`GetPowerRatioToEnemies` 用实时实力除以实时敌方实力；`GetPowerRatioToTributePayedKingdoms` 用实时实力除以一个纳贡加权的混合值。它们回答不同的问题，在正常战役里就会给出不一致的答案。
- **`GetStances` 是枚举骨架。** 它遍历 `Kingdom.All` 再遍历 `Clan.All`，返回所有非空的 `GetStanceWith(...)`。另有四个方法建立在它之上（`GetTotalTributePayedKingdomsPower`、`AdjustFactionStancesForClanJoiningKingdom`，以及间接依赖它的敌对拆除），所以一个看似简单的调用背后是 O(王国数 × 氏族数) 的立场查找。
- **坑：资格类方法收的是 `Kingdom` 而不是 `IFaction`。** `CanPlayerOfferVassalage` 与 `CanPlayerOfferMercenaryService` 需要 `Kingdom`。传 `Clan` 最好的情况是编译期类型不匹配；如果你强行转型，`GetStanceWith` 式的假设会静默失效，因为 clan 在王国意义上没有 `Leader`。
- **坑：即使返回 `false`，`out` 列表也总是被填好了。** 两个资格方法都在返回判定**之前**构建 `playerWars` 和 `warsOfFactionToJoin`。返回 `false` 时你依然拿到了原因数据——请用它做提示，而不是自己重算。
- **坑：`IsMainClanMemberAvailableFor*` 会产出本地化的解释文本，你必须把它显示出来。** 四个 `IsMainClanMemberAvailableFor{Recall,PartyLeaderChange,SendingSettlement,SendingSettlementAsGovernor}` 方法都返回 `bool` 加一个 `out TextObject explanation`。忽略这个 `out` 会让玩家看到一个灰掉却没有理由的按钮。这些文本带有 `=xxx` 翻译键，因此它们随游戏文本表本地化，而不是用 mod 提供的字符串。
- **坑：`FinishAllRelatedHostileActions*` 系列会深深伸进活动中的地图事件。** 它们会设置 `MapEvent.DiplomaticallyFinished`、遍历 `WarPartyComponents`，并对移动部队调用 `SetMoveModeHold()`。在战斗进行中调用会立刻改变 AI 行为，而且除了打完这场战斗之外无法回退。

### 何时使用

**使用 `FactionHelper` 的场景：**
- 你需要展示或把守一个政治选项：玩家能否加入派系、宣誓效忠或提供雇佣兵服务（`CanPlayerEnterFaction`、`CanPlayerOfferVassalage`、`CanPlayerOfferMercenaryService`）。
- 你需要一个战力比，用于提示框、评分或 AI 闸门（`GetPowerRatioToEnemies`、`GetPowerRatioToTributePayedKingdoms`、`FindPotentialStrength`）。
- 你需要枚举立场、敌人、军队或潜在开战伙伴（`GetStances`、`GetEnemyKingdoms`、`GetKingdomArmies`、`GetPossibleKingdomsToDeclareWar`、`GetPossibleKingdomsToDeclarePeace`）。
- 你需要守军规模模型常量，好让自己的聚落算法与原版一致（`SettlementProsperityEffectOnGarrisonSizeConstant`、`SettlementFoodPotentialEffectOnGarrisonSizeConstant`、`OwnerClanEconomyEffectOnGarrisonSizeConstant`、`FindIdealGarrisonStrengthPerWalledCenter`）。
- 你需要氏族创建界面的名称合法性校验（`IsClanNameApplicable`、`IsKingdomNameApplicable`），或文化/派系命名文本（`GetFormalNameForFactionCulture`、`GetAdjectiveForFaction`、`GetTermUsedByOtherFaction`）。
- 你要合并氏族进王国或拆除敌对关系，并需要与原版完全一致的立场修正。

**不要用 `FactionHelper` 的场景：**
- 你想要自己手里那一条立场，或开战归因判定。那是 [DiplomacyHelper](../DiplomacyHelper/)。
- 你想直接改变关系。请用 [MakePeaceAction](../MakePeaceAction/)、`DeclareWarAction` 以及其他 `*Action.Apply` 类。`AdjustFactionStancesForClanJoiningKingdom` 看起来像 setter，其实是一个*修正步骤*，应当在加入动作之后立刻运行。
- 你想要聚落邻近度或地理信息。那是 [SettlementHelper](../SettlementHelper/)；这里的 `GetMidSettlementOfFaction` 和 `GetDistanceToClosestNonAllyFortificationOfFaction` 是仅有的两个地理相关方法。
- 你想要领主级别的答案（"我能不能召回这个英雄"）。那是 `HeroHelper` 加上你自己的部队逻辑；这里的 `IsMainClanMemberAvailableFor*` 专门针对玩家 clan 的*成员*。
- 你需要一个可存档的这些答案缓存。这里没有任何东西会被序列化；请自己把数字存进 `SyncData([IDataStore](../IDataStore/))`。

## 依赖关系

- [Kingdom](../../campaign/Kingdom/) — 多数成员期待的 `IFaction` 具体实现；提供 `CurrentTotalStrength`、`Armies`、`Clans`、`Leader`、`InitialHomeSettlement`。
- [Clan](../../campaign/Clan/) — `Tier`、`IsUnderMercenaryService`、`HomeSettlement`、`Settlements`、`NonBanditFactions`，以及资格方法里的玩家 clan 闸门。
- [StanceLink](../StanceLink/) — `GetStances` 的返回类型，也是纳贡/实力算法遍历的对象；提供 `IsNeutral`、`IsAtWar`、`GetDailyTributeToPay`、`ResetPeaceStats`。
- [DiplomacyHelper](../DiplomacyHelper/) — 同一命名空间里的开战归因与战俘对应物。
- [HeroHelper](../HeroHelper/) — 领主侧门面；`Hero.MainHero` 是多数资格检查里隐含的玩家。
- [DiplomacyModel](../DiplomacyModel/) — 提供 `IsAtConstantWar`、`GetStrengthThresholdForNonMutualWarsToBeIgnoredToJoinKingdom` 和 `MinimumRelationWithConversationCharacterToJoinKingdom`。
- [ClanTierModel](../ClanTierModel/) — 提供 `VassalEligibleTier` 与 `MercenaryEligibleTier`，即两个加入方法里的 tier 闸门。
- [MakePeaceAction](../MakePeaceAction/) — 加入的 clan 有自己的战争、而王国没有时，`AdjustFactionStancesForClanJoiningKingdom` 所执行的动作。
- [FactionManager](../FactionManager/) — `GetPossibleKingdomsToDeclareWar` 使用的底层"是否交战"判定。
- [MapEvent](../MapEvent/) — `FinishAllRelatedHostileActions*` 系列通过 `DiplomaticallyFinished` 与 `Update()` 修改的对象。
- [WarPartyComponent](../WarPartyComponent/) — 在敌对行为结束后被要求停驻的围城部队。
- [Army](../Army/) — `GetKingdomArmies` 的返回类型。
- [CultureObject](../CultureObject/) — 所有派系/文化命名文本查找的键。
- [NameGenerator](../NameGenerator/) — 玩家文化不是 Vlandia 时被 `GenerateClanNameforPlayer` 使用。
- [Town](../../campaign/Town/) — 繁荣/食物守军常量以及 `GetNeighborScoreForConsideringClan` 的要塞邻居的输入。
- [Hero](../../campaign/Hero/) — 资格算法中的 `Hero.MainHero.Gold`、`MapFaction`、`Leader.GetRelationWithPlayer`。
- [Campaign](../../campaign/Campaign/) — `Campaign.Current.Models.*` 与 `Campaign.Current.Settlements` 是多数成员背后的实时读取。
- [CampaignBehaviorBase](../CampaignBehaviorBase/) — 调用这个门面的代码通常住的地方。

## 主要成员

#### `public static float FindPotentialStrength(IFaction faction)`

一个*静态*的、基于 tier 的实力数字，与当前军队无关。
- **算法：** 对王国派系，遍历 `kingdom.Clans`，每个 clan 的 `tier * 100` 在该 clan `IsUnderMercenaryService` 时乘以 `0.3`（当领袖金币不足 100000 时再线性降到 `0.3 - (1 - leaderGold/100000) * 0.3`），累加；对氏族派系则取 `clan.Tier * 100`；最后整体乘 2。
- **返回值语义：** 一个大致与 `CurrentTotalStrength` 同量级但**并非同一物理量**的 `float`。既不是王国也不是氏族的派系得到接近 0 的值。
- **坑：** 它会读 `kingdom.Leader.Gold`，所以一个损坏的王国若 `Leader` 为 null 就会抛异常。
- **坑：** 佣兵折扣的 0.3 是硬编码常量而非模型值。被 mod 改过的佣兵系统在这里不会体现。

#### `public static float GetPowerRatioToEnemies(Kingdom kingdom)` / `GetTotalEnemyKingdomPower(Kingdom kingdom)`

王国实时实力除以其敌方王国的实时实力之和。
- **算法：** `kingdom.CurrentTotalStrength / (GetTotalEnemyKingdomPower(kingdom) + 0.0001f)`；分母对 `GetEnemyKingdoms(kingdom)`（即 `FactionsAtWarWith` 中 `IsKingdomFaction` 的条目）累加 `CurrentTotalStrength`。
- **返回值语义：** 一个比值，`> 1` 表示该王国的火力压过敌人。当**没有**敌方王国时分母为 `0.0001f`，你会得到一个巨大的数字，而不是无穷或异常。
- **坑：** `false` 之后紧跟一个巨大比值，很容易被 UI 直接显示成"1000000 : 1"。请先截断。
- **坑：** `CurrentTotalStrength` 是实时值，因此它每个 tick 都在变。不要拿它当稳定键使用。

#### `public static float GetPowerRatioToTributePayedKingdoms(Kingdom kingdom)` / `GetTotalTributePayedKingdomsPower(Kingdom kingdom)`

实时实力除以一个*纳贡加权*的"本方所供养王国"度量。
- **算法（分母）：** 遍历 `GetStances(kingdom)`；对每个 `IsNeutral` 的立场取 `GetDailyTributeToPay(kingdom)`；当该值为**负**（即本方收取纳贡）时加上 `sqrt(min(1, -dailyTribute / 4000)) * faction.CurrentTotalStrength`。比值则是 `CurrentTotalStrength / (该值 + 0.0001f)`。
- **返回值语义：** 一个比值，`> 1` 的约定同上。`-dailyTribute / 4000` 这一项在每日 4000 金处饱和——超过这个数额的纳贡不再增加权重。
- **坑：** 只有 `IsNeutral` 的立场参与计算。处于战争中的附庸不贡献任何权重，而**付出**纳贡的立场（`dailyTribute > 0`）则被直接跳过。
- **坑：** `GetStances` 会遍历每个王国和每个氏族，所以每次调用都是 O(派系数)。

#### `public static IEnumerable<StanceLink> GetStances(IFaction faction)`

`faction` 与任何其他王国或氏族之间的全部非空立场链接。
- **算法：** 遍历 `Kingdom.All` 跳过 `faction` 自身，再遍历 `Clan.All` 跳过 `faction`，调 `GetStanceWith(other)` 并保留非空结果。
- **返回值语义：** 一个全新的 `List<StanceLink>`，绝不是 `null`，只包含真实存在的立场。没有立场关系的派系会直接缺席——不存在"默认为中立"的条目。
- **开销：** O(王国数 + 氏族数)，每次带一次字典式查找。用于逐帧 UI 没问题，放进逐 agent 循环就有问题。
- **坑：** 自身是靠引用比较排除的。传入一个对象标识与 `Kingdom.All` 里不同的派系（被克隆/重建的派系）会得到一个空列表外加一次自立场尝试。

#### `public static IEnumerable<Kingdom> GetEnemyKingdoms(IFaction faction)` / `List<IFaction> GetPossibleKingdomsToDeclareWar(Kingdom kingdom)` / `GetPossibleKingdomsToDeclarePeace(Kingdom kingdom)`

敌人与候选伙伴列表。
- `GetEnemyKingdoms` 把 `faction.FactionsAtWarWith` 过滤出 `IsKingdomFaction` 的条目并转型为 `Kingdom`，返回惰性 `IEnumerable`，因此只枚举一次。
- `GetPossibleKingdomsToDeclareWar` 遍历 `Kingdom.All`，保留既不是参数自身、也不与它交战（用 `FactionManager.IsAtWarAgainstFaction` 判定）的王国。注意它返回的是 `List<IFaction>` 而不是 `List<Kingdom>`。
- `GetPossibleKingdomsToDeclarePeace` 是镜像：收集该参数**正在**交战的王国。
- **返回值语义：** 新的列表/序列，无匹配时为空。这些是*候选*列表——不含 AI 意愿、不含关系要求、不含距离。
- **坑：** 这些列表正是你该喂给"宣战"界面的东西，但真正宣战是你的活，要走 `DeclareWarAction`。

#### `public static bool CanPlayerEnterFaction(bool asVassal = false)`

一个**分数阈值**检查，而非规则检查。
- **算法：** 对玩家拥有且属于村庄/城镇/城堡的聚落累加 `settlement.GetSettlementValueForFaction(Hero.OneToOneConversationHero.MapFaction)`；计算 `num3 = PlayerClan.Renown + (asVassal ? 已拥有价值/5000 : 0) + (asVassal ? MainHero.Gold/10000 : 0) + min(阈值, Renown)/阈值 * 0.2 * PlayerClan.CurrentTotalStrength + OneToOneConversationHero.MapFaction.Leader.GetRelationWithPlayer() * 2`，其中阈值在效忠时为 50、否则为 10；非效忠返回 `num3 > 25`，效忠返回 `num3 > 150`。
- **返回值语义：** 一个基于*实时对话对象*算出的阈值判定。它是**对话域**的——`Hero.OneToOneConversationHero` 没有任何判空，所以在对话之外调用会抛异常。
- **坑：** 25/150 阈值与 5000/10000 除数都是写死的字面量。重新平衡了声望或氏族实力的 mod，在这里拿到的仍是原版口味答案。
- **坑：** 这个分数把声望、金币、聚落价值和关系值以差别很大的缩放混在一起；它是为"加入这个王国"菜单设计的，不是给你自己的任务平衡用的。

#### `public static bool CanPlayerOfferVassalage(Kingdom offerKingdom, out List<IFaction> playerWars, out List<IFaction> warsOfFactionToJoin)` / `CanPlayerOfferMercenaryService(...)`

完整的"加入王国"资格检查，两条路径都会填好原因数据。
- **算法（公共前缀）：** 计算 `strengthThreshold = DiplomacyModel.GetStrengthThresholdForNonMutualWarsToBeIgnoredToJoinKingdom(offerKingdom)`；`playerWars` = 与 `Clan.PlayerClan.MapFaction` 交战且 `CurrentTotalStrength` 超过该阈值的王国；`warsOfFactionToJoin` = 与 `offerKingdom` 交战的王国。
- **效忠额外要求：** `PlayerClan.Kingdom == null || PlayerClan.IsUnderMercenaryService`、未与 `offerKingdom` 交战、`PlayerClan.Tier >= ClanTierModel.VassalEligibleTier`、`offerKingdom` 未被消灭、`offerKingdom.Leader.GetRelationWithPlayer() >= DiplomacyModel.MinimumRelationWithConversationCharacterToJoinKingdom`，以及 `playerWars ⊆ warsOfFactionToJoin`（以 `Intersect(...).Count() == playerWars.Count` 判定）。
- **雇佣兵额外要求：** `PlayerClan.Kingdom == null`、tier 至少为 `MercenaryEligibleTier`、同样的关系闸门、同样的子集检查，**并且** `PlayerClan.Settlements.IsEmpty<Settlement>()`。
- **返回值语义：** 只有全部条件都成立才为 `true`。两个 `out` 列表都在判定**之前**被填充，因此它们就是 `false` 时的诊断数据。
- **坑：** `offerKingdom.Leader` 会被解引用；没有领袖的王国抛异常。
- **坑：** 子集检验意味着"玩家参与的每一场战争都必须也是这个邀请王国参与的战争"。玩家正在和一个没人关心的小派系打仗**不会**被拦，但正在和一个主要王国打仗就会被拦。这点常让人意外。
- **坑：** 雇佣兵方法对 `PlayerClan.Settlements` 的检查是 `IsEmpty<Settlement>()`——拥有哪怕一个村庄都会让你失去资格。

#### `public static bool CanClanBeGrantedFief(Clan clan)`

一条两段式规则：`clan != Clan.PlayerClan && !clan.IsUnderMercenaryService`。
- **返回值语义：** 对玩家 clan 和任何处于佣兵服务下的 clan 返回 `false`。注意它**不**检查 tier、王国成员身份，也不检查是否真有可授予的封地——它只回答"这个 clan 在结构上是否被允许持有封地"。
- **坑：** `clan` 为 null 时在第一次比较处抛异常。

#### `public static Tuple<bool, string> IsClanNameApplicable(string name)` / `IsKingdomNameApplicable(string name)`

面向创建氏族/王国界面的名称校验。
- **算法：** 从 `IsFactionNameApplicable(name)`（私有：禁用子串与长度规则）收集问题；对氏族额外检查 `Clan.All` 中是否存在名字相等（`InvariantCultureIgnoreCase`）且不是 `Clan.PlayerClan` 的氏族，加上 `str_clan_name_invalid_already_exist`；然后用 `str_string_newline_newline_string` 把问题列表折成一段换行拼接的字符串。
- **返回值语义：** 名称可接受时为 `(true, "")`；否则为 `(false, 原因)`，其中原因已本地化且多问题时已换行拼接。绝不会出现 `(true, 非空)`。
- **坑：** 判空用的是 `list.Count == 0`，所以只有一个问题时给出的就是那一个问题的文本。
- **坑：** `IsKingdomNameApplicable` **不**做重复氏族检查——重复检查是氏族专属的。不要以为两者是对称的。
- **用途：** 驱动"创建你的氏族"界面的校验状态；那个字符串已经是可直接展示的。

#### `public static TextObject GenerateClanNameforPlayer()`

给玩家的一个建议氏族名。
- **算法：** 读 `CharacterObject.PlayerCharacter.Culture`；Vlandia 文化时写死 `"dey Corvand"`，否则 `NameGenerator.Current.GenerateClanName(culture, null)`。
- **返回值语义：** 一个 `TextObject`。它只是一个*建议*——不会登记这个名称，也不检查唯一性。
- **坑：** Vlandia 分支是带翻译键的硬编码字面量，因此不受 `NameGenerator` mod 影响。
- **坑：** `NameGenerator.Current` 必须已初始化；在名字生成器尚未就绪时调用会抛异常。
- **坑：** 它在 `GenerateClanName` 内部消耗随机数，所以不是确定性的。

#### `public static TextObject GetFormalNameForFactionCulture(CultureObject factionCulture)` / `GetInformalNameForFactionCulture(...)` / `GetAdjectiveForFactionCulture(...)` / `GetAdjectiveForFaction(IFaction faction)` / `GetTermUsedByOtherFaction(IFaction faction, IFaction otherFaction, bool pejorative)`

命名与称谓文本，全部通过 `GameTexts.FindText` 以 `StringId` 为键。
- **返回值语义：** 一个 `TextObject`。`GetAdjectiveForFaction` 对 `Kingdom` 返回以 `faction.StringId` 为键的 `str_adjective_for_faction`，对其他任何类型则返回**派系自己的 `Name`**——所以氏族的"形容词"就是它的名称，这是刻意设计。
- **坑：** `StringId` 没有对应文本条目的 mod 派系或文化，会得到一个直接渲染成键名的 `TextObject`。请始终为 mod 的 id 提供兜底。
- **坑：** `GetTermUsedByOtherFaction` 是唯一会随观察者变化的：请把*观察者*作为 `otherFaction` 传入，否则称谓会是错误一方的看法。

#### `public static void AdjustFactionStancesForClanJoiningKingdom(Clan joiningClan, Kingdom kingdomToJoin)`

一个氏族加入王国**之后**要运行的立场修正。
- **算法：** 对 `joiningClan` 的每条立场，按 `DiplomacyModel.IsAtConstantWar` 跳过恒定战争；识别另一方派系；若 `stanceLink.IsAtWar` 且 `kingdomToJoin` **未**与该另一方交战，则执行 `MakePeaceAction.Apply(joiningClan, otherFaction)`，随后双向运行 `FinishAllRelatedHostileActionsOfFactionToFaction`；否则（处于和平）调用 `stanceLink.ResetPeaceStats()`。
- **副作用：** 和平动作、敌对拆除（地图事件变更、`SetMoveModeHold`）与和平统计重置。这是一个以查询为主的类里的修改成员。
- **坑：** 在加入动作真正生效之前调用它，会为仍然独立的派系生成立场。
- **坑：** 对同一次加入调用**两次**会再次重置同一批立场的和平统计。这里没有任何幂等保护。
- **坑：** 它会按设计静默跳过恒定战争的立场，因此该 clan 的部分敌人被原封不动地留下。

#### `public static void FinishAllRelatedHostileActionsOfNobleToFaction(Hero noble, IFaction faction)` / `...OfFactionToFaction(IFaction faction1, IFaction faction2)` / `FinishAllRelatedHostileActions(Clan clan1, Clan clan2)` / `FinishAllRelatedHostileActions(Kingdom kingdom1, Kingdom kingdom2)`

在领主/部队/派系与某派系之间拆除地图层敌对行为。
- **领主变体做的事：** 若该领主的部队正处于针对 `faction` 的 `MapEvent` 中（按攻/守方领袖部队匹配，并根据 `faction.IsKingdomFaction` 分别比对王国的 `MapFaction` 或氏族的 `Owner.Clan`），则设置 `MapEvent.DiplomaticallyFinished = true`、收集攻方部队、让正在防守该地图事件聚落的 `WarPartyComponent` 部队停驻、调用 `MapEvent.Update()`，并让每个移动的攻方部队停驻；另外，若该领主的部队正在围困属于 `faction` 的聚落，则让防守方战争部队停驻、清空 `BesiegerCamp`，并让该领主部队停驻。
- **返回值：** 无。它纯粹产生副作用，且**不可回退**——你无法通过这个 API 解除部队停驻或取消地图事件的结束状态。
- **坑：** 它会访问 `MapEvent.AttackerSide.LeaderParty.MapFaction` 与 `.Owner.Clan`，而对*另一方*的领袖部队没有 null 保护。格式错误的地图事件会抛异常。
- **坑：** 氏族/王国的重载是派系对版本的便利包装；clan 对 clan 与 kingdom 对 kingdom 是两个同名但不同签名的重载——参数类型传错会得到二义性调用的编译错误。
- **用途：** 只作为真正外交变更（和平、叛逃、王国合并）的清理半边，紧跟在对应动作之后调用。

#### `public static bool IsMainClanMemberAvailableFor{Recall,PartyLeaderChange,SendingSettlement,SendingSettlementAsGovernor}(...)`

"能否挪动玩家氏族成员"的一组可用性检查，每个都带一个本地化的 `out TextObject explanation`。
- **公共前置检查（召回变体）：** 当英雄已在主部队、当 `CurrentSettlement.IsUnderSiege || IsUnderRaid`、当 `Hero.MainHero.IsPrisoner`、当 `MobileParty.MainParty.MapEvent != null`、当主部队 `IsCurrentlyAtSea` 时一律拒绝；然后交给私有的 `IsMainClanMemberAvailableForRelocate`。
- **返回值语义：** `true` 表示该行动**此刻**合法；`false` 时**总是**带一个填好的 `explanation` 文本（内联构造，例如 `{HERO.NAME} is already in the main party.`、`You can't recall a clan member while you are in a map event.`）。
- **坑：** 这些解释文本是带 `{HERO.NAME}` 属性的内联字面量，而不是 `GameTexts.FindText` 查找。它们**不会**出现在字符串表导出里，需要战役文本管线才能本地化。
- **坑：** `IsMainClanMemberAvailableForPartyLeaderChange` 带一个 `bool isSend` 标志，所以同一个方法以不同含义服务于"授予指挥权"与"收回指挥权"。
- **坑：** "派为总督"变体额外要求其已是某聚落的总督，这让两个聚落相关变体不可互换。

#### `public static float SettlementProsperityEffectOnGarrisonSizeConstant(Town town)` / `SettlementFoodPotentialEffectOnGarrisonSizeConstant(Settlement settlement)` / `OwnerClanEconomyEffectOnGarrisonSizeConstant(Clan clan)` / `FindIdealGarrisonStrengthPerWalledCenter(Kingdom kingdom, Clan clan = null)`

被拆成块暴露出来的原版守军规模模型。
- **算法（繁荣度）：** `2.2f * (0.1f + 0.9f * sqrt(min(town.Prosperity, 5000f) / 5000f))`——一条在 5000 繁荣度处饱和的曲线。
- **返回值语义：** 是乘数/权重，不是守军数量。`FindIdealGarrisonStrengthPerWalledCenter` 返回每座围墙中心的理想强度，会用到另外两个常量与氏族经济常量。
- **坑：** `2.2f`、`5000f`、`0.1f`、`0.9f` 都是辅助类里的字面量。它们镜像原版聚落模型但并不读取它，所以替换了聚落模型又调用这里的 mod 会得到两个不同的答案。
- **用途：** 当你自己的聚落算法必须与玩家所见一致时，复用这些常量而不是重算那条曲线。

#### `public static float GetDistanceToClosestNonAllyFortificationOfFaction(IFaction faction)` / `Settlement GetMidSettlementOfFaction(IFaction faction)`

某个派系的地理辅助方法。
- **返回值语义：** `GetDistanceToClosestNonAllyFortificationOfFaction` 返回从 `faction.FactionMidSettlement` 到由其他派系拥有的 `Town.AllFiefs` 聚落的最小 `MapDistanceModel.GetDistance`——当 `FactionMidSettlement` 为 null 时返回 **`float.MaxValue`**，当所有封地都属于该派系自身时**也**返回 `float.MaxValue`。使用该值前务必检查 `float.MaxValue`。
- **坑：** `float.MaxValue` 是一个静默失败值，不是错误。把它喂进评分里会得到一个分数无穷好的派系。
- `GetMidSettlementOfFaction` 返回使成对距离之和（村庄加权）最小的那个派系聚落；当派系没有聚落时回落到 `Clan.HomeSettlement` / `Kingdom.InitialHomeSettlement`。

## 使用示例

### 示例 1 — 给"加入这个王国"按钮加闸门并给出真实理由

```csharp
public bool TryOfferVassalage(Kingdom offerKingdom, out string tooltip)
{
    // 即使判定为 false，两个 out 列表也已被填好。
    bool can = FactionHelper.CanPlayerOfferVassalage(offerKingdom, out var playerWars, out var offerWars);

    if (can)
    {
        tooltip = "Available";
    }
    else if (playerWars.Except(offerWars).Any())
    {
        // 真正拦住你的就是那个子集检验。
        tooltip = "You are at war with kingdoms they are not: "
                + string.Join(", ", playerWars.Except(offerWars).Select(k => k.Name.ToString()));
    }
    else
    {
        tooltip = "Tier, relation, or existing kingdom membership blocks this offer.";
    }
    return can;
}
```

### 示例 2 — 用截断后的比值判断"我们火力是否不如对方"

```csharp
public bool AreWeOutgunned(Kingdom kingdom)
{
    float ratio = FactionHelper.GetPowerRatioToEnemies(kingdom);
    // 没有敌方王国时分母是 0.0001f，会得到巨大比值。
    if (float.IsInfinity(ratio) || ratio > 1000f)
    {
        return false;
    }
    return ratio < 1f;
}
```

### 示例 3 — 为自定义宣战对话框列出候选对象

```csharp
public List<IFaction> GetWarTargets(Kingdom playerKingdom)
{
    // 只返回候选——不含 AI 意愿、不含关系闸门、不含距离。
    var candidates = FactionHelper.GetPossibleKingdomsToDeclareWar(playerKingdom);
    return candidates.Where(f => !f.IsEliminated).ToList();
}
```

### 示例 4 — 在氏族加入王国后运行原版立场修正

```csharp
public void OnClanJoinedKingdom(Clan joiningClan, Kingdom kingdom)
{
    // 必须在加入动作之后、且恰好运行一次。
    // 这可能执行和平动作并拆除活动中的地图事件。
    FactionHelper.AdjustFactionStancesForClanJoiningKingdom(joiningClan, kingdom);
}
```

### 示例 5 — 解释召回按钮为什么是禁用的

```csharp
public bool CanRecall(Hero hero, out string reason)
{
    MobileParty target = MobileParty.MainParty;
    bool ok = FactionHelper.IsMainClanMemberAvailableForRecall(hero, target, out var explanation);
    // false 时 out TextObject 一定已填好——绝不自己重算原因。
    reason = ok ? string.Empty : explanation.ToString();
    return ok;
}
```

### 示例 6 — 校验玩家输入的氏族名

```csharp
public (bool ok, string reason) ValidateClanName(string typed)
{
    var result = FactionHelper.IsClanNameApplicable(typed);
    // result.Item1 = 是否可接受，result.Item2 = 已本地化的换行拼接问题列表。
    return (result.Item1, result.Item2);
}
```

## 风险与崩溃边界

- **对话域空引用。** `CanPlayerEnterFaction` 在没有任何判空的情况下读取 `Hero.OneToOneConversationHero.MapFaction`；两个 `CanPlayerOffer*` 方法读取 `offerKingdom.Leader`。二者在对话之外、或对无领袖的王国都会抛异常。这些都是菜单期方法——绝不要从后台或存档路径调用。
- **实时 AI 修改且无法撤销。** `AdjustFactionStancesForClanJoiningKingdom` 会执行和平动作并调用 `FinishAllRelatedHostileActions*`，后者设置 `MapEvent.DiplomaticallyFinished`、调用 `MapEvent.Update()`、清空 `BesiegerCamp` 并让部队停驻。这些都不通过本 API 可逆。顺序错了（在加入之前、或调用两次）会让地图进入原版绝不会产生的状态。
- **重复调用隐患。** `AdjustFactionStancesForClanJoiningKingdom` 没有幂等保护；第二次调用会对同一批立场再次重置和平统计。如果触发可能发生两次，请在自己的 Behavior 里加标志位。
- **硬编码常量会让模型替换失效。** 加入的 25/150 阈值、5000/10000 除数、`FindPotentialStrength` 里的 0.3 佣兵折扣，以及 `2.2f / 5000f / 0.1f / 0.9f` 守军曲线，都是辅助类里的字面量。替换了 `DiplomacyModel`、`ClanTierModel`、佣兵系统或聚落模型的 mod，会发现 `FactionHelper` 仍在报原版数字。把它的判定当作原版口味，并与你自己的模型检查配合使用。
- **静默的 `float.MaxValue` 失败。** `GetDistanceToClosestNonAllyFortificationOfFaction` 在 `FactionMidSettlement` 为 null 和该派系拥有全部封地这两种情况下都返回 `float.MaxValue`。只在 min() 比较里使用它，绝不要单独当距离用。
- **战力比里的 `float.MaxValue` 哨兵。** `GetPowerRatioToEnemies` 给分母加了 `0.0001f`，所以没有敌人的王国会报出一个巨大比值而不是无穷。渲染前请截断。
- **开销。** `GetStances` 遍历 `Kingdom.All` **和** `Clan.All`；`GetTotalTributePayedKingdomsPower`、`GetPowerRatioToTributePayedKingdoms`、`AdjustFactionStancesForClanJoiningKingdom` 全都建立在它之上。在重度 mod 化的地图上，这个开销大到不能放进逐 agent 循环。
- **跨域依赖。** 该类位于 `TaleWorlds.CampaignSystem` 的 `Helpers` 命名空间，但返回 `TaleWorlds.Localization` 的 `TextObject`、使用 `TaleWorlds.ObjectSystem` 的命名，并从 `TaleWorlds.CampaignSystem.Actions` 驱动战役动作。缺少其中任一引用的 mod 会得到首次调用时的加载期程序集故障，而不是编译错误。
- **加载顺序。** 每个成员都在调用时读取 `Campaign.Current.Models.*`。在角色创建、百科预览或编辑器里这些还未初始化，你会拿到 `NullReferenceException`。任何也会在战役之外运行的代码都要加 `Campaign.Current != null` 判断。
- **存档序列化与 ID 稳定性。** 这里什么都不保存。用到的每一个派系身份都是对象同一性加上 `StringId`（后者同时是 `GameTexts.FindText` 的键）。改名或换 id 会同时弄坏所有命名辅助方法**和**所有以旧 id 为键的文本条目——而且是静默地直接渲染成键名。请给 mod 派系独立的 string id 与对应文本条目。
- **随机数边界。** `GenerateClanNameforPlayer` 会消耗名字生成器的随机数，不可复现——不要放在确定性或网络路径上调用。

## 跨版本提示

- **v1.3.x（本页）：** 上述成员集合与 1.3.15 一致。`GenerateClanNameforPlayer` 的 Vlandia 特例、`2.2f/5000f` 守军常量以及 25/150 加入阈值都是这个形态。
- **v1.4.x：** 结构保持。新版本给 `DiplomacyModel` 增加了更多加入条件，`CanPlayerOfferVassalage` / `CanPlayerOfferMercenaryService` 会自动跟进，因为它们读模型——但 `CanPlayerEnterFaction` 与 `FindPotentialStrength` 里的硬编码阈值**不是**模型驱动的，并没有变化。
- **v1.5.x：** 预计会有更多王国/clan 政治动作与更多 `DiplomacyModel` 调参。可依赖构建的稳定契约是 `GetStances`、`GetEnemyKingdoms`，以及带 `out` 列表的两个 `CanPlayerOffer*`——它们转发给模型，会跟随 mod 调参。而那些字面量阈值不会。

## 参见

- ↑ 父级目录：[Campaign-Ext API 索引](./)
- ↔ 同级：[DiplomacyHelper](../DiplomacyHelper/) — 开战归因、战俘、单立场视角
- ↔ 同级：[HeroHelper](../HeroHelper/) — 同一命名空间里的领主侧门面
- ↔ 同级：[SettlementHelper](../SettlementHelper/) — 地理侧门面
- ↔ 同级：[StanceLink](../StanceLink/) — `GetStances` 的返回类型与实力算法遍历的对象
- ↔ 同级：[DiplomacyModel](../DiplomacyModel/) — 加入阈值与恒定战争规则
- ↔ 同级：[ClanTierModel](../ClanTierModel/) — 效忠 / 雇佣兵 tier 闸门
- ↔ 同级：[MakePeaceAction](../MakePeaceAction/) — 加入修正所执行的动作
- ↔ 同级：[MapEvent](../MapEvent/) — 敌对拆除所修改的活动战斗对象
- ↑ 王国：[Kingdom](../../campaign/Kingdom/)
- ↑ 氏族：[Clan](../../campaign/Clan/)
- ↑ 文化命名：[CultureObject](../CultureObject/)