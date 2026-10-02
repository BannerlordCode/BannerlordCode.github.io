---
title: "MessageContract"
description: "所有穿越 Diamond socket 的消息的基类：`[MessageId(byte)]` 属性固定线上 id，抽象的 Serialize/Deserialize 那一对定义载荷结构，而按类型缓存的静态注册表加上 creator，让接收端的实例化无需反射开销。"
---
# MessageContract

**Namespace:** TaleWorlds.Network  
**Module:** TaleWorlds.Network  
**Type:** `public abstract class MessageContract`  
**Base:** `object`  
**File:** `TaleWorlds.Network/MessageContract.cs`

## 概述

`MessageContract` 是 Diamond socket 协议的线上格式契约。一个具体的消息就是一个普通 POCO，负三项义务：一个给出 `byte` 线上 id 的 `[MessageId(n)]` 属性、一个**无参**构造函数，以及对 `SerializeToNetworkMessage(INetworkMessageWriter)` 与 `DeserializeFromNetworkMessage(INetworkMessageReader)` 的重写。除此之外的一切——id 表与工厂——都由本类处理。

id 表是两个静态字典：`MessageContracts`（`Type -> byte`）与 `MessageContractCreators`（`Type -> MessageContractCreator`），二者在静态构造函数里建立。`InitializeMessageContract(Type)` 是唯一入口：类型已注册则立即返回；否则要求**恰好一个** `[MessageId]` 属性（`GetCustomAttributesSafe(..., inherit: true).Length != 1` 会静默放弃），记录该 id，并通过 `Activator.CreateInstance` 在闭合泛型上构造 `MessageContractCreator<type>`。`protected MessageContract()` 构造函数会调用 `InitializeMessageContract(GetType())`，所以仅仅构造一个实例就完成了注册——你很少需要自己调 `GetContractId`。此后 `MessageId` 属性直接从表中解析。

`CreateMessageContract(Type)` 是接收端的工厂：它先确保契约已初始化，然后调用缓存的 creator。由于 `MessageContractCreator<T> where T : new()`，接收端可以在编译期不知道具体类型的情况下把消息实体化——这正是 `MessageContractHandlerManager.HandleNetworkMessage` 把原始 `NetworkMessage` 变成带类型对象的方式。

## 心智模型

把它当成**“一个线上 id + 一对手写编解码器，缓存在以 CLR 类型为键的静态表里”**：

- **两个相互独立的半场**。*发送方*对消息实例调用 `SerializeToNetworkMessage`；*接收方*先读一个字节 id，通过 `MessageContractHandlerManager` 把它映射回 `Type`，调用 `CreateMessageContract`，然后调用 `DeserializeFromNetworkMessage`。两半必须在载荷布局上逐字节一致——这里没有 schema、没有除你自己写的长度前缀之外的任何分帧，也没有版本协商。
- **新增一条消息的典型调用顺序**：给类打上 `[MessageId]` → 提供 public 无参构造函数 → 实现两个重写 → 在接收侧用 `MessageContractHandlerManager.AddMessageHandler<T>` 注册处理器 → 在发送侧构造实例并序列化。引擎里没有别的东西会碰你的类型；这些表会在首次构造时自行填好。
- **常见误用陷阱 —— `[MessageId]` 缺失或重复会静默失败**。当属性数量不等于 1 时 `InitializeMessageContract` 直接返回而不注册。你随后会在离真正原因很远的地方，从 `MessageContracts[_myType]` 拿到一个 `KeyNotFoundException`。请给每条消息恰好一个 `[MessageId]`，并确保它在你的模块内唯一——那张表是按类型做键的，因此两个类型可以静默共用同一个线上 id，结果是接收端的分派表被污染。
- **常见误用陷阱 —— 忘记无参构造函数**。`MessageContractCreator<T>` 带 `new()` 约束。只有带参构造函数的消息照样能注册（契约构造函数本身不需要它），但 creator 的 `Invoke()` 会在接收端失败。
- **常见误用陷阱 —— 读的类型与写的类型不一致**。`INetworkMessageWriter.Write` / `INetworkMessageReader.Read` 是带类型的（`Write(int)` 对 `ReadInt32()`，`Write(byte[])` 对 `ReadByte()`）。一个字节的不对称会让整条流失步，其后的一切都变成垃圾。请写一个往返测试。
- **时序隐患**：`DeserializeFromNetworkMessage` 之后紧接着就是 `HandleMessage`，而后者在**解析消息的同一个线程上**分派。处理器必须轻量，绝不能阻塞。

