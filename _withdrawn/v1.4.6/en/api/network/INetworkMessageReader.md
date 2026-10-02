---
title: "INetworkMessageReader"
description: "INetworkMessageReader: a public interface in TaleWorlds.Network; 10 exposed members (10 methods, 0 properties, 0 fields). Canonical bucket network. Source: TaleWorlds.Network/INetworkMessageReader.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# INetworkMessageReader

**Namespace:** `TaleWorlds.Network`
**Module:** `TaleWorlds.Network`
**Type:** `public interface INetworkMessageReader`
**File:** `TaleWorlds.Network/INetworkMessageReader.cs`
**Bucket:** `network` (rule:TaleWorlds.Network)

## Overview

INetworkMessageReader lives in the TaleWorlds.Network module, source file TaleWorlds.Network/INetworkMessageReader.cs. It is a public interface; the inheritance chain is INetworkMessageReader. It exposes 10 public/protected members: 10 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: INetworkMessageReader lands in canonical bucket `network` (matched rule `rule:TaleWorlds.Network`), namespace `TaleWorlds.Network`, inheritance chain INetworkMessageReader. The surface is method-led (methods 10/10, properties 0/10), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Network/INetworkMessageReader.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ReadInt32` | `int ReadInt32();` | method |
| `ReadInt16` | `short ReadInt16();` | method |
| `ReadBoolean` | `bool ReadBoolean();` | method |
| `ReadByte` | `byte ReadByte();` | method |
| `ReadString` | `string ReadString();` | method |
| `ReadFloat` | `float ReadFloat();` | method |
| `ReadInt64` | `long ReadInt64();` | method |
| `ReadUInt64` | `ulong ReadUInt64();` | method |
| `ReadGuid` | `Guid ReadGuid();` | method |
| `byte[]ReadByteArray` | `byte[]ReadByteArray();` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace Authorize](../Authorize/)
- [same namespace ClientsideSession](../ClientsideSession/)
- [same namespace ClientWebSocketHandler](../ClientWebSocketHandler/)
- [same namespace ConnectionState](../ConnectionState/)
