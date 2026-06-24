<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PeerIdJsonConverter`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PeerIdJsonConverter

**Namespace:** TaleWorlds.Diamond
**Module:** TaleWorlds.Diamond
**Type:** `public class PeerIdJsonConverter : JsonConverter`
**Base:** `JsonConverter`
**File:** `Bannerlord.Source/bin/TaleWorlds.Diamond/TaleWorlds.Diamond/PeerIdJsonConverter.cs`

## Overview

`PeerIdJsonConverter` lives in `TaleWorlds.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CanConvert
`public override bool CanConvert(Type objectType)`

**Purpose:** Checks whether the current object can `convert`.

### ReadJson
`public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)`

**Purpose:** Handles logic related to `read json`.

### WriteJson
`public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)`

**Purpose:** Handles logic related to `write json`.

## Usage Example

```csharp
var value = new PeerIdJsonConverter();
value.CanConvert(objectType);
```

## See Also

- [Complete Class Catalog](../catalog)