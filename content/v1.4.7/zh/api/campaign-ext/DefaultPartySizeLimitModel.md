---
title: "DefaultPartySizeLimitModel"
description: "PartySizeLimitModel 的官方实现：把队伍人数上限算成「基础值 + 技能/perk/政策/建筑加成」的 ExplainedNumber，并决定新队伍的初始名册与船只。"
---
# DefaultPartySizeLimitModel

**命名空间：** `TaleWorlds.CampaignSystem.GameComponents`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public class DefaultPartySizeLimitModel : PartySizeLimitModel`
**基类：** `PartySizeLimitModel`
**源文件：** `bannerlord-1.4.7/TaleWorlds.CampaignSystem/GameComponents/DefaultPartySizeLimitModel.cs`（声明见第 19 行）

## 概述

官方的人数上限算法。它把契约的 10 个抽象成员全部实现为「基础值 + 一系列加成」的 `ExplainedNumber`：成员上限从 20 起、叠加氏族等级、领袖 perk、管家技能与政策；驻军上限从 200 起、叠加领导力技能、城镇加成与驻军建筑；俘虏上限据队伍种类走不同公式；村民队伍规模由村庄产量决定；新队伍的初始名册与船只按「初始规模比例」在模板的 min/max 间随机。

## 心智模型

**两段式结构。** 这个类分两层：10 个 `public override` 是契约入口，负责**分派**（这支队伍是驻军、巡逻队、商队、村民还是普通队伍？）；一堆 `private` 辅助方法是**算法**，负责把某一种类的上限算出来。读这个类时先看清分派逻辑，再钻具体算法。

**ExplainedNumber 是核心数据结构。** 每个上限都不是一个 `int`，而是一个 `ExplainedNumber`：它累加一系列「数值 + 来源文字」的项。`includeDescriptions` 决定这些来源文字是否被收集。UI 悬浮提示、招募界面、队伍界面都靠它显示「上限是怎么算出来的」。改算法时保持这个结构，UI 就能自动显示你的加成。

**替换机制。** 这个类是 `public` 的具体类，mod 可以直接继承它、只覆写关心的那一个方法——这是改人数上限的推荐姿势。覆写时用 `base.Xxx()` 调回官方算法再叠加自己的改动，比从头实现整个契约省力得多。官方自己也是这么干的：`StoryModePartySizeLimitModel` 继承契约、在 `StoryModeSubModule` 里整体替换。

**何时被调用。** 与契约页描述的使用点一致：`PartyBase` 缓存上限、驻军招募重算、村民行为判断、巡逻队创建、氏族等级界面。这个类是那些调用的实际应答者。

## 怎么用

**在默认算法上加一点（推荐）：** 继承 `DefaultPartySizeLimitModel`，覆写一个方法，用 `base` 调回官方结果再叠加。注册方式与契约页一致：`campaignGameStarter.AddModel<PartySizeLimitModel>(new MyPartySizeLimitModel())`。

**真实坑：**

1. **分派逻辑在 `GetPartyMemberSizeLimit` 里。** 驻军队伍问成员上限时，它转调 `CalculateGarrisonPartySizeLimit`；你只覆写 `CalculateGarrisonPartySizeLimit` 而不覆写 `GetPartyMemberSizeLimit`，两条路径都会走你的新算法——但直接问 `CalculateGarrisonPartySizeLimit` 的调用方（如驻军招募行为）也会走，需确认这是你要的。
2. **`CalculateBaseMemberSize` 是 perk 聚合器。** 领袖的十几个 perk、氏族政策、领袖技能等级加成全在这里累加。想加自己的 perk 加成，插在这里比覆写整个 `CalculateMobilePartyMemberSizeLimit` 更安全。
3. **作弊开关是 static 字段。** `_addAdditionalPartySizeAsCheat` 和 `_addAdditionalPrisonerSizeAsCheat` 是 `private static`，由作弊指令置位，开启后主队伍上限 +5000。别在 mod 里依赖它们。
4. **初始名册的随机比例有断言。** `FindAppropriateInitialRosterForMobileParty` 里若比例 >1 会触发 `Debug.FailedAssert`。覆写时保证比例在 [0,1] 内。

**使用点：**

- `SandBoxManager.cs:284` — 官方注册：`AddModel<PartySizeLimitModel>(new DefaultPartySizeLimitModel())`
- `StoryModeSubModule.cs:102` — StoryMode 替换范例
- `PartyBase.cs:874` / `PartyBase.cs:890` — 缓存上限的实际应答者
- `GarrisonRecruitmentCampaignBehavior.cs:168` — 驻军招募重算
- `VillagerCampaignBehavior.cs:122` / `VillagerCampaignBehavior.cs:129` — 村民队伍判断
- `DefaultClanTierModel.cs:140` — 氏族等级界面

## 关键成员

### 契约覆写（public override）

| 成员 | 用途 |
| --- | --- |
| `MinimumNumberOfVillagersAtVillagerParty` | 村民队伍最小人数，硬编码 12（`DefaultPartySizeLimitModel.cs:23`）。 |
| `GetPartyMemberSizeLimit(PartyBase party, bool includeDescriptions = false)` | 成员上限入口，负责分派：非移动队伍返回 0；驻军转 `CalculateGarrisonPartySizeLimit`；巡逻队转 `CalculatePatrolPartySizeLimit`；其余转 `CalculateMobilePartyMemberSizeLimit`（`DefaultPartySizeLimitModel.cs:32`）。 |
| `GetPartyPrisonerSizeLimit(PartyBase party, bool includeDescriptions = false)` | 俘虏上限入口，分派：据点走 `CalculateSettlementPartyPrisonerSizeLimitInternal`，移动队伍走 `CalculateMobilePartyPrisonerSizeLimitInternal`（`DefaultPartySizeLimitModel.cs:71`）。 |
| `CalculateGarrisonPartySizeLimit(Settlement settlement, bool includeDescriptions = false)` | 驻军上限：基础 200 + 领主领导力技能加成 + 城镇再加 200 + `AddGarrisonOwnerPerkEffects` + `AddSettlementProjectBonuses`（`DefaultPartySizeLimitModel.cs:128`）。 |
| `GetNextClanTierPartySizeEffectChangeForHero(Hero hero)` | 升一级氏族等级多几人：`GetTierEffectInternal(tier+1)` 减 `GetTierEffectInternal(tier)`（`DefaultPartySizeLimitModel.cs:203`）。 |
| `GetAssumedPartySizeForLordParty(Hero leaderHero, IFaction partyMapFaction, Clan actualClan)` | 假设队伍规模：基础 20 + `CalculateBaseMemberSize` + 管家技能加成，用于创建氏族队伍的界面预览（`DefaultPartySizeLimitModel.cs:224`）。 |
| `GetClanTierPartySizeEffectForHero(Hero hero)` | 氏族等级加成：直接转 `GetTierEffectInternal(tier, isLeader)`（`DefaultPartySizeLimitModel.cs:236`）。 |
| `GetIdealVillagerPartySize(Village village)` | 村民队伍理想人数：12 + hearth / 系数，系数由村庄日产量决定（产量 >10 时系数在 40~20 间缩放）（`DefaultPartySizeLimitModel.cs:407`）。 |
| `FindAppropriateInitialRosterForMobileParty(MobileParty party, PartyTemplateObject partyTemplate)` | 初始名册：按 `GetInitialPartySizeRatioForMobileParty` 的比例在每个兵种 min/max 间随机；村民队伍有「村庄网络」perk 时再放大（`DefaultPartySizeLimitModel.cs:420`）。 |
| `FindAppropriateInitialShipsForMobileParty(MobileParty party, PartyTemplateObject partyTemplate)` | 初始船只：同一套比例逻辑作用于 `ShipHulls` 模板栈（`DefaultPartySizeLimitModel.cs:471`）。 |

### 算法辅助（private）

| 成员 | 用途 |
| --- | --- |
| `CalculateMobilePartyMemberSizeLimit(MobileParty party, bool includeDescriptions = false)` | 普通队伍成员上限：基础 20 + `CalculateBaseMemberSize`（perk/政策/氏族等级聚合）+ 管家技能加成；商队、村民、海上船只各有分支（`DefaultPartySizeLimitModel.cs:81`）。 |
| `CalculatePatrolPartySizeLimit(MobileParty mobileParty, bool includeDescriptions)` | 巡逻队上限：10 + 5 × 守卫所等级，无守卫所则 0（`DefaultPartySizeLimitModel.cs:51`）。 |
| `CalculateSettlementPartyPrisonerSizeLimitInternal(Settlement settlement, bool includeDescriptions = false)` | 据点俘虏上限：基础 60 + 每级城墙 40 + 监狱建筑效果（`DefaultPartySizeLimitModel.cs:142`）。 |
| `CalculateMobilePartyPrisonerSizeLimitInternal(PartyBase party, bool includeDescriptions = false)` | 移动队伍俘虏上限：基础 10 + 当前人数一半 + 领袖俘虏类 perk（`DefaultPartySizeLimitModel.cs:156`）。 |
| `CalculateBaseMemberSize(Hero partyLeader, IFaction partyMapFaction, Clan actualClan, ref ExplainedNumber result)` | **perk/政策聚合器**： faction 领袖 +20、十几个领袖 perk、领袖技能等级超额加成、氏族领袖的「领袖魅力」perk（按城镇数）、贵族护卫/王室卫队政策、最后加氏族等级加成（`DefaultPartySizeLimitModel.cs:266`）。 |
| `GetTierEffectInternal(int tier, bool isHeroClanLeader)` | 氏族等级公式：tier<1 返回 0；氏族领袖 25×tier，其他 15×tier（`DefaultPartySizeLimitModel.cs:210`）。 |
| `GetCurrentPartySizeEffect(PartyBase party)` | 当前人数对俘虏上限的加成：`NumberOfHealthyMembers / 2`（`DefaultPartySizeLimitModel.cs:260`）。 |
| `GetInitialPartySizeRatioForMobileParty(MobileParty party, PartyTemplateObject partyTemplate)` | 初始规模比例：匪徒随玩家进度缩放、玩家商队与巡逻队为 1、其他用 `party.RandomFloat()`（`DefaultPartySizeLimitModel.cs:374`）。 |
| `AddGarrisonOwnerPerkEffects(Settlement currentSettlement, ref ExplainedNumber result)` | 驻军领主的「军团」「老兵尊重」perk 加成（`DefaultPartySizeLimitModel.cs:193`）。 |
| `AddMobilePartyLeaderPrisonerSizePerkEffects(PartyBase party, ref ExplainedNumber result)` | 移动队伍领袖的「恐怖」「体力」「猎人」「制高点」perk 加成（`DefaultPartySizeLimitModel.cs:169`）。 |
| `AddSettlementProjectBonuses(Settlement settlement, ref ExplainedNumber result)` | 驻军容量建筑效果（`DefaultPartySizeLimitModel.cs:242`）。 |
| `AddSettlementProjectPrisonerBonuses(Settlement settlement, ref ExplainedNumber result)` | 监狱容量建筑效果（`DefaultPartySizeLimitModel.cs:251`）。 |
| `GetPartySizeRatioForSize(PartyTemplateObject partyTemplate, int desiredSize)` | 把目标人数换算成模板 min/max 间的比例（`DefaultPartySizeLimitModel.cs:353`）。 |

### 关键常量（private const）

| 成员 | 用途 |
| --- | --- |
| `BaseMobilePartySize = 20` | 普通队伍基础上限（`DefaultPartySizeLimitModel.cs:504`）。 |
| `BaseMobilePartyPrisonerSize = 10` | 移动队伍基础俘虏上限（`DefaultPartySizeLimitModel.cs:507`）。 |
| `BaseSettlementPrisonerSize = 60` | 据点基础俘虏上限（`DefaultPartySizeLimitModel.cs:510`）。 |
| `SettlementPrisonerSizeBonusPerWallLevel = 40` | 每级城墙的俘虏上限加成（`DefaultPartySizeLimitModel.cs:513`）。 |
| `BaseGarrisonPartySize = 200` | 驻军基础上限（`DefaultPartySizeLimitModel.cs:516`）。 |
| `TownGarrisonSizeBonus = 200` | 城镇驻军额外加成（`DefaultPartySizeLimitModel.cs:522`）。 |
| `AdditionalPartySizeForCheat = 5000` | 作弊模式下的额外上限（`DefaultPartySizeLimitModel.cs:525`）。 |
| `OneVillagerPerHearth = 40` | 村民队伍的 hearth 系数（`DefaultPartySizeLimitModel.cs:528`）。 |
| `AdditionalPartySizeLimitPerTier = 15` | 非领袖每级氏族等级加成（`DefaultPartySizeLimitModel.cs:531`）。 |
| `AdditionalPartySizeLimitForLeaderPerTier = 25` | 领袖每级氏族等级加成（`DefaultPartySizeLimitModel.cs:534`）。 |

## 真实示例

```csharp
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;

// 在官方算法上叠加：所有队伍成员上限 +50
public class BiggerPartySizeLimitModel : DefaultPartySizeLimitModel
{
    public override ExplainedNumber GetPartyMemberSizeLimit(PartyBase party, bool includeDescriptions = false)
    {
        ExplainedNumber limit = base.GetPartyMemberSizeLimit(party, includeDescriptions);
        limit.Add(50f, "{=mod}Flat bonus for every party", null);
        return limit;
    }
}
```

## 参见

- [PartySizeLimitModel](../PartySizeLimitModel) — 本类的契约
- [DefaultPartySpeedCalculatingModel](../DefaultPartySpeedCalculatingModel) — 同桶的速度模型实现
- [CampaignGameStarter](../../campaign/CampaignGameStarter) — 模型替换的注册入口

## 导航

- ↑ [campaign-ext 桶索引](../)
- ↑ [API 参考](../../)
- ↑ [v1.4.7 中文首页](../../../)
- ↔ [架构总览](../../../architecture/)
