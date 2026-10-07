---
title: "Test_DeleteChatRoomMessage"
description: "Test_DeleteChatRoomMessage 的自动生成类参考。"
---
# Test_DeleteChatRoomMessage

**Namespace:** Messages.FromClient.ToLobbyServer
**Module:** Messages.FromClient
**Type:** `public class Test_DeleteChatRoomMessage : Message`
**Base:** `Message`
**File:** `TaleWorlds.MountAndBlade.Diamond/Messages/FromClient/ToLobbyServer/Test_DeleteChatRoomMessage.cs`

## 概述

`Test_DeleteChatRoomMessage` 是一个 Diamond 多人大厅的**线上协议消息**：客户端发给大厅服务器、要求删除一个聊天室的请求体。它是 `Messages.FromClient.ToLobbyServer.Test_DeleteChatRoomMessage`（`Test_DeleteChatRoomMessage.cs:10`），继承 `TaleWorlds.Diamond.Message`。

它携带的唯一信息是一个 `Guid ChatRoomId`（`Test_DeleteChatRoomMessage.cs:16`）。类名前缀 `Test_` 是关键信号：在 `bannerlord-1.3.15` 的 C# 代码里，除了它自己的文件之外，**没有任何地方引用过这个类型**——既没有构造，也没有发送，也没有接收处理。它是随正式大厅协议一起发布出来的调试用消息类型。

方向和失败策略写在类上的特性里：`[MessageDescription("Client", "LobbyServer", true)]`（`Test_DeleteChatRoomMessage.cs:8`），三个参数对应 `MessageDescription(string from, string to, bool endSessionOnFail = true)`（`MessageDescription.cs:24`），也就是 From=`"Client"`、To=`"LobbyServer"`、`EndSessionOnFail` 为 `true`。命名空间 `Messages.FromClient.ToLobbyServer`（`Test_DeleteChatRoomMessage.cs:5`）与这个特性是重复声明的——两处必须一致。

## 心智模型

把它当成**一个没有行为的、可序列化的信封**。它没有方法，连基类 `Message` 本身也是空的（`Message.cs:9`，整个类体里什么都没有）。你无法从消息对象上发送它，发送是路由器/会话的事。

真正决定它能不能跑通的是 JSON 序列化器。`Message` 基类上挂了 `[JsonConverter(typeof(MessageJsonConverter))]`（`Message.cs:7`），于是：

- 写出时，`WriteJson` 会把 `"_type"` 写成 `value.GetType().FullName`（`MessageJsonConverter.cs:58`）——**线上格式里嵌的是完整类型名**。
- 读回时，`ReadJson` 先取 `_type`（`MessageJsonConverter.cs:25`），要求它以 `"Messages."` 开头（`MessageJsonConverter.cs:27`），再在 `_knownTypes` 里查表，然后用 `Activator.CreateInstance(type)` 建实例（`MessageJsonConverter.cs:29`），最后 `serializer.Populate(...)` 填属性（`MessageJsonConverter.cs:30`）。**查不到就返回 `null`，不抛异常。**

由此推出四条硬边界：

- **必须有公开无参构造函数。** 转换器用的是 `Activator.CreateInstance(type)`，这就是 `public Test_DeleteChatRoomMessage()`（`Test_DeleteChatRoomMessage.cs:19`）存在的唯一理由；删掉它，这条消息就永远反序列化不出来。用无参构造函数 new 出来的实例，`ChatRoomId` 是 `Guid.Empty`（全零），不是 null——所以“你以为删的是空房间”会以“删了一个不存在的房间”的形式发出去。
- **private setter 必须配 `[JsonProperty]`。** `ChatRoomId` 的 setter 是私有的（`Test_DeleteChatRoomMessage.cs:16`），靠 `:15` 的 `[JsonProperty]` 标记才能被 `Populate` 写入。去掉那个特性，字段就永远保持默认值。
- **`_knownTypes` 是静态字段，只扫“当时已加载”的程序集。** 它用 `AppDomain.CurrentDomain.GetAssemblies()` 过滤掉 GAC 程序集，取所有 `Message` 子类，以 `Type.FullName` 为键构造字典（`MessageJsonConverter.cs:76`）。因此：如果你的 mod 程序集在这个静态字段初始化之后才加载，你自定义的 `Message` 类型不在表里，收到的 `_type` 查不到，`ReadJson` 静默返回 `null`。
- **全名必须唯一。** `_knownTypes` 是 `ToDictionary`，键为 `FullName`。两个程序集里各有一个 `Messages.FromClient.ToLobbyServer.Foo`，静态初始化时会直接抛 `ArgumentException`，而且是整个大厅连接初始化时炸，不是用到才炸。
- **`_type` 必须以 `Messages.` 开头。** 命名空间不叫 `Messages.…` 的消息类型即使进了字典，`ReadJson` 也会因为 `MessageJsonConverter.cs:27` 的 `StartsWith` 判断被拒。

