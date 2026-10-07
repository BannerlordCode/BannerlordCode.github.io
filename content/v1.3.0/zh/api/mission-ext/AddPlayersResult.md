---
title: "AddPlayersResult"
description: "GameNetwork 的两字段返回结构：Success 标志 + 与入参等长的 NetworkCommunicator 数组；失败时数组非 null 但全为 null，这是本页最关键的一条。"
---

# AddPlayersResult

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct AddPlayersResult`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/GameNetwork.cs`（结构体本体在 GameNetwork.cs:1771，跨 1771–1778）

## 概述

`AddPlayersResult` 是 `GameNetwork` 的嵌套结构体，只有两个 **public 字段**，没有任何方法、属性或构造器：

```csharp
public struct AddPlayersResult
{
    public bool Success;
    public NetworkCommunicator[] NetworkPeers;
}
```

它是 [GameNetwork](../GameNetwork) 里两个静态工厂方法的返回类型：`AddNewPlayersOnServer`（`GameNetwork.cs:629`）和 `HandleNewClientsConnect`（`GameNetwork.cs:894`）。这是 mod 在做联机服务器 hook 时唯一能看到的「批量加玩家」结果。

## 心智模型

把它当成**「批量加人的一张回执」**，然后死记一条：**`Success == false` 时 `NetworkPeers` 不是 null，是一整排 null。**

心智模型分三块，第一块是最容易踩的坑。

**第一块：数组永远被分配，跟成功无关。** `GameNetwork.cs:629-646` 的完整形状：

```csharp
public static GameNetwork.AddPlayersResult AddNewPlayersOnServer(
    PlayerConnectionInfo[] playerConnectionInfos, bool serverPeer)
{
    bool flag = MBAPI.IMBNetwork.CanAddNewPlayersOnServer(playerConnectionInfos.Length);
    NetworkCommunicator[] array = new NetworkCommunicator[playerConnectionInfos.Length];
    if (flag)
    {
        for (int i = 0; i < array.Length; i++)
        {
            object parameter = playerConnectionInfos[i].GetParameter<object>("IsAdmin");
            bool isAdmin = parameter != null && (bool)parameter;
            ICommunicator communicator = GameNetwork.AddNewPlayerOnServer(
                playerConnectionInfos[i], serverPeer, isAdmin);
            array[i] = (communicator as NetworkCommunicator);
        }
    }
    return new GameNetwork.AddPlayersResult
    {
        NetworkPeers = array,
        Success = flag
    };
}
```

注意执行顺序：**数组在 `if (flag)` 之前就分配好了**。失败时循环整个跳过，数组保持默认元素——也就是长度等于入参数组长度、每个元素都是 `null`。所以：

- `result.NetworkPeers == null` → **永远不会发生**
- `result.NetworkPeers.Length` → **永远等于入参数组长度**，成功失败都一样
- `result.NetworkPeers[i]` → 成功时是 peer，失败时是 `null`

还有一层更细的坑：`array[i] = communicator as NetworkCommunicator;` 用的是 `as`。如果 `AddNewPlayerOnServer` 返回的 `ICommunicator` 实现**不是** `NetworkCommunicator`，`as` 会得到 `null`，而 `flag` 仍然是 `true`——**成功结果里也可能夹着 null 元素**。所以判断成功必须用 `Success`，判断每个元素必须判空，两个都要做。

**第二块：`isAdmin` 是从连接参数里掏出来的字符串键。** `playerConnectionInfos[i].GetParameter<object>("IsAdmin")`，返回 `null` 时按 `false` 处理。返回的对象被强转 `(bool)`——如果某个客户端塞了非 bool 的值进这个参数，这里会抛 `InvalidCastException`，而整段没有 try/catch。

**第三块：外层 `HandleNewClientsConnect` 才是完整的流程入口。** `GameNetwork.cs:894-905`：

