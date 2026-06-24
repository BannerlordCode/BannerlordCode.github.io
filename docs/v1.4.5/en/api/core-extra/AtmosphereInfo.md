<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AtmosphereInfo`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# AtmosphereInfo

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct AtmosphereInfo`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Library/TaleWorlds.Library/AtmosphereInfo.cs`

## Overview

`AtmosphereInfo` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetInvalidAtmosphereInfo
`public static AtmosphereInfo GetInvalidAtmosphereInfo()`

**Purpose:** Gets the current value of `invalid atmosphere info`.

### DeserializeFrom
`public void DeserializeFrom(IReader reader)`

**Purpose:** Handles logic related to `deserialize from`.

### SerializeTo
`public void SerializeTo(IWriter writer)`

**Purpose:** Handles logic related to `serialize to`.

## Usage Example

```csharp
AtmosphereInfo.GetInvalidAtmosphereInfo();
```

## See Also

- [Complete Class Catalog](../catalog)