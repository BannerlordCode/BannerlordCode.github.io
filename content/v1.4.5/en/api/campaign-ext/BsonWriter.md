---
title: "BsonWriter"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BsonWriter`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BsonWriter

**Namespace:** Newtonsoft.Json.Bson
**Module:** Newtonsoft.Json
**Type:** `class`
**Base:** none
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json.Bson/BsonWriter.cs`

## Overview

`BsonWriter` lives in `Newtonsoft.Json.Bson` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Newtonsoft.Json.Bson` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### WriteValue
`public override void WriteValue(uint value)`

**Purpose:** Handles logic related to `write value`.

### WriteValue
`public override void WriteValue(long value)`

**Purpose:** Handles logic related to `write value`.

### WriteValue
`public override void WriteValue(ulong value)`

**Purpose:** Handles logic related to `write value`.

### WriteValue
`public override void WriteValue(float value)`

**Purpose:** Handles logic related to `write value`.

### WriteValue
`public override void WriteValue(double value)`

**Purpose:** Handles logic related to `write value`.

### WriteValue
`public override void WriteValue(bool value)`

**Purpose:** Handles logic related to `write value`.

### WriteValue
`public override void WriteValue(short value)`

**Purpose:** Handles logic related to `write value`.

### WriteValue
`public override void WriteValue(ushort value)`

**Purpose:** Handles logic related to `write value`.

### WriteValue
`public override void WriteValue(char value)`

**Purpose:** Handles logic related to `write value`.

### WriteValue
`public override void WriteValue(byte value)`

**Purpose:** Handles logic related to `write value`.

### WriteValue
`public override void WriteValue(sbyte value)`

**Purpose:** Handles logic related to `write value`.

### WriteValue
`public override void WriteValue(decimal value)`

**Purpose:** Handles logic related to `write value`.

### WriteValue
`public override void WriteValue(DateTime value)`

**Purpose:** Handles logic related to `write value`.

### WriteValue
`public override void WriteValue(DateTimeOffset value)`

**Purpose:** Handles logic related to `write value`.

### WriteValue
`public override void WriteValue(byte value)`

**Purpose:** Handles logic related to `write value`.

### WriteValue
`public override void WriteValue(Guid value)`

**Purpose:** Handles logic related to `write value`.

### WriteValue
`public override void WriteValue(TimeSpan value)`

**Purpose:** Handles logic related to `write value`.

### WriteValue
`public override void WriteValue(Uri value)`

**Purpose:** Handles logic related to `write value`.

### WriteObjectId
`public void WriteObjectId(byte value)`

**Purpose:** Handles logic related to `write object id`.

### WriteRegex
`public void WriteRegex(string pattern, string options)`

**Purpose:** Handles logic related to `write regex`.

## Usage Example

```csharp
var value = new BsonWriter();
value.WriteValue(0);
```

## See Also

- [Complete Class Catalog](../catalog)