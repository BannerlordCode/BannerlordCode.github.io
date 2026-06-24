<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EncyclopediaHeroPageVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# EncyclopediaHeroPageVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaHeroPageVM : EncyclopediaContentPageVM`
**Base:** `EncyclopediaContentPageVM`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages/EncyclopediaHeroPageVM.cs`

## Overview

`EncyclopediaHeroPageVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Faction` | `public EncyclopediaFactionVM Faction { get; set; }` |
| `IsCompanion` | `public bool IsCompanion { get; set; }` |
| `IsPregnant` | `public bool IsPregnant { get; set; }` |
| `Master` | `public HeroVM Master { get; set; }` |
| `ClanText` | `public string ClanText { get; set; }` |
| `InfoText` | `public string InfoText { get; set; }` |
| `TraitsText` | `public string TraitsText { get; set; }` |
| `MasterText` | `public string MasterText { get; set; }` |
| `KingdomRankText` | `public string KingdomRankText { get; set; }` |
| `SkillsText` | `public string SkillsText { get; set; }` |
| `HeroCharacter` | `public HeroViewModel HeroCharacter { get; set; }` |
| `LastSeenText` | `public string LastSeenText { get; set; }` |
| `DeceasedText` | `public string DeceasedText { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `SettlementsText` | `public string SettlementsText { get; set; }` |
| `DwellingsText` | `public string DwellingsText { get; set; }` |
| `CompanionsText` | `public string CompanionsText { get; set; }` |
| `AlliesText` | `public string AlliesText { get; set; }` |
| `EnemiesText` | `public string EnemiesText { get; set; }` |
| `FamilyText` | `public string FamilyText { get; set; }` |
| `Stats` | `public MBBindingList<StringPairItemVM> Stats { get; set; }` |
| `Traits` | `public MBBindingList<EncyclopediaTraitItemVM> Traits { get; set; }` |
| `Skills` | `public MBBindingList<EncyclopediaSkillVM> Skills { get; set; }` |
| `Dwellings` | `public MBBindingList<EncyclopediaDwellingVM> Dwellings { get; set; }` |
| `Settlements` | `public MBBindingList<EncyclopediaSettlementVM> Settlements { get; set; }` |
| `Family` | `public MBBindingList<EncyclopediaFamilyMemberVM> Family { get; set; }` |
| `Companions` | `public MBBindingList<HeroVM> Companions { get; set; }` |
| `Enemies` | `public MBBindingList<HeroVM> Enemies { get; set; }` |
| `Allies` | `public MBBindingList<HeroVM> Allies { get; set; }` |
| `History` | `public MBBindingList<EncyclopediaHistoryEventVM> History { get; set; }` |
| `HasNeutralClan` | `public bool HasNeutralClan { get; set; }` |
| `IsDead` | `public bool IsDead { get; set; }` |
| `IsInformationHidden` | `public bool IsInformationHidden { get; set; }` |
| `InformationText` | `public string InformationText { get; set; }` |
| `PregnantHint` | `public HintViewModel PregnantHint { get; set; }` |
| `HasAnySkills` | `public bool HasAnySkills { get; set; }` |
| `AdditionalEnemies` | `public MBBindingList<HeroVM> AdditionalEnemies { get; set; }` |
| `AdditionalAllies` | `public MBBindingList<HeroVM> AdditionalAllies { get; set; }` |
| `AnyAdditionalAllies` | `public bool AnyAdditionalAllies { get; set; }` |
| `AnyAdditionalEnemies` | `public bool AnyAdditionalEnemies { get; set; }` |
| `AdditionalAlliesString` | `public string AdditionalAlliesString { get; set; }` |
| `AdditionalEnemiesString` | `public string AdditionalEnemiesString { get; set; }` |
| `AdditionalAlliesHint` | `public BasicTooltipViewModel AdditionalAlliesHint { get; set; }` |
| `AdditionalEnemiesHint` | `public BasicTooltipViewModel AdditionalEnemiesHint { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### Refresh
`public override void Refresh()`

**Purpose:** Refreshes the display or cache of `refresh`.

### GetName
`public override string GetName()`

**Purpose:** Gets the current value of `name`.

### GetNavigationBarURL
`public override string GetNavigationBarURL()`

**Purpose:** Gets the current value of `navigation bar u r l`.

### ExecuteLink
`public void ExecuteLink(string link)`

**Purpose:** Executes the `link` operation or workflow.

### ExecuteSwitchBookmarkedState
`public override void ExecuteSwitchBookmarkedState()`

**Purpose:** Executes the `switch bookmarked state` operation or workflow.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

## Usage Example

```csharp
var value = new EncyclopediaHeroPageVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)