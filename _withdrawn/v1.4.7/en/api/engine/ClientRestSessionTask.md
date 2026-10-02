---
title: "ClientRestSessionTask"
description: "ClientRestSessionTask — class in TaleWorlds.Diamond.Rest. 14 public members (0 static)."
---

<!-- v147-skeleton -->
# ClientRestSessionTask

**Namespace:** `TaleWorlds.Diamond.Rest`  
**Module:** `TaleWorlds.Diamond`  
**Type:** `internal class ClientRestSessionTask`  
**Source:** `TaleWorlds.Diamond/Rest/ClientRestSessionTask.cs`

## Overview

`ClientRestSessionTask` is an internal class in TaleWorlds.Diamond.Rest. The engine constructs it and exposes it through public APIs; a mod can call the public surface above it but cannot `new` it or reference the type in a signature.

`ClientRestSessionTask` is a named type in the TaleWorlds.Diamond.Rest namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `ClientRestSessionTask`.
- **Instance members** (12): `RestRequestMessage`, `Finished`, `Successful`, `Request`, `RestResponse`, `IsCompletelyFinished`, ….
- **Data and constants** (1): `_willTryAgain`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Finished` | property | Instance entry point `bool` property. Read it for current state; a declared setter writes that state in place. |
| `IsCompletelyFinished` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `Request` | property | Instance entry point `IHttpRequestTask` property. Read it for current state; a declared setter writes that state in place. |
| `RestRequestMessage` | property | Instance entry point `RestRequestMessage` property. Read it for current state; a declared setter writes that state in place. |
| `RestResponse` | property | Instance entry point `RestResponse` property. Read it for current state; a declared setter writes that state in place. |
| `SetFinishedAsFailed` | method | Instance entry point. Takes no arguments. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetFinishedAsFailed` | method | Instance entry point. Takes 1 argument: `RestResponse restResponse`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetFinishedAsSuccessful` | method | Instance entry point. Takes 1 argument: `RestResponse restResponse`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetRequestData` | method | Instance entry point. Takes 3 arguments: `byte[] userCertificate`, `string address`, `IHttpDriver networkClient`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `Successful` | property | Instance entry point `bool` property. Read it for current state; a declared setter writes that state in place. |
| `Tick` | method | Instance entry point. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `WaitUntilFinished` | method | Instance entry point. Takes no arguments. Returns `Task`. |
| `ClientRestSessionTask` | ctor | Instance entry point. Takes 1 argument: `RestRequestMessage restRequestMessage`. Returns ``. |
| `_willTryAgain` | field | Instance entry point `bool` field — direct storage with no validation or notification. |

- Constructed as `public ClientRestSessionTask(RestRequestMessage restRequestMessage)`.

## Usage Example

```csharp
// ClientRestSessionTask is internal: the engine creates it, a mod cannot.
// Use it through whatever the engine exposes, and read the members below.
//   RestRequestMessage
//     RestRequestMessage
//   Finished
//     bool
//   Successful
//     bool
//   Request
//     IHttpRequestTask
//   RestResponse
//     RestResponse
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.Diamond/Rest/ClientRestSessionTask.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [HttpRequestTaskState](../../core-extra/HttpRequestTaskState/) — `TaleWorlds.Library.Http`.
- [IHttpDriver](../../core-extra/IHttpDriver/) — `TaleWorlds.Library.Http`.
- [MessageType](../MessageType/) — `TaleWorlds.Diamond.Rest`.

Section: [api/engine/](../) — the other types in this bucket.
