---
title: "Romance"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Romance`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Romance

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class Romance`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Romance.cs`

## Overview

`Romance` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `RomanticStateList` | `public static List<Romance.RomanticState> RomanticStateList { get; }` |

## Key Methods

### GetCourtedHeroInOtherClan
`public static Hero GetCourtedHeroInOtherClan(Hero person1, Hero person2)`

**Purpose:** Gets the current value of `courted hero in other clan`.

### GetRomanticLevel
`public static Romance.RomanceLevelEnum GetRomanticLevel(Hero person1, Hero person2)`

**Purpose:** Gets the current value of `romantic level`.

### GetRomanticState
`public static Romance.RomanticState GetRomanticState(Hero person1, Hero person2)`

**Purpose:** Gets the current value of `romantic state`.

### Partner
`public Hero Partner(Hero hero)`

**Purpose:** Handles logic related to `partner`.

## Usage Example

```csharp
Romance.GetCourtedHeroInOtherClan(person1, person2);
```

## See Also

- [Complete Class Catalog](../catalog)