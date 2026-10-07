---
title: "MessageContract"
description: "TaleWorlds.Network 中定义消息如何序列化到 NetworkMessage 的抽象基类，并提供按类型创建契约实例的静态工厂。"
---
# MessageContract

**命名空间：** `TaleWorlds.Network`
**模块：** `TaleWorlds.Network`
**类型：** `public abstract class MessageContract`
**基类：** `object`（抽象基类，不能直接实例化）
**源文件：** `bannerlord-1.4.7/TaleWorlds.Network/MessageContract.cs`（声明见第 8 行）

## 概述

`MessageContract` 是 TaleWorlds.Network 里所有「消息类型」的抽象基类（声明见 MessageContract.cs:8）。它只规定两件事：一条消息如何把自己写进网络消息（`SerializeToNetworkMessage`，MessageContract.cs:84），以及如何从网络消息里还原自己（`DeserializeFromNetworkMessage`，MessageContract.cs:87）。两者都是抽象方法，子类必须实现。

除此之外它还提供一个静态工厂 `CreateMessageContract(Type)`（MessageContract.cs:77），用于在运行期按 `Type` 反射创建契约实例——这正是反序列化端「只知道消息 id、不知道具体类型」时能把字节变回对象的关键一步。

它自己**不碰字节**：真正的字节读写被委托给 `INetworkMessageWriter` / `INetworkMessageReader`，也就是 `NetworkMessage` 提供的两个接口（NetworkMessage.cs:7）。

## 心智模型

把 `MessageContract` 想成**一张「消息的身份证 + 装箱单」模板**。

- 身份证：每个具体契约子类代表一种消息（例如「金币变化」「战斗开始」）。上层靠类型或消息 id 决定该创建哪个契约（MessageContract.cs:77）。
- 装箱单：`SerializeToNetworkMessage` 规定装箱顺序（MessageContract.cs:84），`DeserializeFromNetworkMessage` 规定拆箱顺序（MessageContract.cs:87）。两者必须严格互为逆操作。
- 它是**抽象类而不是接口**：这说明框架希望你在契约里放字段、放共享逻辑，甚至放一些基类提供的公共序列化辅助，而不只是声明两个方法。
- 它与 `NetworkMessage` 的分工是清晰的：`NetworkMessage` 只懂字节顺序，`MessageContract` 只懂字段语义。写契约时你思考的是「这条消息有哪些字段、什么顺序」，而不是「字节怎么排」。

一句话：**`MessageContract` 是消息的语义层，`NetworkMessage` 是它的字节层。**

## 怎么用

### 怎么拿到

源树位置：`bannerlord-1.4.7/TaleWorlds.Network/MessageContract.cs`，类声明在第 8 行，静态工厂在第 77 行（MessageContract.cs:77）。

两种拿到方式：

- **自己派生**：为每种自定义消息写一个 `class XxxMessage : MessageContract`，实现两个抽象方法（MessageContract.cs:84、87）。这是 mod 里最常见的做法。
- **按类型创建**：`MessageContract.CreateMessageContract(typeof(XxxMessage))` 返回基类引用（MessageContract.cs:77），反序列化路径与泛型注册路径都依赖它。

### 典型用法

1. 定义一个契约子类，公开字段与普通 C# 类无异。
2. 在 `SerializeToNetworkMessage` 里按固定顺序 `writer.Write(...)` 每个字段（MessageContract.cs:84）。
3. 在 `DeserializeFromNetworkMessage` 里按**完全相同的顺序** `reader.ReadXxx()` 回填字段（MessageContract.cs:87）。
4. 把该类型注册到 `MessageContractHandlerManager`，让到达的消息能自动分发（MessageContractHandlerManager.cs:28）。
5. 需要手工构造时用 `CreateMessageContract(Type)`，不要 `new` 抽象类（MessageContract.cs:77）。

### 坑

- **两个抽象方法必须严格互逆**：写入端多写一个字段、读取端少读一个，后续所有字段静默错位（MessageContract.cs:84、87）。
- **字段顺序即协议版本**：新字段只能追加在末尾，插在中间会破坏所有旧对端。
- **`CreateMessageContract` 走反射**：它在运行期按 `Type` 构造实例，契约类需要可被反射实例化；把构造函数改成只接受复杂参数的私有构造会让工厂失败（MessageContract.cs:77）。
- **不要在契约里持有不可序列化的引用**：契约最终要被写进字节流，`Game` 之类的引擎对象引用无法直接落盘，应只序列化 id 或值（MessageContract.cs:84）。
- **别在契约里直接做网络 I/O**：它的职责只有序列化，发送与接收由上层管理器和连接层负责（MessageContractHandlerManager.cs:38）。

## 关键成员

| 成员 | 用途 |
| --- | --- |
| `CreateMessageContract(Type)` (MessageContract.cs:77) | 静态工厂：按 `Type` 反射创建契约实例，反序列化端据此把消息 id 还原成对象 |
| `SerializeToNetworkMessage(INetworkMessageWriter)` (MessageContract.cs:84) | 抽象方法：把本契约的字段按固定顺序写进网络消息 |
| `DeserializeFromNetworkMessage(INetworkMessageReader)` (MessageContract.cs:87) | 抽象方法：从网络消息按同一顺序读回字段并回填自身 |

## 真实示例

定义一条自定义消息契约：

```csharp
public class GoldChangedMessage : MessageContract
{
    public int PlayerId;
    public int Gold;

    public override void SerializeToNetworkMessage(INetworkMessageWriter writer)
    {
        writer.Write(PlayerId);
        writer.Write(Gold);
    }

    public override void DeserializeFromNetworkMessage(INetworkMessageReader reader)
    {
        PlayerId = reader.ReadInt32();
        Gold = reader.ReadInt32();
    }
}
```

反序列化端按类型创建实例并读取：

```csharp
MessageContract contract = MessageContract.CreateMessageContract(typeof(GoldChangedMessage));
contract.DeserializeFromNetworkMessage(reader);
int gold = ((GoldChangedMessage)contract).Gold;
```

## 参见

- [NetworkMessage](../NetworkMessage)
- [MessageContractHandlerManager](../MessageContractHandlerManager)
- [../../core-extra/Game](../../core-extra/Game)
- [../../system/GameKey](../../system/GameKey)

## 导航

- ↑ [版本首页](../../../)
- ↑ [API 参考](../../)
- ↔ [架构总览](../../../architecture/)
