---
title: "MultiplayerOption"
description: "MultiplayerOption 的自动生成类参考。"
---
# MultiplayerOption

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerOption`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/MultiplayerOptions.cs`

## 概述

`MultiplayerOption` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

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
`public static void Release()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
MultiplayerOption.Release();
```

### GetOptionFromOptionType
`public MultiplayerOptions.MultiplayerOption GetOptionFromOptionType(MultiplayerOptions.OptionType optionType, MultiplayerOptions.MultiplayerOptionsAccessMode mode = MultiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions)`

**用途 / Purpose:** 读取并返回当前对象中 「option from option type」 的结果。

```csharp
// 先通过子系统 API 拿到 MultiplayerOption 实例
MultiplayerOption multiplayerOption = ...;
var result = multiplayerOption.GetOptionFromOptionType(optionType, multiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions);
```

### OnGameTypeChanged
`public void OnGameTypeChanged(MultiplayerOptions.MultiplayerOptionsAccessMode mode = MultiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions)`

**用途 / Purpose:** 在 「game type changed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MultiplayerOption 实例
MultiplayerOption multiplayerOption = ...;
multiplayerOption.OnGameTypeChanged(multiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions);
```

### InitializeNextAndDefaultOptionContainers
`public void InitializeNextAndDefaultOptionContainers()`

**用途 / Purpose:** 为 「next and default option containers」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 MultiplayerOption 实例
MultiplayerOption multiplayerOption = ...;
multiplayerOption.InitializeNextAndDefaultOptionContainers();
```

### GetNumberOfPlayersForGameMode
`public int GetNumberOfPlayersForGameMode(string gameModeID)`

**用途 / Purpose:** 读取并返回当前对象中 「number of players for game mode」 的结果。

```csharp
// 先通过子系统 API 拿到 MultiplayerOption 实例
MultiplayerOption multiplayerOption = ...;
var result = multiplayerOption.GetNumberOfPlayersForGameMode("example");
```

### GetRoundCountForGameMode
`public int GetRoundCountForGameMode(string gameModeID)`

**用途 / Purpose:** 读取并返回当前对象中 「round count for game mode」 的结果。

```csharp
// 先通过子系统 API 拿到 MultiplayerOption 实例
MultiplayerOption multiplayerOption = ...;
var result = multiplayerOption.GetRoundCountForGameMode("example");
```

### GetRoundTimeLimitInMinutesForGameMode
`public int GetRoundTimeLimitInMinutesForGameMode(string gameModeID)`

**用途 / Purpose:** 读取并返回当前对象中 「round time limit in minutes for game mode」 的结果。

```csharp
// 先通过子系统 API 拿到 MultiplayerOption 实例
MultiplayerOption multiplayerOption = ...;
var result = multiplayerOption.GetRoundTimeLimitInMinutesForGameMode("example");
```

### InitializeFromCommandList
`public void InitializeFromCommandList(List<string> arguments)`

**用途 / Purpose:** 为 「from command list」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 MultiplayerOption 实例
MultiplayerOption multiplayerOption = ...;
multiplayerOption.InitializeFromCommandList(arguments);
```

### ResetDefaultsToCurrent
`public void ResetDefaultsToCurrent()`

**用途 / Purpose:** 将 「defaults to current」 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 MultiplayerOption 实例
MultiplayerOption multiplayerOption = ...;
multiplayerOption.ResetDefaultsToCurrent();
```

### GetMultiplayerOptionsTextList
`public List<string> GetMultiplayerOptionsTextList(MultiplayerOptions.OptionType optionType)`

**用途 / Purpose:** 读取并返回当前对象中 「multiplayer options text list」 的结果。

```csharp
// 先通过子系统 API 拿到 MultiplayerOption 实例
MultiplayerOption multiplayerOption = ...;
var result = multiplayerOption.GetMultiplayerOptionsTextList(optionType);
```

### GetMultiplayerOptionsList
`public List<string> GetMultiplayerOptionsList(MultiplayerOptions.OptionType optionType)`

**用途 / Purpose:** 读取并返回当前对象中 「multiplayer options list」 的结果。

