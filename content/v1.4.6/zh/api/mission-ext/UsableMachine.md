---
title: "UsableMachine"
description: "战场器械的抽象基类：围绕 StandingPoint 组织使用点、操作者与等待位，实现 IFocusable/IOrderable/IDetachment 三接口，是投石车、城门、攻城塔等器械的通用框架。"
---
# UsableMachine

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class UsableMachine : SynchedMissionObject, IFocusable, IOrderable, IDetachment`
**Source:** `TaleWorlds.MountAndBlade/UsableMachine.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`UsableMachine` 是**可被使用的战场器械的基类**——投石车、弩炮、城门、攻城塔、井架等一切"单位要走到某个点才能操作"的器械都继承它。它同时实现三个接口：`IFocusable`（可被玩家聚焦交互）、`IOrderable`（可被 `OrderController` 下达 Use/AttackEntity 等命令）、`IDetachment`（可被 TeamAI 当作 detachment 分配 AI 单位）。

它的核心组织概念是 **StandingPoint**（使用点）：一台器械有若干使用点，每个点同一时刻只能被一个单位占用；一个 PilotStandingPoint 标识"驾驶位"；若干 AmmoPickUpPoints 标识弹药补给点；WaitStandingPoints 提供等待位。`OnInit`（`UsableMachine.cs:444`）在初始化时按标签（`Pilot`/`ammopickup`/`Wait`）把这些点分类收集。

## 心智模型

把它想成一台**有工位、有操作手册、有停机按钮**的机器：

- **StandingPoint 是工位**。`StandingPoints`（`UsableMachine.cs:19`）列出全部工位；每个工位有自己的 GameEntity、用户帧、占用状态。单位"使用器械"在数据层面就是"占了一个 StandingPoint"。`GetValidVacantReachableStandingPointForAgent`（`UsableMachine.cs:233`）等查询方法按距离、可达性、高度差挑工位。
- **Pilot 是操作者**。`PilotStandingPoint`（`UsableMachine.cs:24`）是驾驶位，`PilotAgent`（`UsableMachine.cs:73`）从它推导当前驾驶员。`PilotStandingPointSlotIndex`（`UsableMachine.cs:29`）是它在列表中的下标。
- **WaitFrame 是排队位**。`HasWaitFrame`（`UsableMachine.cs:674`）/ `WaitFrame`（`UsableMachine.cs:684`）/ `WaitEntity`（`UsableMachine.cs:698`）提供"单位在器械旁待命"的位置——`OrderController` 让部队跟随器械时用的就是 WaitEntity。
- **组件是功能插件**。`AddComponent` / `RemoveComponent` / `GetComponent<T>`（`UsableMachine.cs:188` 起）管理 `UsableMissionObjectComponent` 列表——发射、装填、旋转等功能以组件形式挂载，`OnTick` 逐组件驱动。
- **AI 通过 detachment 分配**。作为 `IDetachment`，TeamAI 把 AI 单位当"槽位填充"处理：`GetDetachmentWeightAux`（`UsableMachine.cs:926`）算吸引力，`GetSuitableStandingPointFor`（`UsableMachine.cs:1381`）挑工位，`AddAgentAtSlotIndex`（`UsableMachine.cs:1027`）正式分配。
- **禁用是状态机**。`IsDeactivated`（`UsableMachine.cs:718`）= 手动停用或已摧毁；`Disable`（`UsableMachine.cs:787`）会赶走所有用户、摧毁 detachment、停用工位、停 tick；`Activate`（`UsableMachine.cs:737`）恢复。`IsDisabledForBattleSideAI`（`UsableMachine.cs:753`）在 AI 决策里还额外考虑"敌人靠近"（`EnemyRangeToStopUsing`）。
- **下沉即损毁**。`OnTick`（`UsableMachine.cs:537`）检测器械吃水深度，低于水面自动 `Disable`——水战场景的器械会沉没。

## 怎么用

### 怎么拿到

器械是 Mission 对象，通过 `Mission.Current.MissionObjects` 遍历并按类型筛选，或从 `MissionBehavior` 的子类里直接持有引用。拿到具体子类（如 `SiegeEngine`）后，基类成员直接可用。

### 典型用法

