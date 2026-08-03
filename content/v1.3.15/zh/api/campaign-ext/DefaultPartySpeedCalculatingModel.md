---
title: "DefaultPartySpeedCalculatingModel"
description: "默认的地图队伍基础速度、地形、负重、编制和侦察修正计算模型。"
---
# DefaultPartySpeedCalculatingModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class DefaultPartySpeedCalculatingModel : PartySpeedModel`  
**Base:** [`PartySpeedModel`](../PartySpeedModel)  
**Source:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartySpeedCalculatingModel.cs`（v1.3.15；v1.4.5 对应文件位于 `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents`）

## 一句话职责

这个模型把队伍人数、骑乘兵、牲畜、负重、伤兵、俘虏、士气、天气、地形、侦察 Perk 和队伍状态转换成地图移动速度；它不移动队伍、不改位置，也不直接修改 roster。

## 心智模型

```text
MobileParty / AttachedParties / ItemRoster / 地图状态
                              ↓
        CalculateBaseSpeed（人数、坐骑、负重、伤兵）
                              ↓
        CalculateFinalSpeed（地形、天气、昼夜、侦察）
                              ↓
       MobileParty.SpeedExplained / 速度缓存 / 地图 AI
```

`DefaultPartySpeedCalculatingModel` 的 `BaseSpeed` 默认是 `4`，`MinimumSpeed` 默认是 `1`。`MobileParty` 通常先调用 `CalculateBaseSpeed`，再把结果传给 `CalculateFinalSpeed`，然后保存最终的 `ResultNumber` 和 explained 结果。基础阶段主要处理队伍组成，最终阶段才读取导航面、地形、天气和昼夜；把两阶段合并或重复调用会让速度因素重复生效。

### 何时使用

- 要诊断队伍为什么变慢时，分别读取 base 和 final 的 `ExplainedNumber`，查看负重、伤兵、超编、地形和 Perk 解释项。
- 要修改所有地图速度消费者看到的规则时，在战役启动阶段替换 `PartySpeedModel`，并保留 `MinimumSpeed` 与官方缓存契约。
- 要临时估算编队或招募后的速度时，使用 `additionalTroopOnFootCount` 和 `additionalTroopOnHorseCount` 参数；它们是计算输入，不会写入 roster。

### 何时不要使用

不要在速度模型中修改 `MobileParty.Position`、传送队伍、招募/移除兵员或触发遭遇事件。地图移动和世界变更必须通过队伍 API、Behavior 或 Action 完成。也不要把一次计算结果每个 tick 再乘一次；`MobileParty` 已经负责缓存和重新计算时机。

## 依赖关系

### 上游输入

| 类型 / 系统 | 在本模型中提供什么 |
| --- | --- |
| [`MobileParty`](../../campaign/MobileParty) / Attached parties | 成员、伤兵、俘虏、骑乘兵、队伍状态、军队关系、领导者和速度缓存上下文。 |
| [`ItemRoster`](../ItemRoster) | 坐骑、驮兽、牲畜和队伍总负重。 |
| [`PartySizeLimitModel`](../PartySizeLimitModel) | 成员容量和俘虏容量，用于超编速度修正。 |
| `InventoryCapacityModel` | 当前队伍和额外兵员对应的负重容量。 |
| [`PartyMoraleModel`](../PartyMoraleModel) / `CharacterDevelopmentModel` | 士气值和 Epic Perk 所需技能阈值。 |
| `MapWeatherModel` / `MapSceneWrapper` | 当前位置天气、湿地效果、导航面地形和风/雪上下文。 |
| `DefaultPerks` / `DefaultCulturalFeats` | Athletics、Riding、Scouting、Medicine、Battanian/Aserai/Khuzait 相关速度修正。 |

### 下游调用者

| 调用者 | 使用方式 |
| --- | --- |
| [`MobileParty`](../../campaign/MobileParty) | 调用两阶段模型，保存 `Speed` 和 `SpeedExplained`，并根据状态版本刷新缓存。 |
| [`PartyNavigationModel`](../PartyNavigationModel) | 用队伍速度评估路线和目标。 |
| Map AI / encounter 流程 | 用最终速度影响追逐、逃脱、遭遇选择和地图移动。 |
| [`MapEvent`](../../campaign/MapEvent) | 在地图遭遇和战斗准备中使用队伍的移动状态。 |

## 公共契约

| 成员 | 默认行为 | 关键边界 |
| --- | --- | --- |
| `BaseSpeed` | 返回 `4`。 | 基础常量，不是当前队伍最终速度。 |
| `MinimumSpeed` | 返回 `1`。 | 最终结果的下限；自定义实现不应绕过它。 |
| `CalculateBaseSpeed` | 汇总成员/附属队伍、坐骑、牲畜、负重、伤兵、俘虏、士气和队伍状态。 | 额外步兵/骑兵参数只改变本次计算，不改变 roster。 |
| `CalculateFinalSpeed` | 叠加地形、天气、昼夜、侦察 Perk、军队和自定义队伍修正。 | 接收 base `ExplainedNumber`，最后再次限制到 `MinimumSpeed`。 |

## 默认计算细节

### 基础速度：队伍组成和负重

`CalculateBaseSpeed` 在 1.3.15/1.4.5 中调用陆地基础公式，同时让库存容量和若干 Perk 感知海上状态：

1. 总人数从当前队伍成员数加上两个 additional 参数开始；附属队伍的人数、总负重、库存容量、骑乘/非骑乘人数、伤兵、俘虏和成员上限也加入汇总。
2. 基础人数速度为：

   ```text
   4 * (200 / (200 + totalMenCount)) ^ 0.4
   ```

3. 骑兵比例按 `0.3 * cavalry / men` 增加速度；可为步兵提供的坐骑数按 `min(footmen, availableMounts)` 计算，骑马步兵比例按 `0.15 * mountedFootmen / men` 增加。湿地天气会把这两个比例各自再扣除 `30%`；领袖 `Riding.NomadicTraditions` 还能按骑马步兵比例加成。
4. 在容量内的货物按 `-0.02 * min(weight, capacity) / capacity` 影响速度。超过容量时，基础负重惩罚为超重部分与容量的比例乘 `-0.4`；陆地上 `Athletics.Energetic` 和 `Scouting.Unburdened` 可以修正该 explained factor。
5. 超过成员容量时使用 `1 / (men / partySize) - 1`；Deserters 队伍只承受该因素的一半。多余坐骑、驮兽和牲畜形成 herding 惩罚，最多到 `-0.8`；村民跳过 herding，`Riding.Shepherd` 可减轻它。
6. 伤兵超过总人数四分之一才产生速度惩罚，通常是 `-0.05 * wounded / men`，最大 `-0.8`；没有成员时为 `-0.5`。陆地上的 Medicine `Sledges` 可以修正该因素。
7. 非 Caravan 队伍会根据俘虏数增加负面尺寸因素；俘虏超过 `PrisonerSizeLimit` 时还会加入超限惩罚。Caravan 跳过这两条俘虏尺寸分支。
8. 士气高于 `70` 时最多提供 `+5%` 的线性加成，低于 `30` 时最多施加 `-10%`；主队还读取难度的地图移动倍率，Caravan 加 `+10%`，Disorganized 加 `-40%`。

基础结果最后调用 `LimitMin(1)`。因此减负、补充伤兵或改变编制后，应让官方速度缓存失效并重新计算，而不是只读取一次结果。

### 最终速度：地形、天气和侦察

`CalculateFinalSpeed` 接收 base explained 结果：

- 自定义队伍若 `CustomPartyComponent.BaseSpeed` 非零，会先用该值替换传入的 base 结果。
- 森林默认 `-30%`；有效 Scout 的 `ForestKin` 在至少 75% 成员为非骑乘兵时减轻该惩罚，Battanian forest feat 再按其效果提供文化修正。
- 非海上队伍经过 Water、River、UnderBridge、Bridge 或 Fording 面时 `-30%`。沙漠/沙丘默认 `-10%`，Aserai desert feat 可免除；`DesertBorn` 和平原/草原的 `Pathfinder` 可提供侦察加成。
- Snowy 或 Blizzard 天气增加 `-10%` 雪地因素。
- 陆地夜间 `-25%`，`NightRunner` 可修正；白天有 `DayTraveler` 时加入其加成。海上跳过昼夜和陆地专属的若干侦察分支。
- 陆地上应用 Scout 的 Epic `UncannyInsight`；士气高于 `75` 且有 `ForcedMarch` 时加成。正在追击敌对目标时，`Tracker` 的次要效果可能生效。
- 军队中的非领队、未直接附着于领队队伍的陆地队伍，在领队拥有 `Tactics.CallToArms` 时获得加成。

最终再次调用 `LimitMin(1)`。`includeDescriptions` 只影响 explained 文本，不应改变速度数值。

## 真实读取路径

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.Library;

MobileParty party = MobileParty.MainParty;
PartySpeedModel model = Campaign.Current.Models.PartySpeedCalculatingModel;
ExplainedNumber baseSpeed = model.CalculateBaseSpeed(
    party, includeDescriptions: true);
ExplainedNumber finalSpeed = model.CalculateFinalSpeed(party, baseSpeed);
float mapSpeed = finalSpeed.ResultNumber;
```

