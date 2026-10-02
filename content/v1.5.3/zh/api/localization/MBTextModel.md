---
title: "MBTextModel"
description: "一段 MBText 文本的语法树根节点容器：只持有一个 TextExpression 列表，由 MBTextParser 填充、由 TextGrammarProcessor 消费。"
---

# MBTextModel

**Namespace:** TaleWorlds.Localization.TextProcessor
**Module:** TaleWorlds.Localization
**Type:** `public class MBTextModel`
**Base:** `System.Object`（无基类）
**Source:** `bannerlord-1.5.3/TaleWorlds.Localization/TextProcessor/MBTextModel.cs`

## 概述

`MBTextModel` 是一棵 MBText 语法树的**最外层包装**，全部内容就是 `_rootExpressions` 这个 `MBList<TextExpression>`。它由 `MBTextParser.Parse(List<MBTextToken>)` 构造出来，由 [TextGrammarProcessor](../TextGrammarProcessor) 遍历求值，同时在 [TextProcessingContext](../TextProcessingContext) 里充当语法函数体的存储形式。它不携带源文本、不携带语言信息、不带偏移量——这些信息在 `MBTextToken` 层，求值时也已经丢掉了。它也不是一个「模型对象」意义上的数据模型，名字里的 Model 指的是「语言的抽象语法表示」。

## 心智模型

**三个角色，同一个类**：

1. **一次性求值产物**：`MBTextManager.Process(query, parent)` 里 `MBTextParser.Parse(list)` 出来的临时对象，遍历一次就丢。
2. **缓存语法函数的函数体**：`MBTextManager.SetFunction(funcName, functionBody)` 会 `MBTextParser.Parse(Tokenizer.Tokenize(body))` 得到一个 `MBTextModel`，存进 `TextProcessingContext._functions`。这个实例会活到下一次语言切换。
3. **变量值的二次解析结果**：`TextProcessingContext.GetVariableValue` 对变量文本 `ToStringWithoutClear()` 后再 parse 一次，得到一个临时 `MBTextModel`，然后取出它的 `RootExpressions` 包装成 `MultiStatement` 返回。

**为什么需要这个包装**：`MBTextParser.Parse` 直接返回 `List<TextExpression>` 也能用。它存在是因为 `TextProcessingContext._functions` 的值类型需要一个类（字典不能用接口而 `List<T>` 是可变结构类型不便引用），且给未来的元数据（源 id、起始位置）留了扩展位——**1.5.3 里这些元数据还没有实现**。

**可见性**：构造函数是隐式 public，但 `RootExpressions`（internal get）和 `AddRootExpression`（internal）都是 internal，字段 `_rootExpressions` 也是 internal。**结论：从 mod 程序集里你能 `new MBTextModel()` 得到一个永久为空的实例，除此之外什么都做不了。**它是给引擎程序集内部用的数据结构，出现在 public 命名空间里只是历史遗留。

**典型调用顺序**：`Tokenizer.Tokenize(text)` → `MBTextParser.Parse(tokens)` → 拿到的 `MBTextModel` 交给 `TextGrammarProcessor.Process(model, context, parent)`。

**常见误用与坑**

1. **别试图从 mod 里构造它**。`new MBTextModel()` 能编译能跑，但 `RootExpressions` 对你的程序集不可见，`TextGrammarProcessor.Process` 会遍历到一个空列表然后返回空串——静默返回空，不报错。想验证这一点时你会以为是自己语法写错了。
2. **`TextGrammarProcessor.Process` 不检查 `dataRepresentation` 是否为 null**。传 null 会在 `foreach (dataRepresentation.RootExpressions)` 处 NRE。它假设调用方（`MBTextManager.Process`）已经保证非空。
3. **节点列表可空**。`TextGrammarProcessor` 里显式判 `textExpression != null`，遇到 null 调 `ThrowLocalizationError`。解析器产生 null 节点是可能的（异常恢复路径），所以这个判空不是多余的。
4. **同一个实例可能被多次求值**（函数体就是），所以它必须是**只读复用**的。别在外部拿到引用后往里加节点——`AddRootExpression` 虽然 internal，但引擎内部有地方会这么做（比如 `MultiStatement` 重组）。

## 主要成员

