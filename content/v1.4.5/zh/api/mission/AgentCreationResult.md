---
title: "AgentCreationResult"
description: "原生侧创建 Agent 时回传的一把原生指针：15 个字段（1 个 int + 14 个 UIntPtr），由 IMBMission.CreateAgent 填充、被 Agent 构造器逐个搬进私有字段——而读这些指针的是 AgentHelper。"
---

# AgentCreationResult

**Namespace:** `TaleWorlds.MountAndBlade`（嵌套在 `Mission` 内）
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `internal struct AgentCreationResult`（嵌套于 `public class Mission`）
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/Mission.cs`

## 概述

`AgentCreationResult` 是 30 行、**15 个字段、零方法**的纯数据交换结构体，声明在 `Mission.cs:339-368`（嵌套在 `Mission` 内）。它只有两种字段：**1 个 `int Index`**（`:341`）与 **14 个 `UIntPtr`**（`AgentPtr` 到 `MaximumForwardUnlimitedSpeed`）。

它由 `Mission.CreateAgentInternal`（`:1634-1637`）产出，而那个方法**只有一行**：`return MBAPI.IMBMission.CreateAgent(Pointer, …)`（`:1636`）。它的唯一消费者是 `Agent` 的 internal 构造器（`Agent.cs:1561`），后者在 `:1565-1575` 把这 15 个字段**逐个搬进 `Agent` 的私有字段**。

## 心智模型

把它当成**「原生侧一次性交付的句柄包」**。三条推论：

第一,**它是「指针的来源」，不是「数据的来源」。** 14 个字段全是**未解引用的原生地址**。`Agent` 拿到它们之后不解引用，而是存成 `_positionPointer` / `_flagsPointer` / `_statePointer` …（`Agent.cs:1567-1575`），**真正解引用的时机在每次读属性的时候**，由 [AgentHelper](../AgentHelper/) 那 12 个方法完成。

第二,**`AgentHelper` 的读方法与这 14 个字段几乎一一对应。** 我实测的对应关系：`IndexPtr`→`GetAgentIndex`、`FlagsPtr`→`GetAgentFlags`、`StatePtr`→`GetAgentState`、`MovementModePointer`→`GetAgentMovementMode`、`ControllerPointer`→`GetAgentControllerType`、`MovementDirectionPointer`→`GetAgentMovementDirectionAsAngle`、`PrimaryWieldedItemIndexPointer`→`GetPrimaryWieldedItemIndex`、`OffHandWieldedItemIndexPointer`→`GetOffhandWieldedItemIndex`、`MaximumForwardUnlimitedSpeed`→`GetMaximumForwardUnlimitedSpeed`。**⇒ 这两页必须一起读，否则读者会以为「Agent 自己去原生取数据」。**

第三,**14 个里有 2 个是「每实例」而不是「每类」。** `AgentPtr`（`:343`）与 `PositionPtr`（`:345`）对应的 `AgentHelper.GetAgentPosition`（`Agent.cs:680` 的 `Position` 属性走它）**不经过 `IMBAgent`** —— 见 [IMBAgent](../IMBAgent/) 页里「`get_position` 绑定从未被调用」那条。**⇒ 本结构体的字段与 `IMBAgent` 的绑定是两套东西，不要混。**

边界：**`internal` 嵌套结构体**，编译期不可引用；**它只在任务创建 Agent 的那一刻有意义**，之后没有任何人再读它。

## 如何使用

**怎么拿到它**：**拿不到。** 它是 `internal struct`，且全树只有两处引用：`Mission.cs:1636`（填）与 `Agent.cs:1561`（取）。mod 编译期既不能 `new` 它也不能读它。

复现「15 个字段 → Agent 的 15 个私有字段」这个搬运（这是本页与 `AgentHelper` 的连接点）：

```csharp
using TaleWorlds.MountAndBlade;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

