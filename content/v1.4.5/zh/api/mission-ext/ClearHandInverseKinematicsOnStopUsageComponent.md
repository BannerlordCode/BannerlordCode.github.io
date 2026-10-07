---
title: "ClearHandInverseKinematicsOnStopUsageComponent"
description: "九行的收尾组件：挂在 StandingPoint 上，Agent 停止使用该物件时把手部 IK 锁解除掉。攻城器与攻城塔用它避免操作兵的手焊死在武器上。"
---

# ClearHandInverseKinematicsOnStopUsageComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ClearHandInverseKinematicsOnStopUsageComponent : UsableMissionObjectComponent`
**Base:** `UsableMissionObjectComponent`
**File:** `TaleWorlds.MountAndBlade/ClearHandInverseKinematicsOnStopUsageComponent.cs`

## 概述

全文 9 行，一个 override、一个语句：`protected internal override void OnUseStopped(Agent userAgent, bool isSuccessful = true)`（`ClearHandInverseKinematicsOnStopUsageComponent.cs:5`）里只有 `userAgent.ClearHandInverseKinematics();`（`:7`）。它解决的是一个具体的动画 bug：**攻城器、攻城塔、投石车这类物件的操作位会把手部 IK 锁到武器握点上，Agent 从操作位下来之后手还保持着握姿挂在那儿。** 这个组件在「停止使用」这一刻把锁解掉。

它是被 [Agent](../../mission/Agent/) 的手部 IK 体系配套使用的另一半。`Agent.SetHandInverseKinematicsFrameForMissionObjectUsage`（`Agent.cs:2595`）在使用期间逐帧把手绑到物件的 IK frame 上（`Agent.cs:2599`），而本组件负责在停用时调 `Agent.ClearHandInverseKinematics()`（`Agent.cs:3832`）把它擦掉——真正的 native 调用在 `MBAPI.IMBAgent.ClearHandInverseKinematics(GetPtr())`（`Agent.cs:3834`），接口声明在 `IMBAgent.cs:648`。

v1.4.5 里它被挂在 **7 个位置**（实测 grep，全部是 `AddComponent`）：

| 挂载点 | 位置 | 挂的是哪个对象 |
| --- | --- | --- |
| `Ballista` | `Ballista.cs:140` | `base.PilotStandingPoint` |
| `BatteringRam` | `BatteringRam.cs:261` | 循环里的 `standingPoint` |
| `Mangonel` | `Mangonel.cs:246` | 循环里的 `base.StandingPoints[i]` |
| `SiegeLadder` | `SiegeLadder.cs:323` | `_attackerStandingPoints[i]` |
| `SiegeTower` | `SiegeTower.cs:717` | `OnInit()`（`SiegeTower.cs:593`）里的循环，变量 `standingPoint` |
| `SiegeWeaponMovementComponent` | `SiegeWeaponMovementComponent.cs:114` | 循环里的 `_standingPoints[i]` |
| `Trebuchet` | `Trebuchet.cs:210` | `OnInit()`（`Trebuchet.cs:172`）里的循环，变量 `base.StandingPoints[j]` |

七处全在攻城器械与攻城塔上——**这不是通用组件，是攻城机制的补丁。**

## 心智模型

把它当成**「退租时扫尾」的钩子**，不是持续行为。四条推论：

第一，**它只在「停止使用」这一刻被调一次，不参与任何 tick。** `UsableMissionObject.OnUseStopped` 遍历 `_components` 逐个调 `component.OnUseStopped(userAgent, isSuccessful)`（`UsableMissionObject.cs:410` 到 `:412`）。而 `UsableMissionObject.GetTickRequirement()`（`UsableMissionObject.cs:494`）只在某个组件的 `IsOnTickRequired()` 为真时才加 `TickRequirement.Tick`（`:504-509`）——本类**没有 override** `IsOnTickRequired()`，吃的是基类默认 `return false;`（`UsableMissionObjectComponent.cs:23-25`）。**所以挂上它不会给这个物件带来任何逐帧开销。**

