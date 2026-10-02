---
title: "INetworkMessageWriter"
description: "INetworkMessageWriter: a public interface in TaleWorlds.Network; 10 exposed members (10 methods, 0 properties, 0 fields). Canonical bucket network. Source: TaleWorlds.Network/INetworkMessageWriter.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# INetworkMessageWriter

**Namespace:** `TaleWorlds.Network`
**Module:** `TaleWorlds.Network`
**Type:** `public interface INetworkMessageWriter`
**File:** `TaleWorlds.Network/INetworkMessageWriter.cs`
**Bucket:** `network` (rule:TaleWorlds.Network)

## Overview

INetworkMessageWriter lives in the TaleWorlds.Network module, source file TaleWorlds.Network/INetworkMessageWriter.cs. It is a public interface; the inheritance chain is INetworkMessageWriter. It exposes 10 public/protected members: 10 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: INetworkMessageWriter lands in canonical bucket `network` (matched rule `rule:TaleWorlds.Network`), namespace `TaleWorlds.Network`, inheritance chain INetworkMessageWriter. The surface is method-led (methods 10/10, properties 0/10), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Network/INetworkMessageWriter.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Write` | `void Write(string data);` | method |
| `Write` | `void Write(int data);` | method |
| `Write` | `void Write(short data);` | method |
| `Write` | `void Write(bool data);` | method |
| `Write` | `void Write(byte data);` | method |
| `Write` | `void Write(float data);` | method |
| `Write` | `void Write(long data);` | method |
| `Write` | `void Write(ulong data);` | method |
| `Write` | `void Write(Guid data);` | method |
| `Write` | `void Write(byte[]data);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace Authorize](../Authorize/)
- [same namespace ClientsideSession](../ClientsideSession/)
- [same namespace ClientWebSocketHandler](../ClientWebSocketHandler/)
- [same namespace ConnectionState](../ConnectionState/)
