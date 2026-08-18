---
title: "PartySizeLimitModel"
description: "决定一支队伍最多能携带多少士兵、关押多少囚犯、驻军兵力上限如何计算，以及村民队与巡逻队初始编成规则的模型，由 Campaign 在运行时通过 Campaign.Current.Models.PartySizeLimitModel 解析。"
---

# PartySizeLimitModel

**命名空间：** TaleWorlds.CampaignSystem.ComponentInterfaces
**模块：** TaleWorlds.CampaignSystem
**类型：** public abstract class PartySizeLimitModel : MBGameModel<PartySizeLimitModel>
**源文件：** Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/PartySizeLimitModel.cs

## 概述

该模型集中裁决各类队伍（移动队伍、驻军、村庄商队、巡逻队）的兵力与囚犯容量上限，以及家族层级、领袖专长、政策与建筑对上限的加成。它还负责在生成村民队、巡逻队时给出“理想人数”与初始兵员/舰船编成。它只做纯计算，真正的队伍人数由 [PartyBase](../PartyBase) / [MobileParty](../MobileParty) 在编成、招募与释放时读取，不持有任何会被写进存档的世界状态。

## 心智模型

PartySizeLimitModel 是统管“一支队伍能带多少兵、关多少囚犯、驻军上限由什么决定”的计算规则集合，属于 Campaign 层。`Campaign` 在启动时通过 `GameModels` 从已注册的 `GameModel` 集合中按类型解析出 `DefaultPartySizeLimitModel` 唯一实例并缓存，运行时统一用 `Campaign.Current.Models.PartySizeLimitModel` 取得；它不参与存档序列化，也不会在每个 tick 重新构造。[PartyBase](../PartyBase) 在读取自身 `PartySizeLimit` / `PrisonerSizeLimit` 属性时调用 `GetPartyMemberSizeLimit` 与 `GetPartyPrisonerSizeLimit` 并把结果缓存为队伍硬上限；[GarrisonTroopsCampaignBehavior](../GarrisonTroopsCampaignBehavior) 与 [GarrisonRecruitmentCampaignBehavior](../GarrisonRecruitmentCampaignBehavior) 在补充/招募驻军时读取 `CalculateGarrisonPartySizeLimit`；[VillagerCampaignBehavior](../VillagerCampaignBehavior) 与 [PatrolPartiesCampaignBehavior](../PatrolPartiesCampaignBehavior) 在生成村民队 / 巡逻队时调用 `FindAppropriateInitialRosterForMobileParty` 与 `GetIdealVillagerPartySize`。要改上限规则就继承并注册一个替换实现；要“改变”某个队伍的实际人数必须走对应行为或 `*Action`（招募、释放囚犯、解散队伍），绝不要把模型当成改世界的入口——它只是查询口径。剧情模式还提供 `StoryModePartySizeLimitModel`，它把除 `MinimumNumberOfVillagersAtVillagerParty` 外的全部抽象成员委托回默认实现，用于在主线战役里叠加剧情规则。

## 何时使用 / 何时不要使用

- **使用**：需要查询或自定义“队伍兵力 / 囚犯上限怎么算、驻军能塞多少人、村民队理想规模多大”时，读取 `Campaign.Current.Models.PartySizeLimitModel` 的返回值，或提供一个新的派生类覆盖各抽象成员并通过子模块注册替换默认实现。
- **不要使用**：不要用模型去“执行”扩编或减员——它只给出上限数值，真正把兵员写进 `PartyBase.MemberRoster` / `PrisonRoster` 的是各招募行为、[MobileParty](../MobileParty) 编成逻辑与对应 `*Action`。也不要亲自给模型字段赋值来“强行提高某队上限”——真正状态在队伍对象上；要改世界状态应走行为或 Action，而不是篡改模型。模型里的 `_addAdditionalPartySizeAsCheat` / `_addAdditionalPrisonerSizeAsCheat` 是两个静态开关，仅由 `CampaignCheats` 在作弊模式下打开，不要在生产代码里依赖它们。

## 依赖图

上游类型与系统：

- [Campaign](../Campaign) —— 持有 `Models` 集合，是运行时获取该模型的入口。
- [GameModels](../GameModels) —— 在构造时通过 `GetGameModel<PartySizeLimitModel>()` 解析并缓存实例；[SandBoxManager](../SandBoxManager) 注册 `DefaultPartySizeLimitModel`。
- [CharacterDevelopmentModel](../CharacterDevelopmentModel) —— `CalculateBaseMemberSize` 读取其 `MaxSkillRequiredForEpicPerkBonus` 判定领袖专长上限。
- [ClanTierModel](../ClanTierModel) / [Clan](../Clan) —— `GetClanTierPartySizeEffectForHero` 与 `GetNextClanTierPartySizeEffectChangeForHero` 把家族层级换算成上限加成，[DefaultClanTierModel](../DefaultClanTierModel) 在升阶预测时反向调用后者。
- [VillageProductionCalculatorModel](../VillageProductionCalculatorModel) —— `GetIdealVillagerPartySize` 读取村庄日产量来推算村民队规模。