```csharp
// 遍历战场上的器械
foreach (MissionObject mo in Mission.Current.MissionObjects)
{
    if (mo is UsableMachine machine && !machine.IsDestroyed)
    {
        // 读使用点与占用
        int users = machine.UserCountIncludingInStruckAction;
        int slots = machine.GetNumberOfUsableSlots();

        // 玩家聚焦交互
        if (machine.IsFocusable)
        {
            machine.OnFocusGain(Mission.Current.MainAgent);
        }

        // 停用 / 恢复
        machine.Disable();
        machine.Activate();
    }
}
```

mod 想自定义器械行为：继承 `UsableMachine`，实现两个抽象方法 `GetActionTextForStandingPoint`（`UsableMachine.cs:848`，交互提示文本）与 `GetDescriptionText`（`UsableMachine.cs:1387`，描述文本），按需重写 `GetOrder`（`UsableMachine.cs:221`，默认返回 `OrderType.Use`）、`CreateAIBehaviorObject`（`UsableMachine.cs:227`，默认返回 null）、`MaxUserCount`（`UsableMachine.cs:428`，默认取 StandingPoints 数量）等虚方法。

### 坑

- **两个抽象方法必须实现**。`GetActionTextForStandingPoint` 与 `GetDescriptionText` 是 abstract，子类不实现无法编译。
- **标签约定不能错**。`PilotStandingPointTag`（`UsableMachine.cs:1405`）、`AmmoPickUpTag`（`UsableMachine.cs:1408`）、`WaitStandingPointTag`（`UsableMachine.cs:1411`）默认值分别是 `Pilot`/`ammopickup`/`Wait`，`OnInit` 按这些标签分类工位——场景编辑器里实体标签写错会导致 PilotStandingPoint 为 null。
- **Disable 有连锁反应**。它会摧毁 detachment、赶走用户、停用工位、停 tick；`Activate` 只恢复工位停用标记，被赶走的用户不会自动回来。
- **AI 禁用与玩家禁用是两套**。`IsDisabledForBattleSide`（`UsableMachine.cs:747`）只看停用/摧毁；`IsDisabledForBattleSideAI`（`UsableMachine.cs:753`）额外算 `IsDisabledForAI` 与敌人靠近——mod 改 AI 行为时别用错。
- **OnPilotAssignedDuringSpawn 默认断言失败**（`UsableMachine.cs:661`）。有驾驶位的器械子类必须重写它，否则生成驾驶员时直接 FailedAssert。

## 关键成员

