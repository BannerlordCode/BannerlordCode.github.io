---
title: "LanguageSpecificTextProcessor"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `LanguageSpecificTextProcessor`
- [← 本领域 / 返回 localization](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# LanguageSpecificTextProcessor

**Namespace:** TaleWorlds.Localization.TextProcessor
**Module:** TaleWorlds.Localization
**Type:** `public abstract class LanguageSpecificTextProcessor`
**Base:** 无
**File:** `TaleWorlds.Localization/TextProcessor/LanguageSpecificTextProcessor.cs`

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

**用途 / Purpose:** 处理 `process token` 相关逻辑。

### ClearTemporaryData
`public abstract void ClearTemporaryData()`

**用途 / Purpose:** 处理 `clear temporary data` 相关逻辑。

### Process
`public string Process(string text)`

**用途 / Purpose:** 处理 `process` 相关逻辑。

## 使用示例

```csharp
var implementation = new CustomLanguageSpecificTextProcessor();
```

## 参见

- [完整类目录](../catalog)