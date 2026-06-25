---
title: "Font"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Font`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Font

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public class Font`
**Base:** 无
**File:** `TaleWorlds.TwoDimension/Font.cs`

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

**用途 / Purpose:** 尝试获取 `load font from path`，通常以 out 参数返回结果。

### GetWordWidth
`public float GetWordWidth(string word, float extraPadding)`

**用途 / Purpose:** 获取 `word width` 的当前值。

### GetCharacterWidth
`public float GetCharacterWidth(char character, float extraPadding)`

**用途 / Purpose:** 获取 `character width` 的当前值。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

## 使用示例

```csharp
var value = new Font();
value.TryLoadFontFromPath("example", spriteData);
```

## 参见

- [完整类目录](../catalog)