---
title: "JProperty"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `JProperty`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# JProperty

**Namespace:** Newtonsoft.Json.Linq
**Module:** Newtonsoft.Json
**Type:** `public class JProperty : JContainer`
**Base:** `JContainer`
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json.Linq/JProperty.cs`

## Overview

`JProperty` lives in `Newtonsoft.Json.Linq` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Newtonsoft.Json.Linq` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Count` | `public int Count { get; }` |
| `this` | `public JToken this { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `Value` | `public new JToken Value { get; set; }` |
| `Type` | `public override JTokenType Type { get; }` |

## Key Methods

### GetEnumerator
`public IEnumerator<JToken> GetEnumerator()`

**Purpose:** Gets the current value of `enumerator`.

### Add
`public void Add(JToken item)`

**Purpose:** Adds `add` to the current collection or state.

### Clear
`public void Clear()`

**Purpose:** Handles logic related to `clear`.

### Contains
`public bool Contains(JToken item)`

**Purpose:** Handles logic related to `contains`.

### CopyTo
`public void CopyTo(JToken array, int arrayIndex)`

**Purpose:** Handles logic related to `copy to`.

### Remove
`public bool Remove(JToken item)`

**Purpose:** Removes `remove` from the current collection or state.

### IndexOf
`public int IndexOf(JToken item)`

**Purpose:** Handles logic related to `index of`.

### Insert
`public void Insert(int index, JToken item)`

**Purpose:** Handles logic related to `insert`.

### RemoveAt
`public void RemoveAt(int index)`

**Purpose:** Removes `at` from the current collection or state.

### WriteToAsync
`public override Task WriteToAsync(JsonWriter writer, CancellationToken cancellationToken, params JsonConverter converters)`

**Purpose:** Handles logic related to `write to async`.

### LoadAsync
`public new static Task<JProperty> LoadAsync(JsonReader reader, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Loads `async` data.

### LoadAsync
`public new static async Task<JProperty> LoadAsync(JsonReader reader, JsonLoadSettings? settings, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Loads `async` data.

### WriteTo
`public override void WriteTo(JsonWriter writer, params JsonConverter converters)`

**Purpose:** Handles logic related to `write to`.

### Load
`public new static JProperty Load(JsonReader reader)`

**Purpose:** Loads `load` data.

### Load
`public new static JProperty Load(JsonReader reader, JsonLoadSettings? settings)`

**Purpose:** Loads `load` data.

## Usage Example

```csharp
var value = new JProperty();
value.GetEnumerator();
```

## See Also

- [Complete Class Catalog](../catalog)