下游与调用方：

- [PartyBase](../PartyBase) —— 在 `PartySizeLimit` / `PrisonerSizeLimit` 属性与 `PartySizeLimitExplainer` / `PrisonerSizeLimitExplainer` 里调用 `GetPartyMemberSizeLimit` / `GetPartyPrisonerSizeLimit` 并缓存。
- [MobileParty](../MobileParty) —— 在初始化编成时调用 `FindAppropriateInitialRosterForMobileParty` 与 `FindAppropriateInitialShipsForMobileParty` 填充兵员与舰船。
- [Hero](../Hero) / [Clan](../Clan) —— 作为领袖提供家族、层级、专长输入（`GetClanTierPartySizeEffectForHero`、`GetAssumedPartySizeForLordParty`）。
- [Settlement](../Settlement) / [Village](../Village) / [Town](../Town) —— 驻军上限与村民队规模的计算上下文（城镇 +200 加成、城墙等级、建筑效果）。
- [VillagerCampaignBehavior](../VillagerCampaignBehavior) —— 用 `MinimumNumberOfVillagersAtVillagerParty` 与 `GetIdealVillagerPartySize` 判定并生成村民队。
- [PatrolPartiesCampaignBehavior](../PatrolPartiesCampaignBehavior) —— 用 `FindAppropriateInitialRosterForMobileParty` 填充巡逻队初始兵员。
- [GarrisonTroopsCampaignBehavior](../GarrisonTroopsCampaignBehavior) / [GarrisonRecruitmentCampaignBehavior](../GarrisonRecruitmentCampaignBehavior) —— 用 `CalculateGarrisonPartySizeLimit` 决定驻军可容纳 / 可招募人数。
- [CampaignBehaviorBase](../CampaignBehaviorBase) —— 上述招募 / 生成行为的基类，是实际驱动调用方。

相关类型：

- [PartyTemplateObject](../PartyTemplateObject) / [TroopRoster](../TroopRoster) / [Ship](../Ship) —— `FindAppropriateInitialRosterForMobileParty` 与 `FindAppropriateInitialShipsForMobileParty` 的输入与返回类型。
- [ExplainedNumber](../ExplainedNumber) —— `GetPartyMemberSizeLimit` / `GetPartyPrisonerSizeLimit` / `CalculateGarrisonPartySizeLimit` 的返回类型，用于携带带说明项的上限分解。

## 风险

- **跨战役重载缓存实例**：`Campaign.Current.Models.PartySizeLimitModel` 在每次新战役 / 读档时由 `GameModels` 重新解析。把实例缓存进静态字段或长生命周期对象，会在重载后指向旧战役的已销毁对象，调用即崩溃或读到陈旧规则。每次需要时都重新走 `Campaign.Current.Models` 获取。
- **战役开始前访问**：`Campaign.Current` 或 `Campaign.Current.Models` 在战役未启动时为 `null`。在 `MainMenu`、子模块加载早期或编辑器上下文里调用会直接空引用。
- **误判状态层**：该模型是无状态纯函数，没有需要持久化的字段，也不含 `[SaveableField]`。若你新增的派生类里加了可变字段并期望它随存档恢复，会发现这些值永远不会被序列化，从而产生隐蔽的规则漂移。
- **在 Mission/战斗层调用**：模型属于 Campaign 层，仅在战役模拟中存在；在 `Mission` 或战场逻辑里取 `Campaign.Current.Models` 是错误的访问层。
- **只替换模型不改写入路径**：派生类改了上限公式，但真正把兵员写进队伍的是各招募行为、[MobileParty](../MobileParty) 编成与对应 `*Action`，真正限制人数的是 [PartyBase](../PartyBase) 缓存的 `PartySizeLimit`。只替换模型、却让调用方按旧假设处理人数，会出现界面可招数与实际不一致。
- **巡逻队无守卫建筑时返回 0**：`CalculatePatrolPartySizeLimit` 在定居点没有 `SettlementGuardHouse` 建筑时返回 `0`，意味着该巡逻队理论上不允许带任何兵员；派生替换时若忽略此兜底会造成巡逻队直接空编。
- **作弊静态开关的副作用**：`_addAdditionalPartySizeAsCheat` / `_addAdditionalPrisonerSizeAsCheat` 是类的静态字段，对所有队伍生效；在作弊模式外被意外置位会让全图队伍上限暴涨 `5000`，且不会随战役重置而清理。

