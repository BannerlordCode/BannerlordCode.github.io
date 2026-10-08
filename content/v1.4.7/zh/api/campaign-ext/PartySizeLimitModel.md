---
title: "PartySizeLimitModel"
description: "队伍人数上限的战役组件契约：声明成员、俘虏、驻军、村民队伍的规模求值入口与氏族等级加成，算法由实现类决定。"
---
# PartySizeLimitModel

**命名空间：** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public abstract class PartySizeLimitModel : MBGameModel<PartySizeLimitModel>`
**基类：** `MBGameModel<PartySizeLimitModel>`
**源文件：** `bannerlord-1.4.7/TaleWorlds.CampaignSystem/ComponentInterfaces/PartySizeLimitModel.cs`（声明见第 12 行）

## 概述

这个契约回答一个问题：**一支队伍最多能装多少人**。它把「人数上限」从战役逻辑里抽出来做成可替换的组件模型——游戏各处（队伍界面、驻军招募、村民行为、巡逻队创建、氏族等级）都来问它，而怎么算由实现类决定。契约本身不含任何算法，只规定「必须能算出哪些量」。

## 心智模型

**契约与默认实现的分工。** `PartySizeLimitModel` 是抽象契约，只声明 10 个抽象成员；`DefaultPartySizeLimitModel` 是官方实现，把每一项都算成「基础值 + 一系列加成」的 `ExplainedNumber`。返回 `ExplainedNumber` 而不是 `int` 是关键设计：调用方可以只要纯数字（`.ResultNumber`），也可以要一份带来源说明的清单（`includeDescriptions: true`），后者直接驱动 UI 悬浮提示，告诉玩家「这 200 人上限里，200 是基础、40 来自城墙、60 来自政策」。

**替换机制。** 契约继承自 `MBGameModel<PartySizeLimitModel>`，走战役的「游戏模型」注册通道：模块加载时 `campaignGameStarter.AddModel<PartySizeLimitModel>(new MyModel())` 即可整体替换。`AddModel` 内部先取出当前模型、通过 `Initialize` 存进 `BaseModel` 字段，再追加进模型列表；`GameModels` 侧的 `GetGameModel<T>()` 从列表**末尾向前**找，所以**最后注册的模型生效**。官方默认实现就是在 `SandBoxManager` 里这样注册的。注意 `BaseModel` 是 `private protected`，mod 程序集拿不到——想「在默认算法上加一点」要么继承 `DefaultPartySizeLimitModel` 覆写单个方法，要么整个契约自己实现。

**何时被调用。** 上限不是算一次就缓存死的：`PartyBase` 在需要时查 `GetPartyMemberSizeLimit` / `GetPartyPrisonerSizeLimit` 并缓存结果；驻军招募行为每次招兵前重算驻军上限；村民行为决定要不要组建村民队伍时问 `MinimumNumberOfVillagersAtVillagerParty` 和 `GetIdealVillagerPartySize`；`MobileParty` 创建时问 `FindAppropriateInitialRosterForMobileParty` 要初始名册。**改这个模型 = 改整个战役的人数规则**，影响面极大。

## 怎么用

**替换它：** 写一个继承 `PartySizeLimitModel` 的类，实现全部 10 个抽象成员（少一个都编译不过），然后在模块加载时注册：

```csharp
campaignGameStarter.AddModel<PartySizeLimitModel>(new MyPartySizeLimitModel());
```

**真实坑：**

1. **10 个成员一个都不能少。** 契约有 10 个抽象成员，实现必须全部覆写，否则编译失败。想省事就继承 `DefaultPartySizeLimitModel` 只覆写你关心的那一个。
2. **`includeDescriptions` 不是可选装饰。** 传 `true` 时返回的 `ExplainedNumber` 会带上每项加成的文字来源，队伍界面靠它渲染悬浮提示。忽略这个参数、永远返回不带说明的数字，玩家就看不到上限的构成。
3. **驻军上限有两条路径。** `GetPartyMemberSizeLimit` 对驻军队伍会转调 `CalculateGarrisonPartySizeLimit`；直接问驻军上限则走后者。只覆写其中一个会导致「界面显示」和「实际招募」不一致。
4. **`GetAssumedPartySizeForLordParty` 是「假设值」。** 它用于创建氏族队伍的界面预览，不对应任何真实队伍，算的是「如果现在建队会有多大」。别把它当真实人数用。

**使用点（游戏在哪里问这个模型）：**

- `PartyBase.cs:874` — 缓存成员上限：`GetPartyMemberSizeLimit(this, false).ResultNumber`
- `PartyBase.cs:890` — 缓存俘虏上限：`GetPartyPrisonerSizeLimit(this, false).ResultNumber`
- `PartyBase.cs:902` / `PartyBase.cs:912` — 界面取带说明的版本（悬浮提示）
- `GarrisonRecruitmentCampaignBehavior.cs:168` — 驻军招募前重算驻军上限
- `GarrisonTroopsCampaignBehavior.cs:380` — 驻军兵力行为
- `PatrolPartiesCampaignBehavior.cs:107` — 巡逻队创建时取初始名册
- `VillagerCampaignBehavior.cs:122` / `VillagerCampaignBehavior.cs:129` — 村民队伍组建判断
- `DefaultClanTierModel.cs:140` — 氏族等级模型问「再升一级能多几人」
- `MobileParty.cs:2830` / `MobileParty.cs:2831` — 队伍创建时取初始名册与初始船只
- `PartyScreenHelper.cs:653` — 创建氏族队伍界面用假设人数
- `GameModels.cs:194` / `GameModels.cs:681` — 模型属性与 `GetGameModel<PartySizeLimitModel>()` 取值
- `SandBoxManager.cs:284` — 官方默认实现的注册点
- `StoryModeSubModule.cs:102` — StoryMode 用 `StoryModePartySizeLimitModel` 整体替换的官方范例

## 关键成员

| 成员 | 用途 |
| --- | --- |
| `GetPartyMemberSizeLimit(PartyBase party, bool includeDescriptions = false)` | 成员上限。`party` 为被查询队伍；`includeDescriptions` 为 true 时把每项加成来源写进解释列表供 UI 显示。默认实现按种类分派：非移动队伍返回 0，驻军转 `CalculateGarrisonPartySizeLimit`，巡逻队转 `CalculatePatrolPartySizeLimit`，其余转 `CalculateMobilePartyMemberSizeLimit`（`PartySizeLimitModel.cs:15`）。 |
| `GetPartyPrisonerSizeLimit(PartyBase party, bool includeDescriptions = false)` | 俘虏上限。参数同上。默认实现分派：据点走 `CalculateSettlementPartyPrisonerSizeLimitInternal`（基础 60 + 每级城墙 40），移动队伍走 `CalculateMobilePartyPrisonerSizeLimitInternal`（基础 10 + 当前人数一半 + 领袖 perk）（`PartySizeLimitModel.cs:18`）。 |
| `CalculateGarrisonPartySizeLimit(Settlement settlement, bool includeDescriptions = false)` | 驻军上限。`settlement` 为驻防据点。默认实现：基础 200 + 领主领导力技能加成 + 城镇再加 200 + 领主 perk + 驻军容量建筑效果（`PartySizeLimitModel.cs:21`）。 |
| `GetClanTierPartySizeEffectForHero(Hero hero)` | 氏族等级对队伍规模的加成。默认实现：氏族领袖每级 +25，非领袖每级 +15（`PartySizeLimitModel.cs:24`）。 |
| `GetNextClanTierPartySizeEffectChangeForHero(Hero hero)` | 再升一级氏族等级能多几人，即 tier+1 与 tier 的差值。默认实现由 `GetTierEffectInternal` 两次相减得出，供氏族等级界面预览（`PartySizeLimitModel.cs:27`）。 |
| `GetAssumedPartySizeForLordParty(Hero leaderHero, IFaction partyMapFaction, Clan actualClan)` | 「假设队伍规模」：用于创建氏族队伍的界面预览，不对应真实队伍。默认实现：基础 20 + 氏族等级加成 + 管家技能加成（`PartySizeLimitModel.cs:30`）。 |
| `MinimumNumberOfVillagersAtVillagerParty { get; }` | 村民队伍的最小人数，低于此值不组建村民队伍。默认实现返回 12（`PartySizeLimitModel.cs:34`）。 |
| `GetIdealVillagerPartySize(Village village)` | 村民队伍的理想人数。默认实现：最小值 + 村庄 hearth 除以由村庄日产量决定的系数（产量越高系数越小、队伍越大）（`PartySizeLimitModel.cs:37`）。 |
| `FindAppropriateInitialRosterForMobileParty(MobileParty party, PartyTemplateObject partyTemplate)` | 新队伍的初始名册。默认实现按「初始规模比例」在名册每个兵种的 min/max 间随机取值，比例取决于队伍种类（匪徒随玩家进度、商队与巡逻队为 1）（`PartySizeLimitModel.cs:40`）。 |
| `FindAppropriateInitialShipsForMobileParty(MobileParty party, PartyTemplateObject partyTemplate)` | 新队伍的初始船只，算法与初始名册同一套比例逻辑，作用于 `ShipHulls` 模板栈（`PartySizeLimitModel.cs:43`）。 |

## 真实示例

```csharp
using System.Collections.Generic;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Naval;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Roster;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;