```csharp
// 先通过子系统 API 拿到 MultiplayerOption 实例
MultiplayerOption multiplayerOption = ...;
var result = multiplayerOption.GetMultiplayerOptionsList(optionType);
```

### InitializeAllOptionsFromNext
`public void InitializeAllOptionsFromNext()`

**用途 / Purpose:** 为 「all options from next」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 MultiplayerOption 实例
MultiplayerOption multiplayerOption = ...;
multiplayerOption.InitializeAllOptionsFromNext();
```

### GetMapList
`public MBList<string> GetMapList()`

**用途 / Purpose:** 读取并返回当前对象中 「map list」 的结果。

```csharp
// 先通过子系统 API 拿到 MultiplayerOption 实例
MultiplayerOption multiplayerOption = ...;
var result = multiplayerOption.GetMapList();
```

### GetValueTextForOptionWithMultipleSelection
`public string GetValueTextForOptionWithMultipleSelection(MultiplayerOptions.OptionType optionType)`

**用途 / Purpose:** 读取并返回当前对象中 「value text for option with multiple selection」 的结果。

```csharp
// 先通过子系统 API 拿到 MultiplayerOption 实例
MultiplayerOption multiplayerOption = ...;
var result = multiplayerOption.GetValueTextForOptionWithMultipleSelection(optionType);
```

### SetValueForOptionWithMultipleSelectionFromText
`public void SetValueForOptionWithMultipleSelectionFromText(MultiplayerOptions.OptionType optionType, string value)`

**用途 / Purpose:** 为 「value for option with multiple selection from text」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MultiplayerOption 实例
MultiplayerOption multiplayerOption = ...;
multiplayerOption.SetValueForOptionWithMultipleSelectionFromText(optionType, "example");
```

### TryGetOptionTypeFromString
`public static bool TryGetOptionTypeFromString(string optionTypeString, out MultiplayerOptions.OptionType optionType, out MultiplayerOptionsProperty optionAttribute)`

**用途 / Purpose:** 尝试获取 「get option type from string」 的值，通常通过 out 参数返回是否成功。

```csharp
// 静态调用，不需要实例
MultiplayerOption.TryGetOptionTypeFromString("example", optionType, optionAttribute);
```

### CreateMultiplayerOption
`public static MultiplayerOptions.MultiplayerOption CreateMultiplayerOption(MultiplayerOptions.OptionType optionType)`