## 成员说明

### 队伍成员上限

- **`GetPartyMemberSizeLimit(PartyBase party, bool includeDescriptions = false)`**
  - 用途：返回该队伍允许携带的士兵数量上限（`ExplainedNumber`）。若 `party` 是移动队伍：驻军队伍转发 `CalculateGarrisonPartySizeLimit`；巡逻队走 `CalculatePatrolPartySizeLimit`（守卫营房每级 +5，基础 10）；其余队伍以基础 `20` 起步，叠加家族层级、是否派系领袖（+20）、统帅专长 `StewardPartySizeBonus`、以及大量领袖专长（如 `Leadership.Authority`、`Tactics.HordeLeader`、`OneHanded.Prestige` 等）与政策（`NobleRetinues` +40、`RoyalGuard` +60）；商队与村民队另有各自加成；若队伍正在海上则再叠加舰船 `CrewCapacityBonusFactor`。若是定居点队伍则返回 `0`。
  - 副作用：无，纯计算；真正的写入由 [PartyBase](../PartyBase) 把结果缓存进 `PartySizeLimit`。
  - 调用时机：[PartyBase](../PartyBase) 属性 `PartySizeLimit` 与 `PartySizeLimitExplainer`（带说明）读取；组队界面（`PartyScreenHelper`）也用它截断可编入人数。

### 囚犯上限

- **`GetPartyPrisonerSizeLimit(PartyBase party, bool includeDescriptions = false)`**
  - 用途：返回该队伍可关押的囚犯数量上限（`ExplainedNumber`）。定居点以基础 `60` 起步，按城墙等级每级 +40；移动队伍以基础 `10` 起步，叠加“当前健康成员数 / 2”以及领袖专长（`TwoHanded.Terror`、`Athletics.Stamina`、`Roguery.Manhunter`、`Scouting.VantagePoint` 等），作弊模式下再 +5000。
  - 副作用：无，纯计算；结果被 [PartyBase](../PartyBase) 缓存进 `PrisonerSizeLimit`。
  - 调用时机：[PartyBase](../PartyBase) 的 `PrisonerSizeLimit` / `PrisonerSizeLimitExplainer` 属性读取；俘虏相关行为用它判断能否继续收押。

### 驻军上限

- **`CalculateGarrisonPartySizeLimit(Settlement settlement, bool includeDescriptions = false)`**
  - 用途：返回某定居点驻军（含城镇、城堡）的兵力上限（`ExplainedNumber`）。以基础 `200` 起步，叠加定居点拥有者家族领袖的领导专长 `LeadershipGarrisonSizeBonus`、若为城镇再 +200，再加上拥有者专长（`OneHanded.CorpsACorps`、`Leadership.VeteransRespect`）与建筑 `GarrisonCapacity` 效果。
  - 副作用：无，纯计算；真正的驻军人数由招募行为写入。
  - 调用时机：[GarrisonTroopsCampaignBehavior](../GarrisonTroopsCampaignBehavior) 与 [GarrisonRecruitmentCampaignBehavior](../GarrisonRecruitmentCampaignBehavior) 在补充 / 自动招募驻军时调用，判定还能塞多少人。

### 家族层级与领袖影响

- **`GetClanTierPartySizeEffectForHero(Hero hero)`**
  - 用途：返回该英雄所在家族层级对队伍上限的加成（整数）。家族层级 `>= 1` 时：若该英雄是家族领袖则为 `25 * 层级`，否则为 `15 * 层级`；层级为 `0` 时返回 `0`。`CalculateBaseMemberSize` 内部用它把家族加成累加进成员上限。
  - 副作用：无。
  - 调用时机：`GetPartyMemberSizeLimit` 与 `GetAssumedPartySizeForLordParty` 经由 `CalculateBaseMemberSize` 内部调用；[DefaultClanTierModel](../DefaultClanTierModel) 在升级预测时复用其口径。

- **`GetNextClanTierPartySizeEffectChangeForHero(Hero hero)`**
  - 用途：返回该英雄的家族“再升一级”会为队伍上限带来多少额外加成（当前层级效果与下一层级效果之差）。用于家族升阶前后的人数变化预测。
  - 副作用：无。
  - 调用时机：[DefaultClanTierModel](../DefaultClanTierModel) 在计算升阶影响时调用 `GetNextClanTierPartySizeEffectChangeForHero(clan.Leader)`。

