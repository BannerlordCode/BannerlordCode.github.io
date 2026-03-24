# MBTextManager / MBTextManager

**Namespace**: TaleWorlds.Localization
**File**: `bannerlord-1.3.15/TaleWorlds.Localization/MBTextManager.cs`
**Purpose**: Static central text processing service / 静态中央文本处理服务

## Overview / 概述

`MBTextManager` is the static central service class for the localization system. It handles text localization, variable substitution, language switching, and text expression parsing. It is the main entry point for interacting with the localization system.

`MBTextManager` 是本地化系统的静态中央服务类。它负责处理文本的本地化、变量替换、语言切换以及文本表达式的解析。是与本地化系统交互的主要入口点。

## Important Properties / 重要属性

| Property | Type | Description |
|----------|------|-------------|
| ActiveTextLanguage | `static string` | StringId of the currently active language / 当前活动语言的 StringId |
| LocalizationDebugMode | `static bool` | Whether localization debug mode is enabled (shows text IDs) / 是否启用本地化调试模式（显示文本 ID） |
| Tokenizer | `static Tokenizer` | Text tokenizer / 文本分词器 |

## Important Methods / 重要方法

| Method | Signature | Description |
|--------|-----------|-------------|
| GetLocalizedText | `public static string GetLocalizedText(string text)` | Get localized text by text ID / 根据文本 ID 获取本地化文本 |
| ProcessTextToString | `internal static string ProcessTextToString(TextObject to, bool shouldClear)` | Process TextObject to string / 将 TextObject 处理为字符串 |
| ChangeLanguage | `public static bool ChangeLanguage(string language)` | Change to specified language / 切换到指定语言 |
| SetTextVariable | `public static void SetTextVariable(string variableName, string text, bool sendClients)` | Set string variable / 设置字符串变量 |
| SetTextVariable | `public static void SetTextVariable(string variableName, TextObject text, bool sendClients)` | Set TextObject variable / 设置 TextObject 变量 |
| SetTextVariable | `public static void SetTextVariable(string variableName, int content)` | Set integer variable / 设置整数变量 |
| SetTextVariable | `public static void SetTextVariable(string variableName, float content, int decimalDigits)` | Set float variable / 设置浮点变量 |
| SetTextVariable | `public static void SetTextVariable(string variableName, object content)` | Set object variable / 设置对象变量 |
| SetFunction | `public static void SetFunction(string funcName, string functionBody)` | Define text function / 定义文本函数 |
| ClearAll | `public static void ClearAll()` | Clear all context data / 清除所有上下文数据 |
| ResetFunctions | `public static void ResetFunctions()` | Reset all text functions / 重置所有文本函数 |
| LanguageExistsInCurrentConfiguration | `public static bool LanguageExistsInCurrentConfiguration(string language, bool developmentMode)` | Check if language exists / 检查语言是否存在 |
| GetConversationAnimations | `public static string[] GetConversationAnimations(TextObject to)` | Get conversation animation info / 获取对话动画信息 |
| DiscardAnimationTags | `public static string DiscardAnimationTags(string text)` | Remove animation tags / 移除动画标签 |
| TryGetVoiceObject | `public static bool TryGetVoiceObject(TextObject to, out VoiceObject vo, out string vocalizationId)` | Get voice object / 获取语音对象 |

## Localized Text Format / 本地化文本格式

Localized text uses `{=id}default_text` format:
- `{=id}` is the unique text identifier
- `default_text` is the default (English) text

本地化文本使用 `{=id}default_text` 格式：
- `{=id}` 是文本的唯一标识符
- `default_text` 是默认（英文）文本

```csharp
// Get localized text
// 获取本地化文本
string text = MBTextManager.GetLocalizedText("{=greeting}Hello");

// If current language is English, returns "Hello"
// 如果当前语言是英文，返回 "Hello"

// If current language is German with translation, returns "Hallo"
// 如果当前语言是德语且有翻译，返回 "Hallo"
```

## Variable Setting and Usage / 变量设置与使用

### Global Variables (affects all subsequent text)
### 全局变量（影响所有后续文本）

```csharp
// Set global text variable
// 设置全局文本变量
MBTextManager.SetTextVariable("PLAYER_NAME", "Commander");
MBTextManager.SetTextVariable("GOLD_AMOUNT", 1500);

// Subsequent ToString() calls will use these variables
// 后续的 ToString() 调用会使用这些变量
TextObject text = new TextObject("{=info}Welcome, {PLAYER_NAME}! You have {GOLD_AMOUNT} gold.");
string result = text.ToString(); // "Welcome, Commander! You have 1500 gold."
```

### TextObject Local Variables
### TextObject 局部变量

```csharp
// Set variable on TextObject (only affects that object)
// 在 TextObject 上设置变量（仅影响该对象）
TextObject text = new TextObject("{=info}{NAME} has joined the battle.");
text.SetTextVariable("NAME", "Sir Roland");
string result = text.ToString(); // "Sir Roland has joined the battle."
```

## Language Change / 语言切换

```csharp
// Check if language exists
// 检查语言是否存在
bool exists = MBTextManager.LanguageExistsInCurrentConfiguration("Deutsch", false);

// Change language
// 切换语言
bool success = MBTextManager.ChangeLanguage("Deutsch");
if (success)
{
    // Language changed successfully
    // 语言切换成功
    string currentLang = MBTextManager.ActiveTextLanguage; // "Deutsch"
}
```

## Debug Mode / 调试模式

```csharp
// Enable debug mode - text will be prefixed with ID
// 启用调试模式 - 文本前会显示 ID
MBTextManager.LocalizationDebugMode = true;

TextObject text = new TextObject("{=greeting}Hello {PLAYER}");
text.SetTextVariable("PLAYER", "Test");
string result = text.ToString();
// Output: "(greeting) Hello Test" instead of "Hello Test"
// 输出: "(greeting) Hello Test" 而不是 "Hello Test"
```

## Text Functions / 文本函数

You can define custom text functions for complex logic:

可以定义自定义文本函数来处理复杂逻辑：

```csharp
// Define function
// 定义函数
MBTextManager.SetFunction("GET_RANK", "{=(rank == 1) ? 'Sergeant' : (rank == 2) ? 'Captain' : 'General'}");

// Use function
// 使用函数
TextObject rankText = new TextObject("{=rank}Rank: {GET_RANK}");
```

## Notes / 注意事项

- `MBTextManager` is a static class, all methods are static
- `MBTextManager` 是静态类，所有方法都是静态方法
- Variables set via `SetTextVariable` are global and affect all subsequent text processing
- `SetTextVariable` 设置的变量是全局的，影响所有后续的文本处理
- `ChangeLanguage` reloads the translation dictionary for that language
- `ChangeLanguage` 会重新加载该语言的翻译字典
- `LocalizationDebugMode` causes text to show ID prefix, useful for debugging
- `LocalizationDebugMode` 会导致文本前显示 ID，可用于调试
- The `shouldClear` parameter of `ProcessTextToString` determines whether to clear temporary data after processing
- `ProcessTextToString` 的 `shouldClear` 参数决定是否在处理后清除临时数据
