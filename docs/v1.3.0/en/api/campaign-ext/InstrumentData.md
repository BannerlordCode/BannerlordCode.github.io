<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InstrumentData`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# InstrumentData

**Namespace:** SandBox.Objects
**Module:** SandBox.Objects
**Type:** `public class InstrumentData : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `SandBox/Objects/InstrumentData.cs`

## Overview

`InstrumentData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `InstrumentData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `InstrumentEntities` | `public MBReadOnlyList<ValueTuple<HumanBone, string>> InstrumentEntities { get; }` |
| `SittingAction` | `public string SittingAction { get; }` |
| `StandingAction` | `public string StandingAction { get; }` |
| `Tag` | `public string Tag { get; }` |
| `IsDataWithoutInstrument` | `public bool IsDataWithoutInstrument { get; }` |

## Key Methods

### InitializeInstrumentData
`public void InitializeInstrumentData(string sittingAction, string standingAction, bool isDataWithoutInstrument)`

**Purpose:** Initializes the state, resources, or bindings for `instrument data`.

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Handles logic related to `deserialize`.

## Usage Example

```csharp
var value = new InstrumentData();
```

## See Also

- [Complete Class Catalog](../catalog)