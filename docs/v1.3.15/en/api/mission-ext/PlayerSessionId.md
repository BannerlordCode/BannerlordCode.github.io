<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PlayerSessionId`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PlayerSessionId

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct PlayerSessionId`
**Area:** mission-ext

## Overview

`PlayerSessionId` lives in `TaleWorlds.MountAndBlade.Diamond`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Guid` | `public Guid Guid { get; }` |
| `SessionKey` | `public SessionKey SessionKey { get; }` |

## Key Methods

### NewGuid
`public static PlayerSessionId NewGuid()`

**Purpose:** Handles logic related to `new guid`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### ToByteArray
`public byte ToByteArray()`

**Purpose:** Handles logic related to `to byte array`.

### Equals
`public override bool Equals(object o)`

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
PlayerSessionId.NewGuid();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
