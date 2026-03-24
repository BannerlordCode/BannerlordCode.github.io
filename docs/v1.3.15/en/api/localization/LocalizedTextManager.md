# LocalizedTextManager / LocalizedTextManager

**Namespace**: TaleWorlds.Localization
**File**: `bannerlord-1.3.15/TaleWorlds.Localization/LocalizedTextManager.cs`
**Purpose**: Translation dictionary management and language loading / 翻译字典管理和语言加载

## Overview / 概述

`LocalizedTextManager` is a static class responsible for managing the translation dictionary and language configuration loading. It provides functionality to get translated text, load localization XMLs, create language-specific text processors, and query available languages.

`LocalizedTextManager` 是静态类，负责管理翻译字典和语言配置的加载。它提供了获取翻译文本、加载本地化 XML、创建语言特定文本处理器以及查询可用语言列表的功能。

## Important Properties / 重要属性

| Property | Type | Description |
|----------|------|-------------|
| LanguageDataFileName | `const string` | Language data file name ("language_data") / 语言数据文件名（"language_data"） |
| DefaultEnglishLanguageId | `const string` | Default language ID ("English") / 默认语言 ID（"English"） |

## Important Methods / 重要方法

| Method | Signature | Description |
|--------|-----------|-------------|
| GetTranslatedText | `public static string GetTranslatedText(string languageId, string id)` | Get translated text for a specific language / 获取指定语言的翻译文本 |
| LoadLocalizationXmls | `public static void LoadLocalizationXmls(string[] loadedModules)` | Load all localization XMLs from modules / 从模块加载所有本地化 XML |
| AddLocalizationXml | `public static void AddLocalizationXml(string newModule)` | Add localization XML from new module / 添加新模块的本地化 XML |
| CreateTextProcessorForLanguage | `public static LanguageSpecificTextProcessor CreateTextProcessorForLanguage(string id)` | Create text processor for specified language / 为指定语言创建文本处理器 |
| GetLanguageIds | `public static List<string> GetLanguageIds(bool developmentMode)` | Get list of available language IDs / 获取可用语言 ID 列表 |
| GetLanguageTitle | `public static string GetLanguageTitle(string id)` | Get display title of a language / 获取语言的显示名称 |
| GetLanguageIndex | `public static int GetLanguageIndex(string id)` | Get language index / 获取语言索引 |
| GetSubtitleExtensionOfLanguage | `public static string GetSubtitleExtensionOfLanguage(string languageId)` | Get subtitle extension / 获取字幕扩展名 |
| GetLocalizationCodeOfISOLanguageCode | `public static string GetLocalizationCodeOfISOLanguageCode(string isoLanguageCode)` | Get language code from ISO code / 从 ISO 代码获取语言代码 |
| LoadLanguage | `internal static void LoadLanguage(string languageId)` | Load translations for specified language / 加载指定语言的翻译 |
| CheckValidity | `public static bool CheckValidity(string id, string text, out string errorLine)` | Check translation validity / 检查翻译有效性 |
| ChangeLanguage | `public static string ChangeLanguage(List<string> strings)` | Console command: change language / 控制台命令：切换语言 |
| ReloadTexts | `public static string ReloadTexts(List<string> strings)` | Console command: reload texts / 控制台命令：重新加载文本 |

## Getting Translated Text / 获取翻译文本

```csharp
// Get translation for current language
// 获取当前语言的翻译
string text = LocalizedTextManager.GetTranslatedText("Deutsch", "greeting");

// Returns null if translation doesn't exist
// 如果不存在翻译，返回 null
if (text == null)
{
    // Use default text
    // 使用默认文本
}
```

## Loading Localization XMLs / 加载本地化 XML

```csharp
// Called during module loading
// 在模块加载时调用
string[] loadedModules = new string[] { "Native", "SandBox", "StoryMode" };
LocalizedTextManager.LoadLocalizationXmls(loadedModules);

// Add localization for new module
// 添加新模块的本地化
LocalizedTextManager.AddLocalizationXml("MyMod");
```

## Getting Available Languages / 获取可用语言列表

```csharp
// Get all available languages (including under development)
// 获取所有可用语言（包括开发中的）
List<string> allLanguages = LocalizedTextManager.GetLanguageIds(developmentMode: true);

// Get only officially released languages
// 只获取正式发布的语言
List<string> stableLanguages = LocalizedTextManager.GetLanguageIds(developmentMode: false);

// Iterate available languages
// 遍历可用语言
foreach (string langId in stableLanguages)
{
    string title = LocalizedTextManager.GetLanguageTitle(langId);
    Debug.Print($"{langId}: {title}");
}
```

## Creating Language Processor / 创建语言处理器

```csharp
// Create text processor for a specific language
// 为特定语言创建文本处理器
LanguageSpecificTextProcessor processor = LocalizedTextManager.CreateTextProcessorForLanguage("Deutsch");

// Returns DefaultTextProcessor if language doesn't exist or processor not found
// 如果语言不存在或处理器不存在，返回 DefaultTextProcessor
```

## ISO Code Mapping / ISO 代码映射

```csharp
// Get game language code from ISO code
// 从 ISO 代码获取游戏语言代码
string langCode = LocalizedTextManager.GetLocalizationCodeOfISOLanguageCode("de-DE");
// Returns: "Deutsch"

// Get subtitle extension for a language
// 获取特定语言的字幕扩展名
string extension = LocalizedTextManager.GetSubtitleExtensionOfLanguage("Deutsch");
// Returns: ".de"
```

## Validating Translations / 验证翻译

```csharp
// Check translation validity
// 检查翻译有效性
string errorLine;
bool hasError = LocalizedTextManager.CheckValidity("greeting", "Hello {PLAYER_NAME}", out errorLine);

if (hasError)
{
    Debug.Print($"Translation error: {errorLine}");
}
```

## Console Commands / 控制台命令

Via console you can use these commands:
- `localization.change_language [LanguageCode/LanguageName/ISOCode]` - Change language
- `localization.reload_texts` - Reload current language texts
- `localization.check_for_errors` - Check translation errors for all languages

通过控制台可以使用以下命令：
- `localization.change_language [LanguageCode/LanguageName/ISOCode]` - 切换语言
- `localization.reload_texts` - 重新加载当前语言文本
- `localization.check_for_errors` - 检查所有语言的翻译错误

## Internal Translation Dictionary / 内部翻译字典

The translation dictionary `_gameTextDictionary` stores `{id -> translated_text}` mappings. When loading a language, it is cleared and repopulated.

翻译字典 `_gameTextDictionary` 存储 `{id -> translated_text}` 映射。加载语言时会清空并重新填充此字典。

## Notes / 注意事项

- `LocalizedTextManager` is a static class
- `LocalizedTextManager` 是静态类
- Translation dictionary is loaded on-demand, reloaded when changing language
- 翻译字典是按需加载的，切换语言时会重新加载
- `GetLanguageIds(true)` returns the complete list including under-development languages
- `GetLanguageIds(true)` 返回包括开发中语言的完整列表
- `CreateTextProcessorForLanguage` uses reflection to create processor instances
- `CreateTextProcessorForLanguage` 使用反射创建处理器实例
