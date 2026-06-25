---
title: "TextObject"
description: "TextObject 的自动生成类参考。"
---
# TextObject

**Namespace:** TaleWorlds.Localization
**Module:** TaleWorlds.Localization
**Type:** `public class TextObject`
**Base:** 无
**File:** `TaleWorlds.Localization/TextObject.cs`

## 概述

`TextObject` 位于 `TaleWorlds.Localization`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Localization` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Attributes` | `public Dictionary<string, object> Attributes { get; }` |
| `Length` | `public int Length { get; }` |
| `IsLink` | `public bool IsLink { get; }` |

## 主要方法

### CacheTokens
`public void CacheTokens()`

**用途 / Purpose:** **用途 / Purpose:** 调用 CacheTokens 对应的操作。

```csharp
// 先通过子系统 API 拿到 TextObject 实例
TextObject textObject = ...;
textObject.CacheTokens();
```

### GetEmpty
`public static TextObject GetEmpty()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 empty 的结果。

```csharp
// 静态调用，不需要实例
TextObject.GetEmpty();
```

### IsEmpty
`public bool IsEmpty()`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 empty 状态或条件。

```csharp
// 先通过子系统 API 拿到 TextObject 实例
TextObject textObject = ...;
var result = textObject.IsEmpty();
```

### IsNullOrEmpty
`public static bool IsNullOrEmpty(TextObject obj)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 null or empty 状态或条件。

```csharp
// 静态调用，不需要实例
TextObject.IsNullOrEmpty(obj);
```

### ToString
`public override string ToString()`

**用途 / Purpose:** **用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 TextObject 实例
TextObject textObject = ...;
var result = textObject.ToString();
```

### ToStringWithoutClear
`public string ToStringWithoutClear()`

**用途 / Purpose:** **用途 / Purpose:** 生成当前对象的可读字符串表示。

```csharp
// 先通过子系统 API 拿到 TextObject 实例
TextObject textObject = ...;
var result = textObject.ToStringWithoutClear();
```

### Format
`public string Format(float p1)`

**用途 / Purpose:** **用途 / Purpose:** 将format格式化为适合显示或存储的字符串。

```csharp
// 先通过子系统 API 拿到 TextObject 实例
TextObject textObject = ...;
var result = textObject.Format(0);
```

### Contains
`public bool Contains(TextObject to)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否包含指定项。

```csharp
// 先通过子系统 API 拿到 TextObject 实例
TextObject textObject = ...;
var result = textObject.Contains(to);
```

### Contains
`public bool Contains(string text)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否包含指定项。

```csharp
// 先通过子系统 API 拿到 TextObject 实例
TextObject textObject = ...;
var result = textObject.Contains("example");
```

### Equals
`public override bool Equals(object other)`

**用途 / Purpose:** **用途 / Purpose:** 比较当前对象与传入实例是否相等。

```csharp
// 先通过子系统 API 拿到 TextObject 实例
TextObject textObject = ...;
var result = textObject.Equals(other);
```

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** **用途 / Purpose:** 返回当前对象的哈希码，用于字典或哈希集合中的快速查找。

```csharp
// 先通过子系统 API 拿到 TextObject 实例
TextObject textObject = ...;
var result = textObject.GetHashCode();
```

### Equals
`public bool Equals(TextObject other)`

**用途 / Purpose:** **用途 / Purpose:** 比较当前对象与传入实例是否相等。

```csharp
// 先通过子系统 API 拿到 TextObject 实例
TextObject textObject = ...;
var result = textObject.Equals(other);
```

### HasSameValue
`public bool HasSameValue(TextObject to)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否已经持有 same value。

```csharp
// 先通过子系统 API 拿到 TextObject 实例
TextObject textObject = ...;
var result = textObject.HasSameValue(to);
```

### ConvertToStringList
`public static List<string> ConvertToStringList(List<TextObject> to)`

**用途 / Purpose:** **用途 / Purpose:** 把to string list转换为另一种表示或类型。

```csharp
// 静态调用，不需要实例
TextObject.ConvertToStringList(to);
```

### SetTextVariable
`public TextObject SetTextVariable(string tag, TextObject variable)`

**用途 / Purpose:** **用途 / Purpose:** 为 text variable 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 TextObject 实例
TextObject textObject = ...;
var result = textObject.SetTextVariable("example", variable);
```

### SetTextVariable
`public TextObject SetTextVariable(string tag, string variable)`

**用途 / Purpose:** **用途 / Purpose:** 为 text variable 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 TextObject 实例
TextObject textObject = ...;
var result = textObject.SetTextVariable("example", "example");
```

### SetTextVariable
`public TextObject SetTextVariable(string tag, float variable, int decimalDigits = 2)`

**用途 / Purpose:** **用途 / Purpose:** 为 text variable 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 TextObject 实例
TextObject textObject = ...;
var result = textObject.SetTextVariable("example", 0, 0);
```

### SetTextVariable
`public TextObject SetTextVariable(string tag, int variable)`

**用途 / Purpose:** **用途 / Purpose:** 为 text variable 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 TextObject 实例
TextObject textObject = ...;
var result = textObject.SetTextVariable("example", 0);
```

### AddIDToValue
`public void AddIDToValue(string id)`

**用途 / Purpose:** **用途 / Purpose:** 将 i d to value 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 TextObject 实例
TextObject textObject = ...;
textObject.AddIDToValue("example");
```

### GetVariableValue
`public bool GetVariableValue(string tag, out TextObject variable)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 variable value 的结果。

```csharp
// 先通过子系统 API 拿到 TextObject 实例
TextObject textObject = ...;
var result = textObject.GetVariableValue("example", variable);
```

### GetValueHashCode
`public int GetValueHashCode()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 value hash code 的结果。

```csharp
// 先通过子系统 API 拿到 TextObject 实例
TextObject textObject = ...;
var result = textObject.GetValueHashCode();
```

### CopyTextObject
`public TextObject CopyTextObject()`

**用途 / Purpose:** **用途 / Purpose:** 把当前对象的text object状态复制到目标对象。

```csharp
// 先通过子系统 API 拿到 TextObject 实例
TextObject textObject = ...;
var result = textObject.CopyTextObject();
```

### GetID
`public string GetID()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 i d 的结果。

```csharp
// 先通过子系统 API 拿到 TextObject 实例
TextObject textObject = ...;
var result = textObject.GetID();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
TextObject textObject = ...;
textObject.CacheTokens();
```

## 参见

- [本区域目录](../)