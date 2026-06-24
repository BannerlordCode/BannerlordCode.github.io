<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TextToken`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TextToken

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public class TextToken`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.TwoDimension/TaleWorlds.TwoDimension/TextToken.cs`

## Overview

`TextToken` lives in `TaleWorlds.TwoDimension` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Token` | `public char Token { get; }` |
| `Type` | `public TokenType Type { get; }` |
| `Tag` | `public RichTextTag Tag { get; }` |
| `CannotStartLineWithCharacter` | `public bool CannotStartLineWithCharacter { get; set; }` |
| `CannotEndLineWithCharacter` | `public bool CannotEndLineWithCharacter { get; set; }` |

## Key Methods

### CreateEmptyCharacter
`public static TextToken CreateEmptyCharacter()`

**Purpose:** Creates a new `empty character` instance or object.

### CreateZeroWidthSpaceCharacter
`public static TextToken CreateZeroWidthSpaceCharacter()`

**Purpose:** Creates a new `zero width space character` instance or object.

### CreateNonBreakingSpaceCharacter
`public static TextToken CreateNonBreakingSpaceCharacter()`

**Purpose:** Creates a new `non breaking space character` instance or object.

### CreateWordJoinerCharacter
`public static TextToken CreateWordJoinerCharacter()`

**Purpose:** Creates a new `word joiner character` instance or object.

### CreateNewLine
`public static TextToken CreateNewLine()`

**Purpose:** Creates a new `new line` instance or object.

### CreateTab
`public static TextToken CreateTab()`

**Purpose:** Creates a new `tab` instance or object.

### CreateCharacter
`public static TextToken CreateCharacter(char character)`

**Purpose:** Creates a new `character` instance or object.

### CreateTag
`public static TextToken CreateTag(RichTextTag tag)`

**Purpose:** Creates a new `tag` instance or object.

### CreateCharacterCannotEndLineWith
`public static TextToken CreateCharacterCannotEndLineWith(char character)`

**Purpose:** Creates a new `character cannot end line with` instance or object.

### CreateCharacterCannotStartLineWith
`public static TextToken CreateCharacterCannotStartLineWith(char character)`

**Purpose:** Creates a new `character cannot start line with` instance or object.

### CreateTokenArrayFromWord
`public static List<TextToken> CreateTokenArrayFromWord(string word)`

**Purpose:** Creates a new `token array from word` instance or object.

## Usage Example

```csharp
TextToken.CreateEmptyCharacter();
```

## See Also

- [Complete Class Catalog](../catalog)