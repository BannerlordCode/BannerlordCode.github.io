---
title: "MBNetworkPeer"
description: "把 NetworkCommunicator 包成 DotNetObject 的一层壳：13 行、一个只读属性，存在的意义是能被原生侧 SetUserData 按索引存回去。"
---

# MBNetworkPeer

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `internal class MBNetworkPeer : DotNetObject`
**Base:** `DotNetObject`（TaleWorlds.DotNet）
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MBNetworkPeer.cs`

## 概述

`MBNetworkPeer` 是 13 行、1 个属性的**单层包装**。它继承 `DotNetObject`（`TaleWorlds.DotNet` 里的原生互操作基类），只有一个 `public NetworkCommunicator NetworkPeer { get; }`（`:7`），由构造器（`:9-12`）赋值。

它存在的理由在它**被创建的那一行**里：全树有 4 处 `new MBNetworkPeer(networkCommunicator)`，其中 `GameNetwork.cs:783` 的形状是 `MBAPI.IMBPeer.SetUserData(num, new MBNetworkPeer(networkCommunicator))` —— **因为 `IMBPeer.SetUserData(int, MBNetworkPeer)`（`IMBPeer.cs:10`）的第二个形参类型正是本类**，所以这个包装必须存在：原生侧按整数索引存一个 `DotNetObject`，托管侧再取回来。

## 心智模型

把它当成**「一个为了跨语言边界而存在的信封」**。三条推论：

第一,**它包的 `NetworkCommunicator` 才是有行为的那个。** 本类没有任何方法、没有任何逻辑，只有一行 `NetworkPeer = networkPeer;`（`:11`）。**所有连接状态判断（`IsServerPeer`、`IsNetworkActive`）都在 `NetworkCommunicator` 上，本类不转发、不缓存、不校验。**

第二,**`DotNetObject` 基类提供了跨语言的身份。** 这是 `TaleWorlds.DotNet` 的一整套机制：`SetUserData(int index, ...)` 把托管对象挂到原生侧，`GetUserData` 取回。**所以 `MBNetworkPeer` 的「身份」不来自它的字段，而来自「它被挂在哪个 index 上」。**

第三,**没有 null 检查。** `:11` 直接赋值。**`new MBNetworkPeer(null)` 完全合法**，得到一个 `NetworkPeer == null` 的实例 —— 而所有下游代码若直接 `peer.NetworkPeer.IsServerPeer` 就会空引用。**我确认了构造器无校验，但「上游是否保证非 null」我没有逐个调用点核过**，故不断言。

边界：**`internal` 类**，编译期不可引用。**而它实现的 `IMBPeer.SetUserData` 那侧是原生接口**（`IMBPeer.cs`）—— 那一半的实现不在源码树里。

## 如何使用

**怎么拿到它**：**只能 `new`。** 四个创建点里三个是引擎内部的包装，一个是对原生接口的写入：

```csharp
using TaleWorlds.MountAndBlade;
using TaleWorlds.Network;

