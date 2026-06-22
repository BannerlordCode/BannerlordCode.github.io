<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TextToken`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TextToken

**命名空间:** TaleWorlds.TwoDimension
**模块:** TaleWorlds.TwoDimension
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`TextToken` 是 `TaleWorlds.TwoDimension` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
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

```csharp
public static TextToken CreateEmptyCharacter()
```

### CreateZeroWidthSpaceCharacter

```csharp
public static TextToken CreateZeroWidthSpaceCharacter()
```

### CreateNonBreakingSpaceCharacter

```csharp
public static TextToken CreateNonBreakingSpaceCharacter()
```

### CreateWordJoinerCharacter

```csharp
public static TextToken CreateWordJoinerCharacter()
```

### CreateNewLine

```csharp
public static TextToken CreateNewLine()
```

### CreateTab

```csharp
public static TextToken CreateTab()
```

### CreateCharacter

```csharp
public static TextToken CreateCharacter(char character)
```

### CreateTag

```csharp
public static TextToken CreateTag(RichTextTag tag)
```

### CreateCharacterCannotEndLineWith

```csharp
public static TextToken CreateCharacterCannotEndLineWith(char character)
```

### CreateCharacterCannotStartLineWith

```csharp
public static TextToken CreateCharacterCannotStartLineWith(char character)
```

### CreateTokenArrayFromWord

```csharp
public static List<TextToken> CreateTokenArrayFromWord(string word)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)