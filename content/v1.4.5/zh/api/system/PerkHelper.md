---
title: "PerkHelper：按角色计算 Perk 贡献"
description: "PerkHelper 在 v1.4.5 中把 Perk 角色和加成写入队伍、角色、Captain、Governor 与 Town 的 ExplainedNumber 计算，并提供一个明确的重置入口。"
---
# PerkHelper

**命名空间：** `Helpers`
<br>**模块：** `TaleWorlds.CampaignSystem`
<br>**类型：** `public static class PerkHelper`
<br>**基类：** `System.Object`
<br>**源文件：** `bin/TaleWorlds.CampaignSystem/Helpers/PerkHelper.cs`

## 一句话职责

`PerkHelper` 把 `PerkObject` 的角色和加成数据转换为战役 Model 与 UI 使用的 `ExplainedNumber` 贡献，同时提供 Perk 可用性查询和一个有限的技能重置操作。

## 心智模型

大多数方法都是计算适配器。Model 提供队伍、角色、Captain、Governor、Town 或 Hero 以及一个 `ExplainedNumber`；`PerkHelper` 检查对应角色和激活的 Perk 值，然后使用 Perk 名称作为解释，加入平坦值或比例因子。Primary 与 Secondary 角色必须显式选择，海上调用方还可以请求 `0.5f` 乘数。`ClearPerksForSkill` 是例外：它改变 Hero 的 Perk 状态和永久属性，更新主队伍 roster 版本并限制生命值。

## 何时使用，何时不要使用

- 在已经拥有 `ExplainedNumber`、并且知道当前计算是 Primary 还是 Secondary 的 Model 中使用贡献方法。
- 用 `GetCaptainPerksForTroopUsages`、`GetGovernorPerksForHero`、`GetPerkValueForTown` 或 `AvailablePerkCountOfHero` 做当前战役/UI 判断，不要把返回值当成存档快照。
- 只有在明确的洗点或重置流程中使用 `ClearPerksForSkill`。源码中的它会移除激活 Perk 的效果，不是只读缓存失效方法。
- 不要在没有对应角色契约时同时调用两个角色路径，否则同一个 Perk 可能被重复计入。
- 不要保存 `ExplainedNumber` 或返回的 Perk 列表；应从登记的 `PerkObject`、`Hero`、`MobileParty`、`CharacterObject` 和 `Town` 状态重新计算。

## 依赖关系与调用链

```text
PerkObject + Hero/Party/Town 状态
              |
              v
         PerkHelper
              |
              v
Campaign Model -> ExplainedNumber -> Tooltip 或 Model 结果
```

- [`Hero`](../../campaign/Hero)、[`MobileParty`](../../campaign/MobileParty)、[`CharacterObject`](../../campaign/CharacterObject) 和 [`Town`](../../campaign/Town) 持有 Perk 值及角色上下文。
- [`SkillHelper`](../SkillHelper) 为 `GetGovernorEngineeringSkillEffectForHero` 提供工程效果描述。
- [`ExplainedNumber`](../../campaign/ExplainedNumber) 是计算累加器；[`Clan`](../../campaign/Clan) 与聚落 Model 消费结果，Helper 不拥有它。

## 公开成员按契约分组

