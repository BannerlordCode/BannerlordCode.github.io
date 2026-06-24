<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerOptions`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerOptions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerOptions`
**Area:** mission-ext

## Overview

`MultiplayerOptions` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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

**Purpose:** Handles logic related to `release`.

### GetOptionFromOptionType
`public MultiplayerOptions.MultiplayerOption GetOptionFromOptionType(MultiplayerOptions.OptionType optionType, MultiplayerOptions.MultiplayerOptionsAccessMode mode = MultiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions)`

**Purpose:** Gets the current value of `option from option type`.

### OnGameTypeChanged
`public void OnGameTypeChanged(MultiplayerOptions.MultiplayerOptionsAccessMode mode = MultiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions)`

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
`public List<string> GetMultiplayerOptionsTextList(MultiplayerOptions.OptionType optionType)`

**Purpose:** Gets the current value of `multiplayer options text list`.

### GetMultiplayerOptionsList
`public List<string> GetMultiplayerOptionsList(MultiplayerOptions.OptionType optionType)`

**Purpose:** Gets the current value of `multiplayer options list`.

### InitializeAllOptionsFromNext
`public void InitializeAllOptionsFromNext()`

**Purpose:** Initializes the state, resources, or bindings for `all options from next`.

### GetMapList
`public MBList<string> GetMapList()`

**Purpose:** Gets the current value of `map list`.

### GetValueTextForOptionWithMultipleSelection
`public string GetValueTextForOptionWithMultipleSelection(MultiplayerOptions.OptionType optionType)`

**Purpose:** Gets the current value of `value text for option with multiple selection`.

### SetValueForOptionWithMultipleSelectionFromText
`public void SetValueForOptionWithMultipleSelectionFromText(MultiplayerOptions.OptionType optionType, string value)`

**Purpose:** Sets the value or state of `value for option with multiple selection from text`.

### TryGetOptionTypeFromString
`public static bool TryGetOptionTypeFromString(string optionTypeString, out MultiplayerOptions.OptionType optionType, out MultiplayerOptionsProperty optionAttribute)`

**Purpose:** Attempts to get `get option type from string`, usually returning the result in an out parameter.

### CreateMultiplayerOption
`public static MultiplayerOptions.MultiplayerOption CreateMultiplayerOption(MultiplayerOptions.OptionType optionType)`

**Purpose:** Creates a new `multiplayer option` instance or object.

### CopyMultiplayerOption
`public static MultiplayerOptions.MultiplayerOption CopyMultiplayerOption(MultiplayerOptions.MultiplayerOption option)`

**Purpose:** Handles logic related to `copy multiplayer option`.

### UpdateValue
`public MultiplayerOptions.MultiplayerOption UpdateValue(bool value)`

**Purpose:** Updates the state or data of `value`.

### UpdateValue
`public MultiplayerOptions.MultiplayerOption UpdateValue(int value)`

**Purpose:** Updates the state or data of `value`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
MultiplayerOptions.Release();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
