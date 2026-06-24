<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FeatObject`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# FeatObject

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class FeatObject : PropertyObject`
**Base:** `PropertyObject`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CharacterDevelopment/FeatObject.cs`

## Overview

`FeatObject` lives in `TaleWorlds.CampaignSystem.CharacterDevelopment` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CharacterDevelopment` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `EffectBonus` | `public float EffectBonus { get; }` |
| `IncrementType` | `public AdditionType IncrementType { get; }` |
| `IsPositive` | `public bool IsPositive { get; }` |

## Key Methods

### Initialize
`public void Initialize(string name, string description, float effectBonus, bool isPositiveEffect, AdditionType incrementType)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

## Usage Example

```csharp
var value = new FeatObject();
value.Initialize("example", "example", 0, false, incrementType);
```

## See Also

- [Complete Class Catalog](../catalog)