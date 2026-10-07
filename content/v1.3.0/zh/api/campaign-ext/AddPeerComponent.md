---
title: "AddPeerComponent"
description: "服务器→客户端的序列化网络消息：告诉客户端「给 peer X 挂上 ComponentId 这个 PeerComponent」。全树只有发送点、零托管处理器，客户端的实际挂载在 native。两个构造函数缺一不可——扫描器要求 sealed + 无参构造。"
---

# AddPeerComponent

**Namespace:** NetworkMessages.FromServer
**Module:** NetworkMessages.FromServer
**Type:** `[DefineGameNetworkMessageType(GameNetworkMessageSendType.FromServer)] public sealed class AddPeerComponent : GameNetworkMessage`
**Base:** `GameNetworkMessage`（→ `../../mission-ext/GameNetworkMessage`）
**File:** `TaleWorlds.MountAndBlade/NetworkMessages/FromServer/AddPeerComponent.cs`（70 行）

## 概述

这是一条**服务器发给客户端**的序列化消息，内容只有两个字段：给谁挂、挂哪个组件。它的职责边界很窄——**只负责把一个「peer 索引 + 组件类型 id」写进网络包**，具体把这个组件挂上去的活儿不在这里。类只有 9 条 public 声明、70 行，其中一半是两个构造函数。

```csharp
public AddPeerComponent(NetworkCommunicator peer, uint componentId) { this.Peer = peer; this.ComponentId = componentId; }
public AddPeerComponent() { }   // ← 扫描器要求存在

protected override void OnWrite()
{
    GameNetworkMessage.WriteNetworkPeerReferenceToPacket(this.Peer);
    GameNetworkMessage.WriteUintToPacket(this.ComponentId, CompressionBasic.PeerComponentCompressionInfo);
}

protected override bool OnRead()
{
    bool result = true;
    this.Peer  = GameNetworkMessage.ReadNetworkPeerReferenceFromPacket(ref result, false);
    this.ComponentId = GameNetworkMessage.ReadUintFromPacket(CompressionBasic.PeerComponentCompressionInfo, ref result);
    return result;
}

protected override MultiplayerMessageFilter OnGetLogFilter() => MultiplayerMessageFilter.Peers;
protected override string OnGetLogFormat() => "Add component with ID: " + ComponentId + " to peer:" + Peer.UserName + " with peer-index:" + Peer.Index;
```

## 心智模型

**把它当成「网络消息的 DTO + 序列化契约」，而不是「一个能被 mod 接收并处理的事件」。**

这条消息在 1.3.0 的**整棵托管源码树里只有发送方，没有任何接收方**。四个发送点全部是 `GameNetwork.WriteMessage(new AddPeerComponent(...))`：

| 发送点 | 上下文 |
| --- | --- |
| `NetworkCommunicator.cs:290` | `ICommunicator.OnAddComponent` —— 本机是 server、目标是 client 时，`BeginModuleEventAsServer(this)` 定向发给该 peer |
| `NetworkCommunicator.cs:294` | 同一个方法，紧接着 `BeginBroadcastModuleEvent()` 广播给**其他所有人**（`EventBroadcastFlags.ExcludeTargetPlayer`） |
| `NetworkCommunicator.cs:326` | `ICommunicator.OnSynchronizeComponentTo(VirtualPlayer, PeerComponent)` —— 断线重连后的状态同步 |
| `PeerExtensions.cs:79` | `TellClientToAddComponent<T>()` —— 该 peer **已经有**这个组件时，让客户端重建一次 |

`grep -rn "AddPeerComponent"` 在托管树里只命中这 4 个发送点 + 类自身。**没有任何 `RegisterMessageHandler<AddPeerComponent>` 之类的处理器注册。** 客户端收到这条消息后真正把组件挂上去的逻辑在 native 侧（`MBAPI.IMBPeer` 那一族）。所以——

> **mod 能不能自己构造？能。能不能自己注册处理器？技术上能，但对这条消息没有意义（引擎已经把活干完了），而且会踩到下面那个 `RegisterMessages` 提前 return 的坑。注册入口是 `MissionNetwork.AddRemoveMessageHandlers`，不是 `GameNetwork.RegisterMessage`——后者根本不存在。**

**如果 mod 要发自己的消息，正确做法是复制本类的形状**，而不是复用它：