Agent a = Mission.Current.MainAgent;
// Agent.cs:1565-1575 的搬运结果：这些属性各自持有一个原生指针
//   Index(1565) _pointer(1566) _positionPointer(1567) _flagsPointer(1568) _indexPointer(1569)
//   _statePointer(1570) _movementModePointer(1571) _controllerTypePointer(1572)
//   _movementDirectionPointer(1573) _primaryWieldedItemIndexPointer(1574) _offHandWieldedItemIndexPointer(1575)
// 每次读属性时才解引用，走的是 AgentHelper 而非 IMBAgent：
Debug.Print("index=" + a.Index + " state=" + a.State + " pos=" + a.Position, 0);
```

**用它最容易踩的一条**：**它不是「Agent 的快照」，是「原生指针的收据」。** 字段里没有一个是值——**`Position` 那类数据不在这 15 个字段里，它在这 15 个字段指向的原生内存里。** 所以「读 `creationResult.PositionPtr` 得到位置」是错的：**那是一个地址，要再经 `AgentHelper.GetAgentPosition` 解引用一次。** 而原生侧若在 Agent 销毁后回收那块内存，**这些指针就全部悬空** —— 我**没有读原生侧的释放时机**，故不断言何时会悬空。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Index` | `internal int Index` | `:341` —— **15 个字段里唯一的值类型**（其余 14 个是 `UIntPtr`）。它就是「Agent 的索引」，由原生侧在创建时分配，托管侧在 `Agent.cs:1565` 直接搬进 `Agent.Index`。**注意它不是指针，而是从原生侧回传的整数。** |
| `AgentPtr` / `PositionPtr` | `internal UIntPtr AgentPtr`（`:343`）/ `PositionPtr`（`:345`） | Agent 本体指针与位置指针。`Agent.cs:1566`/`:1567` 分别搬进 `_pointer` 与 `_positionPointer`。**`PositionPtr` 由 [AgentHelper](../AgentHelper/) 的 `GetAgentPosition` 解引用（`Agent.cs:680` 的 `Position` 属性），不经 `IMBAgent`。** |
| `IndexPtr` / `FlagsPtr` / `StatePtr` | `:347` / `:349` / `:351` | 分别对应 `AgentHelper` 的 `GetAgentIndex` / `GetAgentFlags` / `GetAgentState`（`Agent.cs:1533` 的 `State` 属性走后者）。 |
| `MovementModePointer` / `ControllerPointer` / `MovementDirectionPointer` | `:353` / `:355` / `:357` | 对应 `GetAgentMovementMode`（`Agent.cs:682` 的 `MovementMode`）、`GetAgentControllerType`（`:1203`）、`GetAgentMovementDirectionAsAngle`（`:690`）。**这三者都经 `IMBAgent` 的 `get_` 绑定**，与 `PositionPtr` 不同路径。 |
| `PrimaryWieldedItemIndexPointer` / `OffHandWieldedItemIndexPointer` | `:359` / `:361` | 主手/副手武器槽。对应 `GetPrimaryWieldedItemIndex` / `GetOffhandWieldedItemIndex`，返回类型都是 `EquipmentIndex`。 |
| `Channel0CurrentActionPointer` / `Channel1CurrentActionPointer` | `:363` / `:365` | 两个动画通道的当前动作索引。对应 `AgentHelper` 的 `GetChannel0CurrentActionIndex` / `GetChannel1CurrentActionIndex`。 |
| `MaximumForwardUnlimitedSpeed` | `internal UIntPtr MaximumForwardUnlimitedSpeed` | `:367`，**最后一个字段**。对应 `GetMaximumForwardUnlimitedSpeed`，返回 `float`。**注意它的名字没有 `Pointer` 后缀，而其余 13 个指针字段都有** —— 命名不一致，但类型同为 `UIntPtr`。 |

## 真实示例

字段清单与解引用方的完整对应（这是本页真正的知识）：

