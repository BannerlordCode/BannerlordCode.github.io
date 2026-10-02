---
title: "Client<T>"
description: "Client<T>: a public class in TaleWorlds.Diamond, inheriting DiamondClientApplicationObject, IClient; 18 exposed members (14 methods, 3 properties, 0 fields). Canonical bucket engine. Source: TaleWorlds.Diamond/Client.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Client<T>

**Namespace:** `TaleWorlds.Diamond`
**Module:** `TaleWorlds.Diamond`
**Type:** `public abstract class Client<T>: DiamondClientApplicationObject, IClient where T : Client<T>`
**File:** `TaleWorlds.Diamond/Client.cs`
**Bucket:** `engine` (rule:TaleWorlds.Diamond)

## Overview

Client<T> lives in the TaleWorlds.Diamond module, source file TaleWorlds.Diamond/Client.cs. It is a public class (abstract), implementing/inheriting DiamondClientApplicationObject, IClient; the inheritance chain is Client → DiamondClientApplicationObject. It exposes 18 public/protected members: 14 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Client<T> lands in canonical bucket `engine` (matched rule `rule:TaleWorlds.Diamond`), namespace `TaleWorlds.Diamond`, inheritance chain Client → DiamondClientApplicationObject. The surface is method-led (methods 14/18, properties 3/18), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Diamond/Client.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsInCriticalState` | `public bool IsInCriticalState` | property |
| `AliveCheckTimeInMiliSeconds` | `public virtual long AliveCheckTimeInMiliSeconds` | property |
| `Client` | `protected Client(DiamondClientApplication diamondClientApplication, IClientSessionProvider<T>sessionProvider, bool autoReconnect) : base(diamondClientApplication)` | constructor |
| `Update` | `public void Update()` | method |
| `OnTick` | `protected abstract void OnTick();` | method |
| `SendMessage` | `protected void SendMessage(Message message)` | method |
| `AccessProvider` | `public ILoginAccessProvider AccessProvider` | property |
| `Task` | `protected async Task<LoginResult>Login(LoginMessage message)` | method |
| `Task` | `protected async Task<TResult>CallFunction<TResult>(Message message) where TResult : FunctionResult` | method |
| `AddMessageHandler` | `protected void AddMessageHandler<TMessage>(ClientMessageHandler<TMessage>messageHandler) where TMessage : Message` | method |
| `HandleMessage` | `public void HandleMessage(Message message)` | method |
| `OnConnected` | `public virtual void OnConnected()` | method |
| `OnCantConnect` | `public virtual void OnCantConnect()` | method |
| `OnDisconnected` | `public virtual void OnDisconnected()` | method |
| `BeginConnect` | `protected void BeginConnect()` | method |
| `BeginDisconnect` | `protected void BeginDisconnect()` | method |
| `SetAliveCheckTime` | `protected void SetAliveCheckTime(long time)` | method |
| `Task` | `public Task<bool>CheckConnection()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface DiamondClientApplicationObject](../DiamondClientApplicationObject/)
- [base / interface IClient](../IClient/)
- [same namespace AccessObject](../AccessObject/)
- [same namespace AccessObjectJsonConverter](../AccessObjectJsonConverter/)
- [same namespace AccessObjectResult](../AccessObjectResult/)
- [same namespace AesHelper](../AesHelper/)