- `public sealed class`（**必须 sealed**）
- `public MyMessage() { }` 无参构造（**必须存在**）
- `[DefineGameNetworkMessageTypeForMod(GameNetworkMessageSendType.FromServer)]`（mod 专用特性，**不是** `[DefineGameNetworkMessageType]`）
- 覆写 `OnWrite` / `OnRead` / `OnGetLogFilter` / `OnGetLogFormat` 四个 abstract 方法
- 序列化用 `GameNetworkMessage.WriteXxxToPacket` / `ReadXxxFromPacket` + `CompressionBasic` 里的压缩描述

## 心智模型（续）：消息类型是怎么被发现的

`GameNetwork` 在初始化时扫描 `AppDomain.CurrentDomain.GetAssemblies()`，对每个程序集调 `CollectGameNetworkMessagesFromAssembly`（`GameNetwork.cs:1305`）。筛选条件（`:1311-1312`）：

```csharp
if (typeFromHandle.IsAssignableFrom(type) && type != typeFromHandle && type.IsSealed && !(type.GetConstructor(Type.EmptyTypes) == null))
```

**四个必要条件全部强制**：继承 `GameNetworkMessage`、不是基类本身、`sealed`、**有 public 无参构造函数**。这就是 `AddPeerComponent` 同时提供两个构造函数的原因——`(NetworkCommunicator, uint)` 那个给发送方用，`()` 那个纯粹是为了通过 `GetConstructor(Type.EmptyTypes)` 检查。

然后是两个特性二选一，但**判断逻辑共用一个 `bool? flag`**（`:1309` 声明，**每个程序集一份**）：

```csharp
DefineGameNetworkMessageType customAttribute = type.GetCustomAttribute<DefineGameNetworkMessageType>();
if (customAttribute != null)
{
    if (flag == null || !flag.Value) { flag = new bool?(false); ...加入 FromServer/FromClient 列表... }
}
else
{
    DefineGameNetworkMessageTypeForMod customAttribute2 = type.GetCustomAttribute<DefineGameNetworkMessageTypeForMod>();
    if (customAttribute2 != null)
    {
        if (flag == null || flag.Value) { flag = new bool?(true); ...加入列表... }
    }
}
```

**`flag` 一旦被置成 `false` 或 `true` 就再也不会翻回去。** 于是：

- 如果一个程序集里**先**遇到 `[DefineGameNetworkMessageType]`（官方），`flag` 变成 `false`，此后该程序集里**所有** `[DefineGameNetworkMessageTypeForMod]` 的类型被静默丢弃
- 反过来，如果**先**遇到 mod 特性，`flag` 变成 `true`，此后该程序集里**所有**官方特性的类型被静默丢弃

顺序是 `assembly.GetTypesSafe(null)` 的元数据顺序，**不是你能控制的**。这意味着：**mod 程序集里不要混用两种特性**。

最后，两个列表各自 `Sort((s1, s2) => s1.FullName.CompareTo(s2.FullName))`（`:1142-1143`），然后按排序后的下标分配消息 id：

```csharp
GameNetwork._gameNetworkMessageIdsFromServer.Add(type2);
GameNetwork._gameNetworkMessageTypesFromServer.Add(type2, k);   // k 就是消息 id
GameNetwork._gameNetworkMessageTypesAll.Add(type2, k);
```

**消息 id 是按类型全名字母序分配的。** 加一个 mod 消息会把它之后字母序的所有官方消息 id 整体后移——所以**所有 peer 必须加载同一套程序集，否则 id 对不上，收到的是别的消息**。

## 关键成员

