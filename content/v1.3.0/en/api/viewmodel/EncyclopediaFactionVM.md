---
title: "EncyclopediaFactionVM"
description: "Auto-generated class reference for EncyclopediaFactionVM."
---
# EncyclopediaFactionVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaFactionVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Items/EncyclopediaFactionVM.cs`

## Overview

`EncyclopediaFactionVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Faction` | `public IFaction Faction { get; }` |
| `ImageIdentifier` | `public BannerImageIdentifierVM ImageIdentifier { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `IsDestroyed` | `public bool IsDestroyed { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of EncyclopediaFactionVM from the subsystem API first
EncyclopediaFactionVM encyclopediaFactionVM = ...;
encyclopediaFactionVM.RefreshValues();
```

### ExecuteLink
`public void ExecuteLink()`

**Purpose:** Runs the operation or workflow associated with `link`.

```csharp
// Obtain an instance of EncyclopediaFactionVM from the subsystem API first
EncyclopediaFactionVM encyclopediaFactionVM = ...;
encyclopediaFactionVM.ExecuteLink();
```

### ExecuteBeginHint
`public void ExecuteBeginHint()`

**Purpose:** Runs the operation or workflow associated with `begin hint`.

```csharp
// Obtain an instance of EncyclopediaFactionVM from the subsystem API first
EncyclopediaFactionVM encyclopediaFactionVM = ...;
encyclopediaFactionVM.ExecuteBeginHint();
```

### ExecuteEndHint
`public void ExecuteEndHint()`

**Purpose:** Runs the operation or workflow associated with `end hint`.

```csharp
// Obtain an instance of EncyclopediaFactionVM from the subsystem API first
EncyclopediaFactionVM encyclopediaFactionVM = ...;
encyclopediaFactionVM.ExecuteEndHint();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
EncyclopediaFactionVM encyclopediaFactionVM = ...;
encyclopediaFactionVM.RefreshValues();
```

## See Also

- [Area Index](../)