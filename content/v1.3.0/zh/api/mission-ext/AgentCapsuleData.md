---
title: "AgentCapsuleData"
description: "两个 CapsuleData 字段的纯数据壳：Agent 创建时由 Monster 侧填好，被 Mission 原样 ref 转发给 native；托管层只在 CreateAgentInternal 一处读到它。"
---

# AgentCapsuleData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct AgentCapsuleData`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/AgentCapsuleData.cs`（全文 15 行）

## 概述

`AgentCapsuleData` 是一个**双字段纯数据壳**，全文只有：

```csharp
public struct AgentCapsuleData
{
    public CapsuleData BodyCap;
    public CapsuleData CrouchedBodyCap;
}
```

没有构造、没有属性、没有方法、没有任何行为。它存在的唯一理由是**把两个胶囊体打包成一个可 `ref` 转发的参数**。每个字段的类型是 [CapsuleData](../../engine/CapsuleData)（`TaleWorlds.Engine` 命名空间，带 `[EngineStruct("rglCapsule_data", false, null)]` 标记），描述一段「两点 + 半径」的碰撞体。

托管层生产它的地方只有一处，[MonsterExtensions](../MonsterExtensions) 的 `FillCapsuleData`：

```csharp
public static AgentCapsuleData FillCapsuleData(this Monster monster)
{
    MonsterMissionData monsterMissionData = (MonsterMissionData)monster.MonsterMissionData;
    return new AgentCapsuleData
    {
        BodyCap = monsterMissionData.BodyCapsule,
        CrouchedBodyCap = monsterMissionData.CrouchedBodyCapsule
    };
}
```

托管层消费它的地方也只有一处，[Mission](../../mission/Mission) 的私有 `CreateAgentInternal`（`Mission.cs:381`）：

```csharp
private Mission.AgentCreationResult CreateAgentInternal(
    AgentFlag agentFlags, int forcedAgentIndex, bool isFemale,
    ref AgentSpawnData spawnData, ref AgentCapsuleData capsuleData,
    ref AnimationSystemData animationSystemData, int instanceNo)
{
    return MBAPI.IMBMission.CreateAgent(this.Pointer, (ulong)agentFlags, forcedAgentIndex, isFemale,
        ref spawnData, ref capsuleData.BodyCap, ref capsuleData.CrouchedBodyCap,
        ref animationSystemData, instanceNo);
}
```

注意它做的事：**把打包结构拆开，按 `ref` 分别递给 native**。托管层从不读这两个字段的值——它只是一层打包。

## 心智模型

把它当成**「Agent 创建时打包给 native 的两张碰撞体草稿纸」**。心智模型只有三条，全部围绕「它什么时候活、活多久、谁能改」。

**规则一：它的生命周期只有一次 `Mission.CreateAgent` 调用。** 唯一的生产点在 `Mission.CreateAgent`（`Mission.cs:3671`）：

```csharp
AnimationSystemData animationSystemData = monster.FillAnimationSystemData(stepSize, false, isFemale);
AgentCapsuleData agentCapsuleData = monster.FillCapsuleData();
AgentSpawnData agentSpawnData = monster.FillSpawnData(null);
Mission.AgentCreationResult creationResult = this.CreateAgentInternal(
    monster.Flags, forcedAgentIndex, isFemale, ref agentSpawnData,
    ref agentCapsuleData, ref animationSystemData, instanceNo);
```

它是**栈上的局部变量**，创建完 Agent 就没人再碰。改它不会影响已创建的 Agent——胶囊体已经在 native 侧了。

**规则二：字段值每次访问都是新对象，不是缓存。** `MonsterMissionData.BodyCapsule` 的 getter 是这样的（`MonsterMissionData.cs:17-24`）：

```csharp
public CapsuleData BodyCapsule
{
    get { return new CapsuleData(this.Monster.BodyCapsuleRadius, this.Monster.BodyCapsulePoint1, this.Monster.BodyCapsulePoint2); }
}
```

