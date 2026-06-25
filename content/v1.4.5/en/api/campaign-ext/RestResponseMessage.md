---
title: "RestResponseMessage"
description: "Auto-generated class reference for RestResponseMessage."
---
# RestResponseMessage

**Namespace:** TaleWorlds.Diamond.Rest
**Module:** TaleWorlds.Diamond
**Type:** `public abstract class RestResponseMessage : RestData`
**Base:** `RestData`
**File:** `bin/TaleWorlds.Diamond/TaleWorlds.Diamond.Rest/RestResponseMessage.cs`

## Overview

`RestResponseMessage` lives in `TaleWorlds.Diamond.Rest` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Diamond.Rest` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetMessage
`public abstract Message GetMessage()`

**Purpose:** Reads and returns the `message` value held by the current object.

```csharp
// Obtain an instance of RestResponseMessage from the subsystem API first
RestResponseMessage restResponseMessage = ...;
var result = restResponseMessage.GetMessage();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
RestResponseMessage instance = ...;
```

## See Also

- [Area Index](../)