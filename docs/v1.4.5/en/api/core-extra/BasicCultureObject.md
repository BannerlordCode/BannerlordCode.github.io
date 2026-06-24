<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BasicCultureObject`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BasicCultureObject

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class BasicCultureObject : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/BasicCultureObject.cs`

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

**Purpose:** Handles logic related to `to string`.

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Handles logic related to `deserialize`.

## Usage Example

```csharp
var value = new BasicCultureObject();
value.ToString();
```

## See Also

- [Complete Class Catalog](../catalog)