```csharp
public static GameNetwork.AddPlayersResult HandleNewClientsConnect(
    PlayerConnectionInfo[] playerConnectionInfos, bool isAdmin)
{
    GameNetwork.AddPlayersResult addPlayersResult =
        GameNetwork.AddNewPlayersOnServer(playerConnectionInfos, isAdmin);
    if (addPlayersResult.Success)
    {
        for (int i = 0; i < playerConnectionInfos.Length; i++)
        {
            GameNetwork._handler.OnNewPlayerConnect(
                playerConnectionInfos[i], addPlayersResult.NetworkPeers[i]);
        }
    }
    return addPlayersResult;
}
```

`OnNewPlayerConnect` 通知**只在 `Success` 为真时逐个发出**，顺序与入参数组一致，元素与 `NetworkPeers[i]` 一一对应。想挂钩「新玩家进服」就走这条路径，而不是自己拼 `NetworkPeers`——那个数组的填充和 `_handler` 的通知是配套的。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Success` | `public bool Success;` | native `MBAPI.IMBNetwork.CanAddNewPlayersOnServer(count)` 的结果，原样透传。它表示「服务器是否接受了这一批人」的**准入判断**，不代表每个 peer 都成功建立（元素级失败会以 `null` 形式出现）。字段不是属性，用完不会被引擎回收。 |
| `NetworkPeers` | `public NetworkCommunicator[] NetworkPeers;` | 与入参 `playerConnectionInfo[]` **等长、同序**的 peer 数组。永远非 `null`；`Success == false` 时全为 `null`；`Success == true` 时元素理论上非 `null` 但因 `as` 转型仍需判空。`HandleNewClientsConnect` 依赖这个下标对应关系逐个派发 `OnNewPlayerConnect`。 |

## 真实示例

正确消费这张回执——先看 `Success`，再逐个判空，两道都不能省：

```csharp
using TaleWorlds.MountAndBlade;

public static void ReportJoinOutcome(
    PlayerConnectionInfo[] infos, GameNetwork.AddPlayersResult result)
{
    if (!result.Success)
    {
        // 这里 NetworkPeers 仍然非 null，长度也仍然等于 infos.Length —— 但每个元素都是 null
        Debug.Print("server refused " + infos.Length + " player(s)", 0);
        return;
    }
    for (int i = 0; i < infos.Length; i++)
    {
        NetworkCommunicator peer = result.NetworkPeers[i];
        if (peer == null)
        {
            continue;
        }
        Debug.Print("joined: " + peer.UserName + " index=" + peer.Index, 0);
    }
}
```

批量加人的完整调用形状（注意这是 `GameNetwork` 的静态方法，需要先确认自己跑在服务器侧）：

```csharp
using TaleWorlds.MountAndBlade;

