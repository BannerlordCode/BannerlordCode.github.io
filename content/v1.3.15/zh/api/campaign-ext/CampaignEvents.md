---
title: "CampaignEvents"
description: "Bannerlord 战役层的中央发布/订阅事件总线：mod 通过订阅静态事件，在世界发生英雄死亡、据点易主、开战、家族易主等变更时安全做出反应，而不必轮询或改动内部字段。"
---

# CampaignEvents

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CampaignEvents : CampaignEventReceiver`
**Base:** `CampaignEventReceiver`
**File:** `TaleWorlds.CampaignSystem/CampaignEvents.cs`（权威语义来自 bannerlord-1.4.5 源码；本页所列事件均已核对在 1.3.15 中以相同签名存在）

## 一句话职责

战役层全部重要世界变更的「中央通知中心」：当英雄死亡、据点易主、开战、家族易主、金流发生等事情发生时，它把带载荷的通知广播给所有订阅者，让你无需每秒轮询整个世界就能对世界变化做出反应。

## 心智模型

把 `CampaignEvents` 想成战役地图的 **广播喇叭**，而不是一个装着数据的盒子。它本身不持有「英雄列表」「据点列表」这种业务状态——它只持有约 200 个 `MbEvent<T>` 委托容器，以及一个把 `*Action` 的调用翻译成广播的转发逻辑。

### 它在哪一层、谁持有它

- **层**：纯战役（Campaign）层。它和 `Mission` 层的 `IMissionListener` 体系互不相关——在战斗场景里发生的事件走 Mission 那套，不在本页范围内。
- **持有者**：由 `Campaign` 在战役启动时创建并保存为 `Campaign.Current.CampaignEvents`，与战役同生共死，全档唯一实例。
- **双重身份**：它既是一个 `CampaignEventReceiver`（能被事件分发器回调），又通过一堆 `public static IMbEvent<T>` 属性把底层的 `MbEvent<T>` 暴露给 mod 去订阅。
- **你永远不会 `new CampaignEvents()`**：也没有公共构造函数。那个私有的静态 `Instance => Campaign.Current.CampaignEvents` 只是给内部静态属性用的，mod 直接访问 `CampaignEvents.HeroKilledEvent` 这样的静态属性即可。

### 发布 / 订阅（pub/sub）全链路

一次「英雄被杀」从发生到你的代码被调用，要经过四步：

1. **触发方**：游戏内核的某个 `*Action` 在改完世界状态后，调用 `CampaignEventDispatcher.Instance.OnHeroKilled(victim, killer, detail, showNotification)`（真实代码见 `KillCharacterAction.cs:144`）。
2. **分发**：`CampaignEventDispatcher` 把这次调用**扇出**给所有已注册的 `CampaignEventReceiver`（一个数组，包含中央 `CampaignEvents` hub，以及原生的 SandBox 行为接收器）。
3. **投递**：`CampaignEvents` 重写的 `OnHeroKilled(...)` 调用底层 `Instance._heroKilled.Invoke(victim, killer, detail, showNotification)`，从而触发所有通过 `AddNonSerializedListener` 注册的 lambda。
4. **订阅方**：你的 mod 在 `CampaignBehaviorBase.RegisterEvents()` 里写 `CampaignEvents.HeroKilledEvent.AddNonSerializedListener(this, OnHeroKilled)`，于是 lambda 被执行。

### 两种订阅风格

| 风格 | 怎么做 | 谁用 |
|------|--------|------|
| **lambda 监听（推荐）** | 在 `CampaignBehaviorBase.RegisterEvents()` 里调用 `CampaignEvents.XEvent.AddNonSerializedListener(this, handler)` | 绝大多数 mod |
| **receiver 重写** | 自己的行为继承 `CampaignEventReceiver` 并重写 `OnXxx` 虚方法 | 原生 SandBox 行为；mod 很少需要 |

> **关于「序列化 vs 非序列化」**：本版本（`IMbEvent` 接口只声明 `AddNonSerializedListener`）中，委托闭包本身**不会被写入存档**。但承载它的行为（`CampaignBehaviorBase`）是战役对象的一部分——`CampaignBehaviorManager` 在读档后会重建行为并再次调用 `RegisterEvents()`，于是 lambda 会被重新挂上。所以真正要关心的是 **owner 的生命周期**：若 owner 是临时对象（UI / 菜单），读档后该 lambda 既不会恢复、也不会被自动清理，容易泄漏或重复添加（详见风险段）。

## 何时用 / 何时不要用

**用事件**，当你需要「当 X 发生时做某事」：弹通知、记日志、调整某个关联数值、解锁功能、触发自定义逻辑。

**不要用事件**：

- 不要把事件当成「主动改变世界」的入口。事件只是**通知**，改变世界应当走对应的 `*Action.Apply`（例如领主死亡后想给玩家加钱，在 `HeroKilledEvent` 的 handler 里调用 `ChangeHeroGold` / `GoldGainAction`，而不是自己写字段）。
- 不要试图「手动触发一个事件」来骗过其他系统。`CampaignEvents` 没有供 mod 调用的 `Fire` / `Trigger` 公共 API；想让世界发生变化，就调用对应的 `*Action`，它会自己把事件广播出去。
- 不要在 handler 里做耗时 / 阻塞操作——它**同步跑在触发它的那次战役 tick 内**，拖慢或抛异常会卡住整个 tick（见风险段）。
- 不要用「每小时扫描所有 `Hero` 看谁死了」这种轮询代替事件订阅。

## 依赖图（可点击）

**上游（谁触发 / 谁持有）**

- [Campaign](../campaign/Campaign/) — 持有 `CampaignEvents` 的唯一实例，随战役创建与销毁
- [CampaignEventDispatcher](./CampaignEventDispatcher/) — 把每个 `OnXxx` 调用扇出到本 hub 与所有 receiver
- 各类 `*Action`（行动索引见 [actions-index](./actions-index/)）：`KillCharacterAction`、`ChangeOwnerOfSettlementAction`、`ChangeKingdomAction`、`ChangeRelationAction`、`MakePeaceAction`、`DeclareWarAction`、`TakePrisonerAction`、`RemoveCompanionAction`、`StartMercenaryServiceAction`、`EndMercenaryServiceAction`、`TeleportHeroAction`、`SiegeAftermathAction` 等，在改完状态后触发对应事件

**下游（谁消费）**

- [CampaignBehaviorBase](./CampaignBehaviorBase/) — mod 行为在 `RegisterEvents()` 里订阅
- [CampaignEventReceiver](./CampaignEventReceiver/) — 定义全部 `OnXxx` 虚方法的抽象基类
- 游戏内各原生 `CampaignBehavior`（如 `DefaultLogsCampaignBehavior` 监听 `BattleStarted`）

**相关 / 实现**

- [MbEvent](./MbEvent/) 与 [IMbEvent](./IMbEvent/) — 底层委托容器与接口（`AddNonSerializedListener` / `ClearListeners`）
- [ReferenceMBEvent](./ReferenceMBEvent/) — 带 `ref`/`out` 参数的「引用型」事件（如 `CanHeroDieEvent`），允许监听者投票/改写返回值
- [CampaignGameStarter](./CampaignGameStarter/) — 注册行为的入口
- [CampaignBehaviorManager](./CampaignBehaviorManager/) — 管理行为生命周期，读档后重建并复订阅
- [SaveManager](../save-system/SaveManager/) — 存档点：行为随档重建，事件闭包不序列化

## ⚠ 风险与崩溃边界

1. **在战役 tick 之外手动「触发」事件**：没有公共触发 API；直接调用底层 `MbEvent.Invoke` 会绕过一致性检查，破坏其他系统的假设。要通知世界，调用对应的 `*Action`。
2. **handler 闭包捕获了未注册 / 已销毁的 `MBObject` 引用**：如果你的 lambda 持有 `Hero` / `Settlement` 等对象，并在读档后引用了已不存在的实例，它仍可能在 tick 时被调用 → `NullReferenceException` 甚至坏档。尽量在 handler 内现取现用，或先判空。
3. **生命周期 / 序列化错位**：`AddNonSerializedListener` 的闭包不写入存档。若 owner 是临时对象（一次性 UI、菜单），读档后 handler 不会恢复且不会被自动清理——可能泄漏，或在下次 `RegisterEvents()` 时重复叠加。
4. **重复订阅**：`RegisterEvents()` 可能在会话中被多次调用（例如运行期 `CampaignBehaviorManager.AddBehavior`）。若不做去重，同一逻辑会被触发多次。可在 `RegisterEvents()` 开头用 `CampaignEvents.XEvent.ClearListeners(this)`（底层由 `CampaignEventDispatcher.RemoveListeners(obj)` 统一清除某 owner 的全部监听）来去重，或在卸载行为时 `RemoveBehavior`。
5. **handler 内抛未捕获异常**：它同步跑在 tick 中，异常会打断整条 tick 链路，可能连锁导致坏档。handler 内务必 try/catch 关键路径。
6. **在 handler 内增删同一事件的监听**：`MbEvent` 在 `Invoke` 时正遍历单链表，运行期增删可能导致跳过或重复执行。不要在回调里订阅/退订自己。
7. **过早假设世界已初始化**：`OnNewGameCreated` / `OnGameLoaded` 之后世界才完整；不要在 `RegisterEvents()` 里直接访问尚未就绪的世界数据。

## 成员说明：按领域分类的事件索引

下面只列出 mod 最常订阅、最容易误用的事件（完整约 200+ 个静态事件见源文件 `CampaignEvents.cs`）。每个事件给出 `IMbEvent` 载荷类型与「何时触发」。带 ★ 的在下方有深潜。

### Hero（英雄）

| 事件属性 | 载荷类型 | 触发时机 |
|----------|----------|----------|
| `HeroKilledEvent` ★ | `IMbEvent<Hero, Hero, KillCharacterAction.KillCharacterActionDetail, bool>` | 任意英雄死亡（含主角），由 `KillCharacterAction` 触发 |
| `BeforeHeroKilledEvent` ★ | `IMbEvent<Hero, Hero, KillCharacterAction.KillCharacterActionDetail, bool>` | 死亡结算应用**之前**，适合抢救战利品 / 记录临终状态 |
| `HeroWounded` | `IMbEvent<Hero>` | 英雄负伤（不致死） |
| `HeroCreated` | `IMbEvent<Hero, bool>` | 英雄被创建（`bool` 表示是否自然出生） |
| `HeroComesOfAgeEvent` / `HeroReachesTeenAgeEvent` / `HeroGrowsOutOfInfancyEvent` | `IMbEvent<Hero>` | 成长阶段切换 |
| `HeroPrisonerTaken` ★ | `IMbEvent<PartyBase, Hero>` | 英雄被俘，由 `TakePrisonerAction` 触发 |
| `HeroPrisonerReleased` | `IMbEvent<Hero, PartyBase, IFaction, EndCaptivityDetail, bool>` | 英雄结束囚禁 |
| `HeroRelationChanged` | `IMbEvent<Hero, Hero, int, bool, ChangeRelationAction.ChangeRelationDetail, Hero, Hero>` | 两人关系值变化 |
| `HeroLevelledUp` | `IMbEvent<Hero, bool>` | 升级（`bool` 是否弹通知） |
| `OnPlayerMetHeroEvent` / `OnPlayerLearnsAboutHeroEvent` | `IMbEvent<Hero>` | 玩家结识 / 得知某英雄 |
| `RenownGained` | `IMbEvent<Hero, int, bool>` | 声望增加 |
| `OnHeroChangedClan` | `IMbEvent<Hero, Clan>` | 英雄换家族（如成为同伴） |
| `OnBeforeMainCharacterDiedEvent` | `IMbEvent<Hero, Hero, KillCharacterAction.KillCharacterActionDetail, bool>` | 主角濒死前（游戏结束流程相关） |

### Settlement（据点）

| 事件属性 | 载荷类型 | 触发时机 |
|----------|----------|----------|
| `OnSettlementOwnerChangedEvent` ★ | `IMbEvent<Settlement, bool, Hero, Hero, Hero, ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail>` | 城镇/城堡易主，由 `ChangeOwnerOfSettlementAction` 触发 |
| `OnGovernorChangedEvent` | `IMbEvent<Town, Hero, Hero>` | 总督更换（旧/新） |
| `SettlementEntered` / `AfterSettlementEntered` / `BeforeSettlementEnteredEvent` | `IMbEvent<MobileParty, Settlement, Hero>` | 部队进出据点 |
| `OnSettlementLeftEvent` | `IMbEvent<MobileParty, Settlement>` | 部队离开据点 |
| `VillageStateChanged` | `IMbEvent<Village, Village.VillageStates, Village.VillageStates, MobileParty>` | 村庄状态切换（如被劫掠） |
| `RebellionFinished` / `RebelliousClanDisbandedAtSettlement` | `IMbEvent<Settlement, Clan>` | 叛乱平息 / 叛乱家族解散 |
| `TownRebelliosStateChanged` | `IMbEvent<Town, bool>` | 城镇进入/脱离叛乱态 |
| `AlleyOwnerChanged` / `AlleyOccupiedByPlayer` / `AlleyClearedByPlayer` | `IMbEvent<Alley, …>` | 小巷所有权/被占/被清 |
| `MercenaryTroopChangedInTown` / `MercenaryNumberChangedInTown` | `IMbEvent<Town, …>` | 城镇雇佣兵变动 |

### Party & MobileParty（部队）

| 事件属性 | 载荷类型 | 触发时机 |
|----------|----------|----------|
| `OnPartyRemovedEvent` ★ | `IMbEvent<PartyBase>` | 部队从地图移除（解散/被歼） |
| `MobilePartyCreated` / `MobilePartyDestroyed` | `IMbEvent<MobileParty>` / `IMbEvent<MobileParty, PartyBase>` | 部队创建 / 被摧毁 |
| `OnPartySizeChangedEvent` | `IMbEvent<PartyBase>` | 部队规模变化 |
| `OnPartyLeaderChangedEvent` | `IMbEvent<MobileParty, Hero>` | 部队领袖更换 |
| `OnHeroJoinedPartyEvent` | `IMbEvent<Hero, MobileParty>` | 英雄加入部队 |
| `BanditPartyRecruited` | `IMbEvent<MobileParty>` | 匪帮被招募 |
| `OnPartyJoinedArmyEvent` / `OnPartyRemovedFromArmyEvent` / `OnPartyLeftArmyEvent` | `IMbEvent<MobileParty>` / `IMbEvent<MobileParty, Army>` | 加入/离开军团 |
| `OnPartyDisbandStartedEvent` / `OnPartyDisbandedEvent` / `OnPartyDisbandCanceledEvent` | `IMbEvent<MobileParty>` / `IMbEvent<MobileParty, Settlement>` | 部队解散流程 |
| `ItemsLooted` / `OnTroopsDesertedEvent` | `IMbEvent<MobileParty, ItemRoster>` / `IMbEvent<MobileParty, TroopRoster>` | 战利品 / 逃兵 |
| `OnMobilePartyRaftStateChanged` / `OnMobilePartyNavigationStateChangedEvent` | `IMbEvent<MobileParty>` | 渡筏 / 导航状态 |

### War & Diplomacy（战争与外交）

| 事件属性 | 载荷类型 | 触发时机 |
|----------|----------|----------|
| `WarDeclared` ★ | `IMbEvent<IFaction, IFaction, DeclareWarAction.DeclareWarDetail>` | 两阵营宣战，由 `DeclareWarAction` 触发 |
| `MakePeace` | `IMbEvent<IFaction, IFaction, MakePeaceAction.MakePeaceDetail>` | 两阵营议和 |
| `OnClanChangedKingdomEvent` ★ | `IMbEvent<Clan, Kingdom, Kingdom, ChangeKingdomAction.ChangeKingdomActionDetail, bool>` | 家族换王国，由 `ChangeKingdomAction` 触发 |
| `OnClanDefectedEvent` / `OnClanCreatedEvent` / `OnClanDestroyedEvent` | `IMbEvent<Clan, …>` | 家族叛变 / 新建 / 覆灭 |
| `KingdomDecisionAdded` / `KingdomDecisionCancelled` / `KingdomDecisionConcluded` | `IMbEvent<KingdomDecision, …>` | 王国决议流程 |
| `RulingClanChanged` / `OnClanLeaderChangedEvent` | `IMbEvent<Kingdom, Clan>` / `IMbEvent<Hero, Hero>` | 统治家族 / 家族领袖更换 |
| `KingdomCreated` / `KingdomDestroyed` | `IMbEvent<Kingdom>` | 王国创建 / 覆灭 |
| `OnAllianceStartedEvent` / `OnAllianceEndedEvent` | `IMbEvent<Kingdom, Kingdom>` | 同盟建立 / 解除 |
| `OnTradeAgreementSignedEvent` | `IMbEvent<Kingdom, Kingdom>` | 贸易协定签署 |
| `OnMercenaryServiceStartedEvent` / `OnMercenaryServiceEndedEvent` | `IMbEvent<Clan, …>` | 雇佣兵服务开始 / 结束 |
| `ClanTierIncrease` / `OnClanInfluenceChangedEvent` / `OnClanEarnedGoldFromTributeEvent` | `IMbEvent<Clan, …>` | 家族升级 / 影响力 / 贡金 |

### Economy & Trade（经济与贸易）

| 事件属性 | 载荷类型 | 触发时机 |
|----------|----------|----------|
| `HeroOrPartyTradedGold` ★ | `IMbEvent<(Hero, PartyBase), (Hero, PartyBase), (int, string), bool>` | 英雄/部队间转账 |
| `HeroOrPartyGaveItem` | `IMbEvent<(Hero, PartyBase), (Hero, PartyBase), ItemRosterElement, bool>` | 赠与物品 |
| `OnItemSoldEvent` / `OnPrisonerSoldEvent` | `IMbEvent<PartyBase, PartyBase, …>` | 售卖物品 / 囚犯 |
| `OnCaravanTransactionCompletedEvent` | `IMbEvent<MobileParty, Town, List<(EquipmentElement, int)>>` | 商队交易完成 |
| `ItemProducedEvent` / `ItemConsumedEvent` | `IMbEvent<ItemObject, Settlement, int>` | 城镇生产 / 消耗 |
| `OnPlayerTradeProfit` / `OnPlayerEarnedGoldFromAssetEvent` | `IMbEvent<int>` / `IMbEvent<DefaultClanFinanceModel.AssetIncomeType, int>` | 玩家贸易/资产收益 |
| `OnNewItemCraftedEvent` / `OnItemsRefined` / `OnCraftingOrderCompleted` | `IMbEvent<…>` | 锻造相关 |
| `OnWorkshopInitializedEvent` / `OnWorkshopOwnerChangedEvent` / `OnWorkshopTypeChangedEvent` | `IMbEvent<Workshop, …>` | 工坊变动 |
| `OnTradeRumorIsTakenEvent` / `PlayerInventoryExchangeEvent` | `IMbEvent<…>` | 贸易传闻 / 库存交换 |

### Recruitment & Volunteer（招募与志愿兵）

| 事件属性 | 载荷类型 | 触发时机 |
|----------|----------|----------|
| `OnUnitRecruitedEvent` / `OnTroopRecruitedEvent` | `IMbEvent<CharacterObject, int>` / `IMbEvent<Hero, Settlement, Hero, CharacterObject, int>` | 单位/部队招募 |
| `OnTroopGivenToSettlementEvent` | `IMbEvent<Hero, Settlement, TroopRoster>` | 把兵交给据点 |
| `OnMainPartyPrisonerRecruitedEvent` / `OnPrisonerDonatedToSettlementEvent` | `IMbEvent<FlattenedTroopRoster, …>` | 主队招募囚犯 / 捐囚 |
| `OnPrisonerTakenEvent` / `OnPrisonerReleasedEvent` / `OnPrisonerChangeInSettlement` | `IMbEvent<FlattenedTroopRoster, …>` | 普通（非英雄）囚犯变动 |
| `PlayerStartRecruitmentEvent` | `IMbEvent<CharacterObject>` | 玩家开始招募 |
| `OnPlayerCharacterChangedEvent` / `OnBeforePlayerCharacterChangedEvent` | `IMbEvent<Hero, Hero, MobileParty, bool>` / `IMbEvent<Hero, Hero>` | 玩家角色更换（继承/变身等） |

### Romance & Pregnancy（恋爱与生育）

| 事件属性 | 载荷类型 | 触发时机 |
|----------|----------|----------|
| `RomanticStateChanged` | `IMbEvent<Hero, Hero, Romance.RomanceLevelEnum>` | 浪漫关系等级变化 |
| `BeforeHeroesMarried` | `IMbEvent<Hero, Hero, bool>` | 结婚前 |
| `OnMarriageOfferedToPlayerEvent` / `OnMarriageOfferCanceledEvent` | `IMbEvent<Hero, Hero>` | 向玩家提亲 / 撤回 |
| `OnChildConceived` / `OnGivenBirthEvent` | `IMbEvent<Hero>` / `IMbEvent<Hero, List<Hero>, int>` | 受孕 / 生育 |
| `ChildEducationCompletedEvent` | `IMbEvent<Hero, int>` | 子女教育完成 |
| `OnHeroTeleportationRequestedEvent` | `IMbEvent<Hero, Settlement, MobileParty, TeleportHeroAction.TeleportationDetail>` | 请求传送英雄 |

### Siege（围城）

| 事件属性 | 载荷类型 | 触发时机 |
|----------|----------|----------|
| `OnSiegeEventStartedEvent` / `OnSiegeEventEndedEvent` / `OnPlayerSiegeStartedEvent` | `IMbEvent<SiegeEvent>` / `IMbEvent` | 围城开始 / 结束 |
| `SiegeCompletedEvent` / `AfterSiegeCompletedEvent` | `IMbEvent<Settlement, MobileParty, bool, MapEvent.BattleTypes>` | 围城结算（前/后） |
| `SiegeAftermathAppliedEvent` | `IMbEvent<MobileParty, Settlement, SiegeAftermathAction.SiegeAftermath, Clan, Dictionary<MobileParty, float>>` | 围城善后应用 |
| `OnSiegeBombardmentHitEvent` / `OnSiegeBombardmentWallHitEvent` / `OnSiegeEngineDestroyedEvent` | `IMbEvent<MobileParty, Settlement, BattleSideEnum, SiegeEngineType, …>` | 轰击命中 / 城墙 / 引擎被毁 |
| `SiegeEngineBuiltEvent` / `OnBlockadeActivatedEvent` / `OnBlockadeDeactivatedEvent` | `IMbEvent<…>` | 引擎建造 / 封锁 |

### Misc / Lifecycle / Ticks（杂项、生命周期与时钟）

- **时钟**：`DailyTickEvent` / `HourlyTickEvent` / `QuarterHourlyTickEvent` / `WeeklyTickEvent`（`IMbEvent`，无载荷）；`TickEvent`（`IMbEvent<float>`，传已过游戏时间）；以及按对象的 `DailyTickPartyEvent`（`IMbEvent<MobileParty>`）、`DailyTickTownEvent`（`IMbEvent<Town>`）、`DailyTickSettlementEvent`、`DailyTickHeroEvent`、`DailyTickClanEvent`、对应的 `HourlyTick*` 系列。这些是**最高频**的钩子，适合做周期性逻辑，但务必轻量。
- **会话 / 存档**：`OnSessionLaunchedEvent` / `OnAfterSessionLaunchedEvent` / `OnNewGameCreatedEvent` ★ / `OnNewGameCreatedPartialFollowUpEvent`（`IMbEvent<CampaignGameStarter, int>`）/ `OnGameLoadedEvent` / `OnGameEarlyLoadedEvent` / `OnGameLoadFinishedEvent` / `OnGameOverEvent`；`OnBeforeSaveEvent` / `OnSaveStartedEvent` / `OnSaveOverEvent`（`IMbEvent<bool, string>`）。
- **任务 / 议题**：`OnQuestStartedEvent` / `OnQuestCompletedEvent`（`IMbEvent<QuestBase, QuestBase.QuestCompleteDetails>`）/ `OnQuestLogAddedEvent`；`OnIssueUpdatedEvent` ★ / `OnNewIssueCreatedEvent` / `OnIssueOwnerChangedEvent` / `OnIssueLogAddedEvent` / `OnCheckForIssueEvent`。
- **任务（Mission）桥接**：`OnMissionStartedEvent` / `OnMissionEndedEvent` / `AfterMissionStarted`（`IMbEvent<IMission>`）、`MapEventStarted` / `MapEventEnded`（`IMbEvent<MapEvent, …>`）、`OnHeroCombatHitEvent` ★（`IMbEvent<CharacterObject, CharacterObject, PartyBase, WeaponComponentData, bool, int>`）、`OnPlayerBattleEndEvent`。
- **对话 /  tournament /  barter**：`OnAgentJoinedConversationEvent`、`OnConversationEnded`、`PlayerStartTalkFromMenu`、`PersuasionProgressCommittedEvent`；`TournamentStarted` / `TournamentFinished` / `PlayerStartedTournamentMatch` / `OnPlayerJoinedTournamentEvent`；`BarterablesRequested` / `OnBarterAcceptedEvent` / `OnBarterCanceledEvent`。
- **引用型「can-*」事件**（`ReferenceMBEvent`，可改写返回值）：`CanHeroDieEvent`、`CanMarryEvent`、`CanHeroLeadPartyEvent`、`CanKingdomBeDiscontinued`、`CanHeroEquipmentBeChangedEvent`、`CanHeroBecomePrisonerEvent`、`CanMoveToSettlementEvent` 等——订阅时 handler 的最后一个参数是 `ref`/`out`，用于投票或改写。

## 高频事件深潜（真实签名 + 订阅片段）

下面 10 个事件覆盖绝大多数 mod 的真实需求。每个都给出**真实静态属性签名**、**触发时机**、**载荷含义**与**安全订阅片段**。

### 1. `HeroKilledEvent` — 英雄死亡

```csharp
// 静态属性签名（来自 CampaignEvents.cs）
public static IMbEvent<Hero, Hero, KillCharacterAction.KillCharacterActionDetail, bool> HeroKilledEvent { get; }

