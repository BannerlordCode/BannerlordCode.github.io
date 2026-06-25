---
title: "JsonTextWriter"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `JsonTextWriter`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# JsonTextWriter

**Namespace:** Newtonsoft.Json
**Module:** Newtonsoft.Json
**Type:** `public class JsonTextWriter : JsonWriter`
**Base:** `JsonWriter`
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json/JsonTextWriter.cs`

## Overview

`JsonTextWriter` lives in `Newtonsoft.Json` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Newtonsoft.Json` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ArrayPool` | `public IArrayPool<char>? ArrayPool { get; set; }` |
| `Indentation` | `public int Indentation { get; set; }` |
| `QuoteChar` | `public char QuoteChar { get; set; }` |
| `IndentChar` | `public char IndentChar { get; set; }` |
| `QuoteName` | `public bool QuoteName { get; set; }` |

## Key Methods

### FlushAsync
`public override Task FlushAsync(CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `flush async`.

### CloseAsync
`public override Task CloseAsync(CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `close async`.

### WriteEndAsync
`public override Task WriteEndAsync(CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write end async`.

### WriteRawAsync
`public override Task WriteRawAsync(string? json, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write raw async`.

### WriteNullAsync
`public override Task WriteNullAsync(CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write null async`.

### WritePropertyNameAsync
`public override Task WritePropertyNameAsync(string name, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write property name async`.

### WritePropertyNameAsync
`public override Task WritePropertyNameAsync(string name, bool escape, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write property name async`.

### WriteStartArrayAsync
`public override Task WriteStartArrayAsync(CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write start array async`.

### WriteValueAsync
`public override Task WriteValueAsync(char value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteValueAsync
`public override Task WriteValueAsync(char? value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteValueAsync
`public override Task WriteValueAsync(DateTime value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteValueAsync
`public override Task WriteValueAsync(DateTime? value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteValueAsync
`public override Task WriteValueAsync(DateTimeOffset value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteValueAsync
`public override Task WriteValueAsync(DateTimeOffset? value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteValueAsync
`public override Task WriteValueAsync(decimal value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteValueAsync
`public override Task WriteValueAsync(decimal? value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteValueAsync
`public override Task WriteValueAsync(double value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteValueAsync
`public override Task WriteValueAsync(double? value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteValueAsync
`public override Task WriteValueAsync(float value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteValueAsync
`public override Task WriteValueAsync(float? value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteValueAsync
`public override Task WriteValueAsync(Guid value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteValueAsync
`public override Task WriteValueAsync(Guid? value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteValueAsync
`public override Task WriteValueAsync(int value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteValueAsync
`public override Task WriteValueAsync(int? value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteValueAsync
`public override Task WriteValueAsync(long value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteValueAsync
`public override Task WriteValueAsync(long? value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteValueAsync
`public override Task WriteValueAsync(object? value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteValueAsync
`public override Task WriteValueAsync(sbyte value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteValueAsync
`public override Task WriteValueAsync(sbyte? value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteValueAsync
`public override Task WriteValueAsync(short value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteValueAsync
`public override Task WriteValueAsync(short? value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteValueAsync
`public override Task WriteValueAsync(string? value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteValueAsync
`public override Task WriteValueAsync(TimeSpan value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteValueAsync
`public override Task WriteValueAsync(TimeSpan? value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteValueAsync
`public override Task WriteValueAsync(uint value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteValueAsync
`public override Task WriteValueAsync(uint? value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteValueAsync
`public override Task WriteValueAsync(ulong value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteValueAsync
`public override Task WriteValueAsync(ulong? value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteValueAsync
`public override Task WriteValueAsync(Uri? value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteValueAsync
`public override Task WriteValueAsync(ushort value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteValueAsync
`public override Task WriteValueAsync(ushort? value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteCommentAsync
`public override Task WriteCommentAsync(string? text, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write comment async`.

### WriteEndArrayAsync
`public override Task WriteEndArrayAsync(CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write end array async`.

### WriteEndConstructorAsync
`public override Task WriteEndConstructorAsync(CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write end constructor async`.

### WriteEndObjectAsync
`public override Task WriteEndObjectAsync(CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write end object async`.

### WriteRawValueAsync
`public override Task WriteRawValueAsync(string? json, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write raw value async`.

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

### WritePropertyName
`public override void WritePropertyName(string name)`

**Purpose:** Handles logic related to `write property name`.

### WritePropertyName
`public override void WritePropertyName(string name, bool escape)`

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
`public override void WriteValue(float? value)`

**Purpose:** Handles logic related to `write value`.

### WriteValue
`public override void WriteValue(double value)`

**Purpose:** Handles logic related to `write value`.

### WriteValue
`public override void WriteValue(double? value)`

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
`public override void WriteValue(byte ? value)`

**Purpose:** Handles logic related to `write value`.

### WriteValue
`public override void WriteValue(DateTimeOffset value)`

**Purpose:** Handles logic related to `write value`.

### WriteValue
`public override void WriteValue(Guid value)`

**Purpose:** Handles logic related to `write value`.

### WriteValue
`public override void WriteValue(TimeSpan value)`

**Purpose:** Handles logic related to `write value`.

### WriteValue
`public override void WriteValue(Uri? value)`

**Purpose:** Handles logic related to `write value`.

### WriteComment
`public override void WriteComment(string? text)`

**Purpose:** Handles logic related to `write comment`.

### WriteWhitespace
`public override void WriteWhitespace(string ws)`

**Purpose:** Handles logic related to `write whitespace`.

## Usage Example

```csharp
var value = new JsonTextWriter();
value.FlushAsync(default(CancellationToken));
```

## See Also

- [Complete Class Catalog](../catalog)