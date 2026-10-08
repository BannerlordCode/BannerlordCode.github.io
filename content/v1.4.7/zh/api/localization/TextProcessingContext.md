---
title: "TextProcessingContext"
description: "MBText 表达式求值的作用域：持有变量表、函数表与函数调用参数栈，供表达式引擎在求值时查找符号与调用函数。"
---
# TextProcessingContext

**命名空间：** `TaleWorlds.Localization.TextProcessor`
**模块：** `TaleWorlds.Localization`
**类型：** `public class TextProcessingContext`
**基类：** 无
**源文件：** `bannerlord-1.4.7/TaleWorlds.Localization/TextProcessor/TextProcessingContext.cs`（声明见第 12 行）

## 概述

`TextProcessingContext` 是 MBText 表达式引擎的**求值环境**：每个 `TextExpression.EvaluateString` 调用都带着它。它内部维护三张表——变量表（`TextObject` 字典，大小写不敏感）、函数表（`MBTextModel` 字典）、以及函数调用参数栈（已求值与未求值两叠）。表达式引擎遇到 `{变量名}` 来查变量表，遇到函数调用就来查函数表并压入参数栈。它本身不做任何文本解析，只是被动的符号表加调用栈。

## 心智模型

把它想成**表达式引擎的"内存"**：解析器把文本切成表达式树（`MBTextModel`），求值器（`TextGrammarProcessor`）拿着这棵树和一个 `TextProcessingContext` 逐节点求值；所有"这个名字代表什么值"的答案都在这个 context 里。

- **不负责**：解析文本、拼接最终字符串、语言相关的大小写后处理。
- **状态从哪来**：变量由引擎在求值过程中写入；函数由 `SetFunction` 公开注册；参数栈由函数调用自动压入与弹出。
- **谁改它**：表达式引擎在求值时读写；mod 若直接用它，主要通过 `SetFunction` / `ResetFunctions` 管理自定义函数。

## 怎么用

mod 一般不直接构造它——`MBTextManager` 在处理文本时会创建并传递它。需要注册自定义文本函数时才直接上手：`SetFunction` 注册函数体，`GetFunctionBody` 取回，`GetFunctionParam` 系列在函数体内取参数，`ResetFunctions` 清空。

坑：

1. **变量名大小写不敏感**：底层字典使用 `CaseInsensitiveComparer`，`{name}` 与 `{NAME}` 命中同一个变量（TextProcessingContext.cs:12）。
2. **变量未设置不会抛异常**：查找失败时返回一个内容为 `{=!}ERROR: ... variable has not been set before.` 的 `TextObject`，错误文本会直接渲染到玩家看到的字符串里（TextProcessingContext.cs:12）。
3. **函数参数越界不抛异常**：`GetFunctionParam` 在索引超出栈顶参数数组时返回 `"Can't find parameter:..."` 的 `TextObject`（TextProcessingContext.cs:376）。
4. **参数栈只看得见最内层调用**：嵌套函数调用时 `GetFunctionParam` 只 peek 栈顶那一层的参数，外层参数被遮住（TextProcessingContext.cs:391）。

## 关键成员

| 成员 | 用途 |
| --- | --- |
| `TextProcessingContext` | 求值环境类声明，表达式引擎查找符号与调用函数的上下文（TextProcessingContext.cs:12） |
| `SetFunction(string functionName, MBTextModel functionBody)` | 向函数表注册一个命名函数体，供表达式中的函数调用解析（TextProcessingContext.cs:356） |
| `ResetFunctions()` | 清空函数表——所有已注册函数一次性消失，注意调用时机（TextProcessingContext.cs:362） |
| `GetFunctionBody(string functionName)` | 按名取回函数体；未注册时返回 null（TextProcessingContext.cs:368） |
| `GetFunctionParam(string rawValue)` | 取当前（最内层）函数调用中已求值的参数；解析失败返回空 `TextObject`，越界返回错误文本（TextProcessingContext.cs:376） |
| `GetFunctionParamWithoutEvaluate(string rawValue)` | 同上，但取未求值的原始表达式参数（TextProcessingContext.cs:391） |

## 真实示例

```csharp
var context = new TextProcessingContext();
context.SetFunction("shout", functionBody);            // functionBody 为 MBTextModel，来自文本解析
MBTextModel body = context.GetFunctionBody("shout");  // 取回函数体；未注册时返回 null
TextObject arg0 = context.GetFunctionParam("$0");     // 取最内层调用的第 0 个参数（已求值）
TextObject raw0 = context.GetFunctionParamWithoutEvaluate("$0"); // 取未求值的原始表达式
context.ResetFunctions();                             // 清空全部已注册函数
```

## 参见

- ↔ [TextObject](../TextObject)：变量表中存放的值类型，也是函数参数的载体
- ↔ [TextGrammarProcessor](../TextGrammarProcessor)：拿着表达式树加本 context 逐节点求值
- ↔ [MBTextManager](../MBTextManager)：文本管线管理器，负责创建并传递本 context

## 导航
- ↑ [localization 桶索引](../)
- ↑ [API 参考](../../)
- ↑ [v1.4.7 中文首页](../../../)
- ↔ [架构总览](../../../architecture/)
