<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Figurehead`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Figurehead

**Namespace:** TaleWorlds.CampaignSystem.Naval
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class Figurehead : PropertyObject`
**Base:** `PropertyObject`
**File:** `TaleWorlds.CampaignSystem/Naval/Figurehead.cs`

## Overview

`Figurehead` lives in `TaleWorlds.CampaignSystem.Naval` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Naval` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `EffectIncrementType` | `public EffectIncrementType EffectIncrementType { get; }` |
| `EffectAmount` | `public float EffectAmount { get; }` |
| `Culture` | `public CultureObject Culture { get; }` |

## Key Methods

### Initialize
`public void Initialize(TextObject name, TextObject description, float amount, CultureObject culture, EffectIncrementType effectIncrementType)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

## Usage Example

```csharp
var value = new Figurehead();
value.Initialize(name, description, 0, culture, effectIncrementType);
```

## See Also

- [Complete Class Catalog](../catalog)