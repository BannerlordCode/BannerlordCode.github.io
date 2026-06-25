---
title: "ClanLordItemVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClanLordItemVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Refreshes the display or cache of `values`.

### ExecuteLocationLink
`public void ExecuteLocationLink(string link)`

**Purpose:** Executes the `location link` operation or workflow.

### UpdateProperties
`public void UpdateProperties()`

**Purpose:** Updates the state or data of `properties`.

### ExecuteLink
`public void ExecuteLink()`

**Purpose:** Executes the `link` operation or workflow.

### OnCharacterSelect
`public void OnCharacterSelect()`

**Purpose:** Called when the `character select` event is raised.

### ExecuteBeginHint
`public virtual void ExecuteBeginHint()`

**Purpose:** Executes the `begin hint` operation or workflow.

### ExecuteEndHint
`public virtual void ExecuteEndHint()`

**Purpose:** Executes the `end hint` operation or workflow.

### GetHero
`public Hero GetHero()`

**Purpose:** Gets the current value of `hero`.

### ExecuteRename
`public void ExecuteRename()`

**Purpose:** Executes the `rename` operation or workflow.

### ExecuteShowOnMap
`public void ExecuteShowOnMap()`

**Purpose:** Executes the `show on map` operation or workflow.

### ExecuteRecall
`public void ExecuteRecall()`

**Purpose:** Executes the `recall` operation or workflow.

### ExecuteTalk
`public void ExecuteTalk()`

**Purpose:** Executes the `talk` operation or workflow.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

## Usage Example

```csharp
var value = new ClanLordItemVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)