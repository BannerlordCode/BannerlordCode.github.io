---
title: "NetworkMessage"
description: "TaleWorlds.Network 中同时承担写入与读取职责的网络消息字节载体，是所有网络字段序列化的最底层容器。"
---
# NetworkMessage

**命名空间：** `TaleWorlds.Network`
**模块：** `TaleWorlds.Network`
**类型：** `public class NetworkMessage : INetworkMessageWriter, INetworkMessageReader`
**基类：** `object`，实现 `INetworkMessageWriter` 与 `INetworkMessageReader`
**源文件：** `TaleWorlds.Network/NetworkMessage.cs`（声明见第 7 行）

## 概述

`NetworkMessage` 是 TaleWorlds.Network 里唯一一个同时实现 `INetworkMessageWriter` 与 `INetworkMessageReader` 的类型（声明见 NetworkMessage.cs:7）。它把「一条网络消息」抽象成一段可按写入顺序读回的字节缓冲区：发送端调用 `Write` 系列重载把字段依次追加进去（NetworkMessage.cs:66、88、99、108、116、123、134、149、164、175），接收端用 `ReadInt32`、`ReadInt16`、`ReadBoolean`、`ReadByte` 按**完全相同的顺序**把字段取回（NetworkMessage.cs:193、201、209、217）。

它是整个网络栈的地基：`MessageContract` 的序列化回调收到的参数类型就是这里的两个接口，`MessageContractHandlerManager` 最终分发的也是包在 `NetworkMessage` 里的字节（MessageContractHandlerManager.cs:44）。换句话说，上层所有「消息」「契约」「处理器」最终都落到这个类身上的字节流。

## 心智模型

把 `NetworkMessage` 想成**一条单行道加一盘只读回放带**。

- 写入阶段是单行道：`Write(string)`、`Write(int)`、`Write(bool)` 等只是往缓冲区尾部追加字节，没有任何自描述信息、没有字段名、没有类型标签（NetworkMessage.cs:66、88、108）。
- 读取阶段是回放带：`ReadInt32()`、`ReadBoolean()` 等只按**当前位置**解释接下来若干字节（NetworkMessage.cs:193、209）。它不知道你写入时用的是什么类型，只知道「接下来 4 个字节按 int 解释」。
- 因此「写入顺序」就是「协议本身」。发送端写 `int`、`bool`，接收端就必须先 `ReadInt32()` 再 `ReadBoolean()`，中间少读或多读一个字段，后面全部错位。
- 同一个实例既可以是纯写入端也可以是纯读取端；它同时实现两个接口只是为了让「构造消息」和「解析消息」共用一套字节表示（NetworkMessage.cs:7）。

一句话：**这个类不负责消息语义，只负责字节的进出顺序**。语义由上层 `MessageContract` 承担。

## 怎么用

### 怎么拿到

源树位置：`bannerlord-1.4.7/TaleWorlds.Network/NetworkMessage.cs`，类声明在第 7 行，公开构造函数与 `Write` 重载从第 66 行起（NetworkMessage.cs:66）。

在 mod 代码里，你通常**不自己 new 它**，而是从网络层入口拿到：

- 实现 `MessageContract` 时，`SerializeToNetworkMessage(INetworkMessageWriter)` 的 writer 参数就是它的写入接口（MessageContract.cs:84）；`DeserializeFromNetworkMessage(INetworkMessageReader)` 的 reader 参数就是它的读取接口（MessageContract.cs:87）。
- 走处理器分发时，`MessageContractHandlerManager.HandleNetworkMessage(NetworkMessage)` 直接接收一个 `NetworkMessage` 实例（MessageContractHandlerManager.cs:44）。
- 需要手工构造（例如离线测试序列化）时，直接 `new NetworkMessage()` 即可，然后按顺序 `Write`。

### 典型用法

