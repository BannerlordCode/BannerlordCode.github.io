<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Font`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Font

**命名空间:** TaleWorlds.TwoDimension
**模块:** TaleWorlds.TwoDimension
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`Font` 是 `TaleWorlds.TwoDimension` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
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

```csharp
public bool TryLoadFontFromPath(string path, SpriteData spriteData)
```

### GetWordWidth

```csharp
public float GetWordWidth(string word, float extraPadding)
```

### GetCharacterWidth

```csharp
public float GetCharacterWidth(char character, float extraPadding)
```

### ToString

```csharp
public override string ToString()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)