第二，**它拿不到 `preferenceIndex`。** 调用链上游是 `CurrentlyUsedGameObject.OnUseStopped(this, isSuccessful, _usedObjectPreferenceIndex)`（`Agent.cs:3968`），`UsableMissionObject.OnUseStopped` 签名有第三个参数 `int preferenceIndex`（`UsableMissionObject.cs:408`），但转发给组件时只传了前两个（`:412`）。**组件层永远不知道是哪一个使用偏好槽位停的。**

第三，**`isSuccessful` 被收下但完全不用。** 组件签名收了它（`ClearHandInverseKinematicsOnStopUsageComponent.cs:5`），函数体里一个字节都没用（`:7`）。**使用失败导致中断时照样清 IK。** 对这个用途来说是合理的（手不能留在枪上），但如果你基于它推断「失败路径会被区别对待」，那是错的。

第四，**顺序上它跑在 `StandingPoint` 清 target frame 之前。** [StandingPoint](../StandingPoint/) override 了 `OnUseStopped`（`StandingPoint.cs:289`），先 `base.OnUseStopped(userAgent, isSuccessful, preferenceIndex)`（`StandingPoint.cs:291`）——所有组件在这里被调——再在 `LockUserFrames || LockUserPositions` 时 `userAgent.ClearTargetFrame()`（`StandingPoint.cs:294`）。**所以解 IK 那一刻 Agent 仍然被锁在操作位的 frame 上。** 想改这个顺序只能自己 override `StandingPoint.OnUseStopped`。

还有一个反向推论：**7 个挂载点里有 6 个的器械本体还自己调了一次 `ClearHandInverseKinematics()`**（`BatteringRam.cs:366`、`Mangonel.cs:460`、`Mangonel.cs:471`、`SiegeLadder.cs:1074`、`SiegeTower.cs:878`、`SiegeWeaponMovementComponent.cs:337`、`Trebuchet.cs:512`、`Trebuchet.cs:522`）。也就是说引擎在这些地方是**双保险**。你在自定义攻城器械上只挂组件，行为上和官方一致；想省事就别两处都写。

## 如何使用

**拿法：** 它没有入口 API，唯一用法是 `AddComponent` 到一个 [UsableMissionObject](../UsableMissionObject/)（通常是 [StandingPoint](../StandingPoint/)）上。`AddComponent` 会 `_components.Add(component)`（`UsableMissionObject.cs:261`）、调 `component.OnAdded(base.Scene)`（`:262`）、再 `SetScriptComponentToTick(GetTickRequirement())`（`:263`）刷新 tick 需求。

```csharp
using TaleWorlds.MountAndBlade;

// StandingPoints 是 UsableMachine.cs:55 上的 public MBList<StandingPoint>，元素顺序即操作位序号
foreach (StandingPoint standingPoint in mySiegeWeapon.StandingPoints)
{
    standingPoint.AddComponent(new ClearHandInverseKinematicsOnStopUsageComponent());
}
```

**最容易踩的一条：** 忘了组件只处理「停止使用」，**不处理「开始使用」**。你的物件如果在 `OnUse` 里自己 `SetHandInverseKinematicsFrameForMissionObjectUsage(...)` 设了 IK，而 Agent 是**被击杀 / 掉线 / 任务直接结束**导致 `OnUseStopped` 根本没走，那只手就永远留在握姿上。官方器械靠 `Agent.cs:2603`（动作权重归零时兜底清）救场，你的自定义物件未必有那条路。

## 关键成员

本类**只有一个成员**——它 override 的那个方法。

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 类声明 | `public class ClearHandInverseKinematicsOnStopUsageComponent : UsableMissionObjectComponent`（`:3`） | 无字段、无构造、无公开成员。纯行为片段，`namespace TaleWorlds.MountAndBlade;` 是文件第 1 行、无 `using`——**它不依赖任何命名空间解析，全靠基类与参数类型。** |
| `OnUseStopped` | `protected internal override void OnUseStopped(Agent userAgent, bool isSuccessful = true)`（`:5`） | **本类唯一的行为。** 唯一语句是 `userAgent.ClearHandInverseKinematics();`（`:7`）。`isSuccessful` 形参在此被声明但**从未读取**——使用失败也会执行清理。默认参数 `= true` 继承自基类声明（`UsableMissionObjectComponent.cs:44`），本类重复写了它。 |
| `IsOnTickRequired` | **未 override**，吃基类 `public virtual bool IsOnTickRequired()`（`UsableMissionObjectComponent.cs:23`，`return false;` 在 `:25`） | 本类**没有**这一行。含义是：挂上它不会让宿主物件进入逐帧 tick 状态（判定逻辑在 `UsableMissionObject.cs:504-509`）。想让它每帧跑就得自己 override 成 `true`。 |

