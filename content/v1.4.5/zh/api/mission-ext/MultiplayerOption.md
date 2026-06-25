---
title: "MultiplayerOption"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerOption`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerOption

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerOption`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MultiplayerOptions.cs`

## 概述

`MultiplayerOption` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsValid` | `public bool IsValid { get; }` |
| `Value` | `public int Value { get; }` |
| `IsValid` | `public bool IsValid { get; }` |
| `Value` | `public string Value { get; }` |

## 主要方法

### Create
`public static IntegerValue Create()`

**用途 / Purpose:** 创建一个 `create` 实例或对象。

### UpdateValue
`public void UpdateValue(int value)`

**用途 / Purpose:** 更新 `value` 的状态或数据。

### Create
`public static StringValue Create()`

**用途 / Purpose:** 创建一个 `create` 实例或对象。

### UpdateValue
`public void UpdateValue(string value)`

**用途 / Purpose:** 更新 `value` 的状态或数据。

### CreateMultiplayerOption
`public static MultiplayerOption CreateMultiplayerOption(OptionType optionType)`

**用途 / Purpose:** 创建一个 `multiplayer option` 实例或对象。

### CopyMultiplayerOption
`public static MultiplayerOption CopyMultiplayerOption(MultiplayerOption option)`

**用途 / Purpose:** 处理 `copy multiplayer option` 相关逻辑。

### UpdateValue
`public MultiplayerOption UpdateValue(bool value)`

**用途 / Purpose:** 更新 `value` 的状态或数据。

### UpdateValue
`public MultiplayerOption UpdateValue(int value)`

**用途 / Purpose:** 更新 `value` 的状态或数据。

### UpdateValue
`public MultiplayerOption UpdateValue(string value)`

**用途 / Purpose:** 更新 `value` 的状态或数据。

### GetValue
`public void GetValue(out bool value)`

**用途 / Purpose:** 获取 `value` 的当前值。

### GetValue
`public void GetValue(out int value)`

**用途 / Purpose:** 获取 `value` 的当前值。

### GetValue
`public void GetValue(out string value)`

**用途 / Purpose:** 获取 `value` 的当前值。

### GetOptionFromOptionType
`public MultiplayerOption GetOptionFromOptionType(OptionType optionType)`

**用途 / Purpose:** 获取 `option from option type` 的当前值。

### CreateOption
`public void CreateOption(OptionType optionType)`

**用途 / Purpose:** 创建一个 `option` 实例或对象。

### UpdateOptionValue
`public void UpdateOptionValue(OptionType optionType, int value)`

**用途 / Purpose:** 更新 `option value` 的状态或数据。

### UpdateOptionValue
`public void UpdateOptionValue(OptionType optionType, string value)`

**用途 / Purpose:** 更新 `option value` 的状态或数据。

### UpdateOptionValue
`public void UpdateOptionValue(OptionType optionType, bool value)`

**用途 / Purpose:** 更新 `option value` 的状态或数据。

### CopyAllValuesTo
`public void CopyAllValuesTo(MultiplayerOptionsContainer other)`

**用途 / Purpose:** 处理 `copy all values to` 相关逻辑。

### Release
`public static void Release()`

**用途 / Purpose:** 处理 `release` 相关逻辑。

### GetOptionFromOptionType
`public MultiplayerOption GetOptionFromOptionType(OptionType optionType, MultiplayerOptionsAccessMode mode = MultiplayerOptionsAccessMode.CurrentMapOptions)`

**用途 / Purpose:** 获取 `option from option type` 的当前值。

### OnGameTypeChanged
`public void OnGameTypeChanged(MultiplayerOptionsAccessMode mode = MultiplayerOptionsAccessMode.CurrentMapOptions)`

**用途 / Purpose:** 当 `game type changed` 事件触发时调用此方法。

### InitializeNextAndDefaultOptionContainers
`public void InitializeNextAndDefaultOptionContainers()`

**用途 / Purpose:** 初始化 `next and default option containers` 的状态、资源或绑定。

### GetNumberOfPlayersForGameMode
`public int GetNumberOfPlayersForGameMode(string gameModeID)`

**用途 / Purpose:** 获取 `number of players for game mode` 的当前值。

### GetRoundCountForGameMode
`public int GetRoundCountForGameMode(string gameModeID)`

**用途 / Purpose:** 获取 `round count for game mode` 的当前值。

### GetRoundTimeLimitInMinutesForGameMode
`public int GetRoundTimeLimitInMinutesForGameMode(string gameModeID)`

**用途 / Purpose:** 获取 `round time limit in minutes for game mode` 的当前值。

### InitializeFromCommandList
`public void InitializeFromCommandList(List<string> arguments)`

**用途 / Purpose:** 初始化 `from command list` 的状态、资源或绑定。

### ResetDefaultsToCurrent
`public void ResetDefaultsToCurrent()`

**用途 / Purpose:** 将 `defaults to current` 重置为初始状态。

### GetMultiplayerOptionsTextList
`public List<string> GetMultiplayerOptionsTextList(OptionType optionType)`

**用途 / Purpose:** 获取 `multiplayer options text list` 的当前值。

### GetMultiplayerOptionsList
`public List<string> GetMultiplayerOptionsList(OptionType optionType)`

**用途 / Purpose:** 获取 `multiplayer options list` 的当前值。

### InitializeAllOptionsFromNext
`public void InitializeAllOptionsFromNext()`

**用途 / Purpose:** 初始化 `all options from next` 的状态、资源或绑定。

### GetMapList
`public MBList<string> GetMapList()`

**用途 / Purpose:** 获取 `map list` 的当前值。

### GetValueTextForOptionWithMultipleSelection
`public string GetValueTextForOptionWithMultipleSelection(OptionType optionType)`

**用途 / Purpose:** 获取 `value text for option with multiple selection` 的当前值。

### SetValueForOptionWithMultipleSelectionFromText
`public void SetValueForOptionWithMultipleSelectionFromText(OptionType optionType, string value)`

**用途 / Purpose:** 设置 `value for option with multiple selection from text` 的值或状态。

### TryGetOptionTypeFromString
`public static bool TryGetOptionTypeFromString(string optionTypeString, out OptionType optionType, out MultiplayerOptionsProperty optionAttribute)`

**用途 / Purpose:** 尝试获取 `get option type from string`，通常以 out 参数返回结果。

## 使用示例

```csharp
MultiplayerOption.Create();
```

## 参见

- [完整类目录](../catalog)