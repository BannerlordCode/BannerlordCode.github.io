---
title: "DefaultPartyMoraleModel"
description: "PartyMoraleModel 的默认实现：以 50 为基值，按「近期事件 → 领导技能 → 断粮 → 欠饷 → perk → 食物多样性 → 队伍规模」的固定顺序累加出队伍有效士气，并定义高士气阈值与胜负结算数值。"
---
# DefaultPartyMoraleModel

**命名空间：** `TaleWorlds.CampaignSystem.GameComponents`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public class DefaultPartyMoraleModel : PartyMoraleModel`
**基类：** `PartyMoraleModel`
**源文件：** `bannerlord-1.4.7/TaleWorlds.CampaignSystem/GameComponents/DefaultPartyMoraleModel.cs`（声明见第 15 行）

## 概述

`DefaultPartyMoraleModel` 是 `PartyMoraleModel` 契约的**原版实现**，注册于 `SandBoxManager.cs:255`。它把「士气怎么算」落成具体数字：基值 50、高士气阈值 70、断粮每日 -5、欠饷每日 -3、胜利 +20 / 失败 -20。核心是 `GetEffectivePartyMorale`（`DefaultPartyMoraleModel.cs:226`）——它从 50 出发，按固定顺序累加七类修正，返回带逐项说明的 `ExplainedNumber`。类内还有一批 private 累加器，各自负责一类修正（食物多样性、队伍规模、perk、技能），是理解「士气数字怎么来的」的关键。

## 心智模型

把它想成**一条固定工位的装配线**：传送带起点是 50 分，七个工位（近期事件 → 技能 → 断粮 → 欠饷 → perk → 食物 → 规模）依次往上加料，最终读数就是队伍士气。三个心智要点：

1. **「每日惩罚」与「事件惩罚」是两套尺度，别混**。公开的 `GetDailyStarvationMoralePenalty`（-5）与 `GetDailyNoWageMoralePenalty`（-3）供**每日行为**使用；而 `GetEffectivePartyMorale` 内部用的是私有的 `GetStarvationMoralePenalty`（-30）与 `GetNoWageMoralePenalty`（-20）。同一个「断粮」概念，两条路径差 6 倍。
2. **基值是硬编码的 50f，不是 `GetStandardBaseMorale()`**。`GetEffectivePartyMorale` 第一行就是 `new ExplainedNumber(50f, ...)`（`DefaultPartyMoraleModel.cs:228`）。类里那个 `BaseMoraleValue = 50f` 常量（`DefaultPartyMoraleModel.cs:260`）**从未被使用**——是死代码。
3. **`RecentEventsMorale` 是「会衰减的事件账户」**。胜负结算、攻城后果、招募俘虏等行为都往里加钱，`GetEffectivePartyMorale` 把它整体计入；`MobileParty.DailyTick` 每天让它衰减 10%（`MobileParty.cs:2559`）。所以一次性胜负影响会随天数自然消退。

## 怎么用

**替换方式**：继承本类并覆写需要的成员，再 `CampaignGameStarter.AddModel<PartyMoraleModel>(new MyModel())` 注册（见 `PartyMoraleModel` 的「怎么用」）。由于基类是具体类，`base.GetEffectivePartyMorale(...)` 可以直接复用整条装配线，只叠加自己的修正。

**真实坑**：

1. **覆写 `GetStandardBaseMorale` 不改变有效士气**。`GetEffectivePartyMorale` 硬编码 50f，不调它。要改基值必须覆写 `GetEffectivePartyMorale` 本身。
2. **食物多样性加成只在非断粮时计算**。`CalculateFoodVarietyMoraleBonus` 开头就是 `if (!party.Party.IsStarving)`（`DefaultPartyMoraleModel.cs:72`）——断粮队伍直接跳过整个食物修正。
3. **两个 perk 会改写食物修正**：`WarriorsDiet`（Steward）把负的食物加成抬到 0；`Gourmet`（Steward）把正的食物加成翻倍（海上减半）。
4. **队伍规模惩罚只作用于正规军**。`GetPartySizeMoraleEffect` 跳过民兵与村民队伍（`DefaultPartyMoraleModel.cs:140`），且按超出规模的平方根扣分——超编越多边际惩罚越轻。
5. **perk 修正里藏着「按 tier 比例」的算法**。`PeasantLeader`（Crossbow）的加成 = `PrimaryBonus × tier≤3 占比`（`CalculateTroopTierRatio`，`DefaultPartyMoraleModel.cs:201`）——全是低级兵时满额，高级兵越多越少。

**真实使用点**：

- `DefaultPartyMoraleModel.cs:226` — `GetEffectivePartyMorale` 聚合入口，被 `MobileParty.cs:2030`（`Morale`）与 `MobileParty.cs:2096`（`MoraleExplained`）调用。
- `DefaultPartyMoraleModel.cs:19` — `HighMoraleValue` 返回 70f，被 `DefaultPartyHealingModel.cs:166` 与 `DefaultPartyHealingModel.cs:256` 用于判定高士气治疗加成。
- `DefaultPartyMoraleModel.cs:28` — `GetDailyStarvationMoralePenalty` 返回 -5，被 `FoodConsumptionBehavior.cs:207` 每日调用。
- `DefaultPartyMoraleModel.cs:34` — `GetDailyNoWageMoralePenalty` 返回 -3，被 `DefaultClanFinanceModel.cs:973` 用于欠饷工资折算。
- `DefaultPartyMoraleModel.cs:64` — `GetDefeatMoraleChange` 返回 -20f，被 `MapEvent.cs:2239` 在战斗结算时调用。
- `SandBoxManager.cs:255` — 本类注册点：`AddModel<PartyMoraleModel>(new DefaultPartyMoraleModel())`。

## 关键成员

| 成员 | 位置 | 用途、副作用与时机 |
| --- | --- | --- |
| `float HighMoraleValue` | `DefaultPartyMoraleModel.cs:19` | 覆写契约属性，返回 70f。治疗模型据此判定「高士气」并追加 `BestMedicine` perk 加成。 |
| `int GetDailyStarvationMoralePenalty(PartyBase party)` | `DefaultPartyMoraleModel.cs:28` | 返回 -5。**每日**断粮扣减，供 `FoodConsumptionBehavior` 使用；注意与私有的 -30 区分。 |
| `int GetDailyNoWageMoralePenalty(MobileParty party)` | `DefaultPartyMoraleModel.cs:34` | 返回 -3。**每日**欠饷扣减，供 `DefaultClanFinanceModel` 折算工资。 |
| `int GetStarvationMoralePenalty(MobileParty party)` | `DefaultPartyMoraleModel.cs:40` | private。返回 -30，是 `GetEffectivePartyMorale` 内部实际使用的断粮惩罚（尺度比公开版大 6 倍）。 |
| `int GetNoWageMoralePenalty(MobileParty party)` | `DefaultPartyMoraleModel.cs:46` | private。返回 -20，是 `GetEffectivePartyMorale` 内部实际使用的欠饷惩罚。 |
| `float GetStandardBaseMorale(PartyBase party)` | `DefaultPartyMoraleModel.cs:52` | 返回 50f。**原版无调用方**（有效士气硬编码 50f），仅作扩展点。 |
| `float GetVictoryMoraleChange(PartyBase party)` | `DefaultPartyMoraleModel.cs:58` | 返回 20f。**原版无调用方**，仅作扩展点。 |
| `float GetDefeatMoraleChange(PartyBase party)` | `DefaultPartyMoraleModel.cs:64` | 返回 -20f。战斗失败时由 `MapEvent.cs:2239` 计入 `RecentEventsMorale`。 |
| `void CalculateFoodVarietyMoraleBonus(MobileParty party, ref ExplainedNumber result)` | `DefaultPartyMoraleModel.cs:70` | private 累加器。按 `ItemRoster.FoodVariety`（0–12+）查表给 -2 到 +10 的加成；断粮队伍跳过；`WarriorsDiet` perk 把负值抬到 0，`Gourmet` perk 把正值翻倍（海上减半）。 |
| `void GetPartySizeMoraleEffect(MobileParty mobileParty, ref ExplainedNumber result)` | `DefaultPartyMoraleModel.cs:138` | private 累加器。非民兵/村民队伍超出 `PartySizeLimit` 时按 `-1 × √超出人数` 扣分。 |
| `static void CheckPerkEffectOnPartyMorale(MobileParty party, PerkObject perk, bool isInfoNeeded, TextObject newInfo, int perkEffect, out TextObject outNewInfo, out int outPerkEffect)` | `DefaultPartyMoraleModel.cs:151` | private 工具。队长持有该 perk 时给 `perkEffect` 加 10，并（可选）把说明文本拼成多行格式。 |
| `void GetMoraleEffectsFromPerks(MobileParty party, ref ExplainedNumber bonus)` | `DefaultPartyMoraleModel.cs:170` | private 累加器。汇总三个 perk：`PeasantLeader`（按 tier≤3 占比给加成）、`SelfPromoter`（围城期间）、`Logistician`（有富余马匹时）。 |
| `float CalculateTroopTierRatio(MobileParty party)` | `DefaultPartyMoraleModel.cs:201` | private 工具。返回 tier≤3 士兵占总人数的比例，供 `PeasantLeader` 加成计算。 |
| `void GetMoraleEffectsFromSkill(MobileParty party, ref ExplainedNumber bonus)` | `DefaultPartyMoraleModel.cs:216` | private 累加器。取队伍实际队长（`SkillHelper.GetEffectivePartyLeaderForSkill`）的 Leadership 技能值，经 `SkillHelper.AddSkillBonusForCharacter` 折算成士气加成。 |
| `ExplainedNumber GetEffectivePartyMorale(MobileParty mobileParty, bool includeDescription = false)` | `DefaultPartyMoraleModel.cs:226` | **核心聚合**。从 `new ExplainedNumber(50f, ...)` 出发，依次累加：`RecentEventsMorale` → 技能 → 断粮（-30，民兵/驻军/普通队伍分别判定）→ 欠饷（-20 × 欠饷额）→ perk → 食物多样性 → 队伍规模。返回带逐项说明的 `ExplainedNumber`。 |

## 真实示例

### 示例 1：在默认装配线上叠加「围城士气惩罚」

继承默认实现，复用整条累加线，只加自己的修正：

```csharp
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Localization;

