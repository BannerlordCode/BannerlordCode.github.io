---
title: "EncyclopediaUnitVM"
description: "Auto-generated class reference for EncyclopediaUnitVM."
---
# EncyclopediaUnitVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaUnitVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items/EncyclopediaUnitVM.cs`

## Overview

`EncyclopediaUnitVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsActiveUnit` | `public bool IsActiveUnit { get; set; }` |
| `ImageIdentifier` | `public CharacterImageIdentifierVM ImageIdentifier { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `TierIconData` | `public StringItemWithHintVM TierIconData { get; set; }` |
| `TypeIconData` | `public StringItemWithHintVM TypeIconData { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of EncyclopediaUnitVM from the subsystem API first
EncyclopediaUnitVM encyclopediaUnitVM = ...;
encyclopediaUnitVM.RefreshValues();
```

### ExecuteLink
`public void ExecuteLink()`

**Purpose:** Runs the operation or workflow associated with `link`.

```csharp
// Obtain an instance of EncyclopediaUnitVM from the subsystem API first
EncyclopediaUnitVM encyclopediaUnitVM = ...;
encyclopediaUnitVM.ExecuteLink();
```

### ExecuteBeginHint
`public virtual void ExecuteBeginHint()`

**Purpose:** Runs the operation or workflow associated with `begin hint`.

```csharp
// Obtain an instance of EncyclopediaUnitVM from the subsystem API first
EncyclopediaUnitVM encyclopediaUnitVM = ...;
encyclopediaUnitVM.ExecuteBeginHint();
```

### ExecuteEndHint
`public virtual void ExecuteEndHint()`

**Purpose:** Runs the operation or workflow associated with `end hint`.

```csharp
// Obtain an instance of EncyclopediaUnitVM from the subsystem API first
EncyclopediaUnitVM encyclopediaUnitVM = ...;
encyclopediaUnitVM.ExecuteEndHint();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
EncyclopediaUnitVM encyclopediaUnitVM = ...;
encyclopediaUnitVM.RefreshValues();
```

## See Also

- [Area Index](../)