---
title: "HeroVM"
description: "Auto-generated class reference for HeroVM."
---
# HeroVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class HeroVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/HeroVM.cs`

## Overview

`HeroVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Hero` | `public Hero Hero { get; }` |
| `IsDead` | `public bool IsDead { get; set; }` |
| `IsChild` | `public bool IsChild { get; set; }` |
| `IsKingdomLeader` | `public bool IsKingdomLeader { get; set; }` |
| `Relation` | `public int Relation { get; set; }` |
| `ImageIdentifier` | `public CharacterImageIdentifierVM ImageIdentifier { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `ClanBanner` | `public BannerImageIdentifierVM ClanBanner { get; set; }` |
| `ClanBanner_9` | `public BannerImageIdentifierVM ClanBanner_9 { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of HeroVM from the subsystem API first
HeroVM heroVM = ...;
heroVM.RefreshValues();
```

### ExecuteLink
`public void ExecuteLink()`

**Purpose:** Runs the operation or workflow associated with `link`.

```csharp
// Obtain an instance of HeroVM from the subsystem API first
HeroVM heroVM = ...;
heroVM.ExecuteLink();
```

### ExecuteBeginHint
`public virtual void ExecuteBeginHint()`

**Purpose:** Runs the operation or workflow associated with `begin hint`.

```csharp
// Obtain an instance of HeroVM from the subsystem API first
HeroVM heroVM = ...;
heroVM.ExecuteBeginHint();
```

### ExecuteEndHint
`public virtual void ExecuteEndHint()`

**Purpose:** Runs the operation or workflow associated with `end hint`.

```csharp
// Obtain an instance of HeroVM from the subsystem API first
HeroVM heroVM = ...;
heroVM.ExecuteEndHint();
```

### GetRelation
`public static int GetRelation(Hero hero)`

**Purpose:** Reads and returns the `relation` value held by the current object.

```csharp
// Static call; no instance required
HeroVM.GetRelation(hero);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
HeroVM heroVM = ...;
heroVM.RefreshValues();
```

## See Also

- [Area Index](../)