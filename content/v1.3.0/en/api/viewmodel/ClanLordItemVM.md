---
title: "ClanLordItemVM"
description: "Auto-generated class reference for ClanLordItemVM."
---
# ClanLordItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ClanLordItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanLordItemVM.cs`

## Overview

`ClanLordItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Skills` | `public MBBindingList<EncyclopediaSkillVM> Skills { get; set; }` |
| `Traits` | `public MBBindingList<EncyclopediaTraitItemVM> Traits { get; set; }` |
| `HeroModel` | `public HeroViewModel HeroModel { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `IsChild` | `public bool IsChild { get; set; }` |
| `IsTeleporting` | `public bool IsTeleporting { get; set; }` |
| `IsRecallVisible` | `public bool IsRecallVisible { get; set; }` |
| `IsRecallEnabled` | `public bool IsRecallEnabled { get; set; }` |
| `IsTalkVisible` | `public bool IsTalkVisible { get; set; }` |
| `IsTalkEnabled` | `public bool IsTalkEnabled { get; set; }` |
| `CanShowLocationOfHero` | `public bool CanShowLocationOfHero { get; set; }` |
| `IsMainHero` | `public bool IsMainHero { get; set; }` |
| `IsFamilyMember` | `public bool IsFamilyMember { get; set; }` |
| `IsPregnant` | `public bool IsPregnant { get; set; }` |
| `Visual` | `public CharacterImageIdentifierVM Visual { get; set; }` |
| `Banner_9` | `public BannerImageIdentifierVM Banner_9 { get; set; }` |
| `LocationText` | `public string LocationText { get; set; }` |
| `CurrentActionText` | `public string CurrentActionText { get; set; }` |
| `RelationToMainHeroText` | `public string RelationToMainHeroText { get; set; }` |
| `GovernorOfText` | `public string GovernorOfText { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `PregnantHint` | `public HintViewModel PregnantHint { get; set; }` |
| `ShowOnMapHint` | `public HintViewModel ShowOnMapHint { get; set; }` |
| `RecallHint` | `public HintViewModel RecallHint { get; set; }` |
| `TalkHint` | `public HintViewModel TalkHint { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of ClanLordItemVM from the subsystem API first
ClanLordItemVM clanLordItemVM = ...;
clanLordItemVM.RefreshValues();
```

### ExecuteLocationLink
`public void ExecuteLocationLink(string link)`

**Purpose:** Runs the operation or workflow associated with location link.

```csharp
// Obtain an instance of ClanLordItemVM from the subsystem API first
ClanLordItemVM clanLordItemVM = ...;
clanLordItemVM.ExecuteLocationLink("example");
```

### UpdateProperties
`public void UpdateProperties()`

**Purpose:** Recalculates and stores the latest representation of properties.

```csharp
// Obtain an instance of ClanLordItemVM from the subsystem API first
ClanLordItemVM clanLordItemVM = ...;
clanLordItemVM.UpdateProperties();
```

### ExecuteLink
`public void ExecuteLink()`

**Purpose:** Runs the operation or workflow associated with link.

```csharp
// Obtain an instance of ClanLordItemVM from the subsystem API first
ClanLordItemVM clanLordItemVM = ...;
clanLordItemVM.ExecuteLink();
```

### OnCharacterSelect
`public void OnCharacterSelect()`

**Purpose:** Invoked when the character select event is raised.

```csharp
// Obtain an instance of ClanLordItemVM from the subsystem API first
ClanLordItemVM clanLordItemVM = ...;
clanLordItemVM.OnCharacterSelect();
```

### ExecuteBeginHint
`public virtual void ExecuteBeginHint()`

**Purpose:** Runs the operation or workflow associated with begin hint.

```csharp
// Obtain an instance of ClanLordItemVM from the subsystem API first
ClanLordItemVM clanLordItemVM = ...;
clanLordItemVM.ExecuteBeginHint();
```

### ExecuteEndHint
`public virtual void ExecuteEndHint()`

**Purpose:** Runs the operation or workflow associated with end hint.

```csharp
// Obtain an instance of ClanLordItemVM from the subsystem API first
ClanLordItemVM clanLordItemVM = ...;
clanLordItemVM.ExecuteEndHint();
```

### GetHero
`public Hero GetHero()`

**Purpose:** Reads and returns the hero value held by the this instance.

```csharp
// Obtain an instance of ClanLordItemVM from the subsystem API first
ClanLordItemVM clanLordItemVM = ...;
var result = clanLordItemVM.GetHero();
```

### ExecuteRename
`public void ExecuteRename()`

**Purpose:** Runs the operation or workflow associated with rename.

```csharp
// Obtain an instance of ClanLordItemVM from the subsystem API first
ClanLordItemVM clanLordItemVM = ...;
clanLordItemVM.ExecuteRename();
```

### ExecuteShowOnMap
`public void ExecuteShowOnMap()`

**Purpose:** Runs the operation or workflow associated with show on map.

```csharp
// Obtain an instance of ClanLordItemVM from the subsystem API first
ClanLordItemVM clanLordItemVM = ...;
clanLordItemVM.ExecuteShowOnMap();
```

### ExecuteRecall
`public void ExecuteRecall()`

**Purpose:** Runs the operation or workflow associated with recall.

```csharp
// Obtain an instance of ClanLordItemVM from the subsystem API first
ClanLordItemVM clanLordItemVM = ...;
clanLordItemVM.ExecuteRecall();
```

### ExecuteTalk
`public void ExecuteTalk()`

**Purpose:** Runs the operation or workflow associated with talk.

```csharp
// Obtain an instance of ClanLordItemVM from the subsystem API first
ClanLordItemVM clanLordItemVM = ...;
clanLordItemVM.ExecuteTalk();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of ClanLordItemVM from the subsystem API first
ClanLordItemVM clanLordItemVM = ...;
clanLordItemVM.OnFinalize();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ClanLordItemVM clanLordItemVM = ...;
clanLordItemVM.RefreshValues();
```

## See Also

- [Area Index](../)