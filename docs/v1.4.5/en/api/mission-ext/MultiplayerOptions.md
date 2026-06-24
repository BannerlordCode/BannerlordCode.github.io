<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerOptions`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerOptions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerOptions`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MultiplayerOptions.cs`

## Overview

`MultiplayerOptions` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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

**Purpose:** Creates a new `create` instance or object.

### UpdateValue
`public void UpdateValue(int value)`

**Purpose:** Updates the state or data of `value`.

### Create
`public static StringValue Create()`

**Purpose:** Creates a new `create` instance or object.

### UpdateValue
`public void UpdateValue(string value)`

**Purpose:** Updates the state or data of `value`.

### CreateMultiplayerOption
`public static MultiplayerOption CreateMultiplayerOption(OptionType optionType)`

**Purpose:** Creates a new `multiplayer option` instance or object.

### CopyMultiplayerOption
`public static MultiplayerOption CopyMultiplayerOption(MultiplayerOption option)`

**Purpose:** Handles logic related to `copy multiplayer option`.

### UpdateValue
`public MultiplayerOption UpdateValue(bool value)`

**Purpose:** Updates the state or data of `value`.

### UpdateValue
`public MultiplayerOption UpdateValue(int value)`

**Purpose:** Updates the state or data of `value`.

### UpdateValue
`public MultiplayerOption UpdateValue(string value)`

**Purpose:** Updates the state or data of `value`.

### GetValue
`public void GetValue(out bool value)`

**Purpose:** Gets the current value of `value`.

### GetValue
`public void GetValue(out int value)`

**Purpose:** Gets the current value of `value`.

### GetValue
`public void GetValue(out string value)`

**Purpose:** Gets the current value of `value`.

### GetOptionFromOptionType
`public MultiplayerOption GetOptionFromOptionType(OptionType optionType)`

**Purpose:** Gets the current value of `option from option type`.

### CreateOption
`public void CreateOption(OptionType optionType)`

**Purpose:** Creates a new `option` instance or object.

### UpdateOptionValue
`public void UpdateOptionValue(OptionType optionType, int value)`

**Purpose:** Updates the state or data of `option value`.

### UpdateOptionValue
`public void UpdateOptionValue(OptionType optionType, string value)`

**Purpose:** Updates the state or data of `option value`.

### UpdateOptionValue
`public void UpdateOptionValue(OptionType optionType, bool value)`

**Purpose:** Updates the state or data of `option value`.

### CopyAllValuesTo
`public void CopyAllValuesTo(MultiplayerOptionsContainer other)`

**Purpose:** Handles logic related to `copy all values to`.

### Release
`public static void Release()`

**Purpose:** Handles logic related to `release`.

### GetOptionFromOptionType
`public MultiplayerOption GetOptionFromOptionType(OptionType optionType, MultiplayerOptionsAccessMode mode = MultiplayerOptionsAccessMode.CurrentMapOptions)`

**Purpose:** Gets the current value of `option from option type`.

### OnGameTypeChanged
`public void OnGameTypeChanged(MultiplayerOptionsAccessMode mode = MultiplayerOptionsAccessMode.CurrentMapOptions)`

**Purpose:** Called when the `game type changed` event is raised.

### InitializeNextAndDefaultOptionContainers
`public void InitializeNextAndDefaultOptionContainers()`

**Purpose:** Initializes the state, resources, or bindings for `next and default option containers`.

### GetNumberOfPlayersForGameMode
`public int GetNumberOfPlayersForGameMode(string gameModeID)`

**Purpose:** Gets the current value of `number of players for game mode`.

### GetRoundCountForGameMode
`public int GetRoundCountForGameMode(string gameModeID)`

**Purpose:** Gets the current value of `round count for game mode`.

### GetRoundTimeLimitInMinutesForGameMode
`public int GetRoundTimeLimitInMinutesForGameMode(string gameModeID)`

**Purpose:** Gets the current value of `round time limit in minutes for game mode`.

### InitializeFromCommandList
`public void InitializeFromCommandList(List<string> arguments)`

**Purpose:** Initializes the state, resources, or bindings for `from command list`.

### ResetDefaultsToCurrent
`public void ResetDefaultsToCurrent()`

**Purpose:** Resets `defaults to current` to its initial state.

### GetMultiplayerOptionsTextList
`public List<string> GetMultiplayerOptionsTextList(OptionType optionType)`

**Purpose:** Gets the current value of `multiplayer options text list`.

### GetMultiplayerOptionsList
`public List<string> GetMultiplayerOptionsList(OptionType optionType)`

**Purpose:** Gets the current value of `multiplayer options list`.

### InitializeAllOptionsFromNext
`public void InitializeAllOptionsFromNext()`

**Purpose:** Initializes the state, resources, or bindings for `all options from next`.

### GetMapList
`public MBList<string> GetMapList()`

**Purpose:** Gets the current value of `map list`.

### GetValueTextForOptionWithMultipleSelection
`public string GetValueTextForOptionWithMultipleSelection(OptionType optionType)`

**Purpose:** Gets the current value of `value text for option with multiple selection`.

### SetValueForOptionWithMultipleSelectionFromText
`public void SetValueForOptionWithMultipleSelectionFromText(OptionType optionType, string value)`

**Purpose:** Sets the value or state of `value for option with multiple selection from text`.

### TryGetOptionTypeFromString
`public static bool TryGetOptionTypeFromString(string optionTypeString, out OptionType optionType, out MultiplayerOptionsProperty optionAttribute)`

**Purpose:** Attempts to get `get option type from string`, usually returning the result in an out parameter.

## Usage Example

```csharp
MultiplayerOptions.Create();
```

## See Also

- [Complete Class Catalog](../catalog)