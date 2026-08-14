---
title: "SettlementGarrisonModel"
description: "据点驻军政策模型：决定每日基础驻军增减、自动招募上限、AI 队伍从/向驻军带走与留下的建议人数，以及城墙每日可修复的耐久点数。"
---
# SettlementGarrisonModel

**命名空间:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**模块:** `TaleWorlds.CampaignSystem`  
**类型:** `public abstract class SettlementGarrisonModel : MBGameModel<SettlementGarrisonModel>`  
**基类:** `MBGameModel<SettlementGarrisonModel>`  
**源文件:** `C:\WorkSpace\Bannerlord\bannerlord-1.4.5\Bannerlord.Source\bin\TaleWorlds.CampaignSystem\TaleWorlds.CampaignSystem.ComponentInterfaces\SettlementGarrisonModel.cs`  
**默认实现:** `TaleWorlds.CampaignSystem.GameComponents/DefaultSettlementGarrisonModel.cs`

## 一句话职责

它回答“这个据点今天驻军该变多少、该招多少人、AI 队伍该从驻军里抽走或留下多少兵、城墙今天能修多少”，返回的是一组合规建议与数值；它不写名册、不移动单位、也不改墙体生命值——真正的增减由对应行为与 `Town` 在每日 tick 中执行。

## 心智模型

这是据点的“驻军政策层”，不是驻军队伍本身。模型只负责算数，所有写入都发生在别处：`GarrisonRecruitmentCampaignBehavior` 在 `DailyTickSettlementEvent` 里先调用 `CalculateBaseGarrisonChange` 与 `GetMaximumDailyAutoRecruitmentCount` 得到当日增量与上限，再用 `AddToCounts` 真正把兵加进驻军；`Town.RepairWallsOfSettlementDaily`（`Town.cs:639`）调用 `GetMaximumDailyRepairAmount` 后逐段写回城墙生命比例；两个 `FindNumberOfTroopsTo(TakeFrom|LeaveTo)Garrison` 则由 `AiVisitSettlementBehavior` 在 AI 决策时读取，返回值只是“建议”，实际转移由后续行为/Action 完成。

计算链是：据点运行态（所有者氏族、繁荣、粮食、墙段、驻军 party 强度）→ 模型 → 行为在每日据点阶段消费结果并写回。因此自定义实现影响的是所有读取者看到的“建议”，而不是某一个 UI 数字。

使用这个模型，是为了改所有消费者看到的规则。如果目标是直接补兵、改编制或修墙，应走 `Town`/驻军 party 的公开 API、`AddGarrisonParty` 或对应 `*Action`，不要在模型方法体内操作 `MemberRoster` 或修改 `SettlementWallSectionHitPointsRatioList`——那会把一个只读查询变成每次 tick 都重复执行的副作用。`includeDescriptions` 只控制 `ExplainedNumber` 是否记录因素说明，不应改变数值。

### 生命周期与注册

`Campaign.Current.Models` 持有当前实例，属性名即 `SettlementGarrisonModel`。默认实例是 `DefaultSettlementGarrisonModel`，由游戏启动器在战役初始化时通过 `IGameStarter.AddModel`（`GameModels`）注册；自定义模型也必须在战役系统开始查询前完成注册。标题界面、模块加载早期或没有活动战役时，`Campaign.Current` 可能为 `null`，不能在静态字段初始化或菜单构造函数里无条件读取它。

## 依赖图

### 上游

| 类型 | 关系 |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | 提供活动战役与 `Models` 注册表；模型通过 `Campaign.Current.Models` 获取。 |
| [`Settlement`](../../campaign/Settlement) / [`Town`](../../campaign/Town) | 提供据点、驻军 party、繁荣、粮食、墙段与所有者氏族上下文。 |
| [`MobileParty`](../../campaign/MobileParty) | 提供 AI 队伍规模、工资上限、军队归属，供两个 `FindNumber...` 方法计算建议人数。 |
| [`Clan`](../../campaign/Clan) | 所有者氏族的叛乱/经济状态参与基础驻军与理想驻军强度计算。 |
| [`VolunteerModel`](../VolunteerModel) | 旁边招募相关的模型；自动招募上限由本模型给出，可招募的志愿者来自 `VolunteerModel`。 |

### 下游

| 类型 | 关系 |
| --- | --- |
| [`GarrisonRecruitmentCampaignBehavior`](../behaviors/) | 在每日据点 tick 中调用 `CalculateBaseGarrisonChange` 与 `GetMaximumDailyAutoRecruitmentCount` 并真正改名册。 |
| [`Town`](../../campaign/Town) | `RepairWallsOfSettlementDaily` 调用 `GetMaximumDailyRepairAmount` 后逐段写回城墙生命比例。 |
| [`AiVisitSettlementBehavior`](../behaviors/) | 读取 `FindNumberOfTroopsToTakeFromGarrison` 决定 AI 队伍带兵离营的规模。 |
| [`PartyWageModel`](../PartyWageModel) / [`PartySizeLimitModel`](../PartySizeLimitModel) | 下游配套：招募与驻军上限会被工资与队伍规模进一步夹断。 |
| [`WallHitPointCalculationModel`](../WallHitPointCalculationModel) | 相邻规则模型：墙段耐久的换算与修复量解释相关，不应与修复量计算混淆。 |