| 成员 | 签名（行号） | 这个成员是做什么用的 |
| --- | --- | --- |
| `Peer` | `public NetworkCommunicator Peer { get; private set; }`（`:15`） | 目标 peer。**不是索引、不是字符串，是一个 `NetworkCommunicator` 实例**；`OnWrite` 用 `WriteNetworkPeerReferenceToPacket` 把它写成网络引用表里的索引，`OnRead` 用 `ReadNetworkPeerReferenceFromPacket` 还原。`private set` —— 只有 `OnRead` 和构造函数能写。 |
| `ComponentId` | `public uint ComponentId { get; private set; }`（`:21`） | 要挂的组件类型 id，来自 `PeerComponent.TypeId`。用 `CompressionBasic.PeerComponentCompressionInfo` 压缩。 |
| `AddPeerComponent(NetworkCommunicator, uint)` | `:22` | 发送方用的构造。 |
| `AddPeerComponent()` | `:29` | **空构造，存在只为了通过 `GetConstructor(Type.EmptyTypes)` 的扫描检查。** 不要因为它什么都不做就以为可以删。 |
| `OnWrite` | `protected override void`（`:33`） | 写 peer 引用 + uint。字段顺序即线序，改顺序会破坏协议兼容。 |
| `OnRead` | `protected override bool`（`:41`） | 用 `ref bool ok` 的 out-param 风格读取两个字段，**任何一次失败都不会 throw，只会把 `ok` 置 false 并继续读**，最后 `return ok`。**调用方必须检查返回值，不能因为没抛异常就认为成功。** |
| `OnGetLogFilter` | `protected override MultiplayerMessageFilter`（`:54`） | 返回 `MultiplayerMessageFilter.Peers` —— 这条消息在日志/回放里按 peer 维度过滤。 |
| `OnGetLogFormat` | `protected override string`（`:59`） | 拼 `"Add component with ID: {id} to peer:{UserName} with peer-index:{Index}"`。**直接解引用 `this.Peer`** —— 如果在 `Peer` 为 null 的实例上调它会 NRE（`string.Concat` 之前没有 null 检查）。 |
| （类级特性） | `[DefineGameNetworkMessageType(GameNetworkMessageSendType.FromServer)]`（`:8`） | **官方特性**。mod 要用 `DefineGameNetworkMessageTypeForMod`，见上文的两特性互斥说明。 |

## 真实示例

**发送侧（这就是引擎自己的全部用法）：**

```csharp
using NetworkMessages.FromServer;
using TaleWorlds.MountAndBlade;

GameNetwork.BeginModuleEventAsServer(targetPeer);
GameNetwork.WriteMessage(new AddPeerComponent(targetPeer, myComponent.TypeId));
GameNetwork.EndModuleEventAsServer();
```

或者用引擎提供的扩展方法（`PeerExtensions.cs:73-82`）：

```csharp
// 已有组件 → 让客户端重建一次
PeerComponent comp = peer.GetComponent<MyComponent>();
peer.TellClientToAddComponent<MyComponent>();
```

**注册接收处理器：走 `MissionNetwork`，没有 `GameNetwork.RegisterMessage<T>` 这种公开 API。** `GameNetwork` 上唯一的公开注册入口是 `AddRemoveMessageHandlers(RegisterMode)`（`GameNetwork.cs:777`），而它**硬编码只注册 `CreatePlayer` 与 `DeletePlayer` 两条**。真正的扩展点是 `MissionNetwork`：

```csharp
// TaleWorlds.MountAndBlade/MissionNetwork.cs
public abstract class MissionNetwork : MissionLogic, IUdpNetworkHandler
{
    public override void OnAfterMissionCreated()
    {
        this._missionNetworkMessageHandlerRegisterer = new GameNetwork.NetworkMessageHandlerRegistererContainer();
        this.AddRemoveMessageHandlers(this._missionNetworkMessageHandlerRegisterer);
        this._missionNetworkMessageHandlerRegisterer.RegisterMessages();
    }

    protected virtual void AddRemoveMessageHandlers(GameNetwork.NetworkMessageHandlerRegistererContainer registerer) { }
}
```

所以 mod 的正确写法是继承 `MissionNetwork`，覆写 `AddRemoveMessageHandlers`，拿 registerer 调 `Register<T>(handler)`（FromServer）或 `RegisterBaseHandler<T>(handler)`（FromServer 基类）：

```csharp
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.Network.Messages;

public class MyModMissionNetwork : MissionNetwork
{
    protected override void AddRemoveMessageHandlers(GameNetwork.NetworkMessageHandlerRegistererContainer registerer)
    {
        registerer.Register<MyModGrantGold>(this.OnGrantGold);
        registerer.RegisterBaseHandler<CreatePlayer>(this.OnCreatePlayerBase);
    }

    private void OnGrantGold(MyModGrantGold message)
    {
        // 这就是 handler 的真实形状：消息已经被 Read() 过了，字段已填好
    }

    private void OnCreatePlayerBase(GameNetworkMessage message)
    {
        // base handler 拿到的是基类引用，需要自己转型
    }
}
```

