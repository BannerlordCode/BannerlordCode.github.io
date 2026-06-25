---
title: "PerkObject"
description: "Auto-generated class reference for PerkObject."
---
# PerkObject

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class PerkObject : PropertyObject`
**Base:** `PropertyObject`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CharacterDevelopment/PerkObject.cs`

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

**Purpose:** **Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of PerkObject from the subsystem API first
PerkObject perkObject = ...;
perkObject.Initialize("example", skill, 0, alternativePerk, "example", primaryRole, 0, incrementType, "example", partyRole.None, 0, effectIncrementType.Invalid, troopUsageFlags.Undefined, troopUsageFlags.Undefined);
```

### ToString
`public override string ToString()`

**Purpose:** **Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of PerkObject from the subsystem API first
PerkObject perkObject = ...;
var result = perkObject.ToString();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PerkObject perkObject = ...;
perkObject.Initialize("example", skill, 0, alternativePerk, "example", primaryRole, 0, incrementType, "example", partyRole.None, 0, effectIncrementType.Invalid, troopUsageFlags.Undefined, troopUsageFlags.Undefined);
```

## See Also

- [Area Index](../)