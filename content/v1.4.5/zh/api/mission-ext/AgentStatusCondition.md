---
title: "AgentStatusCondition"
description: "多人 perk 条件之一：判断一个 Agent 当前是徒步还是骑马，由 XML 的 agent_status 属性驱动，只能通过 MPPerkCondition 的反射注册表创建。"
---

# AgentStatusCondition

**Namespace:** `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Conditions`
**Module:** `TaleWorlds.MountAndBlade.Multiplayer`（`Modules.CustomBattle` 下的 Multiplayer 程序集；`Modules.Multiplayer` 下有一份同构副本）
**Type:** `public class AgentStatusCondition : MPPerkCondition`
**Base:** `TaleWorlds.MountAndBlade.MPPerkCondition`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Conditions/AgentStatusCondition.cs`

## 概述

`AgentStatusCondition` 是一个两分支的**条件谓词**：给定一个 [Agent](../../mission/Agent/)，回答「他现在徒步还是在马背上」。判定逻辑只有一行语义——`agent.MountAgent == null` 就算 `OnFoot`，否则算 `OnMount`——然后和构造期从 XML 读到的目标状态比。

它是**多人对战 perk / 特性（perk）体系**的一个零件，不是通用单人 API。整条链路是：perk XML → [MPConditionalEffect](../MPConditionalEffect/) 解析 `<Conditions>` 子节点 → `MPPerkCondition.CreateFrom(gameModes, node)` → 按 `type="AgentStatus"` 在静态注册表里反射出本类型并 `Deserialize` → 条件生效时由引擎逐个 `Check(peer)` 或 `Check(agent)`。**单人战役 / 自定义战斗任务里没有任何代码会调用它**，除非你自己去跑那套 perk 系统。

## 心智模型

把它当成**「XML 驱动的状态布尔量」**，三个推论：

第一，**它不能被 `new`。** 构造器是 `protected AgentStatusCondition()`，类本身是 `public` 但没有公开构造。唯一的创建途径是 `MPPerkCondition.CreateFrom`，它用 `Activator.CreateInstance(Registered[key], BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic, ...)` 显式允许非公开构造。

第二，**注册靠一个 `protected static` 字段的反射约定，而不是继承表**。[MPPerkCondition](../MPPerkCondition/) 的静态构造遍历 `PerkAssemblyCollection.GetPerkAssemblyTypes()` 里所有非抽象子类，读它们名为 `StringType` 的 `protected static` 字段（`BindingFlags.Static | BindingFlags.NonPublic`），把字段值当注册键。本类该字段的值是字符串 `"AgentStatus"`，与 XML 里的 `type="AgentStatus"` 对应。**改名或把它改成实例字段都会让注册静默失效。**

第三，**它只在联机 perk 事件点上求值，不逐帧跑。** `EventFlags` 返回硬编码的 `(PerkEventFlags)1024`，而 `PerkEventFlags` 枚举里 `1024 = 0x400 = MountChange`——也就是说**这个条件只在「某位玩家的坐骑发生变化」时被重新求值**。徒步相关的 perk 效果需要挂 `MountChange` 或更大的 `EventFlags` 掩码才会跟着更新，这一点非常反直觉。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `EventFlags` | `public override PerkEventFlags EventFlags => (PerkEventFlags)1024` | 覆写基类的 `None`，声明本条件需要响应的事件集合。`1024` 在 `MPPerkCondition.PerkEventFlags` 里对应 `MountChange = 0x400`。它的作用是让 perk 系统知道「哪些事件发生后需要重新问一遍这个条件」，**直接决定条件的求值时机**。硬编码而非具名常量，改事件语义要改这一行。 |
| `Check(MissionPeer)` | `public override bool Check(MissionPeer peer)` | 按网络对端求值。实现是一行转发：拿 `peer != null ? peer.ControlledAgent : null` 去调 `Check(Agent)`。`ControlledAgent` 是 [MissionPeer](../MissionPeer/) 上一个会穿透到 `NetworkCommunicator` 的属性（其 setter 里还会 `ResetSelectedPerks()`），**peer 为 null 时直接判 false**，不做任何兜底。 |
| `Check(Agent)` | `public override bool Check(Agent agent)` | 真正的判定逻辑。`agent != null` 时按 `agent.MountAgent == null` 区分 `OnFoot` / `OnMount` 并与 `_status` 比较；`agent == null` 时**返回 false**（而不是抛异常或返回 true）。`MountAgent` 在 `Agent.cs:1001` 是一个带 setter 的属性。 |
| `Deserialize(XmlNode)` | `protected override void Deserialize(XmlNode node)` | 读 XML 属性 `agent_status`，用 `Enum.TryParse<AgentStatus>(..., ignoreCase: true, out _status)` 解析。**解析失败走 `Debug.FailedAssert` 而不是抛异常**——发布构建里断言可能被编译掉，结果是 `_status` 保持默认值 `OnFoot`（枚举第一项）并静默生效。`AgentStatus` 枚举是 `private`，只有 `OnFoot` 与 `OnMount` 两个值。 |

## 死成员与陷阱

本页死成员状态未知：本页成员全部落在 UNSUPPORTED（多声明者歧义等），调用点数不可当结论；
本次未测出任何可复核的调用点。

## 真实示例

写一份和自己的 `AgentStatusCondition` 等价的判定（这是单人 mod 里唯一能走通的用法——自己实现，不依赖 perk 系统）：

```csharp
using TaleWorlds.MountAndBlade;

