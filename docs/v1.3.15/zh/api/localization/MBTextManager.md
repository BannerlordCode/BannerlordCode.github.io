# MBTextManager / MBTextManager

**Namespace**: TaleWorlds.Localization
**File**: `bannerlord-1.3.15/TaleWorlds.Localization/MBTextManager.cs`
**Purpose**: 静态中央文本处理服务 / Static central text processing service

## 概述 / Overview

`MBTextManager` 是本地化系统的静态中央服务类。它负责处理文本的本地化、变量替换、语言切换以及文本表达式的解析。是与本地化系统交互的主要入口点。

`MBTextManager` is the static central service class for the localization system. It handles text localization, variable substitution, language switching, and text expression parsing. It is the main entry point for interacting with the localization system.

## 重要属性 / Important Properties

| Property | Type | Description |
|----------|------|-------------|
| ActiveTextLanguage | `static string` | 当前活动语言的 StringId / StringId of the currently active language |
| LocalizationDebugMode | `static bool` | 是否启用本地化调试模式（显示文本 ID）/ Whether localization debug mode is enabled (shows text IDs) |
| Tokenizer | `static Tokenizer` | 文本分词器 / Text tokenizer |

## 重要方法 / Important Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| GetLocalizedText | `public static string GetLocalizedText(string text)` | 根据文本 ID 获取本地化文本 / Get localized text by text ID |
| ProcessTextToString | `internal static string ProcessTextToString(TextObject to, bool shouldClear)` | 将 TextObject 处理为字符串 / Process TextObject to string |
| ChangeLanguage | `public static bool ChangeLanguage(string language)` | 切换到指定语言 / Change to specified language |
| SetTextVariable | `public static void SetTextVariable(string variableName, string text, bool sendClients)` | 设置字符串变量 / Set string variable |
| SetTextVariable | `public static void SetTextVariable(string variableName, TextObject text, bool sendClients)` | 设置 TextObject 变量 / Set TextObject variable |
| SetTextVariable | `public static void SetTextVariable(string variableName, int content)` | 设置整数变量 / Set integer variable |
| SetTextVariable | `public static void SetTextVariable(string variableName, float content, int decimalDigits)` | 设置浮点变量 / Set float variable |
| SetTextVariable | `public static void SetTextVariable(string variableName, object content)` | 设置对象变量 / Set object variable |
| SetFunction | `public static void SetFunction(string funcName, string functionBody)` | 定义文本函数 / Define text function |
| ClearAll | `public static void ClearAll()` | 清除所有上下文数据 / Clear all context data |
| ResetFunctions | `public static void ResetFunctions()` | 重置所有文本函数 / Reset all text functions |
| LanguageExistsInCurrentConfiguration | `public static bool LanguageExistsInCurrentConfiguration(string language, bool developmentMode)` | 检查语言是否存在 / Check if language exists |
| GetConversationAnimations | `public static string[] GetConversationAnimations(TextObject to)` | 获取对话动画信息 / Get conversation animation info |
| DiscardAnimationTags | `public static string DiscardAnimationTags(string text)` | 移除动画标签 / Remove animation tags |
| TryGetVoiceObject | `public static bool TryGetVoiceObject(TextObject to, out VoiceObject vo, out string vocalizationId)` | 获取语音对象 / Get voice object |

## 本地化文本格式 / Localized Text Format

本地化文本使用 `{=id}default_text` 格式：
- `{=id}` 是文本的唯一标识符
- `default_text` 是默认（英文）文本

Localized text uses `{=id}default_text` format:
- `{=id}` is the unique text identifier
- `default_text` is the default (English) text

```csharp
// 获取本地化文本
// Get localized text
string text = MBTextManager.GetLocalizedText("{=greeting}Hello");

// 如果当前语言是英文，返回 "Hello"
// If current language is English, returns "Hello"

// 如果当前语言是德语且有翻译，返回 "Hallo"
// If current language is German with translation, returns "Hallo"
```

## 变量设置与使用 / Variable Setting and Usage

### 全局变量（影响所有后续文本）
### Global Variables (affects all subsequent text)

```csharp
// 设置全局文本变量
// Set global text variable
MBTextManager.SetTextVariable("PLAYER_NAME", "Commander");
MBTextManager.SetTextVariable("GOLD_AMOUNT", 1500);

// 后续的 ToString() 调用会使用这些变量
// Subsequent ToString() calls will use these variables
TextObject text = new TextObject("{=info}Welcome, {PLAYER_NAME}! You have {GOLD_AMOUNT} gold.");
string result = text.ToString(); // "Welcome, Commander! You have 1500 gold."
```

### TextObject 局部变量
### TextObject Local Variables

```csharp
// 在 TextObject 上设置变量（仅影响该对象）
// Set variable on TextObject (only affects that object)
TextObject text = new TextObject("{=info}{NAME} has joined the battle.");
text.SetTextVariable("NAME", "Sir Roland");
string result = text.ToString(); // "Sir Roland has joined the battle."
```

## 语言切换 / Language Change

```csharp
// 检查语言是否存在
// Check if language exists
bool exists = MBTextManager.LanguageExistsInCurrentConfiguration("Deutsch", false);

// 切换语言
// Change language
bool success = MBTextManager.ChangeLanguage("Deutsch");
if (success)
{
    // 语言切换成功
    // Language changed successfully
    string currentLang = MBTextManager.ActiveTextLanguage; // "Deutsch"
}
```

## 调试模式 / Debug Mode

```csharp
// 启用调试模式 - 文本前会显示 ID
// Enable debug mode - text will be prefixed with ID
MBTextManager.LocalizationDebugMode = true;

TextObject text = new TextObject("{=greeting}Hello {PLAYER}");
text.SetTextVariable("PLAYER", "Test");
string result = text.ToString();
// 输出: "(greeting) Hello Test" 而不是 "Hello Test"
// Output: "(greeting) Hello Test" instead of "Hello Test"
```

## 文本函数 / Text Functions

可以定义自定义文本函数来处理复杂逻辑：

You can define custom text functions for complex logic:

```csharp
// 定义函数
// Define function
MBTextManager.SetFunction("GET_RANK", "{=(rank == 1) ? 'Sergeant' : (rank == 2) ? 'Captain' : 'General'}");

// 使用函数
// Use function
TextObject rankText = new TextObject("{=rank}Rank: {GET_RANK}");
```

## 注意事项 / Notes

- `MBTextManager` 是静态类，所有方法都是静态方法
- `MBTextManager` is a static class, all methods are static
- `SetTextVariable` 设置的变量是全局的，影响所有后续的文本处理
- Variables set via `SetTextVariable` are global and affect all subsequent text processing
- `ChangeLanguage` 会重新加载该语言的翻译字典
- `ChangeLanguage` reloads the translation dictionary for that language
- `LocalizationDebugMode` 会导致文本前显示 ID，可用于调试
- `LocalizationDebugMode` causes text to show ID prefix, useful for debugging
- `ProcessTextToString` 的 `shouldClear` 参数决定是否在处理后清除临时数据
- The `shouldClear` parameter of `ProcessTextToString` determines whether to clear temporary data after processing
