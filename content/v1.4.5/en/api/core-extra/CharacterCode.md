---
title: "CharacterCode"
description: "Auto-generated class reference for CharacterCode."
---
# CharacterCode

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class CharacterCode`
**Base:** none
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/CharacterCode.cs`

## Overview

`CharacterCode` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `EquipmentCode` | `public string EquipmentCode { get; }` |
| `Code` | `public string Code { get; }` |
| `IsFemale` | `public bool IsFemale { get; }` |
| `IsHero` | `public bool IsHero { get; }` |
| `FormationClass` | `public FormationClass FormationClass { get; set; }` |
| `Color1` | `public uint Color1 { get; }` |
| `Color2` | `public uint Color2 { get; }` |
| `Race` | `public int Race { get; }` |

## Key Methods

### CalculateEquipment
`public Equipment CalculateEquipment()`

**Purpose:** Calculates the current value or result of `equipment`.

```csharp
// Obtain an instance of CharacterCode from the subsystem API first
CharacterCode characterCode = ...;
var result = characterCode.CalculateEquipment();
```

### CreateFrom
`public static CharacterCode CreateFrom(BasicCharacterObject character)`

**Purpose:** Constructs a new `from` entity and returns it to the caller.

```csharp
// Static call; no instance required
CharacterCode.CreateFrom(character);
```

### CreateFrom
`public static CharacterCode CreateFrom(BasicCharacterObject character, Equipment equipment)`

**Purpose:** Constructs a new `from` entity and returns it to the caller.

```csharp
// Static call; no instance required
CharacterCode.CreateFrom(character, equipment);
```

### CreateFrom
`public static CharacterCode CreateFrom(string equipmentCode, BodyProperties bodyProperties, bool isFemale, bool isHero, uint color1, uint color2, FormationClass formationClass, int race)`

**Purpose:** Constructs a new `from` entity and returns it to the caller.

```csharp
// Static call; no instance required
CharacterCode.CreateFrom("example", bodyProperties, false, false, 0, 0, formationClass, 0);
```

### CreateNewCodeString
`public string CreateNewCodeString()`

**Purpose:** Constructs a new `new code string` entity and returns it to the caller.

```csharp
// Obtain an instance of CharacterCode from the subsystem API first
CharacterCode characterCode = ...;
var result = characterCode.CreateNewCodeString();
```

### CreateEmpty
`public static CharacterCode CreateEmpty()`

**Purpose:** Constructs a new `empty` entity and returns it to the caller.

```csharp
// Static call; no instance required
CharacterCode.CreateEmpty();
```

### CreateFrom
`public static CharacterCode CreateFrom(string code)`

**Purpose:** Constructs a new `from` entity and returns it to the caller.

```csharp
// Static call; no instance required
CharacterCode.CreateFrom("example");
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CharacterCode characterCode = ...;
characterCode.CalculateEquipment();
```

## See Also

- [Area Index](../)