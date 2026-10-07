---
title: "DropExtraWeaponOnStopUsageComponent"
description: "攻城梯的「推开就丢副武器」组件：OnUseStopped 里四个条件全中才 AddTickAction 丢刀，而客户端与回放都被显式排除——所以它只在服务器执行一次。"
---

# DropExtraWeaponOnStopUsageComponent

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `internal class DropExtraWeaponOnStopUsageComponent : UsableMissionObjectComponent`
**Base:** `UsableMissionObjectComponent`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/DropExtraWeaponOnStopUsageComponent.cs`

## 概述

`DropExtraWeaponOnStopUsageComponent` 是 14 行、1 个方法的可组合组件。它继承 [UsableMissionObjectComponent](../../mission-ext/UsableMissionObjectComponent/)，**只覆盖 `OnUseStopped` 一个钩子**：当 Agent 停止使用这个任务物体时，如果它副手槽里有东西，就往任务 tick 队列里投一个「丢物品」动作。

它**全树只有一个挂载点**：`SiegeLadder.cs:276` 的 `_pushingWithForkStandingPoint.AddComponent(new DropExtraWeaponOnStopUsageComponent());`。

## 心智模型

把它当成**「触发器」而不是「行为」**。三条推论：

第一,**它自己不丢东西，只排队。** `:11` 调 `userAgent.Mission.AddTickAction(Mission.MissionTickAction.DropItem, userAgent, 4, 0)` —— 而 [MissionTickAction.DropItem](../../mission-ext/MissionTickAction/) 是 `Mission.cs:671` 的枚举第 4 个成员，`AddTickAction`（`Mission.cs:3770`）只是 `_tickActions.Add((action, agent, param1, param2))`。**所以真正的丢刀发生在后续某个 tick 里，不是在这个回调里。**

第二,**四个条件是「与」，且第二个是最容易被忽略的。** `:9` 的条件链：`isSuccessful && !GameNetwork.IsClientOrReplay && !userAgent.Equipment[EquipmentIndex.ExtraWeaponSlot].IsEmpty && !Mission.Current.MissionIsEnding`。**`!GameNetwork.IsClientOrReplay` 意味着这段代码只在服务器（或单机）跑** —— 客户端即使满足其余三个条件也不会执行。

第三,`param1 = 4`、`param2 = 0` 是**裸魔法数字**。`AddTickAction` 的签名（`Mission.cs:3770`）是 `(MissionTickAction action, Agent agent, int param1, int param2)`，**没有任何枚举或具名常量解释这两个数**。我确认了 `DropItem` 是 `MissionTickAction` 的第 4 个成员（`:671`，序号 3），但 **`param1=4` 与它是否有关我无法确定** —— 见风险节。

边界：**`internal` 类**，编译期不可引用。但它是**组合式组件**（`AddComponent`），所以 mod 可以给自己的任务物体挂同类组件。

## 如何使用

**怎么拿到它**：**挂到任务物体上。** 官方唯一的挂载点是攻城梯的「用叉推」站点：

```csharp
using TaleWorlds.MountAndBlade;

