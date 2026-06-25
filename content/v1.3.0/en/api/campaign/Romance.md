---
title: "Romance"
description: "Auto-generated class reference for Romance."
---
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

**Purpose:** Reads and returns the `courted hero in other clan` value held by the current object.

```csharp
// Static call; no instance required
Romance.GetCourtedHeroInOtherClan(person1, person2);
```

### GetRomanticLevel
`public static Romance.RomanceLevelEnum GetRomanticLevel(Hero person1, Hero person2)`

**Purpose:** Reads and returns the `romantic level` value held by the current object.

```csharp
// Static call; no instance required
Romance.GetRomanticLevel(person1, person2);
```

### GetRomanticState
`public static Romance.RomanticState GetRomanticState(Hero person1, Hero person2)`

**Purpose:** Reads and returns the `romantic state` value held by the current object.

```csharp
// Static call; no instance required
Romance.GetRomanticState(person1, person2);
```

### Partner
`public Hero Partner(Hero hero)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Romance from the subsystem API first
Romance romance = ...;
var result = romance.Partner(hero);
```

## Usage Example

```csharp
Romance.GetCourtedHeroInOtherClan(person1, person2);
```

## See Also

- [Area Index](../)