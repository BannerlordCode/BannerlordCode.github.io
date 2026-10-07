---
title: "TextGrammarProcessor"
description: "语法树求值器：把 MBTextModel 里的每个 TextExpression 依次求值成字符串并拼接，是 TextObject.ToString() 管线的倒数第二步。"
---

# TextGrammarProcessor

**Namespace:** TaleWorlds.Localization.TextProcessor
**Module:** TaleWorlds.Localization
**Type:** `public static class TextGrammarProcessor`
**Base:** 无（静态类）
**Source:** `bannerlord-1.5.3/TaleWorlds.Localization/TextProcessor/TextGrammarProcessor.cs`

## 概述

`TextGrammarProcessor` 只做一件事：拿到 `MBTextModel` 语法树，把根节点列表里的每个 `TextExpression` 求值成字符串，按顺序拼进一个池化的 `MBStringBuilder`，返回拼接结果。它不解析、不缓存、不持有状态——输入（语法树 + 变量作用域 + 父 TextObject）全部由调用方给。所以它「不是」词法分析器（那是 `Tokenizer` + `MBTextParser` 的事），也不是本地化查表（那是 `MBTextManager.GetLocalizedText` 的事）。它在这条链路上的位置几乎是最末端：查表 → 切 token → 建语法树 → **求值** → 语言处理器后处理 → 字符串。

## 心智模型

**唯一调用点是私有的**：[MBTextManager](../MBTextManager) 的 `Process(string query, TextObject parent = null)` 里 `return TextGrammarProcessor.Process(MBTextParser.Parse(list), MBTextManager.TextContext, parent);`。这行代码同时完成三件事——拿父对象的 token 缓存（或重新 tokenize）、解析成语法树、交给本类求值。**1.5.3 全代码库只有这一个调用点**，mod 没有任何正当理由直接调它。

**求值循环**：

```csharp
foreach (TextExpression textExpression in dataRepresentation.RootExpressions)
{
    if (textExpression != null)
        mbstringBuilder.Append<string>(textExpression.EvaluateString(textContext, parent).ToString());
    else
        MBTextManager.ThrowLocalizationError("Exp should not be null!");
}
```

注意几点：表达式之间是**无条件顺序拼接**，没有分隔符插入逻辑——所有间距/换行都写在语言包的文本里。空表达式（`null`）不跳过也不中断，而是调 `ThrowLocalizationError` 打一条日志然后继续循环（下一轮 `Append` 被跳过，因为分支里没有 append）。

**`parent` 参数的作用**：`TextExpression.EvaluateString` 把 `(textContext, parent)` 两个参数继续往下传。`parent` 是「正在被渲染的那个 `TextObject`」，`TextProcessingContext` 靠它做实例变量优先级和嵌套字段解析。所以本类自己不碰 `parent`，它只是个纯粹的转发层。

**`MBStringBuilder` 的池化**：用的是 `MBStringBuilder` 的 `Initialize(capacity, name)` / `ToStringAndRelease()` 协议（`TaleWorlds.Library` 的池化字符串构造器），不是 `StringBuilder`。同名静态池意味着**不能跨线程持有它的引用**，但本类的用法是立即 `Initialize`、立即 `Release`，没问题。

**常见误用与坑**

1. **`RootExpressions` 是 `internal`**，`MBTextModel` 的整个内容都是 internal。**从 mod 的程序集里你连一个语法树节点都拿不到**。想构造自己的 `TextExpression` 子类也不行——`TaleWorlds.Localization.Expressions` 整包都是 internal，`InternalsVisibleTo` 没有给第三方程序集开。
2. **`EvaluateString` 抛异常不会被这里捕获**。异常会一路冒到 `TextObject.ToString()` 的 `try/catch`，在那里被转成 `"Error at id: xxx. Lang: yyy"` 返回。所以**语法错误在界面上表现为一行错误文本，在日志里表现为 `Error at id`**，崩溃堆栈不会到本类。
3. **拼接不做空串合并也不做 trim**。语言包里两个相邻表达式之间多写的空格会原样保留下来；反过来，两个表达式之间少写空格就会粘字。
4. **`parent` 传 null 会改变变量解析结果**。`TextProcessingContext` 的 `GetRawTextVariable` 在 `parent == null` 时直接跳过实例变量表，退到全局表。手工构造调用（本类唯一的公共入口）很容易踩到。
5. **它对语言是盲的**。语法层解析出的是语言中立的中间表示（`FieldExpression` / `FunctionCall` / `ConditionExpression` / `SelectionExpression` 等），真正的变格、复数、冠词全在之后的 `_languageProcessor.Process(text)`。**在语法里写 `{.MP}` 不会被本类理解，它只是原样留给语言处理器**。

## 怎么用

### 怎么拿到它

静态类，只有一个方法 `public static string Process(MBTextModel dataRepresentation, TextProcessingContext textContext, TextObject parent = null)`（`TextGrammarProcessor.cs:11`），`parent` 有默认值。引擎内部由 `MBTextManager.Process` 调用；外部想直接调它，卡点同样在入参——`MBTextModel` 没有公开的生产途径（`MBTextParser` 是 `internal`，`MBTextParser.cs:9`）。

它每次调用都用 `MBStringBuilder` 并在 `:14` 初始化、在 `:27` 用 `ToStringAndRelease()` 归还（pool 归还语义，不是 `using`），所以返回的字符串是池化缓冲的内容，取到后立刻用、不要跨帧保存。

### 典型用法

