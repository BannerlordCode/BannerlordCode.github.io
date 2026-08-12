---
title: "SettlementLoyaltyModel"
description: "把治安、文化、政策、建筑、饥荒与总督 Perk 折算成城镇每日忠诚度变化的规则模型，并对外暴露叛乱、税收与繁荣共用的忠诚度阈值。"
---
# SettlementLoyaltyModel

**命名空间:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**模块:** `TaleWorlds.CampaignSystem`  
**类型:** `public abstract class SettlementLoyaltyModel : MBGameModel<SettlementLoyaltyModel>`  
**基类:** `MBGameModel<SettlementLoyaltyModel>`  
**源文件路径:** `C:\WorkSpace\Bannerlord\bannerlord-1.4.5\Bannerlord.Source\bin\TaleWorlds.CampaignSystem\TaleWorlds.CampaignSystem.ComponentInterfaces\SettlementLoyaltyModel.cs`  
**默认实现:** `TaleWorlds.CampaignSystem.GameComponents/DefaultSettlementLoyaltyModel.cs`

## 一句话职责

它回答“这个城镇今天忠诚度会涨还是跌、涨多少，以及什么时候会闹叛乱、加税还是繁荣”，并把这些规则以可解释的数值交给下游系统；它只计算并解释，从不直接写入 `Town.Loyalty` 这种城镇状态。繁荣、税收、民兵和叛乱系统都把它的结果当作共享规则，所以自定义实现影响的是所有读取者，而不只是某一个面板数字。

## 心智模型

这是地图时钟每日推进前的规则层。`Town.LoyaltyChange` 与 `Town.LoyaltyChangeExplanation` 都是模型驱动的只读视图：每日 settlement 行为先向模型要当天的忠诚变化，再把结果写回 `Town.Loyalty`；繁荣模型读高/低忠诚效果，民兵模型读叛乱阈值，税收模型读高/低忠诚的税收修正。因此一个阈值或系数的改变会同时波及多个下游系统，不能只在本页局部理解。

计算链是：`Town` 的治安、文化、政策、建筑、事务、名人关系、总督 Perk、当前忠诚 → `Campaign.Current.Models.SettlementLoyaltyModel.CalculateLoyaltyChange` → settlement 每日行为写入 `Town.Loyalty` → 繁荣 / 民兵 / 税收 / 叛乱系统随后消费。

使用这个模型，是为了改变所有消费者看到的“忠诚度怎么算”。如果目标是直接改忠诚数值、发动叛乱或变更所有权，应使用每日 settlement 行为、`ChangeOwnerOfSettlementAction` 或 `RebellionsCampaignBehavior` 的公开路径；计算回调里不要调用任何状态变更 Action，否则一次 UI 预览就会递归触发真实叛乱或所有权变更。同样的，`includeDescriptions` 只控制 `ExplainedNumber` 是否记录因素说明，不应改变数值本身。

### 生命周期与注册

`Campaign.Current.Models` 持有当前实例。默认实例是 `DefaultSettlementLoyaltyModel`，游戏启动器在战役初始化时通过 `IGameStarter.AddModel` 注册它；自定义模型也必须在战役系统开始查询前完成注册。标题界面、模块加载早期或没有活动战役时，`Campaign.Current` 可能为 `null`，不能在静态字段初始化或菜单构造函数里无条件读取它。注册名在 `GameModels` 中是 `SettlementLoyaltyModel`，因此既可以用 `Campaign.Current.Models.SettlementLoyaltyModel` 直接取，也可以用 `Campaign.Current.Models.GetModel<SettlementLoyaltyModel>()`。

## 何时用 / 何时不要用

**何时用**
- 想预测或解释某个城镇当天忠诚度会怎么变（城镇面板、调试输出、AI 决策前的评估）。
- 想自定义忠诚公式里治安、文化、政策、建筑、饥荒、总督 Perk 等的影响力。
- 想读取 `ThresholdFor*` / `RebelliousState*` 这些被繁荣、税收、民兵、叛乱共用的阈值，做一致的平衡调整。

**何时不要用**
- 想直接改 `Town.Loyalty`、发动叛乱或改所有权 → 走每日 settlement 行为、`ChangeOwnerOfSettlementAction`、`RebellionsCampaignBehavior`，不要写模型字段。
- 想移动队伍、改编制、改税收数值本身 → 用对应 `*Model`（税收用 `SettlementTaxModel`）或 `*Action`。
- 不要在 `Calculate*` 回调里派发 Action 或写世界状态，否则预览会递归触发真实副作用。
- 不要在 `Campaign.Current` 可能为空时（标题界面、模块加载早期）读取 `Models`。

## 依赖图

### 上游

