<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Alley`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Alley

**Namespace:** TaleWorlds.CampaignSystem.Settlements
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class Alley : SettlementArea`
**Base:** `SettlementArea`
**File:** `TaleWorlds.CampaignSystem/Settlements/Alley.cs`

## Overview

`Alley` lives in `TaleWorlds.CampaignSystem.Settlements` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Settlements` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Settlement` | `public override Settlement Settlement { get; }` |
| `Name` | `public override TextObject Name { get; }` |
| `Owner` | `public override Hero Owner { get; }` |
| `Tag` | `public override string Tag { get; }` |
| `State` | `public Alley.AreaState State { get; }` |

## Key Methods

### SetOwner
`public void SetOwner(Hero newOwner)`

**Purpose:** Sets the value or state of `owner`.

### Initialize
`public void Initialize(Settlement settlement, string tag, TextObject name)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

## Usage Example

```csharp
var value = new Alley();
value.SetOwner(newOwner);
```

## See Also

- [Complete Class Catalog](../catalog)