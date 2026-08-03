---
title: "PartySpeedModel"
description: "把队伍编制、负重、地形和战役修正转换为地图速度的可替换策略模型。"
---
# PartySpeedModel

**命名空间:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**模块:** `TaleWorlds.CampaignSystem`  
**类型:** `public abstract class PartySpeedModel : MBGameModel<PartySpeedModel>`  
**基类:** `MBGameModel<PartySpeedModel>`  
**源文件:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartySpeedModel.cs`  
**默认实现:** `TaleWorlds.CampaignSystem.GameComponents/DefaultPartySpeedCalculatingModel.cs`

## 一句话职责

它回答“这个 `MobileParty` 现在应该有多快”，并返回带可选解释的数值；它不移动队伍、不改位置，也不改变队伍编制。地图 AI、追逐和遭遇系统会把这个结果当作共享规则，因此自定义实现影响的是所有读取者，而不是某一个 UI 数字。

## 心智模型

这是地图时钟读取前的规则层。`MobileParty.Speed` 或其内部速度计算先向模型要基础速度，再把地形、天气、昼夜、侦察 Perk、文化效果和队伍状态交给最终阶段。`MobileParty` 把结果放进自己的缓存，地图 AI、追逐和遭遇系统随后消费这个结果。

计算链是：编制、坐骑、负重、士气和伤兵等输入，先进入 `Campaign.Current.Models.PartySpeedCalculatingModel` 的 `CalculateBaseSpeed`，再进入 `CalculateFinalSpeed`，最后由 `MobileParty` 的速度缓存供地图移动、AI 和遭遇系统读取。

使用这个模型，是为了改变所有消费者看到的“计算结果”。如果目标是传送、改变位置或改编制，应使用 `MobileParty` 的公开 API、Roster API 或对应 `*Action`。不要在计算回调中写 `Position`、招募单位或触发世界变更；那会把一个只读查询变成每次 tick 都重复执行的副作用。`includeDescriptions` 只控制 `ExplainedNumber` 是否记录因素说明，不应改变数值。

### 生命周期与注册

`Campaign.Current.Models` 持有当前实例。默认实例是 `DefaultPartySpeedCalculatingModel`，游戏启动器在战役初始化时通过 `IGameStarter.AddModel` 注册它；自定义模型也必须在战役系统开始查询前完成注册。标题界面、模块加载早期或没有活动战役时，`Campaign.Current` 可能为 `null`，不能在静态字段初始化或菜单构造函数里无条件读取它。

## 依赖图

### 上游

| 类型 | 关系 |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | 提供活动战役和 `Models` 注册表。 |
| [`MobileParty`](../../campaign/MobileParty) | 提供编制、坐骑、负重、伤兵、俘虏、士气、地形和速度缓存。 |
| [`CharacterDevelopmentModel`](../CharacterDevelopmentModel) | 为默认实现提供技能/Perk 阈值。 |
| [`ExplainedNumber`](../ExplainedNumber) | 承载速度结果以及可选的因素说明。 |

### 下游

| 类型 | 关系 |
| --- | --- |
| [`MobileParty`](../../campaign/MobileParty) | 调用两个阶段并暴露 `Speed`、`SpeedExplained`。 |
| [`PartyNavigationModel`](../PartyNavigationModel) | 负责导航类型和可通行地形；速度模型不负责选合法地形。 |
| [`MapEvent`](../../campaign/MapEvent) | 在地图遭遇和战斗建立时读取队伍状态。 |
| [`PartyDesertionModel`](../PartyDesertionModel) | 这是相邻的队伍规则模型；它处理欠薪逃兵，不应被速度计算隐式触发。 |

### Action、事件与存档边界

模型结果本身没有存档字段，也不派发事件。合法的编制变更走 roster API 或对应 Action，移动变更走队伍/地图 API；自定义模型应在相同输入下保持确定性，避免速度缓存与重放的战役 tick 不一致。

## 成员契约

| 成员 | 用途 | 调用时机与副作用 |
| --- | --- | --- |
| `BaseSpeed` | 暴露默认基础速度常量；默认实现为 `4f`。 | 注册或展示规则时读取；不直接改变当前队伍速度。 |
| `MinimumSpeed` | 提供最终结果的下限；默认实现为 `1f`。 | 最终阶段限制结果；不应返回负数或 NaN。 |
| `CalculateBaseSpeed` | 根据人数、骑兵、可用坐骑、牲畜、负重、超编、伤兵、俘虏、士气、商队和混乱状态建立基础 `ExplainedNumber`。 | `MobileParty` 的两阶段计算第一步；可传入待加入的步兵/骑兵数量做预览。 |
| `CalculateFinalSpeed` | 在基础结果上应用当前地形、天气、昼夜、侦察 Perk、文化效果、军队和自定义队伍基础速度。 | 紧接基础阶段调用；应在返回前保持最小速度边界。 |

默认实现的可观察因素包括：人数越多基础速度越低；骑兵和骑马步兵通常提高速度；负重、赶群、超编、伤兵、超额俘虏、低士气和混乱会降低速度；森林、涉水、沙漠、雪、夜间以及队伍所属文化和 Scout Perk 会在最终阶段继续修正。海上相关规则属于较新版本默认实现的一部分，替换模型时不要只复制旧版本公式。

## 真实读取路径

以下代码只查询当前战役中已经注册的模型，顺序与 `MobileParty.SpeedExplained` 和内部速度计算一致：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;

public ExplainedNumber ExplainPartySpeed(MobileParty party)
{
    if (Campaign.Current == null || party == null)
    {
        return new ExplainedNumber(0f);
    }

    PartySpeedModel model = Campaign.Current.Models.PartySpeedCalculatingModel;
    ExplainedNumber baseSpeed = model.CalculateBaseSpeed(party, includeDescriptions: true);
    return model.CalculateFinalSpeed(party, baseSpeed);
}
```

