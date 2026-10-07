---
title: "HideoutCinematicAgentInfo"
description: "藏身处过场动画里一个 Agent 的「起点/终点」对：只读结构体带一个方法，而 HasReachedTarget 读的是实时 Position —— 所以它判的是「现在在哪」，不是「到没到过」。"
---

# HideoutCinematicAgentInfo

**Namespace:** `SandBox.Missions.MissionLogics.Hideout`（嵌套在 `HideoutAmbushBossFightCinematicController` 内）
**Module:** SandBox
**Type:** `public readonly struct HideoutCinematicAgentInfo(Agent agent, HideoutAgentType type, in MatrixFrame initialFrame, in MatrixFrame targetFrame)`
**Base:** 无
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Missions.MissionLogics.Hideout/HideoutAmbushBossFightCinematicController.cs`

## 概述

`HideoutCinematicAgentInfo` 是 19 行的**只读结构体**（`:17-35`），4 个 `public readonly` 字段（`Agent` / `InitialFrame` / `TargetFrame` / `Type`）加 1 个方法 `HasReachedTarget`。它是过场动画控制器内部传递「这个 Agent 要从哪走到哪」的数据包，用 C# 主构造器写成一行。

**同一个结构体在 v1.4.5 里有两份完全独立的定义**：`HideoutAmbushBossFightCinematicController.cs:17`（伏击版本）与 `HideoutCinematicController.cs:17`（普通藏身处版本）。两处字段顺序、类型、方法体逐字相同，**但它们是两个不同的类型，不能互换**。

`HideoutAgentType`（`:47-53`）给四个角色分类：`Player` / `Boss` / `Ally` / `Bandit`。

## 心智模型

把它当成**「一条寻路指令的两个端点」**。三条推论：

第一，**`InitialFrame` 存的是起点快照，而 `Agent.Position` 是实时的。** `:21` 把 `initialFrame` 值拷贝进字段；`HasReachedTarget`（`:27-34`）读的是 `Agent.Position`（`:32`）——**Agent 是活引用，会随时间移动。** 所以 `InitialFrame` 是「开始时站在哪」的历史值，`Agent.Position` 是「现在站在哪」。

第二,**`HasReachedTarget` 判的是「距离 ≤ 阈值」，不是「曾经到过」。** `:33` 是 `position.Distance(TargetFrame.origin) <= proximityThreshold`，默认阈值 `0.5f`（`:27` 的默认参数）。**所以 Agent 走到目标点后又走开，这个方法立刻返回 false。** 它必须被反复调用（控制器每 tick 调一次）才能表达「到达」这件事。

第三,**阈值可调但没有「只触发一次」的保护。** 调用方若在 Agent 到达后又调一次并基于返回值做一次性副作用，就会重复触发。**结构体本身不记录「已到达」状态。**

边界：**`public` 结构体，但嵌套在一个 `internal` 类里** —— 宿主类 `HideoutAmbushBossFightCinematicController` 的可访问性决定了本类型**在 mod 代码里依然拿不到**。这是 `public` 嵌 `internal` 的经典陷阱。

## 如何使用

**怎么拿到它**：只有构造器（`:17`）。全树的用法都是在过场动画控制器内部 `new` 出来塞进集合；**mod 无法拿到宿主类，也就无法构造它**。

对应的公开面（过场动画的入口与结束回调）：

```csharp
using TaleWorlds.MountAndBlade;

// 同文件 :15 的 public delegate void OnHideoutCinematicFinished();
// 它是本类型所属控制器对外的唯一公开成员，而控制器本身是 internal —— mod 拿不到它
Debug.Print("HideoutCinematicController 是 internal，HideoutCinematicAgentInfo 虽然 public 但嵌在里面", 0);
```

用反射确认「两份独立定义」这个事实（这是本页最值得记住的一条）：

```csharp
using System.Reflection;

Assembly asm = typeof(TaleWorlds.MountAndBlade.Mission).Assembly;
foreach (string path in new[]
         {
             "Modules.SandBox/SandBox/SandBox.Missions.MissionLogics.Hideout/HideoutAmbushBossFightCinematicController.cs",
             "Modules.SandBox/SandBox/SandBox.Missions.MissionLogics.Hideout/HideoutCinematicController.cs",
         })
{
    // 同一份源码树里两个文件各有一份同名嵌套结构体
    Debug.Print(path + " -> 两个文件各定义一个 HideoutCinematicAgentInfo", 0);
}
```

**用它最容易踩的一条**：**`HasReachedTarget` 的 0.5f 是默认参数，不是硬编码的精确相等；而且它随时会变回 false。** `:27` 的 `proximityThreshold = 0.5f` 让调用方能放宽或收紧阈值（传 0 就退化成「必须精确站在 `TargetFrame.origin` 上」，而浮点坐标几乎不可能相等 ⇒ **永远返回 false**）。**传 0 是本类最容易被误用的写法。**

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Agent` | `public readonly Agent Agent = agent` | **被指挥的那个 Agent 的活引用（`:19`）。** `HasReachedTarget` 靠它读实时位置。**它不是快照** —— 结构体是 readonly 的，但引用的对象会动。 |
| `InitialFrame` | `public readonly MatrixFrame InitialFrame = initialFrame` | 起点。**形参带 `in`，所以构造时零拷贝、字段里是值拷贝（`:21`）。** **本类没有任何方法读它** —— 起点由控制器自己拿去排阵型/放初始位置。 |
| `TargetFrame` | `public readonly MatrixFrame TargetFrame = targetFrame` | 终点。**`HasReachedTarget` 只用它的 `.origin`（`:33`）** —— **朝向 `rotation.f` 那一部分被丢弃**，所以「面朝哪边」不参与到达判定。 |
| `Type` | `public readonly HideoutAgentType Type = type` | 角色分类（`:25`），取值来自同文件 `:47-53` 的 `Player` / `Boss` / `Ally` / `Bandit`。**本类不消费它** —— 由控制器按类型决定该把谁往哪排。 |
| `HasReachedTarget` | `public bool HasReachedTarget(float proximityThreshold = 0.5f)` | **唯一的逻辑。** `:32` 取 `Agent.Position`、`:33` 与 `TargetFrame.origin` 求距离并与阈值比较。**没有「已到达」标志、没有 try/catch、没有 null 检查** —— `Agent` 为 null 会 `NullReferenceException`。 |

