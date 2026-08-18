---
title: "CaravansCampaignBehavior"
description: "管理领主商队（Caravan）的生成、跨城镇贸易、海军船队建造与日常维护的战役行为；由 CaravansCampaignBehaviorTypeDefiner 在战役启动时自动注册，并随存档序列化商队交易日志与玩家交互记录。"
---

# CaravansCampaignBehavior

**命名空间：** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public class CaravansCampaignBehavior : CampaignBehaviorBase`
**源文件：** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/CaravansCampaignBehavior.cs`

## 概述

`CaravansCampaignBehavior` 是战役层（Campaign）的经济行为之一，负责领主商队 `MobileParty` 的整个生命周期：它依据 `CaravanModel` 的决策数值决定哪些领主可以创建商队、在何时何地生成商队，驱动商队在城镇间低买高卖、积累 `Town` 的贸易税与价格索引，并在拥有港口时购买/裁撤运输船形成海军船队。它还记录每支商队与玩家的交互状态（友好、交易、敌对、被劫）以及最近的买卖流水，使商队成为连接各 `Settlement` 经济系统的流动节点，而非仅是一支自动寻路的队伍。

## 心智模型

`CaravansCampaignBehavior` 运行在 Campaign 层，既不是 Mission 也不是 UI 层；它由同文件内嵌的 `CaravansCampaignBehaviorTypeDefiner`（`SaveableTypeDefiner`，类型 id `60000`）在战役初始化时自动实例化并随存档类型表注册，modder 无需手动 `new`。它在 `RegisterEvents` 中向 `CampaignEvents` 订阅约 14 个事件，由战役的时间 tick 与世界变更驱动：`DailyTick` 刷新全局价格缓存、`DailyTickHero` 按 0.75 概率让符合条件的领主生成商队、`HourlyTickParty` 为每支商队决定下一站目的地与买卖动作、`OnSettlementEntered`/`OnSettlementLeft` 在商队进出城镇时执行买卖与清舱。它持有的状态以 `MobileParty` 为键的多个字典（交易传闻、被劫、交互类型、买卖流水、上次回本城时间）以及玩家商队禁行王国列表，全部通过 `SyncData` 写入存档；`OnGameLoadFinished` 在读取完成后重建价格缓存并清理失效商队记录。决策数值（能否建队、精英概率、船数上限、船价）来自 `CaravanModel` 与 `PartyShipLimitModel`，行为只管状态与流程，模型只管数值——二者不要混用。

## 何时使用 / 何时不要使用

- **想读取或修改商队数据**：`Campaign.Current.GetCampaignBehavior<CaravansCampaignBehavior>()` 取出实例；需要让某领主建队时调用其 `SpawnCaravan`。
- **想改变世界状态**：走对应的 `*Action`（如 `ChangeShipOwnerAction`、`DestroyShipAction`）或本行为的公开方法，而不是直接改 `MobileParty` 的 `ItemRoster`/`PartyTradeGold` 等字段——绕过行为会让价格缓存、交易流水与交互记录不同步，严重时坏档。
- **不要从 Mission 层访问**：本行为属于 Campaign，`Campaign.Current` 在战斗/地图 UI 之外可能尚未启动，`GetCampaignBehavior` 会返回 `null`；订阅事件也必须在 `RegisterEvents` 内登记，否则不会触发。
- **自定义行为**：你的 mod 若新增 `CampaignBehaviorBase` 子类，应在 `CampaignGameStarter` 的初始化入口用 `AddBehavior` 注册，而不是依赖商队这个 `TypeDefiner`。

## 依赖图

上游（注册方 / 决策来源）：

- 注册与基类：[CampaignBehaviorBase](../CampaignBehaviorBase) · 战役容器与事件门面：[Campaign](../Campaign) · 自定义行为挂载点：[CampaignGameStarter](../CampaignGameStarter) · 事件总线：[CampaignEvents](../CampaignEvents)
- 决策模型：[CaravanModel](../CaravanModel) · 贸易协定（禁行王国判定）：[ITradeAgreementsCampaignBehavior](../ITradeAgreementsCampaignBehavior) 与其实现 [TradeAgreementsCampaignBehavior](../TradeAgreementsCampaignBehavior)

