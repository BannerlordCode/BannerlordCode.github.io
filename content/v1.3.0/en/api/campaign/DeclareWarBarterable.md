---
title: "DeclareWarBarterable"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DeclareWarBarterable`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DeclareWarBarterable

**Namespace:** TaleWorlds.CampaignSystem.BarterSystem.Barterables
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DeclareWarBarterable : Barterable`
**Base:** `Barterable`
**File:** `TaleWorlds.CampaignSystem/BarterSystem/Barterables/DeclareWarBarterable.cs`

## Overview

`DeclareWarBarterable` lives in `TaleWorlds.CampaignSystem.BarterSystem.Barterables` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.BarterSystem.Barterables` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `StringID` | `public override string StringID { get; }` |
| `DeclaringFaction` | `public IFaction DeclaringFaction { get; }` |
| `OtherFaction` | `public IFaction OtherFaction { get; }` |
| `Name` | `public override TextObject Name { get; }` |

## Key Methods

### Apply
`public override void Apply()`

**Purpose:** Applies `apply` to the current object.

### GetUnitValueForFaction
`public override int GetUnitValueForFaction(IFaction faction)`

**Purpose:** Gets the current value of `unit value for faction`.

### GetVisualIdentifier
`public override ImageIdentifier GetVisualIdentifier()`

**Purpose:** Gets the current value of `visual identifier`.

## Usage Example

```csharp
var value = new DeclareWarBarterable();
value.Apply();
```

## See Also

- [Complete Class Catalog](../catalog)