// 官方挂载点：SiegeLadder.cs:276
//   _pushingWithForkStandingPoint.AddComponent(new DropExtraWeaponOnStopUsageComponent());
// 但 DropExtraWeaponOnStopUsageComponent 是 internal —— mod 编译期写不出这个 new
// mod 只能自己写一个同基类的组件：
public class MyDropWeaponOnStop : UsableMissionObjectComponent
{
    protected internal override void OnUseStopped(Agent userAgent, bool isSuccessful = true)
    {
        // 照抄官方的四条件（DropExtraWeaponOnStopUsageComponent.cs:9）
        if (isSuccessful && !GameNetwork.IsClientOrReplay
            && !userAgent.Equipment[EquipmentIndex.ExtraWeaponSlot].IsEmpty
            && !Mission.Current.MissionIsEnding)
        {
            userAgent.Mission.AddTickAction(Mission.MissionTickAction.DropItem, userAgent, 4, 0);
        }
    }
}
```

**用它最容易踩的一条**：**`isSuccessful` 默认值是 `true`，而调用方可以传 `false`。** `:7` 的签名是 `OnUseStopped(Agent userAgent, bool isSuccessful = true)` —— **不传第二参时按「成功」处理**。所以一个只覆盖了 `OnUseStopped(Agent)` 的调用方（或基类内部转发时漏传）会走「丢刀」分支。**这是本类唯一一个默认值与直觉相反的参数。**

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `OnUseStopped` | `protected internal override void OnUseStopped(Agent userAgent, bool isSuccessful = true)` | **本类的全部（`:7-13`）。** `:9` 的四条件合取：① `isSuccessful`；② `!GameNetwork.IsClientOrReplay`（只在服务器/单机跑）；③ 副武器槽（[EquipmentIndex](../../core-extra/EquipmentIndex/) 的 `ExtraWeaponSlot`）非空；④ `!Mission.Current.MissionIsEnding`（任务不在结束中）。全中才在 `:11` 投 `DropItem` tick 动作。**`isSuccessful` 的默认值 `true` 是本类唯一反直觉的参数。** |

## 真实示例

四个条件各自挡掉什么（这是本类唯一需要理解的东西）：

```csharp
// :9 的四个条件逐个看
// ① isSuccessful              —— 使用被打断（被推开/被打死）时为 false => 不丢刀
// ② !GameNetwork.IsClientOrReplay —— 客户端与回放一律不执行 => 只有服务器/单机会丢
// ③ Equipment[ExtraWeaponSlot].IsEmpty == false —— 副手没东西就不丢
// ④ !Mission.Current.MissionIsEnding —— 任务结束中不丢（避免结束流程里再改装备）
Debug.Print("条件 ② 是网络侧闸门，条件 ④ 是任务生命周期闸门", 0);
```

`AddTickAction` 的排队语义（不是立即执行）：

```csharp
// :11  userAgent.Mission.AddTickAction(Mission.MissionTickAction.DropItem, userAgent, 4, 0);
// Mission.cs:3770  public void AddTickAction(MissionTickAction action, Agent agent, int param1, int param2)
//                { _tickActions.Add((action, agent, param1, param2)); }
// => 只是把元组塞进 _tickActions 列表，真正执行发生在后续 tick
// 对照 Mission.cs:3775 的 AddTickActionMT，它多了 lock (_tickActionsLock) —— 本类用的是无锁版本
Debug.Print("AddTickAction 无锁；AddTickActionMT 有锁 —— 本类用的是前者", 0);
```

## 风险与边界

- **`internal` 类，编译期不可引用。** 但可继承 `UsableMissionObjectComponent` 自己写一个。
- **`isSuccessful` 默认 `true`**，与「停止使用通常意味着失败」的直觉相反。`:7`。
- **`!GameNetwork.IsClientOrReplay` 让它在联机客户端完全不执行。** `:9`。**所以客户端上「推梯子丢刀」这个视觉/状态变化依赖服务器同步，不是本地预测。**
- **`param1 = 4` / `param2 = 0` 是裸数字。** `:11`。`AddTickAction` 的形参名 `param1`/`param2`（`Mission.cs:3770`）本身就说明了源码层面没有语义命名。**我确认了 `DropItem` 是 `MissionTickAction` 的第 4 个成员（序号 3，`Mission.cs:671`），但 `param1=4` 是否指「槽位序号 4」我没有找到阳性证据，故不断言。**
- **`Mission.Current.MissionIsEnding` 是静态依赖。** `:9`。**若这个回调在任务尚未完全建立时触发，`Mission.Current` 为 null 会空引用。**
- **`userAgent.Equipment[...]` 无判空。** `:9`。`userAgent` 为 null 时空引用。
- **用的是无锁的 `AddTickAction`。** `:11` → `Mission.cs:3770`，而带锁版本是 `AddTickActionMT`（`:3775`）。**我确认了本类调的是前者**，但**是否会在多线程下有竞态我不做推断**。
- **只有一个挂载点。** `SiegeLadder.cs:276`。**「推开就丢副武器」这个行为在整个 1.4.5 里只发生在攻城梯上。**

## 参见

- 基类与契约：[UsableMissionObjectComponent](../../mission-ext/UsableMissionObjectComponent/)（被覆盖的钩子是 `OnUseStopped`）
- 排队目标：[MissionTickAction](../../mission-ext/MissionTickAction/)（`Mission.cs:666` 声明，`DropItem` 在 `:671`，序号 3）、`Mission.AddTickAction`（`Mission.cs:3770`）、`Mission.AddTickActionMT`（`:3775`，带锁版）
- 载荷：[Agent](../Agent/)（`userAgent.Equipment`、`userAgent.Mission`）、[EquipmentIndex](../../core-extra/EquipmentIndex/)（`ExtraWeaponSlot`）、[GameNetwork](../../mission-ext/GameNetwork/)（`IsClientOrReplay`）
- 唯一挂载点：`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/SiegeLadder.cs:276`
- 同桶：[AgentHelper](../AgentHelper/)、[Target](../Target/)、[ItemType](../ItemType/)、[HitType](../HitType/)、[DefineGameNetworkMessageType](../DefineGameNetworkMessageType/)、[DefineSynchedMissionObjectType](../DefineSynchedMissionObjectType/)、[ScriptingInterfaceBase](../ScriptingInterfaceBase/)、[ThumbnailDebugUtility](../ThumbnailDebugUtility/)、[ItemInnerData](../ItemInnerData/)、[ItemList](../ItemList/)、[MultiplayerCultureColorInfo](../MultiplayerCultureColorInfo/)
- 桶首页：[mission API 分区](../)