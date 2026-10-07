---
title: "DefaultPartySizeLimitModel"
description: "部队规模上限的官方默认实现：基础值叠加领袖、技能、perk、氏族等级与政策加成，含作弊开关与初始名册生成。"
---

# DefaultPartySizeLimitModel

**命名空间：** `TaleWorlds.CampaignSystem.GameComponents`
**Type:** `public class DefaultPartySizeLimitModel : PartySizeLimitModel`
**Source:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartySizeLimitModel.cs`

## 概述

DefaultPartySizeLimitModel 是 PartySizeLimitModel 的官方默认实现，位于 GameComponents 命名空间，是游戏里实际生效的「部队规模计算器」。它把每个上限拆成「基础值 + 一系列加成」：移动部队成员基础 20，驻军基础 200（城镇再 +200），移动部队战俘基础 10，定居点战俘基础 60（城镇 +40）。加成来源包括：领袖身份（faction 领袖 +20）、九个规模相关 perk、领导力终极 perk UltimateLeader、氏族领袖的 LeaderOfMasses（按城镇数）、氏族等级（领袖 25/级、其他 15/级）、政策 NobleRetinues（+40，需 5 级）与 RoyalGuard（+60，需 faction 领袖）、Steward 技能、驻军建筑效果。所有数值以 `ExplainedNumber` 累加，`includeDescriptions` 时附带本地化文本。文件末尾声明了 11 个调参常量（与计算方法内联的字面量等值），以及两个静态作弊开关（+5000）。

## 心智模型

什么时候该动它：想调「默认部队上限到底从哪来」时——改基础值、改氏族等级收益、给新 perk 接规模加成、调整匪帮初始规模曲线。典型调用顺序：`GetPartyMemberSizeLimit` 是分派入口——非移动部队返回 0，驻军转 `CalculateGarrisonPartySizeLimit`，巡逻队转 `CalculatePatrolPartySizeLimit`（守卫屋等级 ×5+10），其余走 `CalculateMobilePartyMemberSizeLimit`（基础 20 + `CalculateBaseMemberSize` + Steward 技能 + 海上船只容量因子）。`CalculateBaseMemberSize` 是加成的汇聚点：faction 领袖、九个 perk、UltimateLeader、LeaderOfMasses、NobleRetinues、RoyalGuard、氏族等级都在这里入账，且它会被 `GetAssumedPartySizeForLordParty` 复用（AI 估算路径）。常见误用与坑：以为改常量能调参（计算方法是内联字面量）；对定居点调 `GetPartyMemberSizeLimit` 得到 0；巡逻队上限取决于守卫屋建筑是否存在（没有则返回 0）；作弊开关是 static 且在本文件内没有任何赋值点（由外部作弊行为设置）；`GetIdealVillagerPartySize` 依赖 `VillageProductionCalculatorModel`，是跨模型调用。

## 怎么用

### 怎么拿到它

通常不直接 new——通过 `Campaign.Current.Models.PartySizeLimitModel` 拿到的默认实例就是它。要确认类型可以打印 `GetType()`；要扩展就继承它并 override 个别方法，再注册进模型系统。

### 典型用法

1. 查玩家主部队上限：`GetPartyMemberSizeLimit(MobileParty.MainParty, includeDescriptions: true)`，分项描述直接进 UI。
2. 查驻军：`CalculateGarrisonPartySizeLimit(Settlement.CurrentSettlement)`——注意它链式访问 `settlement.OwnerClan.Leader.CharacterObject`，无空值保护。
3. 战俘容量：`GetPartyPrisonerSizeLimit`——移动部队路径 = 10 + 健康成员数/2 + 四个 perk。
4. 初始名册：`FindAppropriateInitialRosterForMobileParty` 按 `GetInitialPartySizeRatioForMobileParty` 的比例在模板 min/max 间插值；匪帮比例随战役进度缩放。
5. 作弊路径：`_addAdditionalPartySizeAsCheat` / `_addAdditionalPrisonerSizeAsCheat` 为 static，外部置位后主部队 +5000（需 CheatMode）。

### 最容易踩的坑

1. 常量不是开关：11 个 const（459–489）声明了调参值，但计算方法用等值字面量（20f/10f/60f/40f/200f/5000f/15/25），改常量不改变任何行为。
2. 巡逻队上限看建筑不看部队：`CalculatePatrolPartySizeLimit` 遍历 `HomeSettlement.Town.Buildings` 找 SettlementGuardHouse，找到才返回 10+5×等级，找不到返回 0；第 53 行还有一句被丢弃的 `new ExplainedNumber(10f,…)`（反编译死代码）。
3. 定居点成员上限是 0：`GetPartyMemberSizeLimit` 对 `!party.IsMobile` 直接返回 0——驻军必须走 `CalculateGarrisonPartySizeLimit`。
4. 作弊开关是 static 且本文件无赋值点：`_addAdditionalPartySizeAsCheat` / `_addAdditionalPrisonerSizeAsCheat` 由外部代码置位，效果作用于所有实例，还需 `Game.Current.CheatMode` 与 `IsMainParty` 同时成立。
5. 驻军/战俘建筑效果只对堡垒生效：`AddGarrisonOwnerPerkEffects`、`AddSettlementProjectBonuses`、`AddSettlementProjectPrisonerBonuses` 都先判 `settlement.IsFortification`，村庄拿不到这些加成。
6. `GetCurrentPartySizeEffect` 是整数除法：`NumberOfHealthyMembers / 2`，1 个健康成员贡献 0。

## 关键成员

- **MinimumNumberOfVillagersAtVillagerParty**（`DefaultPartySizeLimitModel.cs:23`）— 村民部队人数下限，硬编码返回 12；`GetIdealVillagerPartySize` 的返回值以它为地板。
- **GetPartyMemberSizeLimit**（`DefaultPartySizeLimitModel.cs:32`）— 成员上限分派入口：非移动部队返回 0，驻军转 `CalculateGarrisonPartySizeLimit`，巡逻队转 `CalculatePatrolPartySizeLimit`，其余走 `CalculateMobilePartyMemberSizeLimit`。
- **GetPartyPrisonerSizeLimit**（`DefaultPartySizeLimitModel.cs:71`）— 战俘容量分派：定居点走 `CalculateSettlementPartyPrisonerSizeLimitInternal`，移动部队走 `CalculateMobilePartyPrisonerSizeLimitInternal`。
- **CalculateGarrisonPartySizeLimit**（`DefaultPartySizeLimitModel.cs:128`）— 驻军上限：基础 200，城镇 +200，叠加领袖领导力技能、驻军 perk 与建筑效果。
- **GetNextClanTierPartySizeEffectChangeForHero**（`DefaultPartySizeLimitModel.cs:186`）— 升下一级氏族的增量：`GetTierEffectInternal(tier+1)` 减当前值，领袖恒 +25、其他恒 +15。
- **GetAssumedPartySizeForLordParty**（`DefaultPartySizeLimitModel.cs:207`）— 领主部队假定规模：基础 20 + `CalculateBaseMemberSize` + Steward 技能，截断成 int 供 AI 估算。
- **GetClanTierPartySizeEffectForHero**（`DefaultPartySizeLimitModel.cs:219`）— 氏族等级当前加成：`GetTierEffectInternal(hero.Clan.Tier, hero.Clan.Leader == hero)`。
- **GetIdealVillagerPartySize**（`DefaultPartySizeLimitModel.cs:362`）— 理想村民部队规模：12 + hearth/除数，除数随村庄日产值在 20–40 间变化。
- **FindAppropriateInitialRosterForMobileParty**（`DefaultPartySizeLimitModel.cs:375`）— 初始兵员：按初始比例在模板各堆 min/max 间随机插值；村民部队在 VillageNetwork perk 的城镇总督下再乘加成。
- **FindAppropriateInitialShipsForMobileParty**（`DefaultPartySizeLimitModel.cs:426`）— 初始船只：对模板每个 ShipHull 堆按同比例插值并 new Ship。
- **CalculatePatrolPartySizeLimit**（`DefaultPartySizeLimitModel.cs:51`）— 巡逻队上限：遍历 `HomeSettlement.Town.Buildings` 找 SettlementGuardHouse，返回 10+5×等级；无守卫屋则 0。
- **GetPatrolPartySizeLimitFromGuardHouseLevel**（`DefaultPartySizeLimitModel.cs:65`）— 守卫屋等级公式：10 + 5×level。
- **CalculateMobilePartyMemberSizeLimit**（`DefaultPartySizeLimitModel.cs:81`）— 移动部队成员上限核心：基础 20；有领袖且非商队时算 `CalculateBaseMemberSize` + Steward 技能；商队按精英/航海能力给 10–46；村民 +40；海上时按船只 CrewCapacityBonusFactor 乘因子。
- **CalculateSettlementPartyPrisonerSizeLimitInternal**（`DefaultPartySizeLimitModel.cs:142`）— 定居点战俘：基础 60，城镇 +40，加 PrisonCapacity 建筑效果。
- **CalculateMobilePartyPrisonerSizeLimitInternal**（`DefaultPartySizeLimitModel.cs:154`）— 移动部队战俘：基础 10 + 当前规模效果 + 四个 perk，作弊时主部队 +5000。
- **AddMobilePartyLeaderPrisonerSizePerkEffects**（`DefaultPartySizeLimitModel.cs:167`）— 把 TwoHanded.Terror、Athletics.Stamina、Roguery.Manhunter、Scouting.VantagePoint 四个 perk 的战俘加成入账。
- **AddGarrisonOwnerPerkEffects**（`DefaultPartySizeLimitModel.cs:176`）— 堡垒定居点的驻军 perk：OneHanded.CorpsACorps 与 Leadership.VeteransRespect。
- **GetTierEffectInternal**（`DefaultPartySizeLimitModel.cs:193`）— 氏族等级公式：tier<1 返回 0；领袖 25×tier，其他 15×tier。
- **AddSettlementProjectBonuses**（`DefaultPartySizeLimitModel.cs:225`）— 把堡垒建筑的 GarrisonCapacity 效果加进驻军上限。
- **AddSettlementProjectPrisonerBonuses**（`DefaultPartySizeLimitModel.cs:234`）— 把堡垒建筑的 PrisonCapacity 效果加进定居点战俘上限。
- **GetCurrentPartySizeEffect**（`DefaultPartySizeLimitModel.cs:243`）— 当前规模效果：NumberOfHealthyMembers / 2（整数除法）。
- **CalculateBaseMemberSize**（`DefaultPartySizeLimitModel.cs:249`）— 领袖基础加成汇聚点：faction 领袖 +20、九个 perk、UltimateLeader 史诗 perk、LeaderOfMasses（城镇数×PrimaryBonus）、NobleRetinues +40（5 级+王国）、RoyalGuard +60（faction 领袖）、氏族等级加成。
- **GetPartySizeRatioForSize**（`DefaultPartySizeLimitModel.cs:308`）— 把目标规模换算成模板 min/max 区间内的 0–1 比例。
- **GetInitialPartySizeRatioForMobileParty**（`DefaultPartySizeLimitModel.cs:329`）— 初始比例：匪帮随战役进度缩放（航海匪帮为双峰随机），玩家商队与巡逻队恒为 1，其余用 `party.RandomFloat()`。
- **调参常量组**（`DefaultPartySizeLimitModel.cs:459`）— 11 个 const（459–489）：基础值、作弊值 5000、每级 15/25 等；注意计算方法内联了等值字面量，改常量不改变行为。
- **_addAdditionalPartySizeAsCheat / _addAdditionalPrisonerSizeAsCheat**（`DefaultPartySizeLimitModel.cs:531`）— 两个 static 作弊开关，本文件内无赋值点；置位后主部队在 CheatMode 下 +5000。

## 真实示例

```csharp
// 默认实现通过同一个门面暴露，通常不需要直接 new
PartySizeLimitModel model = Campaign.Current.Models.PartySizeLimitModel;

