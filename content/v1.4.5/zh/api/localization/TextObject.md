---
title: "TextObject"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TextObject`
- [← 本领域 / 返回 localization](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# TextObject

**Namespace:** TaleWorlds.Localization
**Module:** TaleWorlds.Localization
**Type:** `public class TextObject`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.Localization/TaleWorlds.Localization/TextObject.cs`

## 概述

`TextObject` 位于 `TaleWorlds.Localization`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Localization` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Attributes` | `public Dictionary<string, object> Attributes { get; }` |
| `IsLink` | `public bool IsLink { get; }` |

## 主要方法

### GetDepth
`public int GetDepth(int maxDepth)`

**用途 / Purpose:** 获取 `depth` 的当前值。

### CacheTokens
`public void CacheTokens()`

**用途 / Purpose:** 处理 `cache tokens` 相关逻辑。

### GetEmpty
`public static TextObject GetEmpty()`

**用途 / Purpose:** 获取 `empty` 的当前值。

### IsEmpty
`public bool IsEmpty()`

**用途 / Purpose:** 处理 `is empty` 相关逻辑。

### IsNullOrEmpty
`public static bool IsNullOrEmpty(TextObject obj)`

**用途 / Purpose:** 处理 `is null or empty` 相关逻辑。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### ToStringWithoutClear
`public string ToStringWithoutClear()`

**用途 / Purpose:** 处理 `to string without clear` 相关逻辑。

### Format
`public string Format(float p1)`

**用途 / Purpose:** 处理 `format` 相关逻辑。

### Contains
`public bool Contains(TextObject to)`

**用途 / Purpose:** 处理 `contains` 相关逻辑。

### Contains
`public bool Contains(string text)`

**用途 / Purpose:** 处理 `contains` 相关逻辑。

### Equals
`public override bool Equals(object other)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 获取 `hash code` 的当前值。

### Equals
`public bool Equals(TextObject other)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### HasSameValue
`public bool HasSameValue(TextObject to)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `same value`。

### ConvertToStringList
`public static List<string> ConvertToStringList(List<TextObject> to)`

**用途 / Purpose:** 处理 `convert to string list` 相关逻辑。

### SetTextVariable
`public TextObject SetTextVariable(string tag, TextObject variable)`

**用途 / Purpose:** 设置 `text variable` 的值或状态。

### SetTextVariable
`public TextObject SetTextVariable(string tag, string variable)`

**用途 / Purpose:** 设置 `text variable` 的值或状态。

### SetTextVariable
`public TextObject SetTextVariable(string tag, float variable, int decimalDigits = 2)`

**用途 / Purpose:** 设置 `text variable` 的值或状态。

### SetTextVariable
`public TextObject SetTextVariable(string tag, int variable)`

**用途 / Purpose:** 设置 `text variable` 的值或状态。

### AddIDToValue
`public void AddIDToValue(string id)`

**用途 / Purpose:** 向当前集合/状态中添加 `i d to value`。

### GetVariableValue
`public bool GetVariableValue(string tag, out TextObject variable)`

**用途 / Purpose:** 获取 `variable value` 的当前值。

### GetValueHashCode
`public int GetValueHashCode()`

**用途 / Purpose:** 获取 `value hash code` 的当前值。

### CopyTextObject
`public TextObject CopyTextObject()`

**用途 / Purpose:** 处理 `copy text object` 相关逻辑。

### GetID
`public string GetID()`

**用途 / Purpose:** 获取 `i d` 的当前值。

## 使用示例

```csharp
var value = new TextObject();
value.GetDepth(0);
```

## 参见

- [完整类目录](../catalog)