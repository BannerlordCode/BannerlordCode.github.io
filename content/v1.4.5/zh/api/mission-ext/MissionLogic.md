---
title: "MissionLogic"
description: "Mission 中负责规则、胜负、结果和撤退流程的 Logic 行为基类；由 MissionLogics 集合轮询并驱动结束时序。"
---

# MissionLogic

**Namespace:** `TaleWorlds.MountAndBlade`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public abstract class MissionLogic : MissionBehavior`  
**Base:** [`MissionBehavior`](../../mission/MissionBehavior)  
**Source:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionLogic.cs`

## 一句话职责

`MissionLogic` 是 `MissionBehavior` 的规则专门化：它让 Mission 能轮询胜负、询问是否允许离场、聚合额外装备，并把战斗结果分发给所有 Logic 行为。

## 心智模型

把它看成“Mission 的规则参与者”，而不是普通事件监听器。`Mission.AddMissionBehavior` 发现 `BehaviorType == Logic` 后把它放入 `MissionLogics`；`Mission` 的结束检查只遍历这个集合。因此，继承 `MissionLogic` 的意义不只是获得更多回调，而是正式加入 Mission 的胜负与结束协议。

它的所有权仍属于宿主 `Mission`：工厂委托返回它，或已打开的 Mission 动态添加它。构造函数里不要读取 `Mission`。当 `MissionEnded` 返回 `true` 时，必须通过 `ref MissionResult` 提供真实结果；返回 `false` 表示规则尚未结束。结果准备好后，Mission 还会给每个 Logic 调 `OnMissionResultReady`，之后才进入显示结果和最终清理。

## 何时用，何时不用

**适合使用：**

- 战斗或小游戏的胜负判定、玩家可否撤退、投降处理和 `MissionResult` 生成。
- 需要在 `OnBattleEnded`、`OnRetreatMission`、`OnSurrenderMission` 或 `OnMissionResultReady` 对 Mission 结果做收尾的规则。
- 根据 `BasicCharacterObject` 为 Mission 聚合额外装备元素。

**不适合使用：**

- 只观察 Agent 命中、场景实体或镜头而不参与规则时；继承 [`MissionBehavior`](../../mission/MissionBehavior) 并返回 `Other`。
- 处理 Campaign 大地图的战争、金钱或关系时；使用相应 Campaign Action/Behavior，不要把存档世界变更塞进结果轮询。
- 在没有确定结果的情况下结束 Mission；`MissionEnded` 必须保持 `false`，而不是返回一个未完整初始化的结果。

## `Logic` 分类契约

源码把 `BehaviorType` 固定实现为 `MissionBehaviorType.Logic`。因此 `Mission` 会同时把该对象放进总 `MissionBehaviors` 和 `MissionLogics`，并在添加时调用 `OnCreated`。不能把 `MissionLogic` 当作 `Other` 行为，也不要在子类覆盖 `BehaviorType` 改变分流结果。

依赖链是：Mission 工厂或 `AddMissionBehavior` 创建并挂载 Logic → Mission 在运行时轮询它 → Logic 设置 `MissionResult` → Mission 调用结果和结束回调 → Mission 进入 `EndMissionInternal`，再调用继承自 `MissionBehavior` 的结束清理。

## 回调与时序

### 初始化、启动与通用 tick

`OnBehaviorInitialize`、`OnCreated`、`EarlyStart`、`AfterStart`、`OnPreMissionTick` 和 `OnMissionTick` 都继承自 `MissionBehavior`。用它们准备队伍、缓存当前 Mission 状态或驱动规则，但不要在构造函数里使用 `Mission`。`MissionLogic` 专属规则回调通常要等部署和场景状态可用后再读取 Agent。

### 结束请求：`OnEndMissionRequest`

Mission 收到离场请求时逐个询问 Logic。回调通过 `out bool canLeave` 和返回值表达策略：

