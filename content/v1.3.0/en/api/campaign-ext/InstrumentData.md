---
title: "InstrumentData"
description: "Auto-generated class reference for InstrumentData."
---
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

**Purpose:** Prepares the resources, state, or bindings required by instrument data.

```csharp
// Obtain an instance of InstrumentData from the subsystem API first
InstrumentData instrumentData = ...;
instrumentData.InitializeInstrumentData("example", "example", false);
```

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Restores the this instance from serialized data.

```csharp
// Obtain an instance of InstrumentData from the subsystem API first
InstrumentData instrumentData = ...;
instrumentData.Deserialize(objectManager, node);
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
InstrumentData entry = ...;
```

## See Also

- [Area Index](../)