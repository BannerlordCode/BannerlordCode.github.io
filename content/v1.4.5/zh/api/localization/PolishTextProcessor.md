---
title: "PolishTextProcessor"
description: "PolishTextProcessor 的自动生成类参考。"
---
# PolishTextProcessor

**Namespace:** TaleWorlds.Localization.TextProcessor.LanguageProcessors
**Module:** TaleWorlds.Localization
**Type:** `public class PolishTextProcessor : LanguageSpecificTextProcessor`
**Base:** `LanguageSpecificTextProcessor`
**File:** `bin/TaleWorlds.Localization/TaleWorlds.Localization.TextProcessor.LanguageProcessors/PolishTextProcessor.cs`

## 概述

`PolishTextProcessor` 位于 `TaleWorlds.Localization.TextProcessor.LanguageProcessors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Localization.TextProcessor.LanguageProcessors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### ClearTemporaryData
`public override void ClearTemporaryData()`

**用途 / Purpose:** 清空当前对象中的「temporary data」。

```csharp
// 先通过子系统 API 拿到 PolishTextProcessor 实例
PolishTextProcessor polishTextProcessor = ...;
polishTextProcessor.ClearTemporaryData();
```

### ProcessToken
`public override void ProcessToken(string sourceText, ref int cursorPos, string token, StringBuilder outputString)`

**用途 / Purpose:** 处理与 「process token」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 PolishTextProcessor 实例
PolishTextProcessor polishTextProcessor = ...;
polishTextProcessor.ProcessToken("example", cursorPos, "example", "example");
```

### GetProcessedNouns
`public static string GetProcessedNouns(string str, string gender, string tokens = null)`

**用途 / Purpose:** 读取并返回当前对象中 「processed nouns」 的结果。

```csharp
// 静态调用，不需要实例
PolishTextProcessor.GetProcessedNouns("example", "example", "example");
```

### GetProcessedAdjectives
`public static string GetProcessedAdjectives(string str, string gender, string tokens = null)`

**用途 / Purpose:** 读取并返回当前对象中 「processed adjectives」 的结果。

```csharp
// 静态调用，不需要实例
PolishTextProcessor.GetProcessedAdjectives("example", "example", "example");
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
PolishTextProcessor polishTextProcessor = ...;
polishTextProcessor.ClearTemporaryData();
```

## 参见

- [本区域目录](../)