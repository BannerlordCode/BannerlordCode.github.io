---
title: "LanguageSpecificTextProcessor"
description: "语言级文本后处理的抽象基类：在语法展开之后把 {.} 标记变成该语言的实际形态（英语复数、俄语变格、土耳其语元音和谐等）。"
---

# LanguageSpecificTextProcessor

**Namespace:** TaleWorlds.Localization.TextProcessor
**Module:** TaleWorlds.Localization
**Type:** `public abstract class LanguageSpecificTextProcessor`
**Base:** `System.Object`（无基类）
**Source:** `bannerlord-1.5.3/TaleWorlds.Localization/TextProcessor/LanguageSpecificTextProcessor.cs`

## 概述

这是整个本地化体系里**唯一的官方扩展点**。抽象基类本身只做一件事：扫描已完成语法展开的字符串，把 `{.标记}` 形式的语言标记交给具体子类解释，同时在基类里统一实现三个语言无关的标记（`{^}` 首字母大写、`{_}` 首字母小写、`{%}` 到下一个标记为止转小写）。语法层（`{@Field}`、`{?条件}`、`{#选择}`、函数调用）由 [TextGrammarProcessor](../TextGrammarProcessor) 负责，语言层（复数、变格、冠词、介词缩合）由这里负责——两者是前后串联的独立两层。

## 心智模型

**执行时机**：[MBTextManager](../MBTextManager) 的 `ProcessTextToString` 里，`TextGrammarProcessor.Process(...)` 跑完之后立刻 `_languageProcessor.Process(text)`。也就是说**所有变量已经展开、所有函数已经求值完**，剩下的是纯字符串层面的按语言重写。当前实例由 `ChangeLanguage` 重建，默认是 `new EnglishTextProcessor()`。

**基类 `Process(string text)` 的算法**：

1. 文本里没有 `{` 就直接原样返回——**这是最常见的快速路径**，绝大多数不含语言标记的文本零开销。
2. 扫描到 `{` 时用 `ReadFirstToken` 读出花括号内的 token（并推进游标）。
3. **只有 `token[0] == '.'` 的才继续处理**（`IsPostProcessToken`）。也就是说 `{.MP}` `{.g}` `{.link}` 进子类，其它标记（已经被语法层消费或识别的）在这里被跳过。
4. `ProcessTokenInternal` 分派：`{^}`（长度 2 时首字母大写）、`{_}`（首字母小写）、`{%}`（记录一个 lower marker 到静态 `_lowerMarkers`），其余交给抽象方法 `ProcessToken`。
5. 最后 `ProcessLowerCaseMarkers` 把两个 marker 之间的区段转小写。
6. `LowerMarkers` 是 `[ThreadStatic] static List<int>`，进出 `Process` 时 save/restore——**支持嵌套调用**（俄语/波兰语的词组处理会 `base.Process(...)` 递归调用自己）。

**`FindNextLetter` 的一个硬编码行为**：遇到 `<a style="Link.` 开头的超链接标记时，它会跳过整个 `<a ...>` 标签再找字母，这样 `{^}` 作用在链接文字上而不是作用在 HTML 属性上。这是本模块里唯一与 GUI 渲染耦合的地方。

**常见误用与坑**