每读一次就 `new` 一个 `CapsuleData`（而 `CapsuleData` 自己构造时又 `new` 两个 `FtlCapsuleData` 填 `_globalData` 和 `_localData`）。所以**不要把 `BodyCap` 缓存成字段再反复用**——你以为缓存了，实际每次访问都会重新分配。`FillCapsuleData` 一次性把两个字段填好，正是为了避免在热路径上重复这次分配。

**规则三：字段是 public 字段，不是属性。** `BodyCap` / `CrouchedBodyCap` 可以直接赋值，也可以用对象初始化器（官方就是这么写的）。这跟 [CapsuleData](../../engine/CapsuleData) 那层用属性形成对比。public 字段意味着没有封装，改它不会有任何通知。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `BodyCap` | `public CapsuleData BodyCap;` | 站立姿态的躯干胶囊体。由 [MonsterMissionData](../MonsterMissionData) 从 [Monster](../../core-extra/Monster) 的 `BodyCapsuleRadius` / `BodyCapsulePoint1` / `BodyCapsulePoint2` 现场构造。被 `CreateAgentInternal` 以 `ref capsuleData.BodyCap` 递给 native。 |
| `CrouchedBodyCap` | `public CapsuleData CrouchedBodyCap;` | 蹲伏姿态的躯干胶囊体，来源是 `Monster.CrouchedBodyCapsuleRadius` / `CrouchedBodyCapsulePoint1` / `CrouchedBodyCapsulePoint2`。同样以 `ref` 递给 native。 |

两个字段之外，类里**没有任何成员**——没有构造、没有属性、没有方法。

## 真实示例

造一份自定义胶囊体，覆盖某个怪物的站立/蹲伏碰撞体（`CapsuleData` 有 public 构造 `CapsuleData(float radius, Vec3 p1, Vec3 p2)`，见 [CapsuleData](../../engine/CapsuleData)）：

```csharp
using TaleWorlds.Engine;
using TaleWorlds.Library;
using TaleWorlds.MountAndBlade;

public static AgentCapsuleData BuildWideCapsule(float halfHeight, float radius)
{
    Vec3 lower = new Vec3(0f, 0f, -halfHeight, -1f);
    Vec3 upper = new Vec3(0f, 0f, halfHeight, -1f);
    return new AgentCapsuleData
    {
        BodyCap = new CapsuleData(radius, lower, upper),
        CrouchedBodyCap = new CapsuleData(radius * 1.1f, lower, upper)
    };
}
```

读出胶囊体的包围盒用于自定义 AI 判定（`CapsuleData.GetBoxMin()` / `GetBoxMax()` 是真实成员）：

```csharp
using TaleWorlds.Engine;
using TaleWorlds.Library;
using TaleWorlds.MountAndBlade;

public static bool IsPointInsideBody(Monster monster, Vec3 worldPoint)
{
    AgentCapsuleData capsule = monster.FillCapsuleData();
    Vec3 min = capsule.BodyCap.GetBoxMin();
    Vec3 max = capsule.BodyCap.GetBoxMax();
    return worldPoint.x >= min.x && worldPoint.x <= max.x
        && worldPoint.y >= min.y && worldPoint.y <= max.y
        && worldPoint.z >= min.z && worldPoint.z <= max.z;
}
```

`MonsterExtensions.FillCapsuleData(this Monster)` 是 `public static` 扩展方法，`Monster` 在 `TaleWorlds.Core` 命名空间——所以这段需要同时 `using TaleWorlds.Core;`。这是最常见的编译失败点。

## 风险与边界

