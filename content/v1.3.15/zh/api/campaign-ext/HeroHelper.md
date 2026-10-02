---
title: "HeroHelper"
description: "英雄侧静态查询工具：这个领主在哪、谁听命于玩家、NPC 之间如何互相看待、招募上限，以及百科文本。"
---
# HeroHelper

**Namespace:** `Helpers`
**Module:** Helpers（TaleWorlds.CampaignSystem 程序集内）
**Type:** `public static class HeroHelper`
**Base:** 无（静态类）
**Source:** `TaleWorlds.CampaignSystem/Helpers/HeroHelper.cs`

## 概述

`HeroHelper` 是 `SettlementHelper` / `FactionHelper` 的英雄侧对应物：一个静态、无状态的门面，回答战役层反复追问的关于领主的问题。它回答*这个英雄现在在哪*（`GetClosestSettlement`）、*他是否听命于玩家*（`UnderPlayerCommand`）、*两个从未谋面的 NPC 会如何互相对待*（`DefaultRelation`、`NPCPersonalityClashWithNPC`、`TraitHarmony`）、*能否从这位英雄处招募*（`HeroCanRecruitFromHero`、`GetVolunteerTroopsOfHeroForRecruitment`、`StartRecruitingMoneyLimit`），以及一批对话/百科展示辅助方法（`GetLastSeenText`、`GetCharacterTypeName`、`SetPlayerSalutation`、`GetTitleInIndefiniteCase`）。

约三十个公开成员，全部为 `static`。不做任何缓存：每次调用都读英雄的实时状态。其中两个——`SpawnHeroForTheFirstTime` 和 `SetPlayerSalutation`——**确实会修改状态**，所以请把它看成带一条很细的写边界的辅助类，而不是纯查询面。和这个命名空间里的其他类一样，它位于裸的 `Helpers` 命名空间而非 `TaleWorlds.CampaignSystem`，因此 `using Helpers;` 是必需的。

## 心智模型

把 `HeroHelper` 理解成**"你在战役 Behavior、菜单或对话内部调用的领主侧工具箱"**：

- **mod 里的典型调用顺序。** 通过 [CampaignGameStarter](../CampaignGameStarter/) 注册一个 [CampaignBehaviorBase](../CampaignBehaviorBase/)；在它的 `RegisterEvents` 里订阅 [CampaignEvents](../CampaignEvents/)（每小时或每日 tick）；在回调里解析英雄（`Settlement.All` 的 notable、`PartyBase.LeaderHero`），然后向 `HeroHelper` 提问。这个辅助类本身没有任何初始化或拆卸流程。
- **成员分两族。** *查询类*（`UnderPlayerCommand`、`DefaultRelation`、`TraitHarmony`、`IsCompanionInPlayerParty`、`HeroCanRecruitFromHero`）可以放心重复调用。*修改类*（`SpawnHeroForTheFirstTime`、`SetPlayerSalutation`）必须每个英雄只调一次 / 每次对话只调一次，因为它们会改状态，并写入全局文本变量。
- **耦合全局对话状态。** `LordWillConspireWithLord`、`WillLordAttack`、`SetPlayerSalutation` 都会读 `Hero.OneToOneConversationHero`，并往 `MBTextManager` 的文本变量里写东西。它们只在进行中的一对一对话里才成立；在对话之外调用会解引用空的对话英雄，或静默覆盖 UI 依赖的文本状态。
- **`GetClosestSettlement` 是一条回退链，而不是一次距离查询。** 它依次尝试 `hero.CurrentSettlement`、所在部队的定居点、围绕移动部队的 locatable 搜索、遭遇战定居点，最后 `SettlementHelper.FindNearestSettlementToSettlement`。当英雄既不在部队也不在定居点、且没有遭遇战时返回 `null`。
- **坑：`GetRandomClanForNotable` 并不是均匀随机。** 传教士与帮派头目只有 0.5 的概率拿到一个 clan；候选列表会先剔除"该定居点已经有该 clan 名下 notable"的 clan；最后一步是按 `GetProbabilityForClan` 加权的随机游走。不满足条件时返回 `null`——既包括既不是传教士也不是帮派头目的 notable。
- **坑：`GetVolunteerTroopsOfHeroForRecruitment` 把 6 个槽位写死了**，且对死亡英雄返回空列表。它直接读 `hero.VolunteerTypes[i]`，除了循环本身没有任何越界保护。
- **坑：`SetPlayerSalutation` 写了 `PLAYER_SALUTATION` 但不把它设为常驻。** 它用的是 `MBTextManager.SetTextVariable(..., false)`——`false` 意为"非常驻"——所以这个值只活到下一个文本上下文重建为止。

