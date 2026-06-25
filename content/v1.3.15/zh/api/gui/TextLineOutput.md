---
title: "TextLineOutput"
description: "TextLineOutput 的自动生成类参考。"
---
# TextLineOutput

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `internal class TextLineOutput`
**Base:** 无
**File:** `TaleWorlds.TwoDimension/TextLineOutput.cs`

## 概述

`TextLineOutput` 位于 `TaleWorlds.TwoDimension`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.TwoDimension` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Width` | `public float Width { get; }` |
| `TextWidth` | `public float TextWidth { get; }` |
| `LineEnded` | `public bool LineEnded { get; }` |
| `EmptyCharacterCount` | `public int EmptyCharacterCount { get; }` |
| `TokenCount` | `public int TokenCount { get; }` |
| `Height` | `public float Height { get; }` |
| `MaxScale` | `public float MaxScale { get; }` |

## 主要方法

### AddToken
`public void AddToken(TextToken textToken, float tokenWidth, float tokenHeight, string style, float scaleValue)`

**用途 / Purpose:** 将 token 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 TextLineOutput 实例
TextLineOutput textLineOutput = ...;
textLineOutput.AddToken(textToken, 0, 0, "example", 0);
```

### GetToken
`public TextToken GetToken(int i)`

**用途 / Purpose:** 读取并返回当前对象中 token 的结果。

```csharp
// 先通过子系统 API 拿到 TextLineOutput 实例
TextLineOutput textLineOutput = ...;
var result = textLineOutput.GetToken(0);
```

### GetTokenOutput
`public TextTokenOutput GetTokenOutput(int i)`

**用途 / Purpose:** 读取并返回当前对象中 token output 的结果。

```csharp
// 先通过子系统 API 拿到 TextLineOutput 实例
TextLineOutput textLineOutput = ...;
var result = textLineOutput.GetTokenOutput(0);
```

### RemoveTokenFromEnd
`public TextTokenOutput RemoveTokenFromEnd()`

**用途 / Purpose:** 从当前容器或状态中移除 token from end。

```csharp
// 先通过子系统 API 拿到 TextLineOutput 实例
TextLineOutput textLineOutput = ...;
var result = textLineOutput.RemoveTokenFromEnd();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
TextLineOutput textLineOutput = ...;
textLineOutput.AddToken(textToken, 0, 0, "example", 0);
```

## 参见

- [本区域目录](../)