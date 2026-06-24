<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Language`
- [← 本领域 / 返回 gui](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# Language

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class Language : ILanguage`
**Base:** `ILanguage`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Language.cs`

## 概述

`Language` 位于 `TaleWorlds.GauntletUI`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

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
`public bool FontMapHasKey(string keyFontName)`

**用途 / Purpose:** 处理 `font map has key` 相关逻辑。

### GetMappedFont
`public Font GetMappedFont(string keyFontName)`

**用途 / Purpose:** 获取 `mapped font` 的当前值。

### CreateFrom
`public static Language CreateFrom(XmlNode languageNode, FontFactory fontFactory)`

**用途 / Purpose:** 创建一个 `from` 实例或对象。

## 使用示例

```csharp
var value = new Language();
value.FontMapHasKey("example");
```

## 参见

- [完整类目录](../catalog)