**记住上面风险段说的那个提前 return：** `RegisterMessages()` 一旦发现 FromServer 处理器列表非空就直接 `return`，**同一批里注册的 FromClient 处理器全部失效**。

**mod 自定义消息的完整形状（这是本页最值得抄的东西）：**

```csharp
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.Network.Messages;

[DefineGameNetworkMessageTypeForMod(GameNetworkMessageSendType.FromServer)]
public sealed class MyModGrantGold : GameNetworkMessage
{
    public int PeerIndex { get; private set; }
    public int Amount { get; private set; }

    public MyModGrantGold() { }                       // ← 必须

    public MyModGrantGold(int peerIndex, int amount)
    {
        this.PeerIndex = peerIndex;
        this.Amount = amount;
    }

    protected override void OnWrite()
    {
        GameNetworkMessage.WriteIntToPacket(this.PeerIndex, CompressionBasic.PeerIndexCompressionInfo);
        GameNetworkMessage.WriteIntToPacket(this.Amount, CompressionBasic.NetworkComponentEventTypeFromServerCompressionInfo);
    }

    protected override bool OnRead()
    {
        bool ok = true;
        this.PeerIndex = GameNetworkMessage.ReadIntFromPacket(CompressionBasic.PeerIndexCompressionInfo, ref ok);
        this.Amount = GameNetworkMessage.ReadIntFromPacket(CompressionBasic.NetworkComponentEventTypeFromServerCompressionInfo, ref ok);
        return ok;                                      // ← 必须检查
    }

    protected override MultiplayerMessageFilter OnGetLogFilter() => MultiplayerMessageFilter.None;
    protected override string OnGetLogFormat() => "MyModGrantGold to " + PeerIndex + " amount " + Amount;
}
```

客户端注册处理器（**走 `MissionNetwork` 覆写 `AddRemoveMessageHandlers`，不是 `GameNetwork.RegisterMessage`** —— 见前面的完整示例）：

```csharp
public class MyNetwork : MissionNetwork
{
    protected override void AddRemoveMessageHandlers(GameNetwork.NetworkMessageHandlerRegistererContainer registerer)
    {
        registerer.Register<MyModGrantGold>(this.OnGrantGold);
    }
}
```

## 风险与边界

- **mod 混用两种特性 = 一半的消息类型被静默丢弃。** `GameNetwork.cs:1309` 的 `bool? flag` 是**每个程序局一份、永不翻转**。先遇到官方特性 → 后面所有 mod 消息被丢；先遇到 mod 特性 → 后面所有官方消息被丢。`Debug.Print` 最后只会打出「Found N Server Game Network Messages」这种汇总数字，**你不会看到任何「被丢弃」的提示**。**mod 程序集里只用一个特性。**
- **消息 id 按类型全名字母序分配，加一个 mod 消息会移动后面所有官方消息的 id。** `GameNetwork.cs:1142` 的 `Sort(… FullName.CompareTo …)` 决定顺序。这意味着 **mod 的消息类型必须在所有 peer 上都加载**——服务器有、客户端没有（或反过来），收到的字节流会按完全不同的 id 表解释成别的消息，表现为「随机功能错乱」而不是「连接失败」。
- **模组消息的类型要求很硬。** `GameNetwork.cs:1311-1312` 要求 `type.IsSealed` 且 `type.GetConstructor(Type.EmptyTypes) != null`。**写成 `public class`（非 sealed）或者删掉无参构造，这条消息就会完全不存在**——而失败是静默的：`Register<MyMessage>` 里的 `_gameNetworkMessageTypesFromServer[key]`（`GameNetwork.cs:1557`）会抛 `KeyNotFoundException`，但如果你在更早的地方没跑到那里，根本看不到任何提示。
- **`GameNetwork.RegisterMessageHandler.RegisterMessages()` 有一个提前 return。**

  ```csharp
  // GameNetwork.cs:1552-1573
  public void RegisterMessages()
  {
      if (this._fromServerHandlers.Count > 0 || this._fromServerBaseHandlers.Count > 0)
      {
          foreach (...) { ... }
          while (...) { ... }
          return;                    // ← 直接返回，后面注册 FromClient 的那段代码不执行
      }
      foreach (Delegate delegate2 in this._fromClientHandlers) { ... }
      foreach (...) { ... }
  }
  ```

  **只要有任何 FromServer 处理器已注册，所有 FromClient 处理器就都不会被注册。** 这是引擎里一个真实的顺序敏感缺陷。mod 要同时收 FromServer 和 FromClient 消息时，要么保证注册顺序，要么绕开这个 registerer 自己往 `GameNetwork._fromServerMessageHandlers` 那几个字典里塞（后者是 private 的，实际不可行——所以更实际的做法是只注册一侧，或者接受一侧失效）。