- `canLeave = false`：Mission 立即拒绝离场，不显示返回的 inquiry。
- `canLeave = true` 且返回 `InquiryData`：Mission 暂停活动状态并显示确认询问。
- `canLeave = true` 且返回 `null`：当前 Logic 不阻止离场，继续询问其他 Logic。

这不是胜负判定入口；它决定玩家能否发起离场/撤退流程。真实的 `BaseBattleMissionController` 会在玩家靠近敌人时禁止离场，否则创建撤退询问并把 `Mission.OnEndMissionResult` 作为确认回调。

### 结果判定：`MissionEnded`

Mission 的 `CheckMissionEnded` 会遍历 `MissionLogics`，为每个 Logic 创建一个空的 `MissionResult` 引用并调用 `MissionEnded(ref missionResult)`。第一个返回 `true` 的 Logic 成为结果来源；Mission 设置 `MissionEnded`、保存结果，然后调用所有 Logic 的 `OnMissionResultReady`。

因此实现必须：在条件未满足时返回 `false`；在返回 `true` 的同一调用中写入 `missionResult`；不要依赖其他 Logic 先后顺序，也不要在这里直接调用 `EndMission`。

### 结果显示与战斗结束

- `ShowBattleResults`：Mission 已认定结束后，在最终清理前显示或刷新战斗结果。Mission 会在结束检查周期中调用它，不应把它当作一次性构造函数。
- `OnMissionResultReady`：结果对象已经确定，适合把结果交给 Campaign 侧的结算逻辑或准备 UI 数据。
- `OnBattleEnded`：`Mission.OnEndMissionResult` 先通知所有 Logic，再调用 `RetreatMission`。它表示战斗结果流程已经进入结束阶段。

### 撤退、投降与最终清理

`OnRetreatMission` 和 `OnSurrenderMission` 在对应入口中被调用，随后 Mission 通常调用 `EndMission()`。最终下一阶段进入 `EndMissionInternal`，它会对所有行为调用继承的 `OnEndMissionInternal`。在这些阶段不要再创建 Agent、Team 或长期持有 Mission 对象。

## 关键成员与副作用

| 成员 | 用途与时机 |
|---|---|
| `BehaviorType` | 固定为 `MissionBehaviorType.Logic`，使对象进入 `MissionLogics`。 |
| `OnEndMissionRequest(out bool canLeave)` | 离场请求期间决定阻止、显示 `InquiryData` 或放行；返回询问会暂停活动状态。 |
| `MissionEnded(ref MissionResult missionResult)` | 结束条件检查入口；返回 `true` 时必须同步写入结果。第一个成功的 Logic 获得结果所有权。 |
| `OnBattleEnded()` | `OnEndMissionResult` 触发的结果流程回调，随后会进入撤退/结束。 |
| `ShowBattleResults()` | 结果已被判定后、最终 Mission 清理前的展示阶段。 |
| `OnRetreatMission()` / `OnSurrenderMission()` | 对应离场原因的规则收尾；不要把它们误当成 `OnEndMissionInternal` 的替代品。 |
| `GetExtraEquipmentElementsForCharacter(...)` | Mission 遍历所有 Logic 并合并非空列表；默认返回 `null`，无额外装备时保持 `null`。 |
| `OnMissionResultReady(MissionResult)` | 所有 Logic 都能看到最终结果；适合只读结果并准备下游结算。 |

## 依赖关系

- **宿主：** [`Mission`](../../mission/Mission) 持有 `MissionLogics`，负责结果轮询、结果显示、撤退/投降和 `EndMissionInternal`。
- **基类：** [`MissionBehavior`](../../mission/MissionBehavior) 提供 `Mission` 反向引用、通用 Agent/Team/tick 回调和 `OnRemoveBehavior` 清理入口。
- **场上数据：** [`Agent`](../../mission/Agent)、[`Team`](../Team) 和 [`Formation`](../../mission/Formation) 是胜负和部署规则常用的运行时输入。
- **上游注册：** SandBox 的 [`OpenBattleMission`](../../../../) 以 `MissionState.OpenNew` 和 `InitializeMissionBehaviorsDelegate` 返回 Logic；StoryMode 的 `AchievementsCampaignBehavior` 则在 Mission 开始后动态 `AddMissionBehavior`。
- **下游结果：** `MissionResult`、`InquiryData` 和 Campaign 结算行为消费本页回调的结果；不要在 Logic 内绕过 Mission 直接结束外层 Campaign。

