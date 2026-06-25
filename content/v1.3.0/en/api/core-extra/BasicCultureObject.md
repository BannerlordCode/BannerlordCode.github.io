---
title: "BasicCultureObject"
description: "Auto-generated class reference for BasicCultureObject."
---
# BasicCultureObject

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class BasicCultureObject : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.Core/BasicCultureObject.cs`

## Overview

`BasicCultureObject` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public TextObject Name { get; }` |
| `IsMainCulture` | `public bool IsMainCulture { get; }` |
| `IsBandit` | `public bool IsBandit { get; }` |
| `CanHaveSettlement` | `public bool CanHaveSettlement { get; }` |
| `Color` | `public uint Color { get; }` |
| `Color2` | `public uint Color2 { get; }` |
| `ClothAlternativeColor` | `public uint ClothAlternativeColor { get; }` |
| `ClothAlternativeColor2` | `public uint ClothAlternativeColor2 { get; }` |
| `BackgroundColor1` | `public uint BackgroundColor1 { get; }` |
| `ForegroundColor1` | `public uint ForegroundColor1 { get; }` |
| `BackgroundColor2` | `public uint BackgroundColor2 { get; }` |
| `ForegroundColor2` | `public uint ForegroundColor2 { get; }` |
| `EncounterBackgroundMesh` | `public string EncounterBackgroundMesh { get; }` |
| `Banner` | `public Banner Banner { get; }` |

## Key Methods

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of BasicCultureObject from the subsystem API first
BasicCultureObject basicCultureObject = ...;
var result = basicCultureObject.ToString();
```

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Restores the this instance from serialized data.

```csharp
// Obtain an instance of BasicCultureObject from the subsystem API first
BasicCultureObject basicCultureObject = ...;
basicCultureObject.Deserialize(objectManager, node);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BasicCultureObject basicCultureObject = ...;
basicCultureObject.ToString();
```

## See Also

- [Area Index](../)