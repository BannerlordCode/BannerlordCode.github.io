---
title: "LanguageData"
description: "LanguageData 的自动生成类参考。"
---
# LanguageData

**Namespace:** TaleWorlds.Localization
**Module:** TaleWorlds.Localization
**Type:** `internal class LanguageData`
**Base:** 无
**File:** `bin/TaleWorlds.Localization/TaleWorlds.Localization/LanguageData.cs`

## 概述

`LanguageData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `LanguageData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Title` | `public string Title { get; }` |
| `TextProcessor` | `public string TextProcessor { get; }` |
| `SupportedIsoCodes` | `public string SupportedIsoCodes { get; }` |
| `SubtitleExtension` | `public string SubtitleExtension { get; }` |
| `IsUnderDevelopment` | `public bool IsUnderDevelopment { get; }` |
| `IsValid` | `public bool IsValid { get; }` |

## 主要方法

### InitializeDefault
`public void InitializeDefault(string title, string supportedIsoCodes, string subtitleExtension, string textProcessor, bool isUnderDevelopment)`

**用途 / Purpose:** 为 default 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 LanguageData 实例
LanguageData languageData = ...;
languageData.InitializeDefault("example", "example", "example", "example", false);
```

### Clear
`public static void Clear()`

**用途 / Purpose:** 清空当前对象中的内容。

```csharp
// 静态调用，不需要实例
LanguageData.Clear();
```

### GetLanguageData
`public static LanguageData GetLanguageData(string stringId)`

**用途 / Purpose:** 读取并返回当前对象中 language data 的结果。

```csharp
// 静态调用，不需要实例
LanguageData.GetLanguageData("example");
```

### GetLanguageDataIndex
`public static int GetLanguageDataIndex(string stringId)`

**用途 / Purpose:** 读取并返回当前对象中 language data index 的结果。

```csharp
// 静态调用，不需要实例
LanguageData.GetLanguageDataIndex("example");
```

### LoadFromXml
`public static void LoadFromXml(XmlDocument doc, string modulePath)`

**用途 / Purpose:** 从持久化存储或流中读取 from xml。

```csharp
// 静态调用，不需要实例
LanguageData.LoadFromXml(doc, "example");
```

### LoadTestData
`public static void LoadTestData(LanguageData data)`

**用途 / Purpose:** 从持久化存储或流中读取 test data。

```csharp
// 静态调用，不需要实例
LanguageData.LoadTestData(data);
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
LanguageData entry = ...;
```

## 参见

- [本区域目录](../)