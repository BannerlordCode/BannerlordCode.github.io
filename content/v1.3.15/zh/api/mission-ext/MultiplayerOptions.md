---
title: "MultiplayerOptions"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerOptions`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerOptions

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** `public class MultiplayerOptions`
**领域:** mission-ext

## 概述

`MultiplayerOptions` 位于 `TaleWorlds.MountAndBlade`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

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

**用途 / Purpose:** 处理 `release` 相关逻辑。

### GetOptionFromOptionType
`public MultiplayerOptions.MultiplayerOption GetOptionFromOptionType(MultiplayerOptions.OptionType optionType, MultiplayerOptions.MultiplayerOptionsAccessMode mode = MultiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions)`

**用途 / Purpose:** 获取 `option from option type` 的当前值。

### OnGameTypeChanged
`public void OnGameTypeChanged(MultiplayerOptions.MultiplayerOptionsAccessMode mode = MultiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions)`

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
`public List<string> GetMultiplayerOptionsTextList(MultiplayerOptions.OptionType optionType)`

**用途 / Purpose:** 获取 `multiplayer options text list` 的当前值。

### GetMultiplayerOptionsList
`public List<string> GetMultiplayerOptionsList(MultiplayerOptions.OptionType optionType)`

**用途 / Purpose:** 获取 `multiplayer options list` 的当前值。

### InitializeAllOptionsFromNext
`public void InitializeAllOptionsFromNext()`

**用途 / Purpose:** 初始化 `all options from next` 的状态、资源或绑定。

### GetMapList
`public MBList<string> GetMapList()`

**用途 / Purpose:** 获取 `map list` 的当前值。

### GetValueTextForOptionWithMultipleSelection
`public string GetValueTextForOptionWithMultipleSelection(MultiplayerOptions.OptionType optionType)`

**用途 / Purpose:** 获取 `value text for option with multiple selection` 的当前值。

### SetValueForOptionWithMultipleSelectionFromText
`public void SetValueForOptionWithMultipleSelectionFromText(MultiplayerOptions.OptionType optionType, string value)`

**用途 / Purpose:** 设置 `value for option with multiple selection from text` 的值或状态。

### TryGetOptionTypeFromString
`public static bool TryGetOptionTypeFromString(string optionTypeString, out MultiplayerOptions.OptionType optionType, out MultiplayerOptionsProperty optionAttribute)`

**用途 / Purpose:** 尝试获取 `get option type from string`，通常以 out 参数返回结果。

### CreateMultiplayerOption
`public static MultiplayerOptions.MultiplayerOption CreateMultiplayerOption(MultiplayerOptions.OptionType optionType)`

**用途 / Purpose:** 创建一个 `multiplayer option` 实例或对象。

### CopyMultiplayerOption
`public static MultiplayerOptions.MultiplayerOption CopyMultiplayerOption(MultiplayerOptions.MultiplayerOption option)`

**用途 / Purpose:** 处理 `copy multiplayer option` 相关逻辑。

### UpdateValue
`public MultiplayerOptions.MultiplayerOption UpdateValue(bool value)`

**用途 / Purpose:** 更新 `value` 的状态或数据。

### UpdateValue
`public MultiplayerOptions.MultiplayerOption UpdateValue(int value)`

**用途 / Purpose:** 更新 `value` 的状态或数据。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
MultiplayerOptions.Release();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
