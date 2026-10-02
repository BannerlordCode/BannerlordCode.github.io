---
title: "MultiplayerOptions"
description: "MultiplayerOptions：TaleWorlds.MountAndBlade 的 public 类；公开成员 28 个（方法 16、属性 6、字段 0）。源文件 TaleWorlds.MountAndBlade/MultiplayerOptions.cs。"
---
# MultiplayerOptions

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MultiplayerOptions`
**File:** `TaleWorlds.MountAndBlade/MultiplayerOptions.cs`

## 概述

MultiplayerOptions 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/MultiplayerOptions.cs。它是一个 public 类，继承链为 MultiplayerOptions。public/protected 成员共 28 个：16 方法、6 属性、1 构造函数、5 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MultiplayerOptions 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 MultiplayerOptions。成员构成以方法为主（方法 16/28，属性 6/28），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/MultiplayerOptions.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Instance` | `public static MultiplayerOptions Instance` | 属性 |
| `MultiplayerOptions` | `public MultiplayerOptions()` | 构造函数 |
| `Release` | `public static void Release()` | 方法 |
| `GetOptionFromOptionType` | `public MultiplayerOptions.MultiplayerOption GetOptionFromOptionType(MultiplayerOptions.OptionType optionType, MultiplayerOptions.MultiplayerOptionsAccessMode mode = MultiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions)` | 方法 |
| `OnGameTypeChanged` | `public void OnGameTypeChanged(MultiplayerOptions.MultiplayerOptionsAccessMode mode = MultiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions)` | 方法 |
| `InitializeNextAndDefaultOptionContainers` | `public void InitializeNextAndDefaultOptionContainers()` | 方法 |
| `GetNumberOfPlayersForGameMode` | `public int GetNumberOfPlayersForGameMode(string gameModeID)` | 方法 |
| `GetRoundCountForGameMode` | `public int GetRoundCountForGameMode(string gameModeID)` | 方法 |
| `GetRoundTimeLimitInMinutesForGameMode` | `public int GetRoundTimeLimitInMinutesForGameMode(string gameModeID)` | 方法 |
| `InitializeFromCommandList` | `public void InitializeFromCommandList(List<string>arguments)` | 方法 |
| `ResetDefaultsToCurrent` | `public void ResetDefaultsToCurrent()` | 方法 |
| `List` | `public List<string>GetMultiplayerOptionsTextList(MultiplayerOptions.OptionType optionType)` | 方法 |
| `List` | `public List<string>GetMultiplayerOptionsList(MultiplayerOptions.OptionType optionType)` | 方法 |
| `InitializeAllOptionsFromNext` | `public void InitializeAllOptionsFromNext()` | 方法 |
| `MBList` | `public MBList<string>GetMapList()` | 方法 |
| `GetValueTextForOptionWithMultipleSelection` | `public string GetValueTextForOptionWithMultipleSelection(MultiplayerOptions.OptionType optionType)` | 方法 |
| `SetValueForOptionWithMultipleSelectionFromText` | `public void SetValueForOptionWithMultipleSelectionFromText(MultiplayerOptions.OptionType optionType, string value)` | 方法 |
| `TryGetOptionTypeFromString` | `public static bool TryGetOptionTypeFromString(string optionTypeString, out MultiplayerOptions.OptionType optionType, out MultiplayerOptionsProperty optionAttribute)` | 方法 |
| `MultiplayerOptionsAccessMode` | `public enum MultiplayerOptionsAccessMode` | 属性 |
| `OptionValueType` | `public enum OptionValueType` | 属性 |
| `OptionType` | `public enum OptionType` | 属性 |
| `OptionsCategory` | `public enum OptionsCategory` | 属性 |
| `MultiplayerOption` | `public class MultiplayerOption` | 属性 |
| `MultiplayerOptionsAccessMode` | `public enum MultiplayerOptionsAccessMode` | 嵌套类型 |
| `OptionValueType` | `public enum OptionValueType` | 嵌套类型 |
| `OptionType` | `public enum OptionType` | 嵌套类型 |
| `OptionsCategory` | `public enum OptionsCategory` | 嵌套类型 |
| `MultiplayerOption` | `public class MultiplayerOption` | 嵌套类型 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
