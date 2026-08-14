---
title: "TextToken"
description: "TextToken 的自动生成类参考。"
---
# TextToken

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public class TextToken`
**Base:** 无
**File:** `TaleWorlds.TwoDimension/TextToken.cs`

## 概述

`TextToken` 位于 `TaleWorlds.TwoDimension`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.TwoDimension` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Token` | `public char Token { get; }` |
| `Type` | `public TextToken.TokenType Type { get; }` |
| `Tag` | `public RichTextTag Tag { get; }` |
| `CannotStartLineWithCharacter` | `public bool CannotStartLineWithCharacter { get; set; }` |
| `CannotEndLineWithCharacter` | `public bool CannotEndLineWithCharacter { get; set; }` |

## 主要方法

### CreateEmptyCharacter
`public static TextToken CreateEmptyCharacter()`

**用途 / Purpose:** 构建一个新的 empty character 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
TextToken.CreateEmptyCharacter();
```

### CreateZeroWidthSpaceCharacter
`public static TextToken CreateZeroWidthSpaceCharacter()`

**用途 / Purpose:** 构建一个新的 zero width space character 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
TextToken.CreateZeroWidthSpaceCharacter();
```

### CreateNonBreakingSpaceCharacter
`public static TextToken CreateNonBreakingSpaceCharacter()`

**用途 / Purpose:** 构建一个新的 non breaking space character 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
TextToken.CreateNonBreakingSpaceCharacter();
```

### CreateWordJoinerCharacter
`public static TextToken CreateWordJoinerCharacter()`

**用途 / Purpose:** 构建一个新的 word joiner character 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
TextToken.CreateWordJoinerCharacter();
```

### CreateNewLine
`public static TextToken CreateNewLine()`

**用途 / Purpose:** 构建一个新的 new line 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
TextToken.CreateNewLine();
```

### CreateTab
`public static TextToken CreateTab()`

**用途 / Purpose:** 构建一个新的 tab 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
TextToken.CreateTab();
```

### CreateCharacter
`public static TextToken CreateCharacter(char character)`

**用途 / Purpose:** 构建一个新的 character 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
TextToken.CreateCharacter(character);
```

### CreateTag
`public static TextToken CreateTag(RichTextTag tag)`

**用途 / Purpose:** 构建一个新的 tag 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
TextToken.CreateTag(tag);
```

### CreateCharacterCannotEndLineWith
`public static TextToken CreateCharacterCannotEndLineWith(char character)`

**用途 / Purpose:** 构建一个新的 character cannot end line with 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
TextToken.CreateCharacterCannotEndLineWith(character);
```

### CreateCharacterCannotStartLineWith
`public static TextToken CreateCharacterCannotStartLineWith(char character)`

**用途 / Purpose:** 构建一个新的 character cannot start line with 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
TextToken.CreateCharacterCannotStartLineWith(character);
```

### CreateTokenArrayFromWord
`public static List<TextToken> CreateTokenArrayFromWord(string word)`

**用途 / Purpose:** 构建一个新的 token array from word 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
TextToken.CreateTokenArrayFromWord("example");
```

## 使用示例

```csharp
TextToken.CreateEmptyCharacter();
```

## 参见

- [本区域目录](../)