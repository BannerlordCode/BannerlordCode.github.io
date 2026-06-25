---
title: "RestObjectResponseMessage"
description: "Auto-generated class reference for RestObjectResponseMessage."
---
# RestObjectResponseMessage

**Namespace:** TaleWorlds.Diamond.Rest
**Module:** TaleWorlds.Diamond
**Type:** `public class RestObjectResponseMessage : RestResponseMessage`
**Base:** `RestResponseMessage`
**File:** `bin/TaleWorlds.Diamond/TaleWorlds.Diamond.Rest/RestObjectResponseMessage.cs`

## Overview

`RestObjectResponseMessage` lives in `TaleWorlds.Diamond.Rest` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Diamond.Rest` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetMessage
`public override Message GetMessage()`

**Purpose:** Reads and returns the `message` value held by the current object.

```csharp
// Obtain an instance of RestObjectResponseMessage from the subsystem API first
RestObjectResponseMessage restObjectResponseMessage = ...;
var result = restObjectResponseMessage.GetMessage();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
RestObjectResponseMessage restObjectResponseMessage = ...;
restObjectResponseMessage.GetMessage();
```

## See Also

- [Area Index](../)