---
title: "TextToken"
description: "Auto-generated class reference for TextToken."
---
# TextToken

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public class TextToken`
**Base:** none
**File:** `TaleWorlds.TwoDimension/TextToken.cs`

## Overview

`TextToken` lives in `TaleWorlds.TwoDimension` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

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
`public static TextToken CreateEmptyCharacter()`

**Purpose:** Constructs a new empty character entity and returns it to the caller.

```csharp
// Static call; no instance required
TextToken.CreateEmptyCharacter();
```

### CreateZeroWidthSpaceCharacter
`public static TextToken CreateZeroWidthSpaceCharacter()`

**Purpose:** Constructs a new zero width space character entity and returns it to the caller.

```csharp
// Static call; no instance required
TextToken.CreateZeroWidthSpaceCharacter();
```

### CreateNonBreakingSpaceCharacter
`public static TextToken CreateNonBreakingSpaceCharacter()`

**Purpose:** Constructs a new non breaking space character entity and returns it to the caller.

```csharp
// Static call; no instance required
TextToken.CreateNonBreakingSpaceCharacter();
```

### CreateWordJoinerCharacter
`public static TextToken CreateWordJoinerCharacter()`

**Purpose:** Constructs a new word joiner character entity and returns it to the caller.

```csharp
// Static call; no instance required
TextToken.CreateWordJoinerCharacter();
```

### CreateNewLine
`public static TextToken CreateNewLine()`

**Purpose:** Constructs a new new line entity and returns it to the caller.

```csharp
// Static call; no instance required
TextToken.CreateNewLine();
```

### CreateTab
`public static TextToken CreateTab()`

**Purpose:** Constructs a new tab entity and returns it to the caller.

```csharp
// Static call; no instance required
TextToken.CreateTab();
```

### CreateCharacter
`public static TextToken CreateCharacter(char character)`

**Purpose:** Constructs a new character entity and returns it to the caller.

```csharp
// Static call; no instance required
TextToken.CreateCharacter(character);
```

### CreateTag
`public static TextToken CreateTag(RichTextTag tag)`

**Purpose:** Constructs a new tag entity and returns it to the caller.

```csharp
// Static call; no instance required
TextToken.CreateTag(tag);
```

### CreateCharacterCannotEndLineWith
`public static TextToken CreateCharacterCannotEndLineWith(char character)`

**Purpose:** Constructs a new character cannot end line with entity and returns it to the caller.

```csharp
// Static call; no instance required
TextToken.CreateCharacterCannotEndLineWith(character);
```

### CreateCharacterCannotStartLineWith
`public static TextToken CreateCharacterCannotStartLineWith(char character)`

**Purpose:** Constructs a new character cannot start line with entity and returns it to the caller.

```csharp
// Static call; no instance required
TextToken.CreateCharacterCannotStartLineWith(character);
```

### CreateTokenArrayFromWord
`public static List<TextToken> CreateTokenArrayFromWord(string word)`

**Purpose:** Constructs a new token array from word entity and returns it to the caller.

```csharp
// Static call; no instance required
TextToken.CreateTokenArrayFromWord("example");
```

## Usage Example

```csharp
TextToken.CreateEmptyCharacter();
```

## See Also

- [Area Index](../)