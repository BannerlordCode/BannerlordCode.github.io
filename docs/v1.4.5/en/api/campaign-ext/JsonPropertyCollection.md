<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `JsonPropertyCollection`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# JsonPropertyCollection

**Namespace:** Newtonsoft.Json.Serialization
**Module:** Newtonsoft.Json
**Type:** `public class JsonPropertyCollection : KeyedCollection<string, JsonProperty>`
**Base:** `KeyedCollection<string`
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json.Serialization/JsonPropertyCollection.cs`

## Overview

`JsonPropertyCollection` lives in `Newtonsoft.Json.Serialization` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Newtonsoft.Json.Serialization` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### AddProperty
`public void AddProperty(JsonProperty property)`

**Purpose:** Adds `property` to the current collection or state.

### GetClosestMatchProperty
`public JsonProperty? GetClosestMatchProperty(string propertyName)`

**Purpose:** Gets the current value of `closest match property`.

### GetProperty
`public JsonProperty? GetProperty(string propertyName, StringComparison comparisonType)`

**Purpose:** Gets the current value of `property`.

## Usage Example

```csharp
var value = new JsonPropertyCollection();
value.AddProperty(property);
```

## See Also

- [Complete Class Catalog](../catalog)