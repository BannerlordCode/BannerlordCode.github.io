---
title: "Font"
description: "Auto-generated class reference for Font."
---
# Font

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public class Font`
**Base:** none
**File:** `TaleWorlds.TwoDimension/Font.cs`

## Overview

`Font` lives in `TaleWorlds.TwoDimension` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; }` |
| `Size` | `public int Size { get; }` |
| `LineHeight` | `public int LineHeight { get; }` |
| `Base` | `public int Base { get; }` |
| `CharacterCount` | `public int CharacterCount { get; }` |
| `SmoothingConstant` | `public float SmoothingConstant { get; }` |
| `CustomScale` | `public float CustomScale { get; }` |
| `Smooth` | `public bool Smooth { get; }` |
| `FontSprite` | `public SpritePart FontSprite { get; }` |
| `Characters` | `public Dictionary<int, BitmapFontCharacter> Characters { get; }` |

## Key Methods

### TryLoadFontFromPath
`public bool TryLoadFontFromPath(string path, SpriteData spriteData)`

**Purpose:** Attempts to retrieve `load font from path`, usually returning success through an out parameter.

```csharp
// Obtain an instance of Font from the subsystem API first
Font font = ...;
var result = font.TryLoadFontFromPath("example", spriteData);
```

### GetWordWidth
`public float GetWordWidth(string word, float extraPadding)`

**Purpose:** Reads and returns the `word width` value held by the current object.

```csharp
// Obtain an instance of Font from the subsystem API first
Font font = ...;
var result = font.GetWordWidth("example", 0);
```

### GetCharacterWidth
`public float GetCharacterWidth(char character, float extraPadding)`

**Purpose:** Reads and returns the `character width` value held by the current object.

```csharp
// Obtain an instance of Font from the subsystem API first
Font font = ...;
var result = font.GetCharacterWidth(character, 0);
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the current object.

```csharp
// Obtain an instance of Font from the subsystem API first
Font font = ...;
var result = font.ToString();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Font font = ...;
font.TryLoadFontFromPath("example", spriteData);
```

## See Also

- [Area Index](../)