## 风险与崩溃边界

1. **忘记 Logic 分类：** 不是从 `MissionLogic` 继承的监听器不会进入 `MissionLogics`；普通 `MissionBehavior` 不会收到结果轮询。
2. **返回 true 却没有结果：** `MissionEnded` 若返回 `true` 而 `missionResult` 仍为 `null`，下游结果显示和 Campaign 结算可能在错误状态上运行。
3. **重复结束：** 不要在 `MissionEnded` 中直接调用 `EndMission`，也不要在 `OnMissionResultReady` 再次判定或覆盖结果；Mission 负责结束状态机。
4. **错用离场询问：** `canLeave = false` 会立即阻断流程；返回 `InquiryData` 会暂停活动状态。只在规则确实要求玩家确认时返回询问。
5. **阶段性 Agent 引用：** `OnMissionResultReady`、`OnRetreatMission` 和最终清理阶段可能已接近 Agent 移除；不要把旧 Agent、Team 或 Formation 保存到下一场 Mission。
6. **空列表语义：** `GetExtraEquipmentElementsForCharacter` 返回 `null` 是“本 Logic 没有提供”，Mission 会跳过它；返回共享可变列表会把后续修改暴露给聚合结果。

## 真实工厂注册示例

`SandBoxMissions.OpenBattleMission(MissionInitializerRecord rec)` 使用的就是这个入口：Mission 由 `MissionState.OpenNew` 创建，`InitializeMissionBehaviorsDelegate` 返回一组 `MissionBehavior`，其中包含 `BattleEndLogic`、`BattleObserverMissionLogic` 等 `MissionLogic` 派生类。

```csharp
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.Source.Missions;

public sealed class CounterBattleLogic : BaseBattleMissionController
{
    public CounterBattleLogic(bool isPlayerAttacker)
        : base(isPlayerAttacker)
    {
    }

    public override bool MissionEnded(ref MissionResult missionResult)
    {
        if (!Mission.IsDeploymentFinished)
        {
            return false;
        }

        if (Mission.MainAgent == null || !Mission.MainAgent.IsActive())
        {
            missionResult = MissionResult.CreateDefeated(Mission);
            return true;
        }

        return base.MissionEnded(ref missionResult);
    }
}

public static Mission OpenBattleWithCounterLogic(
    MissionInitializerRecord rec,
    bool isPlayerAttacker)
{
    return MissionState.OpenNew(
        "Battle",
        rec,
        (Mission mission) => new MissionBehavior[]
        {
            new CounterBattleLogic(isPlayerAttacker),
            new BattleEndLogic()
        },
        true,
        true);
}
```

This is the same acquisition path as the source factory: the delegate receives the newly created `Mission`, but the behaviors use their host reference only after `AddMissionBehavior` attaches them. For a live Mission, the StoryMode pattern is `Mission.Current.AddMissionBehavior(new AchievementMissionLogic(...))` from `OnMissionStarted`.

## 参见与双向导航

- ↑ 父级（模块索引）：[Mission extensions 模块首页](./)
- ↔ 相关入口：[Mission](../../mission/Mission) · [MissionBehavior](../../mission/MissionBehavior)
- 场上依赖：[Agent](../../mission/Agent) · [Team](../Team) · [Formation](../../mission/Formation)
- 上游模块：[Campaign](../../campaign/Campaign) · [MBSubModuleBase](../../core/MBSubModuleBase)
- 文档规范：[Doc Contract](../../../architecture/doc-contract)