### 何时使用

**使用 `HeroHelper` 的场景：**
- 你需要知道一个英雄是否实质上属于玩家（封臣、玩家 clan 名下的 notable，或同伴）→ `UnderPlayerCommand`。
- 你需要两个素未谋面的 NPC 之间的初始关系值（`DefaultRelation`），或性格相冲评分（`NPCPersonalityClashWithNPC`）。
- 你需要把某位领主放到一个合理的位置（`GetClosestSettlement`、`FindASuitableSettlementToTeleportForHero`、`GetRandomBirthDayForAge`）。
- 你需要某位领主的招募闸门或志愿兵名册（`HeroCanRecruitFromHero`、`GetVolunteerTroopsOfHeroForRecruitment`、`StartRecruitingMoneyLimit`）。
- 你需要英雄的百科/对话文本（`GetLastSeenText`、`GetCharacterTypeName`、`GetTitleInIndefiniteCase`、`GetPersonalityTraitChangeName`）。

**不要用 `HeroHelper` 的场景：**
- 你需要战斗阵营的有序名单。`OrderHeroesOnPlayerSideByPriority` 返回的是按遭遇战评分排序的 `CharacterObject` **字符串 id**——它是 UI/名册辅助，不是权威的部队列表。
- 你想改变英雄的位置、clan 或状态。请用对应的 `*Action.Apply`（例如 [EnterSettlementAction](../EnterSettlementAction/)）。`HeroHelper` 会直接 `ChangeState` 一个英雄，从而绕过所有事件。
- 你需要定居点邻近度。那是 [SettlementHelper](../SettlementHelper/)；`GetClosestSettlement` 只负责解析英雄可能在哪，然后才委派出去。
- 你需要派系之间的关系查询。那是 [DiplomacyHelper](../DiplomacyHelper/) / [FactionHelper](../FactionHelper/)。
- 你需要持久化自己的英雄相关状态。请用 [IDataStore](../IDataStore/) 的 `SyncData`，而不是在辅助类旁边挂缓存。

## 依赖关系

