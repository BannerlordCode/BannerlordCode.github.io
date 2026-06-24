<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `JTokenWriter`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# JTokenWriter

**Namespace:** Newtonsoft.Json.Linq
**Module:** Newtonsoft.Json
**Type:** `public class JTokenWriter : JsonWriter`
**Base:** `JsonWriter`
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json.Linq/JTokenWriter.cs`

## Overview

`JTokenWriter` lives in `Newtonsoft.Json.Linq` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Newtonsoft.Json.Linq` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Token` | `public JToken? Token { get; }` |

## Key Methods

### Flush
`public override void Flush()`

**Purpose:** Handles logic related to `flush`.

### Close
`public override void Close()`

**Purpose:** Handles logic related to `close`.

### WriteStartObject
`public override void WriteStartObject()`

**Purpose:** Handles logic related to `write start object`.

### WriteStartArray
`public override void WriteStartArray()`

**Purpose:** Handles logic related to `write start array`.

### WriteStartConstructor
`public override void WriteStartConstructor(string name)`

**Purpose:** Handles logic related to `write start constructor`.

### WritePropertyName
`public override void WritePropertyName(string name)`

**Purpose:** Handles logic related to `write property name`.

### WriteValue
`public override void WriteValue(object? value)`

**Purpose:** Handles logic related to `write value`.

### WriteNull
`public override void WriteNull()`

**Purpose:** Handles logic related to `write null`.

### WriteUndefined
`public override void WriteUndefined()`

**Purpose:** Handles logic related to `write undefined`.

### WriteRaw
`public override void WriteRaw(string? json)`

**Purpose:** Handles logic related to `write raw`.

### WriteComment
`public override void WriteComment(string? text)`

**Purpose:** Handles logic related to `write comment`.

### WriteValue
`public override void WriteValue(string? value)`

**Purpose:** Handles logic related to `write value`.

### WriteValue
`public override void WriteValue(int value)`

**Purpose:** Handles logic related to `write value`.

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
`public override void WriteValue(byte ? value)`

**Purpose:** Handles logic related to `write value`.

### WriteValue
`public override void WriteValue(TimeSpan value)`

**Purpose:** Handles logic related to `write value`.

### WriteValue
`public override void WriteValue(Guid value)`

**Purpose:** Handles logic related to `write value`.

### WriteValue
`public override void WriteValue(Uri? value)`

**Purpose:** Handles logic related to `write value`.

## Usage Example

```csharp
var value = new JTokenWriter();
value.Flush();
```

## See Also

- [Complete Class Catalog](../catalog)