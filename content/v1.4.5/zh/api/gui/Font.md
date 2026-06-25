---
title: "Font"
description: "Font 的自动生成类参考。"
---
# Font

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public class Font`
**Base:** 无
**File:** `bin/TaleWorlds.TwoDimension/TaleWorlds.TwoDimension/Font.cs`

## 概述

`Font` 位于 `TaleWorlds.TwoDimension`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.TwoDimension` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

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

## 主要方法

### TryLoadFontFromPath
`public bool TryLoadFontFromPath(string path, SpriteData spriteData)`

**用途 / Purpose:** 尝试获取 「load font from path」 的值，通常通过 out 参数返回是否成功。

```csharp
// 先通过子系统 API 拿到 Font 实例
Font font = ...;
var result = font.TryLoadFontFromPath("example", spriteData);
```

### GetWordWidth
`public float GetWordWidth(string word, float extraPadding)`

**用途 / Purpose:** 读取并返回当前对象中 「word width」 的结果。

```csharp
// 先通过子系统 API 拿到 Font 实例
Font font = ...;
var result = font.GetWordWidth("example", 0);
```

### GetCharacterWidth
`public float GetCharacterWidth(char character, float extraPadding)`

**用途 / Purpose:** 读取并返回当前对象中 「character width」 的结果。

```csharp
// 先通过子系统 API 拿到 Font 实例
Font font = ...;
var result = font.GetCharacterWidth(character, 0);
```

### ToString
`public override string ToString()`

**用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 Font 实例
Font font = ...;
var result = font.ToString();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
Font font = ...;
font.TryLoadFontFromPath("example", spriteData);
```

## 参见

- [本区域目录](../)