这是 `MobileParty` 两阶段调用的只读等价路径。通常读取 `party.Speed` 或 `party.SpeedExplained` 就足够；不要在读取结果后再次调用 `CalculateFinalSpeed` 并把结果应用到位置或缓存。

## 替换默认模型

在战役 starter 阶段注册子类，委托默认公式后再加一个有界修正：

```csharp
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;
using TaleWorlds.Library;
using TaleWorlds.Localization;

public sealed class MyPartySpeedModel : DefaultPartySpeedCalculatingModel
{
    public override ExplainedNumber CalculateFinalSpeed(
        MobileParty party, ExplainedNumber speed)
    {
        ExplainedNumber result = base.CalculateFinalSpeed(party, speed);
        result.AddFactor(0.05f, new TextObject("{=my_speed_bonus}My speed bonus"));
        result.LimitMin(MinimumSpeed);
        return result;
    }
}

protected override void InitializeGameStarter(Game game, IGameStarter starter)
{
    starter.AddModel(new MyPartySpeedModel());
}
```

如果需要包装已注册的模型，应在 starter 阶段保留明确的 `BaseModel` 引用，不要从 `Campaign.Current.Models.PartySpeedCalculatingModel` 回读自己的替换实例。不要返回没有 `MinimumSpeed` 保护的任意 explained 结果。

