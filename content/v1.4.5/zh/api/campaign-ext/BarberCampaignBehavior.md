---
title: "BarberCampaignBehavior"
description: "城镇理发师 NPC 与角色外观（FaceGen）修改入口：对话、Location 生成、开启 BarberState、收取 100 金。"
---
# BarberCampaignBehavior

**Namespace:** SandBox.CampaignBehaviors
**Module:** SandBox
**类型：** `public class BarberCampaignBehavior : CampaignBehaviorBase, IFacegenCampaignBehavior, ICampaignBehavior`
**Base:** `CampaignBehaviorBase`
**源文件:** `Modules.SandBox/SandBox/SandBox.CampaignBehaviors/BarberCampaignBehavior.cs`

## 概述

`BarberCampaignBehavior` 是 SandBox 模块里负责「城镇理发师」的一类 `CampaignBehavior`：它把理发师 NPC 摆进城镇中心（`center`）Location、在对话里提供「理发」选项、并在玩家确认后开启 `BarberState`（FaceGen 外观编辑界面）让主角改头换面，最后通过 `GiveGoldAction` 收取 100 金。它不持有需要跨存盘点保留的字段——所有状态都在进入会话时即时重建，因此 `SyncData` 是空的。对 mod 作者来说，它的价值在于：想接入「改外观」流程、替换发型/胡须候选集、或把某类角色也变成可理发对象时，这是唯一正确的入口。

## 心智模型

把它想成「理发师这条故事线的导演」。它只在 **战役层（Campaign）** 活动，不直接碰 Mission/Agent；它做三件事：① 在城镇 `center` 里**生成**理发师 LocationCharacter；② 通过 `OnSessionLaunched` 往对话系统**注册**一整套理发对话；③ 当玩家选「理发」时，**压入**一个 `BarberState` 游戏状态来调起 FaceGen UI。

关键认知：它**不是**数据对象，也没有可让你直接读写的「当前外观」字段。外观是真在 `Hero.MainHero.BodyProperties` 上的，本类只是「编辑器 + 收费员」。它刻意**不实现 `SyncData`**——理发师是每次会话重新生成的临时 Location NPC，没有任何需要存档的进度；这与下面 `ArenaMasterCampaignBehavior` 那种要记录「是否见过角斗场老板」的行为形成对照，也意味着你**不能**指望它帮你持久化任何自定义状态。

生命周期：随战役启动由 `CampaignBehaviorManager` 实例化 → `RegisterEvents` 订阅 `OnSessionLaunchedEvent` 与 `LocationCharactersAreReadyToSpawnEvent` → 玩家进城时生成理发师 → 对话触发理发 → 关闭。整条线都在地图/城镇场景，不在战场内。

## 何时用 / 何时不要用

- **用**：你想让玩家在城镇里能改外观；想控制某文化/种族/性别下可选的发型与胡须集合；想复用官方收费（100 金）逻辑。
- **不要用**：想改 NPC 外观——那是 `Hero`/`CharacterObject` 的 `BodyProperties`，直接改字段或走别的 Behavior；想在战场上改外观——`BarberState` 是地图态 UI，战场内没有 Location 语境；想持久化自定义数据——本类不存档，请把状态放进自己的 Behavior 的 `SyncData`。

## 依赖

- 上游：[CampaignBehaviorBase](../../campaign/CampaignBehaviorBase)（基类，提供 `RegisterEvents`/`SyncData` 契约）、[CampaignEvents](../../campaign/CampaignEvents)（`OnSessionLaunchedEvent`、`LocationCharactersAreReadyToSpawnEvent`）、[Hero](../../campaign/Hero)（取 `MainHero` 与 `Gold`）、[Settlement](../../campaign/Settlement)（取 `CurrentSettlement` 与 `Culture`）。
- 下游 / 相关：[GiveGoldAction](../GiveGoldAction)（收费唯一正确通道）、[GameStateManager](../../core-extra/GameStateManager) 与 `BarberState`、[FaceGen](../../core-extra/FaceGen)、[BodyPropertiesModel](../../campaign/BodyPropertiesModel)（提供发型/胡须索引）、[AgeModel](../../campaign/AgeModel)（Location NPC 年龄区间）、[LocationCharacter](../../campaign/LocationCharacter)（理发师实体）、[SandBoxManager](../../campaign/SandBoxManager)（取 `AgentBehaviorManager`）、[CampaignGameStarter](../../campaign/CampaignGameStarter)（注册对话）。

## 成员说明

### RegisterEvents()
订阅两个事件：`OnSessionLaunchedEvent` → `OnSessionLaunched`（注册对话）；`LocationCharactersAreReadyToSpawnEvent` → `LocationCharactersAreReadyToSpawn`（在中心生成理发师）。这是 Behavior 的标准入口，不能手动调。

### SyncData(IDataStore store)
**空实现**。本类无任何需要存档的字段（理发师是临时 Location NPC）。如果你 fork 它并新增字段，必须在此同步，否则读档后字段归零。