下游（真实消费 / 协作对象）：

- 商队本体：[MobileParty](../MobileParty)（筛选 `IsCaravan`、读写 `ItemRoster`/`PartyTradeGold`/`Ships`）· 商队组件：[CaravanPartyComponent](../CaravanPartyComponent)
- 经济交互：[Settlement](../Settlement) 与 [Town](../Town)（港口、可用船、价格索引、贸易税）· 拥有者：[Hero](../Hero)（建队资格、`AddPower`）与 [Clan](../Clan)（玩家氏族禁行王国）· 建队模板：[PartyTemplateObject](../PartyTemplateObject)

## 风险

- **注册 / 生命周期时机**：行为由 `CaravansCampaignBehaviorTypeDefiner` 自动注册，若你误在战役未启动（如 SubModule 早期或 Mission 中）调用 `GetCampaignBehavior`，会得到 `null` 并空引用崩溃。
- **Mission 层访问 Campaign Behavior**：在战斗、对话或地图 UI 代码里直接读商队行为，会遇到 `Campaign.Current` 未就绪或 tick 未运行的竞态；应通过 `CampaignEvents` 在 Campaign 层订阅。
- **直接改 `MobileParty` 字段绕过行为**：手写改 `ItemRoster`、`PartyTradeGold`、`Ships` 会导致价格缓存、`_tradeActionLogs`、`_lootedCaravans` 等状态与实际货物脱节，存档重载后可能出现负金、超重或船数异常等坏档。
- **存档序列化配对**：`SyncData` 序列化的 6 个字典必须读写同键；若将来新增字段只写不读，旧档读取会缺字段、新档写入多字段，造成版本错配。
- **事件订阅遗漏**：bmodder 自定义行为若忘记在 `RegisterEvents` 内 `AddNonSerializedListener`，对应回调永不触发，且非序列化监听器在重载后不会自动恢复。

## 成员说明

### 生命周期钩子

- **`RegisterEvents()`**：把行为接入战役事件总线。它在内部向 `CampaignEvents` 订阅 `SettlementEntered`、`OnSettlementLeftEvent`、`DailyTickEvent`、`DailyTickHeroEvent`、`HourlyTickPartyEvent`、`OnSessionLaunchedEvent`、`OnNewGameCreatedPartialFollowUpEndEvent`、`MobilePartyCreated`/`MobilePartyDestroyed`、`MapEventEnded`、`OnLootDistributedToPartyEvent`、`OnSiegeEventStartedEvent`、`OnGameLoadFinishedEvent`、`KingdomDestroyedEvent`；副作用是此后所有这些世界变更都会驱动商队逻辑。由引擎在行为注册后调用一次。
- **`OnSessionLaunched(CampaignGameStarter campaignGameStarter)`**：每次战役会话启动时执行。它缓存远距离导航阈值（`CacheVeryFarDistances`）、向对话系统注入商队相关对话（`AddDialogs`）、并刷新平均物品价值（`UpdateAverageValues`）。副作用是初始化行为运行所需的缓存与对话；在 `OnSessionLaunchedEvent` 触发时自动调用，modder 一般不直接调用。
- **`SyncData(IDataStore dataStore)`**：存档读写配对点。它把 `_tradeRumorTakenCaravans`、`_lootedCaravans`、`_interactedCaravans`、`_tradeActionLogs`、`_caravanLastHomeTownVisitTime`、`_prohibitedKingdomsForPlayerCaravans` 六个字典同步进/出存档。副作用是决定商队交互历史的持久化；由引擎在存读档时调用，不要手动调用。

### 商队生成与日常驱动

