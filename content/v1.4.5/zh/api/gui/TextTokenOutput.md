---
title: "TextTokenOutput"
description: "TextTokenOutput 的自动生成类参考。"
---
# TextTokenOutput

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `internal class TextTokenOutput`
**Base:** 无
**File:** `bin/TaleWorlds.TwoDimension/TaleWorlds.TwoDimension/TextTokenOutput.cs`

## 概述

`TextTokenOutput` 位于 `TaleWorlds.TwoDimension`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.TwoDimension` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `X` | `public float X { get; }` |
| `Y` | `public float Y { get; }` |
| `Width` | `public float Width { get; }` |
| `Height` | `public float Height { get; }` |
| `Scale` | `public float Scale { get; }` |
| `Rectangle` | `public SimpleRectangle Rectangle { get; }` |
| `Token` | `public TextToken Token { get; }` |
| `Style` | `public string Style { get; }` |

## 主要方法

### SetPosition
`public void SetPosition(float x, float y)`

**用途 / Purpose:** 为 「position」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 TextTokenOutput 实例
TextTokenOutput textTokenOutput = ...;
textTokenOutput.SetPosition(0, 0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
TextTokenOutput textTokenOutput = ...;
textTokenOutput.SetPosition(0, 0);
```

## 参见

- [本区域目录](../)