## 何时使用 / 何时不要用

**该用它的情况：**
- 你在扩展 Diamond socket 协议：大厅、匹配、自定义战斗的服务器/客户端，或任何在两个对端之间增加一条控制消息的 mod。
- 你需要一条两端都认识、并且必须按线上 id 分派到带类型处理器的消息。

**不该用它的情况：**
- 你想让战役状态跨越网络边界。战役对象由它们自己的同步系统（campaign 模块里的 `NetworkMessage` 子类）同步，而不是 `MessageContract`。
- 你需要存档文件。这是 socket 协议，不是落盘序列化；这里没有任何东西接入战役存档系统。
- 你需要加密或完整性校验。`MessageContract` 两者都不提供；保护 socket 的东西在它之下。

## 依赖关系

- [MessageContractHandlerManager](../MessageContractHandlerManager) —— `byte -> Type -> 处理器` 的分派表；`HandleNetworkMessage` 是回调到本类型的接收入口。
- [MessageId](../MessageId) —— 提供线上 id 的 `[MessageId(byte)]` 属性；没有恰好一个它，契约就不会注册。
- [MessageContractCreator](../MessageContractCreator) —— `InitializeMessageContract` 为每个契约类型构建的缓存工厂。
- [NetworkMessage](../NetworkMessage) —— `MessageContract` 序列化进去、又从中反序列化出来的原始缓冲。
- [INetworkMessageWriter](../INetworkMessageWriter) / [INetworkMessageReader](../INetworkMessageReader) —— 两个重写所使用的带类型读写接口面。
- [CoroutineManager](../CoroutineManager) —— `TaleWorlds.Network` 的另一半：消息驱动的处理器通常会驱动的手工步进模型。

## 主要成员

### `[MessageId(byte id)] public class MessageId : Attribute`

它不是 `MessageContract` 的成员，但没有它本类无法工作。`Id` 是 `{ get; private set; }`，由构造函数赋值。必须恰好存在一个实例（含继承而来的），否则跳过注册。

### `protected MessageContract()`

把 `GetType()` 记入 `_myType`，并调用 `InitializeMessageContract(_myType)`。它没有参数——契约总是先以空状态构造，再由 `DeserializeFromNetworkMessage` 填充。
- **副作用**：构造某个消息类型的实例会把它全局注册。这正是处理器能在消息尚不存在时先行注册的原因。
- **注意**：构造函数是 `protected` 的，因此只有你自己的类型（或其子类）能调用它，从而让注册与具体类型绑定在一起。

### `public byte MessageId => MessageContracts[_myType]`

从静态表里解析本实例的线上 id。
- 类型未注册时（属性缺失/重复）会抛 `KeyNotFoundException`。
- 该属性与 `MessageId` 属性类同名——这里并不存在属性类成员，只有一个查表结果。

### `public abstract void SerializeToNetworkMessage(INetworkMessageWriter networkMessage)`

写侧。在发送侧被调用，此时 writer 已定位在 id 字节之后。
- **返回值**：无。
- **约定**：写出的内容与顺序必须和 `DeserializeFromNetworkMessage` 读到的完全一致、类型相同。优先显式写宽度（先 `Write(byte[] length)` 再写字节），不要依赖读取器自己的分帧。

### `public abstract void DeserializeFromNetworkMessage(INetworkMessageReader networkMessage)`

读侧。由 `MessageContractHandlerManager.HandleNetworkMessage` 在一个刚创建出来的实例上调用一次，紧接着就分派给带类型的处理器。
- **约定**：必须把读取器恰好留在 `SerializeToNetworkMessage` 留下 writer 的那个位置。
- **陷阱**：读得太少（要的字节少于写出的字节）会让同一连接上后续每一条消息都失步。