| 成员 | 签名 | 作用 | 行号 |
| --- | --- | --- | --- |
| `StandingPoints` | `public MBList<StandingPoint> StandingPoints { get; private set; }` | 全部使用点；器械的一切使用逻辑围绕它展开 | `UsableMachine.cs:19` |
| `PilotStandingPoint` | `public StandingPoint PilotStandingPoint { get; private set; }` | 驾驶位；按 `Pilot` 标签在 OnInit 中识别 | `UsableMachine.cs:24` |
| `PilotStandingPointSlotIndex` | `public int PilotStandingPointSlotIndex { get; private set; }` | 驾驶位在 StandingPoints 中的下标 | `UsableMachine.cs:29` |
| `AmmoPickUpPoints` | `protected internal List<StandingPoint> AmmoPickUpPoints { get; private set; }` | 弹药补给点列表；按 `ammopickup` 标签识别 | `UsableMachine.cs:34` |
| `DestructionComponent` | `public DestructableComponent DestructionComponent { get; private set; }` | 摧毁组件；为 null 表示不可摧毁 | `UsableMachine.cs:44` |
| `IsDestructible` | `public bool IsDestructible` | 是否可摧毁（DestructionComponent 非空） | `UsableMachine.cs:48` |
| `IsDestroyed` | `public bool IsDestroyed` | 是否已摧毁 | `UsableMachine.cs:58` |
| `PilotAgent` | `public Agent PilotAgent` | 当前驾驶员，从 PilotStandingPoint.UserAgent 推导 | `UsableMachine.cs:73` |
| `IsLoose` | `public bool IsLoose` | 是否松散状态；基类恒 false，子类可重写 | `UsableMachine.cs:88` |
| `SinkingReferenceOffset` | `public virtual float SinkingReferenceOffset` | 下沉检测的参考偏移（默认取实体 z 缩放的一半） | `UsableMachine.cs:98` |
| `Ai` | `public UsableMachineAIBase Ai` | 器械 AI 行为对象；首次访问时按 CreateAIBehaviorObject 懒创建 | `UsableMachine.cs:108` |
| `FocusableObjectType` | `public virtual FocusableObjectType FocusableObjectType` | 聚焦类型，默认 Item | `UsableMachine.cs:122` |
| `IsFocusable` | `public virtual bool IsFocusable` | 是否可被玩家聚焦，默认 true | `UsableMachine.cs:132` |
| `CurrentlyUsedAmmoPickUpPoint` | `public StandingPoint CurrentlyUsedAmmoPickUpPoint` | AI 当前正在使用的弹药点；设置会刷新 tick 需求 | `UsableMachine.cs:143` |
| `HasAIPickingUpAmmo` | `public bool HasAIPickingUpAmmo` | AI 是否正在取弹药 | `UsableMachine.cs:158` |
| `IsDisabledForAI` | `public bool IsDisabledForAI { get; protected set; }` | AI 是否被禁用使用；只影响 AI 不影响玩家 | `UsableMachine.cs:169` |
| `UserFormations` | `public MBReadOnlyList<Formation> UserFormations` | 正在使用本器械的 Formation 列表 | `UsableMachine.cs:173` |
| `AddComponent` | `public void AddComponent(UsableMissionObjectComponent component)` | 挂载功能组件并立即 OnAdded | `UsableMachine.cs:188` |
| `RemoveComponent` | `public void RemoveComponent(UsableMissionObjectComponent component)` | 卸载组件 | `UsableMachine.cs:196` |
| `GetComponent<T>` | `public T GetComponent<T>() where T : UsableMissionObjectComponent` | 按类型取组件，无则返回 default | `UsableMachine.cs:204` |
| `GetOrder` | `public virtual OrderType GetOrder(BattleSideEnum side)` | IOrderable 实现：本器械响应什么命令，默认 Use | `UsableMachine.cs:221` |
| `CreateAIBehaviorObject` | `public virtual UsableMachineAIBase CreateAIBehaviorObject()` | 创建器械 AI 行为对象，默认 null（无 AI） | `UsableMachine.cs:227` |
| `GetValidVacantReachableStandingPointForAgent` | `public WeakGameEntity GetValidVacantReachableStandingPointForAgent(Agent agent)` | 给 agent 挑最近的可达空工位（含高度差检查） | `UsableMachine.cs:233` |
| `SetAI` | `public void SetAI(UsableMachineAIBase ai)` | 外部注入 AI 行为对象 | `UsableMachine.cs:269` |
| `GetVacantStandingPointForAI` | `public StandingPoint GetVacantStandingPointForAI(Agent agent)` | 给 AI 挑工位：优先驾驶位，其次按距离与玩家优先惩罚 | `UsableMachine.cs:304` |
| `GetTargetStandingPointOfAIAgent` | `public StandingPoint GetTargetStandingPointOfAIAgent(Agent agent)` | 查 AI agent 正移动向哪个工位 | `UsableMachine.cs:344` |
| `OnMissionEnded` | `public override void OnMissionEnded()` | 战斗结束：赶走所有用户并停用全部工位 | `UsableMachine.cs:357` |
| `UserCountIncludingInStruckAction` | `public int UserCountIncludingInStruckAction` | 当前用户数（含受击动作中的） | `UsableMachine.cs:407` |
| `MaxUserCount` | `public virtual int MaxUserCount` | 最大用户数，默认取 StandingPoints 数量 | `UsableMachine.cs:428` |
| `OnInit` | `protected internal override void OnInit()` | 初始化：收集工位、按标签分类、建摧毁组件与敌人靠近检测 | `UsableMachine.cs:444` |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | 有组件需要 tick、AI 取弹药或下沉中时返回 Tick | `UsableMachine.cs:515` |
| `OnTick` | `protected internal override void OnTick(float dt)` | 每帧：下沉检测、AI 取弹药复位、驱动全部组件 | `UsableMachine.cs:537` |
| `OnFocusGain` | `public virtual void OnFocusGain(Agent userAgent)` | 获得玩家聚焦时通知全部组件 | `UsableMachine.cs:643` |
| `OnFocusLose` | `public virtual void OnFocusLose(Agent userAgent)` | 失去玩家聚焦时通知全部组件 | `UsableMachine.cs:652` |
| `OnPilotAssignedDuringSpawn` | `public virtual void OnPilotAssignedDuringSpawn()` | 生成时驾驶员被分配；基类直接 FailedAssert，有驾驶位必须重写 | `UsableMachine.cs:661` |
| `HasWaitFrame` | `public virtual bool HasWaitFrame` | 是否有等待位（ActiveWaitStandingPoint 非空） | `UsableMachine.cs:674` |
| `WaitFrame` | `public MatrixFrame WaitFrame` | 等待位的全局帧，供部队跟随器械 | `UsableMachine.cs:684` |
| `WaitEntity` | `public GameEntity WaitEntity` | 等待位实体，OrderController 的 FollowEntity 目标 | `UsableMachine.cs:698` |
| `IsDeactivated` | `public virtual bool IsDeactivated` | 是否已停用（手动停用或已摧毁） | `UsableMachine.cs:718` |
| `Deactivate` | `public void Deactivate()` | 手动停用：标记并停用全部工位 | `UsableMachine.cs:727` |
| `Activate` | `public void Activate()` | 恢复：清除停用标记并重新激活工位 | `UsableMachine.cs:737` |
| `IsDisabledForBattleSide` | `public virtual bool IsDisabledForBattleSide(BattleSideEnum sideEnum)` | 对某方是否不可用；基类只看停用/摧毁 | `UsableMachine.cs:747` |
| `IsDisabledForBattleSideAI` | `public virtual bool IsDisabledForBattleSideAI(BattleSideEnum sideEnum)` | AI 视角的不可用：额外算 IsDisabledForAI 与敌人靠近 | `UsableMachine.cs:753` |
| `ShouldAutoLeaveDetachmentWhenDisabled` | `public virtual bool ShouldAutoLeaveDetachmentWhenDisabled(BattleSideEnum sideEnum)` | 停用时是否自动脱离 detachment，默认 true | `UsableMachine.cs:759` |
| `AutoAttachUserToFormation` | `public virtual bool AutoAttachUserToFormation(BattleSideEnum sideEnum)` | 停用时用户是否自动编回原 Formation，默认 true | `UsableMachine.cs:775` |
| `HasToBeDefendedByUser` | `public virtual bool HasToBeDefendedByUser(BattleSideEnum sideEnum)` | 是否需要玩家防守，默认 false | `UsableMachine.cs:781` |
| `Disable` | `public virtual void Disable()` | 彻底停用：赶走用户、摧毁 detachment、停用工位、停 tick | `UsableMachine.cs:787` |
| `GetActionTextForStandingPoint` | `public abstract TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)` | 抽象：交互提示文本，子类必须实现 | `UsableMachine.cs:848` |
| `GetBestPointAlternativeTo` | `public virtual StandingPoint GetBestPointAlternativeTo(StandingPoint standingPoint, Agent agent)` | 工位不可用时的替代工位，默认返回原工位 | `UsableMachine.cs:851` |
| `IsInRangeToCheckAlternativePoints` | `public virtual bool IsInRangeToCheckAlternativePoints(Agent agent)` | 是否处于检查替代工位的距离内 | `UsableMachine.cs:857` |
| `GetWeightOfStandingPoint` | `protected virtual float GetWeightOfStandingPoint(StandingPoint sp)` | 工位对 AI 的吸引力：有 AI 移动向它时 0.2，否则 0.6 | `UsableMachine.cs:910` |
| `GetDetachmentWeightAux` | `protected virtual float GetDetachmentWeightAux(BattleSideEnum side)` | detachment 总吸引力：不可用时空值，有空位 1，否则按评估状态给 0.1/0.01 | `UsableMachine.cs:926` |
| `IsAgentOnInconvenientNavmesh` | `protected virtual bool IsAgentOnInconvenientNavmesh(Agent agent, StandingPoint standingPoint)` | 攻城战专用：agent 是否在难以到达的导航面上 | `UsableMachine.cs:990` |
| `AddAgentAtSlotIndex` | `public void AddAgentAtSlotIndex(Agent agent, int slotIndex)` | 把 agent 正式分配到指定工位：清场、AIMoveTo、从原 Formation 摘出 | `UsableMachine.cs:1027` |
| `SetIsDisabledForAI` | `public void SetIsDisabledForAI(bool isDisabledForAI)` | 设置 AI 禁用标记 | `UsableMachine.cs:1070` |
| `GetNumberOfUsableSlots` | `public int GetNumberOfUsableSlots` | 当前可用工位数 | `UsableMachine.cs:1196` |
| `IsStandingPointAvailableForAgent` | `public bool IsStandingPointAvailableForAgent(Agent agent)` | 是否存在对该 agent 可用的工位 | `UsableMachine.cs:1202` |
| `IsUsedByFormation` | `public bool IsUsedByFormation(Formation formation)` | 某 Formation 是否正在使用本器械 | `UsableMachine.cs:1338` |
| `GetSuitableStandingPointFor` | `protected virtual StandingPoint GetSuitableStandingPointFor(BattleSideEnum side, Agent agent = null, List<Agent> agents = null, List<ValueTuple<Agent, float>> agentValuePairs = null)` | 按 side 与候选 agent 挑合适工位 | `UsableMachine.cs:1381` |
| `GetDescriptionText` | `public abstract TextObject GetDescriptionText(WeakGameEntity gameEntity)` | 抽象：描述文本，子类必须实现 | `UsableMachine.cs:1387` |
| `SetEnemyRangeToStopUsing` | `public void SetEnemyRangeToStopUsing(float value)` | 设置"敌人靠近多少距离内停止使用" | `UsableMachine.cs:1396` |
| `UsableMachineParentTag` | `public const string UsableMachineParentTag = "machine_parent"` | 父实体标签常量；有该标签时从父实体收集工位 | `UsableMachine.cs:1402` |
| `PilotStandingPointTag` | `public string PilotStandingPointTag = "Pilot"` | 驾驶位标签，可在子类改 | `UsableMachine.cs:1405` |
| `AmmoPickUpTag` | `public string AmmoPickUpTag = "ammopickup"` | 弹药点标签 | `UsableMachine.cs:1408` |
| `WaitStandingPointTag` | `public string WaitStandingPointTag = "Wait"` | 等待位标签 | `UsableMachine.cs:1411` |