- [Hero](../../campaign/Hero/) — 几乎每个成员操作的对象：`AliveLords`、`MapFaction`、`Clan`、`IsPrisoner`、`PartyBelongedTo`、`VolunteerTypes`、`LastKnownClosestSettlement`。
- [CharacterObject](../../campaign/CharacterObject/) — `CharacterHelper` 是它的兄弟门面；`Hero.CharacterObject` 是两者之间的桥。
- [SettlementHelper](../SettlementHelper/) — `GetClosestSettlement` 与 `FindASuitableSettlementToTeleportForHero` 把距离计算委派给它。
- [DiplomacyHelper](../DiplomacyHelper/) — 同一 `Helpers` 命名空间里的派系立场对应物。
- [FactionHelper](../FactionHelper/) — 回答 clan/派系层级的问题，例如某位领主可以加入哪个王国。
- [AgeModel](../AgeModel/) — `DefaultRelation` 读 `Campaign.Current.Models.AgeModel.MiddleAdultHoodAge`。
- [TraitObject](../TraitObject/) 与 [DefaultTraits](../DefaultTraits/) — 荣誉值驱动 `LordWillConspireWithLord`、`CalculateReliabilityConstant` 和 `NPCPersonalityClashWithNPC`。
- [VolunteerModel](../VolunteerModel/) — `HeroCanRecruitFromHero` 委派给 `Campaign.Current.Models.VolunteerModel.MaximumIndexHeroCanRecruitFromHero`。
- [EncounterModel](../EncounterModel/) — `OrderHeroesOnPlayerSideByPriority` 用 `Campaign.Current.Models.EncounterModel.GetCharacterSergeantScore` 排序。
- [ConversationHelper](../ConversationHelper/) — 在 `LordWillConspireWithLord` 内部用于渲染一位英雄如何称呼另一位。
- [ConversationManager](../ConversationManager/) — `WillLordAttack` 读 `Campaign.Current.ConversationManager.ConversationParty`；`LordWillConspireWithLord` 通过它查找本地化台词。
- [CampaignEvents](../CampaignEvents/) — 你的 Behavior 在运行期调用本辅助类之前先订阅的 dispatcher。
- [CampaignBehaviorBase](../CampaignBehaviorBase/) — 在 tick 里调用 `HeroHelper` 的代码通常住在这里。
- [Campaign](../../campaign/Campaign/) — `Campaign.Current.Models` 与 `Campaign.Current.ConversationManager` 是多数成员背后的实时读取来源。

## 主要成员

#### `public static bool UnderPlayerCommand(Hero hero)`

"这个英雄是不是我的"判定，定义为满足**任一**条件：英雄的 `MapFaction.Leader == Hero.MainHero`；英雄是 notable 且其 `HomeSettlement.OwnerClan == Hero.MainHero.Clan`；或英雄 `IsPlayerCompanion`。
- **返回值语义：** 输入为 `null` 返回 `false`，所以这是该检查的安全版本。
- **坑：** 它**不**考虑 `Hero.IsVassalOfPlayer` 或 `IsInAnyClan`，也不检查英雄的部队是否是玩家的部队。一个是你的封臣、但 map faction 领袖另有其人的领主会通不过这个测试。
- **用途：** 用于把守"玩家能否给这位领主下令"的 UI 与行为，而不是忠贞度语义。

#### `public static bool IsCompanionInPlayerParty(Hero hero)`

条件是 `hero != null && hero.IsPlayerCompanion && hero.PartyBelongedTo == MobileParty.MainParty`。
- **返回值语义：** 当英雄是别的部队的同伴时返回 `false`——驻扎在驻军里的同伴、正在做客的访客、或战场上遇到的部队成员都会被排除。
- **坑：** 是与 `MobileParty.MainParty` 的引用比较。在任务中或遭遇战里主部队被临时改挂的情况下，你以为属于自己的英雄可能返回 `false`。

#### `public static int DefaultRelation(Hero hero, Hero otherHero)`

两个从未谋面的 NPC 之间的初始关系，由贵族身份、派系、文化、年龄和性格相冲推导而来。
- **算法（按顺序）：** 同属一个贵族 clan → `40`；map faction 相同 + 文化相同 + 双方年龄都超过 `AgeModel.MiddleAdultHoodAge` + `NPCPersonalityClashWithNPC > 40` → `-5`；派系相同 + 文化相同 + 双方都已过中年 → `25`；派系相同 + 文化相同 → `10`；否则 `0`。
- **返回值语义：** 在大致 `-100..100` 的关系刻度上的普通 `int`。这是**初始值**，不是实时的 `Hero.RelationWith`。
- **坑：** 年龄门槛用 `Campaign.Current.Models.AgeModel`，所以替换年龄模型的 mod 会改变阈值。相冲惩罚只对成年人生效；年轻领主永远走不到 `-5` 分支。

#### `public static int NPCPersonalityClashWithNPC(Hero firstNPC, Hero secondNPC)` / `public static int TraitHarmony(Hero considerer, TraitObject trait, Hero consideree, bool sensitive)`

