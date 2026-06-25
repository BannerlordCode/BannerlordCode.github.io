---
title: "FontFactory"
description: "FontFactory 的自动生成类参考。"
---
# FontFactory

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class FontFactory`
**Base:** 无
**File:** `bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI/FontFactory.cs`

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

**用途 / Purpose:** 从持久化存储或流中读取 「all fonts」。

```csharp
// 先通过子系统 API 拿到 FontFactory 实例
FontFactory fontFactory = ...;
fontFactory.LoadAllFonts(spriteData);
```

### TryAddFontDefinition
`public bool TryAddFontDefinition(string fontPath, string fontName, SpriteData spriteData)`

**用途 / Purpose:** 尝试获取 「add font definition」 的值，通常通过 out 参数返回是否成功。

```csharp
// 先通过子系统 API 拿到 FontFactory 实例
FontFactory fontFactory = ...;
var result = fontFactory.TryAddFontDefinition("example", "example", spriteData);
```

### LoadLocalizationValues
`public void LoadLocalizationValues(string sourceXMLPath)`

**用途 / Purpose:** 从持久化存储或流中读取 「localization values」。

```csharp
// 先通过子系统 API 拿到 FontFactory 实例
FontFactory fontFactory = ...;
fontFactory.LoadLocalizationValues("example");
```

### GetFont
`public Font GetFont(string fontName)`

**用途 / Purpose:** 读取并返回当前对象中 「font」 的结果。

```csharp
// 先通过子系统 API 拿到 FontFactory 实例
FontFactory fontFactory = ...;
var result = fontFactory.GetFont("example");
```

### GetFonts
`public IEnumerable<Font> GetFonts()`

**用途 / Purpose:** 读取并返回当前对象中 「fonts」 的结果。

```csharp
// 先通过子系统 API 拿到 FontFactory 实例
FontFactory fontFactory = ...;
var result = fontFactory.GetFonts();
```

### GetFontName
`public string GetFontName(Font font)`

**用途 / Purpose:** 读取并返回当前对象中 「font name」 的结果。

```csharp
// 先通过子系统 API 拿到 FontFactory 实例
FontFactory fontFactory = ...;
var result = fontFactory.GetFontName(font);
```

### GetMappedFontForLocalization
`public Font GetMappedFontForLocalization(string englishFontName)`

**用途 / Purpose:** 读取并返回当前对象中 「mapped font for localization」 的结果。

```csharp
// 先通过子系统 API 拿到 FontFactory 实例
FontFactory fontFactory = ...;
var result = fontFactory.GetMappedFontForLocalization("example");
```

### OnLanguageChange
`public void OnLanguageChange(string newLanguageCode)`

**用途 / Purpose:** 在 「language change」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 FontFactory 实例
FontFactory fontFactory = ...;
fontFactory.OnLanguageChange("example");
```

### GetUsableFontForCharacter
`public Font GetUsableFontForCharacter(int characterCode)`

**用途 / Purpose:** 读取并返回当前对象中 「usable font for character」 的结果。

```csharp
// 先通过子系统 API 拿到 FontFactory 实例
FontFactory fontFactory = ...;
var result = fontFactory.GetUsableFontForCharacter(0);
```

### CheckForUpdates
`public void CheckForUpdates()`

**用途 / Purpose:** 检查「for updates」在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 FontFactory 实例
FontFactory fontFactory = ...;
fontFactory.CheckForUpdates();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
FontFactory fontFactory = ...;
fontFactory.LoadAllFonts(spriteData);
```

## 参见

- [本区域目录](../)