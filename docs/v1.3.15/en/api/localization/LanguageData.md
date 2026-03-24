# LanguageData / LanguageData

**Namespace**: TaleWorlds.Localization
**File**: `bannerlord-1.3.15/TaleWorlds.Localization/LanguageData.cs`
**Purpose**: Language metadata from language_data.xml / 语言元数据管理，从 language_data.xml 加载

## Overview / 概述

`LanguageData` is an internal class that stores language metadata loaded from `language_data.xml` files. Each game language has a corresponding `LanguageData` instance containing the language's display name, supported ISO codes, text processor type, and localization XML file paths.

`LanguageData` 是内部类，用于存储从 `language_data.xml` 文件加载的语言元数据。每个游戏语言都有一个对应的 `LanguageData` 实例，包含语言的显示名称、支持的 ISO 代码、文本处理器类型以及本地化 XML 文件路径等信息。

## Important Properties / 重要属性

| Property | Type | Description |
|----------|------|-------------|
| StringId | `string` | Language identifier (English name) / 语言标识符（英文名） |
| Title | `string` | Display title of the language / 语言的显示名称 |
| TextProcessor | `string` | Full class name of the text processor / 文本处理器的完整类名 |
| SupportedIsoCodes | `string[]` | Array of supported ISO language codes / 支持的 ISO 语言代码数组 |
| SubtitleExtension | `string` | Subtitle file extension / 字幕文件扩展名 |
| IsUnderDevelopment | `bool` | Whether the language is under development / 是否处于开发状态 |
| XmlPaths | `MBReadOnlyList<string>` | List of localization XML file paths / 本地化 XML 文件路径列表 |
| IsValid | `bool` | Whether the language data is valid / 语言数据是否有效 |
| All | `static MBReadOnlyList<LanguageData>` | List of all loaded languages / 所有已加载语言的列表 |

## Important Methods / 重要方法

| Method | Signature | Description |
|--------|-----------|-------------|
| InitializeDefault | `public void InitializeDefault(string title, string[] supportedIsoCodes, string subtitleExtension, string textProcessor, bool isUnderDevelopment)` | Initialize with default language data / 初始化默认语言数据 |
| LoadFromXml | `public static void LoadFromXml(XmlDocument doc, string modulePath)` | Load language data from XML document / 从 XML 文档加载语言数据 |
| GetLanguageData | `public static LanguageData GetLanguageData(string stringId)` | Get language data by StringId / 根据 StringId 获取语言数据 |
| GetLanguageDataIndex | `public static int GetLanguageDataIndex(string stringId)` | Get index of language data / 获取语言数据的索引 |
| Clear | `public static void Clear()` | Clear all language data / 清除所有语言数据 |
| LoadTestData | `public static void LoadTestData(LanguageData data)` | Load test language data / 加载测试用语言数据 |

## language_data.xml Structure / language_data.xml 结构

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

### XML Attribute Description / XML 属性说明

| Attribute | Description |
|-----------|-------------|
| id | Unique identifier for the language / 语言的唯一标识符 |
| name | Display name of the language / 语言的显示名称 |
| subtitle_extension | Subtitle file extension / 字幕文件扩展名 |
| supported_iso | Supported ISO codes (comma-separated) / 支持的 ISO 代码（多个用逗号分隔） |
| text_processor | Fully qualified class name of text processor / 文本处理器的完全限定类名 |
| under_development | Whether under development / 是否处于开发状态 |
| xml_path | Path to localization XML file / 本地化 XML 文件路径 |

## Language Code Mapping / 语言代码映射

`SupportedIsoCodes` allows one game language to map to multiple ISO codes:

`SupportedIsoCodes` 允许一个游戏语言对应多个 ISO 代码：

```csharp
// For example, Deutsch supports
// 例如 Deutsch 支持
SupportedIsoCodes = new string[] { "de", "de-DE", "de-AT", "de-CH" };
```

## Notes / 注意事项

- `LanguageData` is an internal class, typically not used directly
- `LanguageData` 是内部类（`internal`），通常不需要直接使用
- Use `LocalizedTextManager.GetLanguageIds()` to get available languages
- 使用 `LocalizedTextManager.GetLanguageIds()` 获取可用语言列表
- Text processor class name must be a fully qualified name loadable by `Type.GetType()`
- 文本处理器类名必须是可以用 `Type.GetType()` 加载的完全限定名
