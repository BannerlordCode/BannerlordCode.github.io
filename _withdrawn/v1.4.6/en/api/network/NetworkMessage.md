---
title: "NetworkMessage"
description: "NetworkMessage: a public class in TaleWorlds.Network, inheriting INetworkMessageWriter, INetworkMessageReader; 20 exposed members (20 methods, 0 properties, 0 fields). Canonical bucket network. Source: TaleWorlds.Network/NetworkMessage.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# NetworkMessage

**Namespace:** `TaleWorlds.Network`
**Module:** `TaleWorlds.Network`
**Type:** `public class NetworkMessage : INetworkMessageWriter, INetworkMessageReader`
**File:** `TaleWorlds.Network/NetworkMessage.cs`
**Bucket:** `network` (rule:TaleWorlds.Network)

## Overview

NetworkMessage lives in the TaleWorlds.Network module, source file TaleWorlds.Network/NetworkMessage.cs. It is a public class, implementing/inheriting INetworkMessageWriter, INetworkMessageReader; the inheritance chain is NetworkMessage → INetworkMessageWriter. It exposes 20 public/protected members: 20 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: NetworkMessage lands in canonical bucket `network` (matched rule `rule:TaleWorlds.Network`), namespace `TaleWorlds.Network`, inheritance chain NetworkMessage → INetworkMessageWriter. The surface is method-led (methods 20/20, properties 0/20), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Network/NetworkMessage.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Write` | `public void Write(string data)` | method |
| `Write` | `public void Write(int data)` | method |
| `Write` | `public void Write(short data)` | method |
| `Write` | `public void Write(bool data)` | method |
| `Write` | `public void Write(byte data)` | method |
| `Write` | `public void Write(float data)` | method |
| `Write` | `public void Write(long data)` | method |
| `Write` | `public void Write(ulong data)` | method |
| `Write` | `public void Write(Guid data)` | method |
| `Write` | `public void Write(byte[]data)` | method |
| `ReadInt32` | `public int ReadInt32()` | method |
| `ReadInt16` | `public short ReadInt16()` | method |
| `ReadBoolean` | `public bool ReadBoolean()` | method |
| `ReadByte` | `public byte ReadByte()` | method |
| `ReadString` | `public string ReadString()` | method |
| `ReadFloat` | `public float ReadFloat()` | method |
| `ReadInt64` | `public long ReadInt64()` | method |
| `ReadUInt64` | `public ulong ReadUInt64()` | method |
| `ReadGuid` | `public Guid ReadGuid()` | method |
| `byte[]ReadByteArray` | `public byte[]ReadByteArray()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface INetworkMessageWriter](../INetworkMessageWriter/)
- [base / interface INetworkMessageReader](../INetworkMessageReader/)
- [same namespace Authorize](../Authorize/)
- [same namespace ClientsideSession](../ClientsideSession/)
- [same namespace ClientWebSocketHandler](../ClientWebSocketHandler/)
- [same namespace ConnectionState](../ConnectionState/)