## 真实示例

自定义一台"可发射的弩炮"子类的骨架：

```csharp
public class MyBallista : UsableMachine
{
    // 两个抽象方法必须实现
    public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)
    {
        return new TextObject("使用弩炮");
    }

    public override TextObject GetDescriptionText(WeakGameEntity gameEntity)
    {
        return new TextObject("一台重型弩炮");
    }

    // 有驾驶位 → 必须重写，否则生成驾驶员时 FailedAssert
    public override void OnPilotAssignedDuringSpawn()
    {
        // 自定义驾驶员分配逻辑
    }

    // 自定义 AI：返回器械 AI 行为对象
    public override UsableMachineAIBase CreateAIBehaviorObject()
    {
        return new MyBallistaAI();
    }
}
```

mod 想让器械在敌人靠近时自动停用，只需设置距离阈值：

```csharp
// 敌人进入 15 米内时 AI 停止使用这台器械
machine.SetEnemyRangeToStopUsing(15f);
// 之后 IsDisabledForBattleSideAI 会在敌人靠近时返回 true
```

## 参见

- [`../MissionObject`](../MissionObject) —— 战场对象基类，UsableMachine 的父类。
- [`../../mission/Agent`](../../mission/Agent) —— 器械的使用者；StandingPoint 的占用者。
- [`../../mission/Formation`](../../mission/Formation) —— 使用器械的部队；UserFormations 跟踪的对象。
- [`../OrderController`](../OrderController) —— 命令通道；`SetOrderWithOrderableObject` 对器械下 Use/AttackEntity 命令。
- [`../Team`](../Team) —— TeamAI 通过 detachment 接口把 AI 单位分配给器械。
- [`../_index`](../_index) —— `mission-ext` 桶全类型索引。

## 导航

- 同桶：[`../Team`](../Team) · [`../MissionLogic`](../MissionLogic) · [`../MissionObject`](../MissionObject)
- 父索引：[`../_index`](../_index)