| 分组 | 成员 | 源码确认的行为 |
|---|---|---|
| 重置与可用性 | `ClearPerksForSkill`、`AvailablePerkCountOfHero` | 清除某技能的所有 Perk，移除源码列出的锻造/运动永久效果，更新主队伍 roster 版本并限制生命值；或统计达到技能要求、未选中且不与替代 Perk 重复的 Perk。 |
| 队伍与 Captain | `GetCaptainPerksForTroopUsages`、`AddPerkBonusForParty`、`AddPerkBonusFromCaptain` | 按 troop-usage mask 或 Captain 角色匹配，并把选中的 Primary/Secondary 加成写入 `ExplainedNumber`；队伍贡献可使用海上乘数。 |
| Personal 与 Clan Leader | `AddPerkBonusForCharacter`、`AddEpicPerkBonusForCharacter` | 检查 Personal 或 Clan Leader 角色及激活值。Epic 加成只在 `skillValue > skillRequired` 时按差值缩放。 |
| Governor 与 Town | `AddPerkBonusForTown`、`GetPerkValueForTown`、`GetGovernorPerksForHero`、`GetGovernorEngineeringSkillEffectForHero` | Governor 必须存在且在对应聚落；`GetPerkValueForTown` 可由 Clan Leader 或 Governor 角色满足。 |
| 玩家便利查询 | `PlayerHasAnyItemDonationPerk` | 先检查主队伍的 `GivingHands`，再以 Secondary role 检查 `PaidInPromise`；只报告当前条件，不授予 Perk。 |

## 真实示例：在 Model 计算中使用 Helper

下面遵循 `DefaultMapVisibilityModel` 的所有权模式：Model 拥有累加器，Helper 把实时 Perk 贡献加入其中：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CharacterDevelopment;
using TaleWorlds.Core;

public static ExplainedNumber CalculateVisibilityBonus()
{
    ExplainedNumber result = new ExplainedNumber(0f, includeDescriptions: true);
    PerkHelper.AddPerkBonusForParty(
        DefaultPerks.Scouting.NightRunner,
        MobileParty.MainParty,
        isPrimaryBonus: false,
        ref result);
    return result;
}
```

结果只是计算输出，不会写入队伍。海上调用方可以传 `shouldApplyNavalMultiplier: true`；源码会在加入前把选中的加成乘以 `0.5f`。

## 角色与阈值边界

`AddPerkBonusForCharacter` 处理 Personal 和 Clan Leader 角色。Clan Leader 分支读取 `character.HeroObject.Clan.Leader`，并不假定角色本人就是领主。`AddPerkBonusForTown` 要求 Governor 的 `CurrentSettlement` 等于 Town 所在聚落，所以已任命但当前在别处的 Governor 不提供该效果。

`AvailablePerkCountOfHero` 要求 Hero 技能值至少达到每个 Perk 的要求，排除已经激活的 Perk、已激活的替代 Perk，并避免同一个替代 Perk 被重复计数。`GetGovernorEngineeringSkillEffectForHero` 在 Hero 为 null 或没有工程技能时返回空名称和本地化的 `No effect` 文本。

## 风险与存档边界

- `ClearPerksForSkill` 修改 Hero development 数据和主队伍 roster 版本。它只能从明确的洗点操作调用，不应来自 Tooltip 或 Model 计算。
- `ClearPerksForSkill` 只知道当前源码中固定的锻造与运动永久效果；其他版本新增永久 Perk 时必须重新审阅源码。
- `ref ExplainedNumber` 可能被多层 Model 更新。应在拥有对应角色契约的层级调用一次，否则会重复计算。
- 方法会访问 `Hero.MainHero`、`MobileParty.MainParty`、`Town.Governor` 和 `PerkObject.All` 等实时战役对象；启动、拆除和读档边界要先确认对象有效。
- Helper 不定义存档 schema。应由拥有 Hero 或战役状态的对象/Behavior 保存稳定数据，读档后重新计算 Perk 结果。

## 版本注记

本页依据 v1.4.5 `PerkHelper.cs`，包括 `NavalMultiplier = 0.5f`、严格的 Epic 技能阈值、工程无效果文本和 `ClearPerksForSkill` 处理的永久效果集合。

## 导航

- [↑ API 系统索引](../)
- [↔ PersuasionHelper](../PersuasionHelper)
- [↔ SettlementHelper](../SettlementHelper)
- [相关：Hero](../../campaign/Hero)
- [相关：MobileParty](../../campaign/MobileParty)
- [相关：CharacterObject](../../campaign/CharacterObject)
- [相关：Town](../../campaign/Town)
- [English page](../../../../en/api/system/PerkHelper)