1. **子类必须实现全部三个成员，且不能依赖默认行为**。`ProcessToken` 是纯虚；`CultureInfoForLanguage` 被 `ProcessTokenInternal` 用来做 `char.ToUpper(c, cultureInfoForLanguage)`——**返回 `CultureInfo.InvariantCulture` 会让土耳其语 i/I 之类的 locale 规则失效**。
2. **`Process` 不会递归处理自己插入的内容之外的 `{.}`**。你在 `ProcessToken` 里 `outputString.Append("{.MP}")` 不会被再次解释（游标已经过去了）。想触发别的标记，必须自己在 `outputString` 上调用等价逻辑。
3. **`ClearTemporaryData()` 必须在每次渲染后调用**，否则上一次渲染的临时状态（俄语的 `WordGroups` / 性别、波兰语的软化辅音状态、土耳其语的 `LinkList`）会漏到下一次。[MBTextManager](../MBTextManager) 只在 `ProcessTextToString(to, shouldClear: true)` 时调它，`shouldClear: false` 时不调——**`ToStringWithoutClear()` 就是这种路径**，所以你不能在管线中间随便调它。
4. **`{^}` 和 `{_}` 只作用于「下一个字母」**，不是「下一个词」。`FindNextLetter` 会跳过 `<` 后两个字符（当成跳过 GUI 标签的启发式），所以前面紧挨着富文本标签时行为不直观。
5. **`{%}` 的 marker 是全局静态的 `[ThreadStatic] List<int>`**。它是「两个 marker 夹一段转小写」的成对语义，**只写一个 `{%}` 会把后面全部文本转小写**（`ProcessLowerCaseMarkers` 的 else 分支）。
6. **不要在 `ProcessToken` 里修改 `sourceText` 或做超出 `cursorPos` 的假设**。`cursorPos` 是 `ref`，具体子类靠它回跳（俄语/波兰语处理链接时会 `cursorPos -= LinkEndingLength` 再 `+=` 回来）。乱动会破坏扫描位置。

## 主要成员

**抽象成员（子类必须实现）**

- `abstract void ProcessToken(string sourceText, ref int cursorPos, string token, StringBuilder outputString)`：解释一个 `{.标记}` 并把结果写进 `outputString`。`token` 是**不含花括号和前导点**的内容（如 `"MP"`），`cursorPos` 已经越过 `}`。这是语言规则的唯一入口。
- `abstract CultureInfo CultureInfoForLanguage { get; }`：该语言的大小写规则。基类用它做 `char.ToUpper` / `char.ToLower`。
- `abstract void ClearTemporaryData()`：清空本次渲染留下的所有中间状态。由 [MBTextManager](../MBTextManager) 在每次 `ProcessTextToString(..., shouldClear: true)` 末尾调用。

**具体成员**

- `string Process(string text)`：主入口。返回处理后的字符串；`text` 为 `null` 时返回 `null`。文本里没有 `{` 时**直接原样返回**（快速路径）。
- `LanguageSpecificTextProcessor()`：默认构造函数无逻辑，供子类隐式调用。

**内置标记（基类处理，不需要子类写）**

- `{^}`：下一个字母转大写（按 `CultureInfoForLanguage`）。
- `{_}`：下一个字母转小写。
- `{%}`：转小写区间的起点；两个 `{%}` 夹住的区段转小写，单个则到串尾。

**内置常量（private）**

- `LinkTag = ".link"`（`internal const`，也在 [MBTextManager](../MBTextManager) 有一份）、`LinkStarter = "<a style=\"Link."`、`LinkEnding = "</b></a>"`。

## 使用示例

