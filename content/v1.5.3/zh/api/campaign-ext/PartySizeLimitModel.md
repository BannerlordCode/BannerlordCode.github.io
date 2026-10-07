---
title: "PartySizeLimitModel"
description: "战役层部队规模契约：定义部队成员、战俘、驻军上限与氏族等级加成的抽象基类，由默认实现或 StoryMode 覆写。"
---

# PartySizeLimitModel

**命名空间：** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Type:** `public abstract class PartySizeLimitModel : MBGameModel<PartySizeLimitModel>`
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartySizeLimitModel.cs`

## 概述

PartySizeLimitModel 是战役层中所有「部队能带多少人」这一问题的统一契约。它继承自 `MBGameModel<PartySizeLimitModel>`，因此是模型系统的一员：游戏代码统一通过 `Campaign.Current.Models.PartySizeLimitModel` 这个属性访问当前生效的实例，默认情况下是 `DefaultPartySizeLimitModel`，在 StoryMode 里则被换成 `StoryModePartySizeLimitModel`。契约覆盖四类问题：移动部队的成员上限与战俘容量、定居点驻军的规模上限、氏族等级带来的规模加成（当前值与升下一级的增量）、以及新部队创建时的初始兵员名册与初始船只。此外它还定义了村民部队的经济参数（最小人数与理想规模）。所有上限方法都返回 `ExplainedNumber`——一个同时携带最终数值与逐项来源说明的结构，调用方传 `includeDescriptions: true` 才能拿到用于 UI 提示的分项描述。

## 心智模型

什么时候该动它：当你想改变「部队能带多少人」时——放大军队规模、按战役进度缩放匪帮强度、重做氏族等级收益、给 perk 接规模加成——就覆写这个类并注册为新模型。典型调用顺序：部队创建时，生成逻辑先调 `FindAppropriateInitialRosterForMobileParty` 与 `FindAppropriateInitialShipsForMobileParty`，用比例插值填满名册；部队存续期间，招募、战俘管理、驻军 UI 反复查询 `GetPartyMemberSizeLimit`、`GetPartyPrisonerSizeLimit`、`CalculateGarrisonPartySizeLimit`；计算领袖加成时（如默认实现的 `CalculateBaseMemberSize` 内部）会回调 `GetClanTierPartySizeEffectForHero`。常见误用与坑：把它当 interface 写（它是 abstract class，必须继承并实现全部 10 个抽象成员）；对定居点调 `GetPartyMemberSizeLimit`（返回 0，驻军要走 `CalculateGarrisonPartySizeLimit`）；忘了 `includeDescriptions` 默认 false，UI 拿不到分项；以为改默认实现的常量就能调参（计算方法内联了等值字面量）；覆写后没在模型系统注册，游戏里根本不会用到你的实现。

## 怎么用

### 怎么拿到它

游戏代码统一通过 `Campaign.Current.Models.PartySizeLimitModel` 这个属性访问当前生效的模型实例。默认实现是 `DefaultPartySizeLimitModel`；要确认运行时实际生效的是哪个类型，可以在日志里打印它的 `GetType()`。

### 典型用法

1. 查询上限做 UI：拿 `ExplainedNumber`，传 `includeDescriptions: true`，把分项描述显示在 tooltip 上。
2. 扩展而非重写：继承 `DefaultPartySizeLimitModel` 再 override 个别方法——基类是抽象的，没有「默认行为」可转调，直接继承 `PartySizeLimitModel` 必须实现全部 10 个成员。
3. 读氏族等级收益：`GetClanTierPartySizeEffectForHero` 给当前加成，`GetNextClanTierPartySizeEffectChangeForHero` 给升下一级的增量（领袖恒 +25，其他恒 +15）。
4. 估算 AI 部队规模：`GetAssumedPartySizeForLordParty` 返回的是截断成 int 的估算值，供 AI 决策用，不是强制上限。
5. 村民部队经济：`MinimumNumberOfVillagersAtVillagerParty` 是下限（默认 12），`GetIdealVillagerPartySize` 按村庄产值与 hearth 数算理想规模。

### 最容易踩的坑

1. 它是 abstract class 不是 interface——必须继承并实现全部 10 个抽象成员，不能只「实现」一部分。
2. 上限方法返回 `ExplainedNumber` 不是 int——数值在 `.ResultNumber`；要分项描述必须显式传 `includeDescriptions: true`。
3. 对定居点调 `GetPartyMemberSizeLimit` 会得到 0（源码里 `!party.IsMobile` 直接返回 0）——驻军上限走 `CalculateGarrisonPartySizeLimit`。
4. 默认实现的调参常量（`BaseMobilePartySize` 等）在计算方法里是内联字面量，改常量不改变行为（见 DefaultPartySizeLimitModel 页）。
5. StoryMode 用的是另一个实现（`StoryModePartySizeLimitModel`），在战役层调好的行为不一定在 StoryMode 生效。
6. 覆写后必须把新模型注册进模型系统（替换 GameModels 上的实例），否则 `Campaign.Current.Models.PartySizeLimitModel` 拿到的还是旧实例。

## 关键成员

- **GetPartyMemberSizeLimit**（`PartySizeLimitModel.cs:15`）— 移动部队成员上限；默认实现按驻军、巡逻、普通部队三条路径分派，定居点返回 0。
- **GetPartyPrisonerSizeLimit**（`PartySizeLimitModel.cs:18`）— 部队战俘容量；默认实现区分定居点与移动部队两条计算路径。
- **CalculateGarrisonPartySizeLimit**（`PartySizeLimitModel.cs:21`）— 定居点驻军上限；驻军部队查询成员上限时复用这个入口。
- **GetClanTierPartySizeEffectForHero**（`PartySizeLimitModel.cs:24`）— 氏族等级当前加成；默认实现领袖每级 25、普通成员每级 15。
- **GetNextClanTierPartySizeEffectChangeForHero**（`PartySizeLimitModel.cs:27`）— 升下一级氏族的增量；默认实现是常数（+25 或 +15），不随等级加速。
- **GetAssumedPartySizeForLordParty**（`PartySizeLimitModel.cs:30`）— 领主部队假定规模；AI 估算用，返回截断 int，不是强制上限。
- **MinimumNumberOfVillagersAtVillagerParty**（`PartySizeLimitModel.cs:34`）— 村民部队人数下限；默认实现硬编码 12。
- **GetIdealVillagerPartySize**（`PartySizeLimitModel.cs:37`）— 按村庄产值与 hearth 数算理想村民部队规模；是下限之上的经济调节。
- **FindAppropriateInitialRosterForMobileParty**（`PartySizeLimitModel.cs:40`）— 新部队创建时按模板比例插值生成初始兵员名册。
- **FindAppropriateInitialShipsForMobileParty**（`PartySizeLimitModel.cs:43`）— 新部队创建时按模板生成初始船只列表。

## 真实示例

```csharp
// 通过 GameModels 门面访问当前生效的模型实例
PartySizeLimitModel model = Campaign.Current.Models.PartySizeLimitModel;

