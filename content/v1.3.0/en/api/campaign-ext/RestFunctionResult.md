---
title: "RestFunctionResult"
description: "Auto-generated class reference for RestFunctionResult."
---
# RestFunctionResult

**Namespace:** TaleWorlds.Diamond.Rest
**Module:** TaleWorlds.Diamond
**Type:** `public abstract class RestFunctionResult : RestData`
**Base:** `RestData`
**File:** `TaleWorlds.Diamond/Rest/RestFunctionResult.cs`

## Overview

`RestFunctionResult` lives in `TaleWorlds.Diamond.Rest` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Diamond.Rest` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetFunctionResult
`public abstract FunctionResult GetFunctionResult()`

**Purpose:** **Purpose:** Reads and returns the function result value held by the this instance.

```csharp
// Obtain an instance of RestFunctionResult from the subsystem API first
RestFunctionResult restFunctionResult = ...;
var result = restFunctionResult.GetFunctionResult();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
RestFunctionResult instance = ...;
```

## See Also

- [Area Index](../)