---
title: "HttpPostRequest"
description: "Auto-generated class reference for HttpPostRequest."
---
# HttpPostRequest

**Namespace:** TaleWorlds.Library.Http
**Module:** TaleWorlds.Library
**Type:** `public class HttpPostRequest : IHttpRequestTask`
**Base:** `IHttpRequestTask`
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library.Http/HttpPostRequest.cs`

## Overview

`HttpPostRequest` lives in `TaleWorlds.Library.Http` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library.Http` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `State` | `public HttpRequestTaskState State { get; }` |
| `Successful` | `public bool Successful { get; }` |
| `ResponseData` | `public string ResponseData { get; }` |
| `Exception` | `public Exception Exception { get; }` |

## Key Methods

### Start
`public void Start()`

**Purpose:** **Purpose:** Starts the this instance's flow or state machine.

```csharp
// Obtain an instance of HttpPostRequest from the subsystem API first
HttpPostRequest httpPostRequest = ...;
httpPostRequest.Start();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
HttpPostRequest httpPostRequest = ...;
httpPostRequest.Start();
```

## See Also

- [Area Index](../)