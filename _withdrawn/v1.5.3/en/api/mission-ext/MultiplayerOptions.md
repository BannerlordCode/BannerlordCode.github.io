---
title: "MultiplayerOptions"
description: "Auto-generated class reference for MultiplayerOptions."
---
# MultiplayerOptions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerOptions `
**Base:** System.Object
**Source:** TaleWorlds.MountAndBlade/MultiplayerOptions.cs

## Overview

Auto-generated stub for `MultiplayerOptions`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### Release
`public static void Release()`

### GetOptionFromOptionType
`public MultiplayerOptions.MultiplayerOption GetOptionFromOptionType(MultiplayerOptions.OptionType optionType,MultiplayerOptions.MultiplayerOptionsAccessMode mode = MultiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions)`

### OnGameTypeChanged
`public void OnGameTypeChanged(MultiplayerOptions.MultiplayerOptionsAccessMode mode = MultiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions)`

### InitializeNextAndDefaultOptionContainers
`public void InitializeNextAndDefaultOptionContainers()`

### GetNumberOfPlayersForGameMode
`public int GetNumberOfPlayersForGameMode(string gameModeID)`

### GetRoundCountForGameMode
`public int GetRoundCountForGameMode(string gameModeID)`

### GetRoundTimeLimitInMinutesForGameMode
`public int GetRoundTimeLimitInMinutesForGameMode(string gameModeID)`

### InitializeFromCommandList
`public void InitializeFromCommandList(List<string> arguments)`

### ResetDefaultsToCurrent
`public void ResetDefaultsToCurrent()`

### GetMultiplayerOptionsTextList
`public List<string> GetMultiplayerOptionsTextList(MultiplayerOptions.OptionType optionType)`

### GetMultiplayerOptionsList
`public List<string> GetMultiplayerOptionsList(MultiplayerOptions.OptionType optionType)`

### InitializeAllOptionsFromNext
`public void InitializeAllOptionsFromNext()`

### GetMapList
`public MBList<string> GetMapList()`

### GetValueTextForOptionWithMultipleSelection
`public string GetValueTextForOptionWithMultipleSelection(MultiplayerOptions.OptionType optionType)`

### SetValueForOptionWithMultipleSelectionFromText
`public void SetValueForOptionWithMultipleSelectionFromText(MultiplayerOptions.OptionType optionType,string value)`

### IsSpectatorCameraFreedomAllowed
`public static bool IsSpectatorCameraFreedomAllowed()`

### TryGetOptionTypeFromString
`public static bool TryGetOptionTypeFromString(string optionTypeString,out MultiplayerOptions.OptionType optionType,out MultiplayerOptionsProperty optionAttribute)`

## See Also

- [Section index](../)
