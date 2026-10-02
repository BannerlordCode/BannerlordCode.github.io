---
title: "TextProcessingContext"
description: "一次文本渲染期间的变量与语法函数作用域：既保存 MBTextManager 注入的全局变量，也持有语言包注册的 function 定义和函数调用的参数栈。"
---

# TextProcessingContext

**Namespace:** TaleWorlds.Localization.TextProcessor
**Module:** TaleWorlds.Localization
**Type:** `public class TextProcessingContext`
**Base:** `System.Object`（无基类）
**Source:** `bannerlord-1.5.3/TaleWorlds.Localization/TextProcessor/TextProcessingContext.cs`

## 概述

`TextProcessingContext` 是文本求值时的**变量与函数作用域**。它有两个字段：`_variables`（`Dictionary<string, TextObject>`，键比较用自定义的 `CaseInsensitiveComparer`）和 `_functions`（`Dictionary<string, MBTextModel>`，键是语言包 `<functions>` 里声明的函数名，值是该函数体的语法树）。此外还有两个 `Stack<TextObject[]>` 用于函数调用的参数压栈。它不是「全局变量」的同义词——全局性来自 `MBTextManager` 持有的那个唯一实例；这个类本身只负责作用域语义。它也不保存任何跨文本的状态：每次 `ProcessTextToString` 都复用同一个实例，但只读它，不写它（除了函数调用时的参数栈）。

## 心智模型

**位置**：它在渲染管线的正中。[MBTextManager](../MBTextManager) 私有持有唯一实例 `TextContext`，`Process(query, parent)` 把它传给 `TextGrammarProcessor.Process(model, textContext, parent)`，每个 `TextExpression.EvaluateString(textContext, parent)` 都拿它查变量、查函数、读数组下标。

**变量查找的两级优先级**（这是最容易搞错的地方）：`GetVariableValueAsTextObject(variableName, parent)` 里，先问 `parent`（也就是那个 `TextObject` 自己）的 `Attributes`；没有，再用正则扫描父文本找 `@Field` 嵌套字段；再没有，才查 `_variables` 全局表。**所以 `TextObject.SetTextVariable` 一定能覆盖 `MBTextManager.SetTextVariable`**，这是设计意图——实例变量优先，全局兜底。

**变量里的值怎么被用**：注意 `GetVariableValue` 拿到 `TextObject` 之后会 `textObject.ToStringWithoutClear()` 再重新 tokenize 一遍。这意味着**变量值本身可以是带占位符的文本**，会递归展开。数组访问 `GetArrayAccess(name, index)` 拼出 `"name:index"` 去查全局表——这就是 `MBTextManager.SetTextVariable(name, index, value)` 的落点。

**函数调用**：`CallFunction` 把实参的**已求值**版本和**未求值**（`RawValue`）版本各压一个栈，然后取函数体求值。参数通过 `GetFunctionParam(rawValue)` / `GetFunctionParamWithoutEvaluate(rawValue)` 按 `$0` `$1` 下标取。**没找到对应函数体时会 fallback 返回第一个实参**——这是「未知函数当恒等函数用」的容错。栈是普通 `Stack<T>`，`CallFunction` 里 push/pop 严格配对；函数体里再调另一个函数就是嵌套栈。

**常见误用与坑**