### `public static MessageContract CreateMessageContract(Type messageContractType)`

确保契约已初始化，然后调用缓存的 `MessageContractCreator`。
- **返回语义**：`messageContractType` 的一个**新的、空的**实例，**并未**被填充——调用方必须自己调用 `DeserializeFromNetworkMessage`。
- 未注册类型（无 `[MessageId]`）会抛 `KeyNotFoundException`；类型没有无参构造函数时，`Activator` 会抛 `MissingMethodException` / `InvalidOperationException`。

### `internal static byte GetContractId(Type type)` / `internal static MessageContractCreator GetContractCreator(Type type)`

都是 `internal`，只有 `TaleWorlds.Network` 程序集及其友元可用。`MessageContractHandlerManager.AddMessageHandler<T>` 使用前者。如果 mod 需要拿 id，请读实例属性。

### `private static void InitializeMessageContract(Type type)`

唯一的注册闸门：幂等，要求恰好一个 `[MessageId]`，并在改动两张表时 `lock (MessageContracts)`。由于两张表的写入在同一把锁下、而读取不加锁，两个线程并发首次使用会存在竞争——锁内那次 `ContainsKey` 复查正是用来避免重复添加异常的。

## 使用示例

### 示例 1 —— 带显式长度前缀的最小消息

```csharp
using System.Text;
using TaleWorlds.Network;

namespace MyMod.Network
{
    [MessageId(210)]
    public class ClanNameQueryMessage : MessageContract
    {
        public string RequestedClanId { get; private set; }

        public ClanNameQueryMessage()
        {
        }

        public ClanNameQueryMessage(string clanId)
        {
            RequestedClanId = clanId;
        }

        public override void SerializeToNetworkMessage(INetworkMessageWriter networkMessage)
        {
            byte[] payload = Encoding.UTF8.GetBytes(RequestedClanId ?? string.Empty);
            networkMessage.Write(payload.Length);      // 永远显式写长度
            for (int i = 0; i < payload.Length; i++)
            {
                networkMessage.Write(payload[i]);
            }
        }

        public override void DeserializeFromNetworkMessage(INetworkMessageReader networkMessage)
        {
            int length = networkMessage.ReadInt32();
            byte[] payload = new byte[length];
            for (int i = 0; i < length; i++)
            {
                payload[i] = networkMessage.ReadByte();
            }
            RequestedClanId = Encoding.UTF8.GetString(payload);
        }
    }
}
```

### 示例 2 —— 发送与接收它

```csharp
using TaleWorlds.Network;

namespace MyMod.Network
{
    public class MyServerSession
    {
        private readonly MessageContractHandlerManager _handlers = new MessageContractHandlerManager();

        public void Install()
        {
            _handlers.AddMessageHandler<ClanNameQueryMessage>(OnClanNameQuery);
        }

        private void OnClanNameQuery(ClanNameQueryMessage message)
        {
            byte wireId = message.MessageId;              // 210，从静态表解析而来
            Campaign.Campaign.Current.Logger.PrintInformation("clan " + message.RequestedClanId);
        }

        public void Send(INetworkMessageWriter writer, string clanId)
        {
            var outgoing = new ClanNameQueryMessage(clanId);
            outgoing.SerializeToNetworkMessage(writer);
        }

        public void OnRawMessage(NetworkMessage raw)
        {
            // 读 id 字节、创建契约、反序列化、分派。
            _handlers.HandleNetworkMessage(raw);
        }
    }
}
```

### 示例 3 —— 不需要 socket 就能跑的往返检查

```csharp
[Test]
public void ClanNameQueryMessage_RoundTrips()
{
    var buffer = new MemoryStream();
    var writer = new TestNetworkMessageWriter(buffer);
    new ClanNameQueryMessage("Sturgia").SerializeToNetworkMessage(writer);

    var reader = new TestNetworkMessageReader(buffer.ToArray());
    var contract = MessageContract.CreateMessageContract(typeof(ClanNameQueryMessage));
    contract.DeserializeFromNetworkMessage(reader);

    Assert.AreEqual("Sturgia", ((ClanNameQueryMessage)contract).RequestedClanId);
}
```

