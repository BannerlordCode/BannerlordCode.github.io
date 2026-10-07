---
title: "MessageInfo"
description: "TaleWorlds.Network 中承载消息元信息并在流上读写这些元数据的类型，区分服务端与客户端两个方向。"
---
# MessageInfo

**命名空间：** `TaleWorlds.Network`
**模块：** `TaleWorlds.Network`
**类型：** `public class MessageInfo`
**基类：** `object`
**源文件：** `bannerlord-1.4.7/TaleWorlds.Network/MessageInfo.cs`（声明见第 7 行）

## 概述

`MessageInfo` 描述一条网络消息的**元信息**（声明见 MessageInfo.cs:7）。它不承载业务字段，而是承载「这条消息本身是什么、有多大、该往哪个方向发」这类描述性数据，并负责把这些描述写进 / 读出 `Stream`：

- `WriteTo(Stream, bool fromServer)` 把元信息写入流（MessageInfo.cs:45）。
- `ReadFrom(Stream, bool fromServer)` 从流中把元信息读回（MessageInfo.cs:68）。

注意两个方法都带 `fromServer` 布尔参数——同一个类型在**服务端发送**和**客户端发送**两种上下文下的处理方式不同，方向必须显式传入，不能靠推断。

它与 `NetworkMessage` 的区别是层次上的：`NetworkMessage` 管一条消息的**内容字节**（NetworkMessage.cs:7），`MessageInfo` 管这条消息的**信封信息**，并且工作在 `Stream` 而不是消息缓冲区上。

## 心智模型

把 `MessageInfo` 想成**信封上的邮戳**，而不是信纸。

- 信纸是 `NetworkMessage`：里面是真正的字段字节（NetworkMessage.cs:66 起）。
- 邮戳是 `MessageInfo`：说明这封信的元数据，写在流上的固定位置（MessageInfo.cs:45、68）。
- 读写必须成对：写时用 `WriteTo(stream, fromServer)`，读时必须用 `ReadFrom(stream, fromServer)`，并且 `fromServer` 取同一个值，否则元信息会被按相反方向解释（MessageInfo.cs:45、68）。
- 它工作在 `Stream` 层而不是消息层，意味着**流的位置就是状态**：读写顺序与流游标位置严格绑定，多读少读都会让后续数据整体错位。
- `fromServer` 是**显式方向参数**，不是可以省略的默认值。它体现了「同一条元信息在两端视角不同」这一事实：发送端和接收端各自需要一个一致的约定值（MessageInfo.cs:45、68）。

一句话：**`MessageInfo` 是消息的信封，`NetworkMessage` 是信纸，`MessageContract` 是信里约定的书写格式。**

## 怎么用

### 怎么拿到

源树位置：`bannerlord-1.4.7/TaleWorlds.Network/MessageInfo.cs`，类声明在第 7 行，写流入口在第 45 行（MessageInfo.cs:45），读流入口在第 68 行（MessageInfo.cs:68）。

典型场景是你在写网络传输层：手上已经有一条 `Stream`（网络流或内存流），并且知道当前方向是「从服务端来」还是「从客户端来」，于是：

- 发送前：构造 / 填充 `MessageInfo`，然后 `WriteTo(stream, fromServer)`（MessageInfo.cs:45）。
- 接收后：新建实例，调用 `ReadFrom(stream, fromServer)` 还原元信息（MessageInfo.cs:68）。

### 典型用法

1. **方向一致**：写入时传的 `fromServer` 必须与读取时传的值相同，这是唯一的成对约束（MessageInfo.cs:45、68）。
2. **顺序一致**：元信息写在消息内容之前或之后取决于上层协议，但两端必须一致；`Stream` 是顺序读写的（MessageInfo.cs:45、68）。
3. **不要缓存 `Stream`**：只在使用时传入，避免流被替换后 `MessageInfo` 仍指向旧流。
4. **元信息与内容分离处理**：需要业务字段时用 `NetworkMessage` 的读写方法（NetworkMessage.cs:66、193），不要把两者混在同一层里。
5. **解码失败要整体丢弃**：流位置一旦错位，后续所有 `ReadFrom` 都不可信，应断开或重新同步连接（MessageInfo.cs:68）。

### 坑

- **`fromServer` 传错是最常见的静默错误**：元信息能被读出，但字段含义反了，且通常不抛异常（MessageInfo.cs:45、68）。
- **流游标是隐式状态**：`ReadFrom` 读完后游标前进，忘记这一点会导致下一次读取从错误位置开始（MessageInfo.cs:68）。
- **不要把 `MessageInfo` 当成消息内容容器**：它只有元信息，业务数据请走 `NetworkMessage` / `MessageContract`（NetworkMessage.cs:7、MessageContract.cs:8）。
- **不要跨线程共享同一条流上的读写**：两个线程同时推进游标会互相破坏位置（MessageInfo.cs:45、68）。
- **别省略方向参数**：把 `fromServer` 写死为 `true` 或 `false` 会在另一方向的对端上产生难以定位的解析错误（MessageInfo.cs:45、68）。

## 关键成员

| 成员 | 用途 |
| --- | --- |
| `WriteTo(Stream, bool fromServer)` (MessageInfo.cs:45) | 把消息元信息按指定方向写入流 |
| `ReadFrom(Stream, bool fromServer)` (MessageInfo.cs:68) | 从流中按指定方向读回消息元信息 |

## 真实示例

```csharp
// 发送端：把元信息写入网络流，方向标记为「来自服务端」
public void WriteMessageHeader(Stream stream, MessageInfo header)
{
    header.WriteTo(stream, fromServer: true); // MessageInfo.cs:45
}

// 接收端：必须用同一个方向标记读回，否则元信息含义会反过来
public void ReadMessageHeader(Stream stream, MessageInfo header)
{
    header.ReadFrom(stream, fromServer: true); // MessageInfo.cs:68
}

// 元信息读完后流游标已前进，后续内容再按 NetworkMessage 的顺序约定继续读
public void ReadPayload(Stream stream)
{
    // ... 从 stream 读出消息内容字节，交给 NetworkMessage 解析
}
```

## 参见

- [NetworkMessage](../NetworkMessage)
- [MessageContract](../MessageContract)
- [../../core-extra/Game](../../core-extra/Game)
- [../../system/GameKey](../../system/GameKey)

## 导航

- ↑ [版本首页](../../../)
- ↑ [API 参考](../../)
- ↔ [架构总览](../../../architecture/)
