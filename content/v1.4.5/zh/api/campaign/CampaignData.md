---
title: "CampaignData"
description: "战役层共享的只读常量表：出生点场景标签、定居点分区 id、文化 StringId、英雄布料色板、阵营颜色、装备更新标签与中立阵营名，被 CharacterHelper、TeleportHeroAction、DisbandPartyAction 等直接以 CampaignData.X 形式引用。"
---

# CampaignData

**命名空间：** TaleWorlds.CampaignSystem
**模块：** TaleWorlds.CampaignSystem
**类型：** public static class CampaignData
**源文件：** Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/CampaignData.cs

## 概述

`CampaignData` 是战役模拟中一组编译期确定的只读常量与查找表，集中保存场景出生点标签、定居点分区 id、各文化 `StringId`、英雄布料色板、中立/潜行阵营颜色、装备更新标签与中立阵营名等。它被 `CharacterHelper` 选色、`TeleportHeroAction` / `DisbandPartyAction` 填中立阵营名、以及大量对话与场景逻辑直接读取，作为全战役统一的字符串/数值基准，避免散落硬编码字面量。

## 心智模型

`CampaignData` 是一个静态常量表，由 CLR 在程序集加载时以 `static class` 形态持有，本身从不被 `new`、从不被序列化、也不含任何 `[SaveableField]`——它连一个可变字段都没有，所有成员都是 `const` 或 `static readonly`。因此它不存在 `Campaign.Current` 之类的获取入口，也不需要“获取实例”：任何代码都直接用 `CampaignData.SomeConstant` 点出值即可，这正是它和 MarriageModel 这类运行时按类型解析的 Model 的根本区别。它属于战役逻辑使用的工具层（TaleWorlds.CampaignSystem 程序集），服务 Campaign 层的英雄、队伍、定居点与对话系统，但不参与 tick、不持有世界状态。正确用法是把所有“战役级固定字符串/数值”引用转到这里，保证全局一致；错误用法是把它误当成可写状态容器，往里塞每战役数据——那部分永远不进存档，应改放到 [Campaign](../Campaign) 的字段或由行为以 `[SaveableField]` 持久化。当你需要“随战役变化的数据”时，不要用本类，改用行为（Behaviors）或对应 `*Action`；当你需要“全战役都一样的标签/颜色/id”时，才用本类。

## 何时使用 / 何时不要使用

- **使用**：需要引用出生点标签（如英雄出生、对话触发点）、定居点分区 id、文化 `StringId`、英雄布料色板、阵营中立/潜行颜色、装备更新标签，或需要中立阵营的本地化名时，直接读取 `CampaignData` 上的对应常量，而不是在代码里写裸字符串。
- **不要使用**：不要用它承载任何会随战役推进变化的状态——它没有可写字段、不进存档；这类需求应交给 [Campaign](../Campaign)、[Hero](../Hero)、[Settlement](../Settlement) 或带 `[SaveableField]` 的行为。不要试图 `new CampaignData()` 或缓存“实例”（静态类无实例）；也不要在运行期改写六个 `HeroClothColors` 数组元素，它们是 `static readonly uint[]` 且被所有同文化英雄共享，改写会污染全局配色。

## 依赖图

上游类型与系统：

- [Campaign](../Campaign) —— 战役模块根；`CampaignData` 的常量服务于该模块下的英雄、队伍与定居点逻辑（类本身不依赖它，而是被它之下的代码引用）。
- [CultureObject](../CultureObject) —— `CharacterHelper` 取英雄所属文化的 `StringId`（"empire" 等），再据此到 `CampaignData` 的六组布料色板中匹配。
- [TextObject](../../localization/TextObject) —— `NeutralFactionName` 属性直接 `new TextObject("{=JQNKrAI3}Neutral Faction")` 返回中立阵营名。

下游与协同系统（调用方）：

- [CharacterHelper](../../campaign-ext/CharacterHelper) —— `GetHeroClothColorsForCharacter` 用 `CampaignData.EmpireHeroClothColors` / `SturgiaHeroClothColors` / `AseraiHeroClothColors` / `VlandiaHeroClothColors` / `BattaniaHeroClothColors` / `KhuzaitHeroClothColors` 决定英雄布料色（第 85–91 行）。
- [TeleportHeroAction](../../campaign-ext/TeleportHeroAction) —— 第 107 行把英雄传送到无阵营队伍时，用 `CampaignData.NeutralFactionName` 回退填充阵营名。
- [DisbandPartyAction](../../campaign-ext/DisbandPartyAction) —— 第 37 行解散无阵营队伍时同样回退到 `CampaignData.NeutralFactionName`。
- [Hero](../Hero) / [Clan](../Clan) —— 出生点标签与阵营命名常量广泛用于英雄出生场景与对话标签（如 `MainHeroTag`、`PlayerTag`、`NotableTag`）。
- [Settlement](../Settlement) / [Town](../Town) / [Village](../Village) —— 地点分区常量（`LocationCenter`、`LocationArena`、`LocationPrison`、`LocationTavern`、`LocationLordsHall`、`LocationHideout`、`LocationPort` 等）用于定居点场景分区与逻辑定位。

