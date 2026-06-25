---
title: "FontFactory"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `FontFactory`
- [← 本领域 / 返回 gui](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# FontFactory

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class FontFactory`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI/FontFactory.cs`

## 概述

`FontFactory` 位于 `TaleWorlds.GauntletUI`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `DefaultLanguage` | `public Language DefaultLanguage { get; }` |
| `CurrentLanguage` | `public Language CurrentLanguage { get; }` |

## 主要方法

### LoadAllFonts
`public void LoadAllFonts(SpriteData spriteData)`

**用途 / Purpose:** 加载 `all fonts` 数据。

### TryAddFontDefinition
`public bool TryAddFontDefinition(string fontPath, string fontName, SpriteData spriteData)`

**用途 / Purpose:** 尝试获取 `add font definition`，通常以 out 参数返回结果。

### LoadLocalizationValues
`public void LoadLocalizationValues(string sourceXMLPath)`

**用途 / Purpose:** 加载 `localization values` 数据。

### GetFont
`public Font GetFont(string fontName)`

**用途 / Purpose:** 获取 `font` 的当前值。

### GetFonts
`public IEnumerable<Font> GetFonts()`

**用途 / Purpose:** 获取 `fonts` 的当前值。

### GetFontName
`public string GetFontName(Font font)`

**用途 / Purpose:** 获取 `font name` 的当前值。

### GetMappedFontForLocalization
`public Font GetMappedFontForLocalization(string englishFontName)`

**用途 / Purpose:** 获取 `mapped font for localization` 的当前值。

### OnLanguageChange
`public void OnLanguageChange(string newLanguageCode)`

**用途 / Purpose:** 当 `language change` 事件触发时调用此方法。

### GetUsableFontForCharacter
`public Font GetUsableFontForCharacter(int characterCode)`

**用途 / Purpose:** 获取 `usable font for character` 的当前值。

### CheckForUpdates
`public void CheckForUpdates()`

**用途 / Purpose:** 处理 `check for updates` 相关逻辑。

## 使用示例

```csharp
var value = new FontFactory();
value.LoadAllFonts(spriteData);
```

## 参见

- [完整类目录](../catalog)