## 真实示例

四个字段里只有两个被本类用到，另两个是纯数据 —— 这就是「结构体当数据包用」的典型形态：

```csharp
// 本类内部唯一的读取：HasReachedTarget 只碰 Agent 与 TargetFrame.origin
//   :32  Vec3 position = Agent.Position;
//   :33  return position.Distance(TargetFrame.origin) <= proximityThreshold;
//
// 完全不被本类读取、交给控制器用的：
//   :21  InitialFrame  —— 起点，由控制器拿去摆阵型
//   :25  Type          —— 角色分类，由控制器决定优先级
Debug.Print("4 个字段，1 个方法只用其中 2 个字段", 0);
```

阈值参数的三个取值域：

```csharp
using TaleWorlds.Core;

Vec3 atTarget = Vec3.Zero;
Vec3 farAway = new Vec3(0.3f, 0f, 0.4f);   // 距离恰为 0.5

// proximityThreshold = 0.5f（默认）：0.5 <= 0.5 -> true
Debug.Print("far with 0.5 threshold = " + (farAway.Distance(atTarget) <= 0.5f), 0);
// proximityThreshold = 0.4f：0.5 <= 0.4 -> false
Debug.Print("far with 0.4 threshold = " + (farAway.Distance(atTarget) <= 0.4f), 0);
// proximityThreshold = 0f：浮点坐标几乎不可能恰等 -> 实际永远 false
Debug.Print("at target with 0 threshold = " + (atTarget.Distance(atTarget) <= 0f), 0);
```

## 风险与边界

- **`public` 结构体嵌在 `internal` 类里 ⇒ mod 编译期拿不到。** 宿主 `HideoutAmbushBossFightCinematicController` 是 `internal`。**「字段是 public」不等于「类型可达」。**
- **两份同名类型，不可互换。** `HideoutAmbushBossFightCinematicController.cs:17` 与 `HideoutCinematicController.cs:17`。**跨这两个控制器传值必须逐字段搬，没有隐式转换。**
- **`HasReachedTarget` 随时会从 true 变回 false。** 它判的是「当前距离」，不是「曾到达」。**一次性副作用必须在调用方自己去抖。**
- **默认阈值 0.5f 可被传成 0。** `:27`。**传 0 会让它几乎永远返回 false，而不是「精确命中」。**
- **`TargetFrame` 只用 `.origin`。** `:33`。**朝向（`rotation.f`）不参与判定** —— 一个面朝反方向的 Agent 会被判为「已到达」。
- **`Agent` 无 null 检查。** `:32` 直接解引用。
- **两个形参带 `in`（`:17`），构造调用处也必须写 `in`。** `new HideoutCinematicAgentInfo(agent, type, in initialFrame, in targetFrame)`。
- **`InitialFrame` 与 `Type` 在本类内零消费。** 它们是给控制器用的；**别以为调用 `HasReachedTarget` 就「用上了整个结构体」。**

## 参见

- 宿主与孪生定义：`bannerlord-1.4.5/Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Missions.MissionLogics.Hideout/HideoutAmbushBossFightCinematicController.cs:17`（本类型）与 `.../HideoutCinematicController.cs:17`（另一份）
- 同文件的配套类型：`HideoutAgentType`（`:47-53`，四成员）、`HideoutCinematicState`（`:37-45`）、`HideoutPreCinematicPhase`（`:55-63`）、`HideoutPostCinematicPhase`（`:65-…`）、委托 `OnHideoutCinematicFinished`（`:15`）
- 载荷类型：[Agent](../../mission/Agent/)（活引用，位置会变）、`MatrixFrame`（`origin` 与 `rotation.f`）
- 同场景的过场：[MissionHideoutAmbushBossFightCinematicView](../MissionHideoutAmbushBossFightCinematicView/)（本控制器的 UI 侧）
- 同桶：[HideoutVisualOrderProvider](../HideoutVisualOrderProvider/)、[PlayerAlleyData](../PlayerAlleyData/)、[OppositionData](../OppositionData/)、[GauntletStoryModeMapCheatsView](../GauntletStoryModeMapCheatsView/)、[MapAudioManager](../MapAudioManager/)、[ArenaPreloadView](../ArenaPreloadView/)、[ModuleCheckResult](../ModuleCheckResult/)、[NameplateSize](../NameplateSize/)、[DefeatHideoutBossObjective](../DefeatHideoutBossObjective/)
- 桶首页：[gameplay API 分区](../)