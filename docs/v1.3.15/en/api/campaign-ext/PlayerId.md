<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PlayerId`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PlayerId

**Namespace:** TaleWorlds.PlayerServices
**Module:** TaleWorlds.PlayerServices
**Type:** `public struct PlayerId : IComparable<PlayerId>, IEquatable<PlayerId>`
**Base:** `IComparable<PlayerId>`
**File:** `TaleWorlds.PlayerServices/PlayerServices/PlayerId.cs`

## Overview

`PlayerId` lives in `TaleWorlds.PlayerServices` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.PlayerServices` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Id1` | `public ulong Id1 { get; }` |
| `Id2` | `public ulong Id2 { get; }` |
| `IsValid` | `public bool IsValid { get; }` |
| `ProvidedType` | `public PlayerIdProvidedTypes ProvidedType { get; }` |
| `Part1` | `public ulong Part1 { get; }` |
| `Part2` | `public ulong Part2 { get; }` |
| `Part3` | `public ulong Part3 { get; }` |
| `Part4` | `public ulong Part4 { get; }` |
| `Empty` | `public static PlayerId Empty { get; }` |

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