<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `JValue`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# JValue

**Namespace:** Newtonsoft.Json.Linq
**Module:** Newtonsoft.Json
**Type:** `public class JValue : JToken, IEquatable<JValue>, IFormattable, IComparable, IComparable<JValue>, IConvertible`
**Base:** `JToken`
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json.Linq/JValue.cs`

## Overview

`JValue` lives in `Newtonsoft.Json.Linq` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Newtonsoft.Json.Linq` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Value` | `public new object? Value { get; set; }` |

## Key Methods

### TryConvert
`public override bool TryConvert(JValue instance, ConvertBinder binder, out object? result)`

**Purpose:** Attempts to get `convert`, usually returning the result in an out parameter.

### TryBinaryOperation
`public override bool TryBinaryOperation(JValue instance, BinaryOperationBinder binder, object arg, out object? result)`

**Purpose:** Attempts to get `binary operation`, usually returning the result in an out parameter.

### WriteToAsync
`public override Task WriteToAsync(JsonWriter writer, CancellationToken cancellationToken, params JsonConverter converters)`

**Purpose:** Handles logic related to `write to async`.

### CreateComment
`public static JValue CreateComment(string? value)`

**Purpose:** Creates a new `comment` instance or object.

### CreateString
`public static JValue CreateString(string? value)`

**Purpose:** Creates a new `string` instance or object.

### CreateNull
`public static JValue CreateNull()`

**Purpose:** Creates a new `null` instance or object.

### CreateUndefined
`public static JValue CreateUndefined()`

**Purpose:** Creates a new `undefined` instance or object.

### WriteTo
`public override void WriteTo(JsonWriter writer, params JsonConverter converters)`

**Purpose:** Handles logic related to `write to`.

### Equals
`public bool Equals(JValue? other)`

**Purpose:** Handles logic related to `equals`.

### Equals
`public override bool Equals(object obj)`

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### ToString
`public string ToString(string format)`

**Purpose:** Handles logic related to `to string`.

### ToString
`public string ToString(IFormatProvider formatProvider)`

**Purpose:** Handles logic related to `to string`.

### ToString
`public string ToString(string? format, IFormatProvider formatProvider)`

**Purpose:** Handles logic related to `to string`.

### CompareTo
`public int CompareTo(JValue obj)`

**Purpose:** Handles logic related to `compare to`.

## Usage Example

```csharp
var value = new JValue();
value.TryConvert(instance, binder, result);
```

## See Also

- [Complete Class Catalog](../catalog)