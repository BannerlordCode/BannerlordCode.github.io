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

## 怎么用

### 怎么拿到它

纯静态常量表，没有任何构造与生命周期。唯一不是 `const` 的是 `NeutralFactionName`（`CampaignData.cs:11`，`static TextObject`），其余 100 多个全是 `public const string` / `public const int` / `public const uint` / `public const char`，加上六组 `static readonly uint[]` 英雄布料色（`:473`、`:480`、`:487`、`:494`、`:501`、`:508`）。编译期就定下来了，运行期改不了。

它们是给 **XML 与内容脚本用的**：spawnpoint 标签（`MainHeroTag = "main_hero"` `:23`、`MerchantTag = "sp_merchant"` `:125`）、文化 id（`CultureEmpire = "empire"` `:356`）、地点 id（`LocationCenter = "center"` `:407`）、地点内部区块（`LocationTavern = "tavern"` `:419`）、装备更新标签（`BattleEquipmentUpdateTag = "battle"` `:518`）。C# 侧唯一直接读它的两处是 `CampaignData.NeutralFactionName` 当作无名氏势力的兜底名字（`DisbandPartyAction.cs:40`、`TeleportHeroAction.cs:96`）。

### 典型用法

```csharp
// 1) 在内容里引用这些常量，而不是手写字符串
string spotId = CampaignData.MerchantTag;
string culture = CampaignData.CultureVlandia;
string inside = CampaignData.LocationTavern;

// 2) 无名势力：名字的兜底
Clan realClan = party.ActualClan;
TextObject who = realClan != null ? realClan.Name : CampaignData.NeutralFactionName;
text.SetTextVariable("CLAN_NAME", who);      // DisbandPartyAction.cs:40 就是这么写的

// 3) 英雄布料色（static readonly 数组，别改内容）
uint[] vlandia = CampaignData.VlandiaHeroClothColors;
uint picked = vlandia[heroIdx % vlandia.Length];    // 必须自己处理越界，数组是公开可变的
```

### 最容易踩的坑

拿这些 tag 去比较 `Settlement.SettlementType` 或 `Hero.CharacterTier` 之类的枚举。它们是**内容侧字符串**，与任何游戏枚举都不对应，写错了编译器不会报错。后果最典型的是把 `spawnpoint` 前缀当成语义标记——`PlayerTag = "spawnpoint_player"`（`:26`）与 `PlayerOutsideTag = "spawnpoint_player_outside"`（`:32`）在 XML 里是**不同的** spawnpoint，但在字符串前缀上只差一个后缀；你如果写 `tag.StartsWith("spawnpoint_player")` 匹配，两者都会被命中，于是「城外出生点」被当成「城内出生点」用，NPC 直接刷在地图上。另外那些 `static readonly uint[]` 数组（`:473` 等）是**公开可变的**，引擎不会保护你，索引越界同样是运行期崩。

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
// 用官方的地点 id 与真实的下令 API 操作队伍
Settlement town = Campaign.Current.Settlements.First(s => s.IsTown);

// MobileParty.SetMoveGoToSettlement(Settlement, NavigationType, bool isTargetingThePort)
// NavigationType 取值只有 None / Default / Naval / All
Campaign.Current.MainParty.SetMoveGoToSettlement(town, MobileParty.NavigationType.Default, false);

// 建一个新队伍：MobileParty.CreateParty(string stringId, PartyComponent component)
// stringId 会经 CampaignObjectManager.FindNextUniqueStringId 追加去重后缀；
// component 传 null 只适用于无组件的特殊队伍（官方玩家队伍就是这么建的）
MobileParty escort = MobileParty.CreateParty("my_escort", null);
// LeaderHero 是只读属性（内部读 PartyComponent.Leader），要指定领队得给组件
Debug.Print("new party leader = " + escort.LeaderHero);

// 伪装场景：读字符串 id 交给剧情系统，再取对应的 spawn tag
string disguiseId = CampaignData.DisguiseOfficerCharacterStringId;
string spawnTag = CampaignData.DisguiseOfficerCharacterSpawnTag;
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