// 触发：任意英雄死亡，由 KillCharacterAction.ApplyByBattle / ApplyByOldAge 等调用
//       CampaignEventDispatcher.Instance.OnHeroKilled(victim, killer, detail, showNotification)
// 载荷顺序：(Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification)
```

```csharp
CampaignEvents.HeroKilledEvent.AddNonSerializedListener(this, OnHeroKilled);

private void OnHeroKilled(Hero victim, Hero killer,
    KillCharacterAction.KillCharacterActionDetail detail, bool showNotification)
{
    if (victim == null || !victim.IsLord) return; // 现取现用，避免持有悬空引用
    InformationManager.DisplayMessage(
        new InformationMessage($"{victim.Name} 死于 {killer?.Name}（原因：{detail}）"));
}
```

### 2. `BeforeHeroKilledEvent` — 死亡结算前

```csharp
public static IMbEvent<Hero, Hero, KillCharacterAction.KillCharacterActionDetail, bool> BeforeHeroKilledEvent { get; }
// 载荷同 HeroKilledEvent。适合在角色真正从世界移除前抢救战利品、记录临终关系或触发遗言。
```

### 3. `OnSettlementOwnerChangedEvent` — 据点易主

```csharp
public static IMbEvent<Settlement, bool, Hero, Hero, Hero,
    ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail> OnSettlementOwnerChangedEvent { get; }