## 怎么用

### 怎么拿到它

它不是一个你去“获取”的对象，而是你**构造出来交给路由器**。真实入口是它的构造函数 `Test_DeleteChatRoomMessage(Guid chatRoomId)`（`Test_DeleteChatRoomMessage.cs:24`）；反向的例子在同目录树下，比如服务器侧的 `BattleServer` 用 `base.SendMessage(...)` 把消息发出去（`BattleServer.cs:192`）。自定义消息时，类型必须放在以 `Messages.` 开头的命名空间里、继承 `Message`、带上 `[MessageDescription]` 和一个公开无参构造函数。

### 典型用法

```csharp
using Messages.FromClient.ToLobbyServer;
using Newtonsoft.Json;
using TaleWorlds.Diamond;

// 构造：只有这个构造函数会真正设置 ChatRoomId。
var request = new Test_DeleteChatRoomMessage(chatRoomId);

// 线上格式：{"_type":"Messages.FromClient.ToLobbyServer.Test_DeleteChatRoomMessage","ChatRoomId":"..."}
// _type 来自 MessageJsonConverter.WriteJson（MessageJsonConverter.cs:58）。
string payload = JsonConvert.SerializeObject(request);

// 反序列化端：走基类上的 MessageJsonConverter（Message.cs:7）。
// 无参构造函数 + [JsonProperty] 是能被 Populate 填上的前提
// （MessageJsonConverter.cs:29、MessageJsonConverter.cs:30）。
Message parsed = JsonConvert.DeserializeObject<Message>(payload);
if (parsed is Test_DeleteChatRoomMessage typed && typed.ChatRoomId != Guid.Empty)
{
    // 只有非空的 RoomId 才继续，否则你是在删一个不存在的房间。
}
```

### 最容易踩的坑

在自定义 `Message` 时把命名空间起成 `MyMod.Messages` 或 `TaleWorlds.…`。序列化时 `WriteJson` 会老老实实写出完整类型名（`MessageJsonConverter.cs:58`），但反序列化端先卡在 `text.StartsWith("Messages.")`（`MessageJsonConverter.cs:27`）——条件不成立就直接 `return null`，不抛异常、不记日志。你的 mod 在发送端看起来一切正常，接收端却静默地什么都收不到。类型必须放在 `Messages.` 开头的命名空间下，并且要在 `_knownTypes` 那个静态字典初始化时就已经被加载。

## 主要属性

| Name | Signature |
|------|-----------|
| `ChatRoomId` | `public Guid ChatRoomId { get; }` |

## 使用示例

```csharp
// 这个类型不提供任何获取入口：要么用带 Guid 的构造函数造一个交给路由器，
// 要么在接收端等 MessageJsonConverter 把它填出来。
var msg = new Test_DeleteChatRoomMessage(chatRoomId);
Guid room = msg.ChatRoomId;   // 用无参构造函数时这里是 Guid.Empty，不是 null
```

## 参见

- [本区域目录](../)
- [Message](../Message)
- [MessageDescription](../MessageDescription)
- [MessageJsonConverter](../MessageJsonConverter)