### Action、事件与存档边界

消费发生在 `DailyTickSettlementEvent`（据点每日 tick）与 AI 决策；模型结果本身没有存档字段，也不派发事件。合法的驻军变更走行为/Roster API，墙体变更走 `Town` 的修复路径；自定义模型应在相同输入下保持确定性，避免与重放的战役 tick 不一致。替换模型要在战役启动阶段完成，不要等据点已经读取过旧模型后再换。

## 成员契约

| 成员 | 用途 | 调用时机与副作用 |
| --- | --- | --- |
| `GetMaximumDailyAutoRecruitmentCount(Town town)` | 返回据点每天自动补入驻军的人数硬上限；默认实现固定返回 `1`（常量 `MaximumDailyAutoRecruitmentCount`）。 | 在每日据点自动招募步骤被 `GarrisonRecruitmentCampaignBehavior` 调用，作为 `ExplainedNumber` 的最大上限夹断。纯读取，不改名册。 |
| `CalculateBaseGarrisonChange(Settlement settlement, bool includeDescriptions = false)` | 返回据点每日基础驻军增量 `ExplainedNumber`。默认实现：若据点属叛乱氏族且非王国阵营则 `+2`；再加上 `IssueModel.GetIssueEffectsOfSettlement(DefaultIssueEffects.SettlementGarrison, ...)` 的议题效果。 | 在每日据点 tick 由招募行为调用；返回值随后被队伍规模上限与工资上限夹断。纯查询，不改据点。 |
| `FindNumberOfTroopsToTakeFromGarrison(MobileParty mobileParty, Settlement settlement, float idealGarrisonStrengthPerWalledCenter = 0f)` | 返回 AI 队伍建议从驻军带走的人数。默认实现读取 `settlement.Town.GarrisonParty`；按驻军强度、`mobileParty` 规模上限、理想驻军强度（默认参数为 `0` 时回退到 `FactionHelper.FindIdealGarrisonStrengthPerWalledCenter`）估算，并保留约 25（城镇 50）的最低驻军。 | `AiVisitSettlementBehavior`（源 `AiVisitSettlementBehavior.cs:578`）在 AI 决定带兵离营时调用。**仅建议**，真正转移由后续行为/Action 执行；`GarrisonParty` 为 `null`（如村庄）时返回 `0`。 |
| `FindNumberOfTroopsToLeaveToGarrison(MobileParty mobileParty, Settlement settlement)` | 返回 AI 队伍建议留给驻军的人数。默认实现在驻军强度低于目标强度时，结合队伍规模、伤兵比例、所有者/军队关系给出有界比例。 | 用于 AI 驻防决策。**仅建议**；驻军已达/超过目标或 `GarrisonParty` 为 `null` 时返回 `0`。 |
| `GetMaximumDailyRepairAmount(Settlement settlement)` | 返回据点每天可修复的城墙耐久点数（`float`）。默认实现：围城中或所有墙段都已满血则返回 `0`；否则为 `MaxHitPointsOfOneWallSection * WallSectionCount * 0.04f`，并叠加 `Town.AddEffectOfBuildings(BuildingEffectEnum.WallRepairSpeed, ...)`。 | `Town.RepairWallsOfSettlementDaily`（`Town.cs:644`）调用并除以 `MaxHitPointsOfOneWallSection` 得到每段可修复比例。纯计算。 |

默认实现里还应注意：两个 `FindNumber...` 都访问 `settlement.Town.GarrisonParty`，对村庄或不带驻军 party 的据点直接调用会得到 `0`；`GetMaximumDailyRepairAmount` 返回的是**耐久点数**而非 `0..1` 比例，单位换算发生在 `Town` 侧。

## 真实读取路径

以下代码只查询当前战役中已注册的模型，调用的是契约上的真实方法，与据点每日 tick 与 `Town` 修复路径一致：

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;

