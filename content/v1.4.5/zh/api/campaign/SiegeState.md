---
title: "Settlement.SiegeState"
description: "据点保存的围城阶段，用于选择墙上部署、领主大厅流程并拦截无效状态。"
---
# Settlement.SiegeState

**命名空间：** `TaleWorlds.CampaignSystem.Settlements`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public enum Settlement.SiegeState`  
**基类：** `System.Enum`  
**源码：** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Settlements/Settlement.cs`

## 职责

`Settlement.SiegeState` 是 `Settlement` 上的可存档阶段标记，用来告诉遭遇和 Mission 代码当前处于城墙、领主大厅还是无效状态。

## 心智模型

这是嵌套枚举，不是可以独立获取的服务。应通过 `settlement.CurrentSiegeState` 读取；该属性可存档且 setter 为私有。据点初始为 `OnTheWalls`，`SetNextSiegeState()` 最多推进到 `InTheLordsHall`，而 `Settlement.FinalizeSiegeEvent()` 会在清除 `Settlement.SiegeEvent` 时重置为 `OnTheWalls`。

枚举值是工作流选择门。`PlayerSiege.StartSiegeMission()` 和 `PlayerEncounter.StartSiegeAmbushMission()` 只在墙上阶段构造部署 Mission。`InTheLordsHall` 是另一种遭遇阶段；`Invalid` 是错误信号，不是 Mod 应通过强制转换去设置或修复的正常阶段。

## 生命周期、值与依赖

| 值 | 含义 | 安全消费者 |
|---|---|---|
| `OnTheWalls` | 围城处于城墙攻坚阶段。 | 通过 [`PlayerSiege`](../PlayerSiege) 进入墙上部署，或通过 [`PlayerEncounter`](../PlayerEncounter) 进入围城伏击。 |
| `InTheLordsHall` | 城墙阶段已经推进到领主大厅战斗。 | 由遭遇/菜单代码选择领主大厅流程；不要交给墙上部署。 |
| `Invalid` | 无效或不支持的阶段哨兵值。 | 用于错误处理和断言，不用于正常推进。 |

`SetNextSiegeState()` 会停在 `InTheLordsHall`，不会推进到 `Invalid`。`ResetSiegeState()` 在据点围城结束时使用。因此它描述的是当前据点/事件生命周期，不是全局玩家标志。

相关状态由 [`Settlement`](../Settlement) 和 [`SiegeEvent`](../SiegeEvent) 持有；菜单和 Mission 选择由 [`PlayerSiege`](../PlayerSiege) 与 [`PlayerEncounter`](../PlayerEncounter) 完成。

## 真实获取示例

在选择 Mission 路径前从真实据点读取阶段：

```csharp
Settlement settlement = PlayerSiege.BesiegedSettlement;
Campaign campaign = Campaign.Current;

if (settlement != null)
{
    Settlement.SiegeState phase = settlement.CurrentSiegeState;
    if (phase == Settlement.SiegeState.OnTheWalls)
    {
        PlayerSiege.StartSiegeMission();
    }
}
```

关键是读取保存的值，而不是强制修改枚举。`InTheLordsHall` 值必须交给活动遭遇/菜单流程，而不是墙上部署。

## 崩溃与存档边界

- 不要赋值 `CurrentSiegeState`；setter 是私有的，阶段转换必须与围城事件和据点清理保持一致。
- 不要把任意整数转换为 `Settlement.SiegeState`。围城 Mission 会显式检查 `Invalid`，这可能触发失败断言。
- 不要在 `InTheLordsHall` 打开墙上部署 Mission；场景、城墙生命比例和部署武器都是为 `OnTheWalls` 选择的。
- `OnTheWalls` 不代表 `Settlement.SiegeEvent` 一定非空。尤其在读档或结束阶段，要同时检查事件和据点。
- 结束流程会重置阶段并清除据点事件。缓存的枚举值可能活得比原事件久；每次进入菜单或 Mission 边界都重新读取 `CurrentSiegeState`。

## 导航

- **父级：** [Campaign API 目录](../)
- **同级：** [`Settlement`](../Settlement)、[`SiegeEvent`](../SiegeEvent)、[`PlayerSiege`](../PlayerSiege)、[`SiegeEventManager`](../SiegeEventManager)
- **相关：** [`PlayerEncounter`](../PlayerEncounter)、[`CampaignMission`](../CampaignMission)、[`ISiegeEventSide`](../ISiegeEventSide)
