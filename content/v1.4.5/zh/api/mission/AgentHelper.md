---
title: "AgentHelper"
description: "Agent 属性读写的 native 指针中转层：11 个方法全是「UIntPtr 转成类型指针再解引用」，每个都带 AggressiveInlining —— 而 SetAgentPosition 第一行就是 FailedAssert(\"Do not use this!\")。"
---

# AgentHelper

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade.Helpers`
**Type:** `internal static class AgentHelper`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Helpers/TaleWorlds.MountAndBlade/AgentHelper.cs`

## 概述

`AgentHelper` 是 101 行、12 个方法的**原生指针中转层**。它存在的唯一原因：`Agent` 的很多属性在托管侧只是一个 `UIntPtr`（由 C++ 侧回传），要读出真正的值必须知道它指向哪种类型——而这个类型信息只有 [Agent](../Agent/) 自己知道。

所以每个方法都是同一个三行模式（以 `:11-15` 为例）：

```csharp
Vec3* ptr = (Vec3*)agentPositionPointer.ToPointer();
return *ptr;
```

**11 个方法里 10 个是读，只有 1 个是写** —— 而那 1 个写方法 `SetAgentPosition`（`:18`）的**第一行就是 `Debug.FailedAssert("Do not use this!")`（`:20`），源码自己标了「别用」**。

## 心智模型

把它当成**「`UIntPtr` → 强类型的单向管道」**。三条推论：

第一,**每个方法对应 `Agent` 上的一个属性，它们是一一对应的。** 我实测到的映射：`GetAgentPosition` → `Agent.Position`（`Agent.cs:680`）、`GetAgentMovementMode` → `Agent.MovementMode`（`:682`）、`GetAgentMovementDirectionAsAngle` → `Agent.MovementDirectionAsAngle`（`:690`）、`GetAgentControllerType` → `Agent.ControllerType`（`:1203`）、`GetAgentState` → `Agent.State`（`:1533`）。**全树 `AgentHelper.` 的调用点共 11 处，全部在 `Agent.cs` 里。**

第二,**每个方法都带 `[MethodImpl(MethodImplOptions.AggressiveInlining)]`。** 11 处（`:10`、`:17`、`:25`、`:32`、`:39`、`:46`、`:53`、`:60`、`:67`、`:74`、`:81`、`:88`、`:95`）全部如此。**因为它们是属性 getter 的实现体，JIT 若不内联，每次读 `agent.Position` 都会多一次函数调用。**

第三,**`SetAgentPosition` 的断言不是形式主义。** `:20` 的 `Debug.FailedAssert("Do not use this!", …)` 后面（`:21-22`）**照样执行了指针解引用与赋值**。所以这个断言不生效，**方法仍然会真的改写 native 内存**。而 `GetAgentIndex`（`:26`）在 11 个方法里**是唯一一个没有 `SetAgent` 对偶的读方法** —— 我确认了全类只有 `SetAgentPosition` 一个写方法。

边界：**`internal static class` + `unsafe`**，编译期不可引用；且 `Module` 是 `TaleWorlds.MountAndBlade.Helpers`（独立的辅助程序集），不在 `TaleWorlds.MountAndBlade` 主程序集里。

## 如何使用

**怎么拿到它**：**你拿不到它。** 全部 11 个调用点都在 `Agent.cs` 内部。对应的公开面是 [Agent](../Agent/) 的那些属性：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

