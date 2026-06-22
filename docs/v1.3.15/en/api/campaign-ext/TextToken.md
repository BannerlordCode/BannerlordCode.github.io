<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TextToken`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TextToken

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `TextToken` is a class in the `TaleWorlds.TwoDimension` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Token` | `public char Token { get; }` |
| `Type` | `public TextToken.TokenType Type { get; }` |
| `Tag` | `public RichTextTag Tag { get; }` |
| `CannotStartLineWithCharacter` | `public bool CannotStartLineWithCharacter { get; set; }` |
| `CannotEndLineWithCharacter` | `public bool CannotEndLineWithCharacter { get; set; }` |


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)