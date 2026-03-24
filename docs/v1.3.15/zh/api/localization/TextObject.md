# TextObject / TextObject

**Namespace**: TaleWorlds.Localization
**File**: `bannerlord-1.3.15/TaleWorlds.Localization/TextObject.cs`
**Purpose**: 核心文本容器，支持变量替换和属性管理 / Core text container with variables and attributes

## 概述 / Overview

`TextObject` 是游戏本地化系统的核心类。它用于存储带有文本 ID 的字符串，并支持在运行时替换变量。格式为 `{=id}text` 的字符串，其中 `id` 是文本标识符，`text` 是默认（英文）内容。

`TextObject` is the core class of the game's localization system. It stores strings with text IDs and supports variable substitution at runtime. The format is `{=id}text` where `id` is the text identifier and `text` is the default (English) content.

## 重要属性 / Important Properties

| Property | Type | Description |
|----------|------|-------------|
| Value | `string` | 文本值，包含 `{=id}` 格式的标识符 / Text value containing `{=id}` format identifier |
| Attributes | `Dictionary<string, object>` | 文本变量字典，用于替换占位符 / Dictionary of text variables for placeholder substitution |
| Length | `int` | 文本长度 / Length of the text |
| IsLink | `bool` | 是否为链接文本 / Whether this is a link text |

## 重要方法 / Important Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| TextObject | `public TextObject(string value, Dictionary<string, object> attributes = null)` | 构造函数 / Constructor |
| GetID | `public string GetID()` | 从 Value 中提取文本 ID / Extract text ID from Value |
| SetTextVariable | `public TextObject SetTextVariable(string tag, TextObject variable)` | 设置 TextObject 类型变量 / Set TextObject variable |
| SetTextVariable | `public TextObject SetTextVariable(string tag, string variable)` | 设置字符串变量 / Set string variable |
| SetTextVariable | `public TextObject SetTextVariable(string tag, float variable, int decimalDigits = 2)` | 设置浮点数变量 / Set float variable |
| SetTextVariable | `public TextObject SetTextVariable(string tag, int variable)` | 设置整数变量 / Set int variable |
| ToString | `public override string ToString()` | 转换为本地化字符串 / Convert to localized string |
| ToStringWithoutClear | `public string ToStringWithoutClear()` | 转换但不清除临时数据 / Convert without clearing temporary data |
| Format | `public string Format(float p1)` | 使用浮点数格式化 / Format with float parameter |
| IsEmpty | `public bool IsEmpty()` | 检查是否为空 / Check if empty |
| IsNullOrEmpty | `public static bool IsNullOrEmpty(TextObject obj)` | 静态空值检查 / Static null check |
| GetVariableValue | `public bool GetVariableValue(string tag, out TextObject variable)` | 获取变量值 / Get variable value |
| CopyTextObject | `public TextObject CopyTextObject()` | 创建副本 / Create a copy |

## 文本 ID 格式 / Text ID Format

文本 ID 使用 `{=identifier}text` 格式：
- `{=` 标记文本 ID 的开始
- `identifier` 是文本的唯一标识符
- `}` 标记 ID 结束
- `text` 是默认（英文）内容

Text ID uses `{=identifier}text` format:
- `{=` marks the start of text ID
- `identifier` is the unique identifier for the text
- `}` marks the end of ID
- `text` is the default (English) content

示例 / Examples:
```
{=greeting}Hello
{=player_name}Lord Bolton
{=battle_result}You have defeated {COUNT} enemies.
```

## 使用示例 / Usage Example

```csharp
// 创建带有 ID 的 TextObject
// Create TextObject with ID
TextObject greeting = new TextObject("{=greeting}Hello {PLAYER_NAME}!");

// 设置变量
// Set variables
greeting.SetTextVariable("PLAYER_NAME", "Commander");

// 转换为本地化字符串
// Convert to localized string
string result = greeting.ToString(); // 输出: "Hello Commander!" (在本地化后)

// 直接使用字符串创建
// Create directly from string
TextObject simpleText = new TextObject("Simple text without ID");

// 使用整数变量
// Use with integer variable
TextObject scoreText = new TextObject("{=score}Score: {POINTS}");
scoreText.SetTextVariable("POINTS", 1500);
string scoreResult = scoreText.ToString(); // 输出: "Score: 1500"

// 使用浮点数变量（保留2位小数）
// Use with float variable (2 decimal places)
TextObject goldText = new TextObject("{=gold}You have {AMOUNT} gold.");
goldText.SetTextVariable("AMOUNT", 123.456f);
string goldResult = goldText.ToString(); // 输出: "You have 123.46 gold."
```

## 链接文本 / Link Text

`TextObject` 支持创建可点击的链接文本。使用 `{=!}{.link}` 开头标记链接。

`TextObject` supports creating clickable link text. Use `{=!}{.link}` prefix to mark links.

```csharp
// 创建链接文本
// Create link text
TextObject linkText = new TextObject("{=!}{.link}Click here for details{/link}");
```

## 注意事项 / Notes

- `TextObject` 是可序列化的，可以用于存档系统
- `TextObject` is serializable and can be used with the save system
- `SetTextVariable` 返回 `TextObject` 本身，支持链式调用
- `SetTextVariable` returns the `TextObject` itself, supporting method chaining
- 调用 `ToString()` 会处理本地化和变量替换
- Calling `ToString()` processes localization and variable substitution
- `GetID()` 提取 `{=id}` 格式中的 id 部分
- `GetID()` extracts the id part from `{=id}` format