```csharp
// 典型形态：遍历根表达式逐个求值再拼接
// 这段就是 TextGrammarProcessor.Process 的实现（TextGrammarProcessor.cs:11-28）
// mod 通常不直接调它，而是让渲染链路走一遍：
string rendered = new TextObject("{s=ok}").ToString();

// 真要自己解析一段固定文本，只能绕开 MBTextParser：
// 它是 internal（MBTextParser.cs:9），所以从外部这一步做不到，
// 只能确认结果：
Debug.Print(rendered);
```

### 最容易踩的坑

表达式求值抛异常或返回 `null` 时，不会中断也不会向上传播。实现里对 `textExpression == null` 的分支只调 `MBTextManager.ThrowLocalizationError("Exp should not be null!")`（`TextGrammarProcessor.cs:24`），而它的实现只是 `Debug.FailedAssert(...)`（`MBTextManager.cs:228-231`）。后果是语言包里一条语法写错的句子**丢掉了那一小段文字、其余部分照常显示**，正式构建里连日志都不打——你只会看到界面上某个词莫名消失，而不是任何报错。调试本地化时用 `MBTextManager.LocalizationDebugMode` 配合日志，不要指望异常。

## 主要成员

- `static string Process(MBTextModel dataRepresentation, TextProcessingContext textContext, TextObject parent = null)`：**本类唯一的成员**。遍历 `dataRepresentation.RootExpressions`，对每个非 null 表达式调 `EvaluateString(textContext, parent)` 并把结果 `.ToString()` 后追加到池化的 `MBStringBuilder`，最后 `ToStringAndRelease()` 返回完整字符串。`parent` 默认 `null`，表示没有实例变量上下文。返回值可能是空串（所有表达式都求值成空），也可能是 `[标记]` 尚未展开的半成品——它不保证输出是最终译文。

## 使用示例

```csharp
// 正常路径不需要你动手：new TextObject("{=id}Hello {NAME}", null).ToString()
// 内部会走到 TextGrammarProcessor.Process(model, MBTextManager.TextContext, this)
// 完整的手工路径（三步，每步的产物都是 internal，只能在引擎程序集内完成）：
//   1) MBTextManager.Tokenizer.Tokenize(text)      -> List<MBTextToken>
//   2) MBTextParser.Parse(tokens)                   -> MBTextModel
//   3) TextGrammarProcessor.Process(model, ctx)    -> string
// 这是理解渲染链路时最实用的复现顺序，用于对照日志里的中间结果。

// 语言处理器之前先拿到「只做了语法展开」的字符串，可以用来观察函数求值是否正确。
// MBTextManager.ProcessWithoutLanguageProcessor(to) 是 internal，
// 官方在 TextProcessingContext.GetVariableValue 里用它处理变量值，
// 这也解释了为什么变量值可以被递归展开。
TextObject to = new TextObject("{=myModGreeting}{NAME} has {MYMOD_TROOPS}{.MP} troops remaining.", null);
to.SetTextVariable("NAME", hero.Name);
MBTextManager.SetTextVariable("MYMOD_TROOPS", 120);

// to.ToString() 出来的字符串里，{NAME} 与 {MYMOD_TROOPS} 都已展开，
// 而 {myModGreeting} 会先被 GetLocalizedText 换成语言包里的实际句子（通常是 "{NAME} 的部队只剩 {MYMOD_TROOPS}{.MP} 人了。"）。
Debug.Print(to.ToString());
Debug.Print("id = " + to.GetID());   // 应当是 "myModGreeting"，用来确认查表命中
```

## 风险与边界

- **完全不可扩展**。想加语法只有两条路：在语言包 `<functions>` 里用现有语法组合出新函数（走 `MBTextManager.SetFunction`），或者在 `TextObject` 层面拼接多条文本绕开语法。上层扩展点只有 [TextObject](../TextObject) 的 `SetTextVariable`。
- **没有求值深度限制**。变量值可递归展开，函数可嵌套调用。语言包构造出自引用（A 的值含 `{A}`）时，1.5.3 的实现**会一直递归直到栈溢出**，没有环检测。`TextObject.GetDepth(maxDepth)` 是给调用方自查嵌套用的，不是渲染器自带的保护。
- **异常传播方向朝上**。本类不 catch，所以它不是错误处理的地方。真正的错误边界在 `TextObject.ToString()`，以及 `MBTextManager.ThrowLocalizationError` 走的 `Debug.FailedAssert`（正式构建里只打日志不抛）。
- **每次渲染都重新求值**。没有结果缓存（token 缓存挂在 `TextObject` 上，但求值结果不缓存）。同一个 `TextObject` 在一帧里被渲染 N 次就求值 N 次。列表里放大量文本时把 `CacheTokens()` 提前调一次是有意义的。
- **语言处理器必须后跑**。本类输出后，[MBTextManager](../MBTextManager) 还要过一遍 `_languageProcessor.Process(text)`。如果你为了调试提前返回了本类的输出，看到的 `{.MP}` `{.g}` 这类标记是**预期的**，不是 bug。

## 依赖关系

- [MBTextManager](../MBTextManager) — 唯一调用者，提供 `MBTextModel`、变量作用域与语言后处理
- [MBTextModel](../MBTextModel) — 输入：待求值的语法树
- [TextProcessingContext](../TextProcessingContext) — 输入：变量作用域与函数表，`parent` 的实例变量优先级依赖它
- [TextObject](../TextObject) — `parent` 参数的来源，也是本类输出的最终消费者
- [SaveableLocalizationTypeDefiner](../SaveableLocalizationTypeDefiner) — 对照：语法树不进存档，只有 `TextObject` 进
