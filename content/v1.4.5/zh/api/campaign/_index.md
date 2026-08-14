---
title: "campaign 目录"
description: TaleWorlds.CampaignSystem 战役模块类参考目录
---
## 模块心智模型

campaign 模块是 Bannerlord 的**世界状态层**：它不渲染任何东西，只持有并推进整个沙盒在地图尺度上的全部事实——谁在哪、谁属于谁、谁拥有什么、钱从哪来。所有 mod 的"世界逻辑"（经济、外交、家族、任务）最终都要回到这里读状态、改状态，而战斗场景只是它偶尔派出去的"执行现场"。

它处于 SDK 分层里承上启下的位置：比 `core`/`core-extra` 的纯数据更高一层，封装了"有生命的实体"；又比 `campaign-ext` 的 Behavior 框架更低一层，是那些 Behavior 每帧/每 tick 读写的数据本体。换句话说，`campaign-ext` 提供"何时跑什么逻辑"的框架，而本模块（`TaleWorlds.CampaignSystem`）提供"被操作的那堆对象"。

核心职责可拆成五块：**定居点体系**（城镇/城堡/村庄/巢穴及其经济繁荣度、驻军、围城，见 `Settlement`/`Village`），**社会与政治实体**（英雄、家族、王国及其从属与外交，见 `Hero`/`Clan`/`Kingdom`），**移动力量**（在地图上行进、贸易、征战的部队，见 `MobileParty`/`PartyBase`），**模板与角色数据**（`CharacterObject` 是英雄与兵种共享的属性模板），以及**玩法循环**（任务 `IssueBase` 与 `Workshop` 作坊经营这类持续进行的系统）。理解本模块的关键，是记住这些对象都活在 `Campaign.Current` 这个全局世界实例里，并被存档系统全程追踪。

## 核心入口类型

挑出本目录里最常被直接操作的十一个类型，按"先拿到世界、再拿到实体"的顺序：

- [Campaign](./Campaign) — 全局世界实例，`Campaign.Current` 是所有战役逻辑的起点。
- [Hero](./Hero) — 一个具体角色（玩家、领主、同伴），连接属性、社会身份与状态。
- [Clan](./Clan) — 家族，英雄的归属与据点的拥有者。
- [Kingdom](./Kingdom) — 王国/阵营，家族的上级政治实体与战争状态持有者。
- [Settlement](./Settlement) — 固定据点统一入口（城镇/城堡/村庄/巢穴）。
- [Village](./Village) — 村庄组件，连接生产、补给与母城。
- [MobileParty](./MobileParty) — 地图上移动、贸易、作战的部队（含玩家主力）。
- [PartyBase](./PartyBase) — 部队的统一句柄，既包裹移动部队也包裹据点守军。
- [CharacterObject](./CharacterObject) — 英雄与兵种共享的属性模板（技能、装备、身体属性）。
- [IssueBase](./IssueBase) — 任务/问题的基类，持续进行的玩法循环载体。
- [Workshop](./Workshop) — 城镇作坊经营实体，经济系统的组成部分。

## 与其他模块的关系

campaign 与 `campaign-ext` 是"数据"与"逻辑框架"的配对：`campaign-ext` 里的 [CampaignBehaviorBase](../campaign-ext/CampaignBehaviorBase/)、[CampaignEvents](../campaign-ext/CampaignEvents/)、[CampaignGameStarter](../campaign-ext/CampaignGameStarter/)、[CampaignTime](../campaign-ext/CampaignTime/) 负责决定"什么时候、由谁"去读写本模块的对象；本模块的 `Campaign` 又反过来在这些行为的生命周期里提供 `Models` 与管理器。两者必须配合，单独理解任何一边都会觉得缺了一块。

战斗（Mission）是 campaign 派出去的"执行现场"：地图上两支部队相遇会生成 [MapEvent](../campaign-ext/MapEvent/)，但 `PartyBase`、名册仍属战役态，绝不要在战斗场景里直接改写，否则会和每帧同步冲突、可能坏档。文本与名称走 `../core/` 里的 `TextObject`/`MBObjectBase` 体系（本地化由 core 承载），而 `Campaign` 自身通过 `SyncData` 把本模块所有对象序列化进存档——这也是为什么跨模块引用对象时要依赖 `Campaign.Current` 的查找入口，而非自己缓存裸引用。架构层面的崩溃/坏档边界见 [崩溃边界](../../architecture/crash-boundaries/)。

