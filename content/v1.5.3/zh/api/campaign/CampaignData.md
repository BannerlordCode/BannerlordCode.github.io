---
title: "CampaignData"
description: "战役层的字符串常量目录：出生点 tag、文化 stringId、聚落内部 location id、装备分组 tag、UI 颜色。改这些值等于改游戏读数据的方式，是最容易踩兼容性坑的地方之一。"
---

# CampaignData

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class CampaignData`
**Base:** 无（静态类）
**Source:** `bannerlord-1.5.3/TaleWorlds.CampaignSystem/CampaignData.cs`

## 概述

`CampaignData` 是一个纯常量表，1.5.3 里 160 多个成员几乎全是 `const string` 与 `static readonly uint[]`。它把散落在 XML 里的**标识符**集中成编译期常量：角色出生点的 tag（`GuardTag`、`PrisonGuard`、`WorkshopSellerTag`）、地点 id（`LocationTavern`、`LocationArena`、`LocationPort`）、文化名（`CultureSturgia` 等）、装备分组 tag（`BattleEquipmentUpdateTag`）、以及各文化的英雄布料色数组。它不提供任何行为、不持有状态；它唯一的作用是让 C# 代码用同一个字面量去和 XML / 脚本对齐。

## 心智模型

理解它的正确姿势是「三张表」：

- **出生点 tag 表**：`spawnpoint_player`、`sp_tavern_keeper`、`sp_prison_guard` 这类值，必须和场景 XML 里 `<SpawnPoint>` 的 `tag` 完全一致。改一个字符，那个点位的角色就不再生成，且**没有任何报错**。
- **地点 id 表**：`LocationTavern = "tavern"`、`LocationArena = "arena"`、`LocationPort = "port"`，用于「把角色放到酒馆/竞技场/港口」的定位 API，与聚落内部地点节点的 id 对应。
- **文化与颜色表**：`CultureEmpire`…`CultureVakken` 是 stringId，加两行 `Culture*Hideout` / `Deserters` / `Looters` 是 bandit 文化。另外每种文化一组 `uint[]` 布料色，用于 hero 外观生成。

还有几组语义常量值得记住：`MainStorylineSpecialQuestType = "MainStoryline"`（主线任务判定）、`MainHeroTag = "main_hero"`、`NavalDLCStringId = "NavalDLC"`（DLC 开关检测）、`MinFactionNameLength` / `MaxFactionNameLength`（输入校验边界）、`EventParameterSplitCharacter = ' '`（事件参数按空格切分）。

**常见误用与坑**

1. **这些是 `const`，编译进你的 DLL**。游戏更新改了同名常量的值，你的 mod 里仍是旧值 —— 于是「mod 与本体版本漂移」的经典症状。跨版本不要假设值不变。
2. **`PlayerTag = "spawnpoint_player"` 是单人专用出生点**。在自定义战役（多 AI 势力）里用它生成玩家角色，会生成到默认位置。
3. **`CultureNeutral` / 各 Hideout 文化**不是可选装饰，而是 bandit 团体的文化归属；改它会让整个 bandit 派系换语言。
4. 用颜色数组长度做循环上界：1.5.3 里每种文化的数组长度是官方决定的，mod 加长会导致非官方英雄外观不一致。

## 成员与调用时机

**出生点 tag（角色生成）**

`MainHeroTag`、`PlayerTag`、`PlayerConversationTag`、`PlayerOutsideTag`、`PlayerNearTownMainGate`、`PlayerPrisonBreakTag`、`TournamentMasterTag`、`PlayerNearArenaMasterTag`、`GuardTag`、`GuardWithSpearTag`、`GuardPatrolTag`、`PrisonGuard`、`UnarmedGuardTag`、`PrisonerTag`、`PrisonerGuardTag`、`TraderTag`、`HorseTraderTag`、`ArmorerTag`、`BarberTag`、`WeaponSmithTag`、`BlacksmithTag`、`GovernorTag`、`ElderTag`、`CleanerTag` / `SpawnPointCleanerTag`、`WorkshopSellerTag`、`WorkshopAreaMarkerTag`、`WorkshopSignTag`、`AlleyMarker` / `Alley1Tag`~`Alley3Tag`、`NotableTag` 及其变体（`NotableRuralNotableTag`、`NotablePreacherTag`、`NotableArtisanTag`、`NotableMerchantTag`）、`GangLeaderBodyGuard`、`TavernKeeperTag` / `TavernWenchTag`、`MercenaryTag`、`MusicianTag`、`IdleTag`、`ReservedTag`、`HiddenSpawnPointTag`、`PassageTag`、`DisableAtNightTag`、`EnableAtNightTag`、`NavigationMeshDeactivatorTag`、`PrisonBreakPrisonerTag`、`PrisonBreakLevelTag`（等级）、`HermitTag`、`StaticNpcTag`、`ShipyardWorkerTag`、`ShipyardShopWorkerTag`、`MarketWorkerTag`、`CarpenterTag`、`SpShipWright`。

**地点 id（场景内定位）**

`LocationCenter`、`LocationArena`、`LocationPrison`、`LocationLordsHall`、`LocationTavern`、`LocationVillageCenter`、`LocationHouse1`~`House3`、`LocationAlley`、`LocationHideout`、`LocationPort`、`RetreatSettlement`。

**文化 stringId**

`CultureEmpire`、`CultureSturgia`、`CultureAserai`、`CultureVlandia`、`CultureBattania`、`CultureKhuzait`、`CultureNord`、`CultureDarshi`、`CultureVakken`、`CultureNeutral`、`CultureForestHideout`、`CultureSeaHideout`、`CultureMountainHideout`、`CultureDesertHideout`、`CultureSteppeHideout`、`Deserters`、`Looters`。

**装备与装备更新**

`BattleEquipmentUpdateTag = "battle"`、`CivilianEquipmentUpdateTag = "civilian"`、`StealthEquipmentUpdateTag = "stealth"`、`NoEquipmentUpdateTag = "none"`。`DecideAgentSpawnEquipment` 这类流程按这些 tag 分组装备槽。

**潜行与伪装**

`StealthCharacterStringId`、`DisguiseDefaultCharacterStringId`、`DisguiseDefaultContractorCharacterStringId`、`DisguiseOfficerCharacterStringId`、`DisguiseShadowTargetCharacterStringId`，以及对应的 spawn tag（`StealthCharacterSpawnTag` 等）、`DisguiseShadowTargetCharacter`。

**颜色**

`NeutralColor1` / `NeutralColor2` / `NeutralAlternativeColor1` / `NeutralAlternativeColor2`、`StealthColor1` / `StealthColor2`，以及 `EmpireHeroClothColors`、`SturgiaHeroClothColors`、`AseraiHeroClothColors`、`VlandiaHeroClothColors`、`BattaniaHeroClothColors`、`KhuzaitHeroClothColors` 六个 `static readonly uint[]`。

**其他**

`static TextObject NeutralFactionName`、`MainStorylineSpecialQuestType`、`MinFactionNameLength` / `MaxFactionNameLength`、`EventParameterSplitCharacter`、`NavalDLCStringId`、`Level1Tag`~`Level3Tag`、`BattleSetTag`、`SiegeTag`、`RaidTag`、`BurnedTag`、`PlayerStealthTag`、`Shop1Tag`~`Shop4Tag`。

## 真实示例

```csharp
// 用官方的地点 id 把新英雄放进目标城镇的酒馆
Settlement town = Campaign.Current.Settlements.First(s => s.IsTown);
MobileParty party = MobileParty.CreateMobileParty("my_hero_party");
Hero.Villager.MainHero?.SetHeroGotoSettlementIfBesieged(town);
Hero.Devout.MainHero?.SetPositionAtSettlement(town, CampaignData.LocationTavern);