性格相容性评分。`NPCPersonalityClashWithNPC` 汇总两位英雄性格特质之间的相冲；`TraitHarmony` 就单个 [TraitObject](../TraitObject/) 在两位英雄之间打分，而 `sensitive` 标志启用相冲计算所用的更严格权重。
- **返回值语义：** 一个正 `int`，值越大表示相冲越多／和谐越少。`DefaultRelation` 把 `> 40` 当作敌对默认值的阈值。
- **用途：** 当你想在自己的关系或任务系统里用一个相容性数值、而不是 `DefaultRelation` 那个二元判定时，可以复用它们。

#### `public static Settlement GetClosestSettlement(Hero hero)`

用一条回退链而不是单次距离查询，解析英雄"很可能所在"的定居点。
- **链条：** `hero.CurrentSettlement` → 若英雄属于某部队且该部队 `IsSettlement` 则取其 `Settlement` → 否则围绕部队位置做 `Settlement.StartFindingLocatablesAroundPosition` 扫描，保留最近的村庄/要塞，扫描不到则回退到 `SettlementHelper.FindNearestSettlementToMobileParty` → 若无部队但存在带战斗的 `PlayerEncounter`，取遭遇战定居点或主部队最近的村庄/要塞 → 最后若结果既非村庄也非要塞，则用 `SettlementHelper.FindNearestSettlementToSettlement` 改写。
- **返回值语义：** 一个村庄或要塞；当英雄无部队且无遭遇战时为 `null`。它绝不会只返回一个城镇——最后一步会把城镇改写成最近的村庄/要塞。
- **坑：** locatable 扫描的搜索半径是 `Campaign.Current.GetAverageDistanceBetweenClosestTwoTownsWithNavigationType(...) * 1.5f`，所以在极其稀疏的自定义地图上它可能漏掉真正最近的定居点，并静默退化到 `SettlementHelper` 回退路径。
- **坑：** 当移动部队既不在定居点、地图位置也无效时它会调 `Debug.FailedAssert`——开发版里是断言，发布版里那个 `else` 分支什么都不做。

#### `public static List<string> OrderHeroesOnPlayerSideByPriority(bool includeArmyLeader = false, bool includePlayerCompanions = false)`

为战前/编队界面构建玩家阵营名册。
- **算法：** 遍历 `MobileParty.MainParty.MapEvent.PartiesOnSide(playerSide)`，收集每支部队的 `LeaderHero`（除非 `includeArmyLeader` 为真，否则跳过军队的领袖部队）；若该部队就是主部队且 `includePlayerCompanions` 为真，则追加所有实际在主部队里的 `Clan.PlayerClan.Companions` 英雄；然后按 `Campaign.Current.Models.EncounterModel.GetCharacterSergeantScore(hero)` 降序排列，并投影成 `hero.CharacterObject.StringId`。
- **返回值语义：** 一个按强弱排序的 **character 字符串 id** `List<string>`。这是最容易踩的一点：返回类型是 `string`，既不是 `Hero` 也不是 `CharacterObject`。使用前请把每个 id 解析回来，并记住只有在角色定义不被改名时 id 才是存档稳定的。
- **坑：** 假定 `MobileParty.MainParty.MapEvent != null`。在活动地图事件之外调用会抛异常。

#### `public static bool LordWillConspireWithLord(Hero lord, Hero otherLord, bool suggestingBetrayal)`

判定某位 NPC 领主是否同意参与阴谋（或背叛其领主），若不同意则填入本地化的拒绝文本。
- **算法：** 掷出 `otherLord.RandomInt(-9, 11)` 加上 `lord` 的荣誉特质等级；若 `suggestingBetrayal` 则减 1；当背叛对象与 `Hero.OneToOneConversationHero` 同 clan 时直接拒绝（并给出一句专门的拒绝台词）；若分数为负则拒绝，并从 `str_liege_support` 或 `str_lord_intrigue_refuses` 设置 `CONSPIRE_REFUSAL`。
- **返回值语义：** `true` 表示阴谋被接受；`false` 表示被拒绝，**且** `CONSPIRE_REFUSAL` 文本变量已为对话层填好。
- **坑：** 每次调用都是随机的。对同一对人调用两次可能得到两个不同答案，所以如果 UI 会显示两次，请自行缓存结果。
- **坑：** 它一开始就会解引用 `Hero.OneToOneConversationHero.MapFaction.Leader`。在没有进行中的对话里调用会抛异常。

