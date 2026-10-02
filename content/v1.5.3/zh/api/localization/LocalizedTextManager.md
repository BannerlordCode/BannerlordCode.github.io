---
title: "LocalizedTextManager"
description: "LocalizedTextManager 的自动生成类参考。"
---
# LocalizedTextManager

**Namespace:** TaleWorlds.Localization
**Module:** TaleWorlds.Localization
**Type:** `public static class LocalizedTextManager `
**Base:** System.Object
**Source:** TaleWorlds.Localization/LocalizedTextManager.cs

## 概述

`LocalizedTextManager` 的自动生成类参考页面。声明来自 `TaleWorlds.Localization/LocalizedTextManager.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetTranslatedText
`public static string GetTranslatedText(string languageId,string id) `

### GetLanguageIds
`public static List<string> GetLanguageIds(bool developmentMode) `

### GetLanguageTitle
`public static string GetLanguageTitle(string id) `

### CreateTextProcessorForLanguage
`public static LanguageSpecificTextProcessor CreateTextProcessorForLanguage(string id) `

### AddLanguageTest
`public static void AddLanguageTest(string id,string processor) `

### GetLanguageIndex
`public static int GetLanguageIndex(string id) `

### LoadLocalizationXmls
`public static void LoadLocalizationXmls(string[] loadedModules) `

### AddLocalizationXml
`public static void AddLocalizationXml(string newModule) `

### GetDateFormattedByLanguage
`public static string GetDateFormattedByLanguage(string languageCode,DateTime dateTime) `

### GetTimeFormattedByLanguage
`public static string GetTimeFormattedByLanguage(string languageCode,DateTime dateTime) `

### GetSubtitleExtensionOfLanguage
`public static string GetSubtitleExtensionOfLanguage(string languageId) `

### GetLocalizationCodeOfISOLanguageCode
`public static string GetLocalizationCodeOfISOLanguageCode(string isoLanguageCode) `

### ChangeLanguage
`public static string ChangeLanguage(List<string> strings) `

### ReloadTexts
`public static string ReloadTexts(List<string> strings) `

### CheckValidity
`public static string CheckValidity(List<string> strings) `
`public static bool CheckValidity(string id,string text,out string errorLine) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