1. **它不是 public API 的入口**。`SetTextVariable`、`GetRawTextVariable`、`GetVariableValue` 全是 `internal`。你要设全局变量只能走 `MBTextManager.SetTextVariable`，别试图反射或强转。
2. **它是进程级单例，不是每次渲染一份**。`MBTextManager.TextContext` 是 `private static readonly`，整个进程一个。所有 [TextObject](../TextObject) 的渲染共享同一张全局变量表。跨战役不重置。
3. **`ClearAll()` 是 internal 的，且只清 `_variables`**。函数表要用 `ResetFunctions()`。想在读档后彻底重置，没有公开的单一入口，只能 `MBTextManager.ClearAll()` + `ResetFunctions()` 两个都调。
4. **`GetFunctionParam` 找不到时返回的不是空而是带错误文本的 `TextObject`**：`new TextObject("Can't find parameter:" + rawValue)`。**这个字符串会直接出现在最终译文里**。语言包里写了超界的 `$2` 而函数只收一个参数，界面上就会出现 `Can't find parameter:$2`，不是异常。
5. **`CallFunction` 的参数栈用完必须弹**。源码里 push 之后无论走哪条分支都 `Pop()` 两次，逻辑上是安全的——但如果你自己继承了 `TextExpression` 并在 `EvaluateString` 里再调 `CallFunction` 而中途抛异常，栈会失衡，后续所有函数调用全部错位。**不要继承或包装 `TextExpression`**。
6. **`_variables` 用 `CaseInsensitiveComparer`**，但 `_functions` 用默认比较器。变量名大小写不敏感，函数名大小写敏感——这个不对称在写语言包时容易搞混。

## 主要成员

**函数注册（public）**

- `void SetFunction(string functionName, MBTextModel functionBody)`：注册一个语言包函数。`MBTextManager.SetFunction` 转发到这。语言切换时会被 `ResetFunctions` 清掉重建。
- `void ResetFunctions()`：清空 `_functions`。切语言前由 `LoadLanguage` 调用。
- `MBTextModel GetFunctionBody(string functionName)`：取函数体，找不到返回 `null`。`CallFunction` 在返回 `null` 时走「直接返回第一个实参」的容错。

**函数参数（public）**

- `TextObject GetFunctionParam(string rawValue)`：按 `$N` 取**已求值**的实参。`rawValue.Substring(1)` 不是数字时返回 `TextObject.GetEmpty()`；栈为空或越界时返回带错误文本的 `TextObject`。
- `TextObject GetFunctionParamWithoutEvaluate(string rawValue)`：取**未求值**的实参（原始写法）。语法分析类 token（如 `GetParameterWithMarkerOccurance`）需要它——要检查参数里还有没有 `{标记}`，而不是看渲染后的结果。

**查询（internal，但通过 [TextProcessingContext] 页引用的语言处理器间接可达）**

- `TextObject GetRawTextVariable(string variableName, TextObject parent)`：只取原始值不求值，查不到返回 `TextObject.GetEmpty()`。`MBTextManager.ProcessTextForVocalization` 用它逐 token 找配音。
- `MultiStatement GetVariableValue(string variableName, TextObject parent)`：把变量的值**重新 tokenize 成表达式列表**返回。用于 `{IF}` 这类需要把变量当语句块执行的场景。
- `ValueTuple<TextObject, bool> GetVariableValueAsTextObject(string variableName, TextObject parent)`：取变量值并返回 `(值, 是否真实存在)`。第二个 bool 是判断「变量没设过」的唯一信号——返回的 `TextObject` 可能是 `"{=!}ERROR: NAME variable has not been set before."` 这样的诊断文本。
- `ValueTuple<TextObject, bool> GetQualifiedVariableValue(string token, TextObject parent)`：处理 `A.B` 这种带点的限定名——先解析 `A`，再在 `A` 的字段里找 `B`。会沿着 `{@Field}` 嵌套结构逐层下钻。
- `MultiStatement GetArrayAccess(string variableName, int index)`：查 `"name:index"` 形式的数组变量。
- `TextObject CallFunction(string functionName, List<TextExpression> functionParams, TextObject parent)`：执行函数调用，含参数栈管理。
- `void ClearAll()`：只清 `_variables`。

**静态 token 判定（internal static）**

- `static bool IsDeclaration(string token)`：`token[0] == '@'`，即 `{@Field}`。
- `static bool IsLinkToken(string token)`：`token == ".link" || token == "LINK"`，超链接标记。
- `static bool IsDeclarationFinalizer(string token)`：长度 2 且是 `\ @` 或 `/ @`，即 `{\@}` 或 `{/@}`，字段作用域的开关。
- `static string ReadFirstToken(string text, ref int i)`：从 `{` 开始读到 `}`，返回花括号内的内容。`ref i` 会推进游标。