#### `public static bool WillLordAttack()`

判定当前对话对象是否会立刻向玩家开战。
- **算法：** 要求存在活动的 `PlayerEncounter.Current` 且玩家处于 `Defender` 一侧，并且要么没有遭遇部队、要么其 AI 的 `DoNotAttackMainPartyUntil` 已过；要求 `Hero.OneToOneConversationHero` 非空；在 `FreeOrCapturePrisonerHero` / `CapturedLord` 对话上下文下或英雄 `IsPrisoner` 时拒绝；最后要求遭遇/对话部队的 `Owner` 与 `LeaderHero` 均非空，且 `FactionManager.IsAtWarAgainstFaction(party.MapFaction, Hero.MainHero.MapFaction)`。
- **返回值语义：** 对"在这场遭遇战里攻击玩家"的单一是/否，已经把停战与囚犯的特殊情形算进去了。
- **用途：** 给对话菜单里的攻击选项加闸门。它只是决策查询——真要开战还得你自己去跑遭遇流程。

#### `public static void SpawnHeroForTheFirstTime(Hero hero, Settlement spawnSettlement)`

把一个英雄首次放入世界：设置 `BornSettlement`，为该角色单独执行 [EnterSettlementAction](../EnterSettlementAction/)，然后 `ChangeState(Hero.CharacterStates.Active)`。
- **副作用：** 三个。请把它当修改类看；它**不会**发出超出该 action 本身之外的新英雄入城事件——绕过常规生成管线的定制生成会让战役数据（notable 列表、部队成员、百科记账）处于不一致状态。
- **坑：** 第二次调用会再次进入定居点并再次翻转状态，从而重置你原本依赖的状态。
- **坑：** 它不检查 `spawnSettlement` 是否为 null；action 会抛异常。

#### `public static void SetPlayerSalutation()`

设置对话台词使用的 `PLAYER_SALUTATION` 文本变量，在领主称呼、同伴称呼（`Hero.OneToOneConversationHero.IsPlayerCompanion`）、`str_player_salutation_madame`（女性主英雄）与 `str_player_salutation_sir` 之间选择。
- **副作用：** 以 `permanent: false` 写入 `MBTextManager`，因此该值会在下一个文本上下文构建时被丢弃。
- **坑：** 要求 `Hero.OneToOneConversationHero` 非空。在对话之外调用会抛异常。
- **坑：** 它只设置变量，**不会**刷新任何已经构建好的对话文本。请在对话台词被构造**之前**调用，而不是之后。

#### `public static bool HeroCanRecruitFromHero(Hero buyerHero, Hero sellerHero, int index)`

委派给 `Campaign.Current.Models.VolunteerModel.MaximumIndexHeroCanRecruitFromHero(buyerHero, sellerHero, -101)` 并与 `index` 比较。
- **返回值语义：** 当 `index` 小于等于模型允许的最大志愿兵下标时为 `true`。注意那个 `-101` 哨兵参数——它问模型的是"这个下标到底能不能达到"，而不是"解锁了几档"。
- **用途：** 招募界面里逐槽位的启用/禁用。整份名册请看 `GetVolunteerTroopsOfHeroForRecruitment`。
- **坑：** 替换志愿兵模型的 mod 会在 `HeroHelper` 本身没有任何 API 变化的情况下改变这个答案。

#### `public static List<CharacterObject> GetVolunteerTroopsOfHeroForRecruitment(Hero hero)`

