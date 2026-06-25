---
title: "WorkshopType"
description: "Auto-generated class reference for WorkshopType."
---
# WorkshopType

**Namespace:** TaleWorlds.CampaignSystem.Settlements.Workshops
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class WorkshopType : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.CampaignSystem/Settlements/Workshops/WorkshopType.cs`

## Overview

`WorkshopType` lives in `TaleWorlds.CampaignSystem.Settlements.Workshops` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Settlements.Workshops` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `EquipmentCost` | `public int EquipmentCost { get; }` |
| `Frequency` | `public int Frequency { get; }` |
| `Name` | `public TextObject Name { get; }` |
| `JobName` | `public TextObject JobName { get; }` |
| `IsHidden` | `public bool IsHidden { get; }` |
| `SignMeshName` | `public string SignMeshName { get; }` |
| `PropMeshName1` | `public string PropMeshName1 { get; }` |
| `PropMeshName2` | `public string PropMeshName2 { get; }` |
| `PropMeshName3List` | `public List<string> PropMeshName3List { get; }` |
| `PropMeshName4` | `public string PropMeshName4 { get; }` |
| `PropMeshName5` | `public string PropMeshName5 { get; }` |
| `PropMeshName6` | `public string PropMeshName6 { get; }` |
| `Description` | `public TextObject Description { get; }` |
| `Productions` | `public MBReadOnlyList<WorkshopType.Production> Productions { get; }` |
| `All` | `public static MBReadOnlyList<WorkshopType> All { get; }` |
| `Inputs` | `public MBReadOnlyList<ValueTuple<ItemCategory, int>> Inputs { get; }` |
| `Outputs` | `public MBReadOnlyList<ValueTuple<ItemCategory, int>> Outputs { get; }` |
| `ConversionSpeed` | `public float ConversionSpeed { get; }` |

## Key Methods

### GetName
`public override TextObject GetName()`

**Purpose:** Reads and returns the `name` value held by the current object.

```csharp
// Obtain an instance of WorkshopType from the subsystem API first
WorkshopType workshopType = ...;
var result = workshopType.GetName();
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the current object.

```csharp
// Obtain an instance of WorkshopType from the subsystem API first
WorkshopType workshopType = ...;
var result = workshopType.ToString();
```

### Initialize
`public override void Initialize()`

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Obtain an instance of WorkshopType from the subsystem API first
WorkshopType workshopType = ...;
workshopType.Initialize();
```

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Restores the current object from serialized data.

```csharp
// Obtain an instance of WorkshopType from the subsystem API first
WorkshopType workshopType = ...;
workshopType.Deserialize(objectManager, node);
```

### Find
`public static WorkshopType Find(string idString)`

**Purpose:** Finds the matching entry in the current collection or scope.

```csharp
// Static call; no instance required
WorkshopType.Find("example");
```

### FindFirst
`public static WorkshopType FindFirst(Func<WorkshopType, bool> predicate)`

**Purpose:** Looks up the matching `first` in the current collection or scope.

```csharp
// Static call; no instance required
WorkshopType.FindFirst(func<WorkshopType, false);
```

### AddInput
`public void AddInput(ItemCategory item, int count = 1)`

**Purpose:** Adds `input` to the current collection or state.

```csharp
// Obtain an instance of WorkshopType from the subsystem API first
WorkshopType workshopType = ...;
workshopType.AddInput(item, 0);
```

### AddOutput
`public void AddOutput(ItemCategory outputCategory, int outputCount)`

**Purpose:** Adds `output` to the current collection or state.

```csharp
// Obtain an instance of WorkshopType from the subsystem API first
WorkshopType workshopType = ...;
workshopType.AddOutput(outputCategory, 0);
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the current object.

```csharp
// Obtain an instance of WorkshopType from the subsystem API first
WorkshopType workshopType = ...;
var result = workshopType.ToString();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
WorkshopType workshopType = ...;
workshopType.GetName();
```

## See Also

- [Area Index](../)