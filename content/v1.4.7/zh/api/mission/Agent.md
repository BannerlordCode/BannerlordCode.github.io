---
title: "Agent"
description: "战斗中的一个可操作单位：承载角色、队伍、生命、装备、编队归属与动作状态，并提供 500+ 个读写成员。Agent.Main 是玩家单位的全局入口。所有战斗逻辑最终都作用在它身上。"
---
# Agent

**命名空间：** `TaleWorlds.MountAndBlade`
**模块：** `TaleWorlds.MountAndBlade`
**类型：** `public sealed class Agent : DotNetObject, IAgent, IFocusable, IUsable, IFormationUnit, ITrackableBase`
**基类：** `TaleWorlds.DotNet.DotNetObject`，实现 `IAgent`、`IFocusable`、`IUsable`、`IFormationUnit`、`ITrackableBase`
**源文件：** `TaleWorlds.MountAndBlade/Agent.cs`（声明见第 19 行）

## 概述

`Agent` 是战斗中的一个「活着的单位实例」——它不是角色数据（那是 `BasicCharacterObject` / `Hero`），而是这个角色在**当前任务中**的具体化身：它有实时位置、速度、生命值、当前手持武器、所属队伍、在编队中的位置与索引，以及一整套动作状态（攻击、格挡、瞄准、上下马、溃逃、恐慌）。

它实现五个接口，分别对应五种能力：`IAgent`（战斗单位本体）、`IFocusable`（可被交互焦点锁定）、`IUsable`（可使用场景物件）、`IFormationUnit`（编队成员）、`ITrackableBase`（可被追踪 / 索敌）。这五个接口就是它在战斗系统里被不同子系统访问的方式。

500+ 个公开成员里，modder 日常用到的其实集中在一小撮：身份（`Character`、`Team`、`Mission`、`Index`、`IsPlayerControlled`）、生存（`Health`、`HealthLimit`、`Die`、`SetMortalityState`）、装备（`WieldedWeapon`、`TryToWieldWeaponInSlot`、`EquipItemsFromSpawnEquipment`）、位置（`Position`、`Velocity`、`TeleportToPosition`）、编队（`Formation`、`DetachmentIndex`、`Team`），以及静态入口 `Agent.Main`。

## 心智模型

**心智模型一：Agent 是「角色」与「战斗实例」之间的桥。**

- 战役层的 `Hero` / `CharacterObject` 是**持久数据**——活过任务、活过存档。
- 战斗层的 `Agent` 是**临时实例**——任务结束就消失。