返回该英雄的六种志愿兵类型。
- **返回值语义：** 存活英雄返回恰好 6 个 `CharacterObject` 的全新列表；死亡英雄返回**空**列表。若英雄定义不足六种志愿兵，列表中会出现 null。
- **坑：** 数字 6 是硬编码并在这里重复了一遍，而不是从志愿兵模型读取。若模型改变了槽位数量，本方法仍然返回 6（若模型缩小 `VolunteerTypes` 则会在下标处越界）。

#### `public static float StartRecruitingMoneyLimit(Hero hero)` / `StartRecruitingMoneyLimitForClanLeader(Hero hero)`

某位英雄可花在"开始招募"上的金币上限。
- **返回值语义：** 英雄属于 `Clan.PlayerClan` 时返回 `0f`（玩家永不被闸门限制）；否则为 `50 + min(150, memberCount) * 20`，即 50..3050 的区间。
- **坑：** 这些数字是辅助类里写死的常量，不是模型值。它们不会响应难度或经济模型。

#### `public static Clan GetRandomClanForNotable(Hero notable)`

为传教士或帮派头目 notable 挑选一个赞助 clan，按该 clan 拥有的定居点数量加权。
- **算法：** 用概率 0.5 从 `Clan.NonBanditFactions` 中筛出 `IsSect`（传教士）或 `IsMafia`（帮派头目）构建候选列表；剔除在 `notable.HomeSettlement` 已有该 clan notable 的 clan；基于城镇与藏身处构造 `Settlement`→`Clan` 查找表；然后遍历候选，按 `GetProbabilityForClan(clan, settlements, notable)` 逐个扣减一个乘了随机因子的总和，直到总和降到零或负数。
- **返回值语义：** 一个 [Clan](../../campaign/Clan/)，或者 `null`——当 notable 既非传教士也非帮派头目、0.5 的掷点失败、所有候选都被剔除、或随机游走耗尽时。
- **坑：** 它会解引用 `notable.HomeSettlement.Notables`。没有定居点的 notable 会抛异常。
- **坑：** 它会消耗 `MBRandom`——在存档回放或需要网络同步的路径上调用会导致客户端失步。

#### `public static CampaignTime GetRandomBirthDayForAge(float age)` / `GetRandomDeathDayAndBirthDay(int deathAge, out CampaignTime birthday, out CampaignTime deathday)`

为生成指定年龄的英雄做出生/死亡日期采样。
- **返回值语义：** `GetRandomBirthDayForAge` 返回战役当前日期往前 `age` 年的 `CampaignTime`，并把年内的日期随机化。`GetRandomDeathDayAndBirthDay` 填好两个 `out` 参数，使两者间隔恰好为 `deathAge` 年。
- **坑：** 两者都会消耗全局 `MBRandom` 流。请只在战役加载期间或单人模式下使用。

#### `public static TextObject GetLastSeenText(Hero hero)`

构造百科中的"最后见到"行。
- **返回值语义：** `hero.LastKnownClosestSettlement == null` 时返回 `str_never_seen_encyclopedia_entry`；否则返回 `str_last_seen_encyclopedia_entry`，并把 `SETTLEMENT` 设为该定居点的 `EncyclopediaLinkWithName`、`IS_IN_SETTLEMENT` 设为 1/0。
- **坑：** `hero.LastKnownClosestSettlement` 只对战役真正观察过的英雄更新；不更新它就生成英雄的 mod，其百科里会永远显示"从未见过"。

## 使用示例

### 示例 1 — 在每日 tick 的 Behavior 里判断"这个领主实质上是不是玩家的"

