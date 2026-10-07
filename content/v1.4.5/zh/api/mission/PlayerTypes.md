---
title: "PlayerTypes"
description: "「这个任务代表是谁」的枚举：三个成员（Bot/Client/Server），由 PlayerType 属性的 getter 现算——它从不存字段，每次读都去问 NetworkCommunicator。"
---

# PlayerTypes

**Namespace:** `TaleWorlds.MountAndBlade`（嵌套在 `public abstract class MissionRepresentativeBase` 内）
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `protected enum PlayerTypes`（嵌套于 `public abstract class MissionRepresentativeBase`）
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionRepresentativeBase.cs`

## 概述

`PlayerTypes` 是 6 行的 `protected` 嵌套枚举，声明在 `MissionRepresentativeBase.cs:8-13`，三个成员：`Bot`（序号 0）/ `Client`（1）/ `Server`（2）。

它**没有自己的存储**。真正的值由宿主的一个计算属性 `protected PlayerTypes PlayerType { get; }`（`:19-33`）现算，判定链只有两层：`Peer.Communicator.IsNetworkActive`（`:23`）→ 若网络活跃再看 `!Peer.Communicator.IsServerPeer`（`:25`）→ **两者都不满足就是 `Bot`**。

## 心智模型

把它当成**「一个关于网络状态的提问」**。三条推论：

第一,**它是被问出来的，不是被记下来的。** `:21-32` 的 getter 每次读都走一遍 `Communicator` 的两个布尔属性。**所以中途从单机变联机（或反之）时，同一个对象的 `PlayerType` 会跟着变** —— 没有缓存、没有失效通知。

第二,**「不是服务器」不等于「是客户端」。** `:25-28` 的分支是「若 `!IsServerPeer` 返回 `Client`，否则返回 `Server`」。**在只有一台机器同时扮演服务器与本地玩家的情况下（listen server），这一层判定会给出 `Server`** —— 我确认了 `:29` 是 `return PlayerTypes.Server;`，**而这个「Server 代表是否也控制本地 Agent」的问题由别处处理**（见「如何使用」）。

第三,`Bot` 是 `:31` 的兜底分支 —— **只要网络没激活就是 `Bot`**。所以单机任务里**所有**任务代表的 `PlayerType` 都是 `Bot`，包括玩家自己的那个。

边界：**`protected` 嵌套枚举**，编译期只有 `MissionRepresentativeBase` 的派生类可见。而宿主是 `public abstract`，所以 mod 可以派生并使用。

## 如何使用

**怎么拿到它**：读宿主的 `PlayerType` 属性（`:19`），**不存字段**。

判定链复现（这是本类的全部）：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

// MissionRepresentativeBase.cs:21-32
//   if (Peer.Communicator.IsNetworkActive)          :23
//       if (!Peer.Communicator.IsServerPeer)  -> Client   :25-28
//       else                                -> Server   :29
//   else                                     -> Bot      :31
public PlayerTypes Classify(bool isNetworkActive, bool isServerPeer)
{
    if (isNetworkActive)
    {
        return isServerPeer ? PlayerTypes.Server : PlayerTypes.Client;
    }
    return PlayerTypes.Bot;
}
Debug.Print("单机=" + Classify(false, false) + "  主机=" + Classify(true, true) + "  客机=" + Classify(true, false), 0);
```