- **`GetAssumedPartySizeForLordParty(Hero leaderHero, IFaction partyMapFaction, Clan actualClan)`**
  - 用途：返回以某英雄为领袖的领主队伍“应当”具备的规模（整数估值），逻辑与移动队伍成员上限一致但以 `int` 返回，用于补给 / AI 规划等非精确场景。
  - 副作用：无。
  - 调用时机：AI 与后勤估算（如粮草、行军规模预测）读取，不作为硬上限使用。

### 村民队与初始编成

- **`MinimumNumberOfVillagersAtVillagerParty`**（属性，`int`）
  - 用途：村民队至少应携带的村民数量阈值，默认实现返回 `12`。[VillagerCampaignBehavior](../VillagerCampaignBehavior) 用它判断村庄炉灶数是否足以派出村民队。
  - 副作用：无。调用时机：村民队生成判定内部读取。

- **`GetIdealVillagerPartySize(Village village)`**
  - 用途：返回某个村庄理想村民队规模（整数）。基于村庄产量（经 [VillageProductionCalculatorModel](../VillageProductionCalculatorModel) 计算）与炉灶数 `Hearth` 推算：产量越低基础分母越大，最终为 `MinimumNumberOfVillagersAtVillagerParty + (int)(Hearth / 分母)`。
  - 副作用：无，会读取村庄产量模型。
  - 调用时机：[VillagerCampaignBehavior](../VillagerCampaignBehavior) 在生成村民队时调用，决定队伍目标规模。

- **`FindAppropriateInitialRosterForMobileParty(MobileParty party, PartyTemplateObject partyTemplate)`**
  - 用途：根据队伍模板 `partyTemplate` 与“初始规模比例”（匪帮随玩家进度、商队/巡逻队为满编等）生成并返回初始兵员花名册 `TroopRoster`。比例由 [PartyTemplateObject](../PartyTemplateObject) 各栈的 `MinValue`/`MaxValue` 线性插值，村民队还会受村庄总督 `Scouting.VillageNetwork` 专长加成。
  - 副作用：无，返回新建 `TroopRoster`；真正的写入由 [MobileParty](../MobileParty) 编成逻辑完成。
  - 调用时机：[MobileParty](../MobileParty) 初始化与 [PatrolPartiesCampaignBehavior](../PatrolPartiesCampaignBehavior) 生成巡逻队时调用。

- **`FindAppropriateInitialShipsForMobileParty(MobileParty party, PartyTemplateObject partyTemplate)`**
  - 用途：按同样的初始规模比例，依据模板 `ShipHulls` 生成并返回初始舰船列表 `List<Ship>`。
  - 副作用：无，返回新建 `List<Ship>`。
  - 调用时机：仅 [MobileParty](../MobileParty) 在含舰船模板的队伍初始化时调用。

## 示例

读取主角队伍当前允许携带的士兵上限：

```csharp
MobileParty mainParty = MobileParty.MainParty;
ExplainedNumber memberLimit = Campaign.Current.Models.PartySizeLimitModel
    .GetPartyMemberSizeLimit(mainParty.Party, includeDescriptions: false);
int maxTroops = (int)memberLimit.ResultNumber;
```

查询某定居点的驻军上限与某村庄的理想村民队规模：

```csharp
Settlement settlement = Settlement.CurrentSettlement;
int garrisonCap = (int)Campaign.Current.Models.PartySizeLimitModel
    .CalculateGarrisonPartySizeLimit(settlement).ResultNumber;

Village village = settlement.Village;
int idealVillagers = Campaign.Current.Models.PartySizeLimitModel
    .GetIdealVillagerPartySize(village);
```

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 相关：[Campaign](../Campaign) · [GameModels](../GameModels) · [SandBoxManager](../SandBoxManager) · [PartyBase](../PartyBase) · [MobileParty](../MobileParty) · [Clan](../Clan) · [Hero](../Hero) · [Settlement](../Settlement) · [Village](../Village) · [Town](../Town) · [ExplainedNumber](../ExplainedNumber) · [CharacterDevelopmentModel](../CharacterDevelopmentModel) · [ClanTierModel](../ClanTierModel) · [VillageProductionCalculatorModel](../VillageProductionCalculatorModel) · [PartyTemplateObject](../PartyTemplateObject) · [TroopRoster](../TroopRoster) · [Ship](../Ship) · [VillagerCampaignBehavior](../VillagerCampaignBehavior) · [PatrolPartiesCampaignBehavior](../PatrolPartiesCampaignBehavior) · [GarrisonTroopsCampaignBehavior](../GarrisonTroopsCampaignBehavior) · [GarrisonRecruitmentCampaignBehavior](../GarrisonRecruitmentCampaignBehavior) · [CampaignBehaviorBase](../CampaignBehaviorBase)
