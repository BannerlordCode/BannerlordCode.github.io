<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Language`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Language

**命名空间:** TaleWorlds.GauntletUI
**模块:** TaleWorlds.GauntletUI
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`Language` 是 `TaleWorlds.GauntletUI` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `ForbiddenStartOfLineCharacters` | `public char ForbiddenStartOfLineCharacters { get; }` |
| `ForbiddenEndOfLineCharacters` | `public char ForbiddenEndOfLineCharacters { get; }` |
| `LanguageID` | `public string LanguageID { get; }` |
| `DefaultFontName` | `public string DefaultFontName { get; }` |
| `DoesFontRequireSpaceForNewline` | `public bool DoesFontRequireSpaceForNewline { get; }` |
| `DefaultFont` | `public Font DefaultFont { get; }` |
| `LineSeperatorChar` | `public char LineSeperatorChar { get; }` |


## 主要方法

### FontMapHasKey

```csharp
public bool FontMapHasKey(string keyFontName)
```

### GetMappedFont

```csharp
public Font GetMappedFont(string keyFontName)
```

### CreateFrom

```csharp
public static Language CreateFrom(XmlNode languageNode, FontFactory fontFactory)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)