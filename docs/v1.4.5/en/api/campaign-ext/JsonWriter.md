<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `JsonWriter`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# JsonWriter

**Namespace:** Newtonsoft.Json
**Module:** Newtonsoft.Json
**Type:** `public abstract class JsonWriter : IDisposable`
**Base:** `IDisposable`
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json/JsonWriter.cs`

## Overview

`JsonWriter` lives in `Newtonsoft.Json` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Newtonsoft.Json` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CloseOutput` | `public bool CloseOutput { get; set; }` |
| `AutoCompleteOnClose` | `public bool AutoCompleteOnClose { get; set; }` |
| `WriteState` | `public WriteState WriteState { get; }` |
| `Path` | `public string Path { get; }` |
| `Formatting` | `public Formatting Formatting { get; set; }` |
| `DateFormatHandling` | `public DateFormatHandling DateFormatHandling { get; set; }` |
| `DateTimeZoneHandling` | `public DateTimeZoneHandling DateTimeZoneHandling { get; set; }` |
| `StringEscapeHandling` | `public StringEscapeHandling StringEscapeHandling { get; set; }` |
| `FloatFormatHandling` | `public FloatFormatHandling FloatFormatHandling { get; set; }` |
| `DateFormatString` | `public string? DateFormatString { get; set; }` |
| `Culture` | `public CultureInfo Culture { get; set; }` |

## Key Methods

### CloseAsync
`public virtual Task CloseAsync(CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `close async`.

### FlushAsync
`public virtual Task FlushAsync(CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `flush async`.

### WriteRawAsync
`public virtual Task WriteRawAsync(string? json, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write raw async`.

### WriteEndAsync
`public virtual Task WriteEndAsync(CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write end async`.

### WriteEndArrayAsync
`public virtual Task WriteEndArrayAsync(CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write end array async`.

### WriteEndConstructorAsync
`public virtual Task WriteEndConstructorAsync(CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write end constructor async`.

### WriteEndObjectAsync
`public virtual Task WriteEndObjectAsync(CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write end object async`.

### WriteNullAsync
`public virtual Task WriteNullAsync(CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write null async`.

### WritePropertyNameAsync
`public virtual Task WritePropertyNameAsync(string name, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write property name async`.

### WritePropertyNameAsync
`public virtual Task WritePropertyNameAsync(string name, bool escape, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write property name async`.

### WriteStartArrayAsync
`public virtual Task WriteStartArrayAsync(CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write start array async`.

### WriteCommentAsync
`public virtual Task WriteCommentAsync(string? text, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write comment async`.

### WriteRawValueAsync
`public virtual Task WriteRawValueAsync(string? json, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write raw value async`.

### WriteStartConstructorAsync
`public virtual Task WriteStartConstructorAsync(string name, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write start constructor async`.

### WriteStartObjectAsync
`public virtual Task WriteStartObjectAsync(CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write start object async`.

### WriteTokenAsync
`public Task WriteTokenAsync(JsonReader reader, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write token async`.

### WriteTokenAsync
`public Task WriteTokenAsync(JsonReader reader, bool writeChildren, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write token async`.

### WriteTokenAsync
`public Task WriteTokenAsync(JsonToken token, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write token async`.

### WriteTokenAsync
`public Task WriteTokenAsync(JsonToken token, object? value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write token async`.

### WriteValueAsync
`public virtual Task WriteValueAsync(bool value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteValueAsync
`public virtual Task WriteValueAsync(bool? value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteValueAsync
`public virtual Task WriteValueAsync(byte value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteValueAsync
`public virtual Task WriteValueAsync(byte? value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteValueAsync
`public virtual Task WriteValueAsync(byte ? value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteValueAsync
`public virtual Task WriteValueAsync(char value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteValueAsync
`public virtual Task WriteValueAsync(char? value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteValueAsync
`public virtual Task WriteValueAsync(DateTime value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteValueAsync
`public virtual Task WriteValueAsync(DateTime? value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteValueAsync
`public virtual Task WriteValueAsync(DateTimeOffset value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteValueAsync
`public virtual Task WriteValueAsync(DateTimeOffset? value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteValueAsync
`public virtual Task WriteValueAsync(decimal value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteValueAsync
`public virtual Task WriteValueAsync(decimal? value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteValueAsync
`public virtual Task WriteValueAsync(double value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteValueAsync
`public virtual Task WriteValueAsync(double? value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteValueAsync
`public virtual Task WriteValueAsync(float value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteValueAsync
`public virtual Task WriteValueAsync(float? value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteValueAsync
`public virtual Task WriteValueAsync(Guid value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteValueAsync
`public virtual Task WriteValueAsync(Guid? value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteValueAsync
`public virtual Task WriteValueAsync(int value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteValueAsync
`public virtual Task WriteValueAsync(int? value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteValueAsync
`public virtual Task WriteValueAsync(long value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteValueAsync
`public virtual Task WriteValueAsync(long? value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteValueAsync
`public virtual Task WriteValueAsync(object? value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteValueAsync
`public virtual Task WriteValueAsync(sbyte value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteValueAsync
`public virtual Task WriteValueAsync(sbyte? value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteValueAsync
`public virtual Task WriteValueAsync(short value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteValueAsync
`public virtual Task WriteValueAsync(short? value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteValueAsync
`public virtual Task WriteValueAsync(string? value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteValueAsync
`public virtual Task WriteValueAsync(TimeSpan value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteValueAsync
`public virtual Task WriteValueAsync(TimeSpan? value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteValueAsync
`public virtual Task WriteValueAsync(uint value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteValueAsync
`public virtual Task WriteValueAsync(uint? value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteValueAsync
`public virtual Task WriteValueAsync(ulong value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteValueAsync
`public virtual Task WriteValueAsync(ulong? value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteValueAsync
`public virtual Task WriteValueAsync(Uri? value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteValueAsync
`public virtual Task WriteValueAsync(ushort value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteValueAsync
`public virtual Task WriteValueAsync(ushort? value, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write value async`.

### WriteUndefinedAsync
`public virtual Task WriteUndefinedAsync(CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write undefined async`.

### WriteWhitespaceAsync
`public virtual Task WriteWhitespaceAsync(string ws, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `write whitespace async`.

### Flush
`public abstract void Flush()`

**Purpose:** Handles logic related to `flush`.

### Close
`public virtual void Close()`

**Purpose:** Handles logic related to `close`.

### WriteStartObject
`public virtual void WriteStartObject()`

**Purpose:** Handles logic related to `write start object`.

### WriteEndObject
`public virtual void WriteEndObject()`

**Purpose:** Handles logic related to `write end object`.

### WriteStartArray
`public virtual void WriteStartArray()`

**Purpose:** Handles logic related to `write start array`.

### WriteEndArray
`public virtual void WriteEndArray()`

**Purpose:** Handles logic related to `write end array`.

### WriteStartConstructor
`public virtual void WriteStartConstructor(string name)`

**Purpose:** Handles logic related to `write start constructor`.

### WriteEndConstructor
`public virtual void WriteEndConstructor()`

**Purpose:** Handles logic related to `write end constructor`.

### WritePropertyName
`public virtual void WritePropertyName(string name)`

**Purpose:** Handles logic related to `write property name`.

### WritePropertyName
`public virtual void WritePropertyName(string name, bool escape)`

**Purpose:** Handles logic related to `write property name`.

### WriteEnd
`public virtual void WriteEnd()`

**Purpose:** Handles logic related to `write end`.

### WriteToken
`public void WriteToken(JsonReader reader)`

**Purpose:** Handles logic related to `write token`.

### WriteToken
`public void WriteToken(JsonReader reader, bool writeChildren)`

**Purpose:** Handles logic related to `write token`.

### WriteToken
`public void WriteToken(JsonToken token, object? value)`

**Purpose:** Handles logic related to `write token`.

### WriteToken
`public void WriteToken(JsonToken token)`

**Purpose:** Handles logic related to `write token`.

### WriteNull
`public virtual void WriteNull()`

**Purpose:** Handles logic related to `write null`.

### WriteUndefined
`public virtual void WriteUndefined()`

**Purpose:** Handles logic related to `write undefined`.

### WriteRaw
`public virtual void WriteRaw(string? json)`

**Purpose:** Handles logic related to `write raw`.

### WriteRawValue
`public virtual void WriteRawValue(string? json)`

**Purpose:** Handles logic related to `write raw value`.

### WriteValue
`public virtual void WriteValue(string? value)`

**Purpose:** Handles logic related to `write value`.

### WriteValue
`public virtual void WriteValue(int value)`

**Purpose:** Handles logic related to `write value`.

### WriteValue
`public virtual void WriteValue(uint value)`

**Purpose:** Handles logic related to `write value`.

### WriteValue
`public virtual void WriteValue(long value)`

**Purpose:** Handles logic related to `write value`.

### WriteValue
`public virtual void WriteValue(ulong value)`

**Purpose:** Handles logic related to `write value`.

### WriteValue
`public virtual void WriteValue(float value)`

**Purpose:** Handles logic related to `write value`.

### WriteValue
`public virtual void WriteValue(double value)`

**Purpose:** Handles logic related to `write value`.

### WriteValue
`public virtual void WriteValue(bool value)`

**Purpose:** Handles logic related to `write value`.

### WriteValue
`public virtual void WriteValue(short value)`

**Purpose:** Handles logic related to `write value`.

### WriteValue
`public virtual void WriteValue(ushort value)`

**Purpose:** Handles logic related to `write value`.

### WriteValue
`public virtual void WriteValue(char value)`

**Purpose:** Handles logic related to `write value`.

### WriteValue
`public virtual void WriteValue(byte value)`

**Purpose:** Handles logic related to `write value`.

### WriteValue
`public virtual void WriteValue(sbyte value)`

**Purpose:** Handles logic related to `write value`.

### WriteValue
`public virtual void WriteValue(decimal value)`

**Purpose:** Handles logic related to `write value`.

### WriteValue
`public virtual void WriteValue(DateTime value)`

**Purpose:** Handles logic related to `write value`.

### WriteValue
`public virtual void WriteValue(DateTimeOffset value)`

**Purpose:** Handles logic related to `write value`.

### WriteValue
`public virtual void WriteValue(Guid value)`

**Purpose:** Handles logic related to `write value`.

### WriteValue
`public virtual void WriteValue(TimeSpan value)`

**Purpose:** Handles logic related to `write value`.

### WriteValue
`public virtual void WriteValue(int? value)`

**Purpose:** Handles logic related to `write value`.

### WriteValue
`public virtual void WriteValue(uint? value)`

**Purpose:** Handles logic related to `write value`.

### WriteValue
`public virtual void WriteValue(long? value)`

**Purpose:** Handles logic related to `write value`.

### WriteValue
`public virtual void WriteValue(ulong? value)`

**Purpose:** Handles logic related to `write value`.

### WriteValue
`public virtual void WriteValue(float? value)`

**Purpose:** Handles logic related to `write value`.

### WriteValue
`public virtual void WriteValue(double? value)`

**Purpose:** Handles logic related to `write value`.

### WriteValue
`public virtual void WriteValue(bool? value)`

**Purpose:** Handles logic related to `write value`.

### WriteValue
`public virtual void WriteValue(short? value)`

**Purpose:** Handles logic related to `write value`.

### WriteValue
`public virtual void WriteValue(ushort? value)`

**Purpose:** Handles logic related to `write value`.

### WriteValue
`public virtual void WriteValue(char? value)`

**Purpose:** Handles logic related to `write value`.

### WriteValue
`public virtual void WriteValue(byte? value)`

**Purpose:** Handles logic related to `write value`.

### WriteValue
`public virtual void WriteValue(sbyte? value)`

**Purpose:** Handles logic related to `write value`.

### WriteValue
`public virtual void WriteValue(decimal? value)`

**Purpose:** Handles logic related to `write value`.

### WriteValue
`public virtual void WriteValue(DateTime? value)`

**Purpose:** Handles logic related to `write value`.

### WriteValue
`public virtual void WriteValue(DateTimeOffset? value)`

**Purpose:** Handles logic related to `write value`.

### WriteValue
`public virtual void WriteValue(Guid? value)`

**Purpose:** Handles logic related to `write value`.

### WriteValue
`public virtual void WriteValue(TimeSpan? value)`

**Purpose:** Handles logic related to `write value`.

### WriteValue
`public virtual void WriteValue(byte ? value)`

**Purpose:** Handles logic related to `write value`.

### WriteValue
`public virtual void WriteValue(Uri? value)`

**Purpose:** Handles logic related to `write value`.

### WriteValue
`public virtual void WriteValue(object? value)`

**Purpose:** Handles logic related to `write value`.

### WriteComment
`public virtual void WriteComment(string? text)`

**Purpose:** Handles logic related to `write comment`.

### WriteWhitespace
`public virtual void WriteWhitespace(string ws)`

**Purpose:** Handles logic related to `write whitespace`.

## Usage Example

```csharp
var implementation = new CustomJsonWriter();
```

## See Also

- [Complete Class Catalog](../catalog)