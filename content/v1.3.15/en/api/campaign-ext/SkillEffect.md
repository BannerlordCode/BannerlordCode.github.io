---
title: "SkillEffect"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SkillEffect`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SkillEffect

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class SkillEffect : PropertyObject`
**Base:** `PropertyObject`
**File:** `TaleWorlds.CampaignSystem/SkillEffect.cs`

## Overview

`SkillEffect` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `All` | `public static MBReadOnlyList<SkillEffect> All { get; }` |
| `Role` | `public PartyRole Role { get; }` |
| `IncrementType` | `public EffectIncrementType IncrementType { get; }` |
| `EffectedSkill` | `public SkillObject EffectedSkill { get; }` |

## Key Methods

### Initialize
`public void Initialize(TextObject description, SkillObject effectedSkill, PartyRole role, float bonus, EffectIncrementType incrementType, float baseValue = 0f, float limitMin = -3.4028235E+38f, float limitMax = 3.4028235E+38f)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### GetSkillEffectValue
`public float GetSkillEffectValue(int skillLevel)`

**Purpose:** Gets the current value of `skill effect value`.

## Usage Example

```csharp
var value = new SkillEffect();
value.Initialize(description, effectedSkill, role, 0, incrementType, 0, 0, 0);
```

## See Also

- [Complete Class Catalog](../catalog)