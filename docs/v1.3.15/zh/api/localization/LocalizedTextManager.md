# LocalizedTextManager / LocalizedTextManager

**Namespace**: TaleWorlds.Localization
**File**: `bannerlord-1.3.15/TaleWorlds.Localization/LocalizedTextManager.cs`
**Purpose**: 翻译字典管理和语言加载 / Translation dictionary management and language loading

## 概述 / Overview

`LocalizedTextManager` 是静态类，负责管理翻译字典和语言配置的加载。它提供了获取翻译文本、加载本地化 XML、创建语言特定文本处理器以及查询可用语言列表的功能。

`LocalizedTextManager` is a static class responsible for managing the translation dictionary and language configuration loading. It provides functionality to get translated text, load localization XMLs, create language-specific text processors, and query available languages.

## 重要属性 / Important Properties

| Property | Type | Description |
|----------|------|-------------|
| LanguageDataFileName | `const string` | 语言数据文件名（"language_data"）/ Language data file name ("language_data") |
| DefaultEnglishLanguageId | `const string` | 默认语言 ID（"English"）/ Default language ID ("English") |

## 重要方法 / Important Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| GetTranslatedText | `public static string GetTranslatedText(string languageId, string id)` | 获取指定语言的翻译文本 / Get translated text for a specific language |
| LoadLocalizationXmls | `public static void LoadLocalizationXmls(string[] loadedModules)` | 从模块加载所有本地化 XML / Load all localization XMLs from modules |
| AddLocalizationXml | `public static void AddLocalizationXml(string newModule)` | 添加新模块的本地化 XML / Add localization XML from new module |
| CreateTextProcessorForLanguage | `public static LanguageSpecificTextProcessor CreateTextProcessorForLanguage(string id)` | 为指定语言创建文本处理器 / Create text processor for specified language |
| GetLanguageIds | `public static List<string> GetLanguageIds(bool developmentMode)` | 获取可用语言 ID 列表 / Get list of available language IDs |
| GetLanguageTitle | `public static string GetLanguageTitle(string id)` | 获取语言的显示名称 / Get display title of a language |
| GetLanguageIndex | `public static int GetLanguageIndex(string id)` | 获取语言索引 / Get language index |
| GetSubtitleExtensionOfLanguage | `public static string GetSubtitleExtensionOfLanguage(string languageId)` | 获取字幕扩展名 / Get subtitle extension |
| GetLocalizationCodeOfISOLanguageCode | `public static string GetLocalizationCodeOfISOLanguageCode(string isoLanguageCode)` | 从 ISO 代码获取语言代码 / Get language code from ISO code |
| LoadLanguage | `internal static void LoadLanguage(string languageId)` | 加载指定语言的翻译 / Load translations for specified language |
| CheckValidity | `public static bool CheckValidity(string id, string text, out string errorLine)` | 检查翻译有效性 / Check translation validity |
| ChangeLanguage | `public static string ChangeLanguage(List<string> strings)` | 控制台命令：切换语言 / Console command: change language |
| ReloadTexts | `public static string ReloadTexts(List<string> strings)` | 控制台命令：重新加载文本 / Console command: reload texts |

## 获取翻译文本 / Getting Translated Text

```csharp
// 获取当前语言的翻译
// Get translation for current language
string text = LocalizedTextManager.GetTranslatedText("Deutsch", "greeting");

// 如果不存在翻译，返回 null
// Returns null if translation doesn't exist
if (text == null)
{
    // 使用默认文本
    // Use default text
}
```

## 加载本地化 XML / Loading Localization XMLs

```csharp
// 在模块加载时调用
// Called during module loading
string[] loadedModules = new string[] { "Native", "SandBox", "StoryMode" };
LocalizedTextManager.LoadLocalizationXmls(loadedModules);

// 添加新模块的本地化
// Add localization for new module
LocalizedTextManager.AddLocalizationXml("MyMod");
```

## 获取可用语言列表 / Getting Available Languages

```csharp
// 获取所有可用语言（包括开发中的）
// Get all available languages (including under development)
List<string> allLanguages = LocalizedTextManager.GetLanguageIds(developmentMode: true);

// 只获取正式发布的语言
// Get only officially released languages
List<string> stableLanguages = LocalizedTextManager.GetLanguageIds(developmentMode: false);

// 遍历可用语言
// Iterate available languages
foreach (string langId in stableLanguages)
{
    string title = LocalizedTextManager.GetLanguageTitle(langId);
    Debug.Print($"{langId}: {title}");
}
```

## 创建语言处理器 / Creating Language Processor

```csharp
// 为特定语言创建文本处理器
// Create text processor for a specific language
LanguageSpecificTextProcessor processor = LocalizedTextManager.CreateTextProcessorForLanguage("Deutsch");

// 如果语言不存在或处理器不存在，返回 DefaultTextProcessor
// Returns DefaultTextProcessor if language doesn't exist or processor not found
```

## ISO 代码映射 / ISO Code Mapping

```csharp
// 从 ISO 代码获取游戏语言代码
// Get game language code from ISO code
string langCode = LocalizedTextManager.GetLocalizationCodeOfISOLanguageCode("de-DE");
// 返回: "Deutsch"

// 获取特定语言的字幕扩展名
// Get subtitle extension for a language
string extension = LocalizedTextManager.GetSubtitleExtensionOfLanguage("Deutsch");
// 返回: ".de"
```

## 验证翻译 / Validating Translations

```csharp
// 检查翻译有效性
// Check translation validity
string errorLine;
bool hasError = LocalizedTextManager.CheckValidity("greeting", "Hello {PLAYER_NAME}", out errorLine);

if (hasError)
{
    Debug.Print($"Translation error: {errorLine}");
}
```

## 控制台命令 / Console Commands

通过控制台可以使用以下命令：
- `localization.change_language [LanguageCode/LanguageName/ISOCode]` - 切换语言
- `localization.reload_texts` - 重新加载当前语言文本
- `localization.check_for_errors` - 检查所有语言的翻译错误

Via console you can use these commands:
- `localization.change_language [LanguageCode/LanguageName/ISOCode]` - Change language
- `localization.reload_texts` - Reload current language texts
- `localization.check_for_errors` - Check translation errors for all languages

## 内部翻译字典 / Internal Translation Dictionary

翻译字典 `_gameTextDictionary` 存储 `{id -> translated_text}` 映射。加载语言时会清空并重新填充此字典。

The translation dictionary `_gameTextDictionary` stores `{id -> translated_text}` mappings. When loading a language, it is cleared and repopulated.

## 注意事项 / Notes

- `LocalizedTextManager` 是静态类
- `LocalizedTextManager` is a static class
- 翻译字典是按需加载的，切换语言时会重新加载
- Translation dictionary is loaded on-demand, reloaded when changing language
- `GetLanguageIds(true)` 返回包括开发中语言的完整列表
- `GetLanguageIds(true)` returns the complete list including under-development languages
- `CreateTextProcessorForLanguage` 使用反射创建处理器实例
- `CreateTextProcessorForLanguage` uses reflection to create processor instances
