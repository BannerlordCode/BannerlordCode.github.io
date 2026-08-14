---
title: "SettlementProsperityModel"
description: "把城镇食物、忠诚、治安、建筑、政策和事件等输入，转成每日繁荣度与村庄炉火（Hearth）变化的可替换策略模型。"
---
# SettlementProsperityModel

**命名空间:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**模块:** `TaleWorlds.CampaignSystem`  
**类型:** `public abstract class SettlementProsperityModel : MBGameModel<SettlementProsperityModel>`  
**基类:** `MBGameModel<SettlementProsperityModel>`  
**源文件:** `C:\WorkSpace\Bannerlord\bannerlord-1.4.5\Bannerlord.Source\bin\TaleWorlds.CampaignSystem\TaleWorlds.CampaignSystem.ComponentInterfaces\SettlementProsperityModel.cs`  
**默认实现:** `TaleWorlds.CampaignSystem.GameComponents/DefaultSettlementProsperityModel.cs`

## 一句话职责

它只回答“这个定居点今天该涨还是该跌多少繁荣/炉火”，返回一个带可选因素说明的 `ExplainedNumber`；它不写回 `Town.Prosperity`、不改 `Village.Hearth`，也不触发任何存档。真正把结果落到定居点状态上的是战役每日 tick 行为，读取此模型的只是 UI 与技能/繁荣结算的消费者。

## 心智模型

这是定居点每日结算前的一道“计分规则”。`Town` 和 `Village` 各自暴露一个计算属性（`ProsperityChange` / `HearthChange`，以及带说明的 `ProsperityChangeExplanation` / `HearthChangeExplanation`），这些属性在内部向本模型要当日增量，再把结果交给每日 tick 写入 `Town.Prosperity` 与 `Village.Hearth`。模型本身是纯函数：相同输入应得出相同增量，不持有状态、不派发事件。

默认实现（`DefaultSettlementProsperityModel`）的城镇逻辑大致是：先处理饥荒惩罚与住房成本（按当前繁荣分档给正增量，超过上限则给负增量），再加剩余食物、市场售货、建筑效果、相关 Perk、忠诚阈值（高忠诚加成、低忠诚惩罚）和王国的各项政策（道路税、皇室城镇、王冠税、战争税等），最后叠加问题（Issue）效果。村庄逻辑则按当前炉火的档位给基础增长，被劫掠（`Looted`）时减 1，再叠加放牧权政策、绑定的城镇 Perk、帝国文化特性和问题效果。

使用这个模型，是为了改变所有消费者看到的“当日增量怎么算”。如果目标是直接改繁荣/炉火数值、发放赏金或触发世界变更，应使用定居点行为、对应 `*Action` 或 settlement 的公开 API，而不是在计算回调里写 `town.Prosperity += ...`。`includeDescriptions` 只控制 `ExplainedNumber` 是否记录每个因素的文字来源，不应改变数值本身。

### 生命周期与注册

`Campaign.Current.Models` 持有当前实例。默认实例是 `DefaultSettlementProsperityModel`，游戏启动器在战役初始化时通过 `IGameStarter.AddModel` 注册；自定义模型也必须在战役系统开始每日 tick 前完成注册。标题界面、模块加载早期或没有活动战役时，`Campaign.Current` 可能为 `null`，不能在静态字段初始化或菜单构造函数里无条件读取它。

## 依赖图

### 上游

| 类型 | 关系 |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | 提供活动战役和 `Models` 注册表；默认实现内部也通过它取兄弟模型。 |
| [`Town`](../../campaign/Town) | 提供繁荣、食物变化、忠诚、建筑、在售商品、所属王国等输入。 |
| [`Village`](../../campaign/Village) | 提供炉火、村庄状态、绑定城镇等输入。 |
| [`SettlementLoyaltyModel`](../SettlementLoyaltyModel) | 默认实现读取忠诚阈值与高低忠诚的繁荣效果。 |
| [`SettlementSecurityModel`](../SettlementSecurityModel) | 与治安相邻的规则模型，影响同一批定居点状态。 |
| [`SettlementEconomyModel`](../SettlementEconomyModel) | 提供生产/需求上下文，常与繁荣共同变化。 |
| [`SettlementFoodModel`](../SettlementFoodModel) | 提供食物变化口径；饥荒惩罚依赖它。 |
| [`IssueModel`](../IssueModel) | 默认实现通过 `GetIssueEffectsOfSettlement` 叠加问题对繁荣/炉火的影响。 |
| [`ExplainedNumber`](../ExplainedNumber) | 承载计算结果与可选的因素说明。 |

### 下游

| 类型 | 关系 |
| --- | --- |
| [`Town`](../../campaign/Town) | 通过 `ProsperityChange` / `ProsperityChangeExplanation` 读取城镇增量。 |
| [`Village`](../../campaign/Village) | 通过 `HearthChange` / `HearthChangeExplanation` 读取村庄增量。 |
| [`SettlementMenuOverlayVM`](../SettlementMenuOverlayVM) | UI 在菜单与tooltip里展示当日增减。 |
| 定居点每日 tick 行为 | 把模型结果写入 `Town.Prosperity` / `Village.Hearth`；模型本身不负责写回。 |

### 事件、Action 与存档边界

模型结果本身没有存档字段，也不派发事件。合法的繁荣/炉火变更由定居点每日 tick 行为统一应用；自定义模型应保持确定性（相同输入相同输出），避免与已保存并重放的战役 tick 不一致。

## 成员契约

