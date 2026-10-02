---
title: "IClient"
description: "IClient: a public interface in TaleWorlds.Diamond; 8 exposed members (5 methods, 3 properties, 0 fields). Canonical bucket engine. Source: TaleWorlds.Diamond/IClient.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IClient

**Namespace:** `TaleWorlds.Diamond`
**Module:** `TaleWorlds.Diamond`
**Type:** `public interface IClient`
**File:** `TaleWorlds.Diamond/IClient.cs`
**Bucket:** `engine` (rule:TaleWorlds.Diamond)

## Overview

IClient lives in the TaleWorlds.Diamond module, source file TaleWorlds.Diamond/IClient.cs. It is a public interface; the inheritance chain is IClient. It exposes 8 public/protected members: 5 methods, 3 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IClient lands in canonical bucket `engine` (matched rule `rule:TaleWorlds.Diamond`), namespace `TaleWorlds.Diamond`, inheritance chain IClient. The surface is method-led (methods 5/8, properties 3/8), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Diamond/IClient.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsInCriticalState` | `bool IsInCriticalState` | property |
| `AliveCheckTimeInMiliSeconds` | `long AliveCheckTimeInMiliSeconds` | property |
| `HandleMessage` | `void HandleMessage(Message message);` | method |
| `OnConnected` | `void OnConnected();` | method |
| `OnCantConnect` | `void OnCantConnect();` | method |
| `OnDisconnected` | `void OnDisconnected();` | method |
| `Task` | `Task<bool>CheckConnection();` | method |
| `AccessProvider` | `ILoginAccessProvider AccessProvider` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AccessObject](../AccessObject/)
- [same namespace AccessObjectJsonConverter](../AccessObjectJsonConverter/)
- [same namespace AccessObjectResult](../AccessObjectResult/)
- [same namespace AesHelper](../AesHelper/)