// 触发：ChangeOwnerOfSettlementAction 改完归属后
// 载荷：(Settlement settlement, bool openToClaim, Hero newOwner, Hero oldOwner,
//        Hero capturerHero, ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail detail)
```

```csharp
CampaignEvents.OnSettlementOwnerChangedEvent.AddNonSerializedListener(this, OnSettlementOwnerChanged);

private void OnSettlementOwnerChanged(Settlement settlement, bool openToClaim,
    Hero newOwner, Hero oldOwner, Hero capturerHero,
    ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail detail)
{
    if (settlement == null) return;
    // detail 区分是征服/宣称/叛乱等来源
}
```

### 4. `OnPartyRemovedEvent` — 部队从地图移除

```csharp
public static IMbEvent<PartyBase> OnPartyRemovedEvent { get; }
// 触发：MobileParty 被摧毁或解散时。注意载荷是 PartyBase（不止 MobileParty）。
// 载荷：(PartyBase party)
```

> 想「区分是主队还是某 AI 部队」请在 handler 内用 `party.IsMainParty` 或 `party.MobileParty` 判断；不要假设它就是 `MobileParty`。

### 5. `OnClanChangedKingdomEvent` — 家族换王国

```csharp
public static IMbEvent<Clan, Kingdom, Kingdom,
    ChangeKingdomAction.ChangeKingdomActionDetail, bool> OnClanChangedKingdomEvent { get; }