## 风险与崩溃边界

- **存档序列化**：没有，而且本就不该有。`MessageContract` 写入的是 `INetworkMessageWriter`，也就是一个活的 socket 缓冲。这里没有任何东西参与战役存档系统，消息契约也永远不能用来持久化战役状态。反过来说，如果你在这套编解码器之上自建存档格式，你将得不到版本管理、迁移能力，以及跨游戏更新的任何兼容性保证。
- **跨域依赖**：该类型位于 `TaleWorlds.Network`，这是底层 socket 程序集。两个对端必须加载同一版本——运行不同构建版本的客户端与服务器会对线上协议产生分歧，而**没有任何协商步骤**去检测契约 id 是否一致。
- **加载时序**：注册发生在首次构造时，或首次调用 `internal GetContractId` 时。如果 `AddMessageHandler<T>` 运行时该类型尚未初始化，它自己就会触发 `InitializeMessageContract`，因此顺序是安全的——但缺少属性的类型不会注册，于是处理器管理器里的 `Dictionary.Add` 会立刻抛异常，这是你能拿到的最早也最清晰的失败信号。
- **ID 稳定性**：这是本类最锋利的边缘。`MessageId` 是一个 **`byte`**，也就是说每张注册表只有 256 个槽位，而 id 是接收端**唯一**的分派依据。在游戏版本之间重新编号一条消息会静默地重新解释流量。绝不要复用已被删除消息占用过的 id；也绝不要因为“你手上的源码里没看到 `[MessageId]`”就认为某个 id 是空闲的——对端的构建版本可能声明了它。
- **失步是静默的**。`SerializeToNetworkMessage` 与 `DeserializeFromNetworkMessage` 之间的不匹配不会在边界上抛异常；它只会让后续每个字段、以及该连接上后续每一条消息都变成垃圾。对称性是唯一的防线。
- **注册路径里有 `Activator.CreateInstance`**。构造函数抛异常、或类型不是 public 的契约类型，会在 `InitializeMessageContract` 期间失败——而这可能发生在网络接收循环内部，把一次编写错误变成一次连接中断。
- **没有载荷上限**。你写什么，接收方就按读到的长度分配数组去读。一个畸形或恶意的长度就是一次你没有设上界的分配。

## 跨版本提示

- **v1.3.x → v1.4.5**：接口未变——`[MessageId]`、protected 构造函数、`MessageId` 属性、`CreateMessageContract` 与两个抽象序列化重写的签名都保持一致。`MessageContractHandlerManager` 仍然通过同一批静态表来解析类型。
- **v1.4.5**：`InitializeMessageContract` 要求**恰好一个** `[MessageId]` 属性（`Length != 1` 即返回而不注册）。一个类型上挂两个属性与挂零个一样致命。
- **v1.4.5**：不存在 `Dispose`、`IsValid` 或 `OnReceive` 成员。契约纯粹是数据载体；全部行为都在你注册的处理器里。

## 参见

- ↑ 父级目录：[Campaign-Ext API 索引](../)
- ↔ 同级：[MessageContractHandlerManager](../MessageContractHandlerManager) —— 以本契约线上 id 为键的分派表
- ↔ 同级：[MessageId](../MessageId) —— 提供线上 id 的属性
- ↔ 同级：[MessageContractCreator](../MessageContractCreator) —— 缓存的按类型工厂
- ↔ 同级：[NetworkMessage](../NetworkMessage) —— 此处读写的原始缓冲
- ↔ 同级：[INetworkMessageWriter](../INetworkMessageWriter) / [INetworkMessageReader](../INetworkMessageReader) —— 带类型的编解码接口面
- ↔ 同级：[CoroutineManager](../CoroutineManager) —— `TaleWorlds.Network` 模型的另一半
