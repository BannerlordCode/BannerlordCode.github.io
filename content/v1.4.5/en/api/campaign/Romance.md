---
title: "Romance"
description: "Auto-generated class reference for Romance."
---
# Romance

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class Romance`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/Romance.cs`

## Overview

`Romance` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Partner
`public Hero Partner(Hero hero)`

**Purpose:** **Purpose:** Executes the Partner logic.

```csharp
// Obtain an instance of Romance from the subsystem API first
Romance romance = ...;
var result = romance.Partner(hero);
```

### GetCourtedHeroInOtherClan
`public static Hero GetCourtedHeroInOtherClan(Hero person1, Hero person2)`

**Purpose:** **Purpose:** Reads and returns the courted hero in other clan value held by the this instance.

```csharp
// Static call; no instance required
Romance.GetCourtedHeroInOtherClan(person1, person2);
```

### GetRomanticLevel
`public static RomanceLevelEnum GetRomanticLevel(Hero person1, Hero person2)`

**Purpose:** **Purpose:** Reads and returns the romantic level value held by the this instance.

```csharp
// Static call; no instance required
Romance.GetRomanticLevel(person1, person2);
```

### GetRomanticState
`public static RomanticState GetRomanticState(Hero person1, Hero person2)`

**Purpose:** **Purpose:** Reads and returns the romantic state value held by the this instance.

```csharp
// Static call; no instance required
Romance.GetRomanticState(person1, person2);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Romance romance = ...;
romance.Partner(hero);
```

## See Also

- [Area Index](../)