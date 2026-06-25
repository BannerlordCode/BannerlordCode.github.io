---
title: "RomanticState"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RomanticState`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RomanticState

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class RomanticState`
**Area:** campaign-ext

## Overview

`RomanticState` lives in `TaleWorlds.CampaignSystem`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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
// Prepare the required context, then call the static entry point directly
RomanticState.GetCourtedHeroInOtherClan(person1, person2);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
