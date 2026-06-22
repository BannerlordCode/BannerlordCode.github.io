<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `FontFactory`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FontFactory

**命名空间:** TaleWorlds.GauntletUI
**模块:** TaleWorlds.GauntletUI
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`FontFactory` 是 `TaleWorlds.GauntletUI` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `DefaultLanguage` | `public Language DefaultLanguage { get; }` |
| `CurrentLanguage` | `public Language CurrentLanguage { get; }` |
| `DefaultFont` | `public Font DefaultFont { get; }` |


## 主要方法

### LoadAllFonts

```csharp
public void LoadAllFonts(SpriteData spriteData)
```

### TryAddFontDefinition

```csharp
public bool TryAddFontDefinition(string fontPath, string fontName, SpriteData spriteData)
```

### LoadLocalizationValues

```csharp
public void LoadLocalizationValues(string sourceXMLPath)
```

### GetFont

```csharp
public Font GetFont(string fontName)
```

### GetFonts

```csharp
public IEnumerable<Font> GetFonts()
```

### GetFontName

```csharp
public string GetFontName(Font font)
```

### GetMappedFontForLocalization

```csharp
public Font GetMappedFontForLocalization(string englishFontName)
```

### OnLanguageChange

```csharp
public void OnLanguageChange(string newLanguageCode)
```

### GetUsableFontForCharacter

```csharp
public Font GetUsableFontForCharacter(int characterCode)
```

### CheckForUpdates

```csharp
public void CheckForUpdates()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)