## 真实示例

挂到一个自定义攻城器械的操作位上（对齐官方 `SiegeTower.cs:717` 的写法）：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyModSiegeWeapon : SiegeWeapon
{
    // OnInit 的虚声明在 ScriptComponentBehavior.cs:180；
    // 官方 Trebuchet.cs:172 与 SiegeTower.cs:593 就是在这个钩子里挂组件的。
    protected internal override void OnInit()
    {
        base.OnInit();

        // 官方 7 处挂载点之一：Trebuchet.cs:210 就是 base.StandingPoints[j].AddComponent(...)
        for (int j = 0; j < StandingPoints.Count; j++)
        {
            StandingPoints[j].AddComponent(new ClearHandInverseKinematicsOnStopUsageComponent());
        }
    }
}
```

确认它确实挂在上面，并确认它不会带来 tick 开销（对应 `UsableMissionObject.cs:273-275` 与 `:494-512`）：

```csharp
using TaleWorlds.MountAndBlade;

StandingPoint spot = mySiegeWeapon.StandingPoints[0];

// UsableMissionObject 只暴露 GetComponent<T>（UsableMissionObject.cs:273），
// 没有枚举全部组件的公开 API —— 想确认挂没挂，只能按类型逐个查。
if (spot.GetComponent<ClearHandInverseKinematicsOnStopUsageComponent>() == null)
{
    spot.AddComponent(new ClearHandInverseKinematicsOnStopUsageComponent());
}

// 本组件 IsOnTickRequired() 继承基类返回 false（UsableMissionObjectComponent.cs:25），
// 所以 GetTickRequirement()（UsableMissionObject.cs:494）里 504-509 那个循环对本组件不会命中，
// 不会凭它把宿主物件拉进逐帧 tick。
```

需要「当前操作位是谁」时的读法（`UserAgent` 是 `UsableMissionObject` 的公开属性）：

```csharp
using TaleWorlds.MountAndBlade;

StandingPoint spot = mySiegeWeapon.StandingPoints[0];
Agent slotOperator = spot.UserAgent;   // 没人用时为 null

if (slotOperator != null && spot.GetComponent<ClearHandInverseKinematicsOnStopUsageComponent>() != null)
{
    Debug.Print("slot operator index = " + slotOperator.Index, 0);   // Agent.Index 见 Agent.cs:853
}
```

想加一层自己的收尾逻辑，就继承它并追加（注意 `protected internal` 在程序集外只表现为 `protected`，派生类仍然可以 override）：

```csharp
using TaleWorlds.MountAndBlade;

public class MyModHandCleanupComponent : ClearHandInverseKinematicsOnStopUsageComponent
{
    protected internal override void OnUseStopped(Agent userAgent, bool isSuccessful = true)
    {
        base.OnUseStopped(userAgent, isSuccessful);   // 先解 IK（源码 :7）

        if (!isSuccessful)
        {
            // 注意：基类对 isSuccessful 毫无反应，这里是你唯一能区分成功/失败的地方
            MBDebug.Print("hand usage aborted on agent " + userAgent.Index, 0);
        }
    }
}
```

不用组件、手工兜底的做法（等价于引擎在 `Agent.cs:2603` 干的事）：

```csharp
using TaleWorlds.MountAndBlade;

