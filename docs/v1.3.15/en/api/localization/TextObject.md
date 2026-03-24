# TextObject / TextObject

**Namespace**: TaleWorlds.Localization
**File**: `bannerlord-1.3.15/TaleWorlds.Localization/TextObject.cs`
**Purpose**: Core text container with variables and attributes / 核心文本容器，支持变量替换和属性管理

## Overview / 概述

`TextObject` is the core class of the game's localization system. It stores strings with text IDs and supports variable substitution at runtime. The format is `{=id}text` where `id` is the text identifier and `text` is the default (English) content.

`TextObject` 是游戏本地化系统的核心类。它用于存储带有文本 ID 的字符串，并支持在运行时替换变量。格式为 `{=id}text` 的字符串，其中 `id` 是文本标识符，`text` 是默认（英文）内容。

## Important Properties / 重要属性

| Property | Type | Description |
|----------|------|-------------|
| Value | `string` | Text value containing `{=id}` format identifier / 文本值，包含 `{=id}` 格式的标识符 |
| Attributes | `Dictionary<string, object>` | Dictionary of text variables for placeholder substitution / 文本变量字典，用于替换占位符 |
| Length | `int` | Length of the text / 文本长度 |
| IsLink | `bool` | Whether this is a link text / 是否为链接文本 |

## Important Methods / 重要方法

| Method | Signature | Description |
|--------|-----------|-------------|
| TextObject | `public TextObject(string value, Dictionary<string, object> attributes = null)` | Constructor / 构造函数 |
| GetID | `public string GetID()` | Extract text ID from Value / 从 Value 中提取文本 ID |
| SetTextVariable | `public TextObject SetTextVariable(string tag, TextObject variable)` | Set TextObject variable / 设置 TextObject 类型变量 |
| SetTextVariable | `public TextObject SetTextVariable(string tag, string variable)` | Set string variable / 设置字符串变量 |
| SetTextVariable | `public TextObject SetTextVariable(string tag, float variable, int decimalDigits = 2)` | Set float variable / 设置浮点数变量 |
| SetTextVariable | `public TextObject SetTextVariable(string tag, int variable)` | Set int variable / 设置整数变量 |
| ToString | `public override string ToString()` | Convert to localized string / 转换为本地化字符串 |
| ToStringWithoutClear | `public string ToStringWithoutClear()` | Convert without clearing temporary data / 转换但不清除临时数据 |
| Format | `public string Format(float p1)` | Format with float parameter / 使用浮点数格式化 |
| IsEmpty | `public bool IsEmpty()` | Check if empty / 检查是否为空 |
| IsNullOrEmpty | `public static bool IsNullOrEmpty(TextObject obj)` | Static null check / 静态空值检查 |
| GetVariableValue | `public bool GetVariableValue(string tag, out TextObject variable)` | Get variable value / 获取变量值 |
| CopyTextObject | `public TextObject CopyTextObject()` | Create a copy / 创建副本 |

## Text ID Format / 文本 ID 格式

Text ID uses `{=identifier}text` format:
- `{=` marks the start of text ID
- `identifier` is the unique identifier for the text
- `}` marks the end of ID
- `text` is the default (English) content

文本 ID 使用 `{=identifier}text` 格式：
- `{=` 标记文本 ID 的开始
- `identifier` 是文本的唯一标识符
- `}` 标记 ID 结束
- `text` 是默认（英文）内容

Examples / 示例:
```
{=greeting}Hello
{=player_name}Lord Bolton
{=battle_result}You have defeated {COUNT} enemies.
```

## Usage Example / 使用示例

```csharp
// Create TextObject with ID
// 创建带有 ID 的 TextObject
TextObject greeting = new TextObject("{=greeting}Hello {PLAYER_NAME}!");

// Set variables
// 设置变量
greeting.SetTextVariable("PLAYER_NAME", "Commander");

// Convert to localized string
// 转换为本地化字符串
string result = greeting.ToString(); // Output: "Hello Commander!" (after localization)

// Create directly from string
// 直接使用字符串创建
TextObject simpleText = new TextObject("Simple text without ID");

// Use with integer variable
// 使用整数变量
TextObject scoreText = new TextObject("{=score}Score: {POINTS}");
scoreText.SetTextVariable("POINTS", 1500);
string scoreResult = scoreText.ToString(); // Output: "Score: 1500"

// Use with float variable (2 decimal places)
// 使用浮点数变量（保留2位小数）
TextObject goldText = new TextObject("{=gold}You have {AMOUNT} gold.");
goldText.SetTextVariable("AMOUNT", 123.456f);
string goldResult = goldText.ToString(); // Output: "You have 123.46 gold."
```

## Link Text / 链接文本

`TextObject` supports creating clickable link text. Use `{=!}{.link}` prefix to mark links.

`TextObject` 支持创建可点击的链接文本。使用 `{=!}{.link}` 开头标记链接。

```csharp
// Create link text
// 创建链接文本
TextObject linkText = new TextObject("{=!}{.link}Click here for details{/link}");
```

## Notes / 注意事项

- `TextObject` is serializable and can be used with the save system
- `TextObject` 是可序列化的，可以用于存档系统
- `SetTextVariable` returns the `TextObject` itself, supporting method chaining
- `SetTextVariable` 返回 `TextObject` 本身，支持链式调用
- Calling `ToString()` processes localization and variable substitution
- 调用 `ToString()` 会处理本地化和变量替换
- `GetID()` extracts the id part from `{=id}` format
- `GetID()` 提取 `{=id}` 格式中的 id 部分
