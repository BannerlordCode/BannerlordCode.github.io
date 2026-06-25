---
title: "CharacterCode"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterCode`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CharacterCode

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class CharacterCode`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/CharacterCode.cs`

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

**Purpose:** Handles logic related to `calculate equipment`.

### CreateFrom
`public static CharacterCode CreateFrom(BasicCharacterObject character)`

**Purpose:** Creates a new `from` instance or object.

### CreateFrom
`public static CharacterCode CreateFrom(BasicCharacterObject character, Equipment equipment)`

**Purpose:** Creates a new `from` instance or object.

### CreateFrom
`public static CharacterCode CreateFrom(string equipmentCode, BodyProperties bodyProperties, bool isFemale, bool isHero, uint color1, uint color2, FormationClass formationClass, int race)`

**Purpose:** Creates a new `from` instance or object.

### CreateNewCodeString
`public string CreateNewCodeString()`

**Purpose:** Creates a new `new code string` instance or object.

### CreateEmpty
`public static CharacterCode CreateEmpty()`

**Purpose:** Creates a new `empty` instance or object.

### CreateFrom
`public static CharacterCode CreateFrom(string code)`

**Purpose:** Creates a new `from` instance or object.

## Usage Example

```csharp
var value = new CharacterCode();
value.CalculateEquipment();
```

## See Also

- [Complete Class Catalog](../catalog)