从 `Hero` 进入任务时引擎会 spawn 一个 `Agent`，并在 `Agent.Character` 上提供对应角色。要把战斗结果写回战役层，走 [MissionBehavior(../MissionBehavior) 的回调或 `Blow` 事件，而不是直接改 `Agent` 上的字段（改了不会入档）。

**心智模型二：`SetXxx` 与 `SetXxxAsClient` 的区别是联机安全的核心。**

- `SetXxx(...)` —— **服务器权威**修改。改变实际状态，需要在服务器上调用。
- `SetXxxAsClient(...)` —— **向客户端同步**显示用的值（姿势、颜色、弹道、瞄准）。在服务器调用它把状态推给客户端。

**在联机模式下，客户端调 `SetXxx` 不会生效**——这是联机战斗类 mod 最常见的「本地能跑、一联机就无效」。判断规则：影响**实际结果**的（生命、位置、武器、队伍）用服务器侧的 `SetXxx`；影响**表现**的（动画、颜色、旗帜）用 `...AsClient`。

**心智模型三：Agent 会在你脚下消失。**

死亡流程是三段的：`OnEarlyAgentRemoved` → `OnAgentRemoved`（从场景移除）→ `OnAgentDeleted`（彻底删除）。**在 `OnAgentDeleted` 之后访问该 Agent 的任何属性都是未定义行为**。遍历 `mission.Agents` 时另一个 Agent 可能被击杀移除——先复制。

**常见错误**：把 `Agent` 存进静态字段或 Behavior 字段跨任务复用；用 `Health` 而不是 `HealthLimit` 算百分比（`Health` 已经归零而 `MortalityState` 还在 `Alive` 的过渡态是存在的）；在客户端调 `SetTeam`；以及在 `OnAgentRemoved` 里遍历 Agent 集合。

## 何时使用 / 何时不要使用

- **使用**：战斗中读取单位状态（位置、生命、队伍、武器）。
- **使用**：控制单位行为（传送、切换队伍、下令、溃逃）。
- **使用**：装备 / 卸下武器（`TryToWieldWeaponInSlot`、`EquipItemsFromSpawnEquipment`）。
- **使用**：索敌与范围查询（通过 [Mission(../Mission) 的 `GetClosestEnemyAgent` / `GetNearbyEnemyAgents`，不要自己遍历）。
- **不要**：不要跨任务缓存 `Agent` 引用。
- **不要**：不要在客户端调用改变实际状态的 `SetXxx`。
- **不要**：不要在 `OnAgentDeleted` 之后访问该 Agent。

## 成员说明

成员超过 500 项，按用途分成八组。

### 一、全局入口与身份

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `static Agent Main` | 玩家控制的 Agent。**联机客户端上可能是代理对象**，权威数据要看 `MainAgentServer`。 |
| `Mission Mission` | 所属任务。任务结束后该引用失效。 |
| `int Index` | 在所属队伍里的索引。用于稳定的引用排序。 |
| `BasicCharacterObject Character` | 角色模板数据。**它是持久对象**，可以安全地存到任务之外。 |
| `Monster Monster` | 怪物数据（仅怪物单位非 null）。 |
| `Team Team` | 所属队伍。 |
| `bool IsPlayerControlled` | 是否由玩家控制（而非 AI）。 |
| `bool IsFemale` | 性别。外观 / 动画相关。 |
| `TextObject AgentRole` | 单位在队伍中的角色标签（步兵 / 弓箭手 / 骑兵）。 |
| `IAgentOriginBase Origin` | 生成来源（生成点 / 刷兵脚本）。 |
| `Formation Formation` | 所属编队。 |
| `IDetachment Detachment` | 分队（Detachment）归属。 |
| `int DetachmentIndex` / `float DetachmentWeight` | 分队索引与权重。**生成 AI 编队时控制阵型**。 |
| `FormationPositionPreference FormationPositionPreference` | 阵位偏好（哪一排、哪一列）。 |
| `AgentState State` | 单位状态（活跃 / 倒地 / 被俘等）。 |
| `FormationClass` 相关成员 | 编队类别。 |

### 二、生命与死亡

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `float Health` | 当前生命。**已归零但 `MortalityState` 仍是 `Alive` 的过渡态存在**——判断生死用 `CurrentMortalityState`。 |
| `float HealthLimit` | 生命上限。算百分比必须用它。 |
| `float BaseHealthLimit` | 基础生命上限（不含装备加成）。 |
| `float Damage` | 已承受的累计伤害。 |
| `Agent.MortalityState CurrentMortalityState` | 死亡状态（`Alive` / `Dying` / `Dead`）。**判断「还活着吗」的权威字段**。 |
| `void Die(...)` | 杀死该 Agent。**会触发整套死亡回调**——在这些回调里遍历集合会抛异常。 |
| `void SetMortalityState(...)` | 直接设置死亡状态（跳过死亡动画 / 立即移除）。 |
| `void ToggleInvulnerable(...)` | 切换无敌。**无敌英雄类效果的标准入口**。 |
| `void RestoreShieldHitPoints()` | 恢复盾牌耐久。 |
| `void ChangeWeaponHitPoints(...)` | 修改武器耐久。 |
| `int LastBlowOwnerId` / `AgentAttackType LastBlowAttackType` | 造成最后一击的来源与攻击类型。用于「补刀判定」「凶手追踪」。 |
| `int KillCount` | 击杀数。 |
| `const float HealthDyingThreshold = 1f` | 濒死阈值常量：生命降到此值以下进入濒死表现。 |

### 三、武器与装备

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `MissionWeapon WieldedWeapon` / `WieldedOffhandWeapon` | 当前主手 / 副手武器。**注意类型是 `MissionWeapon`（值类型）而不是引用**。 |
| `WeaponInfo GetWieldedWeaponInfo(...)` | 取手持武器的详细定义（弹药、伤害、重量）。**伤害计算的标准入口**。 |
| `bool HasRangedWeapon` / `bool HasWeapon` | 是否有远程 / 任何武器。 |
| `void TryToWieldWeaponInSlot(EquipmentIndex slot)` | 切换到指定槽位的武器。 |
| `void TryToSheathWeaponInHand()` | 收武器。 |
| `void WieldNextWeapon()` | 换下一把武器。 |
| `void EquipItemsFromSpawnEquipment()` | 按生成装备配置穿上全部装备。**生成单位后必须调用，否则裸手**。 |
| `void WieldInitialWeapons()` | 装备初始武器。 |
| `void DropItem()` | 丢弃当前物品。 |
| `void EquipWeaponFromSpawnedItemEntity(...)` / `RemoveEquippedWeapon(...)` / `AttachWeaponToBone(...)` / `AttachWeaponToWeapon(...)` | 武器实体挂载。 |
| `Equipment Equipment` | 装备容器。 |
| `void SetWeaponAmountInSlot(...)` | 设置槽位里的弹药量。 |
| `void SetWeaponAmmoAsClient(...)` / `SetWeaponReloadPhaseAsClient(...)` / `ReloadAmmoInSlot(...)` | 弹药与装填（客户端同步 / 服务器权威）。 |

### 四、位置与移动

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `Vec3 Position` | 世界坐标。 |
| `Vec2 MovementVelocity` / `Vec3 Velocity` | 当前速度。 |
| `AgentMovementMode MovementMode` | 移动模式（行走 / 奔跑 / 冲刺）。 |
| `Agent.MovementControlFlag MovementFlags` | 移动控制标志位（前进 / 后退 / 左右 / 上下）。 |
| `float WalkMode` / `CrouchMode` | 行走 / 蹲伏模式。 |
| `void TeleportToPosition(Vec3 position)` | 传送。**绕过导航网格**——在玩家视野里瞬移，可能被当作作弊。 |
| `void SetTargetPosition(...)` / `SetTargetPositionAndDirection(...)` | 给 AI 设移动目标。 |
| `void SetTargetPositionSynched(...)` / `SetTargetPositionAndDirectionSynched(...)` | 联机同步版本。 |
| `void StopUsingGameObject()` / `HandleStartUsingAction(...)` / `HandleStopUsingAction(...)` | 使用 / 停止使用场景物件。 |
| `void SetMovementDirection(...)` | 设置移动方向。 |
| `void DisableScriptedMovement(...)` / `DisableScriptedCombatMovement(...)` | 关闭脚本驱动的移动（接管移动权）。 |
| `static Agent.UsageDirection MovementFlagToDirection(Agent.MovementControlFlag flag)` | 把移动标志转成方向向量。 |
| `MovementControlFlag AttackDirectionToMovementFlag(...)` / `DefendDirectionToMovementFlag(...)` | 攻击 / 防御方向转移动标志。 |

### 五、坐骑

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `Agent MountAgent` | 坐骑 Agent。 |
| `Agent RiderAgent` | 骑手 Agent（坐骑反向引用）。 |
| `void Mount(Agent mountAgent, int slotIndex)` | 上马。**会改变队伍结构与武器生效规则**。 |
| `void Dismount(Mount.MountingSlotType ...)` | 下马。 |
| `void EquipWeaponToExtraSlotAndWield(...)` | 装到马上的武器槽并持握。 |
| `bool HasMount()` 类查询 | 是否有坐骑。 |

### 六、动作与战斗状态

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `void SetActionChannel(...)` / `SetCurrentActionProgress(...)` / `SetCurrentActionSpeed(...)` / `SetAttackState(...)` | **服务器权威**的动作控制。直接改动作状态，绕过正常战斗流程。 |
| `void SetActionChannelAsClient(...)` / `SetCurrentActionProgressAsClient(...)` | **客户端显示同步**版本。联机表现层用。 |
| `ActionCodeType GetCurrentAction()` / `ActionType GetCurrentActionType()` / `ActionStage GetCurrentActionStage()` / `int GetCurrentActionPriority()` | 当前动作状态。**每帧变化的字段，不要缓存**。 |
| `void SetWeaponGuard(...)` / `void ResetGuard()` | 格挡状态。 |
| `void SetWatchState(...)` / `WatchState` 相关 | 警戒状态。 |
| `bool IsAlarmStateNormal` / `IsCautious` / `IsPatrollingCautious` / `IsAlarmed` | 警戒等级查询。AI 决策层使用。 |
| `void SetAlarmState(...)` | 设置警戒等级。 |
| `void SetScriptedFlags(...)` / `SetScriptedCombatFlags(...)` / `SetScriptedPosition(...)` / `SetScriptedTargetEntity(...)` | 脚本驱动：把单位完全交给脚本控制。 |
| `bool IsRunningAway` / `void Retreat()` / `void StopRetreating()` | 溃逃状态与控制。 |
| `void StartRagdollAsCorpse()` / `EndRagdollAsCorpse()` / `AddAsCorpse()` / `SetOverridenStrikeAndDeathAction(...)` | 布娃娃尸体与死亡表现。 |

### 七、AI 与决策

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `CommonAIComponent CommonAIComponent` / `HumanAIComponent HumanAIComponent` | AI 组件。需要改 AI 决策时的入口。 |
| `void SetAIBehaviorParams(...)` / `SetAllBehaviorParams(...)` | 设置 AI 行为参数（ aggression 等）。 |
| `void ForceAiBehaviorSelection(...)` | 强制 AI 重新选择行为。 |
| `void SetIsAIPaused(...)` | 暂停 AI。 |
| `Vec3 GetAIMoveDestination()` / `SetAIMoveDestination(...)` | AI 移动目标。 |
| `void SetAIInstructionAITarget(...)` 类方法 | 给 AI 下达指令（跟随、攻击、驻守）。 |
| `void ResetEnemyCaches()` | 重置敌对缓存。角色切换 / 队伍变更后必须调用。 |
| `void InvalidateAIWeaponSelections()` | 让 AI 重新选择武器。 |
| `bool CanReachAgent(...)` / `CanInteractWithAgent(...)` / `CanReachAndUseObject(...)` / `CanMoveDirectlyToPosition(...)` | 可达性 / 交互性查询。**AI 与 mod 的前置检查**，比直接执行再处理失败更省。 |

### 八、事件与回调

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `event Action OnAgentMountedStateChanged` | 上下马状态变化。**事件挂在实例上，Agent 销毁后不再触发**。 |
| `event Action<ItemObject> OnAgentWieldedItemChange` | 手持物品变化。 |
| `void OnFocusGain()` / `void OnFocusLost()` | 交互焦点获得 / 丢失。 |
| `void YellAfterDelay(...)` / `void MakeVoice(...)` | 喊话。 |
| `void HandleTaunt(...)` / `HandleBark(...)` | 嘲讽 / 吠叫。 |
| `void RegisterBlow(...)` / `CreateBlowFromBlowAsReflection(...)` | 构造并注册命中事件。 |

## 示例

### 示例 1：安全的单位查询与生命判定

判断生死用 `CurrentMortalityState` 而不是 `Health`。

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

Agent player = Agent.Main;
if (player == null || player.Character == null) return;

// 生命百分比必须用 HealthLimit 做分母
float healthPercent = player.HealthLimit > 0f ? player.Health / player.HealthLimit : 0f;

// 权威生死状态
bool alive = player.CurrentMortalityState == Agent.MortalityState.Alive;
```

### 示例 2：生成单位并正确装备

`SpawnAgent` 之后必须调用 `EquipItemsFromSpawnEquipment`，否则单位是裸手。

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

Mission mission = Mission.Current;
if (mission == null) return;

Agent spawned = mission.SpawnAgent( /* 位置、方向、队伍、初始装备等参数 */ );
if (spawned != null)
{
    // 关键：不调用这行，单位不会有武器
    spawned.EquipItemsFromSpawnEquipment();
    spawned.WieldInitialWeapons();
}
```

### 示例 3：联机安全的伤害与无敌

改变实际结果用服务器侧 API；表现才用 `...AsClient`。

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

// 服务器侧：改变实际战斗结果
Agent victim = Agent.Main;
if (victim != null && victim.Mission != null)
{
    victim.ToggleInvulnerable(true);   // 服务器权威
}

// 表现层：只影响显示，用 AsClient 版本推送给客户端
Agent remote = mission.GetClosestEnemyAgent(Agent.Main);
if (remote != null)
{
    remote.SetWeaponAmmoAsClient(EquipmentIndex.Weapon, 0);
}
```

## 风险与边界

- **任务结束后失效**。`Agent` 与 `Mission` 同生共死。存进静态字段、Behavior 字段、UI 缓存都会在下一场战斗里指向已死对象。**需要持久化的是 `Character`（角色模板），不是 `Agent`。**
- **`OnAgentDeleted` 之后不可访问**。三段死亡流程的最后一段完成后，该实例彻底失效，读属性是未定义行为。
- **遍历时可能消失**。`mission.Agents` 是活集合；`foreach` 中调用 `Die()` 会抛 `InvalidOperationException`。先复制。
- **联机下的 `SetXxx` vs `...AsClient`**。改变实际结果的成员必须在服务器调用；客户端调用静默无效——这是联机战斗 mod「本地好用、联机失效」的根因。
- **`Health == 0` 不等于已死**。濒死过渡态里生命先归零、`MortalityState` 稍后才变。逻辑判定用 `CurrentMortalityState`。
- **每帧变化的字段不要缓存**。`Position`、`Velocity`、`GetCurrentAction()`、`GetCurrentActionType()` 在同一帧内也会变（多 tick 逻辑）。跨帧缓存会得到错误位置。
- **`TeleportToPosition` 绕过导航**。它不考虑寻路与阻挡，会把单位送进墙里。
- **`Die` 的连锁反应**。触发死亡回调、掉落、部队解散、AI 重选目标。在这些回调里继续改世界极易抛异常。
- **原生互操作**。`DotNetObject` 基类意味着大量成员穿透到 native（`Vec3`、`MatrixFrame`、骨骼变换）。这些调用必须在主线程且场景已加载。跨线程或跨场景调用会崩。
- **静态成员是纯函数**。`MovementFlagToDirection`、`GetActionDirection`、`GetMonsterUsageIndex`、`GetSoundParameterForArmorType`、`DefaultTauntActions` 都是工具函数，可安全在任何阶段调用（除了场景未加载时）。

## 依赖关系

- 上游 / 提供者：
  - [Mission(../Mission) 生成、持有并管理全部 `Agent`；`Agent.Main` 是其静态入口。
  - [MissionState(../MissionState) 打开任务后随之创建。
- 相互 / 下游：
  - [MissionBehavior(../MissionBehavior) 的绝大多数回调以 `Agent` 为参数——它是战斗逻辑的落点。
  - [Campaign](../../campaign/Campaign) 的 `MainParty` 与 `Agent` 在进入 / 退出战斗时对应。
  - [MBSubModuleBase](../../core/MBSubModuleBase) 的任务初始化钩子负责注册行为。

## 参见

- ↑ 父级：[mission 索引](../)
- ↔ 相关：[Mission](../Mission) · [MissionBehavior](../MissionBehavior) · [MissionState](../MissionState) · [Campaign](../../campaign/Campaign) · [MBSubModuleBase](../../core/MBSubModuleBase)