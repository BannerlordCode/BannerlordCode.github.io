---
title: "DefaultPartyMoraleModel"
description: "默认的战役队伍士气、食物多样性、饥饿、欠薪和超编惩罚计算模型。"
---
# DefaultPartyMoraleModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class DefaultPartyMoraleModel : PartyMoraleModel`  
**Base:** [`PartyMoraleModel`](../PartyMoraleModel)  
**Source:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyMoraleModel.cs`（v1.3.15；v1.4.5 对应文件位于 `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents`）

## 一句话职责

这个模型把近期事件、领导力、食物多样性、队伍超编、饥饿、欠薪和相关 Perk 组合成可解释的士气结果；它不直接写入 `MobileParty.Morale`，也不负责补粮、发工资或结算战斗。

## 心智模型

```text
MobileParty / PartyBase
  + RecentEventsMorale / 食物 / roster / PartySizeLimit / 欠薪 / Perk
                              ↓
            Campaign.Current.Models.PartyMoraleModel
                              ↓
          HighMoraleValue / int 惩罚 / ExplainedNumber
                              ↓
  MobileParty、Party UI、治疗模型、每日/战斗 Behavior 的后续处理
```

`DefaultPartyMoraleModel` 是 `MBGameModel<PartyMoraleModel>` 的默认实现。它有两套容易混淆的数值：公开的每日饥饿/欠薪惩罚分别是 `-5` 和 `-3`，而 `GetEffectivePartyMorale` 内部为当前有效状态使用更重的 `-30` 和 `-20`。前者给每日结算规则使用，后者是查询当前有效士气时的即时因素，不能互相替换。

### 何时使用

- 要显示当前队伍士气及其原因时，从 `Campaign.Current.Models.PartyMoraleModel` 查询 `GetEffectivePartyMorale`，并传 `includeDescription: true`。
- 要改变基础士气、食物多样性、超编惩罚或胜负变化时，在战役 starter 阶段注册默认模型的子类。
- 要判断高士气 Perk 是否应生效时读取 `HighMoraleValue`；默认阈值为 `70`，不要把它当作所有队伍都必须达到的硬上限。

### 何时不要使用

不要在模型方法中调用设置士气的 Action、修改 `MobileParty`、补粮、支付工资或触发战斗事件。模型可能被 UI、AI、医疗逻辑和战役行为重复查询；查询中的副作用会按读取次数重复执行。胜负变化、每日惩罚和有效士气是不同契约，不要用一个入口代替另一个入口。

## 依赖关系

### 上游输入

| 类型 / 系统 | 在本模型中提供什么 |
| --- | --- |
| [`MobileParty`](../../campaign/MobileParty) / [`PartyBase`](../../campaign/PartyBase) | 领导者、近期事件、roster、队伍上限、食物、欠薪、饥饿、民兵/驻军类型和当前据点。 |
| [`ItemRoster`](../ItemRoster) | `FoodVariety`，用于食物多样性士气因素。 |
| `TroopRoster` | 普通兵总数、低 Tier 兵比例、骑乘兵数量和超编相关统计。 |
| `DefaultPerks` / `DefaultSkillEffects` | Leadership 技能、`PeasantLeader`、`SelfPromoter`、`Logistician`、`WarriorsDiet` 和 `Gourmet` 的修正。 |
| `SettlementHelper` / `Settlement` | 民兵家乡或驻军据点是否饥饿、据点是否处于围城。 |

### 下游调用者

| 调用者 | 使用方式 |
| --- | --- |
| [`MobileParty`](../../campaign/MobileParty) / Party UI | 读取有效士气和 `ExplainedNumber` 说明。 |
| [`PartyHealingModel`](../PartyHealingModel) | 读取 `HighMoraleValue`，决定高士气治疗 Perk 是否参与。 |
| 每日战役行为 | 使用公开的饥饿/欠薪惩罚，并在正确的 tick 应用状态变化。 |
| 战斗结果行为 | 使用胜利/失败的一次性变化，真正写入士气由调用者负责。 |
| [`PartyWageModel`](../PartyWageModel) / 食物行为 | 提供欠薪与食物状态的上游事实；Morale 模型不拥有金币或粮食结算。 |

## 公共契约

| 成员 | 默认行为 | 关键边界 |
| --- | --- | --- |
| `HighMoraleValue` | 返回 `70`。 | 阈值策略值，不是 `MobileParty.Morale` 的 setter。 |
| `GetDailyStarvationMoralePenalty` | 返回 `-5`。 | 每日规则使用的固定惩罚，不检查或改变粮食。 |
| `GetDailyNoWageMoralePenalty` | 返回 `-3`。 | 每日规则使用的固定惩罚，不支付工资或移除兵员。 |
| `GetStandardBaseMorale` | 返回 `50`。 | 只返回基础值。 |
| `GetVictoryMoraleChange` / `GetDefeatMoraleChange` | 分别返回 `+20` / `-20`。 | 一次性战斗结果，不决定胜负。 |
| `GetEffectivePartyMorale` | 从 `50` 开始叠加近期事件、技能、饥饿、欠薪、Perk、食物和超编因素。 | 返回 `ExplainedNumber`；`includeDescription` 只控制说明行。 |

## 默认计算细节

### 基础、每日和战斗变化

`HighMoraleValue` 是 `70`，`GetStandardBaseMorale` 是 `50`。每日入口返回固定的饥饿 `-5` 和欠薪 `-3`；胜利和失败入口分别返回 `+20` 与 `-20`。这些入口只提供策略结果，实际加减发生在战役行为的对应阶段。

### `GetEffectivePartyMorale` 的组合顺序

有效士气以 `50` 为基数，然后按以下顺序加入解释项：

1. `RecentEventsMorale`；
2. 有效队伍领袖的 Leadership 技能效果；
3. 饥饿：民兵检查 `HomeSettlement.IsStarving`，驻军使用 `SettlementHelper.IsGarrisonStarving`，普通移动队伍检查 `party.Party.IsStarving`。有效惩罚为 `-30`；
4. `HasUnpaidWages > 0` 时按欠薪程度乘 `-20`；
5. `PeasantLeader`、围城时的 `SelfPromoter` 和陆地上的 `Logistician`；
6. 食物多样性；
7. 非民兵、非村民队伍的超编惩罚。

模型本身不把结果限制到 `0..100`，因此不要在自定义实现中假设 `ExplainedNumber.ResultNumber` 已被自动钳制。

### 食物多样性

不饥饿时，`FoodVariety` 对士气的默认贡献如下；饥饿时整段食物多样性计算跳过：

| FoodVariety | 0-1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12+ |
| ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 士气变化 | -2 | -1 | 0 | +1 | +2 | +3 | +5 | +6 | +7 | +8 | +9 | +10 |

如果结果为负，陆地队伍的领袖拥有 Steward `WarriorsDiet` 时把该负值抬到 0；海上不应用这项豁免。结果为正且队伍有 Steward `Gourmet` 时再加一次相同的食物奖励；海上这次额外奖励减半。这是两个独立的加法，不是直接把 FoodVariety 换成 Perk 数值。

### 兵种构成和超编

拥有 `Crossbow.PeasantLeader` 时，按 Tier 小于等于 3 的普通兵数量占总人数的比例，把该 Perk 的主要加成作为 factor 加入。围城据点中的有效队伍拥有 Charm `SelfPromoter` 次要效果时，加入其 `SecondaryBonus`。

陆地上拥有 Steward `Logistician` 时，统计 roster 中已骑乘兵数量；如果队伍坐骑数多于非骑乘兵人数，加入该 Perk 的主要加成。队伍在海上时跳过这条逻辑。

队伍不是民兵或村民时，若总成员数超过 `PartySizeLimit`，加入 `-sqrt(overCapacity)` 的超编惩罚。民兵和村民不走这个超编分支，因此不要把普通移动队伍的士气公式直接套给它们。

## 真实读取路径

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.Library;

MobileParty party = MobileParty.MainParty;
PartyMoraleModel model = Campaign.Current.Models.PartyMoraleModel;
ExplainedNumber morale = model.GetEffectivePartyMorale(
    party, includeDescription: true);
bool highMorale = morale.ResultNumber >= model.HighMoraleValue;
```

