<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterCode`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CharacterCode

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** class
**Area:** Core

## Overview

> This is an auto-generated stub. `CharacterCode` is a class in the `TaleWorlds.Core` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `IsEmpty` | `public bool IsEmpty { get; }` |
| `EquipmentCode` | `public string EquipmentCode { get; }` |
| `Code` | `public string Code { get; }` |
| `IsFemale` | `public bool IsFemale { get; }` |
| `IsHero` | `public bool IsHero { get; }` |
| `FaceDirtAmount` | `public float FaceDirtAmount { get; set; }` |
| `Banner` | `public Banner Banner { get; set; }` |
| `FormationClass` | `public FormationClass FormationClass { get; set; }` |
| `Color1` | `public uint Color1 { get; }` |
| `Color2` | `public uint Color2 { get; }` |
| `Race` | `public int Race { get; }` |


## Key Methods

### CalculateEquipment

```csharp
public Equipment CalculateEquipment()
```

### CreateFrom

```csharp
public static CharacterCode CreateFrom(BasicCharacterObject character)
```

### CreateFrom

```csharp
public static CharacterCode CreateFrom(BasicCharacterObject character, Equipment equipment)
```

### CreateFrom

```csharp
public static CharacterCode CreateFrom(string equipmentCode, BodyProperties bodyProperties, bool isFemale, bool isHero, uint color1, uint color2, FormationClass formationClass, int race)
```

### CreateNewCodeString

```csharp
public string CreateNewCodeString()
```

### CreateEmpty

```csharp
public static CharacterCode CreateEmpty()
```

### CreateFrom

```csharp
public static CharacterCode CreateFrom(string code)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)