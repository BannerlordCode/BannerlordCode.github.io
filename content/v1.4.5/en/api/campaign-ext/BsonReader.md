---
title: "BsonReader"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BsonReader`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BsonReader

**Namespace:** Newtonsoft.Json.Bson
**Module:** Newtonsoft.Json
**Type:** `class`
**Base:** none
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json.Bson/BsonReader.cs`

## Overview

`BsonReader` lives in `Newtonsoft.Json.Bson` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Newtonsoft.Json.Bson` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `JsonNet35BinaryCompatibility` | `public bool JsonNet35BinaryCompatibility { get; set; }` |
| `ReadRootValueAsArray` | `public bool ReadRootValueAsArray { get; set; }` |
| `DateTimeKindHandling` | `public DateTimeKind DateTimeKindHandling { get; set; }` |

## Key Methods

### Read
`public override bool Read()`

**Purpose:** Handles logic related to `read`.

### Close
`public override void Close()`

**Purpose:** Handles logic related to `close`.

## Usage Example

```csharp
var value = new BsonReader();
value.Read();
```

## See Also

- [Complete Class Catalog](../catalog)