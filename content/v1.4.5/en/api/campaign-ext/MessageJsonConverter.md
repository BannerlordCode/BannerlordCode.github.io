---
title: "MessageJsonConverter"
description: "Auto-generated class reference for MessageJsonConverter."
---
# MessageJsonConverter

**Namespace:** TaleWorlds.Diamond
**Module:** TaleWorlds.Diamond
**Type:** `public class MessageJsonConverter : JsonConverter`
**Base:** `JsonConverter`
**File:** `bin/TaleWorlds.Diamond/TaleWorlds.Diamond/MessageJsonConverter.cs`

## Overview

`MessageJsonConverter` lives in `TaleWorlds.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CanConvert
`public override bool CanConvert(Type objectType)`

**Purpose:** Checks whether the this instance meets the preconditions for convert.

```csharp
// Obtain an instance of MessageJsonConverter from the subsystem API first
MessageJsonConverter messageJsonConverter = ...;
var result = messageJsonConverter.CanConvert(objectType);
```

### ReadJson
`public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)`

**Purpose:** Reads the data or state of json.

```csharp
// Obtain an instance of MessageJsonConverter from the subsystem API first
MessageJsonConverter messageJsonConverter = ...;
var result = messageJsonConverter.ReadJson(reader, objectType, existingValue, serializer);
```

### WriteJson
`public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)`

**Purpose:** Writes json to the target location.

```csharp
// Obtain an instance of MessageJsonConverter from the subsystem API first
MessageJsonConverter messageJsonConverter = ...;
messageJsonConverter.WriteJson(writer, value, serializer);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MessageJsonConverter messageJsonConverter = ...;
messageJsonConverter.CanConvert(objectType);
```

## See Also

- [Area Index](../)