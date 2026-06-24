<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PlayerId`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PlayerId

**Namespace:** TaleWorlds.PlayerServices
**Module:** TaleWorlds.PlayerServices
**Type:** `public struct PlayerId : IComparable<PlayerId>, IEquatable<PlayerId>`
**Base:** `IComparable<PlayerId>`
**File:** `Bannerlord.Source/bin/TaleWorlds.PlayerServices/TaleWorlds.PlayerServices/PlayerId.cs`

## Overview

`PlayerId` lives in `TaleWorlds.PlayerServices` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.PlayerServices` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsValid` | `public bool IsValid { get; }` |

## Key Methods

### ToByteArray
`public byte ToByteArray()`

**Purpose:** Handles logic related to `to byte array`.

### Serialize
`public void Serialize(IWriter writer)`

**Purpose:** Handles logic related to `serialize`.

### Deserialize
`public void Deserialize(IReader reader)`

**Purpose:** Handles logic related to `deserialize`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### Equals
`public override bool Equals(object o)`

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

### FromString
`public static PlayerId FromString(string id)`

**Purpose:** Handles logic related to `from string`.

### CompareTo
`public int CompareTo(PlayerId other)`

**Purpose:** Handles logic related to `compare to`.

### Equals
`public bool Equals(PlayerId other)`

**Purpose:** Handles logic related to `equals`.

## Usage Example

```csharp
var value = new PlayerId();
value.ToByteArray();
```

## See Also

- [Complete Class Catalog](../catalog)