---
title: "MBTextManager"
description: "MBTextManager 的自动生成类参考。"
---
# MBTextManager

**Namespace:** TaleWorlds.Localization
**Module:** TaleWorlds.Localization
**Type:** `public static class MBTextManager `
**Base:** System.Object
**Source:** TaleWorlds.Localization/MBTextManager.cs

## 概述

`MBTextManager` 的自动生成类参考页面。声明来自 `TaleWorlds.Localization/MBTextManager.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### LanguageExistsInCurrentConfiguration
`public static bool LanguageExistsInCurrentConfiguration(string language,bool developmentMode) `

### ChangeLanguage
`public static bool ChangeLanguage(string language) `

### GetActiveTextLanguageIndex
`public static int GetActiveTextLanguageIndex() `

### TryChangeVoiceLanguage
`public static bool TryChangeVoiceLanguage(string language) `

### ClearAll
`public static void ClearAll() `

### SetTextVariable
`public static void SetTextVariable(string variableName,string text,bool sendClients = false) `
`public static void SetTextVariable(string variableName,TextObject text,bool sendClients = false) `
`public static void SetTextVariable(string variableName,int content) `
`public static void SetTextVariable(string variableName,float content,int decimalDigits = 2) `
`public static void SetTextVariable(string variableName,object content) `
`public static void SetTextVariable(string variableName,int arrayIndex,object content) `

### SetFunction
`public static void SetFunction(string funcName,string functionBody) `

### ResetFunctions
`public static void ResetFunctions() `

### ThrowLocalizationError
`public static void ThrowLocalizationError(string message) `

### DiscardAnimationTagsAndCheckAnimationTagPositions
`public static string DiscardAnimationTagsAndCheckAnimationTagPositions(string text) `

### DiscardAnimationTags
`public static string DiscardAnimationTags(string text) `

### GetConversationAnimations
`public static string[] GetConversationAnimations(TextObject to) `

### TryGetVoiceObject
`public static bool TryGetVoiceObject(TextObject to,out VoiceObject vo,out string vocalizationId) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