- `internal MBReadOnlyList<TextExpression> RootExpressions { get; }`：根表达式列表的只读视图。这是 [TextGrammarProcessor](../TextGrammarProcessor) 唯一的输入。**internal**。
- `internal void AddRootExpression(TextExpression newExp)`：往根列表追加一个表达式。仅供解析器和内部重组逻辑使用。**internal**。
- `internal MBList<TextExpression> _rootExpressions = new MBList<TextExpression>()`：底层容器，字段本身 internal，用 `TaleWorlds.Library.MBList` 而不是 `List<T>`。**每次 `new MBTextModel()` 都会分配一个新列表**。

**public 面**：只有隐式默认构造函数。也就是说从 API 契约上讲，这个类型对外承诺的可用操作是「能 new」——仅此而已。

## 使用示例

```csharp
// 引擎内部的一条完整链路（mod 程序集里这些符号都是 internal，只能读不能写）：
//   MBTextManager.Tokenizer.Tokenize(text)   -> List<MBTextToken>
//   MBTextParser.Parse(tokens)                -> MBTextModel
//   TextGrammarProcessor.Process(model, MBTextManager.TextContext, parent) -> string
//
// 变量值走的是同一条链路，只是多了一次 ToStringWithoutClear：
//   TextProcessingContext.GetVariableValue 把变量文本 ToStringWithoutClear()
//   再 Tokenize + Parse，得到一个临时 MBTextModel，
//   若 RootExpressions.Count == 1 且首节点是 MultiStatement 就解包，否则整包再包一层 MultiStatement。

// 从 mod 侧唯一合理的使用姿势：不去碰这个类，改用 TextObject 走同一条链路
TextObject to = new TextObject("{=myModSentence}{HERO_NAME} holds {MYMOD_CLAIMS}{.MP} claims.", null);
to.SetTextVariable("HERO_NAME", hero.Name);
MBTextManager.SetTextVariable("MYMOD_CLAIMS", claimCount);

// MBTextModel 内部会把这段切词、解析、求值，等价结果就是：
Debug.Print(to.ToString());
Debug.Print("lookup id: " + to.GetID());   // "myModSentence"

// 反面教材：new MBTextModel() 能编译，但 RootExpressions 对 mod 不可见，
// 传给 TextGrammarProcessor.Process 会得到空串而不是异常
// MBTextModel empty = new MBTextModel();
// string result = TextGrammarProcessor.Process(empty, ctx);   // 结果永远是 ""
```

## 风险与边界

- **无存档风险**。它是纯运行期语法树，不带 `[SaveableField]`，不参与序列化。存档里存的是 [TextObject](../TextObject)（`Value` + `Attributes`），读档后重新 parse 一次。
- **无线程安全**。`MBList<TextExpression>` 是普通可变容器，且 `EvaluateString` 遍历时会间接访问共享的 [TextProcessingContext](../TextProcessingContext)。同一棵树的并发求值不安全；不过引擎实际路径上每棵树只被单线程遍历一次。
- **性能上是纯分配**。每次渲染一条文本就 new 一个 `MBTextModel` + 一个 `MBList`。`TextObject` 缓存了 token 但**没有缓存语法树**，所以高频渲染路径上这部分 GC 压力一直在。列表面板滚动密集时可以先把 token 缓存好，但语法树这层你没法从外部干预。
- **继承没有意义**。它是具体类，成员全 internal，派生类在别的程序集里看不到任何可覆写的东西。
- **不要在渲染期间试图替换节点**。`RootExpressions` 虽是只读视图，但 `AddRootExpression` 在引擎内部被用于函数体构建，外部改动会让缓存的函数体与 `TextContext` 里的登记项不一致。

## 依赖关系

- [TextGrammarProcessor](../TextGrammarProcessor) — 消费者，遍历 `RootExpressions` 求值
- [TextProcessingContext](../TextProcessingContext) — `_functions` 字典的值类型，函数体的存储形式
- [MBTextManager](../MBTextManager) — `Tokenizer` 的持有者，也是 `Parse` 的实际调用链上游
- [TextObject](../TextObject) — 下游消费者与「变量二次解析」的输入来源
- [LocalizedTextManager](../LocalizedTextManager) — 语言切换导致函数体全部重建，进而重建所有 `MBTextModel`
