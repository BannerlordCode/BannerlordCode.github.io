---
title: "TextToken"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TextToken`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TextToken

**命名空间:** TaleWorlds.TwoDimension
**模块:** TaleWorlds.TwoDimension
**类型:** `public class TextToken`
**领域:** campaign-ext

## 概述

`TextToken` 位于 `TaleWorlds.TwoDimension`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

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
// 先准备该类型需要的上下文，然后直接调用静态入口
TextToken.CreateEmptyCharacter();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