```csharp
// 15 个字段（Mission.cs:341-367）与解读者：
//   int  Index                          (:341)  -> 直接是值，Agent.cs:1565
//   UIntPtr AgentPtr                    (:343)  -> Agent.cs:1566 _pointer
//   UIntPtr PositionPtr                 (:345)  -> AgentHelper.GetAgentPosition        （不走 IMBAgent）
//   UIntPtr IndexPtr                    (:347)  -> AgentHelper.GetAgentIndex
//   UIntPtr FlagsPtr                    (:349)  -> AgentHelper.GetAgentFlags
//   UIntPtr StatePtr                    (:351)  -> AgentHelper.GetAgentState           （Agent.cs:1533）
//   UIntPtr MovementModePointer         (:353)  -> AgentHelper.GetAgentMovementMode    （Agent.cs:682）
//   UIntPtr ControllerPointer           (:355)  -> AgentHelper.GetAgentControllerType  （Agent.cs:1203）
//   UIntPtr MovementDirectionPointer    (:357)  -> AgentHelper.GetAgentMovementDirectionAsAngle（Agent.cs:690）
//   UIntPtr PrimaryWieldedItemIndexPointer(:359) -> AgentHelper.GetPrimaryWieldedItemIndex
//   UIntPtr OffHandWieldedItemIndexPointer(:361) -> AgentHelper.GetOffhandWieldedItemIndex
//   UIntPtr Channel0CurrentActionPointer(:363)  -> AgentHelper.GetChannel0CurrentActionIndex
//   UIntPtr Channel1CurrentActionPointer(:365)  -> AgentHelper.GetChannel1CurrentActionIndex
//   UIntPtr MaximumForwardUnlimitedSpeed(:367) -> AgentHelper.GetMaximumForwardUnlimitedSpeed
// ⇒ 14 个指针里，13 个由 AgentHelper 解引用；只有 PositionPtr 走的是 AgentHelper 而非 IMBAgent 绑定
Debug.Print("14 个指针，13 个交给 AgentHelper 解引用", 0);
```

产出与消费的链路只有三跳（这是全树唯一的调用链）：

```csharp
// ① Mission.cs:1634-1637  private AgentCreationResult CreateAgentInternal(...)
//      :1636  return MBAPI.IMBMission.CreateAgent(Pointer, (ulong)agentFlags, …, instanceNo);
//         ↑ 委托给 IMBMission.cs:163 的 CreateAgent（绑定名 create_agent）
// ② 全树唯一 new 出来的路径：Mission.cs:4045
//      AgentCreationResult creationResult = CreateAgentInternal(…);
// ③ Agent.cs:1561  internal Agent(Mission mission, Mission.AgentCreationResult creationResult, …)
//      :1565-1575  把 15 个字段逐个搬进 Agent 的私有字段
// ⇒ 中间没有任何缓存、没有校验、没有 null 检查
Debug.Print("产出 1636 -> 4045 -> 消费 1561，三跳", 0);
```

## 风险与边界

- **`internal struct` 嵌套类型，编译期不可引用。** 全树只有 `Mission.cs:1636` 与 `Agent.cs:1561` 两处引用。
- **零方法、零校验。** 15 个字段全是 `internal`，**没有任何构造器、没有 `readonly`、没有属性**。原生侧返回什么就是什么。
- **字段是地址不是数据。** 见「最容易踩的一条」。
- **`MaximumForwardUnlimitedSpeed`（`:367`）命名与其他 13 个指针不一致** —— 没有 `Pointer` 后缀，但类型是 `UIntPtr`。**排错时别按名字找。**
- **`PositionPtr` 与其余指针的读取路径不同。** 它经 `AgentHelper.GetAgentPosition`（`Agent.cs:680`），**而 `IMBAgent.get_position`（`IMBAgent.cs:171`）那个绑定从未被调用** —— 见 [IMBAgent](../IMBAgent/)。**⇒ 不要以为「所有原生读取都走 `IMB*`」。**
- **指针何时悬空：未核查。** 原生侧的 Agent 释放时机在 `Bannerlord.Native.dll` 里，**不在源码树**。我**不断言**这些指针在什么条件下会失效。
- **`CreateAgentInternal` 是单行委托（`:1636`）。** 它不做任何参数转换，**包括把 `ref capsuleData.BodyCap` 拆成两个实参**（`IMBMission.cs:163` 的形参是 `ref CapsuleData bodyCapsule` 与 `ref CapsuleData crouchedBodyCapsule` 两个）。

## 参见

- 解引用方：[AgentHelper](../AgentHelper/)（12 个 `UIntPtr` → 类型的直接解引用方法，每个带 `AggressiveInlining`）、[Agent](../Agent/)（`:1561` 的 internal 构造器、`:680` 的 `Position`）
- 委托目标：[IMBMission](../IMBMission/)（`:163` 的 `create_agent` 绑定）
- 相关：[IMBAgent](../IMBAgent/)（`get_position` 绑定未被调用的那条）、[MBTestRun](../IMBTestRun/) 与 [IMBNetwork](../IMBNetwork/)（硬编码常量族）
- 桶首页：[mission API 分区](../)