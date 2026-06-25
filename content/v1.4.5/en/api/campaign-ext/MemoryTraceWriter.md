---
title: "MemoryTraceWriter"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MemoryTraceWriter`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MemoryTraceWriter

**Namespace:** Newtonsoft.Json.Serialization
**Module:** Newtonsoft.Json
**Type:** `public class MemoryTraceWriter : ITraceWriter`
**Base:** `ITraceWriter`
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json.Serialization/MemoryTraceWriter.cs`

## Overview

`MemoryTraceWriter` lives in `Newtonsoft.Json.Serialization` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Newtonsoft.Json.Serialization` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `LevelFilter` | `public TraceLevel LevelFilter { get; set; }` |

## Key Methods

### Trace
`public void Trace(TraceLevel level, string message, Exception? ex)`

**Purpose:** Handles logic related to `trace`.

### GetTraceMessages
`public IEnumerable<string> GetTraceMessages()`

**Purpose:** Gets the current value of `trace messages`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

## Usage Example

```csharp
var value = new MemoryTraceWriter();
value.Trace(level, "example", ex);
```

## See Also

- [Complete Class Catalog](../catalog)