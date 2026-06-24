<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBBodyProperty`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBBodyProperty

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class MBBodyProperty : MBObjectBase`
**Base:** `MBObjectBase`
**Area:** core-extra

## Overview

`MBBodyProperty` lives in `TaleWorlds.Core`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `HairTags` | `public string HairTags { get; set; }` |
| `BeardTags` | `public string BeardTags { get; set; }` |
| `TattooTags` | `public string TattooTags { get; set; }` |
| `BodyPropertyMin` | `public BodyProperties BodyPropertyMin { get; }` |
| `BodyPropertyMax` | `public BodyProperties BodyPropertyMax { get; }` |

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
// Prepare the required context, then call the static entry point directly
MBBodyProperty.CreateFrom(bodyProperty);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)