```csharp
public class VassalLedgerBehavior : CampaignBehaviorBase
{
    private readonly List<string> _ledger = new List<string>();

    public override void RegisterEvents()
    {
        CampaignEvents.DailyTickEvent.AddNonSerializedListener(this, OnDailyTick);
    }

    public override void SyncData(IDataStore dataStore)
    {
        // 按下标持久化，绝不持久化 Hero 引用。
        for (int i = 0; i < _ledger.Count; i++)
        {
            dataStore.SyncData("_ledger_" + i, ref _ledger[i]);
        }
    }

    private void OnDailyTick()
    {
        _ledger.Clear();
        foreach (Hero hero in Hero.AllAlive)
        {
            // UnderPlayerCommand 对 null 安全；IsCompanionInPlayerParty 则是
            // 更严格的"此刻确实跟着我"检查。
            if (HeroHelper.UnderPlayerCommand(hero) && !HeroHelper.IsCompanionInPlayerParty(hero))
            {
                Settlement home = HeroHelper.GetClosestSettlement(hero);
                _ledger.Add($"{hero.StringId}@{home?.StringId ?? "nowhere"}");
            }
        }
    }
}
```

### 示例 2 — 给新领主一个合理的出生日期

```csharp
public void SeedNewLord(Hero lord, int age)
{
    // 两个调用都会消耗 MBRandom，所以别放在网络/确定性路径上。
    CampaignTime birthday = HeroHelper.GetRandomBirthDayForAge(age);
    Settlement spawn = HeroHelper.GetClosestSettlement(lord)
                       ?? SettlementHelper.FindRandomSettlement(s => s.IsVillage);
    // 修改类：设置 BornSettlement、进入定居点、状态翻转为 Active。
    HeroHelper.SpawnHeroForTheFirstTime(lord, spawn);
    Debug.Print($"{lord.StringId} born {birthday} at {spawn.StringId}");
}
```

### 示例 3 — 按槽位给招募面板加闸门

```csharp
public List<CharacterObject> BuildRecruitmentRoster(Hero buyer, Hero seller)
{
    var roster = HeroHelper.GetVolunteerTroopsOfHeroForRecruitment(seller); // 6 槽；死亡则空
    var result = new List<CharacterObject>();
    for (int i = 0; i < roster.Count; i++)
    {
        if (roster[i] != null && HeroHelper.HeroCanRecruitFromHero(buyer, seller, i))
        {
            result.Add(roster[i]);
        }
    }
    return result;
}
```

### 示例 4 — 对玩家阵营排序，再把 id 解析回英雄

```csharp
public List<Hero> GetPlayerSidePriorityOrder()
{
    // 返回的是 CharacterObject.StringId，不是 Hero 对象。
    var ids = HeroHelper.OrderHeroesOnPlayerSideByPriority(
        includeArmyLeader: true,
        includePlayerCompanions: true);

    var ordered = new List<Hero>();
    foreach (string id in ids)
    {
        CharacterObject co = Campaign.Current.GetCharacterObject(id);
        if (co?.HeroObject != null)
        {
            ordered.Add(co.HeroObject);
        }
    }
    return ordered;
}
```

### 示例 5 — 在对话里决定是否提供"开战"选项

```csharp
public bool TryOfferAttack(MenuCallback callback)
{
    if (!HeroHelper.WillLordAttack())
    {
        return false; // 停战、囚犯，或防守方条件不满足
    }
    // WillLordAttack 只是查询——真打起来是你的活。
    callback();
    return true;
}
```

## 风险与崩溃边界

