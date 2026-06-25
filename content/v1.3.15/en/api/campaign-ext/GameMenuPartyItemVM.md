---
title: "GameMenuPartyItemVM"
description: "Auto-generated class reference for GameMenuPartyItemVM."
---
# GameMenuPartyItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GameMenuPartyItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/GameMenuPartyItemVM.cs`

## Overview

`GameMenuPartyItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Relation` | `public int Relation { get; set; }` |
| `Quests` | `public MBBindingList<QuestMarkerVM> Quests { get; set; }` |
| `IsHighlightEnabled` | `public bool IsHighlightEnabled { get; set; }` |
| `IsCharacterInPrison` | `public bool IsCharacterInPrison { get; set; }` |
| `HasShips` | `public bool HasShips { get; set; }` |
| `IsIdle` | `public bool IsIdle { get; set; }` |
| `IsPlayer` | `public bool IsPlayer { get; set; }` |
| `IsEnemy` | `public bool IsEnemy { get; set; }` |
| `IsAlly` | `public bool IsAlly { get; set; }` |
| `IsNeutral` | `public bool IsNeutral { get; set; }` |
| `IsMergedWithArmy` | `public bool IsMergedWithArmy { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `SettlementPath` | `public string SettlementPath { get; set; }` |
| `LocationText` | `public string LocationText { get; set; }` |
| `PowerText` | `public string PowerText { get; set; }` |
| `DescriptionText` | `public string DescriptionText { get; set; }` |
| `ProfessionText` | `public string ProfessionText { get; set; }` |
| `EncyclopediaCursorEffect` | `public string EncyclopediaCursorEffect { get; set; }` |
| `Visual` | `public CharacterImageIdentifierVM Visual { get; set; }` |
| `Banner_9` | `public BannerImageIdentifierVM Banner_9 { get; set; }` |
| `PartySize` | `public int PartySize { get; set; }` |
| `PartyWoundedSize` | `public int PartyWoundedSize { get; set; }` |
| `ShipCount` | `public int ShipCount { get; set; }` |
| `PartySizeLbl` | `public string PartySizeLbl { get; set; }` |
| `IsLeader` | `public bool IsLeader { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of GameMenuPartyItemVM from the subsystem API first
GameMenuPartyItemVM gameMenuPartyItemVM = ...;
gameMenuPartyItemVM.RefreshValues();
```

### ExecuteSetAsContextMenuItem
`public void ExecuteSetAsContextMenuItem()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with set as context menu item.

```csharp
// Obtain an instance of GameMenuPartyItemVM from the subsystem API first
GameMenuPartyItemVM gameMenuPartyItemVM = ...;
gameMenuPartyItemVM.ExecuteSetAsContextMenuItem();
```

### ExecuteOpenEncyclopedia
`public void ExecuteOpenEncyclopedia()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with open encyclopedia.

```csharp
// Obtain an instance of GameMenuPartyItemVM from the subsystem API first
GameMenuPartyItemVM gameMenuPartyItemVM = ...;
gameMenuPartyItemVM.ExecuteOpenEncyclopedia();
```

### ExecuteCloseTooltip
`public void ExecuteCloseTooltip()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with close tooltip.

```csharp
// Obtain an instance of GameMenuPartyItemVM from the subsystem API first
GameMenuPartyItemVM gameMenuPartyItemVM = ...;
gameMenuPartyItemVM.ExecuteCloseTooltip();
```

### ExecuteOpenTooltip
`public void ExecuteOpenTooltip()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with open tooltip.

```csharp
// Obtain an instance of GameMenuPartyItemVM from the subsystem API first
GameMenuPartyItemVM gameMenuPartyItemVM = ...;
gameMenuPartyItemVM.ExecuteOpenTooltip();
```

### RefreshProperties
`public void RefreshProperties()`

**Purpose:** **Purpose:** Keeps the display or cache of properties in sync with the underlying state.

```csharp
// Obtain an instance of GameMenuPartyItemVM from the subsystem API first
GameMenuPartyItemVM gameMenuPartyItemVM = ...;
gameMenuPartyItemVM.RefreshProperties();
```

### RefreshQuestStatus
`public void RefreshQuestStatus()`

**Purpose:** **Purpose:** Keeps the display or cache of quest status in sync with the underlying state.

```csharp
// Obtain an instance of GameMenuPartyItemVM from the subsystem API first
GameMenuPartyItemVM gameMenuPartyItemVM = ...;
gameMenuPartyItemVM.RefreshQuestStatus();
```

### RefreshVisual
`public void RefreshVisual()`

**Purpose:** **Purpose:** Keeps the display or cache of visual in sync with the underlying state.

```csharp
// Obtain an instance of GameMenuPartyItemVM from the subsystem API first
GameMenuPartyItemVM gameMenuPartyItemVM = ...;
gameMenuPartyItemVM.RefreshVisual();
```

### RefreshCounts
`public void RefreshCounts()`

**Purpose:** **Purpose:** Keeps the display or cache of counts in sync with the underlying state.

```csharp
// Obtain an instance of GameMenuPartyItemVM from the subsystem API first
GameMenuPartyItemVM gameMenuPartyItemVM = ...;
gameMenuPartyItemVM.RefreshCounts();
```

### GetPartyDescriptionTextFromValues
`public string GetPartyDescriptionTextFromValues()`

**Purpose:** **Purpose:** Reads and returns the party description text from values value held by the this instance.

```csharp
// Obtain an instance of GameMenuPartyItemVM from the subsystem API first
GameMenuPartyItemVM gameMenuPartyItemVM = ...;
var result = gameMenuPartyItemVM.GetPartyDescriptionTextFromValues();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of GameMenuPartyItemVM from the subsystem API first
GameMenuPartyItemVM gameMenuPartyItemVM = ...;
gameMenuPartyItemVM.OnFinalize();
```

### Compare
`public int Compare(QuestMarkerVM x, QuestMarkerVM y)`

**Purpose:** **Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of GameMenuPartyItemVM from the subsystem API first
GameMenuPartyItemVM gameMenuPartyItemVM = ...;
var result = gameMenuPartyItemVM.Compare(x, y);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GameMenuPartyItemVM gameMenuPartyItemVM = ...;
gameMenuPartyItemVM.RefreshValues();
```

## See Also

- [Area Index](../)