```csharp
// 为语言包里的新语言写一个处理器：只需三个成员
public class MyLangTextProcessor : LanguageSpecificTextProcessor
{
    // 1) 语法标记：token 是花括号里的内容（不含前导点），游标已越过 '}'
    public override void ProcessToken(string sourceText, ref int cursorPos, string token, StringBuilder outputString)
    {
        // 复数标记：往前看一个词，词尾是 -en 就还原
        if (token == "p")
        {
            int end = outputString.Length;
            while (end > 0 && !char.IsWhiteSpace(outputString[end - 1])) end--;
            int len = outputString.Length - end;
            string word = outputString.ToString(end, len);
            if (word.EndsWith("en", StringComparison.Ordinal))
            {
                outputString.Remove(end, len);
                outputString.Append(word.Substring(0, len - 2));
                outputString.Append('e');
            }
            return;
        }
        // 未识别的标记：原样保留，不要吃掉（基类已经处理 {^} {_} {%}）
    }

    // 2) 大小写规则：决定 {^} / {_} 的行为
    public override CultureInfo CultureInfoForLanguage => new CultureInfo("ml");

    // 3) 清理：每次渲染后必须把中间状态清空，否则会污染下一次
    public override void ClearTemporaryData() { _lastNounEnding = 0; }
    private static int _lastNounEnding;
}

// 注册：language_data.xml 里写全限定名，CreateTextProcessorForLanguage 会 Activator.CreateInstance
// <LanguageData id="MyLang" text_processor="MyMod.Localization.MyLangTextProcessor, MyMod" ... />

// 运行时验证效果：这些标记在语法展开之后才被语言处理器解释
TextObject to = new TextObject("{=myModTroops}You have {MYMOD_COUNT}{.p} soldiers left.", null);
MBTextManager.SetTextVariable("MYMOD_COUNT", 5);
Debug.Print(to.ToString());   // 英语下 {.p} 被 EnglishTextProcessor 变成复数形式

// 语法层与语言层是串联的独立两层，不要指望语法层懂变格：
// {^}/{_}/{%} 由基类处理，其余所有 {.xxx} 全部转交你的 ProcessToken
TextObject cased = new TextObject("{=myModCap}{^}hello and {%}WORLD and {^}goodbye", null);
Debug.Print(cased.ToString());   // 首字母大写 + 中段转小写
```

## 风险与边界

- **实例生命周期与语言绑定**。`MBTextManager._languageProcessor` 只有一个实例，换语言时 `CreateTextProcessorForLanguage` 造新的。所以处理器实例**不能缓存任何跨文本的数据**——除非你确定那个数据是语言无关的。俄语/波兰语处理器用 `static` 存临时数据正是为了让 `ClearTemporaryData` 能统一清掉，这也意味着**两个处理器实例共享同一份静态字段**。
- **`ClearTemporaryData` 漏调 = 跨文本污染**。最典型的表现是「界面 A 里某个名词用了界面 B 的性别」，俄语和波兰语里尤其明显。如果你在自己的代码里绕过 [MBTextManager](../MBTextManager) 直接调 `Process`，**必须自己紧跟一句 `ClearTemporaryData()`**。
- **`Process` 会修改传入游标状态**，但 `outputString` 是共享的累积缓冲，不是本类创建的。所以在 `ProcessToken` 里 `outputString.Remove(outputString.Length - n, n)` 改写**已经输出的内容**是所有子类的常规手法——你实现时也可以这么干，但要清楚你在改的是「前面已渲染完的部分」。
- **不支持线程并发**。`_lowerMarkers` 是 `[ThreadStatic]` 处理的不错，但各语言处理器的 `static` 字段（`WordGroups` 等）是普通静态。主线程渲染是唯一安全假设。
- **不是存档对象**。处理器实例不参与序列化，切语言即重建。
- **继承成本很低但调试成本高**。三个成员，实现完你只能在语言包里写 `{.标记}` 来间接测试——**没有任何单元测试入口**（`MBTextManager.Tokenizer` 是 internal）。开发期用 `MBTextManager.LocalizationDebugMode = true` 确认查表正确，再用编辑器实时看标记展开效果。

## 依赖关系

- [MBTextManager](../MBTextManager) — 持有当前实例并调用 `Process` / `ClearTemporaryData`；`LocalizedTextManager.CreateTextProcessorForLanguage` 造实例
- [DefaultTextProcessor](../DefaultTextProcessor) — 兜底实现，三个成员全空
- [EnglishTextProcessor](../EnglishTextProcessor) — 内置实现之一，`{^}` `{_}` `{a}` `{A}` `{s}` `{o}` 的参考读法
- [RussianTextProcessor](../RussianTextProcessor) — 变格与性别状态机的最复杂样例
- [TurkishTextProcessor](../TurkishTextProcessor) — 元音和谐与音变后缀，展示了另一类语言规则
- [TextGrammarProcessor](../TextGrammarProcessor) — 上游：本类在它之后运行
- [TextObject](../TextObject) — 下游消费者
