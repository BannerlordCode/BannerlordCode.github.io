<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBBodyProperty`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MBBodyProperty

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class MBBodyProperty : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/MBBodyProperty.cs`

## Overview

`MBBodyProperty` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `HairTags` | `public string HairTags { get; set; }` |
| `BeardTags` | `public string BeardTags { get; set; }` |
| `TattooTags` | `public string TattooTags { get; set; }` |

## Key Methods

### CreateFrom
`public static MBBodyProperty CreateFrom(MBBodyProperty bodyProperty)`

**Purpose:** Creates a new `from` instance or object.

### Init
`public void Init(BodyProperties bodyPropertyMin, BodyProperties bodyPropertyMax)`

**Purpose:** Initializes the state, resources, or bindings for `init`.

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Handles logic related to `deserialize`.

## Usage Example

```csharp
MBBodyProperty.CreateFrom(bodyProperty);
```

## See Also

- [Complete Class Catalog](../catalog)