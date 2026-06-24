<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Workshop`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Gets the current value of `hash code`.

### InitializeWorkshop
`public void InitializeWorkshop(Hero owner, WorkshopType type)`

**Purpose:** Initializes the state, resources, or bindings for `workshop`.

### ChangeOwnerOfWorkshop
`public void ChangeOwnerOfWorkshop(Hero newOwner, WorkshopType type, int capital)`

**Purpose:** Handles logic related to `change owner of workshop`.

### ChangeWorkshopProduction
`public void ChangeWorkshopProduction(WorkshopType newWorkshopType)`

**Purpose:** Handles logic related to `change workshop production`.

### SetCustomName
`public void SetCustomName(TextObject customName)`

**Purpose:** Sets the value or state of `custom name`.

### UpdateLastRunTime
`public void UpdateLastRunTime()`

**Purpose:** Updates the state or data of `last run time`.

### SetProgress
`public void SetProgress(int i, float value)`

**Purpose:** Sets the value or state of `progress`.

### ChangeGold
`public void ChangeGold(int goldChange)`

**Purpose:** Handles logic related to `change gold`.

### GetProductionProgress
`public float GetProductionProgress(int index)`

**Purpose:** Gets the current value of `production progress`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

## Usage Example

```csharp
var value = new Workshop();
value.GetHashCode();
```

## See Also

- [Complete Class Catalog](../catalog)