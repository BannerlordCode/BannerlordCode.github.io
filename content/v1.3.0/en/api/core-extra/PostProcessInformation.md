---
title: "PostProcessInformation"
description: "Auto-generated class reference for PostProcessInformation."
---
# PostProcessInformation

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct PostProcessInformation`
**Base:** none
**File:** `TaleWorlds.Library/PostProcessInformation.cs`

## Overview

`PostProcessInformation` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### DeserializeFrom
`public void DeserializeFrom(IReader reader)`

**Purpose:** Restores from from serialized data.

```csharp
// Obtain an instance of PostProcessInformation from the subsystem API first
PostProcessInformation postProcessInformation = ...;
postProcessInformation.DeserializeFrom(reader);
```

### SerializeTo
`public void SerializeTo(IWriter writer)`

**Purpose:** Serializes to into a storable or transmittable format.

```csharp
// Obtain an instance of PostProcessInformation from the subsystem API first
PostProcessInformation postProcessInformation = ...;
postProcessInformation.SerializeTo(writer);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PostProcessInformation postProcessInformation = ...;
postProcessInformation.DeserializeFrom(reader);
```

## See Also

- [Area Index](../)