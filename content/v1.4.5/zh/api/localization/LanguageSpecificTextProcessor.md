---
title: "LanguageSpecificTextProcessor"
description: "LanguageSpecificTextProcessor 的自动生成类参考。"
---
# LanguageSpecificTextProcessor

**Namespace:** TaleWorlds.Localization.TextProcessor
**Module:** TaleWorlds.Localization
**Type:** `public abstract class LanguageSpecificTextProcessor`
**Base:** 无
**File:** `bin/TaleWorlds.Localization/TaleWorlds.Localization.TextProcessor/LanguageSpecificTextProcessor.cs`

## 概述

`LanguageSpecificTextProcessor` 位于 `TaleWorlds.Localization.TextProcessor`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Localization.TextProcessor` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CultureInfoForLanguage` | `public abstract CultureInfo CultureInfoForLanguage { get; }` |

## 主要方法

### ProcessToken
`public abstract void ProcessToken(string sourceText, ref int cursorPos, string token, StringBuilder outputString)`

**用途 / Purpose:** 处理与 「process token」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 LanguageSpecificTextProcessor 实例
LanguageSpecificTextProcessor languageSpecificTextProcessor = ...;
languageSpecificTextProcessor.ProcessToken("example", cursorPos, "example", "example");
```

### ClearTemporaryData
`public abstract void ClearTemporaryData()`

**用途 / Purpose:** 清空当前对象中的「temporary data」。

```csharp
// 先通过子系统 API 拿到 LanguageSpecificTextProcessor 实例
LanguageSpecificTextProcessor languageSpecificTextProcessor = ...;
languageSpecificTextProcessor.ClearTemporaryData();
```

### Process
`public string Process(string text)`

**用途 / Purpose:** 处理与 「process」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 LanguageSpecificTextProcessor 实例
LanguageSpecificTextProcessor languageSpecificTextProcessor = ...;
var result = languageSpecificTextProcessor.Process("example");
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
LanguageSpecificTextProcessor instance = ...;
```

## 参见

- [本区域目录](../)