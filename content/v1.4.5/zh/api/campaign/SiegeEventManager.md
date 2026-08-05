---
title: "SiegeEventManager"
description: "v1.4.5 中由 Campaign 持有、负责围城事件注册、Tick 与读档修复的管理器。"
---
# SiegeEventManager

**命名空间：** `TaleWorlds.CampaignSystem.Siege`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public class SiegeEventManager`  
**基类：** 无  
**源码：** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Siege/SiegeEventManager.cs`

## 职责

`SiegeEventManager` 持有战役中的活动 `SiegeEvent` 集合，并为 Campaign 统一提供创建、逐 Tick 更新、移除和读档后修复入口。

## 心智模型

它是战役级服务，不是某个据点的辅助对象，也不是另一份玩家围城状态。新战役创建一个管理器并放入 `Campaign.Current.SiegeEventManager`；`Campaign` 负责保存它、每个战役 Tick 调用 `Tick(float)`，并在存档图恢复后调用 `OnAfterLoad()`。管理器只负责集合生命周期；每个 `SiegeEvent` 才持有被围据点、围城营地、攻城器械和结束规则。

需要检查战役围城列表，或在已经完成遭遇阶段的流程中进入底层创建路径时使用它。普通玩家流程应把创建和 [`PlayerSiege`](../PlayerSiege) 的准备菜单配套使用。不要自行创建第二个管理器、替换 Campaign 属性，或从 Mission/UI 回调手动调用 `Tick`。

## 生命周期与依赖

```text
Campaign.OnNewGameCreatedInternal
  -> new SiegeEventManager()
  -> Campaign.Current.SiegeEventManager
EncounterGameMenuBehavior
  -> StartSiegeEvent(Settlement, MobileParty)
  -> PlayerSiege.StartPlayerSiege(BattleSideEnum.Attacker)
  -> PlayerSiege.StartSiegePreparation()
Campaign.Tick
  -> SiegeEventManager.Tick(dt)
  -> SiegeEvent.Tick(dt)
SiegeEvent 结束
  -> 清理据点/围城营地
  -> 管理器在下一次 Tick 移除 ReadyToBeRemoved 项
```

`_siegeEvents` 使用 `[SaveableField(1)]`，会随 `SiegeEventManager` 的存档定义进入战役存档图。`SiegeEvent` 及其两侧也因此必须留在同一存档关系中；脱离 `StartSiegeEvent` 独立创建管理器或事件都不安全。

相关入口包括 [`Campaign`](../Campaign)、[`SiegeEvent`](../SiegeEvent)、[`Settlement`](../Settlement)、[`MobileParty`](../MobileParty) 和 [`PlayerSiege`](../PlayerSiege)。存档图规则可参见 [`SaveManager`](../../save-system/SaveManager)。

## 公开成员

### `SiegeEvents`

`public MBReadOnlyList<SiegeEvent> SiegeEvents { get; }`

以只读视图返回当前事件列表，可用于按据点查找事件、读取双方状态或构建地图提示。它不是副本，也不是修改入口；不要把它强制转换回可变列表，也不要在可能结束/移除事件的代码之间依赖稳定索引。

### `StartSiegeEvent`

`public SiegeEvent StartSiegeEvent(Settlement settlement, MobileParty besiegerParty)`

创建 `SiegeEvent(settlement, besiegerParty)`，将其加入可存档列表，标记 `settlement.Party` 的视觉状态为脏，并返回事件。它不会打开策略菜单，也不会激活玩家地图状态；这些步骤分别属于 [`PlayerSiege.StartPlayerSiege`](../PlayerSiege) 和 [`PlayerSiege.StartSiegePreparation`](../PlayerSiege)。

调用前必须已经处在合法的据点/围城转换中。游戏菜单流程先结束 `PlayerEncounter`，再使用 `Settlement.CurrentSettlement` 与 `MobileParty.MainParty` 调用它，然后启动玩家流程。

### `Tick`

`public void Tick(float dt)`

遍历所有事件：若 `ReadyToBeRemoved` 已置位，就用交换末项的方式移除；否则向该事件转发 `Tick(dt)`。因此 Tick 期间列表顺序可能变化，调用者不能把 `SiegeEvents` 的索引当作稳定 ID。

这是引擎拥有的更新入口。手动调用会重复推进器械建造、炮击、策略决策和结束时机。

### `OnAfterLoad`

`public void OnAfterLoad()`

向所有读入的 `SiegeEvent` 转发读档后修复。`Campaign.OnSessionStart` 在存档图恢复后、正常会话运行前调用它。Mod 的存档修复应放在自己的存档/会话生命周期中，不要用这个方法代替开始一场新围城。

## 真实获取示例

下面的流程对应游戏菜单进入玩家围城的调用顺序，并额外防止据点已经被围：

```csharp
Settlement settlement = Settlement.CurrentSettlement;
MobileParty besieger = MobileParty.MainParty;

if (settlement != null && settlement.IsFortification && !settlement.IsUnderSiege)
{
    SiegeEvent siegeEvent = Campaign.Current.SiegeEventManager.StartSiegeEvent(settlement, besieger);
    PlayerSiege.StartPlayerSiege(BattleSideEnum.Attacker);
    PlayerSiege.StartSiegePreparation();
}
```

只读检查使用 Campaign 持有的实例和只读列表：

```csharp
foreach (SiegeEvent siegeEvent in Campaign.Current.SiegeEventManager.SiegeEvents)
{
    Settlement settlement = siegeEvent.BesiegedSettlement;
    if (settlement != null && settlement == Settlement.CurrentSettlement)
    {
        PlayerSiege.StartSiegePreparation();
        break;
    }
}
```

## 崩溃与存档边界

- 未加入管理器的 `new SiegeEvent(settlement, besiegerParty)` 不会被管理器 Tick，也不会进入正确的存档图。应在建立据点与围城者关系的同一转换中调用 `StartSiegeEvent`。
- 已有围城的据点再次创建事件，可能让同一据点状态出现多个所有者。先检查 `Settlement.IsUnderSiege`，让已有的 `Settlement.SiegeEvent` 驱动流程。
- 不要从 `CampaignBehavior`、`MissionBehavior` 或菜单回调调用 `Tick`。`Campaign` 已经负责调用；重复调用会使时间推进两次，造成攻城器械或地图事件状态错乱。
- 事件结束后不要无条件长期持有 `SiegeEvent` 引用；再次使用前检查 `ReadyToBeRemoved` 与 `settlement.SiegeEvent`。管理器会在后续战役 Tick 移除已结束项。
- `OnAfterLoad` 属于读档阶段。对尚未完整恢复的事件调用它，可能访问未恢复的营地或据点对象。

## 导航

- **父级：** [Campaign API 目录](../)
- **同级：** [`SiegeEvent`](../SiegeEvent)、[`PlayerSiege`](../PlayerSiege)、[`SiegeStrategy`](../SiegeStrategy)、[`SiegeState`](../SiegeState)
- **相关：** [`Campaign`](../Campaign)、[`Settlement`](../Settlement)、[`MobileParty`](../MobileParty)、[`SaveManager`](../../save-system/SaveManager)