## 风险

- **误当作可变状态容器**：本类全是 `const` / `static readonly`，无任何可写字段、无 `[SaveableField]`、不进存档；若往里塞“每战役”数据，会发现它既不会被序列化、也永远不是“每战役实例”。要存战役状态请用 [Campaign](../Campaign) 上的字段或行为的 `[SaveableField]`。
- **字符串字面量漂移**：不少其它代码直接用裸字符串（如场景里硬编码 `"empire"`）而非 `CampaignData.CultureEmpire`，一旦官方调整了某个常量的真实值、而别处仍用字面量，就会出现不一致。应始终引用 `CampaignData.X`，不要重新键入字面量。
- **不存在获取实例的路径**：它是静态类，没有 `Campaign.Current` 入口、也不能 `new`。任何 `CampaignData instance = ...` 或“先通过子系统 API 拿实例”的写法都是错的——直接点出常量即可。
- **布料色板数组被共享且只读**：六组 `HeroClothColors` 是 `static readonly uint[]`，运行期若有代码改写数组元素，会影响所有同文化英雄的配色；不要写入这些数组，也不要假设它们会随存档变化（它们在编译期就固定了）。
- **与 Model 的混淆**：它和 [MarriageModel](../MarriageModel) 等运行时解析的 Model 不同，不随新战役/读档重新解析，也不会因子模块替换而改变——这正好说明它只适合承载“固定不变”的基准值，不适合承载规则或可变的玩法数据。

## 成员说明

### 出生点与对话场景标签

- **`MainHeroTag` / `PlayerTag` / `PlayerConversationTag` / `PlayerOutsideTag` / `PlayerNearTownMainGate` / `PlayerPrisonBreakTag`**
  - 用途：一组标识“玩家英雄”在不同场景语境下出生/触发位置的字符串标签（如主英雄位、对话点、城镇外门、越狱点），供场景脚本与对话条件定位玩家。无状态写入。
  - 调用时机：场景初始化与对话逻辑在摆放玩家英雄、判定对话触发点时引用。
- **`NotableTag` / `NotableGangLeaderTag` / `NotableRuralNotableTag` / `NotablePreacherTag` / `NotableArtisanTag` / `NotableMerchantTag`**
  - 用途：标识各类型要人（名流/团伙头目/乡贤/传教士/工匠/商人）在场景中的出生点，配合 `ArtisanNotary`、`PreacherNotary`、`RuralNotableNotary`、`MerchantNotary` 等“书记员”标签用于对话与任务摆放。
  - 调用时机：要人相关对话、任务与场景布置读取。
- **`CivilianTag` / `GuardTag` / `GuardWithSpearTag` / `GuardPatrolTag` / `PrisonGuard` / `TraderTag` / `ArmorerTag` / `BarberTag` / `TavernWenchTag` 等**
  - 用途：标识平民、卫兵、商人、铁匠、理发师、酒馆女招待等场景 NPC 的出生点标签，是场景与对话定位大量配角的基准。无状态写入。
  - 调用时机：定居点/场景加载以及对话条件判定 NPC 位置时引用。

### 定居点分区 id

- **`LocationCenter` / `LocationArena` / `LocationPrison` / `LocationLordsHall` / `LocationTavern` / `LocationVillageCenter` / `LocationHouse1`/`2`/`3` / `LocationAlley` / `LocationHideout` / `LocationPort`**
  - 用途：把定居点内部划分为“中心/竞技场/监狱/领主厅/酒馆/村庄中心/房屋/小巷/藏身处/港口”等逻辑分区，作为场景与玩法定位的常量键。
  - 副作用：无。调用时机：[Settlement](../Settlement) / [Town](../Town) / [Village](../Village) 及场景逻辑在判断英雄当前所在分区时读取。
- **`RetreatSettlement`**（值为 `"retirement_retreat"`）
  - 用途：标识“退役静修地”这一特殊定居点，用于退休相关流程定位。调用时机：退休/隐退逻辑引用。

### 文化 StringId 与匪帮文化

- **`CultureEmpire` / `CultureSturgia` / `CultureAserai` / `CultureVlandia` / `CultureBattania` / `CultureKhuzait` / `CultureNord` / `CultureDarshi` / `CultureVakken` / `CultureNeutral`**
  - 用途：各主要文化及中立文化的 `StringId`（如 `"empire"`、`"sturgia"`），等价于 [CultureObject](../CultureObject) 的 `StringId`，供按文化匹配逻辑使用（如 [CharacterHelper](../../campaign-ext/CharacterHelper) 选布料色）。无状态写入。
  - 调用时机：文化相关的分支判断与色板匹配。
- **`CultureForestHideout` / `CultureSeaHideout` / `CultureMountainHideout` / `CultureDesertHideout` / `CultureSteppeHideout`**
  - 用途：五类匪帮藏身处的文化 id（`"forest_bandits"` 等），用于区分不同藏身地的敌对势力。调用时机：藏身处/匪帮相关逻辑读取。

### 英雄布料色板

