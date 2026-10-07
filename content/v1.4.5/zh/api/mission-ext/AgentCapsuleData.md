---
title: "AgentCapsuleData"
description: "两个 CapsuleData 的结构体容器：站立与蹲下的身体碰撞体，交给 native 创建 Agent 时用，是碰撞判定而非视觉的依据。"
---

# AgentCapsuleData

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public struct AgentCapsuleData`
**Base:** 无（值类型）
**File:** `TaleWorlds.MountAndBlade/AgentCapsuleData.cs`

## 概述

`AgentCapsuleData` 全文只有 10 行：一个 `struct`，两个公开**字段**——`BodyCap` 与 `CrouchedBodyCap`，类型都是 [CapsuleData](../../engine/CapsuleData/)。它唯一的作用是把「站立时的身体碰撞体」和「蹲下时的身体碰撞体」这对数据**按值打包**，好让它们和 [AgentSpawnData](../AgentSpawnData/) 一起被 `ref` 传给 native 的 Agent 创建接口。碰撞体的形状由两个端点加一个半径描述（`P1` / `P2` / `Radius`），决定引擎里近战命中判定、被击退时的推挤、以及 AI 寻路时「这个单位占了多大地方」——**与骨骼、mesh 完全没有关系**。

全代码库只有两个生产点：`MonsterExtensions.FillCapsuleData()`（`MonsterExtensions.cs:124`）从 [Monster](../../core-extra/Monster/) 的 XML 定义里读出胶囊体填好返回，以及 `Mission.CreateAgent`（`Mission.cs:4043`）拿它去调私有的 `Mission.CreateAgentInternal`。modder 侧最正当的用法也是走 `FillCapsuleData()`，因为 `Monster` 上的胶囊体字段本身没有公开 setter。

## 心智模型

**这是 native 边界的过桥数据，不是游戏对象。** 心智模型是「一份要过 P/Invoke 边界的入参快照」。三个必须记住的推论：

第一，**它是 `struct`，两个成员是字段不是属性**，所以默认是公开可写的字段访问。写它不涉及任何校验，也不触发任何 native 调用——你改出来的东西只有在下一次有人拿它去创建 Agent 时才生效。

第二，**值拷贝语义是最大的坑**。`Mission.CreateAgentInternal` 的形参是 `ref AgentCapsuleData`，但 `AgentSpawnData` / `AgentCapsuleData` 里包着的 [CapsuleData](../../engine/CapsuleData/) 本身是 `[EngineStruct("rglCapsule_data")]` 结构体，内部有 `_globalData` / `_localData` 两份 `FtlCapsuleData`。如果你先 `AgentCapsuleData data = monster.FillCapsuleData();` 再改 `data.BodyCap.Radius = 3f;`，改的是你本地那份副本——除非你把它 `ref` 传出去，否则对已创建的 Agent 没有任何影响。

第三，**真正的权威来源永远是 `Monster`**。[MonsterMissionData](../MonsterMissionData/) 的 `BodyCapsule` 是 `=> new CapsuleData(Monster.BodyCapsuleRadius, Monster.BodyCapsulePoint1, Monster.BodyCapsulePoint2)`——每次访问都现算。所以「改了 XML 里的胶囊体为什么不生效」的答案永远是：**Agent 是用创建那一刻的快照建的，之后要变只能销毁重建**。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `BodyCap` | `public CapsuleData BodyCap`（字段） | 站立姿态下的身体碰撞胶囊。命中判定、被击退位移、队列占位都用它。**字段而非属性**，赋值无任何拦截；赋值只改本地副本，必须随 `ref` 一起过 native 边界才生效。 |
| `CrouchedBodyCap` | `public CapsuleData CrouchedBodyCap`（字段） | 蹲下姿态下的碰撞胶囊，通常比站立更矮更短。角色切到蹲伏动作时引擎改用它做命中与占位判定。同样是**字段而非属性**，赋值不进任何校验；注意字段名是 `CrouchedBodyCap`，不带 `ule`。 |

## 死成员与陷阱

本页两个字段看着像未接线的占位，其实都有引用 —— 清单给的调用点数也不准。

| 成员 | 声明位置 | override | 调用点 | 判定 | 说明 |
|---|---|---:|---:|---|---|
| `BodyCap` | bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AgentCapsuleData.cs:7 | 0 | 2 次（2 行） | MEASURED | 实体碰撞体。清单报 1 次，实测 2 次：`Mission.cs:1636` 作 `ref` 参数传入 `CreateAgent`、`MonsterExtensions.cs:129` 由对象初始化器赋值。少算的根因是初始化器赋值不属于调用形，不是行数/次数。 |
| `CrouchedBodyCap` | bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AgentCapsuleData.cs:9 | 0 | 2 次（2 行） | MEASURED | 蹲姿碰撞体。清单报 1 次，实测 2 次：`Mission.cs:1636`（与 BodyCap 同行）与 `MonsterExtensions.cs:130`。本行 B-7 差=0，行数=次数=3。 |

## 真实示例

从 `Monster` 取一份标准的胶囊体数据（这是官方唯一推荐的生产方式）：

<!-- xml-id-unverifiable: v1.4.5 -->
> ⚠️ 不可验证：本页全部字符串 id（下方代码示例中的）在 v1.4.5 源码树均无法核对——该版本未随附 XML 语料。
```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