// 查询玩家主部队的成员上限（带解释，用于 UI 提示）
ExplainedNumber limit = model.GetPartyMemberSizeLimit(
    MobileParty.MainParty, includeDescriptions: true);

// ExplainedNumber 同时携带最终数值与每一项的来源说明
float sizeLimit = limit.ResultNumber;

// 驻军上限走另一个入口：定居点而非部队
ExplainedNumber garrisonLimit = model.CalculateGarrisonPartySizeLimit(
    Settlement.CurrentSettlement, includeDescriptions: false);

// 氏族等级加成：领袖每级 25，普通成员每级 15
int tierBonus = model.GetClanTierPartySizeEffectForHero(Hero.MainHero);
```

## 参见

- ↔ [DefaultPartySizeLimitModel](../DefaultPartySizeLimitModel) — 官方默认实现，本契约的 10 个成员在这里各有具体公式。
- ↔ [MBGameModel](../../core-extra/MBGameModel) — 基类，讲 `T` 自指泛型与模型注册契约。
- ↔ [StoryModePartySizeLimitModel](../../storymode/StoryModePartySizeLimitModel) — StoryMode 的同族覆写，是「替换本模型」的真实样本。
- ↔ [GameModels](../../campaign/GameModels) — 门面聚合页，讲模型注册与 `Campaign.Current.Models` 的取用路径。

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
