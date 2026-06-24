<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPPlayerVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPPlayerVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPPlayerVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/MPPlayerVM.cs`

## Overview

`MPPlayerVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Peer` | `public MissionPeer Peer { get; }` |
| `Gold` | `public int Gold { get; set; }` |
| `ValuePercent` | `public int ValuePercent { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `CultureID` | `public string CultureID { get; set; }` |
| `IsDead` | `public bool IsDead { get; set; }` |
| `IsValueEnabled` | `public bool IsValueEnabled { get; set; }` |
| `HasSetCompassElement` | `public bool HasSetCompassElement { get; set; }` |
| `IsSpawnActive` | `public bool IsSpawnActive { get; set; }` |
| `IsFocused` | `public bool IsFocused { get; set; }` |
| `CompassElement` | `public MPTeammateCompassTargetVM CompassElement { get; set; }` |
| `Avatar` | `public PlayerAvatarImageIdentifierVM Avatar { get; set; }` |
| `Preview` | `public MPArmoryHeroPreviewVM Preview { get; set; }` |
| `ActivePerks` | `public MBBindingList<MPPerkVM> ActivePerks { get; set; }` |

## Key Methods

### UpdateDisabled
`public void UpdateDisabled()`

**Purpose:** Updates the state or data of `disabled`.

### RefreshDivision
`public void RefreshDivision(bool useCultureColors = false)`

**Purpose:** Refreshes the display or cache of `division`.

### RefreshGold
`public void RefreshGold()`

**Purpose:** Refreshes the display or cache of `gold`.

### RefreshTeam
`public void RefreshTeam()`

**Purpose:** Refreshes the display or cache of `team`.

### RefreshProperties
`public void RefreshProperties()`

**Purpose:** Refreshes the display or cache of `properties`.

### RefreshPreview
`public void RefreshPreview(BasicCharacterObject character, DynamicBodyProperties dynamicBodyProperties, bool isFemale)`

**Purpose:** Refreshes the display or cache of `preview`.

### RefreshActivePerks
`public void RefreshActivePerks()`

**Purpose:** Refreshes the display or cache of `active perks`.

### RefreshAvatar
`public void RefreshAvatar()`

**Purpose:** Refreshes the display or cache of `avatar`.

### ExecuteFocusBegin
`public void ExecuteFocusBegin()`

**Purpose:** Executes the `focus begin` operation or workflow.

### ExecuteFocusEnd
`public void ExecuteFocusEnd()`

**Purpose:** Executes the `focus end` operation or workflow.

## Usage Example

```csharp
var value = new MPPlayerVM();
value.UpdateDisabled();
```

## See Also

- [Complete Class Catalog](../catalog)