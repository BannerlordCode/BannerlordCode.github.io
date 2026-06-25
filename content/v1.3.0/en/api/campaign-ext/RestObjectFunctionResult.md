---
title: "RestObjectFunctionResult"
description: "Auto-generated class reference for RestObjectFunctionResult."
---
# RestObjectFunctionResult

**Namespace:** TaleWorlds.Diamond.Rest
**Module:** TaleWorlds.Diamond
**Type:** `public class RestObjectFunctionResult : RestFunctionResult`
**Base:** `RestFunctionResult`
**File:** `TaleWorlds.Diamond/Rest/RestObjectFunctionResult.cs`

## Overview

`RestObjectFunctionResult` lives in `TaleWorlds.Diamond.Rest` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Diamond.Rest` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetFunctionResult
`public override FunctionResult GetFunctionResult()`

**Purpose:** Reads and returns the function result value held by the this instance.

```csharp
// Obtain an instance of RestObjectFunctionResult from the subsystem API first
RestObjectFunctionResult restObjectFunctionResult = ...;
var result = restObjectFunctionResult.GetFunctionResult();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
RestObjectFunctionResult restObjectFunctionResult = ...;
restObjectFunctionResult.GetFunctionResult();
```

## See Also

- [Area Index](../)