这是只读查询。`morale.ResultNumber` 和 `morale` 的解释项可以交给 UI 或诊断工具；不要因为读取结果就把它再次写回队伍。

## 替换默认模型

在战役 starter 阶段注册子类，只改变自己负责的结果并保留默认分支：

```csharp
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;
using TaleWorlds.Library;
using TaleWorlds.Localization;

public sealed class MyPartyMoraleModel : DefaultPartyMoraleModel
{
    public override ExplainedNumber GetEffectivePartyMorale(
        MobileParty party, bool includeDescription = false)
    {
        ExplainedNumber result = base.GetEffectivePartyMorale(
            party, includeDescription);
        result.Add(2f, new TextObject("{=my_morale_bonus}My morale bonus"));
        return result;
    }
}

protected override void InitializeGameStarter(Game game, IGameStarter starter)
{
    starter.AddModel(new MyPartyMoraleModel());
}
```

不要在 override 内再次读取 `Campaign.Current.Models.PartyMoraleModel` 作为自己的 base；模型替换后该属性就是当前替换实例，容易递归。若采用包装而不是继承，使用 starter 提供的明确 `BaseModel` 链。

## 风险与调试边界

1. **每日值与有效值混淆**：公开的 `-5/-3` 和有效计算的 `-30/-20` 属于不同调用契约。
2. **重复副作用**：模型会被 UI、AI、治疗和每日行为重复查询；不要在查询中写士气、粮食、金币或事件。
3. **队伍类型分支**：民兵、驻军、村民和普通移动队伍的饥饿/超编路径不同；调试时先确认 `IsMilitia`、`IsGarrison` 和 `IsVillager`。
4. **海上 Perk 语义**：`WarriorsDiet` 与 `Gourmet` 的海上处理和陆地不同；不要把陆地结果缓存到海上队伍。
5. **无界结果**：默认实现不自动把有效士气钳制到 `0..100`；自定义结果应避免 NaN、无限值和意外极端值。
6. **存档边界**：模型实例不是存档容器；若自定义规则需要持久化计数器，应放进 `CampaignBehaviorBase` 的保存契约，模型只读取。

## 版本说明

v1.3.15 与 v1.4.5 的公开接口、基础值、每日惩罚、胜负变化和有效士气主要分支一致。v1.4.5 使用文件作用域命名空间并把若干 `null` 解释参数省略；实际公式和 Perk/食物分支保持相同。替换前仍应以目标版本的行为调用时机为准。

## 参见

- [Campaign-ext Models 家族](../models/)
- [`PartyMoraleModel`](../PartyMoraleModel)
- [`PartyBase`](../../campaign/PartyBase)
- [`MobileParty`](../../campaign/MobileParty)
- [`PartyHealingModel`](../PartyHealingModel)
- [`PartyWageModel`](../PartyWageModel)
- [`CampaignGameStarter`](../CampaignGameStarter)
