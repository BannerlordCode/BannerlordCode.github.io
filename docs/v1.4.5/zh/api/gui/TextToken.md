<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TextToken`
- [← 本领域 / 返回 gui](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# TextToken

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public class TextToken`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.TwoDimension/TaleWorlds.TwoDimension/TextToken.cs`

## 概述

`TextToken` 位于 `TaleWorlds.TwoDimension`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.TwoDimension` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Token` | `public char Token { get; }` |
| `Type` | `public TokenType Type { get; }` |
| `Tag` | `public RichTextTag Tag { get; }` |
| `CannotStartLineWithCharacter` | `public bool CannotStartLineWithCharacter { get; set; }` |
| `CannotEndLineWithCharacter` | `public bool CannotEndLineWithCharacter { get; set; }` |

## 主要方法

### CreateEmptyCharacter
`public static TextToken CreateEmptyCharacter()`

**用途 / Purpose:** 创建一个 `empty character` 实例或对象。

### CreateZeroWidthSpaceCharacter
`public static TextToken CreateZeroWidthSpaceCharacter()`

**用途 / Purpose:** 创建一个 `zero width space character` 实例或对象。

### CreateNonBreakingSpaceCharacter
`public static TextToken CreateNonBreakingSpaceCharacter()`

**用途 / Purpose:** 创建一个 `non breaking space character` 实例或对象。

### CreateWordJoinerCharacter
`public static TextToken CreateWordJoinerCharacter()`

**用途 / Purpose:** 创建一个 `word joiner character` 实例或对象。

### CreateNewLine
`public static TextToken CreateNewLine()`

**用途 / Purpose:** 创建一个 `new line` 实例或对象。

### CreateTab
`public static TextToken CreateTab()`

**用途 / Purpose:** 创建一个 `tab` 实例或对象。

### CreateCharacter
`public static TextToken CreateCharacter(char character)`

**用途 / Purpose:** 创建一个 `character` 实例或对象。

### CreateTag
`public static TextToken CreateTag(RichTextTag tag)`

**用途 / Purpose:** 创建一个 `tag` 实例或对象。

### CreateCharacterCannotEndLineWith
`public static TextToken CreateCharacterCannotEndLineWith(char character)`

**用途 / Purpose:** 创建一个 `character cannot end line with` 实例或对象。

### CreateCharacterCannotStartLineWith
`public static TextToken CreateCharacterCannotStartLineWith(char character)`

**用途 / Purpose:** 创建一个 `character cannot start line with` 实例或对象。

### CreateTokenArrayFromWord
`public static List<TextToken> CreateTokenArrayFromWord(string word)`

**用途 / Purpose:** 创建一个 `token array from word` 实例或对象。

## 使用示例

```csharp
TextToken.CreateEmptyCharacter();
```

## 参见

- [完整类目录](../catalog)