---
title: "NetworkMessage"
description: "NetworkMessage：TaleWorlds.Network 的 public 类，继承 INetworkMessageWriter、INetworkMessageReader；公开成员 20 个（方法 20、属性 0、字段 0）。canonical 桶 network。源文件 TaleWorlds.Network/NetworkMessage.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# NetworkMessage

**Namespace:** `TaleWorlds.Network`
**Module:** `TaleWorlds.Network`
**Type:** `public class NetworkMessage : INetworkMessageWriter, INetworkMessageReader`
**File:** `TaleWorlds.Network/NetworkMessage.cs`
**Bucket:** `network` (rule:TaleWorlds.Network)

## 概述

NetworkMessage 位于 TaleWorlds.Network 模块，源文件 TaleWorlds.Network/NetworkMessage.cs。它是一个 public 类，实现/继承 INetworkMessageWriter、INetworkMessageReader，继承链为 NetworkMessage → INetworkMessageWriter。public/protected 成员共 20 个：20 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：NetworkMessage 落在 canonical 桶 `network`（命中规则 `rule:TaleWorlds.Network`），命名空间 `TaleWorlds.Network`，继承链 NetworkMessage → INetworkMessageWriter。成员构成以方法为主（方法 20/20，属性 0/20），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Network/NetworkMessage.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Write` | `public void Write(string data)` | 方法 |
| `Write` | `public void Write(int data)` | 方法 |
| `Write` | `public void Write(short data)` | 方法 |
| `Write` | `public void Write(bool data)` | 方法 |
| `Write` | `public void Write(byte data)` | 方法 |
| `Write` | `public void Write(float data)` | 方法 |
| `Write` | `public void Write(long data)` | 方法 |
| `Write` | `public void Write(ulong data)` | 方法 |
| `Write` | `public void Write(Guid data)` | 方法 |
| `Write` | `public void Write(byte[]data)` | 方法 |
| `ReadInt32` | `public int ReadInt32()` | 方法 |
| `ReadInt16` | `public short ReadInt16()` | 方法 |
| `ReadBoolean` | `public bool ReadBoolean()` | 方法 |
| `ReadByte` | `public byte ReadByte()` | 方法 |
| `ReadString` | `public string ReadString()` | 方法 |
| `ReadFloat` | `public float ReadFloat()` | 方法 |
| `ReadInt64` | `public long ReadInt64()` | 方法 |
| `ReadUInt64` | `public ulong ReadUInt64()` | 方法 |
| `ReadGuid` | `public Guid ReadGuid()` | 方法 |
| `byte[]ReadByteArray` | `public byte[]ReadByteArray()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 INetworkMessageWriter](../INetworkMessageWriter/)
- [基类/接口 INetworkMessageReader](../INetworkMessageReader/)
- [同命名空间 Authorize](../Authorize/)
- [同命名空间 ClientsideSession](../ClientsideSession/)
- [同命名空间 ClientWebSocketHandler](../ClientWebSocketHandler/)
- [同命名空间 ConnectionState](../ConnectionState/)