public static void TryAdmitNewClients(PlayerConnectionInfo[] infos)
{
    if (!GameNetwork.IsServerOrRecorder)
    {
        return;
    }
    GameNetwork.AddPlayersResult result = GameNetwork.AddNewPlayersOnServer(infos, false);
    if (result.Success)
    {
        Debug.Print("admitted " + result.NetworkPeers.Length, 0);
    }
}
```

## 风险与边界

- **`NetworkPeers` 永远非 null，但失败时全 null。** 这是本结构最容易造成 NRE 的地方。判 `result.NetworkPeers != null` 来防 NRE 是无效的——要判 `Success`，再判元素。
- **`Success == true` 也可能有 null 元素。** `array[i] = communicator as NetworkCommunicator;` 是 `as` 转型，实现类型不匹配就得到 null 而不抛异常。逐元素判空是必需的，不是保险起见。
- **它是 struct，不是 class。** `return new AddPlayersResult { ... }` 返回的是值拷贝。赋给 `var r = result;` 之后再改 `r.Success` 不会改到原变量——这跟类字段的直觉相反。
- **两个成员都是 public 字段。** 你可以直接改它们，没有校验也没有通知。但改它对引擎没有任何效果——这个结构只是返回值，不被任何引擎状态持有。
- **`CanAddNewPlayersOnServer` 是唯一的前置校验。** 它只检查**能不能加**（人数上限、服务器状态一类），具体每个玩家能否建立连接在下层的 `AddNewPlayerOnServer` 里，那里的失败会以 `as` 转 null 的形式静默通过。
- **`isAdmin` 参数在两个方法里含义不同。** `AddNewPlayersOnServer(infos, bool serverPeer)` 的第二个参数叫 `serverPeer` 并被透传给 `AddNewPlayerOnServer`；`HandleNewClientsConnect(infos, bool isAdmin)` 的第二个参数叫 `isAdmin` 并被当作 `serverPeer` 透传。**同一个位置在两个方法里被当成不同含义使用**，这是引擎侧的命名混乱，传值时要看清楚你调的是哪个。
- **底层是 native 调用。** `MBAPI.IMBNetwork.CanAddNewPlayersOnServer` 与 `AddNewPlayerOnServer` 都出到 native，托管层没有托管回退路径。服务端没起来时这些调用会失败而不是抛异常。
- **它是 `GameNetwork` 的嵌套类型。** 写全名要带 `GameNetwork.`，`using TaleWorlds.MountAndBlade;` 不会把它带进作用域。
- **`GetParameter<object>("IsAdmin")` 的值强转没有保护。** 第三方连接实现塞了非 bool 会抛 `InvalidCastException`，且这段没有 catch。

## 怎么用

### 怎么拿到它

**你不会构造它，也构造不了有意义的东西**——`GameNetwork.AddPlayersResult` 是 `public struct`（`bannerlord-1.3.0/TaleWorlds.MountAndBlade/GameNetwork.cs:1771`），只有两个 public 字段 `Success`（`:1774`）与 `NetworkPeers`（`:1777`），没有构造器。它是**两个 `public static` 方法的返回值**：

- `GameNetwork.AddNewPlayersOnServer(PlayerConnectionInfo[] playerConnectionInfos, bool serverPeer)`（`GameNetwork.cs:629`）
- `GameNetwork.HandleNewClientsConnect(PlayerConnectionInfo[] playerConnectionInfos, bool isAdmin)`（`GameNetwork.cs:894`）

这两个方法是托管树里仅有的入口，而且第一个在 1.3.0 全树里**只有一个调用点**——就是第二个自己（`GameNetwork.cs:896`）。所以 mod 侧真正该调的是 `HandleNewClientsConnect`：它在 `AddNewPlayersOnServer` 之上多做了 `_handler.OnNewPlayerConnect` 的逐个派发（`GameNetwork.cs:901`），而那段派发只在 `addPlayersResult.Success` 为真时才发生（`:897-903`）。入参 `PlayerConnectionInfo` 从 `mission` 那侧来，是联机连接建立时引擎交给你的对象；第二个参数是裸 `bool`，没有包装类型能告诉你它此刻是什么意思。

### 典型用法

走完整的那一层，让引擎替你完成「填充数组 + 逐个通知」这套配套动作：

```csharp
using TaleWorlds.MountAndBlade;