public static class AgentStatusProbe
{
    public static bool IsOnFoot(Agent agent)
    {
        // 与 AgentStatusCondition.Check(Agent) 同一套语义
        return agent != null && agent.MountAgent == null;
    }

    public static bool IsOnMount(Agent agent)
    {
        return agent != null && agent.MountAgent != null;
    }
}
```

在多人任务里对本地玩家求值——`ControlledAgent` 是联机才成立的属性，单人战役下会失败：

```csharp
using TaleWorlds.MountAndBlade;

Mission mission = Mission.Current;
if (mission == null || !GameNetwork.IsSessionActive)
{
    Debug.Print("no session: AgentStatusCondition is a multiplayer perk construct", 0);
    return;
}
// GameNetwork.NetworkPeers 是 NetworkCommunicator 列表，MissionPeer 是挂在它身上的 PeerComponent
foreach (NetworkCommunicator networkPeer in GameNetwork.NetworkPeers)
{
    MissionPeer peer = networkPeer.GetComponent<MissionPeer>();
    if (peer == null)
    {
        continue;
    }
    Agent controlled = peer.ControlledAgent;
    if (controlled == null)
    {
        continue;
    }
    Debug.Print("peer " + networkPeer.UserName + " onFoot = " + (controlled.MountAgent == null), 0);
}
```

写一个自己的 perk 条件（这是唯一能「加入那套体系」的方式）——照 `AgentStatusCondition` 的形状，但自带 public 构造：

```csharp
using System.Xml;
using TaleWorlds.Library;
using TaleWorlds.MountAndBlade;

// 关键：必须有 protected static StringType，MPPerkCondition 的静态构造靠它注册
public class MyArmorCondition : MPPerkCondition
{
    protected static string StringType = "MyArmor";

    private float _minArmor;

    public override PerkEventFlags EventFlags => (PerkEventFlags)8; // HealthChange = 0x8

    protected override void Deserialize(XmlNode node)
    {
        float.TryParse(node?.Attributes?["min_armor"]?.Value, out _minArmor);
    }

    public override bool Check(MissionPeer peer)
    {
        return Check(peer != null ? peer.ControlledAgent : null);
    }

    public override bool Check(Agent agent)
    {
        if (agent == null)
        {
            return false;
        }
        return agent.AgentDrivenProperties.ArmorEncumbrance >= _minArmor;
    }
}
```

在自定义任务里手工搭出 XML 节点并走官方工厂（这是唯一能真正实例化出 `AgentStatusCondition` 的路子）：

```csharp
using System.Xml;
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Conditions;

XmlDocument doc = new XmlDocument();
XmlElement node = doc.CreateElement("Condition");
node.SetAttribute("type", "AgentStatus");
node.SetAttribute("agent_status", "OnMount");

