<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `JObject`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# JObject

**Namespace:** Newtonsoft.Json.Linq
**Module:** Newtonsoft.Json
**Type:** `public class JObject : JContainer, IDictionary<string, JToken?>, ICollection<KeyValuePair<string, JToken?>>, IEnumerable<KeyValuePair<string, JToken?>>, IEnumerable, INotifyPropertyChanged, ICustomTypeDescriptor, INotifyPropertyChanging`
**Base:** `JContainer`
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json.Linq/JObject.cs`

## Overview

`JObject` lives in `Newtonsoft.Json.Linq` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Newtonsoft.Json.Linq` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `this` | `public override JToken? this { get; }` |
| `this` | `public JToken? this { get; set; }` |

## Key Methods

### TryGetMember
`public override bool TryGetMember(JObject instance, GetMemberBinder binder, out object? result)`

**Purpose:** Attempts to get `get member`, usually returning the result in an out parameter.

### TrySetMember
`public override bool TrySetMember(JObject instance, SetMemberBinder binder, object value)`

**Purpose:** Attempts to get `set member`, usually returning the result in an out parameter.

### GetDynamicMemberNames
`public override IEnumerable<string> GetDynamicMemberNames(JObject instance)`

**Purpose:** Gets the current value of `dynamic member names`.

### WriteToAsync
`public override Task WriteToAsync(JsonWriter writer, CancellationToken cancellationToken, params JsonConverter converters)`

**Purpose:** Handles logic related to `write to async`.

### LoadAsync
`public new static Task<JObject> LoadAsync(JsonReader reader, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Loads `async` data.

### LoadAsync
`public new static async Task<JObject> LoadAsync(JsonReader reader, JsonLoadSettings? settings, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Loads `async` data.

### Properties
`public IEnumerable<JProperty> Properties()`

**Purpose:** Handles logic related to `properties`.

### Property
`public JProperty? Property(string name)`

**Purpose:** Handles logic related to `property`.

### Property
`public JProperty? Property(string name, StringComparison comparison)`

**Purpose:** Handles logic related to `property`.

### PropertyValues
`public JEnumerable<JToken> PropertyValues()`

**Purpose:** Handles logic related to `property values`.

### Load
`public new static JObject Load(JsonReader reader)`

**Purpose:** Loads `load` data.

### Load
`public new static JObject Load(JsonReader reader, JsonLoadSettings? settings)`

**Purpose:** Loads `load` data.

### Parse
`public new static JObject Parse(string json)`

**Purpose:** Handles logic related to `parse`.

### Parse
`public new static JObject Parse(string json, JsonLoadSettings? settings)`

**Purpose:** Handles logic related to `parse`.

### FromObject
`public new static JObject FromObject(object o)`

**Purpose:** Handles logic related to `from object`.

### FromObject
`public new static JObject FromObject(object o, JsonSerializer jsonSerializer)`

**Purpose:** Handles logic related to `from object`.

### WriteTo
`public override void WriteTo(JsonWriter writer, params JsonConverter converters)`

**Purpose:** Handles logic related to `write to`.

### GetValue
`public JToken? GetValue(string? propertyName)`

**Purpose:** Gets the current value of `value`.

### GetValue
`public JToken? GetValue(string? propertyName, StringComparison comparison)`

**Purpose:** Gets the current value of `value`.

### TryGetValue
`public bool TryGetValue(string propertyName, StringComparison comparison, out JToken? value)`

**Purpose:** Attempts to get `get value`, usually returning the result in an out parameter.

### Add
`public void Add(string propertyName, JToken? value)`

**Purpose:** Adds `add` to the current collection or state.

### ContainsKey
`public bool ContainsKey(string propertyName)`

**Purpose:** Handles logic related to `contains key`.

### Remove
`public bool Remove(string propertyName)`

**Purpose:** Removes `remove` from the current collection or state.

### TryGetValue
`public bool TryGetValue(string propertyName, out JToken? value)`

**Purpose:** Attempts to get `get value`, usually returning the result in an out parameter.

### GetEnumerator
`public IEnumerator<KeyValuePair<string, JToken?>> GetEnumerator()`

**Purpose:** Gets the current value of `enumerator`.

## Usage Example

```csharp
JObject example = JObject.this;
```

## See Also

- [Complete Class Catalog](../catalog)