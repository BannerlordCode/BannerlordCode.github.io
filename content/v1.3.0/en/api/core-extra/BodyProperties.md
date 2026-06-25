---
title: "BodyProperties"
description: "Auto-generated class reference for BodyProperties."
---
# BodyProperties

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public struct BodyProperties`
**Base:** none
**File:** `TaleWorlds.Core/BodyProperties.cs`

## Overview

`BodyProperties` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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

**Purpose:** Executes the FromXmlNode logic.

```csharp
// Static call; no instance required
BodyProperties.FromXmlNode(node, bodyProperties);
```

### FromString
`public static bool FromString(string keyValue, out BodyProperties bodyProperties)`

**Purpose:** Executes the FromString logic.

```csharp
// Static call; no instance required
BodyProperties.FromString("example", bodyProperties);
```

### GetRandomBodyProperties
`public static BodyProperties GetRandomBodyProperties(int race, bool isFemale, BodyProperties bodyPropertiesMin, BodyProperties bodyPropertiesMax, int hairCoverType, int seed, string hairTags, string beardTags, string tattooTags, float variationAmount = 0f)`

**Purpose:** Reads and returns the random body properties value held by the this instance.

```csharp
// Static call; no instance required
BodyProperties.GetRandomBodyProperties(0, false, bodyPropertiesMin, bodyPropertiesMax, 0, 0, "example", "example", "example", 0);
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of BodyProperties from the subsystem API first
BodyProperties bodyProperties = ...;
var result = bodyProperties.ToString();
```

### Equals
`public override bool Equals(object obj)`

**Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of BodyProperties from the subsystem API first
BodyProperties bodyProperties = ...;
var result = bodyProperties.Equals(obj);
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Returns a hash code for the this instance, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of BodyProperties from the subsystem API first
BodyProperties bodyProperties = ...;
var result = bodyProperties.GetHashCode();
```

### ClampForMultiplayer
`public BodyProperties ClampForMultiplayer()`

**Purpose:** Executes the ClampForMultiplayer logic.

```csharp
// Obtain an instance of BodyProperties from the subsystem API first
BodyProperties bodyProperties = ...;
var result = bodyProperties.ClampForMultiplayer();
```

## Usage Example

```csharp
BodyProperties.FromXmlNode(node, bodyProperties);
```

## See Also

- [Area Index](../)