---
title: "DefaultSettlementGarrisonModel"
description: "Bannerlord 默认驻军变化、补充决策、队伍驻军分配与城墙修复规则。"
---
# DefaultSettlementGarrisonModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class DefaultSettlementGarrisonModel : SettlementGarrisonModel`  
**Base:** [`SettlementGarrisonModel`](../SettlementGarrisonModel)  
**Source:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementGarrisonModel.cs`（1.4.5 权威实现）

## 一句话职责

`DefaultSettlementGarrisonModel` 用叛乱、问题、驻军强度、工资预算、繁荣、粮食潜力、队伍容量和墙体状态计算默认驻军决策，并把增量、建议人数和修墙上限分别交给对应的 Campaign 行为消费；它不直接操作驻军名册。

## 心智模型

默认模型把“驻军应该怎样变化”拆成三条消费链：每日补充由 `GarrisonRecruitmentCampaignBehavior` 应用；队伍带兵/留兵数量供 AI 行为选择；城墙修复由 `Town` 按每段墙体逐步写回。模型不拥有名册、工资或墙体状态，因此改它不会自动执行任何转移。

基础驻军变化不是所有据点都有：城镇或城堡由叛军占有且不属于王国时增加 `2`，再叠加 `SettlementGarrison` 问题效果。自动招募上限固定为每天 `1`。

## 依赖

| 类型/流程 | 关系 |
| --- | --- |
| [`SettlementGarrisonModel`](../SettlementGarrisonModel) / [`GameModels`](../GameModels) | 提供契约与默认注册实例。 |
| [`Settlement`](../../campaign/Settlement) / [`Town`](../../campaign/Town) | 提供城镇类型、驻军强度、粮食、繁荣和城墙状态。 |
| [`MobileParty`](../../campaign/MobileParty) | 提供队伍容量、成员数、领袖、军团和工资限制。 |
| `GarrisonRecruitmentCampaignBehavior` | 每日消费自动招募、基础变化和驻军名册写入。 |
| `Town.RepairWallsOfSettlementDaily` / `BuildingEffectEnum.WallRepairSpeed` | 消费墙体修复上限并应用建筑效果。 |

## 默认规则

| 成员 | 1.4.5 行为 |
| --- | --- |
| `GetMaximumDailyAutoRecruitmentCount` | 固定返回 `1`。 |
| `CalculateBaseGarrisonChange` | 叛军城镇/城堡且不属于王国时增加 `2`，并合并 `SettlementGarrison` 问题效果。 |
| `FindNumberOfTroopsToTakeFromGarrison` | 以当前驻军强度与理想驻军强度的 `1.5` 次方、队伍容量和领袖身份估计可带走人数，保留城镇 `50`/城堡 `25` 名正规兵底线。 |
| `FindNumberOfTroopsToLeaveToGarrison` | 结合领地经济、繁荣、粮食、驻军缺口、队伍伤员和军团状态，返回最多约 `70%` 的可用正规兵比例。 |
| `GetMaximumDailyRepairAmount` | 围城中或墙体全满时为 `0`；否则为 `每段最大生命值 * 墙段数 * 0.04`，再叠加城镇建筑修墙效果。 |

## 真实获取与替换

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;

Settlement settlement = Settlement.All
    .FirstOrDefault(candidate => candidate.IsTown && candidate.Town != null);
if (settlement?.Town != null)
{
    SettlementGarrisonModel model = Campaign.Current.Models.SettlementGarrisonModel;
    ExplainedNumber change = model.CalculateBaseGarrisonChange(
        settlement, includeDescriptions: true);
    float repairAmount = model.GetMaximumDailyRepairAmount(settlement);
    int recruitmentLimit = model.GetMaximumDailyAutoRecruitmentCount(settlement.Town);
}
```

在 `InitializeGameStarter` 中使用 `gameStarter.AddModel(new MySettlementGarrisonModel())` 替换默认策略。实际把人加入驻军仍由行为和名册 API 完成。

## 风险与版本边界

- 取兵/留兵公式会读取 `LeaderHero`, `PartySizeLimit`, `Army` 和 `GarrisonParty`；测试时不能用未初始化的临时 `MobileParty` 伪造上下文。
- 保留正规兵底线是默认实现防止城镇被一次性抽空的重要边界；删除它会改变守城和存档长期状态。
- 修墙方法由 `Town` 按段消费，返回值变大并不等于立刻修满；直接把它当比例会造成重复修复。
- 该 Model 没有保存字段；把 AI 决策缓存放进其中会引入生命周期和存档兼容问题。

## 怎么用

### 怎么拿到它

**源文件：** `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultSettlementGarrisonModel.cs`（全文 161 行）。
**抽象契约：** `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/SettlementGarrisonModel.cs`（5 个 abstract 成员，`:9`-`:17`）。
**入口：** `Campaign.Current.Models.SettlementGarrisonModel`。

`public class DefaultSettlementGarrisonModel : SettlementGarrisonModel`（`DefaultSettlementGarrisonModel.cs:14`），**五个成员全部 override，零自创逻辑**。

**而 `private const int MaximumDailyAutoRecruitmentCount = 1`（`:38`）是死常量**——`GetMaximumDailyAutoRecruitmentCount(Town town)`（`:40`）直接 `return 1;`（`:42`），**没有引用那个常量**。

