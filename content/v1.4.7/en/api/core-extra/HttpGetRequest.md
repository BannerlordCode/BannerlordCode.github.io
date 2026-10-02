---
title: "HttpGetRequest"
description: "HttpGetRequest — class in TaleWorlds.Library.Http. 8 public members (0 static)."
---

<!-- v147-skeleton -->
# HttpGetRequest

**Namespace:** `TaleWorlds.Library.Http`  
**Module:** `TaleWorlds.Library`  
**Type:** `public class HttpGetRequest : IHttpRequestTask`  
**Base:** `IHttpRequestTask`  
**Source:** `TaleWorlds.Library/Http/HttpGetRequest.cs`

## Overview

`HttpGetRequest` is a named type in the TaleWorlds.Library.Http namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends IHttpRequestTask, so the members it does not redeclare are inherited from there. 5 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (2): `HttpGetRequest`, `HttpGetRequest`.
- **Instance members** (6): `State`, `Successful`, `ResponseData`, `ResponseStatusCode`, `Exception`, `Start`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Exception` | property | Instance entry point `Exception` property. Read it for current state; a declared setter writes that state in place. |
| `ResponseData` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `ResponseStatusCode` | property | Instance entry point `HttpStatusCode` property. Read it for current state; a declared setter writes that state in place. |
| `Start` | method | Instance entry point. Takes no arguments. |
| `State` | property | Instance entry point `HttpRequestTaskState` property. Read it for current state; a declared setter writes that state in place. |
| `Successful` | property | Instance entry point `bool` property. Read it for current state; a declared setter writes that state in place. |
| `HttpGetRequest` | ctor | Instance entry point. Takes 2 arguments: `HttpClient httpClient`, `string address`. Returns ``. |
| `HttpGetRequest` | ctor | Instance entry point. Takes 3 arguments: `HttpClient httpClient`, `string address`, `Version version`. Returns ``. |

- Constructed as `public HttpGetRequest(HttpClient httpClient, string address)`.
- Constructed as `public HttpGetRequest(HttpClient httpClient, string address, Version version)`.

## Usage Example

```csharp
var httpGetRequest = new HttpGetRequest(httpClient, address);
httpGetRequest.Start();
// Read current state through httpGetRequest.State.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.Library/Http/HttpGetRequest.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [HttpRequestTaskState](../HttpRequestTaskState/) — `TaleWorlds.Library.Http`.
- [Client](../../engine/Client/) — `TaleWorlds.Diamond`.

Section: [api/core-extra/](../) — the other types in this bucket.