这段结果适合调试或 UI 预览；普通地图逻辑应读取 `party.Speed`，不要自己再次把最终结果乘一遍。

## 替换模型时的安全做法

如果只想增加一个有限修正，保留原模型作为 delegate，并让两个阶段仍然成对执行：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;
using TaleWorlds.Localization;

public sealed class ModPartySpeedModel : PartySpeedModel
{
    private readonly PartySpeedModel _vanilla;

    public ModPartySpeedModel(PartySpeedModel vanilla)
    {
        _vanilla = vanilla;
    }

    public override float BaseSpeed => _vanilla.BaseSpeed;
    public override float MinimumSpeed => _vanilla.MinimumSpeed;

    public override ExplainedNumber CalculateBaseSpeed(
        MobileParty party, bool includeDescriptions = false,
        int additionalTroopOnFootCount = 0, int additionalTroopOnHorseCount = 0)
    {
        return _vanilla.CalculateBaseSpeed(
            party, includeDescriptions, additionalTroopOnFootCount, additionalTroopOnHorseCount);
    }

    public override ExplainedNumber CalculateFinalSpeed(MobileParty party, ExplainedNumber speed)
    {
        ExplainedNumber result = _vanilla.CalculateFinalSpeed(party, speed);
        result.AddFactor(0.05f, new TextObject("Mod: road training"));
        return result;
    }
}
```

实际注册时应在 `CampaignGameStarter` 的模型注册阶段保存 vanilla delegate；不要在模型已经替换后再次通过 `Campaign.Current.Models.PartySpeedCalculatingModel` 查找自己，否则会递归。若要让替换覆盖海上、文化和新版本 Perk 规则，优先委托当前版本默认模型，再加自己的有界因素。

## 风险与调试顺序

1. **战役尚未存在:** `Campaign.Current` 在标题界面和早期模块加载阶段为空；延迟到战役启动钩子再获取模型。
2. **重复应用:** 同时调用模型、再把返回值写回或再次乘倍率，会使基础和最终因素重复生效。
3. **无界结果:** 负数、NaN 或跳过 `MinimumSpeed` 会让寻路、追逐和遭遇选择失效。
4. **查询中修改世界:** 招募、逃兵、传送和金币转移必须在行为、Roster API 或 Action 中执行，不能放进计算回调。
5. **陈旧缓存:** 合法改变编制后，要使用能使队伍速度缓存失效的官方 API；不要访问私有缓存字段。

## 版本与导航

v1.3.15 和 v1.4.5 的接口与默认实现都包含 `IsCurrentlyAtSea` 相关条件；v1.4.5 更明显的差异在队伍船只状态、风和海上缓存失效的周边路径。跨版本实现应委托当前版本的 vanilla model，而不是把旧公式复制到新版本。

- [队伍模型目录](../models/)
- [父级：Campaign 扩展 API](../)
- [↔ PartyWageModel](../PartyWageModel)
- [↔ PartyNavigationModel](../PartyNavigationModel)
- [MobileParty](../../campaign/MobileParty)
- [CharacterDevelopmentModel](../CharacterDevelopmentModel)
- [战役系统指南](../../../guide/campaign-system)