public static void AdmitBatch(PlayerConnectionInfo[] infos)
{
    if (!GameNetwork.IsServerOrRecorder)   // GameNetwork.cs:31
    {
        return;
    }

    // 第二个参数在这一层叫 isAdmin，但 HandleNewClientsConnect 把它原样传给
    // AddNewPlayersOnServer 的 serverPeer 形参（GameNetwork.cs:896）
    GameNetwork.AddPlayersResult result = GameNetwork.HandleNewClientsConnect(infos, false);

    if (!result.Success)
    {
        // 这时 NetworkPeers 仍然非 null、长度仍然等于 infos.Length，只是每个元素都是 null
        return;
    }

    for (int i = 0; i < result.NetworkPeers.Length; i++)
    {
        NetworkCommunicator peer = result.NetworkPeers[i];
        if (peer == null)
        {
            // as 转型（GameNetwork.cs:640）可能给出 null，即使 Success 为 true
            continue;
        }
        // UserName（NetworkCommunicator.cs:121）与 Index（NetworkCommunicator.cs:111）
        // 是读 peer 身份的真实成员；引擎此时已经回调过 OnNewPlayerConnect
        Debug.Print("admitted " + peer.UserName + " as peer " + peer.Index, 0);
    }
}
```

想绕过通知、自己控制节奏时才直接调底层那一个——代价是 `_handler.OnNewPlayerConnect` 不再被调用：

```csharp
GameNetwork.AddPlayersResult raw = GameNetwork.AddNewPlayersOnServer(infos, false);
// raw 与上面拿到的结构字段完全一样，区别只是没人替你通知 handler
```

### 最容易踩的坑

**两个方法的第二个 `bool` 形参名字不一样，但占的是同一个位置。** `AddNewPlayersOnServer(PlayerConnectionInfo[], bool serverPeer)` 把第二个参数叫 `serverPeer` 并一路透传给 `AddNewPlayerOnServer`；而 `HandleNewClientsConnect(PlayerConnectionInfo[], bool isAdmin)` 把同一个位置叫 `isAdmin`，然后**原封不动地当成 `serverPeer` 传下去**（`GameNetwork.cs:896`）。后果：你在外层写 `HandleNewClientsConnect(infos, true)`，心里想的是「把这批人标成管理员」，实际发生的是「这批人**每一个**都以 `serverPeer = true` 的身份被接入」。批量子级的语义被静默放大成了全局，而且没有任何异常或警告——它只是让整批新客户端带着错误的 peer 身份进服。**在这一层传值时，参数只有「true / false」两态，没有「哪一个是管理员」这层信息**，要标单个管理员得自己读 `NetworkCommunicator.IsAdmin`（`NetworkCommunicator.cs:107`）并在派发后修正。

同源还有一个读法陷阱：**不要用 `NetworkPeers.Length` 反推「成功加了几个人」**。那个数组在 `CanAddNewPlayersOnServer` 返回之后就被**无条件**分配（`GameNetwork.cs:632`），成功失败都一样长——它等于入参的 `playerConnectionInfos.Length`，不是成功数。官方 `HandleNewClientsConnect` 之所以能直接 `addPlayersResult.NetworkPeers[i]` 而不判元素，是因为整段都包在 `if (addPlayersResult.Success)` 里（`GameNetwork.cs:897`，取值在 `GameNetwork.cs:901`）；**你若在 `Success` 为假时照抄那个下标写法，拿到的就是一批 null。**



## 跨版本提示

`AddPlayersResult` 的两个 public 字段在 1.3.0 / 1.3.15 / 1.4.6 / 1.4.7 / 1.5.3 的 `GameNetwork.cs` 里一致（8 行，两个字段）。`AddNewPlayersOnServer` 的「先分配数组再进 if」的顺序也是稳定的——这是本类的核心契约，不随版本变。

变化点在**调用链**：后续版本给 `GameNetwork.AddNewPlayerOnServer` 加了参数（1.3.0 的 `AddNewPlayerOnServer(info, serverPeer, isAdmin)` 三参数在 1.5.x 已变成不同形状），而 `AddNewPlayersOnServer` 的签名在这几个版本间保持不变。所以你的调用代码不用改，但如果你 hook 了 `AddNewPlayerOnServer` 本身，升级时会编译失败。

联机相关的整体 API 属于 `TaleWorlds.MountAndBlade.Multiplayer` 命名空间族的边缘（那批类型在文档树里被归为 reader-owned），本页只覆盖 `TaleWorlds.MountAndBlade` 下这两个公开入口。

## 依赖关系

- 生产者：[GameNetwork](../GameNetwork) 的 `AddNewPlayersOnServer(PlayerConnectionInfo[], bool)` 与 `HandleNewClientsConnect(PlayerConnectionInfo[], bool)`，两个都是 `public static`
- 数组元素类型：[NetworkCommunicator](../NetworkCommunicator)，`ICommunicator` 的实现类；`UserName` / `Index` 是读取 peer 身份的真实成员
- 入参类型：[PlayerConnectionInfo](../PlayerConnectionInfo)，其 `GetParameter<object>(string)` 是取 `IsAdmin` 的入口
- 下游消费者：`GameNetwork._handler.OnNewPlayerConnect(...)`，只在 `Success` 为真时逐个调用，与数组下标一一对应
- native 边界：`MBAPI.IMBNetwork.CanAddNewPlayersOnServer` / `AddNewPlayerOnServer`，见 [native-interop](../../../architecture/native-interop)
- 平行结构：`GameNetwork.AddPlayersResult` 与它同文件里的 `NetworkCommunicator` 系列共同构成联机侧的 peer 管理面
- 桶首页：[mission-ext API 分区](../)