public ExplainedNumber ExplainGarrisonChange(Settlement settlement)
{
    if (Campaign.Current == null || settlement == null || !settlement.IsFortification)
    {
        return new ExplainedNumber(0f);
    }

    SettlementGarrisonModel model = Campaign.Current.Models.SettlementGarrisonModel;
    ExplainedNumber baseChange = model.CalculateBaseGarrisonChange(settlement, includeDescriptions: true);
    int autoRecruitCap = model.GetMaximumDailyAutoRecruitmentCount(settlement.Town);
    float maxRepair = model.GetMaximumDailyRepairAmount(settlement);
    return baseChange;
}
```

这段结果适合调试或 UI 预览。普通逻辑应当读取行为已经算好的当日增量，不要自己再调一次 `CalculateBaseGarrisonChange` 又叠加，否则会与每日 tick 的写入重复。

## 替换模型时的安全做法

如果只想给修复量加一个有界修正，保留默认模型作为 delegate，并让所有方法仍然成对委托：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;

public sealed class ModSettlementGarrisonModel : SettlementGarrisonModel
{
    private readonly SettlementGarrisonModel _vanilla;

    public ModSettlementGarrisonModel(SettlementGarrisonModel vanilla)
    {
        _vanilla = vanilla;
    }

    public override int GetMaximumDailyAutoRecruitmentCount(Town town)
        => _vanilla.GetMaximumDailyAutoRecruitmentCount(town);

    public override ExplainedNumber CalculateBaseGarrisonChange(Settlement settlement, bool includeDescriptions = false)
        => _vanilla.CalculateBaseGarrisonChange(settlement, includeDescriptions);

    public override int FindNumberOfTroopsToTakeFromGarrison(
        MobileParty mobileParty, Settlement settlement, float idealGarrisonStrengthPerWalledCenter = 0f)
        => _vanilla.FindNumberOfTroopsToTakeFromGarrison(mobileParty, settlement, idealGarrisonStrengthPerWalledCenter);

    public override int FindNumberOfTroopsToLeaveToGarrison(MobileParty mobileParty, Settlement settlement)
        => _vanilla.FindNumberOfTroopsToLeaveToGarrison(mobileParty, settlement);

    public override float GetMaximumDailyRepairAmount(Settlement settlement)
    {
        float vanilla = _vanilla.GetMaximumDailyRepairAmount(settlement);
        if (vanilla <= 0f)
        {
            return vanilla;
        }
        return vanilla * 1.25f;
    }
}
```

注册时应在 `CampaignGameStarter` 的模型注册阶段保存 vanilla delegate；不要在模型已经替换后再次通过 `Campaign.Current.Models.SettlementGarrisonModel` 查找自己，否则会递归。若要让修正覆盖叛乱、议题或建筑效果，优先委托当前版本的默认模型，再加自己的有界因素。

## 风险与调试顺序

1. **战役尚未存在:** `Campaign.Current` 在标题界面与早期模块加载阶段为空；延迟到战役启动钩子或每日 tick 再获取模型。
2. **建议当结果:** 两个 `FindNumber...` 只返回建议人数，重复应用会让同一批兵被多次扣减或多次补入。
3. **空引用:** 默认实现访问 `settlement.Town.GarrisonParty`；对村庄（`!IsFortification`）或没有驻军 party 的据点直接调用会得到 `0`，但依赖 `settlement.Town` 时仍要先确认 `IsTown`/`IsCastle`。
4. **单位误会:** `GetMaximumDailyRepairAmount` 返回的是墙体耐久点数，`Town` 会再除以 `MaxHitPointsOfOneWallSection`；不要把它当成 `0..1` 比例去写 `SettlementWallSectionHitPointsRatioList`。
5. **边界跳过:** 围城中或所有墙段满血时默认修复量为 `0`；自定义实现跳过这两个边界会改变攻城生命周期。
6. **跨模型反馈:** 驻军数量与粮食、工资、民兵、建筑互相反馈，调参前检查每日 tick 顺序，避免与 `PartyWageModel`/`PartySizeLimitModel`/`SettlementMilitiaModel` 等冲突。
7. **持久性:** 模型字段不存档；想改规则应在战役启动阶段注册派生模型，不要指望在运行时改字段后保留。

## 版本与导航

`SettlementGarrisonModel` 的契约在 v1.3.0、v1.3.15 与 v1.4.5 三个版本中完全一致：五个 `abstract` 方法签名（含 `idealGarrisonStrengthPerWalledCenter` 默认参数）均未变动，差异只在 `DefaultSettlementGarrisonModel` 的默认公式与周边行为。跨版本实现应委托当前版本的 vanilla 模型，而不是把旧公式复制到新版本。

- [队伍模型目录](../models/)
- [父级：Campaign 扩展 API](../)
- [↔ SettlementFoodModel](../SettlementFoodModel)
- [↔ SettlementMilitiaModel](../SettlementMilitiaModel)
- [↔ SettlementLoyaltyModel](../SettlementLoyaltyModel)
- [↔ PartyWageModel](../PartyWageModel)
- [↔ PartySizeLimitModel](../PartySizeLimitModel)
- [↔ WallHitPointCalculationModel](../WallHitPointCalculationModel)
- [相关类：Settlement](../../campaign/Settlement) · [Town](../../campaign/Town) · [MobileParty](../../campaign/MobileParty) · [Clan](../../campaign/Clan) · [Campaign](../../campaign/Campaign)
- [战役系统指南](../../../guide/campaign-system)