### 典型用法

**五个成员里只有两个是纯查询，另外两个会返回随机数。** 这是本页最重要的一条分界：

| 成员 | 返回 | 行号 |
| --- | --- | --- |
| `GetMaximumDailyAutoRecruitmentCount` | 固定 `1` | `:40` |
| `CalculateBaseGarrisonChange` | `ExplainedNumber`（可解释） | `:45` |
| `FindNumberOfTroopsToTakeFromGarrison` | **`MBRandom.RoundRandomized(...)`（随机）** | `:56` / `:85` |
| `FindNumberOfTroopsToLeaveToGarrison` | **`MBRandom.RoundRandomized(...)`（随机）** | `:98` / `:142` |
| `GetMaximumDailyRepairAmount` | `float` | `:148` |

**两个 `FindNumberOfTroops*` 都会掷骰子**（`:85` 与 `:142`），**而它们的入参只有队伍与据点，没有随机种子**。所以**同一对输入调两次会得到不同结果——它们不能当纯函数用来预演 UI。**

**`FindNumberOfTroopsToTakeFromGarrison`（`:56`）与 `FindNumberOfTroopsToLeaveToGarrison`（`:98`）的参数默认值不同，这是签名层面的坑。** 前者第三个参数是 `defaultIdealGarrisonStrengthPerWalledCenter = 0f`（接口 `SettlementGarrisonModel.cs:13` 同名），后者只有两个参数。**调用方写第三个参数时要看清是哪个方法。**

**而这两条路径对「驻军发不出工资」的处理截然不同，这是本页最容易看漏的分叉：**

- **取兵路径**（`:64`）：`HasLimitedWage()` 为真时 `num2 = PaymentLimit / AverageWage` 再 `/= 1.5f`（`:66`-`:67`），**限薪时上限由经济状况决定，且额外打六折**。
- **还兵路径**（`:107`）：同样条件下 `num2 = PaymentLimit / AverageWage`（`:109`），**但没有那个 `/= 1.5f`**。
- 两者在不限薪时的系数个数也不同：取兵只乘 `OwnerClanEconomyEffectOnGarrisonSizeConstant`（`:72`-`:73`）与城镇类型（`:74`）；还兵多乘繁荣（`:115`）与粮食潜力（`:116`）。

**也就是说「理想驻军规模」这两个方法算的不是同一个数**——一个是缺兵时的取数上限，一个是欠兵时的补给上限。

还有个保留地板：取兵路径的 `num9`（`:87`）从 `25` 起，城镇翻倍成 `50`（`:88`），**而 `:89` 会把结果夹到「留够地板」以内**。所以**再穷也抢不走 25/50 个常规兵。**

```csharp
public static void AuditGarrison(Settlement town, MobileParty army)
{
    SettlementGarrisonModel model = Campaign.Current.Models.SettlementGarrisonModel;
    ExplainedNumber baseChange = model.CalculateBaseGarrisonChange(town, includeDescriptions: true);
    Debug.Print("baseChange=" + baseChange.ResultNumber + " lines=" + baseChange.Lines.Count, 0);
    int takeA = model.FindNumberOfTroopsToTakeFromGarrison(army, town);
    int takeB = model.FindNumberOfTroopsToTakeFromGarrison(army, town);
    Debug.Print("take=" + takeA + " then " + takeB + " (randomised each call)", 0);
    Debug.Print("dailyAutoRecruit=" + model.GetMaximumDailyAutoRecruitmentCount(town.Town)
        + " repairPerDay=" + model.GetMaximumDailyRepairAmount(town), 0);
}
```

**上例第二行连调两次就是为了把「随机」这件事显出来**——两次相等纯属巧合。**而第三行的 `dailyAutoRecruit` 恒为 1**，那个常量改了也没用。

`GetMaximumDailyRepairAmount(Settlement settlement)`（`:148`）有一个早退：被围或全部墙段完好时返回 `0f`（`:150`-`:153`）；否则按 `MaxHitPointsOfOneWallSection × WallSectionCount × 0.04f` 算（`:154`），**且仅当 `IsFortification` 才叠建筑加成**（`:155`-`:158`）。

唯一真实调用点在 AI 侧：`AiVisitSettlementBehavior.cs:578` 调 `FindNumberOfTroopsToTakeFromGarrison(mobileParty, settlement, idealGarrisonStrengthPerWalledCenter)`。

### 最容易踩的坑

- 该类 5 个 override 中有 2 个（`FindNumberOfTroopsToTakeFromGarrison` / `FindNumberOfTroopsToLeaveToGarrison`）内部用 `MBRandom.RoundRandomized` 返回随机值；拿它们做预测或 UI 预演会得到每次不同的数字。

## 导航

- [上级：Campaign-Ext](..)
- [同级：Models 家族](../models/)
- [接口契约：SettlementGarrisonModel](../SettlementGarrisonModel)
- [相关：SettlementFoodModel](../SettlementFoodModel) · [SettlementMilitiaModel](../SettlementMilitiaModel)
- [下游：Town](../../campaign/Town) · [MobileParty](../../campaign/MobileParty)
