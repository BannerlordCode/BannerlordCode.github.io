<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AtmosphereInfo`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AtmosphereInfo

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct AtmosphereInfo`
**Area:** core-extra

## Overview

`AtmosphereInfo` lives in `TaleWorlds.Library`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsValid` | `public bool IsValid { get; }` |

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
// Prepare the required context, then call the static entry point directly
AtmosphereInfo.GetInvalidAtmosphereInfo();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)
