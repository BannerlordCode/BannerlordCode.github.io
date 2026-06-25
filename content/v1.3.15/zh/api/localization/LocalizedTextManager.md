---
title: "LocalizedTextManager"
description: "LocalizedTextManager 的自动生成类参考。"
---
# LocalizedTextManager

**Namespace:** TaleWorlds.Localization
**Module:** TaleWorlds.Localization
**Type:** `public static class LocalizedTextManager`
**Base:** 无
**File:** `TaleWorlds.Localization/LocalizedTextManager.cs`

## 概述

`LocalizedTextManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `LocalizedTextManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetTranslatedText
`public static string GetTranslatedText(string languageId, string id)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 translated text 的结果。

```csharp
// 静态调用，不需要实例
LocalizedTextManager.GetTranslatedText("example", "example");
```

### GetLanguageIds
`public static List<string> GetLanguageIds(bool developmentMode)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 language ids 的结果。

```csharp
// 静态调用，不需要实例
LocalizedTextManager.GetLanguageIds(false);
```

### GetLanguageTitle
`public static string GetLanguageTitle(string id)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 language title 的结果。

```csharp
// 静态调用，不需要实例
LocalizedTextManager.GetLanguageTitle("example");
```

### CreateTextProcessorForLanguage
`public static LanguageSpecificTextProcessor CreateTextProcessorForLanguage(string id)`

**用途 / Purpose:** **用途 / Purpose:** 构建一个新的 text processor for language 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
LocalizedTextManager.CreateTextProcessorForLanguage("example");
```

### AddLanguageTest
`public static void AddLanguageTest(string id, string processor)`

**用途 / Purpose:** **用途 / Purpose:** 将 language test 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
LocalizedTextManager.AddLanguageTest("example", "example");
```

### GetLanguageIndex
`public static int GetLanguageIndex(string id)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 language index 的结果。

```csharp
// 静态调用，不需要实例
LocalizedTextManager.GetLanguageIndex("example");
```

### LoadLocalizationXmls
`public static void LoadLocalizationXmls(string loadedModules)`

**用途 / Purpose:** **用途 / Purpose:** 从持久化存储或流中读取 localization xmls。

```csharp
// 静态调用，不需要实例
LocalizedTextManager.LoadLocalizationXmls("example");
```

### AddLocalizationXml
`public static void AddLocalizationXml(string newModule)`

**用途 / Purpose:** **用途 / Purpose:** 将 localization xml 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
LocalizedTextManager.AddLocalizationXml("example");
```

### GetDateFormattedByLanguage
`public static string GetDateFormattedByLanguage(string languageCode, DateTime dateTime)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 date formatted by language 的结果。

```csharp
// 静态调用，不需要实例
LocalizedTextManager.GetDateFormattedByLanguage("example", dateTime);
```

### GetTimeFormattedByLanguage
`public static string GetTimeFormattedByLanguage(string languageCode, DateTime dateTime)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 time formatted by language 的结果。

```csharp
// 静态调用，不需要实例
LocalizedTextManager.GetTimeFormattedByLanguage("example", dateTime);
```

### GetSubtitleExtensionOfLanguage
`public static string GetSubtitleExtensionOfLanguage(string languageId)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 subtitle extension of language 的结果。

```csharp
// 静态调用，不需要实例
LocalizedTextManager.GetSubtitleExtensionOfLanguage("example");
```

### GetLocalizationCodeOfISOLanguageCode
`public static string GetLocalizationCodeOfISOLanguageCode(string isoLanguageCode)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 localization code of i s o language code 的结果。

```csharp
// 静态调用，不需要实例
LocalizedTextManager.GetLocalizationCodeOfISOLanguageCode("example");
```

### ChangeLanguage
`public static string ChangeLanguage(List<string> strings)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ChangeLanguage 对应的操作。

```csharp
// 静态调用，不需要实例
LocalizedTextManager.ChangeLanguage(strings);
```

### ReloadTexts
`public static string ReloadTexts(List<string> strings)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ReloadTexts 对应的操作。

```csharp
// 静态调用，不需要实例
LocalizedTextManager.ReloadTexts(strings);
```

### CheckValidity
`public static string CheckValidity(List<string> strings)`

**用途 / Purpose:** **用途 / Purpose:** 检查validity在当前对象中是否成立。

```csharp
// 静态调用，不需要实例
LocalizedTextManager.CheckValidity(strings);
```

### CheckValidity
`public static bool CheckValidity(string id, string text, out string errorLine)`

**用途 / Purpose:** **用途 / Purpose:** 检查validity在当前对象中是否成立。

```csharp
// 静态调用，不需要实例
LocalizedTextManager.CheckValidity("example", "example", errorLine);
```

## 使用示例

```csharp
var manager = LocalizedTextManager.Current;
```

## 参见

- [本区域目录](../)