// 玩家主部队的成员上限：基础 20 + 领袖加成 + 技能/perk + 氏族等级
ExplainedNumber limit = model.GetPartyMemberSizeLimit(
    MobileParty.MainParty, includeDescriptions: true);

// 战俘容量：基础 10 + 当前健康成员数的一半 + 相关 perk
ExplainedNumber prisonerLimit = model.GetPartyPrisonerSizeLimit(
    MobileParty.MainParty, includeDescriptions: true);

// 驻军上限：基础 200，城镇再 +200，领袖领导力技能与建筑效果叠加
ExplainedNumber garrisonLimit = model.CalculateGarrisonPartySizeLimit(
    Settlement.CurrentSettlement, includeDescriptions: true);

// 升到下一级氏族还能加多少（领袖恒为 +25，其他成员恒为 +15）
int nextTierGain = model.GetNextClanTierPartySizeEffectChangeForHero(Hero.MainHero);
```

## 参见

- ↔ [PartySizeLimitModel](../PartySizeLimitModel) — 它实现的契约，10 个抽象成员的签名与语义。
- ↔ [MobilePartyHelper](../../core-extra/MobilePartyHelper) — 生成领主部队时直接吃本模型的 `FindAppropriateInitialRosterForMobileParty`。
- ↔ [PartyBaseHelper](../../core-extra/PartyBaseHelper) — 部队名册/规模的文本与排序工具，和本页数值是同一批消费者。
- ↔ [StoryModePartySizeLimitModel](../../storymode/StoryModePartySizeLimitModel) — 同族覆写样本，展示「换掉默认实现」的路径。

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
