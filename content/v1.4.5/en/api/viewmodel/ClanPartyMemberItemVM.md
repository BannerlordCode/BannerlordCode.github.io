---
title: "ClanPartyMemberItemVM"
description: "Auto-generated class reference for ClanPartyMemberItemVM."
---
# ClanPartyMemberItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ClanPartyMemberItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement/ClanPartyMemberItemVM.cs`

## Overview

`ClanPartyMemberItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `HeroObject` | `public Hero HeroObject { get; }` |
| `HeroModel` | `public HeroViewModel HeroModel { get; set; }` |
| `Visual` | `public CharacterImageIdentifierVM Visual { get; set; }` |
| `Banner_9` | `public BannerImageIdentifierVM Banner_9 { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `IsLeader` | `public bool IsLeader { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of ClanPartyMemberItemVM from the subsystem API first
ClanPartyMemberItemVM clanPartyMemberItemVM = ...;
clanPartyMemberItemVM.RefreshValues();
```

### UpdateProperties
`public void UpdateProperties()`

**Purpose:** Recalculates and stores the latest representation of `properties`.

```csharp
// Obtain an instance of ClanPartyMemberItemVM from the subsystem API first
ClanPartyMemberItemVM clanPartyMemberItemVM = ...;
clanPartyMemberItemVM.UpdateProperties();
```

### ExecuteLink
`public void ExecuteLink()`

**Purpose:** Runs the operation or workflow associated with `link`.

```csharp
// Obtain an instance of ClanPartyMemberItemVM from the subsystem API first
ClanPartyMemberItemVM clanPartyMemberItemVM = ...;
clanPartyMemberItemVM.ExecuteLink();
```

### ExecuteBeginHint
`public virtual void ExecuteBeginHint()`

**Purpose:** Runs the operation or workflow associated with `begin hint`.

```csharp
// Obtain an instance of ClanPartyMemberItemVM from the subsystem API first
ClanPartyMemberItemVM clanPartyMemberItemVM = ...;
clanPartyMemberItemVM.ExecuteBeginHint();
```

### ExecuteEndHint
`public virtual void ExecuteEndHint()`

**Purpose:** Runs the operation or workflow associated with `end hint`.

```csharp
// Obtain an instance of ClanPartyMemberItemVM from the subsystem API first
ClanPartyMemberItemVM clanPartyMemberItemVM = ...;
clanPartyMemberItemVM.ExecuteEndHint();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the `finalize` event is raised.

```csharp
// Obtain an instance of ClanPartyMemberItemVM from the subsystem API first
ClanPartyMemberItemVM clanPartyMemberItemVM = ...;
clanPartyMemberItemVM.OnFinalize();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ClanPartyMemberItemVM clanPartyMemberItemVM = ...;
clanPartyMemberItemVM.RefreshValues();
```

## See Also

- [Area Index](../)