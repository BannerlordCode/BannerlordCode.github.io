---
title: "MultiplayerOptions"
description: "Auto-generated class reference for MultiplayerOptions."
---
# MultiplayerOptions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerOptions`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/MultiplayerOptions.cs`

## Overview

`MultiplayerOptions` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Instance` | `public static MultiplayerOptions Instance { get; }` |
| `Invalid` | `public static MultiplayerOptions.MultiplayerOption.IntegerValue Invalid { get; }` |
| `IsValid` | `public bool IsValid { get; }` |
| `Value` | `public int Value { get; }` |
| `Invalid` | `public static MultiplayerOptions.MultiplayerOption.StringValue Invalid { get; }` |
| `IsValid` | `public bool IsValid { get; }` |
| `Value` | `public string Value { get; }` |

## Key Methods

### Release
`public static void Release()`

**Purpose:** Executes the Release logic.

```csharp
// Static call; no instance required
MultiplayerOptions.Release();
```

### GetOptionFromOptionType
`public MultiplayerOptions.MultiplayerOption GetOptionFromOptionType(MultiplayerOptions.OptionType optionType, MultiplayerOptions.MultiplayerOptionsAccessMode mode = MultiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions)`

**Purpose:** Reads and returns the option from option type value held by the this instance.

```csharp
// Obtain an instance of MultiplayerOptions from the subsystem API first
MultiplayerOptions multiplayerOptions = ...;
var result = multiplayerOptions.GetOptionFromOptionType(optionType, multiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions);
```

### OnGameTypeChanged
`public void OnGameTypeChanged(MultiplayerOptions.MultiplayerOptionsAccessMode mode = MultiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions)`

**Purpose:** Invoked when the game type changed event is raised.

```csharp
// Obtain an instance of MultiplayerOptions from the subsystem API first
MultiplayerOptions multiplayerOptions = ...;
multiplayerOptions.OnGameTypeChanged(multiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions);
```

### InitializeNextAndDefaultOptionContainers
`public void InitializeNextAndDefaultOptionContainers()`

**Purpose:** Prepares the resources, state, or bindings required by next and default option containers.

```csharp
// Obtain an instance of MultiplayerOptions from the subsystem API first
MultiplayerOptions multiplayerOptions = ...;
multiplayerOptions.InitializeNextAndDefaultOptionContainers();
```

### GetNumberOfPlayersForGameMode
`public int GetNumberOfPlayersForGameMode(string gameModeID)`

**Purpose:** Reads and returns the number of players for game mode value held by the this instance.

```csharp
// Obtain an instance of MultiplayerOptions from the subsystem API first
MultiplayerOptions multiplayerOptions = ...;
var result = multiplayerOptions.GetNumberOfPlayersForGameMode("example");
```

### GetRoundCountForGameMode
`public int GetRoundCountForGameMode(string gameModeID)`

**Purpose:** Reads and returns the round count for game mode value held by the this instance.

```csharp
// Obtain an instance of MultiplayerOptions from the subsystem API first
MultiplayerOptions multiplayerOptions = ...;
var result = multiplayerOptions.GetRoundCountForGameMode("example");
```

### GetRoundTimeLimitInMinutesForGameMode
`public int GetRoundTimeLimitInMinutesForGameMode(string gameModeID)`

**Purpose:** Reads and returns the round time limit in minutes for game mode value held by the this instance.

```csharp
// Obtain an instance of MultiplayerOptions from the subsystem API first
MultiplayerOptions multiplayerOptions = ...;
var result = multiplayerOptions.GetRoundTimeLimitInMinutesForGameMode("example");
```

### InitializeFromCommandList
`public void InitializeFromCommandList(List<string> arguments)`

**Purpose:** Prepares the resources, state, or bindings required by from command list.

```csharp
// Obtain an instance of MultiplayerOptions from the subsystem API first
MultiplayerOptions multiplayerOptions = ...;
multiplayerOptions.InitializeFromCommandList(arguments);
```

### ResetDefaultsToCurrent
`public void ResetDefaultsToCurrent()`

**Purpose:** Returns defaults to current to its default or initial condition.

```csharp
// Obtain an instance of MultiplayerOptions from the subsystem API first
MultiplayerOptions multiplayerOptions = ...;
multiplayerOptions.ResetDefaultsToCurrent();
```

### GetMultiplayerOptionsTextList
`public List<string> GetMultiplayerOptionsTextList(MultiplayerOptions.OptionType optionType)`

**Purpose:** Reads and returns the multiplayer options text list value held by the this instance.

```csharp
// Obtain an instance of MultiplayerOptions from the subsystem API first
MultiplayerOptions multiplayerOptions = ...;
var result = multiplayerOptions.GetMultiplayerOptionsTextList(optionType);
```

### GetMultiplayerOptionsList
`public List<string> GetMultiplayerOptionsList(MultiplayerOptions.OptionType optionType)`

**Purpose:** Reads and returns the multiplayer options list value held by the this instance.

```csharp
// Obtain an instance of MultiplayerOptions from the subsystem API first
MultiplayerOptions multiplayerOptions = ...;
var result = multiplayerOptions.GetMultiplayerOptionsList(optionType);
```

### InitializeAllOptionsFromNext
`public void InitializeAllOptionsFromNext()`

**Purpose:** Prepares the resources, state, or bindings required by all options from next.

```csharp
// Obtain an instance of MultiplayerOptions from the subsystem API first
MultiplayerOptions multiplayerOptions = ...;
multiplayerOptions.InitializeAllOptionsFromNext();
```

### GetMapList
`public MBList<string> GetMapList()`

**Purpose:** Reads and returns the map list value held by the this instance.

```csharp
// Obtain an instance of MultiplayerOptions from the subsystem API first
MultiplayerOptions multiplayerOptions = ...;
var result = multiplayerOptions.GetMapList();
```

### GetValueTextForOptionWithMultipleSelection
`public string GetValueTextForOptionWithMultipleSelection(MultiplayerOptions.OptionType optionType)`

**Purpose:** Reads and returns the value text for option with multiple selection value held by the this instance.

```csharp
// Obtain an instance of MultiplayerOptions from the subsystem API first
MultiplayerOptions multiplayerOptions = ...;
var result = multiplayerOptions.GetValueTextForOptionWithMultipleSelection(optionType);
```

### SetValueForOptionWithMultipleSelectionFromText
`public void SetValueForOptionWithMultipleSelectionFromText(MultiplayerOptions.OptionType optionType, string value)`

**Purpose:** Assigns a new value to value for option with multiple selection from text and updates the object's internal state.

```csharp
// Obtain an instance of MultiplayerOptions from the subsystem API first
MultiplayerOptions multiplayerOptions = ...;
multiplayerOptions.SetValueForOptionWithMultipleSelectionFromText(optionType, "example");
```

### TryGetOptionTypeFromString
`public static bool TryGetOptionTypeFromString(string optionTypeString, out MultiplayerOptions.OptionType optionType, out MultiplayerOptionsProperty optionAttribute)`

**Purpose:** Attempts to retrieve get option type from string, usually returning success through an out parameter.

```csharp
// Static call; no instance required
MultiplayerOptions.TryGetOptionTypeFromString("example", optionType, optionAttribute);
```

### CreateMultiplayerOption
`public static MultiplayerOptions.MultiplayerOption CreateMultiplayerOption(MultiplayerOptions.OptionType optionType)`

**Purpose:** Constructs a new multiplayer option entity and returns it to the caller.

```csharp
// Static call; no instance required
MultiplayerOptions.CreateMultiplayerOption(optionType);
```

### CopyMultiplayerOption
`public static MultiplayerOptions.MultiplayerOption CopyMultiplayerOption(MultiplayerOptions.MultiplayerOption option)`

**Purpose:** Copies the multiplayer option state of the this instance to a target.

```csharp
// Static call; no instance required
MultiplayerOptions.CopyMultiplayerOption(option);
```

### UpdateValue
`public MultiplayerOptions.MultiplayerOption UpdateValue(bool value)`

**Purpose:** Recalculates and stores the latest representation of value.

```csharp
// Obtain an instance of MultiplayerOptions from the subsystem API first
MultiplayerOptions multiplayerOptions = ...;
var result = multiplayerOptions.UpdateValue(false);
```

### UpdateValue
`public MultiplayerOptions.MultiplayerOption UpdateValue(int value)`

**Purpose:** Recalculates and stores the latest representation of value.

```csharp
// Obtain an instance of MultiplayerOptions from the subsystem API first
MultiplayerOptions multiplayerOptions = ...;
var result = multiplayerOptions.UpdateValue(0);
```

### UpdateValue
`public MultiplayerOptions.MultiplayerOption UpdateValue(string value)`

**Purpose:** Recalculates and stores the latest representation of value.

```csharp
// Obtain an instance of MultiplayerOptions from the subsystem API first
MultiplayerOptions multiplayerOptions = ...;
var result = multiplayerOptions.UpdateValue("example");
```

### GetValue
`public void GetValue(out bool value)`

**Purpose:** Reads and returns the value value held by the this instance.

```csharp
// Obtain an instance of MultiplayerOptions from the subsystem API first
MultiplayerOptions multiplayerOptions = ...;
multiplayerOptions.GetValue(value);
```

### GetValue
`public void GetValue(out int value)`

**Purpose:** Reads and returns the value value held by the this instance.

```csharp
// Obtain an instance of MultiplayerOptions from the subsystem API first
MultiplayerOptions multiplayerOptions = ...;
multiplayerOptions.GetValue(value);
```

### GetValue
`public void GetValue(out string value)`

**Purpose:** Reads and returns the value value held by the this instance.

```csharp
// Obtain an instance of MultiplayerOptions from the subsystem API first
MultiplayerOptions multiplayerOptions = ...;
multiplayerOptions.GetValue(value);
```

### Create
`public static MultiplayerOptions.MultiplayerOption.IntegerValue Create()`

**Purpose:** Creates a new instance or related entity for the this instance.

```csharp
// Static call; no instance required
MultiplayerOptions.Create();
```

### UpdateValue
`public void UpdateValue(int value)`

**Purpose:** Recalculates and stores the latest representation of value.

```csharp
// Obtain an instance of MultiplayerOptions from the subsystem API first
MultiplayerOptions multiplayerOptions = ...;
multiplayerOptions.UpdateValue(0);
```

### Create
`public static MultiplayerOptions.MultiplayerOption.StringValue Create()`

**Purpose:** Creates a new instance or related entity for the this instance.

```csharp
// Static call; no instance required
MultiplayerOptions.Create();
```

### UpdateValue
`public void UpdateValue(string value)`

**Purpose:** Recalculates and stores the latest representation of value.

```csharp
// Obtain an instance of MultiplayerOptions from the subsystem API first
MultiplayerOptions multiplayerOptions = ...;
multiplayerOptions.UpdateValue("example");
```

### GetOptionFromOptionType
`public MultiplayerOptions.MultiplayerOption GetOptionFromOptionType(MultiplayerOptions.OptionType optionType)`

**Purpose:** Reads and returns the option from option type value held by the this instance.

```csharp
// Obtain an instance of MultiplayerOptions from the subsystem API first
MultiplayerOptions multiplayerOptions = ...;
var result = multiplayerOptions.GetOptionFromOptionType(optionType);
```

### CreateOption
`public void CreateOption(MultiplayerOptions.OptionType optionType)`

**Purpose:** Constructs a new option entity and returns it to the caller.

```csharp
// Obtain an instance of MultiplayerOptions from the subsystem API first
MultiplayerOptions multiplayerOptions = ...;
multiplayerOptions.CreateOption(optionType);
```

### UpdateOptionValue
`public void UpdateOptionValue(MultiplayerOptions.OptionType optionType, int value)`

**Purpose:** Recalculates and stores the latest representation of option value.

```csharp
// Obtain an instance of MultiplayerOptions from the subsystem API first
MultiplayerOptions multiplayerOptions = ...;
multiplayerOptions.UpdateOptionValue(optionType, 0);
```

### UpdateOptionValue
`public void UpdateOptionValue(MultiplayerOptions.OptionType optionType, string value)`

**Purpose:** Recalculates and stores the latest representation of option value.

```csharp
// Obtain an instance of MultiplayerOptions from the subsystem API first
MultiplayerOptions multiplayerOptions = ...;
multiplayerOptions.UpdateOptionValue(optionType, "example");
```

### UpdateOptionValue
`public void UpdateOptionValue(MultiplayerOptions.OptionType optionType, bool value)`

**Purpose:** Recalculates and stores the latest representation of option value.

```csharp
// Obtain an instance of MultiplayerOptions from the subsystem API first
MultiplayerOptions multiplayerOptions = ...;
multiplayerOptions.UpdateOptionValue(optionType, false);
```

### CopyAllValuesTo
`public void CopyAllValuesTo(MultiplayerOptions.MultiplayerOptionsContainer other)`

**Purpose:** Copies the all values to state of the this instance to a target.

```csharp
// Obtain an instance of MultiplayerOptions from the subsystem API first
MultiplayerOptions multiplayerOptions = ...;
multiplayerOptions.CopyAllValuesTo(other);
```

## Usage Example

```csharp
MultiplayerOptions.Release();
```

## See Also

- [Area Index](../)