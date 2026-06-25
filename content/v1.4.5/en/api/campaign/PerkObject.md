---
title: "PerkObject"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PerkObject`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PerkObject

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class PerkObject : PropertyObject`
**Base:** `PropertyObject`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CharacterDevelopment/PerkObject.cs`

## Overview

`PerkObject` lives in `TaleWorlds.CampaignSystem.CharacterDevelopment` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CharacterDevelopment` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Skill` | `public SkillObject Skill { get; }` |
| `RequiredSkillValue` | `public float RequiredSkillValue { get; }` |
| `AlternativePerk` | `public PerkObject AlternativePerk { get; }` |
| `PrimaryRole` | `public PartyRole PrimaryRole { get; }` |
| `SecondaryRole` | `public PartyRole SecondaryRole { get; }` |
| `PrimaryBonus` | `public float PrimaryBonus { get; }` |
| `SecondaryBonus` | `public float SecondaryBonus { get; }` |
| `PrimaryIncrementType` | `public EffectIncrementType PrimaryIncrementType { get; }` |
| `SecondaryIncrementType` | `public EffectIncrementType SecondaryIncrementType { get; }` |
| `PrimaryTroopUsageMask` | `public TroopUsageFlags PrimaryTroopUsageMask { get; }` |
| `SecondaryTroopUsageMask` | `public TroopUsageFlags SecondaryTroopUsageMask { get; }` |
| `PrimaryDescription` | `public TextObject PrimaryDescription { get; }` |
| `SecondaryDescription` | `public TextObject SecondaryDescription { get; }` |
| `IsTrash` | `public bool IsTrash { get; }` |

## Key Methods

### Initialize
`public void Initialize(string name, SkillObject skill, int requiredSkillValue, PerkObject alternativePerk, string primaryDescription, PartyRole primaryRole, float primaryBonus, EffectIncrementType incrementType, string secondaryDescription = "", PartyRole secondaryRole = PartyRole.None, float secondaryBonus = 0f, EffectIncrementType secondaryIncrementType = EffectIncrementType.Invalid, TroopUsageFlags primaryTroopUsageMask = TroopUsageFlags.Undefined, TroopUsageFlags secondaryTroopUsageMask = TroopUsageFlags.Undefined)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

## Usage Example

```csharp
var value = new PerkObject();
value.Initialize("example", skill, 0, alternativePerk, "example", primaryRole, 0, incrementType, "example", partyRole.None, 0, effectIncrementType.Invalid, troopUsageFlags.Undefined, troopUsageFlags.Undefined);
```

## See Also

- [Complete Class Catalog](../catalog)