// 触发：ChangeKingdomAction 改完归属后
// 载荷：(Clan clan, Kingdom oldKingdom, Kingdom newKingdom,
//        ChangeKingdomAction.ChangeKingdomActionDetail detail, bool showNotification)
```

### 6. `HeroOrPartyTradedGold` — 转账

```csharp
public static IMbEvent<(Hero, PartyBase), (Hero, PartyBase), (int, string), bool> HeroOrPartyTradedGold { get; }

// 载荷：((Hero giver, PartyBase giverParty), (Hero recipient, PartyBase recipientParty),
//        (int goldAmount, string text), bool showNotification)
// 注意这里用的是 C# 值元组；解构时 (Hero giver, PartyBase giverParty) 分别对应两个字段。
```

### 7. `OnIssueUpdatedEvent` — 议题更新

```csharp
public static IMbEvent<IssueBase, IssueBase.IssueUpdateDetails, Hero> OnIssueUpdatedEvent { get; }

// 触发：IssueBase 内部在玩家接取/推进/完成/失败/超时等时调用
//       CampaignEventDispatcher.Instance.OnIssueUpdated(this, details, solver)
// 载荷：(IssueBase issue, IssueBase.IssueUpdateDetails details, Hero issueSolver)
//       details 是枚举：PlayerStartedIssueQuestClassicSolution / IssueFinishedWithSuccess /
//       IssueFail / IssueTimedOut / IssueCancel ...
```

### 8. `HeroPrisonerTaken` — 英雄被俘

```csharp
public static IMbEvent<PartyBase, Hero> HeroPrisonerTaken { get; }
// 触发：TakePrisonerAction 把英雄设为囚犯后
// 载荷：(PartyBase capturer, Hero prisoner)
// 注意：普通（非英雄）士兵被俘走的是 OnPrisonerTakenEvent（IMbEvent<FlattenedTroopRoster>），别混用。
```

### 9. `OnNewGameCreatedEvent` — 新游戏创建

```csharp
public static IMbEvent<CampaignGameStarter> OnNewGameCreatedEvent { get; }
// 触发：新战役建立、OnSessionLaunched 之后。这是初始化「每局游戏状态」的安全点。
// 载荷：(CampaignGameStarter campaignGameStarter)
```

### 10. `BattleStarted` — 战斗/袭击开始（附 `WarDeclared`、`OnHeroCombatHitEvent`）

```csharp
public static IMbEvent<PartyBase, PartyBase, object, bool> BattleStarted { get; }
// 触发：地图战斗/袭击开始时（底层 _battleStarted.Invoke(attackerParty, defenderParty, subject, showNotification)）
// 载荷：(PartyBase attackerParty, PartyBase defenderParty, object subject, bool showNotification)
//       subject 是具体的战斗/袭击实体（MapEvent / RaidEventComponent 等），按需 as 转换。

