---
title: "MultiplayerOption"
description: "Auto-generated class reference for MultiplayerOption."
---
# MultiplayerOption

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerOption`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MultiplayerOptions.cs`

## Overview

`MultiplayerOption` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsValid` | `public bool IsValid { get; }` |
| `Value` | `public int Value { get; }` |
| `IsValid` | `public bool IsValid { get; }` |
| `Value` | `public string Value { get; }` |

## Key Methods

### Create
`public static IntegerValue Create()`

**Purpose:** Creates a new instance or related entity for the this instance.

```csharp
// Static call; no instance required
MultiplayerOption.Create();
```

### UpdateValue
`public void UpdateValue(int value)`

**Purpose:** Recalculates and stores the latest representation of value.

```csharp
// Obtain an instance of MultiplayerOption from the subsystem API first
MultiplayerOption multiplayerOption = ...;
multiplayerOption.UpdateValue(0);
```

### Create
`public static StringValue Create()`

**Purpose:** Creates a new instance or related entity for the this instance.

```csharp
// Static call; no instance required
MultiplayerOption.Create();
```

### UpdateValue
`public void UpdateValue(string value)`

**Purpose:** Recalculates and stores the latest representation of value.

```csharp
// Obtain an instance of MultiplayerOption from the subsystem API first
MultiplayerOption multiplayerOption = ...;
multiplayerOption.UpdateValue("example");
```

### CreateMultiplayerOption
`public static MultiplayerOption CreateMultiplayerOption(OptionType optionType)`

**Purpose:** Constructs a new multiplayer option entity and returns it to the caller.

```csharp
// Static call; no instance required
MultiplayerOption.CreateMultiplayerOption(optionType);
```

### CopyMultiplayerOption
`public static MultiplayerOption CopyMultiplayerOption(MultiplayerOption option)`

**Purpose:** Copies the multiplayer option state of the this instance to a target.

```csharp
// Static call; no instance required
MultiplayerOption.CopyMultiplayerOption(option);
```

### UpdateValue
`public MultiplayerOption UpdateValue(bool value)`

**Purpose:** Recalculates and stores the latest representation of value.

```csharp
// Obtain an instance of MultiplayerOption from the subsystem API first
MultiplayerOption multiplayerOption = ...;
var result = multiplayerOption.UpdateValue(false);
```

### UpdateValue
`public MultiplayerOption UpdateValue(int value)`

**Purpose:** Recalculates and stores the latest representation of value.

```csharp
// Obtain an instance of MultiplayerOption from the subsystem API first
MultiplayerOption multiplayerOption = ...;
var result = multiplayerOption.UpdateValue(0);
```

### UpdateValue
`public MultiplayerOption UpdateValue(string value)`

**Purpose:** Recalculates and stores the latest representation of value.

```csharp
// Obtain an instance of MultiplayerOption from the subsystem API first
MultiplayerOption multiplayerOption = ...;
var result = multiplayerOption.UpdateValue("example");
```

### GetValue
`public void GetValue(out bool value)`

**Purpose:** Reads and returns the value value held by the this instance.

```csharp
// Obtain an instance of MultiplayerOption from the subsystem API first
MultiplayerOption multiplayerOption = ...;
multiplayerOption.GetValue(value);
```

### GetValue
`public void GetValue(out int value)`

**Purpose:** Reads and returns the value value held by the this instance.

```csharp
// Obtain an instance of MultiplayerOption from the subsystem API first
MultiplayerOption multiplayerOption = ...;
multiplayerOption.GetValue(value);
```

### GetValue
`public void GetValue(out string value)`

**Purpose:** Reads and returns the value value held by the this instance.

```csharp
// Obtain an instance of MultiplayerOption from the subsystem API first
MultiplayerOption multiplayerOption = ...;
multiplayerOption.GetValue(value);
```

### GetOptionFromOptionType
`public MultiplayerOption GetOptionFromOptionType(OptionType optionType)`

**Purpose:** Reads and returns the option from option type value held by the this instance.

```csharp
// Obtain an instance of MultiplayerOption from the subsystem API first
MultiplayerOption multiplayerOption = ...;
var result = multiplayerOption.GetOptionFromOptionType(optionType);
```

### CreateOption
`public void CreateOption(OptionType optionType)`

**Purpose:** Constructs a new option entity and returns it to the caller.

```csharp
// Obtain an instance of MultiplayerOption from the subsystem API first
MultiplayerOption multiplayerOption = ...;
multiplayerOption.CreateOption(optionType);
```

### UpdateOptionValue
`public void UpdateOptionValue(OptionType optionType, int value)`

**Purpose:** Recalculates and stores the latest representation of option value.

```csharp
// Obtain an instance of MultiplayerOption from the subsystem API first
MultiplayerOption multiplayerOption = ...;
multiplayerOption.UpdateOptionValue(optionType, 0);
```

### UpdateOptionValue
`public void UpdateOptionValue(OptionType optionType, string value)`

**Purpose:** Recalculates and stores the latest representation of option value.

```csharp
// Obtain an instance of MultiplayerOption from the subsystem API first
MultiplayerOption multiplayerOption = ...;
multiplayerOption.UpdateOptionValue(optionType, "example");
```

### UpdateOptionValue
`public void UpdateOptionValue(OptionType optionType, bool value)`

**Purpose:** Recalculates and stores the latest representation of option value.

```csharp
// Obtain an instance of MultiplayerOption from the subsystem API first
MultiplayerOption multiplayerOption = ...;
multiplayerOption.UpdateOptionValue(optionType, false);
```

### CopyAllValuesTo
`public void CopyAllValuesTo(MultiplayerOptionsContainer other)`

**Purpose:** Copies the all values to state of the this instance to a target.

```csharp
// Obtain an instance of MultiplayerOption from the subsystem API first
MultiplayerOption multiplayerOption = ...;
multiplayerOption.CopyAllValuesTo(other);
```

### Release
`public static void Release()`

**Purpose:** Executes the Release logic.

```csharp
// Static call; no instance required
MultiplayerOption.Release();
```

### GetOptionFromOptionType
`public MultiplayerOption GetOptionFromOptionType(OptionType optionType, MultiplayerOptionsAccessMode mode = MultiplayerOptionsAccessMode.CurrentMapOptions)`

**Purpose:** Reads and returns the option from option type value held by the this instance.

```csharp
// Obtain an instance of MultiplayerOption from the subsystem API first
MultiplayerOption multiplayerOption = ...;
var result = multiplayerOption.GetOptionFromOptionType(optionType, multiplayerOptionsAccessMode.CurrentMapOptions);
```

### OnGameTypeChanged
`public void OnGameTypeChanged(MultiplayerOptionsAccessMode mode = MultiplayerOptionsAccessMode.CurrentMapOptions)`

**Purpose:** Invoked when the game type changed event is raised.

```csharp
// Obtain an instance of MultiplayerOption from the subsystem API first
MultiplayerOption multiplayerOption = ...;
multiplayerOption.OnGameTypeChanged(multiplayerOptionsAccessMode.CurrentMapOptions);
```

### InitializeNextAndDefaultOptionContainers
`public void InitializeNextAndDefaultOptionContainers()`

**Purpose:** Prepares the resources, state, or bindings required by next and default option containers.

```csharp
// Obtain an instance of MultiplayerOption from the subsystem API first
MultiplayerOption multiplayerOption = ...;
multiplayerOption.InitializeNextAndDefaultOptionContainers();
```

### GetNumberOfPlayersForGameMode
`public int GetNumberOfPlayersForGameMode(string gameModeID)`

**Purpose:** Reads and returns the number of players for game mode value held by the this instance.

```csharp
// Obtain an instance of MultiplayerOption from the subsystem API first
MultiplayerOption multiplayerOption = ...;
var result = multiplayerOption.GetNumberOfPlayersForGameMode("example");
```

### GetRoundCountForGameMode
`public int GetRoundCountForGameMode(string gameModeID)`

**Purpose:** Reads and returns the round count for game mode value held by the this instance.

```csharp
// Obtain an instance of MultiplayerOption from the subsystem API first
MultiplayerOption multiplayerOption = ...;
var result = multiplayerOption.GetRoundCountForGameMode("example");
```

### GetRoundTimeLimitInMinutesForGameMode
`public int GetRoundTimeLimitInMinutesForGameMode(string gameModeID)`

**Purpose:** Reads and returns the round time limit in minutes for game mode value held by the this instance.

```csharp
// Obtain an instance of MultiplayerOption from the subsystem API first
MultiplayerOption multiplayerOption = ...;
var result = multiplayerOption.GetRoundTimeLimitInMinutesForGameMode("example");
```

### InitializeFromCommandList
`public void InitializeFromCommandList(List<string> arguments)`

**Purpose:** Prepares the resources, state, or bindings required by from command list.

```csharp
// Obtain an instance of MultiplayerOption from the subsystem API first
MultiplayerOption multiplayerOption = ...;
multiplayerOption.InitializeFromCommandList(arguments);
```

### ResetDefaultsToCurrent
`public void ResetDefaultsToCurrent()`

**Purpose:** Returns defaults to current to its default or initial condition.

```csharp
// Obtain an instance of MultiplayerOption from the subsystem API first
MultiplayerOption multiplayerOption = ...;
multiplayerOption.ResetDefaultsToCurrent();
```

### GetMultiplayerOptionsTextList
`public List<string> GetMultiplayerOptionsTextList(OptionType optionType)`

**Purpose:** Reads and returns the multiplayer options text list value held by the this instance.

```csharp
// Obtain an instance of MultiplayerOption from the subsystem API first
MultiplayerOption multiplayerOption = ...;
var result = multiplayerOption.GetMultiplayerOptionsTextList(optionType);
```

### GetMultiplayerOptionsList
`public List<string> GetMultiplayerOptionsList(OptionType optionType)`

**Purpose:** Reads and returns the multiplayer options list value held by the this instance.

```csharp
// Obtain an instance of MultiplayerOption from the subsystem API first
MultiplayerOption multiplayerOption = ...;
var result = multiplayerOption.GetMultiplayerOptionsList(optionType);
```

### InitializeAllOptionsFromNext
`public void InitializeAllOptionsFromNext()`

**Purpose:** Prepares the resources, state, or bindings required by all options from next.

```csharp
// Obtain an instance of MultiplayerOption from the subsystem API first
MultiplayerOption multiplayerOption = ...;
multiplayerOption.InitializeAllOptionsFromNext();
```

### GetMapList
`public MBList<string> GetMapList()`

**Purpose:** Reads and returns the map list value held by the this instance.

```csharp
// Obtain an instance of MultiplayerOption from the subsystem API first
MultiplayerOption multiplayerOption = ...;
var result = multiplayerOption.GetMapList();
```

### GetValueTextForOptionWithMultipleSelection
`public string GetValueTextForOptionWithMultipleSelection(OptionType optionType)`

**Purpose:** Reads and returns the value text for option with multiple selection value held by the this instance.

```csharp
// Obtain an instance of MultiplayerOption from the subsystem API first
MultiplayerOption multiplayerOption = ...;
var result = multiplayerOption.GetValueTextForOptionWithMultipleSelection(optionType);
```

### SetValueForOptionWithMultipleSelectionFromText
`public void SetValueForOptionWithMultipleSelectionFromText(OptionType optionType, string value)`

**Purpose:** Assigns a new value to value for option with multiple selection from text and updates the object's internal state.

```csharp
// Obtain an instance of MultiplayerOption from the subsystem API first
MultiplayerOption multiplayerOption = ...;
multiplayerOption.SetValueForOptionWithMultipleSelectionFromText(optionType, "example");
```

### TryGetOptionTypeFromString
`public static bool TryGetOptionTypeFromString(string optionTypeString, out OptionType optionType, out MultiplayerOptionsProperty optionAttribute)`

**Purpose:** Attempts to retrieve get option type from string, usually returning success through an out parameter.

```csharp
// Static call; no instance required
MultiplayerOption.TryGetOptionTypeFromString("example", optionType, optionAttribute);
```

## Usage Example

```csharp
MultiplayerOption.Create();
```

## See Also

- [Area Index](../)