## 风险与调试边界

1. **两阶段重复应用**：base 结果已经包含编制/负重因素，final 结果已经包含地形/天气因素；不要把同一阶段重复调用。
2. **缓存失效**：`MobileParty` 会根据 roster、位置、天气、昼夜和状态版本缓存速度；合法修改应走官方 API 触发失效，不要写私有缓存字段。
3. **额外兵员不是 roster**：additional foot/horse 参数只用于预估编队变化；把它们当作已加入队伍会导致 UI 和实际速度不一致。
4. **零容量/零人数**：容量、人数和俘虏数量参与除法；自定义模型应保留 vanilla 对空队伍和容量的边界，避免 NaN 或无限值。
5. **海上与陆地分支**：海上会跳过部分地形、夜间和陆地 Perk，但仍影响库存容量和若干负重逻辑；不要只复制陆地结果。
6. **模型调用时机**：标题界面或模块加载早期可能没有 `Campaign.Current`、地图面或天气；模型应在战役启动后由正式消费者调用。

## 版本说明

v1.3.15 与 v1.4.5 保持两阶段接口、`BaseSpeed = 4`、`MinimumSpeed = 1`、主要负重/编制/地形/天气分支一致。v1.4.5 在船只状态、海上缓存和地图天气周边调用上更复杂；自定义实现应委托目标版本的默认模型，不要复制旧版本公式后忽略新状态。

## 参见

- [Campaign-ext Models 家族](../models/)
- [`PartySpeedModel`](../PartySpeedModel)
- [`MobileParty`](../../campaign/MobileParty)
- [`PartyNavigationModel`](../PartyNavigationModel)
- [`PartySizeLimitModel`](../PartySizeLimitModel)
- [`PartyMoraleModel`](../PartyMoraleModel)
- [`CharacterDevelopmentModel`](../CharacterDevelopmentModel)
- [`CampaignGameStarter`](../CampaignGameStarter)
