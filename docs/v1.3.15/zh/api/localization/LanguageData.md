# LanguageData / LanguageData

**Namespace**: TaleWorlds.Localization
**File**: `bannerlord-1.3.15/TaleWorlds.Localization/LanguageData.cs`
**Purpose**: 语言元数据管理，从 language_data.xml 加载 / Language metadata from language_data.xml

## 概述 / Overview

`LanguageData` 是内部类，用于存储从 `language_data.xml` 文件加载的语言元数据。每个游戏语言都有一个对应的 `LanguageData` 实例，包含语言的显示名称、支持的 ISO 代码、文本处理器类型以及本地化 XML 文件路径等信息。

`LanguageData` is an internal class that stores language metadata loaded from `language_data.xml` files. Each game language has a corresponding `LanguageData` instance containing the language's display name, supported ISO codes, text processor type, and localization XML file paths.

## 重要属性 / Important Properties

| Property | Type | Description |
|----------|------|-------------|
| StringId | `string` | 语言标识符（英文名）/ Language identifier (English name) |
| Title | `string` | 语言的显示名称 / Display title of the language |
| TextProcessor | `string` | 文本处理器的完整类名 / Full class name of the text processor |
| SupportedIsoCodes | `string[]` | 支持的 ISO 语言代码数组 / Array of supported ISO language codes |
| SubtitleExtension | `string` | 字幕文件扩展名 / Subtitle file extension |
| IsUnderDevelopment | `bool` | 是否处于开发状态 / Whether the language is under development |
| XmlPaths | `MBReadOnlyList<string>` | 本地化 XML 文件路径列表 / List of localization XML file paths |
| IsValid | `bool` | 语言数据是否有效 / Whether the language data is valid |
| All | `static MBReadOnlyList<LanguageData>` | 所有已加载语言的列表 / List of all loaded languages |

## 重要方法 / Important Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| InitializeDefault | `public void InitializeDefault(string title, string[] supportedIsoCodes, string subtitleExtension, string textProcessor, bool isUnderDevelopment)` | 初始化默认语言数据 / Initialize with default language data |
| LoadFromXml | `public static void LoadFromXml(XmlDocument doc, string modulePath)` | 从 XML 文档加载语言数据 / Load language data from XML document |
| GetLanguageData | `public static LanguageData GetLanguageData(string stringId)` | 根据 StringId 获取语言数据 / Get language data by StringId |
| GetLanguageDataIndex | `public static int GetLanguageDataIndex(string stringId)` | 获取语言数据的索引 / Get index of language data |
| Clear | `public static void Clear()` | 清除所有语言数据 / Clear all language data |
| LoadTestData | `public static void LoadTestData(LanguageData data)` | 加载测试用语言数据 / Load test language data |

## language_data.xml 结构 / language_data.xml Structure

```xml
<LanguageData id="Deutsch">
    <Language name="Deutsch" 
              subtitle_extension=".de" 
              supported_iso="de" 
              text_processor="TaleWorlds.Localization.TextProcessor.LanguageProcessors.GermanTextProcessor" 
              under_development="false">
        <LanguageFile xml_path="languages/de/strings.xml"/>
        <LanguageFile xml_path="languages/de/strings_german_only.xml"/>
        <VoiceFile xml_path="languages/de/voices.xml"/>
    </Language>
</LanguageData>
```

### XML 属性说明 / XML Attribute Description

| Attribute | Description |
|-----------|-------------|
| id | 语言的唯一标识符 / Unique identifier for the language |
| name | 语言的显示名称 / Display name of the language |
| subtitle_extension | 字幕文件扩展名 / Subtitle file extension |
| supported_iso | 支持的 ISO 代码（多个用逗号分隔）/ Supported ISO codes (comma-separated) |
| text_processor | 文本处理器的完全限定类名 / Fully qualified class name of text processor |
| under_development | 是否处于开发状态 / Whether under development |
| xml_path | 本地化 XML 文件路径 / Path to localization XML file |

## 语言代码映射 / Language Code Mapping

`SupportedIsoCodes` 允许一个游戏语言对应多个 ISO 代码：

`SupportedIsoCodes` allows one game language to map to multiple ISO codes:

```csharp
// 例如 Deutsch 支持
// For example, Deutsch supports
SupportedIsoCodes = new string[] { "de", "de-DE", "de-AT", "de-CH" };
```

## 注意事项 / Notes

- `LanguageData` 是内部类（`internal`），通常不需要直接使用
- `LanguageData` is an internal class, typically not used directly
- 使用 `LocalizedTextManager.GetLanguageIds()` 获取可用语言列表
- Use `LocalizedTextManager.GetLanguageIds()` to get available languages
- 文本处理器类名必须是可以用 `Type.GetType()` 加载的完全限定名
- Text processor class name must be a fully qualified name loadable by `Type.GetType()`
