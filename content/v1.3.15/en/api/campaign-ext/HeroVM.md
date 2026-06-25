---
title: "HeroVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HeroVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Refreshes the display or cache of `values`.

### ExecuteLink
`public void ExecuteLink()`

**Purpose:** Executes the `link` operation or workflow.

### ExecuteBeginHint
`public virtual void ExecuteBeginHint()`

**Purpose:** Executes the `begin hint` operation or workflow.

### ExecuteEndHint
`public virtual void ExecuteEndHint()`

**Purpose:** Executes the `end hint` operation or workflow.

### GetRelation
`public static int GetRelation(Hero hero)`

**Purpose:** Gets the current value of `relation`.

## Usage Example

```csharp
var value = new HeroVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)