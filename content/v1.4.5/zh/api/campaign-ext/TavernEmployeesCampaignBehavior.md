---
title: "TavernEmployeesCampaignBehavior"
description: "酒馆 NPC 与对话中枢：在城镇 tavern/center 场景刷出酒馆老板、女侍、乐手、赎金贩子，并提供「打听同伴/买城镇情报/请客提升士气/赎金交易」等对话线与按技能匹配的流浪者推荐。"
---
# TavernEmployeesCampaignBehavior

**Namespace:** SandBox.CampaignBehaviors
**Module:** SandBox
**类型：** `public class TavernEmployeesCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**源文件:** `Modules.SandBox/SandBox/SandBox.CampaignBehaviors/TavernEmployeesCampaignBehavior.cs`

## 概述

`TavernEmployeesCampaignBehavior` 是酒馆相关玩法的**身体 + 对话中枢**。身体方面：它监听 `LocationCharactersAreReadyToSpawnEvent`，当玩家在城镇的 `tavern` 或白天 `center` 场景时，按场景预留刷点把 `Tavernkeeper`/`TavernWench`/`Musician`/`RansomBroker` 四种 `LocationCharacter` 刷进去（用 `CultureObject` 角色 + `FaceGen` 体型 + `SimpleAgentOrigin`/`AgentData` + `SandBoxManager.AgentBehaviorManager` 行走行为）。对话方面：它在 `OnSessionLaunched` 通过 `CampaignGameStarter` 注册一长串对话线，提供「向酒馆老板打听可雇佣同伴（按 Scout/Engineer/Surgeon/Quartermaster/CaravanLeader/Leader/Roguery 技能匹配最近的流浪者，收费 2 金）、购买城镇所有者情报（500 金）、请全队喝酒提升士气（`GiveGoldAction` + `RecentEventsMorale += 2`）、与赎金贩子买卖俘虏」等交互。它**有少量需存档的状态**：`_orderedDrinkThisDayInSettlement`/`_orderedDrinkThisVisit`/`_hasMetWithRansomBroker`/`_hasBoughtTunToParty`，在 `SyncData` 中持久化。

## 心智模型

把它想成「酒馆大堂经理」，同时管**场景 NPC 生成**与**酒馆对话树**，工作在**战役层 + Location 子系统**。

- **入口**：`RegisterEvents` 订阅 `OnMissionStartedEvent`、`DailyTickEvent`、`OnSessionLaunchedEvent`、`LocationCharactersAreReadyToSpawnEvent`、`WeeklyTickEvent`。
- **生成（身体）**：`LocationCharactersAreReadyToSpawn` 在 `tavern` 或白天 `center` 场景，按 `unusedUsablePointCount` 里的 `spawnpoint_tavernkeeper`/`sp_tavern_wench`/`musician` 槽位数量调用 `location.AddLocationCharacters(new CreateLocationCharacterDelegate(CreateX), culture, relation, count)`；赎金贩子（`RansomBroker`）只在 `tavern` 刷。
- **对话（接线）**：`OnSessionLaunched` → `AddDialogs(cgs)` 注册酒馆老板/女侍/乐手/赎金贩子的全部对话线，并随机化 `_inquiryVariationIndex`（`MBRandom.NondeterministicRandomInt % 6`）以轮换措辞。
- **同伴打听**：玩家选技能类型 → `FindCompanionWithType` 遍历 `Town.AllTowns` 里 `HeroesWithoutParty` 的流浪者（`IsWanderer`），用 `ClanMemberPartyRoleModel.GetRelevantSkillForPartyRole` 取对应技能值，挑最高者，收 `GiveGoldAction.ApplyBetweenCharacters(Hero.MainHero, null, 2)`，标记 `IsKnownToPlayer`。
- **生命周期**：战役常驻；每日 `DailyTick` 清空 `_orderedDrinkThisDayInSettlement`、每周 `WeeklyTick` 清 `_hasBoughtTunToParty`，避免重复请客/重复买酒。

## 何时用 / 何时不要用

- **用**：你想理解官方酒馆 NPC 与对话是怎么搭起来的；想学「`LocationCharactersAreReadyToSpawnEvent` + `CreateLocationCharacterDelegate` 生成场景 NPC + `OnSessionLaunched`/`CampaignGameStarter.AddDialogLine`/`AddPlayerLine` 接对话」的组合写法；想为自定义酒馆功能加自己的 NPC 或对话线。
- **不要用**：想改交易/锻造对话——那是 `TradersCampaignBehavior`；想直接改同伴/金币/士气字段——始终走 `GiveGoldAction` 等 Action 与 `MobileParty.RecentEventsMorale`，不要直接 `Hero.Gold -= ...`（绕过事件与提示）；想给女侍/老板加非 `CultureObject` 的角色——四个 NPC 都来自 `culture.Tavernkeeper/TavernWench/Musician/RansomBroker`，自定义文化必须填全。

## 依赖

- 上游：[CampaignBehaviorBase](../../campaign/CampaignBehaviorBase)（基类与存读档契约）、[CampaignEvents](../../campaign/CampaignEvents)（`OnMissionStartedEvent`/`DailyTickEvent`/`OnSessionLaunchedEvent`/`LocationCharactersAreReadyToSpawnEvent`/`WeeklyTickEvent`）、[CampaignGameStarter](../../campaign/CampaignGameStarter)（`AddDialogLine`/`AddPlayerLine`）、[PlayerEncounter](../../campaign/PlayerEncounter)（`.LocationEncounter.Settlement`）、[Settlement](../../campaign/Settlement)（`CurrentSettlement`、`IsTown`、`OwnerClan`、`Culture`）、[CampaignMission](../../campaign/CampaignMission)（`Current.Location` 判定场景与 `StringId`）、[Location](../../campaign/Location)（`AddLocationCharacters`、`.StringId`）、[CultureObject](../../campaign/CultureObject)（`.Tavernkeeper`/`.TavernWench`/`.Musician`/`.RansomBroker` 角色）、[Campaign](../../campaign/Campaign)（`Current.Models.AgeModel`/`ClanMemberPartyRoleModel`/`MapDistanceModel`、`EstimatedAverageVillagerPartySpeed`）、[Town](../../campaign/Town)（`AllTowns`、`HeroesWithoutParty`）、[Hero](../../campaign/Hero)（`MainHero`、`IsWanderer`、`Gold`、`IsKnownToPlayer`）、[SandBoxManager](../../campaign/SandBoxManager)（`Instance.AgentBehaviorManager`）。
- 下游 / 相关（世界变更必须走 Action/既有 API）：[GiveGoldAction](../GiveGoldAction)（打听同伴 2 金、买城镇情报 500 金、请全队喝酒按人数计价，均经 `ApplyBetweenCharacters`）、[MobileParty](../../campaign/MobileParty)（`MainParty.MemberRoster`、`RecentEventsMorale`、`Party.NumberOfPrisoners`）、[Clan](../../campaign/Clan)（`PlayerClan`、`OwnerClan.Heroes`）、[PartyBase](../../campaign/PartyBase)（`MainParty.MemberRoster`）、[AgeModel](../../campaign/AgeModel)（`GetAgeLimitForLocation`）、[CharacterObject](../../campaign/CharacterObject)（`OneToOneConversationCharacter.Occupation` 判定对话对象职业）、[LocationCharacter](../../campaign/LocationCharacter)（生成的场景角色封装）、[SimpleAgentOrigin](../../campaign/SimpleAgentOrigin)（`AgentData` 来源原点）、[AgentData](../../core-extra/AgentData)（怪物/年龄装配）、[FaceGen](../../core-extra/FaceGen)（`GetMonsterWithSuffix(Race, "_settlement")`）、[MBRandom](../../core-extra/MBRandom)（随机年龄/措辞变体）、[ItemObject](../../core/ItemObject)（参数透传）。

## 成员说明

### RegisterEvents() — 订阅五事件
战役启动订阅 `OnMissionStarted`/`DailyTick`/`OnSessionLaunched`/`LocationCharactersAreReadyToSpawn`/`WeeklyTick`。移除本 Behavior 会让酒馆无 NPC、无酒馆对话（不崩溃，但酒馆玩法消失）。

### SyncData(IDataStore) — 持久化四字段
```csharp
dataStore.SyncData<Settlement>("_orderedDrinkThisDayInSettlement", ref _orderedDrinkThisDayInSettlement);
dataStore.SyncData<bool>("_orderedDrinkThisVisit", ref _orderedDrinkThisVisit);
dataStore.SyncData<bool>("_hasMetWithRansomBroker", ref _hasMetWithRansomBroker);
dataStore.SyncData<bool>("_hasBoughtTunToParty", ref _hasBoughtTunToParty);
```
漏登记任一字段 → 读档后「今天/本次是否已请客、是否已见过赎金贩子」状态错乱，属潜在坏档点。

### LocationCharactersAreReadyToSpawn(Dictionary<string,int>) — 刷四种酒馆 NPC
仅在 `settlement.IsTown` 时继续；`tavern` 场景刷 `Tavernkeeper`+`TavernWench`+`Musician`(按 `musician` 槽位数)+`RansomBroker`；白天 `center` 场景刷 `Tavernkeeper`+`TavernWench`+`Musician`(按槽位数)，不刷赎金贩子。每个 NPC 用 `CreateX(culture, relation)` 工厂构造 `LocationCharacter`。

### OnSessionLaunched / AddDialogs — 酒馆对话树
`OnSessionLaunched` 调 `AddDialogs(campaignGameStarter)` 注册全部对话线（`talk_common_to_tavernkeeper`、`tavernmaid_*`、`talk_bard`、`ransom_broker_*` 等），并设 `_inquiryVariationIndex = MBRandom.NondeterministicRandomInt % 6` 轮换措辞。对话线通过 `OnConditionDelegate`/`OnConsequenceDelegate` 挂到具体方法（如 `player_accepts_clan_info_offer_on_consequence` 收 500 金并标记 `IsKnownToPlayer`，`can_buy_tun_on_consequence` 收酒钱并 `RecentEventsMorale += 2f`）。

### FindCompanionWithType(TavernInquiryCompanionType) — 技能匹配同伴推荐
遍历 `Town.AllTowns` 中 `Settlement.HeroesWithoutParty` 的流浪者，按所选类型用 `ClanMemberPartyRoleModel.GetRelevantSkillForPartyRole` 取技能值（Scout→9、Engineer→8、Surgeon→7、Quartermaster→10、CaravanLeader→Trade、Leader→Leadership+Tactics、Roguery→Roguery），挑最高且未推荐过者，收 `GiveGoldAction.ApplyBetweenCharacters(Hero.MainHero, null, 2)`，标记 `IsKnownToPlayer` 并记入 `_previouslyRecommendedCompanions` 防重复。

### DailyTick / WeeklyTick — 状态清零
`DailyTick` 清空 `_orderedDrinkThisDayInSettlement`（防止跨天重复请客）；`WeeklyTick` 清 `_hasBoughtTunToParty`（防止每周重复买酒）。

## 风险

- **SyncData 四字段必须齐全**：漏登记 → 读档后请客/赎金贩子状态错乱，是潜在坏档点；派生/fork 时务必保留。
- **全程走 Action，禁止直改金币/士气**：买情报(500)、打听同伴(2)、请酒(按人数)都经 `GiveGoldAction.ApplyBetweenCharacters`；请酒士气经 `MobileParty.MainParty.RecentEventsMorale += 2f`。直接 `Hero.Gold -= x` 会绕过提示与事件。
- **生成强依赖场景刷点与 `IsTown`**：`LocationCharactersAreReadyToSpawn` 要求 `settlement.IsTown` 且 `CampaignMission.Current != null`；`tavern`/`center` 才刷，且数量来自 `unusedUsablePointCount` 槽位——场景美术删掉 `sp_tavern_wench` 等 tag，对应 NPC 自然不生成且不报错。
- **依赖文化角色齐全**：四个 NPC 来自 `culture.Tavernkeeper/TavernWench/Musician/RansomBroker`；缺字段会空引用，自定义文化务必填全。
- **对话条件依赖 `Occupation`**：女侍/老板/乐手/赎金贩子的对话 `OnCondition` 用 `CharacterObject.OneToOneConversationCharacter.Occupation`（13=女侍、1=老板、26=乐手、9=赎金贩子）判定；改职业枚举会断对应对话。
- **赎金贩子只在 tavern 且首次**：`conversation_ransom_broker_start_on_condition` 要求未见过（`!_hasMetWithRansomBroker`）才首次触发；`SyncData` 已持久化该标记，读档后不会重复首触。

## 最小真实示例

在酒馆场景按刷点数量刷出女侍（取自 `LocationCharactersAreReadyToSpawn` 精简）：
```csharp
if (settlement.IsTown && CampaignMission.Current != null
    && CampaignMission.Current.Location?.StringId == "tavern"
    && unusedUsablePointCount.TryGetValue("sp_tavern_wench", out int wenchCount) && wenchCount > 0)
{
    CampaignMission.Current.Location.AddLocationCharacters(
        new CreateLocationCharacterDelegate(CreateTavernWench),
        settlement.Culture, CharacterRelations.None, wenchCount);
}
```
向酒馆老板买城镇所有者情报（取自 `player_accepts_clan_info_offer_on_consequence` 精简，必须走 Action）：
```csharp
foreach (Hero h in Settlement.CurrentSettlement.OwnerClan.Heroes)
    h.IsKnownToPlayer = true;
GiveGoldAction.ApplyBetweenCharacters(Hero.MainHero, null, 500, false);
```

## 导航

- ↑ 父级/枢纽：[CampaignBehaviorBase](../../campaign/CampaignBehaviorBase)（所有 CampaignBehavior 的基类与 `RegisterEvents`/`SyncData` 契约）
- ↔ 同级（酒馆/城镇 NPC 互补）：[TownMerchantsCampaignBehavior](../TownMerchantsCampaignBehavior)（城镇中心商人 NPC）、[TradersCampaignBehavior](../TradersCampaignBehavior)（商人/铁匠交易对话）、[SettlementMusiciansCampaignBehavior](../SettlementMusiciansCampaignBehavior)（场景音乐）
- 相关：[GiveGoldAction](../GiveGoldAction) · [CampaignGameStarter](../../campaign/CampaignGameStarter) · [PlayerEncounter](../../campaign/PlayerEncounter) · [Settlement](../../campaign/Settlement) · [CultureObject](../../campaign/CultureObject) · [SandBoxManager](../../campaign/SandBoxManager)
