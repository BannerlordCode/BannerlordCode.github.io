<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `JToken`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# JToken

**Namespace:** Newtonsoft.Json.Linq
**Module:** Newtonsoft.Json
**Type:** `public abstract class JToken : IJEnumerable<JToken>, IEnumerable<JToken>, IEnumerable, IJsonLineInfo, ICloneable, IDynamicMetaObjectProvider`
**Base:** `IJEnumerable<JToken>`
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json.Linq/JToken.cs`

## Overview

`JToken` lives in `Newtonsoft.Json.Linq` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Newtonsoft.Json.Linq` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `EqualityComparer` | `public static JTokenEqualityComparer EqualityComparer { get; }` |
| `Parent` | `public JContainer? Parent { get; set; }` |
| `Root` | `public JToken Root { get; }` |
| `Type` | `public abstract JTokenType Type { get; set; }` |
| `HasValues` | `public abstract bool HasValues { get; set; }` |
| `Next` | `public JToken? Next { get; set; }` |
| `Previous` | `public JToken? Previous { get; set; }` |
| `Path` | `public string Path { get; }` |
| `this` | `public virtual JToken? this { get; set; }` |
| `First` | `public virtual JToken? First { get; }` |
| `Last` | `public virtual JToken? Last { get; }` |

## Key Methods

### WriteToAsync
`public virtual Task WriteToAsync(JsonWriter writer, CancellationToken cancellationToken, params JsonConverter converters)`

**Purpose:** Handles logic related to `write to async`.

### WriteToAsync
`public Task WriteToAsync(JsonWriter writer, params JsonConverter converters)`

**Purpose:** Handles logic related to `write to async`.

