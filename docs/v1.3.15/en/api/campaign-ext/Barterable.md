<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Barterable`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Barterable

**Namespace:** TaleWorlds.CampaignSystem.BarterSystem.Barterables
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class Barterable`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/BarterSystem/Barterables/Barterable.cs`

## Overview

`Barterable` lives in `TaleWorlds.CampaignSystem.BarterSystem.Barterables` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.BarterSystem.Barterables` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `StringID` | `public abstract string StringID { get; }` |
| `OriginalOwner` | `public Hero OriginalOwner { get; }` |
| `OriginalParty` | `public PartyBase OriginalParty { get; }` |
| `Name` | `public abstract TextObject Name { get; }` |
| `MaxAmount` | `public virtual int MaxAmount { get; set; }` |
| `CurrentAmount` | `public int CurrentAmount { get; set; }` |
| `IsOffered` | `public bool IsOffered { get; set; }` |
| `IsContextDependent` | `public bool IsContextDependent { get; set; }` |
| `Group` | `public BarterGroup Group { get; set; }` |
| `LinkedBarterables` | `public MBReadOnlyList<Barterable> LinkedBarterables { get; }` |
| `Side` | `public Barterable.BarterSide Side { get; }` |

## Key Methods

### GetValueForFaction
`public int GetValueForFaction(IFaction faction)`

**Purpose:** Gets the current value of `value for faction`.

### CheckBarterLink
`public virtual void CheckBarterLink(Barterable linkedBarterable)`

**Purpose:** Handles logic related to `check barter link`.

### GetUnitValueForFaction
`public abstract int GetUnitValueForFaction(IFaction faction)`

**Purpose:** Gets the current value of `unit value for faction`.

### SetIsOffered
`public void SetIsOffered(bool value)`

**Purpose:** Sets the value or state of `is offered`.

### AddBarterLink
`public void AddBarterLink(Barterable barterable)`

**Purpose:** Adds `barter link` to the current collection or state.

### Initialize
`public void Initialize(BarterGroup barterGroup, bool isContextDependent)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### IsCompatible
`public virtual bool IsCompatible(Barterable barterable)`

**Purpose:** Handles logic related to `is compatible`.

### GetVisualIdentifier
`public abstract ImageIdentifier GetVisualIdentifier()`

**Purpose:** Gets the current value of `visual identifier`.

### GetEncyclopediaLink
`public virtual string GetEncyclopediaLink()`

**Purpose:** Gets the current value of `encyclopedia link`.

### Apply
`public abstract void Apply()`

**Purpose:** Applies `apply` to the current object.

## Usage Example

```csharp
var implementation = new CustomBarterable();
```

## See Also

- [Complete Class Catalog](../catalog)