---
title: "AgentSpawnData"
description: "创建 Agent 时交给 native 的身体参数快照：19 个字段描述体型、视高、跳跃、手臂与坐骑附加量，带 EngineStruct 标记直接过 P/Invoke。"
---

# AgentSpawnData

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public struct AgentSpawnData`
**Base:** 无（值类型，带 `[EngineStruct("Agent_spawn_data", false, null)]`）
**File:** `TaleWorlds.MountAndBlade/AgentSpawnData.cs`

## 概述

`AgentSpawnData` 是一份「造一个人需要多少身体参数」的**过桥数据**。19 个公开字段全部是值类型（`int` / `float` / [Vec3](../../core-extra/Vec3/)），没有任何方法、任何属性。它在 [Mission](../../mission/Mission/) 创建 Agent 的那一刻被 `MonsterExtensions.FillSpawnData()` 从 [Monster](../../core-extra/Monster/) 的 XML 定义填好，然后以 `ref` 形参传给 native 的 `IMBMission.CreateAgent`，引擎据此决定这个单位的体型缩放、胸/骨盆/眼高、跳跃加速度、手臂长度与重量、以及骑手视角与碰撞体的附加偏移。

它与 [AgentCapsuleData](../AgentCapsuleData/) 是同一个 `ref` 参数组里的邻居，但那一个包的是胶囊体、本类型包的是身体比例与眼高。一个决定「撞到谁」，一个决定「看起来多高、镜头在哪、跳多高」。

## 心智模型

把它当成**「spawn 时刻的 Agent 身体快照」**，理解三件事就够了：

第一，**它标了 `[EngineStruct]`，所以它自己就直接过 native 边界**——不像 `AgentCapsuleData` 需要先拆开。`IMBMission.CreateAgent` 的托管侧签名是 `CreateAgent(UIntPtr missionPointer, ulong monsterFlag, int forcedAgentIndex, bool isFemale, ref AgentSpawnData spawnData, ref CapsuleData bodyCapsule, ref CapsuleData crouchedBodyCapsule, ref AnimationSystemData animationSystemData, int instanceNo)`，注意胶囊体那两项是**拆开的 `CapsuleData`**，本类型才是成对的 `ref`。

第二，**它只在创建时读一次，之后不再回写**。全代码库只有三个出现点：`AgentSpawnData.cs:7` 的声明、`MonsterExtensions.cs:134` 的 `FillSpawnData`、`Mission.cs:1634` 与 `:4044` 的传递。没有任何一处创建之后再改这些字段。因此「改了字段为什么没生效」的答案永远是：**那个 Agent 已经建好了，得重建**。

第三，**它是 `struct`，字段可写但改动不进引擎**。`Mission.CreateAgentInternal` 是 `private`，`Mission.CreateAgent(Monster, ...)` 内部直接 `monster.FillSpawnData(null)` 现取现用。modder 若想注入自定义数值，唯一能碰到 native 边界的方式是自己持有 `Mission.Pointer` 走 `MBAPI.IMBMission.CreateAgent`，并自己维护这份结构体——这也是它最常见的误用点：写了一份数据却从未交给任何东西。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `HitPoints` | `public int HitPoints`（字段） | 怪物/单位的初始血量。与 [Monster](../../core-extra/Monster/) 的 `HitPoints` 同源，写 0 会造出一个一碰就死的单位。 |
| `MonsterUsageIndex` | `public int MonsterUsageIndex`（字段） | 告知引擎这个 Agent 要占哪个「生物使用槽位」，由 `Agent.GetMonsterUsageIndex(monster.MonsterUsage)` 算出。它决定这条 Agent 复用哪一份 native 侧骨架/动画资源池，填错通常表现为动作异常而非崩溃。 |
| `Weight` | `public int Weight`（字段） | 骑乘重量。`FillSpawnData(mountItem)` 在传了坐骑物品时用 `mountItem.Weight` 覆盖，否则用 `monster.Weight`——所以**同一份数据在「有马」和「没马」两种生成路径下这个字段不同**。 |
| `StandingChestHeight` / `StandingPelvisHeight` | `public float ...`（字段） | 站立时胸部与骨盆的高度，是近战命中判定选择「打身体哪个高度」的锚点。数值错了会导致明明面对面却判定成打空。 |
| `StandingEyeHeight` / `CrouchEyeHeight` / `MountedEyeHeight` | `public float ...`（字段） | 站/蹲/骑三种姿态的视高。相机高度、AI 索敌时的「眼睛位置」都取自这里。 |
| `RiderEyeHeightAdder` / `RiderCameraHeightAdder` | `public float ...`（字段） | 骑手在坐骑之上的额外眼高与镜头抬高量。第三方生物（自定义坐骑）最容易需要调的就是这两项。 |
| `RiderBodyCapsuleHeightAdder` / `RiderBodyCapsuleForwardAdder` | `public float ...`（字段） | 骑手碰撞胶囊相对坐骑的抬升与前伸偏移。与 [AgentCapsuleData](../AgentCapsuleData/) 的两个胶囊体配合使用：坐骑有自己的胶囊，骑手要在这两个附加量之外另算。 |
| `JumpAcceleration` / `JumpSpeedLimit` | `public float ...`（字段） | 跳跃的加速度与速度上限。影响滞空时间与飞跃障碍的可行性，不是「角色属性」而是「引擎里的运动参数」。 |
| `ArmLength` / `ArmWeight` | `public float ...`（字段） | 手臂长度与手臂质量。手臂长度参与武器挥舞的惯性与格挡时机计算；手臂质量影响被击退/受冲击的位移。 |
| `RelativeSpeedLimitForCharge` | `public float RelativeSpeedLimitForCharge`（字段） | 发起冲锋的相对速度上限，用来防止贴脸的单位以近乎零的相对速度触发冲锋判定。 |
| `EyeOffsetWrtHead` / `FirstPersonCameraOffsetWrtHead` | `public Vec3 ...`（字段） | 眼睛与第一人称镜头相对头部骨骼的偏移。改这个能修「第一人称视角眼位偏高/偏低」，是最常被 mod 调的两个字段。 |

## 真实示例

从 `Monster` 取一份生产值（官方唯一推荐的方式，`FillSpawnData` 会把 19 个字段全部填满）：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

// id 必须取自模块 XML 的 <Monster id="...">，本仓库只有 .cs 源码、无法核对具体字符串
Monster monster = MBObjectManager.Instance.GetObject<Monster>("cattle");
if (monster == null)
{
    Debug.Print("monster id not found", 0);
    return;
}

AgentSpawnData spawn = monster.FillSpawnData(null);
Debug.Print("hp=" + spawn.HitPoints + " usage=" + spawn.MonsterUsageIndex, 0);
Debug.Print("stand eye=" + spawn.StandingEyeHeight + " mount eye=" + spawn.MountedEyeHeight, 0);
Debug.Print("rider eye adder=" + spawn.RiderEyeHeightAdder + " cam adder=" + spawn.RiderCameraHeightAdder, 0);
```

