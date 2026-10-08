---
title: "TextGrammarProcessor"
description: "MBText 表达式树的静态求值器：遍历模型根表达式，逐个在给定上下文中求值并拼接成最终字符串。"
---
# TextGrammarProcessor

**命名空间：** `TaleWorlds.Localization.TextProcessor`
**模块：** `TaleWorlds.Localization`
**类型：** `public static class TextGrammarProcessor`
**基类：** 无
**源文件：** `bannerlord-1.4.7/TaleWorlds.Localization/TextProcessor/TextGrammarProcessor.cs`（声明见第 8 行）

## 概述

`TextGrammarProcessor` 是 MBText 管线的**求值步骤**：解析器把文本切成表达式树（`MBTextModel`）后，由它遍历 `RootExpressions`，逐个调用 `TextExpression.EvaluateString` 在 `TextProcessingContext` 中求值，再把结果拼接成最终字符串。它是无状态静态类——所有变量、函数与调用栈状态都在传入的 context 里，它只负责"跑"这棵树。

## 心智模型

把它想成**表达式树的执行引擎**：`MBTextModel` 是编译产物（语法树），`TextProcessingContext` 是运行时内存，本类是 CPU——一条条指令（`RootExpressions`）顺序执行，每条指令的求值都向 context 查符号、写临时状态。

- **不负责**：解析文本、变量注册、语言相关的大小写后处理。
- **状态从哪来**：全部来自入参——`textContext` 提供变量与函数，`parent` 提供属性继承的优先级。
- **谁改它**：它自己不改任何状态；求值过程中 context 的参数栈会被函数调用压入弹出，但那是 context 的行为。

## 怎么用

mod 一般不直接调用它——`MBTextManager` 处理文本时内部完成"解析 + 求值"两步。需要手动求值一段已解析文本时才直接上手：拿到 `MBTextModel`，准备好 `TextProcessingContext`，调用 `Process` 即可。

坑：

1. **根表达式为 null 会抛异常**：`RootExpressions` 里出现 null 元素时走 `MBTextManager.ThrowLocalizationError("Exp should not be null!")`，直接中断而不是跳过（TextGrammarProcessor.cs:11）。
2. **`parent` 是可选参数**（默认 null）：传入源 `TextObject` 时，表达式求值会优先查它的属性与变量；传 null 则只能依赖 context 里的全局变量（TextGrammarProcessor.cs:11）。
3. **只遍历 `RootExpressions`**：解析器若把内容存到别的位置，这里完全看不到——求值结果只反映根表达式列表（TextGrammarProcessor.cs:11）。
4. **返回值是拼接后的纯字符串**：`TextObject` 的属性、链接等元数据在求值后全部丢失，只剩文本（TextGrammarProcessor.cs:11）。

## 关键成员

| 成员 | 用途 |
| --- | --- |
| `TextGrammarProcessor` | 静态类声明，MBText 管线的求值步骤（TextGrammarProcessor.cs:8） |
| `Process(MBTextModel dataRepresentation, TextProcessingContext textContext, TextObject parent = null)` | 遍历 `RootExpressions` 逐个求值并拼接；`parent` 为 null 时只查 context 全局变量（TextGrammarProcessor.cs:11） |

## 真实示例

```csharp
// model 为解析产出的表达式树，context 为求值环境
MBTextModel model = /* 由文本解析步骤产出 */;
TextProcessingContext context = new TextProcessingContext();
TextObject parent = TextObject.GetEmpty();              // 无父级属性时也可传 null
string output = TextGrammarProcessor.Process(model, context, parent);
```

## 参见

- ↔ [TextProcessingContext](../TextProcessingContext)：求值环境，提供变量表与函数表
- ↔ [TextObject](../TextObject)：`parent` 参数的类型，属性与变量的载体
- ↔ [MBTextManager](../MBTextManager)：文本管线管理器，内部调用本求值器

## 导航
- ↑ [localization 桶索引](../)
- ↑ [API 参考](../../)
- ↑ [v1.4.7 中文首页](../../../)
- ↔ [架构总览](../../../architecture/)