MPPerkCondition condition = MPPerkCondition.CreateFrom(gameModes: null, node);
if (condition is AgentStatusCondition statusCondition)
{
    Agent target = Mission.Current.MainAgent;
    Debug.Print("type=" + condition.GetType().Name + " match=" + statusCondition.Check(target), 0);
}
```

## 风险与边界

- **多人专属。** 源码在 `Modules.CustomBattle/...Multiplayer/`，`Modules.Multiplayer/...` 下还有一份**完全同构的副本**（同名类型在两个程序集里同时存在）。单人战役 / 自定义战斗任务里没有任何官方路径会调用它。本页所有示例都显式做了联机判断。
- **构造器是 `protected`，不能 `new`。** 必须走 `MPPerkCondition.CreateFrom`。
- **`Deserialize` 失败只断言不抛异常。** `agent_status` 写错（例如 `on_horse`）时 `_status` 停在枚举默认值 `OnFoot`，发布构建里完全不报错。
- **`Check(null)` 返回 false。** 沉默地不生效，不抛异常——排查「为什么我的 perk 从不触发」时这是第一个要看的点。
- **`Check(MissionPeer)` 依赖 `ControlledAgent`。** [MissionPeer](../MissionPeer/) 的 `ControlledAgent` getter 会穿透到 `NetworkCommunicator`，非联机任务上取不到有效值。
- **`EventFlags` 是硬编码的 `1024`。** 只响应 `MountChange = 0x400`。需要别的时机（如 `HealthChange = 0x8`、`MountHealthChange = 0x200`）必须改这一行；不改就是「只有上下马时才重算」。
- **`StringType` 是 `protected static` 字段，不是 const。** 反编译产物里它不是编译期常量；靠 `BindingFlags.Static | BindingFlags.NonPublic` 反射读取。改成 `const` 或实例字段都会让注册失效。
- **`AgentStatus` 枚举是 private。** 只有 `OnFoot` / `OnMount` 两个值，外部无法扩展；需要更多状态只能自己写 `MPPerkCondition` 派生。
- **`gameModes` 参数当前不参与本条件判定。** 基类 `MPPerkCondition.IsGameModesValid` 默认返回 true，本类也没覆写。
- **重复类型。** 同名类在 `Modules.CustomBattle` 与 `Modules.Multiplayer` 两个程序集各有一份，`Registered` 字典按 `StringType` 建键——两份都用同一个键 `"AgentStatus"` 时会抛 `Dictionary.Add` 的重复键异常。这在同时加载两个模块的加载顺序下是个隐患。

## 依赖关系

- 基类链：继承 [MPPerkCondition](../MPPerkCondition/)（`TaleWorlds.MountAndBlade` 程序集），`EventFlags` / `Check(peer)` / `Check(agent)` / `Deserialize` 四个抽象成员都在基类上；泛型变体 `MPPerkCondition<T>` 提供 `GameModeInstance`
- 创建入口：`MPPerkCondition.CreateFrom(List<string> gameModes, XmlNode node)`（`MPPerkCondition.cs:61`），唯一调用方是 [MPConditionalEffect](../MPConditionalEffect/) 的构造器（`MPConditionalEffect.cs:123`）解析 `<Conditions>` 子节点时
- 注册机制：`MPPerkCondition` 的静态构造读子类 `protected static StringType` 字段（`MPPerkCondition.cs:45`）
- 判定依赖：[Agent](../../mission/Agent/) 的 `MountAgent` 属性，以及 [MissionPeer](../MissionPeer/) 的 `ControlledAgent`
- 同族条件：同目录下还有 `HealthCondition`、`MoraleCondition`、`MountHealthCondition`、`TroopCountCondition`、`ControllerCondition`、`ClosestFlagCondition`、`FlagDominationStatusCondition`、`LastManStandingCondition`、`LastRemainingFlagCondition`、`OwnedFlagCountCondition`、`TroopRoleCondition`——它们共用同一套 `StringType` 注册与 `Check` 契约
- 重复副本：`Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Conditions/AgentStatusCondition.cs`
- 桶首页：[mission-ext API 分区](../)