- **`EmpireHeroClothColors` / `SturgiaHeroClothColors` / `AseraiHeroClothColors` / `VlandiaHeroClothColors` / `BattaniaHeroClothColors` / `KhuzaitHeroClothColors`**（均为 `static readonly uint[]`）
  - 用途：每个主要文化一组英雄布料候选色（ARGB 数值数组），[CharacterHelper](../../campaign-ext/CharacterHelper) 按英雄所属文化的 `StringId` 取对应数组，再 `GetDeterministicColorFromListForHero` 选一个作为英雄布料 `color2`。无状态写入，但数组本身为共享只读。
  - 调用时机：仅由 `CharacterHelper.GetHeroClothColorsForCharacter` 在第 85–91 行按文化 `StringId` 取用。

### 阵营名称与颜色

- **`MinFactionNameLength`（`1`）/ `MaxFactionNameLength`（`50`）**
  - 用途：阵营命名长度的合法区间，供创建/改名阵营时做长度校验。调用时机：阵营命名 UI 与校验逻辑读取。
- **`NeutralColor1` / `NeutralColor2` / `NeutralAlternativeColor1` / `NeutralAlternativeColor2` / `StealthColor1` / `StealthColor2`**
  - 用途：中立阵营与潜行（伪装）用色的 ARGB 常量（均为 `4291609515u` / `4279111698u`），供阵营/伪装配色回退使用。调用时机：无阵营实体取色时作默认值。
- **`NeutralFactionName`**（属性，返回 `TextObject`）
  - 用途：中立阵营的本地化名称，直接 `new TextObject("{=JQNKrAI3}Neutral Faction")` 构造。供无阵营队伍/派对命名时回退填充。
  - 副作用：每次访问都 `new` 一个 [TextObject](../../localization/TextObject)；无世界状态写入。
  - 调用时机：[TeleportHeroAction](../../campaign-ext/TeleportHeroAction) 第 107 行、[DisbandPartyAction](../../campaign-ext/DisbandPartyAction) 第 37 行在 `ActualClan == null` 时取此名回填 `CLAN_NAME` 文本变量。

### 装备更新标签与事件参数

- **`BattleEquipmentUpdateTag`（`"battle"`） / `CivilianEquipmentUpdateTag`（`"civilian"`） / `StealthEquipmentUpdateTag`（`"stealth"`） / `NoEquipmentUpdateTag`（`"none"`）**
  - 用途：标识英雄/队伍在战斗、平民、潜行、无更新四种情境下的装备刷新标签，供装备更新逻辑选择刷新策略。调用时机：装备刷新与换装逻辑读取。
- **`EventParameterSplitCharacter`**（值为 `' '`）
  - 用途：事件参数之间的分隔字符（空格），供事件系统切分参数串。调用时机：事件参数解析时按此字符拆分。
- **`NavalDLCStringId`（`"NavalDLC"`）及其余 DLC/伪装 id（`StealthCharacter`、`DisguiseShadowTargetCharacter`、各 `SpawnTag`）**
  - 用途：标识 Naval DLC、潜行角色与各类伪装角色的字符串 id 及其场景出生标签，供相关 DLC 与潜行/伪装玩法定位。调用时机：对应玩法模块与场景逻辑引用。

## 示例

在把英雄传送到一支没有阵营的队伍时，用 `CampaignData.NeutralFactionName` 回退填充阵营名（取自 `TeleportHeroAction` 第 107 行）：

```csharp
TextObject partyName = new TextObject("{=ithcVNfA}{CLAN_NAME}{.o} Party");
partyName.SetTextVariable("CLAN_NAME",
    (targetParty.ActualClan != null)
        ? targetParty.ActualClan.Name
        : CampaignData.NeutralFactionName);
targetParty.Party.SetCustomName(partyName);
```

按英雄所属文化的 `StringId` 选取布料色板（取自 `CharacterHelper` 第 83–92 行的写法，引用 `CampaignData` 文化 id 与色板）：

```csharp
uint[] clothColors = character.HeroObject.MapFaction.Culture.StringId switch
{
    CampaignData.CultureEmpire   => CampaignData.EmpireHeroClothColors,
    CampaignData.CultureSturgia  => CampaignData.SturgiaHeroClothColors,
    CampaignData.CultureAserai   => CampaignData.AseraiHeroClothColors,
    CampaignData.CultureVlandia  => CampaignData.VlandiaHeroClothColors,
    CampaignData.CultureBattania => CampaignData.BattaniaHeroClothColors,
    CampaignData.CultureKhuzait  => CampaignData.KhuzaitHeroClothColors,
    _ => CampaignData.EmpireHeroClothColors
};
```

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 相关：[Campaign](../Campaign) · [Hero](../Hero) · [Clan](../Clan) · [Settlement](../Settlement) · [Town](../Town) · [Village](../Village) · [CultureObject](../CultureObject) · [TextObject](../../localization/TextObject) · [CharacterHelper](../../campaign-ext/CharacterHelper) · [TeleportHeroAction](../../campaign-ext/TeleportHeroAction) · [DisbandPartyAction](../../campaign-ext/DisbandPartyAction) · [MarriageModel](../MarriageModel)