- **多个成员按设计就会空引用。** `UnderPlayerCommand` 与 `IsCompanionInPlayerParty` 会判空参数；`GetClosestSettlement`、`SetPlayerSalutation`、`LordWillConspireWithLord`、`WillLordAttack`、`GetRandomClanForNotable` 不会。在一个到处是无英雄部队、换俘和集体处决的战役里，`null` 英雄经常流到这些方法。
- **对话域成员在对话之外会抛异常。** `SetPlayerSalutation`、`LordWillConspireWithLord`、`WillLordAttack` 全部解引用 `Hero.OneToOneConversationHero`。它们只在 `ConversationManager` 的对话流程内安全。在对话之外求值"能否开战"的 UI 会崩。
- **假定存在地图事件。** `OrderHeroesOnPlayerSideByPriority` 解引用 `MobileParty.MainParty.MapEvent`。从一个在战斗/任务/地图事件之外也能打开的菜单里调用它会崩。
- **直接修改会绕过事件管线。** `SpawnHeroForTheFirstTime` 直接调 `hero.ChangeState(...)`。这样做的英雄状态变更不一定会发出你其他系统监听的 `CampaignEvents`，于是生成之后部队名册、notable 列表与百科数据可能不一致。请优先走 `*Action.Apply`。
- **消耗全局随机数。** `GetRandomClanForNotable`、`GetRandomBirthDayForAge` 与 `GetRandomDeathDayAndBirthDay` 会推进 `MBRandom`。在多人对战、回放，或任何需要确定性的地方，对同一逻辑事件调用两次会导致结果失步。
- **跨域依赖。** 该类位于 `TaleWorlds.CampaignSystem`，却返回 `TaleWorlds.Localization` 的 `TextObject` 并读取 `Campaign.Current.Models.*`。若某个 mod 自带旧版 `TaleWorlds.Localization`，首次调用 `GetLastSeenText` 时得到的是加载期程序集故障，而不是编译错误。
- **加载顺序。** `GetLastSeenText` 依赖战役的观察系统已经填好 `LastKnownClosestSettlement`。在战役的第一个 tick 里、在百科观察过任何人之前，它对所有人都返回"从未见过"。
- **存档序列化与 ID 稳定性。** `OrderHeroesOnPlayerSideByPriority` 给你的是 `CharacterObject` 字符串 id。把这些 id 持久化进你自己的 `SyncData` 时请记住：它们只有和角色 XML 定义一样稳定才算稳定——给部队改名或换 id 会悄无声息地弄坏已保存的名册。自己构造的键（下标式、带版本前缀）才活得下来，`Hero` 引用活不下来。
- **硬编码常量会让模型替换失效。** 6 个志愿兵槽位与 `50 + min(150, n) * 20` 的金币上限都是字面量。替换 `VolunteerModel` 或经济模型的 mod 会发现 `HeroHelper` 仍在报原版数值——把它的答案当作"原版口味"，而不是权威值。

## 跨版本提示

- **v1.3.x（本页）：** 上述成员集合与 1.3.15 一致。`OrderHeroesOnPlayerSideByPriority` 返回 `List<string>`，`GetLastSeenText` 使用 `str_last_seen_encyclopedia_entry`。
- **v1.4.x：** 基本稳定。新版本补充了英雄年龄阶段处理与额外的百科文本，但 `UnderPlayerCommand`、`DefaultRelation`、`GetClosestSettlement` 与 `WillLordAttack` 保持原有形态与语义。
- **v1.5.x：** 预期会围绕家族与婚姻增加英雄生命周期成员。上面的三条核心语义——"这个英雄是不是玩家的"、"这个英雄大概率在哪"、"这两个 NPC 的默认关系是多少"——才是稳定契约；请优先使用它们，而不是直接探查英雄字段。

## 参见

- ↑ 父级目录：[Campaign-Ext API 索引](./)
- ↔ 同级：[CharacterHelper](../CharacterHelper/) — 同一命名空间里的角色/兵种侧门面
- ↔ 同级：[SettlementHelper](../SettlementHelper/) — `GetClosestSettlement` 里真正做距离计算的地方
- ↔ 同级：[DiplomacyHelper](../DiplomacyHelper/) — 派系立场与开战缘由
- ↔ 同级：[FactionHelper](../FactionHelper/) — clan/王国层级查询
- ↔ 同级：[ConversationHelper](../ConversationHelper/) — 阴谋判定内部使用的英雄互指文本
- ↔ 同级：[VolunteerModel](../VolunteerModel/) — 招募下标上限的真实来源
- ↔ 同级：[EncounterModel](../EncounterModel/) — 用来给战斗阵营排序的军士评分
- ↑ 英雄：[Hero](../../campaign/Hero/)
- ↑ 氏族：[Clan](../../campaign/Clan/)
- ↑ Behavior 基类：[CampaignBehaviorBase](../CampaignBehaviorBase/)