public static IMbEvent<IFaction, IFaction, DeclareWarAction.DeclareWarDetail> WarDeclared { get; }
// 载荷：(IFaction faction1, IFaction faction2, DeclareWarAction.DeclareWarDetail declareWarDetail)

public static IMbEvent<CharacterObject, CharacterObject, PartyBase, WeaponComponentData, bool, int>
    OnHeroCombatHitEvent { get; }
// 载荷：(CharacterObject attackerTroop, CharacterObject attackedTroop, PartyBase party,
//        WeaponComponentData usedWeapon, bool isFatal, int xp)
// 注意：这是战役层的战斗命中通知（来自战斗结算），不是 Mission 内的每帧 Agent 命中。
```

## 最小真实示例

### 示例 1：一个监听英雄死亡的行为（真实订阅路径）

```csharp
using System;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.Core;
using TaleWorlds.Localization;

public class LordDeathLogger : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        // owner 传 this：行为卸载时 CampaignEventDispatcher.RemoveListeners(this)
        // 会统一清除本行为注册的全部监听，避免泄漏。
        CampaignEvents.HeroKilledEvent.AddNonSerializedListener(this, OnHeroKilled);
    }

    private void OnHeroKilled(Hero victim, Hero killer,
        KillCharacterAction.KillCharacterActionDetail detail, bool showNotification)
    {
        // handler 跑在触发本次死亡的战役 tick 内——务必轻量、判空。
        if (victim == null || !victim.IsLord) return;
        InformationManager.DisplayMessage(
            new InformationMessage(
                new TextObject("{=}领主 {VICTIM} 已被 {KILLER} 击杀")
                    .SetTextVariable("VICTIM", victim.Name)
                    .SetTextVariable("KILLER", killer?.Name ?? "未知")));
        // 想改变世界？调用 *Action，例如：
        // Hero.MainHero.ChangeHeroGold(100);  // 或 GoldGainAction.ApplyForHero(...)
    }

    public override void SyncData(IDataStore dataStore)
    {
        // 本行为无持久字段；有状态时要在这里读档/写档。
    }
}
```

### 示例 2：把行为注册进战役（真实获取路径）

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.MountAndBlade;

public class MySubModule : MBSubModuleBase
{
    protected internal override void InitializeGameStarter(Game game, IGameStarter starterObject)
    {
        if (game.GameType is Campaign campaign)
        {
            // CampaignGameStarter.AddBehavior 把行为加入战役；
            // CampaignBehaviorManager 随后会调用其 RegisterEvents()，于是上面的监听挂上。
            ((CampaignGameStarter)starterObject).AddBehavior(new LordDeathLogger());
        }
    }
}
```

