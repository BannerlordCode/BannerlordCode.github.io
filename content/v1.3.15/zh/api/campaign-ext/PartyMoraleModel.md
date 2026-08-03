---
title: "PartyMoraleModel"
description: "计算队伍基础、战斗、饥饿和欠薪士气的可替换策略；只返回解释结果，不直接改队伍士气。"
---

# PartyMoraleModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class PartyMoraleModel : MBGameModel<PartyMoraleModel>`
**Base:** `MBGameModel<PartyMoraleModel>`
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyMoraleModel.cs`
**Default implementation:** `TaleWorlds.CampaignSystem.GameComponents/DefaultPartyMoraleModel.cs`

## 一句话职责

`PartyMoraleModel` 把近期事件、领导力、食物种类、队伍超编、饥饿、欠薪和 Perk 组合成队伍士气结果；它回答“当前应显示多少士气”，不负责直接写入 `MobileParty.Morale`。

## 心智模型

士气模型是队伍状态到战役决策的只读计算层。`MobileParty` 和 UI 可以多次请求 `GetEffectivePartyMorale`，其中 `ExplainedNumber` 的基础值、近期事件和各种加成/惩罚会被重新组合。默认实现把 `HighMoraleValue` 设为 70，并由医疗模型等其他模型读取这个阈值来决定是否启用高士气 Perk；这不是“最终士气字段”的 setter。

日结使用固定的饥饿/欠薪惩罚，胜负使用一次性变化，实际队伍士气状态由战役行为在正确 tick 应用。替换实现必须保证返回值有界、解释项稳定，并且不在查询期间改变食物、工资、名册或事件状态。

## 何时使用，何时不要用

- 需要改变默认士气公式、食物多样性、超编惩罚或胜负变化时，替换并在战役启动阶段注册模型。
- 需要读取 UI 可解释结果时，从 `Campaign.Current.Models.PartyMoraleModel` 查询并保留 `includeDescription` 语义。
- 不要在模型方法里调用 `MobileParty.SetMorale`、发放金币、补粮或触发战斗事件；这些是 Behavior/Action 的世界状态操作。
- 不要用 `GetVictoryMoraleChange` 代替日常 `GetEffectivePartyMorale`，也不要把 `HighMoraleValue` 当作所有队伍类型都必须达到的硬门槛。

## 依赖关系

- [Campaign](../../campaign/Campaign) 的 [GameModels](../GameModels) 持有注册后的 `PartyMoraleModel`。
- [MobileParty](../../campaign/MobileParty) 提供领导者、队伍上限、食物种类、近期事件、未付工资、Perk 和海上/驻扎状态。
- [PartyBase](../../campaign/PartyBase) 提供 `IsStarving`、成员统计和战斗双方上下文。
- [PartyHealingModel](../PartyHealingModel) 会读取 `HighMoraleValue` 来判断高士气治疗 Perk；这是模型之间的读取关系，不是互相写入。
- 战斗和每日战役行为消费胜负、饥饿与欠薪结果；真正的状态变更仍由对应行为执行。

## 成员与调用时机

| 成员 | 用途与时机 | 副作用边界 |
|---|---|---|
| `HighMoraleValue` | 公开高士气阈值；医疗和其他规则可用它判断队伍是否达到高士气。 | 只读常量/策略值，不更新队伍。 |
| `GetDailyStarvationMoralePenalty(PartyBase)` | 每日饥饿惩罚，默认实现返回 -5。 | 不检查或修改粮食。 |
| `GetDailyNoWageMoralePenalty(MobileParty)` | 每日未发工资惩罚，默认实现返回 -3。 | 不支付工资也不移除兵员。 |
| `GetStandardBaseMorale(PartyBase)` | 给队伍提供基础士气，默认实现为 50。 | 只返回基线。 |
| `GetVictoryMoraleChange(PartyBase)` | 战斗胜利时的一次性变化，默认实现为 +20。 | 不结束战斗、不写事件。 |
| `GetDefeatMoraleChange(PartyBase)` | 战斗失败时的一次性变化，默认实现为 -20。 | 不决定战斗胜负。 |
| `GetEffectivePartyMorale(MobileParty, bool)` | 汇总近期事件、技能、饥饿、欠薪、食物、超编和 Perk；`includeDescription` 决定解释行。 | 不应在查询中触发任何世界变更。 |

## 真实获取与查询示例

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;

MobileParty party = MobileParty.MainParty;
PartyMoraleModel moraleModel = Campaign.Current.Models.PartyMoraleModel;
ExplainedNumber effectiveMorale = moraleModel.GetEffectivePartyMorale(
    party,
    includeDescription: true);

bool isHighMorale = effectiveMorale.ResultNumber >= moraleModel.HighMoraleValue;
```

这段查询沿用游戏自身计算队伍士气的入口。若要修改公式，应写 `PartyMoraleModel` 子类并通过 `IGameStarter.AddModel` 注册；若要在每日结算真正保存变化，应修改相应 Behavior，而不是把赋值塞进模型。

## 风险与排错

1. `GetEffectivePartyMorale` 会被 UI、AI、医疗和战役逻辑重复调用；在其中扣金币或修改 `MobileParty` 会按读取次数重复执行。
2. 把 `HighMoraleValue`、`GetDailyStarvationMoralePenalty` 和 `GetEffectivePartyMorale` 混为一个值，会让高士气 Perk 与日结惩罚出现双重或遗漏应用。
3. 队伍超编、粮食种类和 `HasUnpaidWages` 都来自实时状态。替换模型时不要缓存跨 tick 的 `MobileParty` 引用，也不要假设 garrison、militia、villager 与普通移动队伍共享同一条路径。
4. `includeDescription` 只应控制 `ExplainedNumber` 的文本行。根据该参数改变数值会造成 UI 预览与实际结算不一致。
5. 若自定义模型依赖持久化计数器，将其放入 [CampaignBehaviorBase](../CampaignBehaviorBase) 的保存契约，并在模型中只读；模型实例本身不是存档容器。

## 导航

- [Parent: campaign-ext](./)
- [Models family guide](../models)
- [Sibling: PartyHealingModel](../PartyHealingModel) · [PartyWageModel](../PartyWageModel)
- [Related: Campaign](../../campaign/Campaign) · [GameModels](../GameModels) · [MobileParty](../../campaign/MobileParty)
