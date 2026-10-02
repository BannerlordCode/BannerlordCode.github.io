---
title: "IClientSession"
description: "IClientSession: a public interface in TaleWorlds.Diamond; 7 exposed members (7 methods, 0 properties, 0 fields). Canonical bucket engine. Source: TaleWorlds.Diamond/IClientSession.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IClientSession

**Namespace:** `TaleWorlds.Diamond`
**Module:** `TaleWorlds.Diamond`
**Type:** `public interface IClientSession`
**File:** `TaleWorlds.Diamond/IClientSession.cs`
**Bucket:** `engine` (rule:TaleWorlds.Diamond)

## Overview

IClientSession lives in the TaleWorlds.Diamond module, source file TaleWorlds.Diamond/IClientSession.cs. It is a public interface; the inheritance chain is IClientSession. It exposes 7 public/protected members: 7 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IClientSession lands in canonical bucket `engine` (matched rule `rule:TaleWorlds.Diamond`), namespace `TaleWorlds.Diamond`, inheritance chain IClientSession. The surface is method-led (methods 7/7, properties 0/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Diamond/IClientSession.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Connect` | `void Connect();` | method |
| `Disconnect` | `void Disconnect();` | method |
| `Tick` | `void Tick();` | method |
| `Task` | `Task<LoginResult>Login(LoginMessage message);` | method |
| `SendMessage` | `void SendMessage(Message message);` | method |
| `Task` | `Task<T>CallFunction<T>(Message message) where T : FunctionResult;` | method |
| `Task` | `Task<bool>CheckConnection();` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AccessObject](../AccessObject/)
- [same namespace AccessObjectJsonConverter](../AccessObjectJsonConverter/)
- [same namespace AccessObjectResult](../AccessObjectResult/)
- [same namespace AesHelper](../AesHelper/)
