---
title: "LanguageSpecificTextProcessor"
description: "按语言对已拼接文本做大小写后处理的抽象基类：消费 {.^}、{._}、{.%} 等大小写控制符，并把语言相关的 token 改写交给子类实现。"
---
# LanguageSpecificTextProcessor

**命名空间：** `TaleWorlds.Localization.TextProcessor`
**模块：** `TaleWorlds.Localization`
**类型：** `public abstract class LanguageSpecificTextProcessor`
**基类：** 无
**源文件：** `bannerlord-1.4.7/TaleWorlds.Localization/TextProcessor/LanguageSpecificTextProcessor.cs`（声明见第 9 行）

## 概述

`LanguageSpecificTextProcessor` 是文本管线里的**语言相关后处理层**：变量替换与表达式求值都完成后，最终字符串会经过它做大小写规则修正。它内置三类大小写控制符——`{.^}` 把下一个字母强制大写、`{._}` 强制小写、`{.%}…{.%}` 把两标记之间的文本整体小写；遇到不认识的 `{...}` token 时则回调抽象方法 `ProcessToken`，由具体语言子类决定改写规则（例如土耳其语点号 I 的特殊大小写行为）。它不负责解析变量、不负责求值、也不负责分词——那些是解析器与表达式引擎的工作。

## 心智模型

把它想成**流水线上的一台语言校正机**：上游（`MBTextManager` 的解析与求值）把 `{变量}` 都替换成实际文本，产出的字符串仍可能带着大小写控制符和语言相关 token；这台机器逐字符扫描，普通字符直接穿过，控制符被消费掉并改写后续字符，语言相关 token 丢给子类处理。

- **不负责**：变量查找、表达式求值、HTML 链接解析、文本分词。
- **状态从哪来**：实例字段由子类自带；基类唯一的共享状态是 `[ThreadStatic]` 的 `_lowerMarkers` 列表，记录 `{.%}` 标记位置，`Process` 在每次调用前后保存 / 恢复它，因此嵌套调用互不干扰。
- **谁改它**：`Process` 在单次调用内读写 `_lowerMarkers`；子类通过 `ClearTemporaryData` 在语言切换时清理自己的临时状态。

## 怎么用

它是抽象类，不能直接 `new`；具体实现由 `TaleWorlds.Localization` 内部按当前语言提供，mod 通常通过 `MBTextManager` 的文本处理管线间接使用它。要自定义行为就继承它并实现三个抽象成员。

坑：

1. **`Process(null)` 返回 null**，不是空字符串——调用方必须自己判空（LanguageSpecificTextProcessor.cs:41）。
2. **没有 `{` 的文本原样返回**，连 `StringBuilder` 都不创建；别假设它总会拷贝一份新字符串（LanguageSpecificTextProcessor.cs:41）。
3. **`{.^}` / `{._}` 只作用于下一个"字母"**：会跳过 `<a style="Link."` 前缀和 HTML 标签，中间的非字母字符原样保留（LanguageSpecificTextProcessor.cs:12）。
4. **`{.%}` 标记成对消费**：奇数个标记时最后一个会把剩余文本全部小写；标记列表是 ThreadStatic 且调用结束即归还，不会跨调用残留（LanguageSpecificTextProcessor.cs:19）。

## 关键成员

| 成员 | 用途 |
| --- | --- |
| `LanguageSpecificTextProcessor` | 抽象基类声明，定义大小写后处理的骨架（LanguageSpecificTextProcessor.cs:9） |
| `Process(string text)` | 主入口：扫描文本、消费大小写控制符、产出最终字符串；null 输入返回 null（LanguageSpecificTextProcessor.cs:41） |
| `ProcessToken(string sourceText, ref int cursorPos, string token, StringBuilder outputString)` | 抽象方法：子类实现语言相关的 token 改写规则，`cursorPos` 用 `ref` 回传消费进度（LanguageSpecificTextProcessor.cs:12） |
| `CultureInfoForLanguage { get; }` | 抽象属性：提供目标语言的 `CultureInfo`，供大小写转换使用（LanguageSpecificTextProcessor.cs:16） |
| `ClearTemporaryData()` | 抽象方法：语言切换时由管理器调用，清理子类持有的临时状态（LanguageSpecificTextProcessor.cs:19） |
| `LanguageSpecificTextProcessor()` | 默认构造函数，无显式初始化逻辑（LanguageSpecificTextProcessor.cs:36） |

## 真实示例

```csharp
// 继承抽象类实现一种语言的处理器（未知 token 原样透传）
public class PassthroughTextProcessor : LanguageSpecificTextProcessor
{
    public override CultureInfo CultureInfoForLanguage => CultureInfo.InvariantCulture;

    public override void ProcessToken(string sourceText, ref int cursorPos, string token, StringBuilder outputString)
    {
        outputString.Append(token);
    }

    public override void ClearTemporaryData() { }
}

var processor = new PassthroughTextProcessor();
string result = processor.Process("hello {.^}world {.%}MiXeD{.%} end");
// result == "hello World mixed end"
```

## 参见

- ↔ [MBTextManager](../MBTextManager)：文本管线的管理器，负责把文本送进本处理器
- ↔ [TextProcessingContext](../TextProcessingContext)：表达式求值的作用域，发生在本处理器之前
- ↔ [TextGrammarProcessor](../TextGrammarProcessor)：表达式树的求值器

## 导航
- ↑ [localization 桶索引](../)
- ↑ [API 参考](../../)
- ↑ [v1.4.7 中文首页](../../../)
- ↔ [架构总览](../../../architecture/)
