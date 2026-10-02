---
title: "MultiplayerOptions"
description: "MultiplayerOptions: a public class in TaleWorlds.MountAndBlade; 28 exposed members (16 methods, 6 properties, 0 fields). Source: TaleWorlds.MountAndBlade/MultiplayerOptions.cs."
---
# MultiplayerOptions

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MultiplayerOptions`
**File:** `TaleWorlds.MountAndBlade/MultiplayerOptions.cs`

## Overview

MultiplayerOptions lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MultiplayerOptions.cs. It is a public class; the inheritance chain is MultiplayerOptions. It exposes 28 public/protected members: 16 methods, 6 properties, 1 constructors, 5 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MultiplayerOptions is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain MultiplayerOptions. The surface is method-led (methods 16/28, properties 6/28), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MultiplayerOptions.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Instance` | `public static MultiplayerOptions Instance` | property |
| `MultiplayerOptions` | `public MultiplayerOptions()` | constructor |
| `Release` | `public static void Release()` | method |
| `GetOptionFromOptionType` | `public MultiplayerOptions.MultiplayerOption GetOptionFromOptionType(MultiplayerOptions.OptionType optionType, MultiplayerOptions.MultiplayerOptionsAccessMode mode = MultiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions)` | method |
| `OnGameTypeChanged` | `public void OnGameTypeChanged(MultiplayerOptions.MultiplayerOptionsAccessMode mode = MultiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions)` | method |
| `InitializeNextAndDefaultOptionContainers` | `public void InitializeNextAndDefaultOptionContainers()` | method |
| `GetNumberOfPlayersForGameMode` | `public int GetNumberOfPlayersForGameMode(string gameModeID)` | method |
| `GetRoundCountForGameMode` | `public int GetRoundCountForGameMode(string gameModeID)` | method |
| `GetRoundTimeLimitInMinutesForGameMode` | `public int GetRoundTimeLimitInMinutesForGameMode(string gameModeID)` | method |
| `InitializeFromCommandList` | `public void InitializeFromCommandList(List<string>arguments)` | method |
| `ResetDefaultsToCurrent` | `public void ResetDefaultsToCurrent()` | method |
| `List` | `public List<string>GetMultiplayerOptionsTextList(MultiplayerOptions.OptionType optionType)` | method |
| `List` | `public List<string>GetMultiplayerOptionsList(MultiplayerOptions.OptionType optionType)` | method |
| `InitializeAllOptionsFromNext` | `public void InitializeAllOptionsFromNext()` | method |
| `MBList` | `public MBList<string>GetMapList()` | method |
| `GetValueTextForOptionWithMultipleSelection` | `public string GetValueTextForOptionWithMultipleSelection(MultiplayerOptions.OptionType optionType)` | method |
| `SetValueForOptionWithMultipleSelectionFromText` | `public void SetValueForOptionWithMultipleSelectionFromText(MultiplayerOptions.OptionType optionType, string value)` | method |
| `TryGetOptionTypeFromString` | `public static bool TryGetOptionTypeFromString(string optionTypeString, out MultiplayerOptions.OptionType optionType, out MultiplayerOptionsProperty optionAttribute)` | method |
| `MultiplayerOptionsAccessMode` | `public enum MultiplayerOptionsAccessMode` | property |
| `OptionValueType` | `public enum OptionValueType` | property |
| `OptionType` | `public enum OptionType` | property |
| `OptionsCategory` | `public enum OptionsCategory` | property |
| `MultiplayerOption` | `public class MultiplayerOption` | property |
| `MultiplayerOptionsAccessMode` | `public enum MultiplayerOptionsAccessMode` | nested type |
| `OptionValueType` | `public enum OptionValueType` | nested type |
| `OptionType` | `public enum OptionType` | nested type |
| `OptionsCategory` | `public enum OptionsCategory` | nested type |
| `MultiplayerOption` | `public class MultiplayerOption` | nested type |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
