---
title: "BodyPropertiesJsonConverter"
description: "Auto-generated class reference for BodyPropertiesJsonConverter."
---
# BodyPropertiesJsonConverter

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class BodyPropertiesJsonConverter : JsonConverter`
**Base:** `JsonConverter`
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/BodyPropertiesJsonConverter.cs`

## Overview

`BodyPropertiesJsonConverter` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CanConvert
`public override bool CanConvert(Type objectType)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for convert.

```csharp
// Obtain an instance of BodyPropertiesJsonConverter from the subsystem API first
BodyPropertiesJsonConverter bodyPropertiesJsonConverter = ...;
var result = bodyPropertiesJsonConverter.CanConvert(objectType);
```

### ReadJson
`public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)`

**Purpose:** **Purpose:** Reads the data or state of json.

```csharp
// Obtain an instance of BodyPropertiesJsonConverter from the subsystem API first
BodyPropertiesJsonConverter bodyPropertiesJsonConverter = ...;
var result = bodyPropertiesJsonConverter.ReadJson(reader, objectType, existingValue, serializer);
```

### WriteJson
`public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)`

**Purpose:** **Purpose:** Writes json to the target location.

```csharp
// Obtain an instance of BodyPropertiesJsonConverter from the subsystem API first
BodyPropertiesJsonConverter bodyPropertiesJsonConverter = ...;
bodyPropertiesJsonConverter.WriteJson(writer, value, serializer);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BodyPropertiesJsonConverter bodyPropertiesJsonConverter = ...;
bodyPropertiesJsonConverter.CanConvert(objectType);
```

## See Also

- [Area Index](../)