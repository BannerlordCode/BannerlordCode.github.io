<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerOption`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerOption

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `MultiplayerOption` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


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

```csharp
public static void Release()
```

### GetOptionFromOptionType

```csharp
public MultiplayerOptions.MultiplayerOption GetOptionFromOptionType(MultiplayerOptions.OptionType optionType, MultiplayerOptions.MultiplayerOptionsAccessMode mode = MultiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions)
```

### OnGameTypeChanged

```csharp
public void OnGameTypeChanged(MultiplayerOptions.MultiplayerOptionsAccessMode mode = MultiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions)
```

### InitializeNextAndDefaultOptionContainers

```csharp
public void InitializeNextAndDefaultOptionContainers()
```

### GetNumberOfPlayersForGameMode

```csharp
public int GetNumberOfPlayersForGameMode(string gameModeID)
```

### GetRoundCountForGameMode

```csharp
public int GetRoundCountForGameMode(string gameModeID)
```

### GetRoundTimeLimitInMinutesForGameMode

```csharp
public int GetRoundTimeLimitInMinutesForGameMode(string gameModeID)
```

### InitializeFromCommandList

```csharp
public void InitializeFromCommandList(List<string> arguments)
```

### ResetDefaultsToCurrent

```csharp
public void ResetDefaultsToCurrent()
```

### GetMultiplayerOptionsTextList

```csharp
public List<string> GetMultiplayerOptionsTextList(MultiplayerOptions.OptionType optionType)
```

### GetMultiplayerOptionsList

```csharp
public List<string> GetMultiplayerOptionsList(MultiplayerOptions.OptionType optionType)
```

### InitializeAllOptionsFromNext

```csharp
public void InitializeAllOptionsFromNext()
```

### GetMapList

```csharp
public MBList<string> GetMapList()
```

### GetValueTextForOptionWithMultipleSelection

```csharp
public string GetValueTextForOptionWithMultipleSelection(MultiplayerOptions.OptionType optionType)
```

### SetValueForOptionWithMultipleSelectionFromText

```csharp
public void SetValueForOptionWithMultipleSelectionFromText(MultiplayerOptions.OptionType optionType, string value)
```

### TryGetOptionTypeFromString

```csharp
public static bool TryGetOptionTypeFromString(string optionTypeString, out MultiplayerOptions.OptionType optionType, out MultiplayerOptionsProperty optionAttribute)
```

### CreateMultiplayerOption

```csharp
public static MultiplayerOptions.MultiplayerOption CreateMultiplayerOption(MultiplayerOptions.OptionType optionType)
```

### CopyMultiplayerOption

```csharp
public static MultiplayerOptions.MultiplayerOption CopyMultiplayerOption(MultiplayerOptions.MultiplayerOption option)
```

### UpdateValue

```csharp
public MultiplayerOptions.MultiplayerOption UpdateValue(bool value)
```

### UpdateValue

```csharp
public MultiplayerOptions.MultiplayerOption UpdateValue(int value)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)