- **`OnRead` 不抛异常。** 用 `ref bool ok` 风格，失败只是把 flag 置 false 并继续读后面的字段。**任何 handler 都必须检查返回值**；`AddPeerComponent` 本身没有 handler（活儿在 native），但你抄这个形状写的消息必须自己判。
- **`OnGetLogFormat` 直接解引用 `this.Peer`。** `Peer.UserName` / `Peer.Index`。空构造创建的实例（反序列化前的状态）上调它会 NRE。日志格式化本身是安全的（`GameNetworkMessage.GetLogFormat` 走 `internal`），但如果你在别处先调了它再调 `OnRead`，就炸了。
- **本树里零托管处理器。** 客户端实际挂载发生在 native。这意味着你**无法**通过注册 handler 来「拦截」或「修改」组件挂载——消息已经被 native 消费掉了。
- **`sealed` 不是风格问题。** 派生类会被扫描器直接跳过（`typeFromHandle.IsAssignableFrom(type)` 通过，但之后拿到的派生类型也没有那个特性 / 或者被 `flag` 挡掉），所以继承 `AddPeerComponent` 是无效的。
- **命名空间不在 `TaleWorlds.*` 下。** `NetworkMessages.FromServer` 是 global-adjacent 的独立命名空间，`using TaleWorlds.MountAndBlade;` **不覆盖它**——本类的 `using` 列表里同时有 `TaleWorlds.MountAndBlade`（为了 `NetworkCommunicator` / `CompressionBasic`）和 `TaleWorlds.MountAndBlade.Network.Messages`（为了 `GameNetworkMessage`）。写 `using NetworkMessages.FromServer;` 时别忘了基类那个命名空间。

## 怎么用

### 怎么拿到它

声明在 `TaleWorlds.MountAndBlade/NetworkMessages/FromServer/AddPeerComponent.cs:9`，`:8` 是 `[DefineGameNetworkMessageType(GameNetworkMessageSendType.FromServer)]`。语义是：**服务端告诉客户端「某个 peer 新增了一个网络组件」**。

| 角色 | 入口 | 说明 |
| --- | --- | --- |
| 发送方 | `NetworkCommunicator` 内部 | 有两处：`NetworkCommunicator.cs:290`（`BeginModuleEventAsServer` 分支，只发给目标 peer）和 `NetworkCommunicator.cs:294`（`BeginBroadcastModuleEvent` 分支，带 `ExcludeTargetPlayer`） |
| 扩展方法 | `PeerExtensions` | `TaleWorlds.MountAndBlade/PeerExtensions.cs:79` 是第三个发送点 |
| 接收方 | 框架用无参构造函数（`:29`）造实例，再 `OnRead()`（`:41`）填 `Peer` 与 `ComponentId` | 你只注册处理器 |

两个属性都是 `private set`（`:14`、`:19`），只有两参构造函数（`:22`）能填。

### 典型用法

读取端的处理器签名拿到的就是这两个字段：

```csharp
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.NetworkMessages.FromServer;

public static void OnPeerComponentAdded(AddPeerComponent message)
{
    if (message == null || message.Peer == null)
    {
        return;
    }

    // Peer 是 NetworkCommunicator，不是 NetworkPeer —— 见下面的坑。
    uint componentId = message.ComponentId;
    string userName = message.Peer.UserName;
    int peerIndex = message.Peer.Index;

    // ComponentId 对应 MissionNetwork 组件的 TypeId。
}
```

发送端不要自己 new，除非你确实要绕过引擎的两种广播模式：