// 伪装场景：读字符串 id 交给剧情系统，再取对应的 spawn tag
string disguiseId = CampaignData.DisguiseOfficerCharacterStringId;
string spawnTag = CampaignData.DisguiseOfficerCharacterSpawnTag;
MobileParty.CreateMobileParty("disguice_party");
MBObjectManager.Instance.GetObject<PartyTemplateObject>("main_hero_party_template");
Debug.Print("disguise: " + disguiseId + " via " + spawnTag);
```

## 风险与边界

- **编译期常量 = 版本漂移风险**：这些值在你的 DLL 里被内联。本体改了 XML 里的 tag 而没改常量（反向），或改了常量而你用的旧 DLL，都会造成静默失配。升级游戏后要重新核对。
- **ID 稳定性即存档兼容性**：与存档绑定的 stringId（文化、剧情 quest type）改动会让老存档里的引用找不到目标。**永远不要复用旧名字表达新含义**。
- **静态初始化顺序**：`static readonly uint[]` 在类型首次访问时初始化。在游戏极早期（模块 `OnSubModuleLoad`）访问颜色数组是安全的，但不要在字段初始化器里依赖它们。
- **引用方向**：这是 CampaignSystem 层的纯常量类，被 Core / MountAndBlade 之外的层也可以安全引用（无反向依赖）。适合放在你自己的工具类里做 XML 校验：遍历场景 XML 的出生点 tag，比对 `CampaignData` 中是否已有同名常量。

## 依赖关系

- [Campaign](../Campaign) — 常量最终服务于世界对象的生成与查询
- [CampaignGameStarter](../CampaignGameStarter) — 战役启动期注册游戏菜单与对话时会用到这些 tag
- [DefaultSettlementProsperityModel](../../campaign-ext/DefaultSettlementProsperityModel) — 同属「读 XML 常量做玩法判定」这一类，扩展它的思路与校验 tag 一致