- **纯数据，无行为。** 构造完它的全部作用就是被 `ref` 递给 native。留着它当长期状态没有任何意义。
- **字段是 public，不是属性。** 没有封装、没有校验、没有变更通知。赋值不会报错也不会生效（native 侧已经拿走了）。
- **每次读 `BodyCapsule` 都是一次分配。** `MonsterMissionData.BodyCapsule` 的 getter 每次 `new CapsuleData(...)`。在每帧逻辑里反复访问 `monster.MonsterMissionData.BodyCapsule` 会持续分配；正确做法是一次 `FillCapsuleData()` 填好再用。
- **`CreateAgentInternal` 是 private。** 你没法直接用它改已有 Agent 的胶囊体。想改碰撞体只能在**创建前**改 `AgentCapsuleData`，走 `Mission.SpawnAgent` / `Mission.CreateAgent` 这条公开路径。
- **`CapsuleData` 混着全局与局部两套数据。** 它同时持有 `_globalData`（`P1`/`P2`/`Radius`）与 `_localData`（`LocalP1`/`LocalP2`/`LocalRadius`）。构造时两者被赋成相同的值，但它们的 getter 可访问性不同（`Local*` 是 `internal`）。你在 mod 里只能动全局那套。
- **struct 是值类型，`ref` 转发的是字段而非副本。** `CreateAgentInternal` 里 `ref capsuleData.BodyCap` 拿的是字段的引用。如果你在调用前后改 `agentCapsuleData.BodyCap`，改的是同一个内存位置——但托管层从 native 返回后就不再读它，所以这个「改动」没有观测点。
- **改胶囊体不会改动画或移动。** 胶囊体是物理碰撞形状。`Monster` 上的 `BodyCapsuleRadius` 等属性是动画/移动的另一套参数，两者不要混用。
- **`AgentCapsuleData.cs` 只有 15 行，不要指望从它读到任何行为契约。** 想知道这些胶囊体怎么被 native 用，只能去看 [native-interop](../../../architecture/native-interop)。

## 跨版本提示

`AgentCapsuleData` 的两个 public 字段在 1.3.0 / 1.3.15 / 1.4.6 / 1.4.7 / 1.5.3 逐字一致，`MonsterExtensions.FillCapsuleData` 的实现也没有变化。`Mission.CreateAgentInternal` 的参数列表在这几个版本间保持同样的 `ref AgentCapsuleData` 形状。

变化点在**胶囊体来源**：[MonsterMissionData](../MonsterMissionData) 会随新的怪物类型追加新的胶囊体用途（海战载具等）。老字段 `BodyCap` / `CrouchedBodyCap` 不会被移除或改语义，所以你的读取代码不用动；但如果你自己 `new AgentCapsuleData { ... }` 只填这两个字段，新版本新增的第三种姿态胶囊体你不会填到。

真正的破坏风险不在这个类型本身，而在 [CapsuleData](../../engine/CapsuleData)：它的 `FtlCapsuleData` 布局由 native 决定，一旦引擎加了字段，你用三个参数的构造 `new CapsuleData(radius, p1, p2)` 仍能编译，但行为可能与新版对齐方式不同。

## 依赖关系

- 字段类型：[CapsuleData](../../engine/CapsuleData) 是两个字段的类型，自身带 `EngineStruct("rglCapsule_data", ...)` 标记
- 唯一生产点：[MonsterExtensions](../MonsterExtensions) 的 `FillCapsuleData(this Monster)`，把 [MonsterMissionData](../MonsterMissionData) 的 `BodyCapsule` / `CrouchedBodyCapsule` 搬进来
- 数据源头：[MonsterMissionData](../MonsterMissionData) 的两个 getter 每次现场 `new`，[Monster](../../core-extra/Monster) 提供 radius 与两个 point
- 唯一消费点：[Mission](../../mission/Mission) 的私有 `CreateAgentInternal` → `MBAPI.IMBMission.CreateAgent`，在 `Mission.CreateAgent`（`Mission.cs:3671`）里被调用
- 平行结构：[AgentSpawnData](../AgentSpawnData) 与 `AnimationSystemData` 和它一起被 `ref` 转发，是同一批「创建期打包结构」
- 引擎边界：[native-interop](../../../architecture/native-interop) 解释 `EngineStruct` 与 `MBAPI` 的关系
- 桶首页：[mission-ext API 分区](../)