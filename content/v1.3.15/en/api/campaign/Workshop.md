---
title: "Workshop"
description: "Auto-generated class reference for Workshop."
---
# Workshop

**Namespace:** TaleWorlds.CampaignSystem.Settlements.Workshops
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class Workshop : SettlementArea`
**Base:** `SettlementArea`
**File:** `TaleWorlds.CampaignSystem/Settlements/Workshops/Workshop.cs`

## Overview

`Workshop` lives in `TaleWorlds.CampaignSystem.Settlements.Workshops` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Settlements.Workshops` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Settlement` | `public override Settlement Settlement { get; }` |
| `Tag` | `public override string Tag { get; }` |
| `Owner` | `public override Hero Owner { get; }` |
| `Name` | `public override TextObject Name { get; }` |
| `WorkshopType` | `public WorkshopType WorkshopType { get; }` |
| `ProfitMade` | `public int ProfitMade { get; }` |
| `Expense` | `public int Expense { get; }` |
| `LastRunCampaignTime` | `public CampaignTime LastRunCampaignTime { get; }` |
| `Capital` | `public int Capital { get; }` |
| `InitialCapital` | `public int InitialCapital { get; }` |

## Key Methods

### GetHashCode
`public override int GetHashCode()`

**Purpose:** **Purpose:** Returns a hash code for the this instance, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of Workshop from the subsystem API first
Workshop workshop = ...;
var result = workshop.GetHashCode();
```

### InitializeWorkshop
`public void InitializeWorkshop(Hero owner, WorkshopType type)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by workshop.

```csharp
// Obtain an instance of Workshop from the subsystem API first
Workshop workshop = ...;
workshop.InitializeWorkshop(owner, type);
```

### ChangeOwnerOfWorkshop
`public void ChangeOwnerOfWorkshop(Hero newOwner, WorkshopType type, int capital)`

**Purpose:** **Purpose:** Executes the ChangeOwnerOfWorkshop logic.

```csharp
// Obtain an instance of Workshop from the subsystem API first
Workshop workshop = ...;
workshop.ChangeOwnerOfWorkshop(newOwner, type, 0);
```

### ChangeWorkshopProduction
`public void ChangeWorkshopProduction(WorkshopType newWorkshopType)`

**Purpose:** **Purpose:** Executes the ChangeWorkshopProduction logic.

```csharp
// Obtain an instance of Workshop from the subsystem API first
Workshop workshop = ...;
workshop.ChangeWorkshopProduction(newWorkshopType);
```

### SetCustomName
`public void SetCustomName(TextObject customName)`

**Purpose:** **Purpose:** Assigns a new value to custom name and updates the object's internal state.

```csharp
// Obtain an instance of Workshop from the subsystem API first
Workshop workshop = ...;
workshop.SetCustomName(customName);
```

### UpdateLastRunTime
`public void UpdateLastRunTime()`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of last run time.

```csharp
// Obtain an instance of Workshop from the subsystem API first
Workshop workshop = ...;
workshop.UpdateLastRunTime();
```

### SetProgress
`public void SetProgress(int i, float value)`

**Purpose:** **Purpose:** Assigns a new value to progress and updates the object's internal state.

```csharp
// Obtain an instance of Workshop from the subsystem API first
Workshop workshop = ...;
workshop.SetProgress(0, 0);
```

### ChangeGold
`public void ChangeGold(int goldChange)`

**Purpose:** **Purpose:** Executes the ChangeGold logic.

```csharp
// Obtain an instance of Workshop from the subsystem API first
Workshop workshop = ...;
workshop.ChangeGold(0);
```

### GetProductionProgress
`public float GetProductionProgress(int index)`

**Purpose:** **Purpose:** Reads and returns the production progress value held by the this instance.

```csharp
// Obtain an instance of Workshop from the subsystem API first
Workshop workshop = ...;
var result = workshop.GetProductionProgress(0);
```

### ToString
`public override string ToString()`

**Purpose:** **Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of Workshop from the subsystem API first
Workshop workshop = ...;
var result = workshop.ToString();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Workshop workshop = ...;
workshop.GetHashCode();
```

## See Also

- [Area Index](../)