**用它最容易踩的一条**：**单机任务里 `PlayerType` 恒为 `Bot`，包括玩家自己那个代表。** `:31` 的兜底不看「这是不是玩家」。所以想靠 `PlayerType == PlayerTypes.Bot` 来区分「AI 控制的代表」与「玩家代表的离线形态」是错的 —— **玩家在单机下也是 `Bot`**。玩家身份要另外看 `ControlledAgent`（`:35`，`public Agent ControlledAgent { get; private set; }`）。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Bot` | `Bot`（枚举成员，序号 0，`MissionRepresentativeBase.cs:10`） | **单机兜底值。** `:31` 的 `return PlayerTypes.Bot;` 是网络未激活时的唯一出口 —— **所以单机下玩家代表与 AI 代表返回同一个值。** |
| `Client` | `Client`（枚举成员，序号 1，`:11`） | 联机中的非服务器端。**判定依据是 `!IsServerPeer`（`:25`），即「不是服务器」而不是「是客户端」。** |
| `Server` | `Server`（枚举成员，序号 2，`:12`） | 联机中的服务器端。**`:29` 是「排除了 Client 之后的剩余情况」**，所以主机（listen server）上的本地玩家也得到这个值。 |

## 真实示例

消费点怎么用这三个值（这是本类唯一需要看别处的地方）：

```csharp
// MissionRepresentatives/DuelMissionRepresentative.cs 的四处 case：
//   :105  case PlayerTypes.Client:
//   :110  case PlayerTypes.Server:
//   :119  case PlayerTypes.Client:
//   :125  case PlayerTypes.Server:
//   :187  case PlayerTypes.Bot:
// => 消费点用【枚举名】switch，而不是像 Target 那样比整数 —— 这是本类与 Target 的关键差别
// Target 的四个消费点（AlternativeEquipmentEffect.cs:56 等）全部写 (int)EffectTarget == 0/1/2
Debug.Print("PlayerTypes 被按名字 switch；Target 被比整数", 0);
```

`PlayerType` 与 `ControlledAgent` 的分工（单机时的判别方式）：

```csharp
// :19-33  PlayerType  —— 只回答「网络角色」，单机恒 Bot
// :35     public Agent ControlledAgent { get; private set; }  —— 回答「这个代表控制哪个 Agent」
// 所以「是不是玩家」要看 ControlledAgent，不能看 PlayerType
// 而 :37 的 public int Gold 有自己的 _gold < 0 兜底（:41-42），与 PlayerType 无关
Debug.Print("玩家身份看 ControlledAgent，不看 PlayerType", 0);
```

## 风险与边界

- **`protected` 嵌套枚举，编译期只有派生类可见。** `:8`。宿主 `MissionRepresentativeBase` 是 `public abstract`，派生可行。
- **没有存储，全靠 getter 现算。** `:21-32`。**单机/联机切换后同一个实例的返回值会变。**
- **单机下玩家代表也是 `Bot`。** `:31`。见「如何使用」。
- **「不是服务器」被当作「客户端」。** `:25`。**listen server 的本地玩家得到 `Server`。**
- **`Peer` 无 null 检查。** `:23` 的 `base.Peer.Communicator` 若 `Peer` 为 null 会空引用。**我没有读 `Peer` 的赋值时机**，故不断言它是否可能为 null。
- **消费点按枚举名 switch，不比整数。** `DuelMissionRepresentative.cs:105`/`:110`/`:119`/`:125`/`:187`。**这与 [Target](../Target/) 的四个消费点全部比整数正好相反** —— 所以本枚举的**声明顺序不是硬契约**，重排成员不会破坏消费方。**这一点我实测过消费点写法，与 Target 的差别是确定的。**
- **名字里带引号的 XML 之类无关。** 无。

## 参见

- 宿主：`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionRepresentativeBase.cs:8-13`（本枚举）、`:19-33`（`PlayerType` getter）、`:35`（`ControlledAgent`）、`:37`（`Gold`）
- 载荷：[NetworkCommunicator](../../mission-ext/NetworkCommunicator/)（`IsNetworkActive` / `IsServerPeer`，见 `:23` 与 `:25`）、[MissionPeer](../../mission-ext/MissionPeer/)（`Peer`）
- 消费点：`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionRepresentatives/DuelMissionRepresentative.cs:105`、`:110`、`:119`、`:125`、`:187`
- 写法相反的对照：[Target](../Target/)（四个消费点 `AlternativeEquipmentEffect.cs:56` / `ArmorEffect.cs:43` / `DrivenPropertyOnSpawnEffect.cs:47` / `HitpointsEffect.cs:34` **全部比整数**）
- 同桶：[MBNetworkPeer](../MBNetworkPeer/)（包 `NetworkCommunicator` 的那一层壳）、[AgentHelper](../AgentHelper/)、[ItemType](../ItemType/)、[HitType](../HitType/)、[DynamicNavmeshLocalIds](../DynamicNavmeshLocalIds/)、[ProximityMapSearchStructInternal](../ProximityMapSearchStructInternal/)、[PerkAssemblyCollection](../PerkAssemblyCollection/)、[TacticOption](../TacticOption/)
- 桶首页：[mission API 分区](../)