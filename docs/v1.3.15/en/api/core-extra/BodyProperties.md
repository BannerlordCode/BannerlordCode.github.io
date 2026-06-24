<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BodyProperties`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BodyProperties

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public struct BodyProperties`
**Area:** core-extra

## Overview

`BodyProperties` lives in `TaleWorlds.Core`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `StaticProperties` | `public StaticBodyProperties StaticProperties { get; }` |
| `DynamicProperties` | `public DynamicBodyProperties DynamicProperties { get; }` |
| `Age` | `public float Age { get; }` |
| `Weight` | `public float Weight { get; }` |
| `Build` | `public float Build { get; }` |
| `KeyPart1` | `public ulong KeyPart1 { get; }` |
| `KeyPart2` | `public ulong KeyPart2 { get; }` |
| `KeyPart3` | `public ulong KeyPart3 { get; }` |
| `KeyPart4` | `public ulong KeyPart4 { get; }` |
| `KeyPart5` | `public ulong KeyPart5 { get; }` |
| `KeyPart6` | `public ulong KeyPart6 { get; }` |
| `KeyPart7` | `public ulong KeyPart7 { get; }` |
| `KeyPart8` | `public ulong KeyPart8 { get; }` |
| `Default` | `public static BodyProperties Default { get; }` |

## Key Methods

### FromXmlNode
`public static bool FromXmlNode(XmlNode node, out BodyProperties bodyProperties)`

**Purpose:** Handles logic related to `from xml node`.

### FromString
`public static bool FromString(string keyValue, out BodyProperties bodyProperties)`

**Purpose:** Handles logic related to `from string`.

### GetRandomBodyProperties
`public static BodyProperties GetRandomBodyProperties(int race, bool isFemale, BodyProperties bodyPropertiesMin, BodyProperties bodyPropertiesMax, int hairCoverType, int seed, string hairTags, string beardTags, string tattooTags, float variationAmount = 0f)`

**Purpose:** Gets the current value of `random body properties`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### Equals
`public override bool Equals(object obj)`

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

### ClampForMultiplayer
`public BodyProperties ClampForMultiplayer()`

**Purpose:** Handles logic related to `clamp for multiplayer`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
BodyProperties.FromXmlNode(node, bodyProperties);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)