- **`SpawnCaravan(Hero hero, bool initialSpawn = false)`**：为指定领主创建一支商队 `MobileParty`。它先用 `CaravanModel.GetEliteCaravanSpawnChance` 判定是否精英队，按领主文化选取 `PartyTemplateObject`、据是否有港口决定陆/海军，再以 `hero.HomeSettlement ?? hero.BornSettlement` 为出生城镇调用 `CaravanPartyComponent.CreateCaravanParty`。副作用：非初始生成时会按 `CaravanModel.GetPowerChangeAfterCaravanCreation` 给领主 `AddPower`；由 `DailyTickHero`（正常游戏）与 `OnNewGameCreatedPartialFollowUpEndEvent`（新游戏预铺两支）调用，modder 也可主动调用以生成额外商队。
- **`DailyTick()`**：每日全局维护。它清理过期的交易传闻与被劫记录（`DeleteExpiredTradeRumorTakenCaravans`/`DeleteExpiredLootedCaravans`），并重建全局价格缓存（`CreatePriceDataCache`）。副作用是刷新各 `ItemCategory` 在城镇间的买卖价指数；由 `DailyTickEvent` 驱动。
- **`HourlyTickParty(MobileParty mobileParty)`**：每支商队的逐时 AI 决策。它跳过非商队、正在战斗/筏态/被任务占用或 `DoNotMakeNewDecisions` 的队伍；若当前在城镇且伤员比例达标则按概率进行买卖，否则调用 `ThinkNextDestination` 选中下一目标城镇并以 `SetPartyAiAction.GetActionForVisitingSettlement` 下达前往指令。副作用是驱动商队在 `Town` 间流动与买卖；由 `HourlyTickPartyEvent` 针对每支队伍触发。

### 贸易与城镇交互

- **`OnSettlementEntered(MobileParty mobileParty, Settlement settlement, Hero hero)`**：商队进入城镇时触发。它把寻路到港的商队改为驻留（`SetMoveModeHold`），对可海军化的商队补船（`AdjustConvoyShips`）与补员（`RefillConvoyTroops`），清理超过 7 天的旧买卖流水，执行 `SellGoods`，并在回到本城时记录 `_caravanLastHomeTownVisitTime`；若城镇总督有 `Trade.Tollgates` 特长，则累加贸易税。副作用是直接改商队货物、船只与城镇贸易税；由 `SettlementEntered` 事件触发。
- **`OnSettlementLeft(MobileParty mobileParty, Settlement settlement)`**：商队离镇时触发。它检测超重并在必要时调用 `SellGoods(.., toLoseWeight: true)` 减重，避免商队因超容量在地图上异常。副作用是可能卖出部分货物以腾出容量；由 `OnSettlementLeftEvent` 触发。

### 协作访问

- **`TradeAgreementsCampaignBehavior`**（`ITradeAgreementsCampaignBehavior` 属性）：惰性获取贸易协定行为。首次访问时若内部缓存为空，会 `GetCampaignBehavior<ITradeAgreementsCampaignBehavior>()` 取出并缓存，供 `CanTradeWith`（王国间能否贸易）等判定使用；被 `HourlyTickParty` 与造船逻辑用于决定是否前往目的地王国。

## 示例

```csharp
// 在战役运行中取出已由 CaravansCampaignBehaviorTypeDefiner 自动注册的商队行为
var caravans = Campaign.Current.GetCampaignBehavior<CaravansCampaignBehavior>();

// 让某个符合条件的领主立即生成一支商队（initialSpawn=false 会按 CaravanModel 增加其势力值）
caravans.SpawnCaravan(someHero);

// 在你的自定义行为 RegisterEvents 内，订阅商队创建事件做自己的联动逻辑
CampaignEvents.MobilePartyCreated.AddNonSerializedListener(this, OnCaravanCreated);

private void OnCaravanCreated(MobileParty party)
{
    if (party.IsCaravan)
    {
        // party.CurrentSettlement / party.HomeSettlement 等状态此时已由 CaravansCampaignBehavior 维护
    }
}
```

说明：商队行为由模块内的 `CaravansCampaignBehaviorTypeDefiner` 在战役初始化阶段自动注册，modder 不需要也不能手动 `new` 它；若你的 mod 需要新增自己的 Campaign 行为子类，应在 `CampaignGameStarter` 的初始化入口用 `AddBehavior(yourBehavior)` 注册，引擎会随后调用其 `RegisterEvents`。

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 相关：[CampaignBehaviorBase](../CampaignBehaviorBase) · [Campaign](../Campaign) · [CampaignEvents](../CampaignEvents) · [MobileParty](../MobileParty) · [CaravanPartyComponent](../CaravanPartyComponent) · [Town](../Town) · [CaravanModel](../CaravanModel) · [ITradeAgreementsCampaignBehavior](../ITradeAgreementsCampaignBehavior)