### ReadFromAsync
`public static Task<JToken> ReadFromAsync(JsonReader reader, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `read from async`.

### ReadFromAsync
`public static async Task<JToken> ReadFromAsync(JsonReader reader, JsonLoadSettings? settings, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Handles logic related to `read from async`.

### LoadAsync
`public static Task<JToken> LoadAsync(JsonReader reader, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Loads `async` data.

### LoadAsync
`public static Task<JToken> LoadAsync(JsonReader reader, JsonLoadSettings? settings, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Loads `async` data.

### DeepEquals
`public static bool DeepEquals(JToken? t1, JToken? t2)`

**Purpose:** Handles logic related to `deep equals`.

### AddAfterSelf
`public void AddAfterSelf(object? content)`

**Purpose:** Adds `after self` to the current collection or state.

### AddBeforeSelf
`public void AddBeforeSelf(object? content)`

**Purpose:** Adds `before self` to the current collection or state.

### Ancestors
`public IEnumerable<JToken> Ancestors()`

**Purpose:** Handles logic related to `ancestors`.

### AncestorsAndSelf
`public IEnumerable<JToken> AncestorsAndSelf()`

**Purpose:** Handles logic related to `ancestors and self`.

### AfterSelf
`public IEnumerable<JToken> AfterSelf()`

**Purpose:** Handles logic related to `after self`.

### BeforeSelf
`public IEnumerable<JToken> BeforeSelf()`

**Purpose:** Handles logic related to `before self`.

### Children
`public virtual JEnumerable<JToken> Children()`

**Purpose:** Handles logic related to `children`.

### Remove
`public void Remove()`

**Purpose:** Removes `remove` from the current collection or state.

### Replace
`public void Replace(JToken value)`

**Purpose:** Handles logic related to `replace`.

### WriteTo
`public abstract void WriteTo(JsonWriter writer, params JsonConverter converters)`

**Purpose:** Handles logic related to `write to`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### ToString
`public string ToString(Formatting formatting, params JsonConverter converters)`

**Purpose:** Handles logic related to `to string`.

### bool
`public static explicit operator bool(JToken value)`

**Purpose:** Handles logic related to `bool`.

### DateTimeOffset
`public static explicit operator DateTimeOffset(JToken value)`

**Purpose:** Handles logic related to `date time offset`.

### long
`public static explicit operator long(JToken value)`

**Purpose:** Handles logic related to `long`.

### int
`public static explicit operator int(JToken value)`

**Purpose:** Handles logic related to `int`.

### short
`public static explicit operator short(JToken value)`

**Purpose:** Handles logic related to `short`.

### ushort
`public static explicit operator ushort(JToken value)`

**Purpose:** Handles logic related to `ushort`.

### char
`public static explicit operator char(JToken value)`

**Purpose:** Handles logic related to `char`.

### byte
`public static explicit operator byte(JToken value)`

**Purpose:** Handles logic related to `byte`.

### sbyte
`public static explicit operator sbyte(JToken value)`

**Purpose:** Handles logic related to `sbyte`.

### DateTime
`public static explicit operator DateTime(JToken value)`

**Purpose:** Handles logic related to `date time`.

### decimal
`public static explicit operator decimal(JToken value)`

**Purpose:** Handles logic related to `decimal`.

### double
`public static explicit operator double(JToken value)`

**Purpose:** Handles logic related to `double`.

### float
`public static explicit operator float(JToken value)`

**Purpose:** Handles logic related to `float`.

### uint
`public static explicit operator uint(JToken value)`

**Purpose:** Handles logic related to `uint`.

### ulong
`public static explicit operator ulong(JToken value)`

**Purpose:** Handles logic related to `ulong`.

### Guid
`public static explicit operator Guid(JToken value)`

**Purpose:** Handles logic related to `guid`.

### TimeSpan
`public static explicit operator TimeSpan(JToken value)`

**Purpose:** Handles logic related to `time span`.

### JToken
`public static implicit operator JToken(bool value)`

**Purpose:** Handles logic related to `j token`.

### JToken
`public static implicit operator JToken(DateTimeOffset value)`

**Purpose:** Handles logic related to `j token`.

### JToken
`public static implicit operator JToken(byte value)`

**Purpose:** Handles logic related to `j token`.

### JToken
`public static implicit operator JToken(byte? value)`

**Purpose:** Handles logic related to `j token`.

### JToken
`public static implicit operator JToken(sbyte value)`

**Purpose:** Handles logic related to `j token`.

### JToken
`public static implicit operator JToken(sbyte? value)`

**Purpose:** Handles logic related to `j token`.

### JToken
`public static implicit operator JToken(bool? value)`

**Purpose:** Handles logic related to `j token`.

### JToken
`public static implicit operator JToken(long value)`

**Purpose:** Handles logic related to `j token`.

### JToken
`public static implicit operator JToken(DateTime? value)`

**Purpose:** Handles logic related to `j token`.

### JToken
`public static implicit operator JToken(DateTimeOffset? value)`

**Purpose:** Handles logic related to `j token`.

### JToken
`public static implicit operator JToken(decimal? value)`

**Purpose:** Handles logic related to `j token`.

### JToken
`public static implicit operator JToken(double? value)`

**Purpose:** Handles logic related to `j token`.

### JToken
`public static implicit operator JToken(short value)`

**Purpose:** Handles logic related to `j token`.

### JToken
`public static implicit operator JToken(ushort value)`

**Purpose:** Handles logic related to `j token`.

### JToken
`public static implicit operator JToken(int value)`

**Purpose:** Handles logic related to `j token`.

### JToken
`public static implicit operator JToken(int? value)`

**Purpose:** Handles logic related to `j token`.

### JToken
`public static implicit operator JToken(DateTime value)`

**Purpose:** Handles logic related to `j token`.

### JToken
`public static implicit operator JToken(long? value)`

**Purpose:** Handles logic related to `j token`.

### JToken
`public static implicit operator JToken(float? value)`

**Purpose:** Handles logic related to `j token`.

### JToken
`public static implicit operator JToken(decimal value)`

**Purpose:** Handles logic related to `j token`.

### JToken
`public static implicit operator JToken(short? value)`

**Purpose:** Handles logic related to `j token`.

### JToken
`public static implicit operator JToken(ushort? value)`

**Purpose:** Handles logic related to `j token`.

### JToken
`public static implicit operator JToken(uint? value)`

**Purpose:** Handles logic related to `j token`.

### JToken
`public static implicit operator JToken(ulong? value)`

**Purpose:** Handles logic related to `j token`.

### JToken
`public static implicit operator JToken(double value)`

**Purpose:** Handles logic related to `j token`.

### JToken
`public static implicit operator JToken(float value)`

**Purpose:** Handles logic related to `j token`.

### JToken
`public static implicit operator JToken(string? value)`

**Purpose:** Handles logic related to `j token`.

### JToken
`public static implicit operator JToken(uint value)`

**Purpose:** Handles logic related to `j token`.

### JToken
`public static implicit operator JToken(ulong value)`

**Purpose:** Handles logic related to `j token`.

### JToken
`public static implicit operator JToken(byte value)`

**Purpose:** Handles logic related to `j token`.

### JToken
`public static implicit operator JToken(Uri? value)`

**Purpose:** Handles logic related to `j token`.

### JToken
`public static implicit operator JToken(TimeSpan value)`

**Purpose:** Handles logic related to `j token`.

### JToken
`public static implicit operator JToken(TimeSpan? value)`

**Purpose:** Handles logic related to `j token`.

### JToken
`public static implicit operator JToken(Guid value)`

**Purpose:** Handles logic related to `j token`.

### JToken
`public static implicit operator JToken(Guid? value)`

**Purpose:** Handles logic related to `j token`.

### CreateReader
`public JsonReader CreateReader()`

**Purpose:** Creates a new `reader` instance or object.

### FromObject
`public static JToken FromObject(object o)`

**Purpose:** Handles logic related to `from object`.

### FromObject
`public static JToken FromObject(object o, JsonSerializer jsonSerializer)`

**Purpose:** Handles logic related to `from object`.

### ToObject
`public object? ToObject(Type objectType)`

**Purpose:** Handles logic related to `to object`.

### ToObject
`public object? ToObject(Type objectType, JsonSerializer jsonSerializer)`

**Purpose:** Handles logic related to `to object`.

### ReadFrom
`public static JToken ReadFrom(JsonReader reader)`

**Purpose:** Handles logic related to `read from`.

### ReadFrom
`public static JToken ReadFrom(JsonReader reader, JsonLoadSettings? settings)`

**Purpose:** Handles logic related to `read from`.

### Parse
`public static JToken Parse(string json)`

**Purpose:** Handles logic related to `parse`.

### Parse
`public static JToken Parse(string json, JsonLoadSettings? settings)`

**Purpose:** Handles logic related to `parse`.

### Load
`public static JToken Load(JsonReader reader, JsonLoadSettings? settings)`

**Purpose:** Loads `load` data.

### Load
`public static JToken Load(JsonReader reader)`

**Purpose:** Loads `load` data.

### SelectToken
`public JToken? SelectToken(string path)`

**Purpose:** Handles logic related to `select token`.

### SelectToken
`public JToken? SelectToken(string path, bool errorWhenNoMatch)`

**Purpose:** Handles logic related to `select token`.

### SelectToken
`public JToken? SelectToken(string path, JsonSelectSettings? settings)`

**Purpose:** Handles logic related to `select token`.

### SelectTokens
`public IEnumerable<JToken> SelectTokens(string path)`

**Purpose:** Handles logic related to `select tokens`.

### SelectTokens
`public IEnumerable<JToken> SelectTokens(string path, bool errorWhenNoMatch)`

**Purpose:** Handles logic related to `select tokens`.

### SelectTokens
`public IEnumerable<JToken> SelectTokens(string path, JsonSelectSettings? settings)`

**Purpose:** Handles logic related to `select tokens`.

### DeepClone
`public JToken DeepClone()`

**Purpose:** Handles logic related to `deep clone`.

### AddAnnotation
`public void AddAnnotation(object annotation)`

**Purpose:** Adds `annotation` to the current collection or state.

### Annotation
`public object? Annotation(Type type)`

**Purpose:** Handles logic related to `annotation`.

### Annotations
`public IEnumerable<object> Annotations(Type type)`

**Purpose:** Handles logic related to `annotations`.

### RemoveAnnotations
`public void RemoveAnnotations(Type type)`

**Purpose:** Removes `annotations` from the current collection or state.

## Usage Example

```csharp
var implementation = new CustomJToken();
```

## See Also

- [Complete Class Catalog](../catalog)