---
title: "PartyImpairmentModel"
description: "定义部队在战斗中陷入混乱状态与攻城脆弱期的时长与触发条件的抽象策略模型。"
---
# PartyImpairmentModel

**命名空间：** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public abstract class PartyImpairmentModel : MBGameModel<PartyImpairmentModel>`
**基类：** `MBGameModel<PartyImpairmentModel>`
**源文件：** `bannerlord-1.4.7/TaleWorlds.CampaignSystem/ComponentInterfaces/PartyImpairmentModel.cs`（声明见第 8 行）

## 概述

`PartyImpairmentModel` 是战役层「部队减损」策略的抽象接口，集中回答两个问题：一支部队在战斗事件里能混乱多久、以及围城期间会暴露多长的脆弱窗口。它继承自 `MBGameModel<PartyImpairmentModel>`，因此通过 `Campaign.Current.Models.PartyImpairmentModel` 全局访问，并可被 mod 整体替换。默认实现为 `DefaultPartyImpairmentModel`，用固定基准值加随机扰动与 perk 修正来产出时长。

## 心智模型

把这个类想成「战斗混乱与攻城脆弱的时长裁判」。它不持有状态，只提供四个纯查询：一个判定「这支部队够不够格被打出混乱」（`CanGetDisorganized`），一个给出混乱持续多久（`GetDisorganizedStateDuration`，返回可分解的 `ExplainedNumber` 以便 UI 显示修正来源），一个给出围城方脆弱期持续多久（`GetVulnerabilityStateDuration`），一个给出围城方预期何时进入脆弱期（`GetSiegeExpectedVulnerabilityTime`）。调用方（如 `DisorganizedStateCampaignBehavior`、`BesiegerCamp`、`MobileParty`）在需要扣时长或判定资格时向它提问，自身不写死数值。

## 怎么用

替换它需要新建一个继承 `PartyImpairmentModel` 的类，实现全部四个抽象方法，再通过 mod 的 `MBGameModel` 替换机制（通常在 `SubModule` 里用 `Campaign.Current.SetModel` 或 mod 配置）挂上去。注意：

- `GetDisorganizedStateDuration` 返回 `ExplainedNumber` 而非 `float`，UI 会读取其因子列表来显示「基础 6 小时 + perk 加成」的明细；只返回一个裸 `new ExplainedNumber(x, false, null)` 会丢失修正来源展示（参见 `DefaultPartyImpairmentModel.cs:24`）。
- `CanGetDisorganized` 的判定门槛在默认实现里是「活跃、移动、人数 ≥ 10、且是军队领袖或独立部队」（`DefaultPartyImpairmentModel.cs:37`）；改这个门槛会直接影响哪些部队在战斗后进入混乱，改动前务必确认不会让主部队永久免疫。
- `GetSiegeExpectedVulnerabilityTime` 返回的是「当前时刻起多少小时后进入脆弱期」的小时数，默认实现用 `MBRandom.RandomFloatNormal` 做正态扰动（`DefaultPartyImpairmentModel.cs:16`）；返回负值或超大值会让攻城 AI 的预期完全错乱。
- 四个方法都是 `abstract`，漏实现任何一个都会在编译期报错；但如果你只想改其中一个，其余三个可以 `throw new NotSupportedException()` 或转发到默认实现，避免误改。

## 关键成员

| 成员 | 用途 |
| --- | --- |
| `public abstract class PartyImpairmentModel : MBGameModel<PartyImpairmentModel>`（PartyImpairmentModel.cs:8） | 类型声明；继承 `MBGameModel<T>` 使其成为可通过 `Campaign.Current.Models` 全局访问、可被 mod 替换的策略模型。 |
| `public abstract ExplainedNumber GetDisorganizedStateDuration(MobileParty party)`（PartyImpairmentModel.cs:11） | 返回部队陷入混乱状态的持续小时数，以 `ExplainedNumber` 形式返回以便 UI 展示 perk 等修正来源。 |
| `public abstract float GetVulnerabilityStateDuration(PartyBase party)`（PartyImpairmentModel.cs:14） | 返回围城期间部队处于「脆弱」状态的持续小时数，影响被偷袭或追击时的惩罚窗口。 |
| `public abstract float GetSiegeExpectedVulnerabilityTime()`（PartyImpairmentModel.cs:17） | 返回围城方预期进入脆弱状态的时刻（相对当前时刻的小时偏移），供攻城 AI 与玩家判断最佳进攻时机。 |
| `public abstract bool CanGetDisorganized(PartyBase partyBase)`（PartyImpairmentModel.cs:20） | 判定指定部队是否满足进入混乱状态的前置条件（活跃、移动、人数门槛、军队角色等）。 |

## 真实示例

```csharp
// 判定一支部队是否会在战斗后进入混乱状态（DisorganizedStateCampaignBehavior.cs:30）
if (Campaign.Current.Models.PartyImpairmentModel.CanGetDisorganized(mapEventParty.Party))
{
    // 触发混乱状态逻辑
}

// 读取混乱持续时长并写入部队的混乱截止时间（MobileParty.cs:3048）
this._disorganizedUntilTime = CampaignTime.HoursFromNow(
    Campaign.Current.Models.PartyImpairmentModel.GetDisorganizedStateDuration(this).ResultNumber);

// 围城营地判定部队是否可被打出混乱（BesiegerCamp.cs:379）
if (Campaign.Current.Models.PartyImpairmentModel.CanGetDisorganized(mobileParty.Party))
{
    // 围城期间的混乱处理
}
```

## 参见

- [`../DefaultPartyImpairmentModel`](../DefaultPartyImpairmentModel) — 默认实现，含固定基准值与 perk 修正逻辑。
- [`../../campaign/MobileParty`](../../campaign/MobileParty) — 调用 `GetDisorganizedStateDuration` 写入 `_disorganizedUntilTime` 的一方。

## 导航
- ↑ [campaign-ext 桶索引](../)
- ↑ [API 参考](../../)
- ↑ [v1.4.7 中文首页](../../../)
- ↔ [架构总览](../../../architecture/)
