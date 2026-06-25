---
title: "RESTClient"
description: "Auto-generated class reference for RESTClient."
---
# RESTClient

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public class RESTClient`
**Base:** none
**File:** `TaleWorlds.Network/RESTClient.cs`

## Overview

`RESTClient` lives in `TaleWorlds.Network` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Network` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Get
`public Task Get(string service, List<KeyValuePair<string, string>> headers)`

**Purpose:** **Purpose:** Reads the this instance's value or state and returns it.

```csharp
// Obtain an instance of RESTClient from the subsystem API first
RESTClient rESTClient = ...;
var result = rESTClient.Get("example", list<KeyValuePair<string, "example");
```

### Post
`public Task Post(string service, List<KeyValuePair<string, string>> headers, string payLoad, string contentType = "application/json")`

**Purpose:** **Purpose:** Executes the Post logic.

```csharp
// Obtain an instance of RESTClient from the subsystem API first
RESTClient rESTClient = ...;
var result = rESTClient.Post("example", list<KeyValuePair<string, "example", "example", "example");
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
RESTClient rESTClient = ...;
rESTClient.Get("example", list<KeyValuePair<string, "example");
```

## See Also

- [Area Index](../)