传了坐骑物品时 `Weight` 会被覆盖——这是同一份结构体在两条生成路径下唯一明确不同的字段：

```csharp
ItemObject harness = MBObjectManager.Instance.GetObject<ItemObject>("horse_harness");
AgentSpawnData mounted = monster.FillSpawnData(harness);
Debug.Print("mounted weight=" + mounted.Weight + " (unmounted would be monster.Weight)", 0);
```

自己构造并修改本地副本（注意：改完不会影响任何已存在的 Agent）：

```csharp
using TaleWorlds.Engine;
using TaleWorlds.Library;
using TaleWorlds.MountAndBlade;

AgentSpawnData custom = monster.FillSpawnData(null);
// 值类型：这里是本地副本
custom.StandingEyeHeight = 1.95f;
custom.RiderCameraHeightAdder = 1.15f;
custom.ArmLength = 0.72f;
Debug.Print("custom eye=" + custom.StandingEyeHeight, 0);
```

判断一份 spawn 数据是否自洽（蹲姿眼高不应高于站姿眼高）：

```csharp
AgentSpawnData spawn = monster.FillSpawnData(null);
if (spawn.CrouchEyeHeight > spawn.StandingEyeHeight)
{
    Debug.Print("suspicious: crouch eye above standing eye for " + monster.StringId, 0);
}
if (spawn.MountedEyeHeight < spawn.StandingEyeHeight)
{
    Debug.Print("note: mounted eye below standing eye, mount mesh may be short", 0);
}
```

## 风险与边界

- **`struct` + 值拷贝。** 写它只改本地副本。真正的消费者是 private 的 `Mission.CreateAgentInternal` / native 的 `IMBMission.CreateAgent`，modder 无法通过公开 API 插进去。
- **只在创建时读一次。** 没有任何一处在创建后回写。改数值必须重建 Agent。
- **`ref` 传参但内部字段全是值类型。** `ref` 只是让 native 能读到你的副本内容，不会把修改反向同步回 C# 对象。
- **`MonsterUsageIndex` 配错不会立刻崩。** 它决定复用哪份 native 骨架/动画资源，通常表现为动作错乱或模型不对，比崩溃更难查。
- **`Weight` 依赖调用方是否传 mountItem。** 同一只怪物在两条路径下 `Weight` 不同，容易在对比数值时误判。
- **字段全公开可写且无断言。** 填负数或 NaN 不会在 C# 侧被拦下，异常会在 native 里以更难解释的形式出现。
- **它和 XML 定义的耦合是隐式的。** `FillSpawnData` 是 19 个字段到 `Monster` 19 个属性的手工映射，`Monster` 上**新加**字段时旧版本 `FillSpawnData` 不会自动跟上——跨版本比对时这是最值得盯的一处。
- **`bannerlord-1.4.5` 这份源码树里没有 XML 数据文件**（只有 8,583 个 `.cs`），所以本页示例里的 monster / item 字符串 id 无法在源码中核对，取值请以模块 XML 的 `<Monster id="...">` / `<Item id="...">` 为准，示例里都带了 null 判空。

## 依赖关系

- 数据来源：[Monster](../../core-extra/Monster/) 的 `HitPoints` / `StandingEyeHeight` / `ArmLength` 等 XML 字段，由 [MonsterExtensions](../MonsterExtensions/) 的 `FillSpawnData(Monster, ItemObject)` 手工逐字段搬运
- 载荷类型：[Vec3](../../core-extra/Vec3/) 用于两个偏移量，[ItemObject](../../core-extra/ItemObject/) 作为 `FillSpawnData` 的坐骑重量来源
- 消费入口：[Mission](../../mission/Mission/) 的 `CreateAgent` → private 的 `CreateAgentInternal` → `IMBMission.CreateAgent` 的 native 边界
- 同参数组邻居：[AgentCapsuleData](../AgentCapsuleData/) 装着站立/蹲下的碰撞胶囊，在 native 签名里被拆成两个 `CapsuleData` 形参
- 效果落点：[AgentDrivenProperties](../AgentDrivenProperties/) 是另一套**运行时**数值表（本类型是**创建时**参数），两者常被混为一谈
- 桶首页：[mission-ext API 分区](../)