| 类型 | 关系 |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | 提供活动战役与 `Models` 注册表。 |
| [`Town`](../../campaign/Town) | 提供 `Loyalty`、`Security`、`Governor`、`OwnerClan`、`Culture`、建筑与名人等计算上下文。 |
| [`SettlementSecurityModel`](../SettlementSecurityModel) | 提供治安变化，忠诚公式在治安结果之上叠加治安→忠诚系数。 |
| [`ExplainedNumber`](../ExplainedNumber) | 承载忠诚变化结果与可解释的因素列表。 |
| [`Clan`](../../campaign/Clan) | 提供城镇所有者文化，用于“所有者异文化”惩罚分支。 |

### 下游

| 类型 | 关系 |
| --- | --- |
| [`Town`](../../campaign/Town) | 暴露 `LoyaltyChange` / `LoyaltyChangeExplanation`，每日行为把结果写回 `Town.Loyalty`。 |
| [`SettlementProsperityModel`](../SettlementProsperityModel) | 读取 `ThresholdForProsperityBoost` / `ThresholdForProsperityPenalty`。 |
| [`SettlementMilitiaModel`](../SettlementMilitiaModel) | 读取 `RebelliousStateStartLoyaltyThreshold` 与 `MilitiaBoostPercentage`。 |
| [`SettlementTaxModel`](../SettlementTaxModel) | 读取 `ThresholdForTaxBoost` 并调用 `CalculateGoldGainDueToHighLoyalty` / `CalculateGoldCutDueToLowLoyalty`。 |
| [`RebellionsCampaignBehavior`](../RebellionsCampaignBehavior) | 读取 `RebellionStartLoyaltyThreshold` / `RebelliousStateStartLoyaltyThreshold` 决定叛乱与 `InRebelliousState`。 |

### Action、事件与存档边界

`CalculateLoyaltyChange` 只产出只读的 `ExplainedNumber`，不写状态、不派发事件；真正的 `Town.Loyalty` 写入由每日 settlement 行为完成，属于存档字段。合法的叛乱触发、所有权变更走 `RebellionsCampaignBehavior` 与对应 Action；不要在模型查询回调里调用它们。自定义模型应保持确定性——相同输入给出相同结果，避免与存档重放的每日 tick 不一致。

## 成员契约

### 计算类

| 成员 | 签名 | 用途与副作用 | 调用时机 |
| --- | --- | --- | --- |
| `CalculateLoyaltyChange` | `ExplainedNumber CalculateLoyaltyChange(Town town, bool includeDescriptions = false)` | 汇总食物储备、总督文化、所有者文化、王国政策、建筑、事务、治安、名人关系、总督 Perk 与忠诚度回归等因子，返回当日忠诚变化的 `ExplainedNumber`。纯只读查询，不改 `Town.Loyalty`。 | `Town.LoyaltyChange` / `Town.LoyaltyChangeExplanation` 属性、每日 settlement 行为、UI 预览。 |
| `CalculateGoldGainDueToHighLoyalty` | `void CalculateGoldGainDueToHighLoyalty(Town town, ref ExplainedNumber explainedNumber)` | 当 `town.Loyalty >= ThresholdForTaxBoost` 时，按 `Loyalty` 在 `[ThresholdForTaxBoost, 100]` 上的位置映射到 `[0, 0.2]` 的增益因子，作为 `AddFactor` 写入税收解释。 | `DefaultSettlementTaxModel` 计算城镇税收时。 |
| `CalculateGoldCutDueToLowLoyalty` | `void CalculateGoldCutDueToLowLoyalty(Town town, ref ExplainedNumber explainedNumber)` | 当忠诚低于 `ThresholdForTaxCorruption` 时，按 `Loyalty` 在 `[ThresholdForHigherTaxCorruption, ThresholdForTaxCorruption]` 上的位置映射到 `[-0.5, 0]` 的腐败因子，写入税收解释。 | `DefaultSettlementTaxModel` 计算城镇税收时。 |

### 配置类（抽象系数 / 阈值，具体数值由默认实现给出）

下表只声明“这个系数/阈值控制什么”；具体数值属于 `DefaultSettlementLoyaltyModel`，替换模型时应保持语义一致，而非照搬旧公式。

**漂移与上限**

| 成员 | 类型 | 控制什么 | 调用时机 |
| --- | --- | --- | --- |
| `MaximumLoyaltyInSettlement` | `int` | 忠诚度数值上限，也是治安→忠诚映射的上界。 | `CalculateLoyaltyChange` 内部治安映射。 |
| `LoyaltyDriftMedium` | `int` | 忠诚度回归锚点；公式施加 `-0.1 * (town.Loyalty - LoyaltyDriftMedium)` 的向中位数回归拉力。 | `CalculateLoyaltyChange` 的回归项。 |
| `SettlementLoyaltyChangeDueToSecurityThreshold` | `int` | 治安高于此值时提升忠诚、低于此值时降低忠诚的分界。 | `CalculateLoyaltyChange` 的治安项。 |

