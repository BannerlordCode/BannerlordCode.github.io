---
title: "PartySpeedModel"
description: "计算 MobileParty 地图速度的可替换战役策略，不负责移动或修改队伍。"
---
# PartySpeedModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class PartySpeedModel : MBGameModel<PartySpeedModel>`  
**Base:** `MBGameModel<PartySpeedModel>`  
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartySpeedModel.cs`  
**Default:** `TaleWorlds.CampaignSystem.GameComponents/DefaultPartySpeedCalculatingModel.cs`

## One-line job

`PartySpeedModel` 把队伍编制、骑乘、负重、地形和战役修正转换成可解释的地图速度。它回答“队伍能多快移动”，不会移动队伍，也不会改变编制。

## Mental Model

这是地图时钟前的策略层。`MobileParty.CalculateSpeed` 先调用基础速度，再调用最终速度，随后把结果缓存起来供地图 AI 和遭遇系统读取。默认实现由游戏启动器注册；替换实现必须在战役系统开始查询前安装。

```text
队伍状态 -> Campaign.Current.Models.PartySpeedCalculatingModel
        -> CalculateBaseSpeed -> CalculateFinalSpeed
        -> MobileParty 速度缓存 -> 地图移动/遭遇/导航
```

需要改变“规则”时替换 Model，需要改变位置、编制或传送时使用队伍 API 或 Action。不要在模型回调中写 `MobileParty.Position`，也不要在预览时触发招募、逃兵或其他世界变更。`includeDescriptions` 只影响解释行，不应改变数值。

### 注册与调用者

实例由 `Campaign.Current.Models` 持有，默认类型是 `DefaultPartySpeedCalculatingModel`。源码中 `MobileParty.CalculateSpeed` 调用两阶段方法，默认模型还会读取 `CharacterDevelopmentModel` 的技能/Perk 阈值。地图 AI 只消费缓存结果。

## Dependencies

### Upstream

| Type | Relation |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | 提供活动战役和 Model 注册表。 |
| [`MobileParty`](../../campaign/MobileParty) | 提供编制、组件、地形上下文和缓存。 |
| [`CharacterDevelopmentModel`](../CharacterDevelopmentModel) | 提供默认速度 Perk 阈值。 |
| [`ExplainedNumber`](../ExplainedNumber) | 保存结果和可选的因素说明。 |

### Downstream

| Type | Relation |
| --- | --- |
| [`MobileParty`](../../campaign/MobileParty) | 暴露 `Speed` 和解释结果。 |
| [`PartyNavigationModel`](../PartyNavigationModel) | 使用速度选择路线和目标。 |
| [`MapEvent`](../../campaign/MapEvent) | 在遭遇和战斗建立阶段读取队伍状态。 |

## Key contract

| Member | Purpose | Timing |
| --- | --- | --- |
| `BaseSpeed` | 基础速度常量。 | 注册和预览 |
| `MinimumSpeed` | 地图移动允许的下限。 | 最终速度限制 |
| `CalculateBaseSpeed` | 计算编制和基础修正。 | `MobileParty.CalculateSpeed` |
| `CalculateFinalSpeed` | 应用最终状态和 Perk 修正。 | 基础计算之后 |

## Real access path

```csharp
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

这与 `MobileParty.CalculateSpeed` 的真实调用顺序一致。结果只能用于读取或显示，不要把它写回位置或编制。

## 风险与调试顺序

1. 标题界面和模块早期 `Campaign.Current` 为空。
2. 不要把已经缓存的速度再次乘一次，避免重复应用因素。
3. 保持非 NaN、非负并遵守 `MinimumSpeed`，否则寻路和遭遇选择会失效。
4. 编制变化必须通过会使速度缓存失效的官方队伍 API。
5. v1.4.5 增加海上因素，优先委托当前默认模型，不要复制旧版本公式。

## Navigation

- [Campaign-ext models family](../models/)
- [MobileParty](../../campaign/MobileParty)
- [PartyNavigationModel](../PartyNavigationModel)
- [CharacterDevelopmentModel](../CharacterDevelopmentModel)
- [Campaign system guide](../../../guide/campaign-system)