> 也可以运行期动态添加：`Campaign.Current.CampaignBehaviorManager.AddBehavior(new LordDeathLogger());`（该方法会立即调用一次 `RegisterEvents()`）。

## 跨版本提示

- 本页权威语义来自 **bannerlord-1.4.5** 源码；页内列出的事件（`HeroKilledEvent`、`OnSettlementOwnerChangedEvent`、`OnPartyRemovedEvent`、`OnClanChangedKingdomEvent`、`OnIssueUpdatedEvent`、`HeroPrisonerTaken`、`OnNewGameCreatedEvent`、`BattleStarted`、`WarDeclared`、`HeroOrPartyTradedGold`、`OnHeroCombatHitEvent`、`DailyTickPartyEvent` 等）均已核对在 **1.3.15** 中以**相同 `IMbEvent<T>` 签名**存在。
- 两个版本里 `IMbEvent` 都只暴露 `AddNonSerializedListener`——即「非序列化监听」，没有旧文档里偶尔提到的 `AddListener`（序列化监听）公共 API；监听的恢复完全依赖行为随档重建。若你见过 `AddListener`，那是对其它引擎版本的误解。
- 本页聚焦 Campaign 层；战斗场景内的实时事件（Agent 命中、Mission 开始/结束等）请走 `Mission` / `IMissionListener` 体系（见 [Mission](../mission/Mission/)）。

## 参见

- ↑ 父级：[campaign-ext 索引](../)
- ↔ 同级：[CampaignBehaviorBase](./CampaignBehaviorBase/) · [CampaignEventReceiver](./CampaignEventReceiver/) · [CampaignEventDispatcher](./CampaignEventDispatcher/) · [CampaignGameStarter](./CampaignGameStarter/) · [CampaignBehaviorManager](./CampaignBehaviorManager/) · [MbEvent](./MbEvent/) · [IMbEvent](./IMbEvent/) · [ReferenceMBEvent](./ReferenceMBEvent/) · [行动索引](./actions-index/)
- 相关类：[Campaign](../campaign/Campaign/) · [Hero](../campaign/Hero/) · [Settlement](../campaign/Settlement/) · [MobileParty](../campaign/MobileParty/) · [Clan](../campaign/Clan/) · [Kingdom](../campaign/Kingdom/) · [PartyBase](../campaign/PartyBase/) · [IssueBase](./IssueBase/) · [CharacterObject](../campaign/CharacterObject/) · [Workshop](../campaign/Workshop/) · [Village](../campaign/Village/) · [存档系统](../save-system/SaveManager/) · [MBSubModuleBase](../core/MBSubModuleBase/)