### OnSessionLaunched(CampaignGameStarter starter) → AddDialogs(...)
注册整棵理发对话（`barber_start_talk` / `player_accept_haircut` / `finish_cut_token` 等）。要点：选项 `player_accept_haircut` 的 `OnClickableConditionDelegate` 是 `DoesPlayerHaveEnoughGold`——`Hero.MainHero.Gold < 100` 时该行变灰并提示「Not Enough Gold」。

### GivePlayerAHaircut()
真正「打开理发店」：先用 `InitializeBarberConversation` 快照 `Hero.MainHero.BodyProperties.StaticProperties` 到 `_previousBodyProperties`，再
```csharp
_isOpenedFromBarberDialogue = true;
BarberState state = Game.Current.GameStateManager.CreateState<BarberState>(
    Hero.MainHero.CharacterObject, GetFaceGenFilter());
GameStateManager.Current.PushState(state, 0);
```
把 `BarberState` 压入游戏状态栈。注意它只在对话上下文里被调用——状态栈需要合法的栈环境。

### ChargeThePlayer()
理发确认后的收费，也是「世界变更走 Action」的范本：
```csharp
GiveGoldAction.ApplyBetweenCharacters(Hero.MainHero, null, 100, false);
```
金币从 `Hero.MainHero` 流出、收款方为 `null`（即进入世界而不落入某个具体账户）。**不要**直接 `Hero.MainHero.Gold -= 100`，否则经济监听、任务奖励、日志都不会同步。

### GetFaceGenFilter() : IFaceGeneratorCustomFilter
根据当前 `Settlement.CurrentSettlement.Culture`（或全局所有 `CultureObject`）与主角种族/性别/年龄，向 `BodyPropertiesModel.GetHairIndicesForCulture` / `GetBeardIndicesForCulture` 收集可选索引，返回一个 `BarberFaceGeneratorCustomFilter`。这就是玩家在 FaceGen UI 里能看到的发型/胡须候选集——想扩充候选，必须从 `BodyPropertiesModel` 这一层入手，而不是改这里。

### CreateBarber(CultureObject culture, CharacterRelations relation) : LocationCharacter
构建理发师 LocationCharacter：取 `culture.Barber`，按 `AgeModel.GetAgeLimitForLocation` 决定年龄，用 `SimpleAgentOrigin` + `FaceGen.GetMonsterWithSuffix(race,"_settlement_slow")` 造 `AgentData`，并挂上 `SandBoxManager.Instance.AgentBehaviorManager.AddWandererBehaviors`。

### LocationCharactersAreReadyToSpawn(Dictionary<string,int> unusedUsablePointCount)
当玩家在城镇、是白天、且 `center` Location 可用（`sp_merchant_notary` 点位存在）时，把理发师加进 `center`：
```csharp
locationWithId.AddLocationCharacters(
    new CreateLocationCharacterDelegate(CreateBarber),
    Settlement.CurrentSettlement.Culture, CharacterRelations.Neutral, 1);
```

## 风险

- **收费必须走 `GiveGoldAction`**：任何 `Hero.MainHero.Gold -= 100` 式直写都会让经济系统「看不见」这笔钱，导致任务/日志/收支统计错乱，是典型坏档隐患。
- **`SyncData` 为空是故意的**：它不存档，也**不会**替你存档。在其派生类里加字段而忘了 `SyncData` → 读档即丢。
- **`BarberState` 只能在合法状态栈里压入**：`GivePlayerAHaircut` 由对话后果触发；若在城镇 Location 之外（例如地图 UI 直接调）压栈，状态栈会失衡甚至崩溃。
- **候选集来自 `BodyPropertiesModel`**：为自定义文化添加理发支持时，必须在该 Model 注册发型/胡须索引，否则 FaceGen UI 可能为空。
- **`IsConversationAgentBarber` 依赖 `Culture.Barber`**：若某文化未配置 `Barber` 角色，`CharacterObject.OneToOneConversationCharacter` 不会命中，对话分支整体失效。

## 最小真实示例

在城镇与理发师对话并成功理发后扣费（官方逻辑精简版）：
```csharp
// 收费：金币从主角流出，不落入具体账户——永远用 Action，不要直写 Gold
GiveGoldAction.ApplyBetweenCharacters(Hero.MainHero, null, 100, false);

// 打开外观编辑界面（仅在对话/合法状态栈内）
BarberState state = Game.Current.GameStateManager.CreateState<BarberState>(
    Hero.MainHero.CharacterObject, GetFaceGenFilter());
GameStateManager.Current.PushState(state, 0);
```

## 导航

- ↑ 父级/枢纽：[CampaignBehaviorBase](../../campaign/CampaignBehaviorBase)（所有战役行为的基类与生命周期契约）
- ↔ 同级行为：[ArenaMasterCampaignBehavior](../ArenaMasterCampaignBehavior)（同样在城镇 Location 生成 NPC 并注册对话）
- 相关系统：[GiveGoldAction](../GiveGoldAction)（收费通道）、[BodyPropertiesModel](../../campaign/BodyPropertiesModel)（外观候选集来源）、[FaceGen](../../core-extra/FaceGen)
