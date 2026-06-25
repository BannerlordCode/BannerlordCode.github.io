---
title: "HttpGetRequest"
description: "Auto-generated class reference for HttpGetRequest."
---
# HttpGetRequest

**Namespace:** TaleWorlds.Library.Http
**Module:** TaleWorlds.Library
**Type:** `public class HttpGetRequest : IHttpRequestTask`
**Base:** `IHttpRequestTask`
**File:** `TaleWorlds.Library/Http/HttpGetRequest.cs`

## Overview

`HttpGetRequest` lives in `TaleWorlds.Library.Http` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library.Http` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `State` | `public HttpRequestTaskState State { get; }` |
| `Successful` | `public bool Successful { get; }` |
| `ResponseData` | `public string ResponseData { get; }` |
| `ResponseStatusCode` | `public HttpStatusCode ResponseStatusCode { get; }` |
| `Exception` | `public Exception Exception { get; }` |

## Key Methods

### Start
`public void Start()`

**Purpose:** Starts the current object's flow or state machine.

```csharp
// Obtain an instance of HttpGetRequest from the subsystem API first
HttpGetRequest httpGetRequest = ...;
httpGetRequest.Start();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
HttpGetRequest httpGetRequest = ...;
httpGetRequest.Start();
```

## See Also

- [Area Index](../)