---
title: "AtmosphereInfo"
description: "Auto-generated class reference for AtmosphereInfo."
---
# AtmosphereInfo

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct AtmosphereInfo`
**Base:** none
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/AtmosphereInfo.cs`

## Overview

`AtmosphereInfo` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetInvalidAtmosphereInfo
`public static AtmosphereInfo GetInvalidAtmosphereInfo()`

**Purpose:** **Purpose:** Reads and returns the invalid atmosphere info value held by the this instance.

```csharp
// Static call; no instance required
AtmosphereInfo.GetInvalidAtmosphereInfo();
```

### DeserializeFrom
`public void DeserializeFrom(IReader reader)`

**Purpose:** **Purpose:** Restores from from serialized data.

```csharp
// Obtain an instance of AtmosphereInfo from the subsystem API first
AtmosphereInfo atmosphereInfo = ...;
atmosphereInfo.DeserializeFrom(reader);
```

### SerializeTo
`public void SerializeTo(IWriter writer)`

**Purpose:** **Purpose:** Serializes to into a storable or transmittable format.

```csharp
// Obtain an instance of AtmosphereInfo from the subsystem API first
AtmosphereInfo atmosphereInfo = ...;
atmosphereInfo.SerializeTo(writer);
```

## Usage Example

```csharp
AtmosphereInfo.GetInvalidAtmosphereInfo();
```

## See Also

- [Area Index](../)