// id 必须取自模块 XML 的 <Monster id="...">，本仓库只有 .cs 源码、无法核对具体字符串
Monster monster = MBObjectManager.Instance.GetObject<Monster>("aspider");
if (monster == null)
{
    Debug.Print("monster id not found", 0);
    return;
}

AgentCapsuleData capsule = monster.FillCapsuleData();
Debug.Print("stand  P1=" + capsule.BodyCap.P1 + " P2=" + capsule.BodyCap.P2 + " r=" + capsule.BodyCap.Radius, 0);
Debug.Print("crouch P1=" + capsule.CrouchedBodyCap.P1 + " P2=" + capsule.CrouchedBodyCap.P2, 0);
```

读出胶囊体的包围盒——这是判断「这个单位在寻路网格里占多大」的实用手段：

```csharp
AgentCapsuleData capsule = monster.FillCapsuleData();
(Vec3 min, Vec3 max) = capsule.BodyCap.GetBoxMinMax();
Debug.Print("body box min=" + min + " max=" + max, 0);
Debug.Print("body height = " + (max.z - min.z), 0);
```

自己构造一份（覆盖 XML 定义的唯一途径，注意是值拷贝）：

```csharp
using TaleWorlds.Engine;
using TaleWorlds.Library;
using TaleWorlds.MountAndBlade;

AgentCapsuleData custom = new AgentCapsuleData();
custom.BodyCap = new CapsuleData(0.42f, new Vec3(0f, 0f, 0.1f), new Vec3(0f, 0f, 1.35f));
custom.CrouchedBodyCap = new CapsuleData(0.42f, new Vec3(0f, 0f, 0.1f), new Vec3(0f, 0f, 0.75f));

// 这里 custom 只是本地副本；Mission.CreateAgent 是 private，
// 真正把它交给引擎的入口是 IMBMission.CreateAgent（native 边界）。
```

直接绕过本类型、从权威源读等价信息（推荐给只需要读的 mod）：

```csharp
// 同上：id 取自模块 XML
Monster monster = MBObjectManager.Instance.GetObject<Monster>("aspider");
MonsterMissionData monsterData = (MonsterMissionData)monster.MonsterMissionData;
Debug.Print("radius = " + monsterData.BodyCapsule.Radius, 0);
Debug.Print("crouched radius = " + monsterData.CrouchedBodyCapsule.Radius, 0);
```

## 风险与边界

- **值类型，改它等于改副本。** 唯一的消费者是 native 创建路径。写完不 `ref` 传出去，等于什么都没发生。
- **没有任何公开的写入入口。** `Mission.CreateAgentInternal` 是 `private`，`Mission.CreateAgent(Monster, ...)` 内部直接 `monster.FillCapsuleData()` 拿值，modder 无法插进这条链。想自定义胶囊体只能自己调 native 层的 `IMBMission.CreateAgent`（签名里是 `ref CapsuleData bodyCapsule, ref CapsuleData crouchedBodyCapsule`，即两个独立参数，不走 `AgentCapsuleData`）。
- **改了不改已存在的 Agent。** 碰撞体在创建时定型，运行时想换只能移除重建。
- **与视觉无关。** 换胶囊体不会改变 mesh、骨骼、动画；反过来 mesh 变了碰撞体也不会跟着变。站桩判定不准通常是这一层而不是渲染层。
- **没有 `EngineStruct` 标记。** `CapsuleData` 有 `[EngineStruct("rglCapsule_data")]`，`AgentCapsuleData` 自己**没有**——它不直接过 native，必须先在栈上拆成两个 `CapsuleData` 再传。
- **`MonsterMissionData` 上两个胶囊体属性每次访问都 new。** 高频循环里别反复取。
- **`bannerlord-1.4.5` 这份源码树里没有 XML 数据文件**（只有 `.cs`），本页示例里的 monster 字符串 id 无法在源码中核对，请以模块 XML 的 `<Monster id="...">` 为准。

## 依赖关系

- 载荷类型：[CapsuleData](../../engine/CapsuleData/) 描述胶囊本体的 `P1` / `P2` / `Radius`，本类型只是把两份打包
- 数据来源：[Monster](../../core-extra/Monster/) 的 `BodyCapsuleRadius` / `BodyCapsulePoint1` / `BodyCapsulePoint2` 等 XML 字段，经 [MonsterMissionData](../MonsterMissionData/) 每次现算
- 生产入口：[MonsterExtensions](../MonsterExtensions/) 的 `FillCapsuleData()` 是全树唯一的构造点
- 消费入口：`Mission.CreateAgent`（`Mission.cs:4043`）与私有的 `CreateAgentInternal`，最终落到 `IMBMission.CreateAgent` 的 native 边界
- 兄弟结构：[AgentSpawnData](../AgentSpawnData/) 与本类型在同一个 `ref` 参数组里传输，两者都是纯过桥数据
- 桶首页：[mission-ext API 分区](../)