**治安与文化**

| 成员 | 类型 | 控制什么 | 调用时机 |
| --- | --- | --- | --- |
| `HighSecurityLoyaltyEffect` | `float` | 治安高于阈值时对忠诚变化的加成因子。 | `CalculateLoyaltyChange` 的治安项。 |
| `LowSecurityLoyaltyEffect` | `float` | 治安低于阈值时对忠诚变化的惩罚因子。 | `CalculateLoyaltyChange` 的治安项。 |
| `GovernorSameCultureLoyaltyEffect` | `float` | 总督与城镇同文化时的忠诚加成因子。 | `CalculateLoyaltyChange` 的总督文化项。 |
| `GovernorDifferentCultureLoyaltyEffect` | `float` | 总督异文化时的忠诚惩罚因子。 | `CalculateLoyaltyChange` 的总督文化项。 |
| `SettlementOwnerDifferentCultureLoyaltyEffect` | `float` | 所有者（领主）与城镇异文化时的忠诚惩罚因子。 | `CalculateLoyaltyChange` 的所有者文化项。 |

**繁荣 / 民兵耦合**

| 成员 | 类型 | 控制什么 | 调用时机 |
| --- | --- | --- | --- |
| `HighLoyaltyProsperityEffect` | `float` | 高忠诚对繁荣的加成因子。 | `SettlementProsperityModel`。 |
| `LowLoyaltyProsperityEffect` | `int` | 低忠诚对繁荣的惩罚（gold/日）。 | `SettlementProsperityModel`。 |
| `MilitiaBoostPercentage` | `int` | 忠诚高于叛乱阈值时民兵增益百分比。 | `SettlementMilitiaModel`。 |

**税收阈值**

| 成员 | 类型 | 控制什么 | 调用时机 |
| --- | --- | --- | --- |
| `ThresholdForTaxBoost` | `int` | 忠诚度高于此值时税收获得高忠诚加成。 | `SettlementTaxModel` 与 `CalculateGoldGainDueToHighLoyalty`。 |
| `ThresholdForTaxCorruption` | `int` | 低忠诚触发税收腐败的阈值上限。 | `CalculateGoldCutDueToLowLoyalty`。 |
| `ThresholdForHigherTaxCorruption` | `int` | 更严重税收腐败的下限阈值。 | `CalculateGoldCutDueToLowLoyalty`。 |

**繁荣阈值**

| 成员 | 类型 | 控制什么 | 调用时机 |
| --- | --- | --- | --- |
| `ThresholdForProsperityBoost` | `int` | 忠诚高于此值且食物增长时繁荣加速。 | `SettlementProsperityModel`。 |
| `ThresholdForProsperityPenalty` | `int` | 忠诚低于此值时繁荣受罚。 | `SettlementProsperityModel`。 |

**叛乱**

| 成员 | 类型 | 控制什么 | 调用时机 |
| --- | --- | --- | --- |
| `RebellionStartLoyaltyThreshold` | `int` | 忠诚 ≤ 此值时 `RebellionsCampaignBehavior` 启动叛乱。 | 每日叛乱评估。 |
| `RebelliousStateStartLoyaltyThreshold` | `int` | 忠诚 ≤ 此值时 `Town.InRebelliousState = true`，民兵模型据此减少增益。 | 民兵计算与 `RebellionsCampaignBehavior`。 |
| `LoyaltyBoostAfterRebellionStartValue` | `int` | 叛乱开始后的忠诚回升值。 | 叛乱开始后处理。 |

**饥荒与名人关系**

| 成员 | 类型 | 控制什么 | 调用时机 |
| --- | --- | --- | --- |
| `AdditionalStarvationPenaltyStartDay` | `int` | 连续饥荒超过该天数后追加忠诚惩罚。 | `CalculateLoyaltyChange` 的食物项。 |
| `AdditionalStarvationLoyaltyEffect` | `int` | 该天数后每 tick 额外扣除的忠诚。 | `CalculateLoyaltyChange` 的食物项。 |
| `ThresholdForNotableRelationBonus` | `float` | 忠诚高于此值时与名人关系获得每日加成。 | `CharacterRelationCampaignBehavior`。 |
| `DailyNotableRelationBonus` | `int` | 每日与名人关系的加成数值。 | `CharacterRelationCampaignBehavior`。 |

