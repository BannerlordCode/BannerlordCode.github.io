---
title: "GameMenuOption"
description: "Auto-generated class reference for GameMenuOption."
---
# GameMenuOption

**Namespace:** TaleWorlds.CampaignSystem.GameMenus
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GameMenuOption`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/GameMenus/GameMenuOption.cs`

## Overview

`GameMenuOption` lives in `TaleWorlds.CampaignSystem.GameMenus` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.GameMenus` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Type` | `public GameMenu.MenuAndOptionType Type { get; }` |
| `OptionLeaveType` | `public GameMenuOption.LeaveType OptionLeaveType { get; }` |
| `OptionQuestData` | `public GameMenuOption.IssueQuestFlags OptionQuestData { get; }` |
| `IdString` | `public string IdString { get; }` |
| `Text` | `public TextObject Text { get; }` |
| `Text2` | `public TextObject Text2 { get; }` |
| `Tooltip` | `public TextObject Tooltip { get; }` |
| `IsLeave` | `public bool IsLeave { get; }` |
| `IsRepeatable` | `public bool IsRepeatable { get; }` |
| `IsEnabled` | `public bool IsEnabled { get; }` |
| `RelatedObject` | `public object RelatedObject { get; }` |

## Key Methods

### GetConditionsHold
`public bool GetConditionsHold(Game game, MenuContext menuContext)`

**Purpose:** Reads and returns the `conditions hold` value held by the current object.

```csharp
// Obtain an instance of GameMenuOption from the subsystem API first
GameMenuOption gameMenuOption = ...;
var result = gameMenuOption.GetConditionsHold(game, menuContext);
```

### RunConsequence
`public void RunConsequence(MenuContext menuContext)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of GameMenuOption from the subsystem API first
GameMenuOption gameMenuOption = ...;
gameMenuOption.RunConsequence(menuContext);
```

### SetEnable
`public void SetEnable(bool isEnable)`

**Purpose:** Assigns a new value to `enable` and updates the object's internal state.

```csharp
// Obtain an instance of GameMenuOption from the subsystem API first
GameMenuOption gameMenuOption = ...;
gameMenuOption.SetEnable(false);
```

### OnConditionDelegate
`public delegate bool OnConditionDelegate(MenuCallbackArgs args)`

**Purpose:** Invoked when the `condition delegate` event is raised.

```csharp
// Obtain an instance of GameMenuOption from the subsystem API first
GameMenuOption gameMenuOption = ...;
var result = gameMenuOption.OnConditionDelegate(args);
```

### OnConsequenceDelegate
`public delegate void OnConsequenceDelegate(MenuCallbackArgs args)`

**Purpose:** Invoked when the `consequence delegate` event is raised.

```csharp
// Obtain an instance of GameMenuOption from the subsystem API first
GameMenuOption gameMenuOption = ...;
gameMenuOption.OnConsequenceDelegate(args);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GameMenuOption gameMenuOption = ...;
gameMenuOption.GetConditionsHold(game, menuContext);
```

## See Also

- [Area Index](../)