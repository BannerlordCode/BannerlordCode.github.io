---
title: "JsonReader"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `JsonReader`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# JsonReader

**Namespace:** Newtonsoft.Json
**Module:** Newtonsoft.Json
**Type:** `public abstract class JsonReader : IDisposable`
**Base:** `IDisposable`
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json/JsonReader.cs`

## Overview

`JsonReader` lives in `Newtonsoft.Json` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Newtonsoft.Json` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CloseInput` | `public bool CloseInput { get; set; }` |
| `SupportMultipleContent` | `public bool SupportMultipleContent { get; set; }` |
| `QuoteChar` | `public virtual char QuoteChar { get; set; }` |
| `DateTimeZoneHandling` | `public DateTimeZoneHandling DateTimeZoneHandling { get; set; }` |
| `DateParseHandling` | `public DateParseHandling DateParseHandling { get; set; }` |
| `FloatParseHandling` | `public FloatParseHandling FloatParseHandling { get; set; }` |
| `DateFormatString` | `public string? DateFormatString { get; set; }` |
| `MaxDepth` | `public int? MaxDepth { get; set; }` |
| `Depth` | `public virtual int Depth { get; }` |
| `Path` | `public virtual string Path { get; }` |
| `Culture` | `public CultureInfo Culture { get; set; }` |

## Key Methods

### ReadAsync
`public virtual Task<bool> ReadAsync(CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `read async`.

### SkipAsync
`public async Task SkipAsync(CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `skip async`.

### ReadAsBooleanAsync
`public virtual Task<bool?> ReadAsBooleanAsync(CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `read as boolean async`.

### ReadAsBytesAsync
`public virtual Task<byte ?> ReadAsBytesAsync(CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `read as bytes async`.

### ReadAsDateTimeAsync
`public virtual Task<DateTime?> ReadAsDateTimeAsync(CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `read as date time async`.

### ReadAsDateTimeOffsetAsync
`public virtual Task<DateTimeOffset?> ReadAsDateTimeOffsetAsync(CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `read as date time offset async`.

### ReadAsDecimalAsync
`public virtual Task<decimal?> ReadAsDecimalAsync(CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `read as decimal async`.

### ReadAsDoubleAsync
`public virtual Task<double?> ReadAsDoubleAsync(CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `read as double async`.

### ReadAsInt32Async
`public virtual Task<int?> ReadAsInt32Async(CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `read as int32 async`.

### ReadAsStringAsync
`public virtual Task<string?> ReadAsStringAsync(CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `read as string async`.

### Read
`public abstract bool Read()`

**Purpose:** Handles logic related to `read`.

### ReadAsInt32
`public virtual int? ReadAsInt32()`

**Purpose:** Handles logic related to `read as int32`.

### ReadAsString
`public virtual string? ReadAsString()`

**Purpose:** Handles logic related to `read as string`.

### ReadAsBytes
`public virtual byte ? ReadAsBytes()`

**Purpose:** Handles logic related to `read as bytes`.

### ReadAsDouble
`public virtual double? ReadAsDouble()`

**Purpose:** Handles logic related to `read as double`.

### ReadAsBoolean
`public virtual bool? ReadAsBoolean()`

**Purpose:** Handles logic related to `read as boolean`.

### ReadAsDecimal
`public virtual decimal? ReadAsDecimal()`

**Purpose:** Handles logic related to `read as decimal`.

### ReadAsDateTime
`public virtual DateTime? ReadAsDateTime()`

**Purpose:** Handles logic related to `read as date time`.

### ReadAsDateTimeOffset
`public virtual DateTimeOffset? ReadAsDateTimeOffset()`

**Purpose:** Handles logic related to `read as date time offset`.

### Skip
`public void Skip()`

**Purpose:** Handles logic related to `skip`.

### Close
`public virtual void Close()`

**Purpose:** Handles logic related to `close`.

## Usage Example

```csharp
var implementation = new CustomJsonReader();
```

## See Also

- [Complete Class Catalog](../catalog)