public class MyMoraleModel : DefaultPartyMoraleModel
{
    public override ExplainedNumber GetEffectivePartyMorale(MobileParty mobileParty, bool includeDescription = false)
    {
        ExplainedNumber morale = base.GetEffectivePartyMorale(mobileParty, includeDescription);
        if (mobileParty.CurrentSettlement != null && mobileParty.CurrentSettlement.IsUnderSiege)
        {
            morale.Add(-15f, new TextObject("MyMod: under siege"));
        }
        return morale;
    }
}
```

`base.GetEffectivePartyMorale(mobileParty, includeDescription)` 保留了默认的全部七类累加项，围城惩罚叠加在最后——这是「改规则」而不是「重算规则」的典型写法。

### 示例 2：只调数值，不碰装配线

如果只想改断粮惩罚的尺度，覆写公开属性即可，`GetEffectivePartyMorale` 的累加顺序完全不动：

```csharp
public class HarsherStarvationModel : DefaultPartyMoraleModel
{
    public override int GetDailyStarvationMoralePenalty(PartyBase party) => -8;
}
```

注意这只影响 `FoodConsumptionBehavior` 的每日结算路径；`GetEffectivePartyMorale` 内部的断粮惩罚仍走私有的 `GetStarvationMoralePenalty`（-30），要改那条路径必须覆写 `GetEffectivePartyMorale`。

## 参见

- ↔ [PartyMoraleModel](../PartyMoraleModel)：本类实现的契约层，定义全部抽象成员。
- ↔ [MobileParty](../../campaign/MobileParty)：`Morale` / `MoraleExplained` / `RecentEventsMorale` 的宿主，本类的主要消费方。
- ↔ [CampaignGameStarter](../../campaign/CampaignGameStarter)：`AddModel<T>` 的宿主，模型替换的注册入口。
- ↔ [PartyBase](../../campaign/PartyBase)：契约方法的参数类型，队伍静态数据。

## 导航

- ↑ [campaign-ext 桶索引](../)
- ↑ [API 参考](../../)
- ↑ [v1.4.7 中文首页](../../../)
- ↔ [架构总览](../../../architecture/)
