---
title: "MultiplayerOptions"
description: "MultiplayerOptions 的自动生成类参考。"
---
# MultiplayerOptions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerOptions `
**Base:** System.Object
**Source:** TaleWorlds.MountAndBlade/MultiplayerOptions.cs

## 概述

`MultiplayerOptions` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/MultiplayerOptions.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### Release
`public static void Release() `

### GetOptionFromOptionType
`public MultiplayerOptions.MultiplayerOption GetOptionFromOptionType(MultiplayerOptions.OptionType optionType,MultiplayerOptions.MultiplayerOptionsAccessMode mode = MultiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions) `

### OnGameTypeChanged
`public void OnGameTypeChanged(MultiplayerOptions.MultiplayerOptionsAccessMode mode = MultiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions) `

### InitializeNextAndDefaultOptionContainers
`public void InitializeNextAndDefaultOptionContainers() `

### GetNumberOfPlayersForGameMode
`public int GetNumberOfPlayersForGameMode(string gameModeID) `

### GetRoundCountForGameMode
`public int GetRoundCountForGameMode(string gameModeID) `

### GetRoundTimeLimitInMinutesForGameMode
`public int GetRoundTimeLimitInMinutesForGameMode(string gameModeID) `

### InitializeFromCommandList
`public void InitializeFromCommandList(List<string> arguments) `

### ResetDefaultsToCurrent
`public void ResetDefaultsToCurrent() `

### GetMultiplayerOptionsTextList
`public List<string> GetMultiplayerOptionsTextList(MultiplayerOptions.OptionType optionType) `

### GetMultiplayerOptionsList
`public List<string> GetMultiplayerOptionsList(MultiplayerOptions.OptionType optionType) `

### InitializeAllOptionsFromNext
`public void InitializeAllOptionsFromNext() `

### GetMapList
`public MBList<string> GetMapList() `

### GetValueTextForOptionWithMultipleSelection
`public string GetValueTextForOptionWithMultipleSelection(MultiplayerOptions.OptionType optionType) `

### SetValueForOptionWithMultipleSelectionFromText
`public void SetValueForOptionWithMultipleSelectionFromText(MultiplayerOptions.OptionType optionType,string value) `

### IsSpectatorCameraFreedomAllowed
`public static bool IsSpectatorCameraFreedomAllowed() `

### TryGetOptionTypeFromString
`public static bool TryGetOptionTypeFromString(string optionTypeString,out MultiplayerOptions.OptionType optionType,out MultiplayerOptionsProperty optionAttribute) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
