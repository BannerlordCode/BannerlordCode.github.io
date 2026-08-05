---
title: "SiegeAmbushEventComponent"
description: "围城出击伏击使用的 MapEvent 组件，从 BesiegerCamp 获取模拟上下文并保持 Encounter 生命周期。"
---
# SiegeAmbushEventComponent

**命名空间：** `TaleWorlds.CampaignSystem.MapEvents`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public class SiegeAmbushEventComponent : MapEventComponent`  
**基类：** [MapEventComponent](../MapEventComponent)  
**源码文件：** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.MapEvents/SiegeAmbushEventComponent.cs`

## 一句话职责

它标识围城伏击 `MapEvent`，并根据围城营地位置提供军事力量模型所需的模拟上下文。

## 心智模型

这是出城伏击分支的窄组件，不是通用围城控制器。`PlayerEncounter.StartBattleInternal` 在 `_isSallyOutAmbush` 为真时选择它。`CreateSiegeAmbushEvent` 创建 `MapEvent`，构造组件，初始化攻击方与防守方，登记到 `Campaign.Current.MapEventManager`，再返回组件。

和强征村庄组件不同，本类没有 `OnInitialize`、`OnBeforeFinalize` 或 `OnFinalize` 重写。它唯一的事件策略是 `SimulationContext`：读取攻击方领袖的 `SiegeEvent.BesiegerCamp.LeaderParty.Position`，再由 `MilitaryPowerModel` 根据该位置选择上下文。事件结算和清理由 [MapEvent](../MapEvent) 及其他协议负责。

## 何时使用，何时不要使用

- 围城伏击活动期间，读取 `PlayerEncounter.Battle?.Component` 或 `MapEvent.IsSiegeAmbush`。
- 让玩家 Encounter 流程调用 `CreateSiegeAmbushEvent`；不要用公开构造函数绕过 `MapEvent.Initialize` 和管理器登记。
- 诊断需要使用同一军事力量上下文时，读取组件的 `SimulationContext`。
- 不要把围城状态放进组件，不要替换 `SiegeEvent`，也不要手动结束战斗。
- 如果攻击方领袖没有 `SiegeEvent` 或 `BesiegerCamp`，不要调用 `SimulationContext`；源码假定这是围城伏击形状。

## 依赖关系

```text
PlayerEncounter._isSallyOutAmbush
  -> SiegeAmbushEventComponent.CreateSiegeAmbushEvent
  -> MapEvent.Initialize(attacker, defender, component)
  -> BesiegerCamp.LeaderParty.Position -> MilitaryPowerModel
  -> MapEvent 模拟和正常结束
```

- 事件宿主：[MapEvent](../MapEvent) 持有参战方、战斗状态、位置和清理过程。
- Encounter 入口：[PlayerEncounter](../PlayerEncounter) 为伏击分支选择工厂。
- 围城输入：[SiegeEvent](../SiegeEvent) 与 [BesiegerCamp](../BesiegerCamp) 提供上下文位置。
- 模型：[MilitaryPowerModel](../MilitaryPowerModel) 把 Campaign 位置转换为 [MapEvent](../MapEvent) 力量上下文。
- 登记与存档：[MapEventManager](../MapEventManager) 登记事件，组件属于事件存档图。

## 状态与操作

| 成员 | 含义与时机 |
|---|---|
| `MapEvent` | 由工厂传入或由基类读档路径恢复的事件引用。 |
| `SimulationContext` | 读取围城营地领袖位置，再查询 `Campaign.Current.Models.MilitaryPowerModel`。 |
| `SiegeAmbushEventComponent(MapEvent)` | 源码公开构造函数，但正常调用仍应使用工厂，让初始化和登记保持一致。 |
| `CreateSiegeAmbushEvent` | 创建、初始化、登记并返回伏击组件。 |

## 真实示例

安全的观察路径是活动玩家战斗：

```csharp
using TaleWorlds.CampaignSystem.Encounters;
using TaleWorlds.CampaignSystem.MapEvents;

MapEvent battle = PlayerEncounter.Battle;
if (battle?.Component is SiegeAmbushEventComponent ambush && battle.IsSiegeAmbush)
{
    MapEvent.PowerCalculationContext context = ambush.SimulationContext;
}
```

源码只有在围城 Encounter 已建立攻击方和防守方后才进入此路径。自定义 Encounter 在读取上下文前也必须保持这个不变量。

## 风险与存档边界

- `SimulationContext` 会解引用攻击方领袖的 `SiegeEvent`、`BesiegerCamp` 和领袖位置。对非围城事件调用可能直接失败。
- 构造函数虽然公开，却不会初始化参战方或登记事件；单独构造会留下不完整的对象图。
- 工厂使用默认 `MapEvent.Initialize` 完成事件身份和参战方绑定。不要改成直接给已有事件赋组件。
- 本组件没有专门的结束 hook。需要完成通知时应观察外层 `MapEvent` 生命周期，而不是等待本类事件。
- `MapEvent` 和围城对象属于存档/运行时状态。事件结束后释放缓存，读档后重新取得当前事件。

## 版本说明

本页依据 v1.4.5 `SiegeAmbushEventComponent`、`PlayerEncounter.StartBattleInternal`、`MapEvent.IsSiegeAmbush` 和 `MilitaryPowerModel` 上下文查询编写。伏击分支和构造函数可见性可能随版本变化。

## 导航

- 父级：[Campaign API](../)
- 同级：[MapEventComponent](../MapEventComponent) · [ForceSuppliesEventComponent](../ForceSuppliesEventComponent) · [ForceVolunteersEventComponent](../ForceVolunteersEventComponent) · [BlockadeBattleMapEvent](../BlockadeBattleMapEvent)
- 相关：[MapEvent](../MapEvent) · [PlayerEncounter](../PlayerEncounter) · [SiegeEvent](../SiegeEvent) · [BesiegerCamp](../BesiegerCamp) · [MilitaryPowerModel](../MilitaryPowerModel)
- English: [SiegeAmbushEventComponent](../../../../en/api/campaign/SiegeAmbushEventComponent)