// 氏族等级加成翻倍的 mod 模型：10 个抽象成员必须全部实现
public class DoubleClanTierPartySizeModel : PartySizeLimitModel
{
    public override int GetClanTierPartySizeEffectForHero(Hero hero)
    {
        return 30 * hero.Clan.Tier; // 默认是领袖 25/级、其他 15/级
    }

    public override ExplainedNumber GetPartyMemberSizeLimit(PartyBase party, bool includeDescriptions = false)
        => new ExplainedNumber(20f, includeDescriptions, null);
    public override ExplainedNumber GetPartyPrisonerSizeLimit(PartyBase party, bool includeDescriptions = false)
        => new ExplainedNumber(10f, includeDescriptions, null);
    public override ExplainedNumber CalculateGarrisonPartySizeLimit(Settlement settlement, bool includeDescriptions = false)
        => new ExplainedNumber(200f, includeDescriptions, null);
    public override int GetNextClanTierPartySizeEffectChangeForHero(Hero hero)
        => 30; // 每级固定 +30，升一级的变化量就是 30
    public override int GetAssumedPartySizeForLordParty(Hero leaderHero, IFaction partyMapFaction, Clan actualClan)
        => 20 + GetClanTierPartySizeEffectForHero(leaderHero);
    public override int MinimumNumberOfVillagersAtVillagerParty => 12;
    public override int GetIdealVillagerPartySize(Village village)
        => MinimumNumberOfVillagersAtVillagerParty + (int)village.Hearth / 20;
    public override TroopRoster FindAppropriateInitialRosterForMobileParty(MobileParty party, PartyTemplateObject partyTemplate)
        => TroopRoster.CreateDummyTroopRoster();
    public override List<Ship> FindAppropriateInitialShipsForMobileParty(MobileParty party, PartyTemplateObject partyTemplate)
        => new List<Ship>();
}
```

## 参见

- [DefaultPartySizeLimitModel](../DefaultPartySizeLimitModel) — 本契约的官方默认实现
- [PartySpeedModel](../PartySpeedModel) — 同桶的行军速度契约
- [CampaignGameStarter](../../campaign/CampaignGameStarter) — 模型替换的注册入口

## 导航

- ↑ [campaign-ext 桶索引](../)
- ↑ [API 参考](../../)
- ↑ [v1.4.7 中文首页](../../../)
- ↔ [架构总览](../../../architecture/)