默认实现（`DefaultSettlementLoyaltyModel`）给出的可观察数值：治安分界 50、忠诚上限 100、回归锚点 50、治安高/低系数为 1 / -2、同/异文化总督为 1 / -1、所有者异文化为 -3、税收门槛 75、腐败门槛 50 / 25、繁荣门槛 75 / 25、叛乱门槛 15、叛乱状态门槛 25、叛乱后回升 5、民兵增益 200、饥荒第 14 天起追加 -1、名人关系门槛 75、每日名人加成 1。这些是该默认实现的值，不是契约本身。

## 真实读取路径

下面这段代码只查询当前战役中已经注册的模型，与 `Town.LoyaltyChangeExplanation`（Town.cs:142）的真实调用路径一致：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;

public ExplainedNumber ExplainTownLoyalty(Town town)
{
    if (Campaign.Current == null || town == null)
    {
        return new ExplainedNumber(0f);
    }

    SettlementLoyaltyModel model = Campaign.Current.Models.SettlementLoyaltyModel;
    ExplainedNumber change = model.CalculateLoyaltyChange(town, includeDescriptions: true);
    // change.ResultNumber 是当天忠诚变化量；change 里的因素列表用于调试面板展示
    return change;
}
```

这段结果适合城镇管理面板的“今日忠诚预测”或调试预览；普通逻辑应直接读 `town.LoyaltyChangeExplanation`，不要自己再把 `ResultNumber` 写回 `Town.Loyalty`。

## 用阈值做叛乱风险判断

阈值属性同样是真实可读取的 API，下面是评估一个城镇是否接近叛乱风险的真实用法（与 `RebellionsCampaignBehavior` 的判断同源）：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;

public bool IsTownAtRebellionRisk(Town town)
{
    if (Campaign.Current == null || town == null)
    {
        return false;
    }

    SettlementLoyaltyModel model = Campaign.Current.Models.GetModel<SettlementLoyaltyModel>();
    return town.Loyalty <= (float)model.RebellionStartLoyaltyThreshold
        || town.InRebelliousState;
}
```

`town.InRebelliousState` 本身就是 `RebellionsCampaignBehavior` 依据 `RebelliousStateStartLoyaltyThreshold` 写入的只读标志；这里只读取，不做任何状态变更。

## 风险与调试顺序

1. **战役尚未存在：** `Campaign.Current` 在标题界面和早期模块加载阶段为空；延迟到战役启动钩子再获取模型。
2. **查询中修改世界：** 招募、叛乱、传送、所有权变更必须在行为、`*Action` 或 Roster API 中执行，不能放进 `Calculate*` 回调，否则预览会递归触发真实副作用。
3. **阈值耦合：** `ThresholdFor*` / `RebelliousState*` 被繁荣、税收、民兵、叛乱四个下游共用；改一个阈值要同步检查其它模型，否则会出现“税收涨了但叛乱也涨了”的不一致。
4. **无界结果：** `CalculateLoyaltyChange` 产出的是每日变化量，下游会把 `Town.Loyalty` 钳到 `[0, MaximumLoyaltyInSettlement]`；自定义模型若返回极端值，会扭曲繁荣/税收/民兵的后续计算。
5. **陈旧缓存：** `Town.Loyalty` 是每日 tick 写入的存档状态；UI 应读 `Town.LoyaltyChange` / `LoyaltyChangeExplanation` 预览，不要缓存旧的 `Loyalty` 当实时值。
6. **模型交换时机：** 替换模型必须在 `IGameStarter.AddModel` 注册阶段完成，且必须保证 `CalculateLoyaltyChange` 与税收修正逻辑一致；不要只复制旧版本公式到新版本。
7. **不要给模型加存档字段：** 忠诚度属于 `Town` / `Settlement` 的保存状态，模型本身无状态，不要把 `Saveable` 字段加到模型里。

## 版本与导航

v1.3.0、v1.3.15 与 v1.4.5 三版的 `SettlementLoyaltyModel` 公开 API（3 个方法 + 24 个抽象系数/阈值属性）完全一致，没有跨版本增减成员；差异只存在于 `DefaultSettlementLoyaltyModel` 的默认数值与内部实现细节。跨版本替换模型时，应委托当前版本的 vanilla 实现，再叠加自己的有界修正，而不是把某一版的公式抄到另一版。

- [Campaign 扩展模型索引](../models/)
- [父级：Campaign 扩展 API](../)
- [↔ SettlementSecurityModel](../SettlementSecurityModel)
- [↔ SettlementProsperityModel](../SettlementProsperityModel)
- [↔ SettlementTaxModel](../SettlementTaxModel)
- [↔ SettlementMilitiaModel](../SettlementMilitiaModel)
- [↔ PartySpeedModel](../PartySpeedModel)
- [Town](../../campaign/Town)
- [Clan](../../campaign/Clan)
- [战役系统指南](../../../guide/campaign-system)
