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

## 怎么用

### 怎么拿到它

不能自己构造出有内容的东西。构造函数是隐式公开的，但容器字段 `_rootExpressions` 是 `internal`（`MBTextModel.cs:27`），唯一的写入入口 `AddRootExpression` 也是 `internal`（`:21`），读取入口 `RootExpressions` 同样 `internal`（`:12`）。外部能拿到一个**已经填好**的 `MBTextModel` 只有两条路：

- `MBTextManager.SetFunction(funcName, functionBody)`（`MBTextManager.cs:215`）内部做 `MBTextParser.Parse(MBTextManager.Tokenizer.Tokenize(functionBody))`（`:217`）并把结果塞进上下文。但取回来的唯一公开方法是 `TextProcessingContext.GetFunctionBody`（`TextProcessingContext.cs:368`），而那个上下文是私有的（`MBTextManager.cs:500`）。
- 自己解析：`MBTextParser.Parse(tokenizer.Tokenize(text))`，然后交给 `TextGrammarProcessor.Process`（`TextGrammarProcessor.cs:11`）。

### 典型用法

```csharp
// 1) 解析一段 MBText 语法，得到模型
List<MBTextToken> tokens = MBTextManager.Tokenizer.Tokenize("{s=hello} {NAME}!");
MBTextModel model = MBTextParser.Parse(tokens);          // Tokenizer 是 internal，外部需自备实例

// 2) 用一个自己建的上下文求值；parent 传 null 表示变量只从上下文取
string result = TextGrammarProcessor.Process(model, new TextProcessingContext());
```

### 最容易踩的坑

把 `MBTextModel` 当成可以缓存/复用的中间结果，实际它对求值上下文没有绑定、但你的用法很容易踩到「缓存时机」这个坑。真正的问题在另一头：外部**根本拿不到已经解析好的模型**——`RootExpressions` 是 `internal`（`MBTextModel.cs:12`），所以你既不能遍历它来检查语法树里有哪些表达式，也不能把它序列化下来跨存档保存。后果是想做「预编译一批本地化文本以省开销」时，唯一办法是自己持有 `Tokenizer` 和 `MBTextParser.Parse` 的结果并每次重新求值——而 `MBTextParser` 本身也在 `TaleWorlds.Localization` 命名空间外拿不到更多东西。要省开销请改走 [TextObject](../TextObject) 那侧的 `CacheTokens()`（`TextObject.cs:147`），那才是为重复渲染准备的缓存。

## 怎么用

### 怎么拿到它

从外部**造不出一个有内容的实例**，这是本页最需要先知道的事。构造是隐式公开的，但写入容器只有 `internal void AddRootExpression`（`MBTextModel.cs:21`），读取容器只有 `internal MBReadOnlyList<TextExpression> RootExpressions`（`:12`）。填充它的两个函数也都在程序集外：`MBTextParser` 是 `internal class`（`MBTextParser.cs:9`），唯一的入口 `internal static MBTextModel Parse(List<MBTextToken>)` 是 `internal`（`MBTextParser.cs:702`）；`Tokenizer` 是 `internal sealed class`（`Tokenizer.cs:8`），而 `MBTextManager.Tokenizer` 字段本身也是 `internal static readonly`（`MBTextManager.cs:529`）。

引擎内部生产它的只有两处，都发生在同一条渲染管线上：`MBTextManager.Process` 把 token 解析成模型交给 [TextGrammarProcessor](../TextGrammarProcessor)，以及 `MBTextManager.SetFunction`（`MBTextManager.cs:217`）。取出来也没有对外通路——`MBTextManager.TextContext` 是 `private static`（`MBTextManager.cs:500`）。

所以对 mod 而言它是一个「只读、不可构造、不可持久化」的中间产物：你可以调 `TextGrammarProcessor.Process`，但**永远拿不到能传进去的 `MBTextModel`**。

### 典型用法

```csharp
// 外部能观察到的唯一用法：注册一个命名函数体，由语言包调用它
MBTextManager.SetFunction("MYMOD_UPPER", "{^}");

// 剩下的交给渲染链路——你无法手动驱动 TextGrammarProcessor.Process，
// 因为没有一个 public 途径能拿到 MBTextModel 实例：
// MBTextParser.Parse 是 internal（MBTextParser.cs:702），Tokenizer 是 internal sealed（Tokenizer.cs:8）。
// 可验证的只有渲染结果：
Debug.Print(new TextObject("{MYMOD_UPPER}abc").ToString());   // 引擎内部完成 parse + evaluate
```

### 最容易踩的坑

试图做「预编译本地化文本以省掉每帧 parse」这类优化，然后发现 `RootExpressions` 是 `internal`（`MBTextModel.cs:12`），既读不了也存不了，`MBTextManager.Tokenizer` 同样是 `internal`（`MBTextManager.cs:529`）。后果是这个方向在 1.5.3 根本走不通，强行用反射绕过去的代码在别的 mod 先一步解析同一批文本时会造成重复解析且无任何节省。真正为重复渲染准备的缓存是 [TextObject](../TextObject) 那侧的 `CacheTokens()`（`TextObject.cs:147`）和它的语言下标失效判断（`TextObject.cs:135`），从那里入手。

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