```csharp
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.NetworkMessages.FromServer;

public static void AnnounceComponent(NetworkCommunicator peer, uint componentTypeId)
{
    GameNetwork.BeginBroadcastModuleEvent();
    GameNetwork.WriteMessage(new AddPeerComponent(peer, componentTypeId));

    // ExcludeTargetPlayer：目标 peer 自己已经知道这件事，不用再发一遍。
    GameNetwork.EndBroadcastModuleEvent(
        GameNetwork.EventBroadcastFlags.ExcludeTargetPlayer |
        GameNetwork.EventBroadcastFlags.AddToMissionRecord,
        peer);
}
```

### 最容易踩的坑

**把 `message.Peer` 当成 `NetworkPeer`。** 它的类型是 `NetworkCommunicator`（`:14`），不是 `NetworkPeer`。后果：用错类型时代码可能因为隐式转换或继承关系**仍然编译通过**，但你拿到的是服务端侧的通信器对象而不是客户端侧的 peer 表示；`Index`、`UserName` 这类属性在两端语义不同，**跨端读到的值可能不是你以为的那个**。

第二个坑是 `OnGetLogFormat` 会解引用 `Peer`（`:56` 起，它拼的是 `this.Peer.UserName` 与 `this.Peer.Index`）。用无参构造函数（`:29`）造出来的实例 `Peer` 是 null，**一旦被日志系统格式化就抛空引用**。所以无参构造函数只给反序列化器用，不要在别处自己调用它。

## 跨版本提示

- **9 条 public 声明（`sealed` 类 + 两个构造 + 两个属性 + 四个 protected override）在 1.3.15 / 1.4.6 / 1.4.7 / 1.5.3 上逐字相同**；1.4.5 是残缺树（无 `TaleWorlds.MountAndBlade/NetworkMessages/FromServer/`）。`[DefineGameNetworkMessageType(GameNetworkMessageSendType.FromServer)]` 特性、`sealed`、两个构造函数、`OnWrite` 的两行序列化顺序都没有变。
- **发送点也稳定**：`NetworkCommunicator` 的 `ICommunicator.OnAddComponent`（两次 WriteMessage）与 `OnSynchronizeComponentTo`、`PeerExtensions.TellClientToAddComponent<T>`，在所有存在的版本里都是这四处。
- **`GameNetwork` 的消息扫描机制（sealed + 无参构造 + `flag` 互斥 + 按 FullName 排序分配 id）在 1.3 → 1.5 没有改。** 所以你为 1.3.0 写的 mod 消息类不需要为升级改动，也**仍然不能混用两种特性**、**仍然必须 sealed + 无参构造**。
- **对 mod 的实际含义：** 协议形状稳定，但你不能靠升级获得新能力。`RegisterMessages()` 那个提前 return 的缺陷在所有版本里都保留——**依赖「同时注册 FromServer 和 FromClient handler」的 mod 在 1.5.3 上一样会坏**。

## 依赖关系

- 基类：[GameNetworkMessage](../../mission-ext/GameNetworkMessage)（`TaleWorlds.MountAndBlade.Network.Messages`），4 个 abstract：`OnWrite` / `OnRead` / `OnGetLogFilter` / `OnGetLogFormat`；`Write()` / `Read()` / `GetLogFormat()` 都是 `internal`，**外部拿不到**
- 发送方：[NetworkCommunicator](../../mission-ext/NetworkCommunicator) 的 `ICommunicator.OnAddComponent` / `OnSynchronizeComponentTo`；[PeerExtensions](../../mission-ext/PeerExtensions) 的 `TellClientToAddComponent<T>` / `AddComponent<T>`
- 被传递的组件：[PeerComponent](../../core-extra/PeerComponent)（`TypeId` 是这条消息唯一携带的语义）
- 序列化基础设施：[GameNetwork](../../mission-ext/GameNetwork) 的 `BeginModuleEventAsServer` / `BeginBroadcastModuleEvent` / `WriteMessage` / `EndModuleEventAsServer` / `EndBroadcastModuleEvent`，以及类型扫描 `CollectGameNetworkMessagesFromAssembly`（`GameNetwork.cs:1305`）
- 特性：`DefineGameNetworkMessageType`（官方）/ `DefineGameNetworkMessageTypeForMod`（mod）；`GameNetworkMessageSendType` 的 `FromServer` / `FromClient`
- 压缩：`CompressionBasic.PeerComponentCompressionInfo` 与 `NetworkComponentEventTypeFrom{Client,Server}CompressionInfo`
- 桶首页：[campaign-ext API 分区](../)
