---
title: "GermanTextProcessor"
description: "GermanTextProcessor 的自动生成类参考。"
---
# GermanTextProcessor

**Namespace:** TaleWorlds.Localization.TextProcessor.LanguageProcessors
**Module:** TaleWorlds.Localization
**Type:** `public class GermanTextProcessor : LanguageSpecificTextProcessor`
**Base:** `LanguageSpecificTextProcessor`
**File:** `bin/TaleWorlds.Localization/TaleWorlds.Localization.TextProcessor.LanguageProcessors/GermanTextProcessor.cs`

## 概述

`GermanTextProcessor` 位于 `TaleWorlds.Localization.TextProcessor.LanguageProcessors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Localization.TextProcessor.LanguageProcessors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### ClearTemporaryData
`public override void ClearTemporaryData()`

**用途 / Purpose:** 清空当前对象中的「temporary data」。

```csharp
// 先通过子系统 API 拿到 GermanTextProcessor 实例
GermanTextProcessor germanTextProcessor = ...;
germanTextProcessor.ClearTemporaryData();
```

### ProcessToken
`public override void ProcessToken(string sourceText, ref int cursorPos, string token, StringBuilder outputString)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 GermanTextProcessor 实例
GermanTextProcessor germanTextProcessor = ...;
germanTextProcessor.ProcessToken("example", cursorPos, "example", "example");
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
GermanTextProcessor germanTextProcessor = ...;
germanTextProcessor.ClearTemporaryData();
```

## 参见

- [本区域目录](../)