**用途 / Purpose:** 构建一个新的 「multiplayer option」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
MultiplayerOption.CreateMultiplayerOption(optionType);
```

### CopyMultiplayerOption
`public static MultiplayerOptions.MultiplayerOption CopyMultiplayerOption(MultiplayerOptions.MultiplayerOption option)`

**用途 / Purpose:** 把当前对象的「multiplayer option」状态复制到目标对象。

```csharp
// 静态调用，不需要实例
MultiplayerOption.CopyMultiplayerOption(option);
```

### UpdateValue
`public MultiplayerOptions.MultiplayerOption UpdateValue(bool value)`

**用途 / Purpose:** 重新计算并更新 「value」 的最新表示。

```csharp
// 先通过子系统 API 拿到 MultiplayerOption 实例
MultiplayerOption multiplayerOption = ...;
var result = multiplayerOption.UpdateValue(false);
```

### UpdateValue
`public MultiplayerOptions.MultiplayerOption UpdateValue(int value)`

**用途 / Purpose:** 重新计算并更新 「value」 的最新表示。

```csharp
// 先通过子系统 API 拿到 MultiplayerOption 实例
MultiplayerOption multiplayerOption = ...;
var result = multiplayerOption.UpdateValue(0);
```

### UpdateValue
`public MultiplayerOptions.MultiplayerOption UpdateValue(string value)`

**用途 / Purpose:** 重新计算并更新 「value」 的最新表示。

```csharp
// 先通过子系统 API 拿到 MultiplayerOption 实例
MultiplayerOption multiplayerOption = ...;
var result = multiplayerOption.UpdateValue("example");
```

### GetValue
`public void GetValue(out bool value)`

**用途 / Purpose:** 读取并返回当前对象中 「value」 的结果。

```csharp
// 先通过子系统 API 拿到 MultiplayerOption 实例
MultiplayerOption multiplayerOption = ...;
multiplayerOption.GetValue(value);
```

### GetValue
`public void GetValue(out int value)`

**用途 / Purpose:** 读取并返回当前对象中 「value」 的结果。

```csharp
// 先通过子系统 API 拿到 MultiplayerOption 实例
MultiplayerOption multiplayerOption = ...;
multiplayerOption.GetValue(value);
```

### GetValue
`public void GetValue(out string value)`

**用途 / Purpose:** 读取并返回当前对象中 「value」 的结果。

```csharp
// 先通过子系统 API 拿到 MultiplayerOption 实例
MultiplayerOption multiplayerOption = ...;
multiplayerOption.GetValue(value);
```

### Create
`public static MultiplayerOptions.MultiplayerOption.IntegerValue Create()`

**用途 / Purpose:** 创建当前对象的新实例或相关实体。

```csharp
// 静态调用，不需要实例
MultiplayerOption.Create();
```

### UpdateValue
`public void UpdateValue(int value)`

**用途 / Purpose:** 重新计算并更新 「value」 的最新表示。

```csharp
// 先通过子系统 API 拿到 MultiplayerOption 实例
MultiplayerOption multiplayerOption = ...;
multiplayerOption.UpdateValue(0);
```

### Create
`public static MultiplayerOptions.MultiplayerOption.StringValue Create()`

**用途 / Purpose:** 创建当前对象的新实例或相关实体。

```csharp
// 静态调用，不需要实例
MultiplayerOption.Create();
```

### UpdateValue
`public void UpdateValue(string value)`

**用途 / Purpose:** 重新计算并更新 「value」 的最新表示。

```csharp
// 先通过子系统 API 拿到 MultiplayerOption 实例
MultiplayerOption multiplayerOption = ...;
multiplayerOption.UpdateValue("example");
```

### GetOptionFromOptionType
`public MultiplayerOptions.MultiplayerOption GetOptionFromOptionType(MultiplayerOptions.OptionType optionType)`

**用途 / Purpose:** 读取并返回当前对象中 「option from option type」 的结果。

```csharp
// 先通过子系统 API 拿到 MultiplayerOption 实例
MultiplayerOption multiplayerOption = ...;
var result = multiplayerOption.GetOptionFromOptionType(optionType);
```

### CreateOption
`public void CreateOption(MultiplayerOptions.OptionType optionType)`

**用途 / Purpose:** 构建一个新的 「option」 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 MultiplayerOption 实例
MultiplayerOption multiplayerOption = ...;
multiplayerOption.CreateOption(optionType);
```

### UpdateOptionValue
`public void UpdateOptionValue(MultiplayerOptions.OptionType optionType, int value)`

**用途 / Purpose:** 重新计算并更新 「option value」 的最新表示。

```csharp
// 先通过子系统 API 拿到 MultiplayerOption 实例
MultiplayerOption multiplayerOption = ...;
multiplayerOption.UpdateOptionValue(optionType, 0);
```

### UpdateOptionValue
`public void UpdateOptionValue(MultiplayerOptions.OptionType optionType, string value)`

**用途 / Purpose:** 重新计算并更新 「option value」 的最新表示。

```csharp
// 先通过子系统 API 拿到 MultiplayerOption 实例
MultiplayerOption multiplayerOption = ...;
multiplayerOption.UpdateOptionValue(optionType, "example");
```

### UpdateOptionValue
`public void UpdateOptionValue(MultiplayerOptions.OptionType optionType, bool value)`

**用途 / Purpose:** 重新计算并更新 「option value」 的最新表示。

```csharp
// 先通过子系统 API 拿到 MultiplayerOption 实例
MultiplayerOption multiplayerOption = ...;
multiplayerOption.UpdateOptionValue(optionType, false);
```

### CopyAllValuesTo
`public void CopyAllValuesTo(MultiplayerOptions.MultiplayerOptionsContainer other)`

**用途 / Purpose:** 把当前对象的「all values to」状态复制到目标对象。

```csharp
// 先通过子系统 API 拿到 MultiplayerOption 实例
MultiplayerOption multiplayerOption = ...;
multiplayerOption.CopyAllValuesTo(other);
```

## 使用示例

```csharp
MultiplayerOption.Release();
```

## 参见

- [本区域目录](../)