1. **写**：按固定顺序把字段写进消息，字段顺序即为协议。
2. **读**：按同一顺序读回，读之前确认双方版本一致。
3. **只读不写 / 只写不读**：绝大多数场景下一个实例只承担一个方向，不要在同一条消息上边写边读。
4. **不要在消息里塞「长度未知」的结构**：先写长度（`Write(int)`），再写内容（`Write(byte[])`），接收端先 `ReadInt32()` 再按长度读（NetworkMessage.cs:88、175、193）。

### 坑

- **顺序错位是静默的**：多读一个 `ReadByte()` 不会抛异常，只会让后续字段全部解释成垃圾值（NetworkMessage.cs:217）。
- **`ReadInt32` 不会做边界校验的语义判断**：它只按位置取字节，写入端少写就可能在末尾读越界（NetworkMessage.cs:193）。
- **不要在消息里混用新旧字段顺序**：加字段只能追加在末尾，插在中间会破坏所有旧客户端（NetworkMessage.cs:66 起的所有 `Write` 都是纯追加语义）。
- **字符串长度不是免费的**：字符串写入会占可变长度，读取端必须用对应的字符串读取方法，不能拿 `ReadInt32()` 顶替（NetworkMessage.cs:66）。
- **不要跨线程复用同一个实例**：它内部维护读写游标，两个线程并发读写会互相污染。

## 关键成员

| 成员 | 用途 |
| --- | --- |
| `Write(string)` (NetworkMessage.cs:66) | 把字符串字段追加进缓冲区 |
| `Write(int)` (NetworkMessage.cs:88) | 写入 32 位整数，常用于 id、数量、长度前缀 |
| `Write(short)` (NetworkMessage.cs:99) | 写入 16 位整数，适合小范围枚举/版本号 |
| `Write(bool)` (NetworkMessage.cs:108) | 写入布尔标志位 |
| `Write(byte)` (NetworkMessage.cs:116) | 写入单字节，适合消息 id、类型标签 |
| `Write(float)` (NetworkMessage.cs:123) | 写入单精度浮点，适合坐标等连续量 |
| `Write(long)` (NetworkMessage.cs:134) | 写入 64 位整数 |
| `Write(ulong)` (NetworkMessage.cs:149) | 写入无符号 64 位整数，适合位集合/哈希 |
| `Write(Guid)` (NetworkMessage.cs:164) | 写入 16 字节 GUID 标识 |
| `Write(byte[])` (NetworkMessage.cs:175) | 写入字节数组块，配合前置长度前缀使用 |
| `ReadInt32()` (NetworkMessage.cs:193) | 读回 32 位整数，必须与写入顺序对齐 |
| `ReadInt16()` (NetworkMessage.cs:201) | 读回 16 位整数 |
| `ReadBoolean()` (NetworkMessage.cs:209) | 读回布尔值 |
| `ReadByte()` (NetworkMessage.cs:217) | 读回单字节 |

## 真实示例

```csharp
// 发送端：把一次「战斗开始」快照按固定顺序写进消息
public void WriteBattleSnapshot(NetworkMessage message)
{
    message.Write("battle_started"); // 事件名，NetworkMessage.cs:66
    message.Write(1024);             // 玩家 id，NetworkMessage.cs:88
    message.Write(250.5f);           // 坐标，NetworkMessage.cs:123
    message.Write(true);             // 是否本地玩家，NetworkMessage.cs:108
}

// 接收端：必须按同一顺序读回，否则后续字段全部错位
public void ReadBattleSnapshot(NetworkMessage message)
{
    // 字符串字段由读取接口的对应方法读出，顺序必须与写入端一致
    int playerId = message.ReadInt32();  // NetworkMessage.cs:193
    bool isLocal = message.ReadBoolean(); // NetworkMessage.cs:209
    byte flags = message.ReadByte();      // NetworkMessage.cs:217
}
```

## 参见

- [MessageContract](../MessageContract)
- [MessageContractHandlerManager](../MessageContractHandlerManager)
- [MessageInfo](../MessageInfo)
- [../../core-extra/Game](../../core-extra/Game)

## 导航

- ↑ [版本首页](../../../)
- ↑ [API 参考](../../)
- ↔ [架构总览](../../../architecture/)