| 成员 | 用途 | 调用时机与副作用 |
| --- | --- | --- |
| `CalculateProsperityChange` | 计算一座城镇/城堡（`Town`）当日的繁荣增量，综合饥荒、住房成本、剩余食物、市场售货、建筑、Perk、忠诚阈值与王国政策。 | 由 `Town.ProsperityChange`/`ProsperityChangeExplanation` 在每日 tick 与 UI 解释时调用；应返回 `ExplainedNumber`，不得写回 `Town.Prosperity`。 |
| `CalculateHearthChange` | 计算一个村庄（`Village`）当日的炉火增量，按炉火档位给基础增长，叠加被劫掠、政策、绑定城镇 Perk、文化特性与问题效果。 | 由 `Village.HearthChange`/`HearthChangeExplanation` 在每日 tick 与 UI 解释时调用；不得写回 `Village.Hearth`。 |

默认实现的可观察因素包括：繁荣越低住房成本加成越高、超过上限则回落；剩余食物与市场售货带来正增量；高忠诚加成、低忠诚惩罚；皇室城镇加 1、道路税/王冠税/战争税减 1；村庄炉火随档位递减增长，被劫掠每天减 1，帝国文化特性在低炉火时给正因子。替换实现时若想保留这些行为，应委托 vanilla 模型再加自己的有界因素，而不是把旧公式整体抄写。

## 真实读取路径

以下代码只查询当前战役中已经注册的模型，与 `Town.ProsperityChangeExplanation` / `Village.HearthChangeExplanation` 的内部路径一致：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;

public ExplainedNumber ExplainTownProsperity(Town town)
{
    if (Campaign.Current == null || town == null)
    {
        return new ExplainedNumber(0f);
    }

    SettlementProsperityModel model = Campaign.Current.Models.SettlementProsperityModel;
    return model.CalculateProsperityChange(town, includeDescriptions: true);
}
```

这段结果适合调试或 UI 预览；普通地图/定居点逻辑应读取 `town.ProsperityChange` 属性，不要自己再把返回值乘一遍或写回 `Town.Prosperity`。

## 替换模型时的安全做法

如果只想增加一个有限修正，保留原模型作为 delegate，并让两个方法都成对委托：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;
using TaleWorlds.Localization;

public sealed class ModSettlementProsperityModel : SettlementProsperityModel
{
    private readonly SettlementProsperityModel _vanilla;

    public ModSettlementProsperityModel(SettlementProsperityModel vanilla)
    {
        _vanilla = vanilla;
    }

    public override ExplainedNumber CalculateProsperityChange(Town fortification, bool includeDescriptions = false)
    {
        ExplainedNumber result = _vanilla.CalculateProsperityChange(fortification, includeDescriptions);
        if (fortification.IsTown && fortification.Prosperity < 2000f)
        {
            result.Add(2f, new TextObject("Mod: frontier boost"));
        }
        return result;
    }

    public override ExplainedNumber CalculateHearthChange(Village village, bool includeDescriptions = false)
    {
        return _vanilla.CalculateHearthChange(village, includeDescriptions);
    }
}
```

实际注册时应在 `CampaignGameStarter` 的模型注册阶段保存 vanilla delegate；不要在模型已经替换后再次通过 `Campaign.Current.Models.SettlementProsperityModel` 查找自己，否则会递归。若要让替换覆盖忠诚、政策、文化与问题效果，优先委托当前版本默认模型，再加自己的有界因素。

## 风险与调试顺序

1. **战役尚未存在:** `Campaign.Current` 在标题界面和早期模块加载阶段为空；延迟到战役启动钩子再获取模型。
2. **回调中写回状态:** 在 `Calculate*` 里改 `Town.Prosperity` / `Village.Hearth` 会把这个只读查询变成带副作用的世界变更，且与每日 tick 的写回重复。
3. **无界/NaN 结果:** 新城镇没有附属村庄、食物为 0 或极端政策组合下，若分支不全可能返回 NaN，导致繁荣/炉火崩坏并污染后续需求计算。
4. **联动阈值漂移:** 繁荣会影响后续需求与忠诚/治安；失控的正因子会滚雪球式推高经济，修改时应保持有界。
5. **陈旧展示:** UI 读的是 `ProsperityChangeExplanation` 等计算属性，模型不推送变更；合法改变繁荣后依赖每日 tick 与 UI 重算，不要访问私有缓存字段。

## 版本与导航

v1.3.0、v1.3.15 与 v1.4.5 的接口签名完全一致，均为两个抽象方法 `CalculateProsperityChange(Town, bool)` 与 `CalculateHearthChange(Village, bool)`；跨版本默认公式的细节（政策、Perk、文化特性）可能不同，替换模型应委托对应版本的 vanilla 实现，而不是把旧公式复制到新版本。

- [↑ 父级：Campaign 扩展 API](../)
- [↔ SettlementLoyaltyModel](../SettlementLoyaltyModel)
- [↔ SettlementSecurityModel](../SettlementSecurityModel)
- [↔ SettlementEconomyModel](../SettlementEconomyModel)
- [↔ SettlementFoodModel](../SettlementFoodModel)
- [↔ SettlementMilitiaModel](../SettlementMilitiaModel)
- [↔ SettlementTaxModel](../SettlementTaxModel)
- [相关类：Town](../../campaign/Town)
- [相关类：Village](../../campaign/Village)
- [相关类：Campaign](../../campaign/Campaign)
- [IssueModel](../IssueModel)
- [ExplainedNumber](../ExplainedNumber)
