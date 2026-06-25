---
title: "JsonValidatingReader"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `JsonValidatingReader`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# JsonValidatingReader

**Namespace:** Newtonsoft.Json
**Module:** Newtonsoft.Json
**Type:** `class`
**Base:** none
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json/JsonValidatingReader.cs`

## Overview

`JsonValidatingReader` lives in `Newtonsoft.Json` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Newtonsoft.Json` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Schema` | `public JsonSchema Schema { get; set; }` |

## Key Methods

### Close
`public override void Close()`

**Purpose:** Handles logic related to `close`.

### ReadAsInt32
`public override int? ReadAsInt32()`

**Purpose:** Handles logic related to `read as int32`.

### ReadAsBytes
`public override byte ReadAsBytes()`

**Purpose:** Handles logic related to `read as bytes`.

### ReadAsDecimal
`public override decimal? ReadAsDecimal()`

**Purpose:** Handles logic related to `read as decimal`.

### ReadAsDouble
`public override double? ReadAsDouble()`

**Purpose:** Handles logic related to `read as double`.

### ReadAsBoolean
`public override bool? ReadAsBoolean()`

**Purpose:** Handles logic related to `read as boolean`.

### ReadAsString
`public override string ReadAsString()`

**Purpose:** Handles logic related to `read as string`.

### ReadAsDateTime
`public override DateTime? ReadAsDateTime()`

**Purpose:** Handles logic related to `read as date time`.

### ReadAsDateTimeOffset
`public override DateTimeOffset? ReadAsDateTimeOffset()`

**Purpose:** Handles logic related to `read as date time offset`.

### Read
`public override bool Read()`

**Purpose:** Handles logic related to `read`.

## Usage Example

```csharp
var value = new JsonValidatingReader();
value.Close();
```

## See Also

- [Complete Class Catalog](../catalog)