// OnMissionTick 的虚声明在 MissionBehavior.cs:146（MissionLogic 继承它，
// 官方 SallyOutMissionController.cs:75 就是这样 override 的）
public class MyModFallbackCleanup : MissionLogic
{
    public override void OnMissionTick(float dt)
    {
        // agent_action channel 权重为 0 时动作已经不在 IK 姿态上，清一次是安全的。
        // 注意：Mission 上没有 GetActiveAgents()，Agent 集合要从 Team.ActiveAgents 取（Team.cs:102）。
        foreach (Agent agent in Mission.Current.AttackerTeam.ActiveAgents)
        {
            if (agent.GetActionChannelWeight(1) <= 0f)   // Agent.cs:2778
            {
                agent.ClearHandInverseKinematics();       // -> Agent.cs:3832
            }
        }
    }
}
```

## 风险与边界

- **只在 `OnUseStopped` 触发。** 没有 `OnUse` 对称物，没有 `OnMissionReset` 挂钩（基类有 `OnMissionReset`，`UsableMissionObjectComponent.cs:48`，本类未覆盖）。
- **`isSuccessful` 被忽略。** 不要以为失败路径有区别处理。
- **`preferenceIndex` 传不到这一层。** 需要它就得改 `UsableMissionObject.OnUseStopped`（`UsableMissionObject.cs:412`），不是改这个组件。
- **任务异常终止时可能不触发。** Agent 被击杀直接消失时 `OnUseStopped` 不保证被调，IK 可能残留；引擎在 `Agent.cs:2603` 有兜底，你的自定义物件没有。
- **零 tick 需求。** `IsOnTickRequired()` 恒为 `false`（`UsableMissionObjectComponent.cs:25`），别指望它能持续修正姿态。
- **`protected internal override` 而非 `public`。** 你无法从外部用 `component.OnUseStopped(...)` 直接调它——必须经由宿主的 `OnUseStopped`。
- **加上去也可能什么都不发生。** 7 个官方挂载点里 6 个的器械还自己直调了一次 `ClearHandInverseKinematics()`；两处都加只是多一次调用。
- **不是 `Agent` 的替代品。** 它只清 IK，不改动画状态、不改武器持有、不改 stance。

## 依赖关系

- 基类：[UsableMissionObjectComponent](../UsableMissionObjectComponent/)，`OnUseStopped` 的虚声明在 `UsableMissionObjectComponent.cs:44`
- 宿主与分发：[UsableMissionObject](../UsableMissionObject/) 的 `AddComponent`（`:259`）、`RemoveComponent`（`:266`）、`GetComponent<T>`（`:273`）、`OnUseStopped` 分发循环（`:408-415`）、`GetTickRequirement`（`:494`）
- 具体宿主：[StandingPoint](../StandingPoint/)（`StandingPoint.cs:11` 声明为 `UsableMissionObject` 的子类，`OnUseStopped` override 在 `:289`）
- 动作触发端：[Agent](../../mission/Agent/) 的 `OnUseStopped`（`Agent.cs:3420`，**空方法体**）与真正的分发点 `Agent.cs:3968`
- 被清理的那份状态：`Agent.ClearHandInverseKinematics()`（`Agent.cs:3832`）与它的设置侧 `Agent.SetHandInverseKinematicsFrameForMissionObjectUsage`（`Agent.cs:2595`），native 层是 [IMBAgent](../../mission/IMBAgent/) 的 `ClearHandInverseKinematics(UIntPtr)`（`IMBAgent.cs:648`）
- 七个官方挂载点所在的器械：[Ballista](../Ballista/)、[BatteringRam](../BatteringRam/)、[Mangonel](../Mangonel/)、[SiegeLadder](../SiegeLadder/)、[SiegeTower](../SiegeTower/)、[Trebuchet](../Trebuchet/)、[SiegeWeapon](../SiegeWeapon/) 家族
- 同族兄弟组件（都只 override `OnUseStopped`）：[DropExtraWeaponOnStopUsageComponent](../../mission/DropExtraWeaponOnStopUsageComponent/)（`:7`）、[RemoveExtraWeaponOnStopUsageComponent](../RemoveExtraWeaponOnStopUsageComponent/)（`:7`）、[ResetAnimationOnStopUsageComponent](../ResetAnimationOnStopUsageComponent/)（`:22`）、[OverrideStrikeAndDeathActionDuringUsageComponent](../OverrideStrikeAndDeathActionDuringUsageComponent/)（`:20`）、[ResetGravityExclusionAndEntityAttachmentOnStopUsageComponent](../ResetGravityExclusionAndEntityAttachmentOnStopUsageComponent/)（`:20`）
- 桶首页：[mission-ext API 分区](../)
