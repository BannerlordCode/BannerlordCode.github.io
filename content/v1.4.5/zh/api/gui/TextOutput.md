---
title: "TextOutput"
description: "TextOutput 的自动生成类参考。"
---
# TextOutput

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `internal class TextOutput`
**Base:** 无
**File:** `bin/TaleWorlds.TwoDimension/TaleWorlds.TwoDimension/TextOutput.cs`

## 概述

`TextOutput` 位于 `TaleWorlds.TwoDimension`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.TwoDimension` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `TextHeight` | `public float TextHeight { get; }` |
| `TotalLineScale` | `public float TotalLineScale { get; }` |
| `MaxLineHeight` | `public float MaxLineHeight { get; }` |
| `MaxLineWidth` | `public float MaxLineWidth { get; }` |
| `MaxLineScale` | `public float MaxLineScale { get; }` |
| `Tokens` | `public IEnumerable<TextTokenOutput> Tokens { get; }` |
| `TokensWithNewLines` | `public IEnumerable<TextTokenOutput> TokensWithNewLines { get; }` |

## 主要方法

### AddNewLine
`public TextLineOutput AddNewLine(bool currentLineEnded, float newLineBaseHeight = 0f)`

**用途 / Purpose:** 将 new line 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 TextOutput 实例
TextOutput textOutput = ...;
var result = textOutput.AddNewLine(false, 0);
```

### AddToken
`public void AddToken(TextToken textToken, float tokenWidth, float scaleValue, string style = "Default", float tokenHeight = -1f)`

**用途 / Purpose:** 将 token 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 TextOutput 实例
TextOutput textOutput = ...;
textOutput.AddToken(textToken, 0, 0, "example", 0);
```

### RemoveTokensFromEnd
`public List<TextTokenOutput> RemoveTokensFromEnd(int numberOfTokensToRemove)`

**用途 / Purpose:** 从当前容器或状态中移除 tokens from end。

```csharp
// 先通过子系统 API 拿到 TextOutput 实例
TextOutput textOutput = ...;
var result = textOutput.RemoveTokensFromEnd(0);
```

### GetLine
`public TextLineOutput GetLine(int i)`

**用途 / Purpose:** 读取并返回当前对象中 line 的结果。

```csharp
// 先通过子系统 API 拿到 TextOutput 实例
TextOutput textOutput = ...;
var result = textOutput.GetLine(0);
```

### Clear
`public void Clear()`

**用途 / Purpose:** 清空当前对象中的内容。

```csharp
// 先通过子系统 API 拿到 TextOutput 实例
TextOutput textOutput = ...;
textOutput.Clear();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
TextOutput textOutput = ...;
textOutput.AddNewLine(false, 0);
```

## 参见

- [本区域目录](../)