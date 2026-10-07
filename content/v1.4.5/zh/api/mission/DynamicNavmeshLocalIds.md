---
title: "DynamicNavmeshLocalIds"
description: "动态导航网格部件槽位的编号枚举：Inside 从 1 开始（不是 0），以 Count 作哨兵结尾——而它在 1.4.5 里【零消费点】，只有声明。"
---

# DynamicNavmeshLocalIds

**Namespace:** `TaleWorlds.MountAndBlade`（嵌套在 `MissionObject` 内）
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `protected enum DynamicNavmeshLocalIds`（嵌套于 `MissionObject`）
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionObject.cs`

## 概述

`DynamicNavmeshLocalIds` 是 13 行的 `protected` 嵌套枚举，声明在 `MissionObject.cs:12-24`。它给「一个任务物体上的动态导航网格部件」编号，10 个成员：`Inside`、`Enter`、`Exit`、`Blocker`、`Extra1`、`Extra2`、`Extra3`、`ConditionalBlocker`、`Reserved1`、`Count`。

两个刻意的写法：**`Inside = 1` 显式从 1 开始**（`:14`），以及**末尾的 `Count` 是哨兵**（`:23`）—— 所以有效槽位是 1..9，`Count`（=10）只是「数量」而不是一个槽位。旁边还有 `public const int MaxNavMeshPerDynamicObject = 50;`（`:26`）说明**单个任务物体最多 50 个动态网格，而本枚举只描述其中前 10 种语义**。

## 心智模型

把它当成**「一份槽位编号表」**。三条推论：

第一,**编号从 1 起、`Count` 结尾 ⇒ 数组可以直接用 `数组长度 == (int)Count` 校验。** 这是 `Count` 作哨兵的典型用法：**它必须等于最后一个有效槽位 + 1**，而当前是 10。**所以有效槽位是 1 到 9，共 9 个。**

第二,`Reserved1`（`:22`）是预留空洞。**它的存在说明这个表被设计成可增长** —— 后续要加槽位大概率会填它而不是追加到末尾（因为 `Count` 的值会跟着变）。

第三,**它在 v1.4.5 源码树里没有任何消费点。** 我实测 `grep -rn "DynamicNavmeshLocalIds" bannerlord-1.4.5/Bannerlord.Source --include=*.cs` → **除 `MissionObject.cs:12` 的声明外零命中**。而它周围的东西都有用法：`MaxNavMeshPerDynamicObject`（`:26`）、`NavMeshPrefabName`（`:28-29`）、`DynamicNavmeshIdStart`（`:31`）都在同一段声明区。**所以这不是「写在别处用了」，而是「没人用」** —— 与 [ScriptingInterfaceBase](../ScriptingInterfaceBase/) 同类，但本类的槽位表读起来像真在用。

边界：**`protected` 嵌套枚举**。宿主 `MissionObject` 是 `public`，所以 mod 可以派生它并在派生类里用这些枚举值。

## 如何使用

**怎么拿到它**：**只能派生 `MissionObject`。** 它没有生产路径 —— `new` 也不适用（枚举），消费路径也不存在。

编号表与哨兵的完整形态（照抄即可）：

```csharp
using TaleWorlds.MountAndBlade;

// MissionObject.cs:14-23
//   Inside = 1        序号 1
//   Enter             序号 2
//   Exit              序号 3
//   Blocker           序号 4
//   Extra1            序号 5
//   Extra2            序号 6
//   Extra3            序号 7
//   ConditionalBlocker 序号 8
//   Reserved1         序号 9
//   Count             序号 10  ← 哨兵，不是槽位
// 有效槽位 = 1..9；MissionObject.cs:26 的 MaxNavMeshPerDynamicObject = 50 说明上限远大于 10

public class MyMissionObject : MissionObject
{
    public void DescribeSlot(int slot)
    {
        // 派生类里可以直接写枚举名
        if (slot == (int)DynamicNavmeshLocalIds.Count) { Debug.Print("哨兵，不是槽位", 0); }
        else { Debug.Print("槽位 " + slot, 0); }
    }
}
```

**用它最容易踩的一条**：**`Inside` 的值是 1 而不是 0。** `:14` 显式写了 `Inside = 1`。所以 `for (int i = 0; i < (int)Count; i++)` 这种朴素循环会把 **0 当成有效槽位**去访问数组，而 0 根本不对应任何 `DynamicNavmeshLocalIds` 成员。**正确的循环边界是 1 到 `(int)Count - 1`。**

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Inside` | `Inside = 1`（枚举成员，序号 1，`MissionObject.cs:14`） | **物体内部的网格。** **唯一一个显式赋值的成员** —— 整个枚举因此从 1 起算，而不是 C# 默认的 0。**这意味着 0 不是一个合法的槽位编号。** |
| `Enter` / `Exit` | 序号 2 / 3（`:15`/`:16`） | 进入 / 离开该物体时用的网格。**成对出现**，语义上是「通过它进入」与「通过它离开」。 |
| `Blocker` | 序号 4（`:17`） | 阻挡网格（不可通行的部分）。 |
| `Extra1` / `Extra2` / `Extra3` | 序号 5/6/7（`:18`/`:19`/`:20`） | **三个无差别占位。** 它们的语义只能由使用方决定 —— 而本枚举零消费点，所以**我无法断言它们被用来做什么**。 |
| `ConditionalBlocker` | 序号 8（`:21`） | 条件阻挡。**名字里的 `Conditional` 暗示它由某个条件控制，但我没有找到读取它的代码**，故不断言条件是什么。 |
| `Reserved1` | 序号 9（`:22`） | **预留空洞。** 它存在的唯一意义是给未来槽位留位置（追加成员会改变 `Count` 的值，而填它不会）。 |
| `Count` | 序号 10（`:23`） | **哨兵。** 它的值 = 有效槽位数（9）+ 1。**本身不是一个网格槽位** —— 见「如何使用」。 |