## 使用示例

```csharp
// 全局变量表只能通过 MBTextManager 写，TextProcessingContext 的 setter 是 internal
MBTextManager.SetTextVariable("MYMOD_GOLD", mainParty.Party.NumberOfHealthyMembers);   // int 重载
MBTextManager.SetTextVariable("MYMOD_RATE", rate, 1);                     // float + 1 位小数
MBTextManager.SetTextVariable("MYMOD_NAME", hero.Name);                   // TextObject 重载
MBTextManager.SetTextVariable("MYMOD_DESC", someTextObject, false);        // 显式带 sendClients（被忽略）

// 实例变量覆盖全局同名变量：这一行会让 {MYMOD_NAME} 渲染成 "Aldric" 而不是全局的值
TextObject card = GameTexts.FindText("my_mod_hero_card").CopyTextObject();
card.SetTextVariable("MYMOD_NAME", hero.Name);
MBInformationManager.AddQuickInformation(card, 0, null, null, "");

// 变量值本身可以再带占位符，会被递归展开
TextObject inner = new TextObject("{=myModTitle}The Northern Campaign", null);
MBTextManager.SetTextVariable("MYMOD_OUTER", inner);
MBInformationManager.AddQuickInformation(GameTexts.FindText("my_mod_outer"), 0, null, null, "");

// 读档 / 切战役后要彻底重置作用域（ClearAll 是 internal，只能走 MBTextManager）
MBTextManager.ClearAll();       // 清变量表
MBTextManager.ResetFunctions(); // 清函数表（切语言时内部也会做，但这里显式更安全）
```

## 风险与边界

- **变量名是跨 mod 全局命名空间**。`MYMOD_GOLD` 这种前缀是硬要求。用 `GOLD` / `NAME` 这类通用名会和官方或其它 mod 互相覆盖，而这种覆盖没有任何日志提示。
- **全局变量没有作用域也没有清除钩子**。设错了名字（语言包里写 `{MYMOD_GLOD}` 而代码设的是 `MYMOD_GOLD`），渲染时得到的是 `"{=!}ERROR: MYMOD_GLOD variable has not been set before."` 而不是空串——**这句英文诊断文本会显示给玩家**。语言包和代码的变量名必须逐字对齐。
- **函数表随语言切换清空**。`LoadLanguage` 第一步就 `ResetFunctions()`。如果 mod 通过 `MBTextManager.SetFunction` 注册自定义函数，注册时机必须在目标语言加载完成之后，否则会被下一次加载冲掉。
- **线程**：`Stack<TextObject>` 和两个 `Dictionary` 都是普通实例字段，没有锁。并发渲染（多线程 `ToString()`）会让参数栈错位，产出错误的译文。**只在主线程渲染**。
- **`GetFunctionParam` 的越界返回值会污染用户可见文本**。语言包函数调用参数写错（写 `$5` 但只传 2 个）会在界面出现 `Can't find parameter:$5`。这是词条 lint 该抓的错误，用 `LocalizedTextManager.CheckValidity` 跑一遍能提前发现。
- **不是存档对象**。`_variables` / `_functions` 都是纯运行期状态，不进存档。存档只存 `TextObject` 本身（`Value` + `Attributes`），全局变量必须在读档后重新灌一遍。

## 依赖关系

- [MBTextManager](../MBTextManager) — 持有唯一实例，暴露 `SetTextVariable` / `ClearAll` / `ResetFunctions` 给外部
- [TextObject](../TextObject) — `parent` 参数的来源；变量值也是 `TextObject`，会被重新 tokenize
- [MBTextModel](../MBTextModel) — 函数体在 `TextProcessingContext` 里以语法树形式存储
- [TextGrammarProcessor](../TextGrammarProcessor) — 把这个上下文传进每个表达式的 `EvaluateString`
- [LocalizedTextManager](../LocalizedTextManager) — 切语言时触发 `ResetFunctions`
- [SaveManager](../../save-system/SaveManager) — 对比参照：全局变量表不进存档，只有 `TextObject` 字段进