## 风险边界

本模块存在明确的崩溃与存档损坏风险，主要来自两类操作：一是**绕过 Action 直接改名册**——给部队加英雄必须用 `AddHeroToPartyAction`/`TakePrisonerAction`，否则英雄的 `PartyBelongedTo` 等状态不会更新；二是**在错误时机/上下文访问依赖 `Campaign.Current` 的属性**（如 `PartyBase.PartySizeLimit`、`EstimatedStrength`、`Culture`），在 `Campaign.Current == null` 或 `MapFaction == null` 时调用会抛 `NullReferenceException`。`MapEvent`/`MapEventSide` 更是瞬态字段，事件结束即变 `null`，不可当作长期状态缓存。具体规避清单见 [崩溃边界](../../architecture/crash-boundaries/)。

<!-- BEGIN SECTION INDEX -->

## ↑ 上级导航

- [API 参考](../)
- [版本首页](../../)

## ↓ 子类列表 — 按字母分组

### A

- [AIMoveToNearestLandBehavior](./AIMoveToNearestLandBehavior)
- [Alliance](./Alliance)

### B

- [BehaviorSaveData](./BehaviorSaveData)

### C

- [CachedPartyVariables](./CachedPartyVariables)
- [CallToWarAgreement](./CallToWarAgreement)
- [Campaign](./Campaign)
- [CampaignBehaviorDataStore](./CampaignBehaviorDataStore)
- [CharacterObject](./CharacterObject)
- [Clan](./Clan)
- [CraftedItemInitializationData](./CraftedItemInitializationData)

### D

- [DialogFlowContext](./DialogFlowContext)
- [DialogFlowLine](./DialogFlowLine)
- [DisorganizedStateCampaignBehavior](./DisorganizedStateCampaignBehavior)

### E

- [EncyclopediaListItemNameComparer](./EncyclopediaListItemNameComparer)
- [EncyclopediaModel](./EncyclopediaModel)
- [EventHandlerRec](./EventHandlerRec)
- [ExplanationLine](./ExplanationLine)
- [ExtortionByDesertersQuestState](./ExtortionByDesertersQuestState)

### F

- [FactionManagerStancesData](./FactionManagerStancesData)
- [FakeMarketData](./FakeMarketData)

### G

- [Grievance](./Grievance)
- [GrievanceType](./GrievanceType)

### H

- [Hero](./Hero)
- [HeroCraftingRecord](./HeroCraftingRecord)
- [HeroRelations](./HeroRelations)

### I

- [ILocatable](./ILocatable)
- [IssueBase](./IssueBase)
- [IssueState](./IssueState)
- [ItemTradeData](./ItemTradeData)

### K

- [Kingdom](./Kingdom)

### L

- [LocatorGrid](./LocatorGrid)

### M

- [MapTimeTracker](./MapTimeTracker)
- [MenuContextState](./MenuContextState)
- [MobileParty](./MobileParty)

### N

- [NarrativeMenuCharacterArgs](./NarrativeMenuCharacterArgs)
- [NavigationCacheElement](./NavigationCacheElement)

### P

- [PartyBase](./PartyBase)
- [PeriodicTicker](./PeriodicTicker)
- [PreconditionFlags](./PreconditionFlags)
- [Pregnancy](./Pregnancy)

### Q

- [QuestStates](./QuestStates)

### S

- [Settlement](./Settlement)
- [StanceType](./StanceType)

### T

- [TeleportationData](./TeleportationData)
- [TradeActionLog](./TradeActionLog)
- [TradeActionLogPool](./TradeActionLogPool)
- [TradeAgreement](./TradeAgreement)

### V

- [Village](./Village)

### W

- [Workshop](./Workshop)
- [WorkshopData](./WorkshopData)


<!-- END SECTION INDEX -->