// 这四个属性全部是 AgentHelper 的转发（Agent.cs:680 / :682 / :690 / :1203）
Agent a = Mission.Current.MainAgent;
Vec3 p = a.Position;                    // -> AgentHelper.GetAgentPosition(PositionPointer)
Debug.Print("position = " + p + " mode=" + a.MovementMode + " angle=" + a.MovementDirectionAsAngle, 0);
Debug.Print("controller=" + a.ControllerType + " state=" + a.State, 0);
```

**用它最容易踩的一条**：**`SetAgentPosition` 的 `FailedAssert("Do not use this!")` 不会拦住你，代码会继续执行并真的写入 native 内存。** `:20` 的断言**不是 `return`、不是 `throw`** —— `:21-22` 紧接着就是 `*ptr = newPos;`。

**断言为什么不生效：机制在第二跳，不在 `Debug.FailedAssert` 自己。** `Debug.cs:117-123` 的 `FailedAssert` **有判空、也确实转发**：

```csharp
// bin/TaleWorlds.Library/TaleWorlds.Library/Debug.cs:117-123
public static void FailedAssert(string message, …)
{
    if (DebugManager != null)                                          // :119  有判空
    {
        DebugManager.Assert(condition: false, message, …);               // :121  确实转发
    }
}
```

**真正空的是它转发的那个实现**：

```csharp
// bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MBDebugManager.cs:33-35
void IDebugManager.Assert(bool condition, string message, string callerFile, string callerMethod, int callerLine)
{
}          // ← 空体。断言被转发到这里，然后什么都不做
```

**⇒ 排查时要看 `MBDebugManager.cs:33`，不是 `Debug.cs`。** 而且这段代码在任何构建里逐字相同 —— **「开发版拦得住、正式版拦不住」这个说法是错的**，它与构建配置无关。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `GetAgentPosition` | `[MethodImpl(AggressiveInlining)] internal unsafe static Vec3 GetAgentPosition(UIntPtr agentPositionPointer)` | 读坐标（`:11-15`）。`Agent.Position` 的实现体（`Agent.cs:680`）。**本类唯一「不是读一个枚举或 int」的方法** —— 它返回 `Vec3` 结构体，仍是单次解引用。 |
| `SetAgentPosition` | `[MethodImpl(AggressiveInlining)] internal unsafe static void SetAgentPosition(UIntPtr agentPositionPointer, ref Vec3 newPos)` | **本类唯一的写方法（`:18-23`）。** `:20` 是 `Debug.FailedAssert("Do not use this!")`，**断言之后 `:21-22` 继续执行指针赋值**。`ref Vec3` 形参避免再拷一份结构体。**源码自己标注了「不要用」。** |
| `GetAgentIndex` | `[MethodImpl(AggressiveInlining)] internal unsafe static int GetAgentIndex(UIntPtr indexPtr)` | 读索引（`:26-30`），返回 `int*` 的解引用。**这是 11 个方法里唯一没有 `SetAgentIndex` 对偶的** —— 全类只有一个 `Set*`。 |
| `GetAgentFlags` | `[MethodImpl(AggressiveInlining)] internal unsafe static AgentFlag GetAgentFlags(UIntPtr flagsPtr)` | 读标志位（`:33-37`），`AgentFlag*` 解引用。**它是位标志枚举，读取是原子的单次解引用。** |
| `GetAgentState` | `[MethodImpl(AggressiveInlining)] internal unsafe static AgentState GetAgentState(UIntPtr statePtr)` | 读状态（`:40-44`）。`Agent.State` 的实现体（`Agent.cs:1533`）。 |
| `GetAgentMovementMode` | `[MethodImpl(AggressiveInlining)] internal unsafe static AgentMovementMode GetAgentMovementMode(UIntPtr movementModePointer)` | 读移动模式（`:47-51`）。`Agent.MovementMode` 的实现体（`Agent.cs:682`）。 |
| `GetAgentControllerType` | `[MethodImpl(AggressiveInlining)] internal unsafe static AgentControllerType GetAgentControllerType(UIntPtr controllerTypePointer)` | 读控制权类型（`:54-58`）。`Agent.ControllerType` 的实现体（`Agent.cs:1203`）。 |
| `GetAgentMovementDirectionAsAngle` | `[MethodImpl(AggressiveInlining)] internal unsafe static float GetAgentMovementDirectionAsAngle(UIntPtr movementDirectionPointer)` | 读移动方向角（`:61-65`），返回 `float*` 解引用。`Agent.MovementDirectionAsAngle` 的实现体（`Agent.cs:690`）。**注意它是角度（float）不是向量。** |
| `GetPrimaryWieldedItemIndex` / `GetOffhandWieldedItemIndex` | `[MethodImpl(AggressiveInlining)] internal unsafe static EquipmentIndex GetPrimaryWieldedItemIndex(UIntPtr …)` / `GetOffhandWieldedItemIndex(UIntPtr …)` | 读主手/副手武器槽（`:68-72` 与 `:75-79`），返回 `EquipmentIndex*` 解引用。**成对出现** —— 一个拿主手一个拿副手。 |
| `GetChannel0CurrentActionIndex` / `GetChannel1CurrentActionIndex` | `[MethodImpl(AggressiveInlining)] internal unsafe static int GetChannel0CurrentActionIndex(UIntPtr …)` / `GetChannel1CurrentActionIndex(UIntPtr …)` | 读动画通道当前动作索引（`:82-86` 与 `:89-93`），返回 `int*` 解引用。**成对出现，`0`/`1` 是动画通道号而非大小写。** |
| `GetMaximumForwardUnlimitedSpeed` | `[MethodImpl(AggressiveInlining)] internal unsafe static float GetMaximumForwardUnlimitedSpeed(UIntPtr maximumForwardUnlimitedSpeed)` | 读最大前向速度（`:96-100`），`float*` 解引用。**类名里的 `Unlimited` 说明它是无上限的原始速度**，不是被地形/姿态约束后的实际速度。 |

## 真实示例

十一个方法的「指针类型 → 托管类型」对照表（这就是本类的全部）：

```csharp
// UIntPtr -> 类型* -> *解引用
//   GetAgentPosition                   Vec3*                -> Vec3                  :11-15
//   SetAgentPosition                   Vec3*                -> 写回 Vec3（带 "Do not use this!"）:18-23
//   GetAgentIndex                      int*                 -> int                   :26-30
//   GetAgentFlags                      AgentFlag*           -> AgentFlag             :33-37
//   GetAgentState                      AgentState*          -> AgentState            :40-44
//   GetAgentMovementMode               AgentMovementMode*   -> AgentMovementMode     :47-51
//   GetAgentControllerType             AgentControllerType* -> AgentControllerType   :54-58
//   GetAgentMovementDirectionAsAngle   float*               -> float                 :61-65
//   GetPrimaryWieldedItemIndex         EquipmentIndex*      -> EquipmentIndex        :68-72
//   GetOffhandWieldedItemIndex         EquipmentIndex*      -> EquipmentIndex        :75-79
//   GetChannel0CurrentActionIndex      int*                 -> int                   :82-86
//   GetChannel1CurrentActionIndex      int*                 -> int                   :89-93
//   GetMaximumForwardUnlimitedSpeed    float*               -> float                 :96-100
Debug.Print("12 个方法，11 读 1 写；11 个调用点全在 Agent.cs", 0);
```

`SetAgentPosition` 的三行（这就是它全部的「不要用」理由）：

```csharp
// :19  Debug.FailedAssert("Do not use this!", ".../Helper.cs", "SetAgentPosition", 20);
// :21  Vec3* ptr = (Vec3*)agentPositionPointer.ToPointer();
// :22  *ptr = newPos;
// 断言不是 return 也不是 throw —— Debug.cs:117-123 转发到 DebugManager.Assert，
// 而 bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MBDebugManager.cs:33-35 的
// void IDebugManager.Assert(...) { } 是空体 ⇒ 断言不生效，于是 :21-:22 照常执行
// 这段代码在任何构建里逐字相同，与构建配置无关
Debug.Print("断言失败不会阻止写入", 0);
```

## 风险与边界

- **`internal static class`，编译期不可引用。** 全部 11 个调用点在 `Agent.cs` 内部。
- **`unsafe` + 裸指针解引用。** 11 个方法都**不做任何指针有效性检查** —— 传一个无效 `UIntPtr` 就是访问违规，不是友好异常。
- **`SetAgentPosition` 的断言不阻止写入。** `:20` 断言 + `:21-22` 写入。**归因要指对地方**：`Debug.cs:117-123` 的 `FailedAssert` 有判空且会转发（`:119`/`:121`），空的是转发目标 `MBDebugManager.cs:33-35` 的 `void IDebugManager.Assert(…) { }`。**这是本类唯一有副作用的方法，也是唯一被源码自己标注「不要用」的。**
- **11 个读方法对应 11 个指针，类型各不相同。** **传错类型的指针不会报错，只会读到垃圾值。** 这些指针都由 C++ 侧生成，`UIntPtr` 不携带类型信息 —— **类型正确性完全靠 `Agent` 那边的调用方保证。**
- **全部方法标 `AggressiveInlining`。** 这是性能选择，但也意味着**它们没有独立的存在意义**（会被内联掉）；**不要以性能为理由单独调用它们。**
- **`GetAgentIndex` 没有对偶的 setter。** 全类只有一个 `Set*`，而 `Agent` 的 `Index` 显然不可能被外部改写。
- **指针是 live 的。** 这些 `UIntPtr` 由 native 侧持有，**其有效性取决于 Agent 是否还活着** —— 我**没有读 `Agent` 的指针字段如何被初始化/释放**，故不写生命周期规则。
- **程序集不同。** 本类在 `bin/TaleWorlds.MountAndBlade.Helpers/` 而非主程序集，**引用它需要那个辅助程序集**（mod 通常已经通过 TaleWorlds.MountAndBlade 间接依赖它）。

## 参见

- 唯一的消费方：[Agent](../Agent/) —— `Position`（`Agent.cs:680`）、`MovementMode`（`:682`）、`MovementDirectionAsAngle`（`:690`）、`ControllerType`（`:1203`）、`State`（`:1533`）；全树 `AgentHelper.` 共 11 处调用，全在这个文件里
- 指针类型：[Vec3](../../core-extra/Vec3/)、`AgentFlag` / `AgentState` / `AgentMovementMode` / `AgentControllerType`、`EquipmentIndex`
- 同桶：[HitType](../HitType/)、[ItemType](../ItemType/)、[Target](../Target/)（同为 `protected`/`internal` 枚举），[ScriptingInterfaceBase](../ScriptingInterfaceBase/)、[ThumbnailDebugUtility](../ThumbnailDebugUtility/)、[ItemInnerData](../ItemInnerData/)、[ItemList](../ItemList/)、[MultiplayerCultureColorInfo](../MultiplayerCultureColorInfo/)、[DefineGameNetworkMessageType](../DefineGameNetworkMessageType/)、[DefineSynchedMissionObjectType](../DefineSynchedMissionObjectType/)、[DropExtraWeaponOnStopUsageComponent](../DropExtraWeaponOnStopUsageComponent/)
- 桶首页：[mission API 分区](../)