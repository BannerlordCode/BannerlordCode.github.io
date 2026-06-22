<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerOptions`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerOptions

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`MultiplayerOptions` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Instance` | `public static MultiplayerOptions Instance { get; }` |
| `Invalid` | `public static MultiplayerOptions.MultiplayerOption.IntegerValue Invalid { get; }` |
| `IsValid` | `public bool IsValid { get; }` |
| `Value` | `public int Value { get; }` |
| `Invalid` | `public static MultiplayerOptions.MultiplayerOption.StringValue Invalid { get; }` |
| `IsValid` | `public bool IsValid { get; }` |
| `Value` | `public string Value { get; }` |


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)