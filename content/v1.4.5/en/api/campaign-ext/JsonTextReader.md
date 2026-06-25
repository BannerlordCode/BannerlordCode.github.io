---
title: "JsonTextReader"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `JsonTextReader`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# JsonTextReader

**Namespace:** Newtonsoft.Json
**Module:** Newtonsoft.Json
**Type:** `public class JsonTextReader : JsonReader, IJsonLineInfo`
**Base:** `JsonReader`
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json/JsonTextReader.cs`

## Overview

`JsonTextReader` lives in `Newtonsoft.Json` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Newtonsoft.Json` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PropertyNameTable` | `public JsonNameTable? PropertyNameTable { get; set; }` |
| `ArrayPool` | `public IArrayPool<char>? ArrayPool { get; set; }` |
| `LineNumber` | `public int LineNumber { get; }` |

## Key Methods

### ReadAsync
`public override Task<bool> ReadAsync(CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `read async`.

### ReadAsBooleanAsync
`public override Task<bool?> ReadAsBooleanAsync(CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `read as boolean async`.

### ReadAsBytesAsync
`public override Task<byte ?> ReadAsBytesAsync(CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `read as bytes async`.

### ReadAsDateTimeAsync
`public override Task<DateTime?> ReadAsDateTimeAsync(CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `read as date time async`.

### ReadAsDateTimeOffsetAsync
`public override Task<DateTimeOffset?> ReadAsDateTimeOffsetAsync(CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `read as date time offset async`.

### ReadAsDecimalAsync
`public override Task<decimal?> ReadAsDecimalAsync(CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `read as decimal async`.

### ReadAsDoubleAsync
`public override Task<double?> ReadAsDoubleAsync(CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `read as double async`.

### ReadAsInt32Async
`public override Task<int?> ReadAsInt32Async(CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `read as int32 async`.

### ReadAsStringAsync
`public override Task<string?> ReadAsStringAsync(CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `read as string async`.

### Read
`public override bool Read()`

**Purpose:** Handles logic related to `read`.

### ReadAsInt32
`public override int? ReadAsInt32()`

**Purpose:** Handles logic related to `read as int32`.

### ReadAsDateTime
`public override DateTime? ReadAsDateTime()`

**Purpose:** Handles logic related to `read as date time`.

### ReadAsString
`public override string? ReadAsString()`

**Purpose:** Handles logic related to `read as string`.

### ReadAsBytes
`public override byte ? ReadAsBytes()`

**Purpose:** Handles logic related to `read as bytes`.

### ReadAsBoolean
`public override bool? ReadAsBoolean()`

**Purpose:** Handles logic related to `read as boolean`.

### ReadAsDateTimeOffset
`public override DateTimeOffset? ReadAsDateTimeOffset()`

**Purpose:** Handles logic related to `read as date time offset`.

### ReadAsDecimal
`public override decimal? ReadAsDecimal()`

**Purpose:** Handles logic related to `read as decimal`.

### ReadAsDouble
`public override double? ReadAsDouble()`

**Purpose:** Handles logic related to `read as double`.

### Close
`public override void Close()`

**Purpose:** Handles logic related to `close`.

### HasLineInfo
`public bool HasLineInfo()`

**Purpose:** Checks whether the current object has/contains `line info`.

## Usage Example

```csharp
var value = new JsonTextReader();
value.ReadAsync(default(CancellationToken));
```

## See Also

- [Complete Class Catalog](../catalog)