// GameNetwork.cs:783  MBAPI.IMBPeer.SetUserData(num, new MBNetworkPeer(networkCommunicator));
// NetworkCommunicator.cs:194  MBNetworkPeer data = new MBNetworkPeer(obj);
// 读回侧的形状（消费点 GameNetwork.cs:550 / :641）：
//   HandleRemovePlayer(MBNetworkPeer peer, bool isTimedOut)
//   HandleNetworkPacketAsServer(MBNetworkPeer networkPeer)
// 而 IMBPeer.cs:10 的签名是 void SetUserData(int index, MBNetworkPeer data);
//   —— 第二个形参就是本类，这就是它必须存在的原因
NetworkCommunicator comm = new NetworkCommunicator();
MBNetworkPeer wrapper = new MBNetworkPeer(comm);
Debug.Print("wrapped = " + (wrapper.NetworkPeer == null ? "null" : "ok"), 0);
```

**用它最容易踩的一条**：**它没有 `Equals`/`GetHashCode` 重写，也没有身份语义。** 两个包着同一个 `NetworkCommunicator` 的 `MBNetworkPeer` 实例**互相不等**（引用相等语义）。而原生侧是按 `index` 存的 —— **所以「同一个 peer」在两侧是两种不同的判定方式：托管侧比引用，原生侧比 index。**

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `NetworkPeer` | `public NetworkPeer NetworkPeer { get; }` | **本类的全部（`:7`）。** 只读、无 setter，由 `:11` 赋值。**类型是 `NetworkCommunicator`（`TaleWorlds.Network`），不是原生 peer。** 所有连接状态查询都要穿过它去 `NetworkCommunicator` 上做。 |
| `MBNetworkPeer(NetworkCommunicator)` | `internal MBNetworkPeer(NetworkCommunicator networkPeer)` | 唯一构造器（`:9-12`）。`:11` 一行赋值。**无 null 检查、无重复检查**。**全树 4 个调用点**（`GameNetwork.cs:783`、`NetworkCommunicator.cs:194` 等）。 |

## 真实示例

四个创建点与「为什么要这个壳」的完整链条：

```csharp
// ① GameNetwork.cs:783        MBAPI.IMBPeer.SetUserData(num, new MBNetworkPeer(networkCommunicator));
// ② NetworkCommunicator.cs:194 MBNetworkPeer data = new MBNetworkPeer(obj);
// ③ GameNetwork.cs:550         internal static void HandleRemovePlayer(MBNetworkPeer peer, bool isTimedOut)
// ④ GameNetwork.cs:641         internal static bool HandleNetworkPacketAsServer(MBNetworkPeer networkPeer)
// 形状由 IMBPeer.cs:10 决定：void SetUserData(int index, MBNetworkPeer data);
//   ^ 第二个形参类型就是 MBNetworkPeer —— 没有这个包装就存不进去
Debug.Print("4 个命中：2 处创建、2 处作为形参类型", 0);
```

`DotNetObject` 基类带来的能力与本类自带的（对比）：

```csharp
// 本类自带：1 个只读属性（:7）+ 1 个构造器（:9-12）
// 基类 DotNetObject（TaleWorlds.DotNet）提供：原生侧按 index 存取托管对象的身份
// 所以本类的方法数 = 0，全部能力都来自两处：
//   ① DotNetObject 的跨语言身份
//   ② NetworkPeer 这一个只读转发
Debug.Print("本类零方法、零字段可写，只有一个只读转发", 0);
```

## 风险与边界

- **`internal` 类，编译期不可引用。** 四个创建点全在引擎内部。
- **零方法、零校验。** 只有 `:11` 一行赋值。**`new MBNetworkPeer(null)` 合法**，得到 `NetworkPeer == null` 的实例。
- **没有 `Equals` / `GetHashCode` 重写。** 包着同一个 `NetworkCommunicator` 的两个实例互相不等 —— 而原生侧按 `index` 判同。**两侧的「同一个 peer」不是同一个判定。**
- **原生侧的实现不在源码树里。** `IMBPeer`（`IMBPeer.cs`）的另一半在 `Bannerlord.Native.dll`，**所以「SetUserData 之后怎样被取回」我只看到调用点，没看到实现**。
- **它不是 `IMBPeer`。** 本类继承 `DotNetObject`；`IMBPeer` 是它被塞进去的那个原生接口。**两个名字相近的东西没有继承关系。**
- **`NetworkCommunicator` 上才有状态。** `IsServerPeer` / `IsNetworkActive` 都在那边 —— 对照 [PlayerTypes](../PlayerTypes/) 的 `PlayerType` getter（`MissionRepresentativeBase.cs:23`/`:25`）正是读这两个字段。

## 参见

- 基类：`TaleWorlds.DotNet.DotNetObject`（在 `bin/TaleWorlds.DotNet/`，**该程序集的源码在 1.4.5 树里**，但本类只用到它的身份能力）
- 载荷：[NetworkCommunicator](../../mission-ext/NetworkCommunicator/)（`IsServerPeer` / `IsNetworkActive` 等连接状态都在它上面）
- 跨语言接口：`IMBPeer`（`bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/IMBPeer.cs:10` 的 `void SetUserData(int index, MBNetworkPeer data)`；实现在 `Bannerlord.Native.dll`，**不在源码树**）
- 创建与消费点：`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/GameNetwork.cs:783`、`:550`、`:641`；`NetworkCommunicator.cs:194`
- 同桶：[AgentHelper](../AgentHelper/)、[Target](../Target/)、[ItemType](../ItemType/)、[HitType](../HitType/)、[PlayerTypes](../PlayerTypes/)、[DynamicNavmeshLocalIds](../DynamicNavmeshLocalIds/)、[ProximityMapSearchStructInternal](../ProximityMapSearchStructInternal/)、[PerkAssemblyCollection](../PerkAssemblyCollection/)、[TacticOption](../TacticOption/)、[DropExtraWeaponOnStopUsageComponent](../DropExtraWeaponOnStopUsageComponent/)
- 桶首页：[mission API 分区](../)