## 真实示例

一张表看清「从 1 开始 + Count 收尾」的形状：

```csharp
// 序号 1  Inside             显式 = 1（:14）
// 序号 2  Enter
// 序号 3  Exit
// 序号 4  Blocker
// 序号 5  Extra1
// 序号 6  Extra2
// 序号 7  Extra3
// 序号 8  ConditionalBlocker
// 序号 9  Reserved1
// 序号 10 Count              ← 哨兵
// 有效槽位 9 个；MissionObject.cs:26 另给 MaxNavMeshPerDynamicObject = 50
Debug.Print("有效 1..9，Count=10 是哨兵，上限另有 50", 0);
```

零消费点这件事怎么验证（与 [ScriptingInterfaceBase](../ScriptingInterfaceBase/) 同一种「证明它是死的」写法）：

```csharp
// grep -rn "DynamicNavmeshLocalIds" bannerlord-1.4.5/Bannerlord.Source --include=*.cs
//   -> 1 命中：MissionObject.cs:12 的 protected enum DynamicNavmeshLocalIds
// 对照同一段里的邻居，它们都在被 MissionObject 自己使用：
//   :26  public const int MaxNavMeshPerDynamicObject = 50;
//   :28-29  [EditableScriptComponentVariable(true, "")] protected string NavMeshPrefabName = "";
//   :31  protected int DynamicNavmeshIdStart;
// => 本枚举是这一段里唯一没有读取方的
Debug.Print("声明处即唯一命中点", 0);
```

## 风险与边界

- **`protected` 嵌套枚举，编译期只有派生类可见。** `:12`。宿主 `MissionObject` 是 `public`，派生可行。
- **全树零消费点。** `grep` 只有声明行。**我确认了 1.4.5 源码树里没有任何读取方，但不断言它是「未完成的功能」或「原生侧通过整数使用」** —— 后者我**没有阳性证据**。
- **`Inside` 是 1，0 不合法。** `:14`。**朴素 `for (int i = 0; …)` 会撞上不存在的槽位。**
- **`Count` 不是槽位。** `:23`。它是哨兵，值 10。
- **`Extra1/2/3` 语义无法从源码确定。** 我**不断言**它们被用来做什么。
- **`ConditionalBlocker` 的条件来源不明。** `:21`。
- **`Reserved1` 是空洞。** `:22`。**填它不改变 `Count` 的值，追加成员会。**
- **`MaxNavMeshPerDynamicObject = 50` 与本枚举的 9 个槽位不匹配。** `:26`。**两者是不同层的东西**（上限 vs 语义），但我没有读到把 50 与本枚举连起来的代码。

## 参见

- 宿主：`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionObject.cs:12-24`（本枚举）、`:26`（`MaxNavMeshPerDynamicObject`）、`:28-29`（`NavMeshPrefabName`）、`:31`（`DynamicNavmeshIdStart`）、`:33`（`private Mission Mission => Mission.Current`）、`:35`（`Id`）、`:37`（`IsDisabled`）
- 宿主继承链：`MissionObject` 的派生（如 SiegeLadder / SiegeTower / BatteringRam，见 [DefineSynchedMissionObjectType](../DefineSynchedMissionObjectType/) 的使用点）
- 同类零消费类型的对照：[ScriptingInterfaceBase](../ScriptingInterfaceBase/)（7 行空类）、[TacticOption](../TacticOption/)（有构造器但零 `new`）
- 同桶：[AgentHelper](../AgentHelper/)、[Target](../Target/)、[ItemType](../ItemType/)、[HitType](../HitType/)、[PlayerTypes](../PlayerTypes/)、[MBNetworkPeer](../MBNetworkPeer/)、[ProximityMapSearchStructInternal](../ProximityMapSearchStructInternal/)、[PerkAssemblyCollection](../PerkAssemblyCollection/)
- 桶首页：[mission API 分区](../)