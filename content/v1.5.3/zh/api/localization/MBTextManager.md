---
title: "MBTextManager"
description: "文本渲染的执行引擎：持有当前语言处理器与全局变量表，把 TextObject 跑成最终字符串，同时提供语言切换、语法函数注册和全局变量注入。"
---

# MBTextManager

**Namespace:** TaleWorlds.Localization
**Module:** TaleWorlds.Localization
**Type:** `public static class MBTextManager`
**Base:** 无（静态类）
**Source:** `bannerlord-1.5.3/TaleWorlds.Localization/MBTextManager.cs`

## 概述

`MBTextManager` 是本地化链路的发动机，[TextObject](../TextObject) 的 `ToString()` 最终都落到它的 `ProcessTextToString` 上。它持有三份全局状态：当前语言 id / 下标 / 当前 `LanguageSpecificTextProcessor` 实例、一份 `TextProcessingContext`（全局变量表 + 语法函数表）、以及一个共享 `Tokenizer`。它负责的事：切换语言、把 `{=id}` 解析成译文、把全局变量和语法函数提供给求值器、以及给对话动画标签和语音配音做预处理。它不负责「有哪些语言」和「文件在哪」——那是 [LocalizedTextManager](../LocalizedTextManager)。

## 心智模型

**渲染管线（`ProcessTextToString` 的实际流程）**

1. 空值短路：`to == null` 返回 `null`；`IsNullOrEmpty(to)` 返回 `""`。
2. `GetLocalizedText(to.Value)`：如果 `Value` 以 `{=` 开头，就截出 id 去 `_gameTextDictionary` 查当前语言译文；**查不到就把 `{=id}` 后面那截原文返回**（并去掉 `{%.comment}` 段）。若 id 是 `*` 或 `!`（单字符），直接跳过查表。英语语言恒返回原文。
3. `Process(localizedText, to)`：拿 `to.GetCachedTokens()`（按当前语言下标缓存），没有就 `Tokenizer.Tokenize(query)`，然后 `MBTextParser.Parse` 成 `MBTextModel`，交给 [TextGrammarProcessor](../TextGrammarProcessor) 逐表达式求值。变量查找顺序：**`TextObject.Attributes` 优先 → 全局 `TextContext`**。
4. `_languageProcessor.Process(text)`：语言级后处理，把还没被语法消费的 `{.标记}` 展开成语法（复数、变格、冠词等）。
5. `shouldClear` 为真时调 `_languageProcessor.ClearTemporaryData()` 清理该语言处理器的临时状态。
6. `LocalizationDebugMode` 为真时，最终结果前面加 `"(id) "`。**做本地化调试就靠这个开关**，mod 开发期可以打开它来确认某段 UI 到底来自哪个 id。

**谁创建它 / 谁调它**：它是纯静态类，字段初始化时就有 `new EnglishTextProcessor()`。引擎在 `Module.Initialize` 阶段通过 `MBTextManager.ChangeLanguage` 完成第一次真正的初始化。游戏逻辑（1100+ 处 `MBTextManager.SetTextVariable` 调用）灌变量，UI 布局阶段通过 `TextObject.ToString()` 触发渲染。

**典型调用顺序（mod 注入一条全局变量）**：`MBTextManager.SetTextVariable("TAG", value)` → 把 `TextObject` 交给 UI → UI 渲染时 `ToString()` 查全局表。

**常见误用与坑**

1. **`SetTextVariable` 写的是全局表，不是实例变量**。这是官方最常用的注入方式（1108 处命中），但全局变量名是**跨 mod 共享命名空间**——你用 `MBTextManager.SetTextVariable("GOLD", ...)` 就把官方或其它 mod 的 `{GOLD}` 覆盖了。mod 一律给自己的变量加前缀（如 `{MYMOD_PRICE}`）。
2. **`SetTextVariable` 没有生命周期管理，也没有作用域**。设了就不会被清，直到下次 `ClearAll()` 或进程结束。设一次之后每次渲染都用它——如果你每帧改这个全局变量，所有引用该变量的文案每帧都会重新展开，性能上要留意。
3. **`ChangeLanguage` 会连带重载语法函数**。内部调 `LocalizedTextManager.LoadLanguage` → `MBTextManager.ResetFunctions()` → 重新注册。切语言不是廉价的原子操作，UI 会看到一帧的中间态；切语言后**必须重建 UI**，否则旧 widget 里缓存的字符串不会更新。
4. **`ClearAll()` 只清变量，不清函数**。`TextContext.ClearAll()` 实现是 `_variables.Clear()`。`ResetFunctions()` 是另一个入口，两者别搞混。
5. **`LocalizationDebugMode` 是全局静态开关**，打开后每条译文前面都会多出 `(id) `。它同时影响存档写入吗？不影响——存档存的是 `{=id}原文`。但它会影响任何拿 `ToString()` 结果去写文件/日志/做字符串比较的代码，**不要在正式逻辑路径上开着它**。
6. **`GetLocalizedText` 用的两个 `StringBuilder` 是 `[ThreadStatic]`**，而语言处理器（俄语、波兰语的 `WordGroups` 等）是普通静态字段。前者线程安全后者不安全，整体只在主线程用是唯一安全假设。
7. **`DiscardAnimationTags` / `GetConversationAnimations` 是给对话系统用的**，`GetConversationAnimations` 内部硬编码了 4 个槽位（`ib` / `if` / `rb` / `rf`）并返回固定长度 4 的数组。它的输入是**已经渲染完成的字符串**（`to.CopyTextObject().ToString()`），所以必须在语言处理器跑完之后调。

## 怎么用

### 怎么拿到它

纯静态类，没有构造入口。字段初始化时就绪：`TextContext`（`MBTextManager.cs:500`）、`_languageProcessor = new EnglishTextProcessor()`（`:503`）、`_activeTextLanguageId = "English"`（`:509`）。所以在你自己的任何静态初始化里都能安全调用 `SetTextVariable`——不需要等战役开始。

第一次真正的初始化发生在 `MBTextManager.ChangeLanguage(language)`（`:37`）：它按顺序做四件事——重建 `_languageProcessor = LocalizedTextManager.CreateTextProcessorForLanguage(language)`（`:41`）、写 `_activeTextLanguageId`（`:42`）、写 `_activeTextLanguageIndex`（`:43`）、最后 `LocalizedTextManager.LoadLanguage(...)` 重载翻译表（`:44`）。语言不在配置里则 `Debug.FailedAssert("Invalid language", ...)` 后返回 `false`（`:47-48`）。

变量写入的落点是 `MBTextManager.TextContext.SetTextVariable`（`:165`、`:175`）。`TextContext` 本身是 `private static readonly`（`:500`），外部拿不到实例，只能经由这些静态方法间接使用。

### 典型用法

```csharp
// 1) 灌全局变量（引擎自身有上千处这么用）
MBTextManager.SetTextVariable("MYMOD_PRICE", 1250);
MBTextManager.SetTextVariable("MYMOD_TRAITS", 0, "brave");   // 数组重载，落成 "MYMOD_TRAITS:0"
MBTextManager.SetTextVariable("MYMOD_HINT", new TextObject("{=some_id}"));

// 2) 确认某个语言装了没有再切；切完要重建 UI
if (MBTextManager.LanguageExistsInCurrentConfiguration("Turkish", true))
{
    MBTextManager.ChangeLanguage("Turkish");
    ScreenManager.PopScreen();
}

// 3) 文本语言与语音语言是两套，切语音语言不报错
MBTextManager.TryChangeVoiceLanguage("English");

// 4) 开发期确认一条 UI 文本来自哪个 id（结果会带 "(id) " 前缀）
MBTextManager.LocalizationDebugMode = true;
```

### 最容易踩的坑

看到 `SetTextVariable` 的第三个参数 `sendClients` 就以为它在联机里同步。1.5.3 的两个主重载（`MBTextManager.cs:159` 和 `:169`）收下这个参数后**一次也没有使用**——`:161-165` 和 `:171-175` 只做了 null 检查和 `TextContext.SetTextVariable`。其余重载更是直接硬编码传 `false`（`:182`、`:189`、`:200`、`:211`）。后果是联机对战时服务器设的变量根本不会下发到客户端，客户端界面里的 `{MYMOD_PRICE}` 保持未展开的原样，而且没有任何报错或日志。变量同步必须另走网络层，不要依赖这个参数。

## 主要成员

**当前语言状态**

- `static string ActiveTextLanguage { get; }`：只读，当前语言 StringId，默认 `"English"`。
- `static int GetActiveTextLanguageIndex()`：当前语言在 `LanguageData` 里的下标。`TextObject` 用它做 token 缓存的失效判断——**索引变化意味着缓存作废**，不要在渲染中途切语言。
- `static bool LocalizationDebugMode { get; set; }`：调试开关，打开后所有 `ProcessTextToString` 结果带 `(id) ` 前缀。
- `static bool LanguageExistsInCurrentConfiguration(string language, bool developmentMode)`：语言是否在当前配置里。等价于 `GetLanguageIds(developmentMode).Contains(language)`。
- `static bool ChangeLanguage(string language)`：**切换语言的主入口**。会重建语言处理器实例、设置 id 与下标、并触发一次全量翻译表重载。返回 false 表示语言不在配置里（内部 `Debug.FailedAssert`）。运行时调用它之后，UI 层需要自己重建。
- `static bool TryChangeVoiceLanguage(string language)`：**语音语言与文本语言分离**。语音语言单独一套 `LocalizedVoiceManager` 字典，可以在文本是中文、语音是日语的配置下工作。返回 false 且**不报错**（不同于 `ChangeLanguage`）。
- `const string LinkAttribute = "LINK"`：超链接文本在 `TextObject.Attributes` 里用的 key。

**变量注入（全部写全局表）**

- `static void SetTextVariable(string variableName, string text, bool sendClients = false)` / `(string, TextObject, bool)` / `(string, int)` / `(string, float, int decimalDigits = 2)` / `(string, object)` / `(string, int arrayIndex, object content)`：六个重载。`float` 会 `MathF.Round`。`arrayIndex` 那个把 key 变成 `"name:index"`，配合语言包里的 `{NAME[0]}` 数组语法使用。`object` 重载只接受能 `ToString()` 的东西，最终包成 `new TextObject(content.ToString())`。`sendClients` 参数在 1.5.3 的实现里**被完全忽略**，纯粹是历史签名。
- `static void ClearAll()`：清空全局变量表。切战役、重开游戏、或者你想确保某个变量没被污染时调它。

**语法函数**

- `static void SetFunction(string funcName, string functionBody)`：把一段 MBText 语法体注册成命名函数。**1.5.3 全代码库只有一处调用点**（语言包 `<functions>` 节点），mod 基本用不到，除非你在自定义 `language_data.xml` 里定义。
- `static void ResetFunctions()`：清空函数表。`LoadLanguage` 每次都先调它。

**对话与配音**

- `static string[] GetConversationAnimations(TextObject to)`：把渲染结果里的 `[ib:...]` / `[if:...]` / `[rb:...]` / `[rf:...]` 标签解析成 4 元素数组。官方唯一调用点在 `ConversationManager.ProcessSentence`。
- `static bool TryGetVoiceObject(TextObject to, out VoiceObject vo, out string vocalizationId)`：给一条对话文本找配音。若文本自身没有 `{=!}` 形式的语音 id，会 token 化后逐个 `Identifier` token 递归找——**这是「一行文本里嵌了多句时逐句配音」的机制**。
- `static string DiscardAnimationTags(string text)` / `static string DiscardAnimationTagsAndCheckAnimationTagPositions(string text)`：剥掉 `[...]` 动画标签。后者先校验标签内不含有效文本再剥——**两者返回值一样，校验信息被丢弃了**，属于开发期辅助。

**错误**

- `static void ThrowLocalizationError(string message)`：走 `Debug.FailedAssert`。求值阶段遇到 `Exp should not be null!` 之类就调它。**在正式构建里不会抛异常**，只打日志——所以语法错误表现为「界面显示为空」而不是崩溃。

## 使用示例

```csharp
// 官方 AlleyCampaignBehavior 的真实写法：往全局表灌变量，然后交给 UI 渲染
// 语言包里对应：<string id="..." text="...{ALLEY_TYPE}...{FURTHER_INFO}..."/>
MBTextManager.SetTextVariable("ALLEY_TYPE", playerAlleyData.Alley.Name, false);
MBTextManager.SetTextVariable("FURTHER_INFO", textObject, false);
MBInformationManager.AddQuickInformation(hintText, 0);

// 给自己的语言包做数组变量：SetTextVariable(name, index, value) 会写成 "NAME:0"
MBTextManager.SetTextVariable("MYMOD_TRAITS", 0, "brave");
MBTextManager.SetTextVariable("MYMOD_TRAITS", 1, "loyal");
// 语言包里写 {MYMOD_TRAITS[0]}

// 开发期确认一条 UI 文本的来源：打开后所有译文前面会带 (id)
MBTextManager.LocalizationDebugMode = true;

// 切语言：切完必须重建 UI，否则已存在的 widget 还显示旧语言
if (MBTextManager.LanguageExistsInCurrentConfiguration("Turkish", true))
{
    MBTextManager.ChangeLanguage("Turkish");
    ScreenManager.PopScreen();               // 回到主界面重建
}

// 语音语言可以与文本语言不同（TextObject 带 {=!} 前缀的才会走配音查找）
MBTextManager.TryChangeVoiceLanguage("English");

// 取对话的四个方向动画 + 配音（官方 ConversationManager.ProcessSentence 的做法）
string[] animations = MBTextManager.GetConversationAnimations(currentSentenceText);
if (MBTextManager.TryGetVoiceObject(currentSentenceText, out VoiceObject voice, out string vocalizationId))
    Campaign.Current.Models.VoiceOverModel.GetSoundPathForCharacter(character, voice);
```

## 风险与边界

- **全局状态即进程状态**。`_activeTextLanguageId`、`_activeTextLanguageIndex`、`_languageProcessor`、`TextContext` 全是静态单例，跨战役共享。**读档不会重建它们**——上一局设的全局变量会漏到下一局。需要干净状态时显式 `ClearAll()`。
- **语言处理器不是线程安全的**。俄语 / 波兰语处理器把词组缓存放在普通 `static` 字段里（`WordGroups`、`WordGroupsNoTags`、`LinkList`），`Process` 期间会写入、`ClearTemporaryData` 会清空。**在 worker 线程上渲染同一条文本会得到错乱结果**。主线程渲染是唯一安全假设。
- **`GetLocalizedText` 的 fallback 会掩盖缺失**。找不到译文时返回英文原文，界面上看起来「正常」。开发期只能靠 `LocalizationDebugMode` 或 `LocalizedTextManager.CheckValidity` 来发现缺条目。
- **函数表随语言重载**。`LoadLanguage` 第一件事就是 `ResetFunctions()`。如果 mod 在 `ChangeLanguage` 之后注册函数，函数会活到下一次切语言为止；切语言之前注册的就白注册了。
- **`sendClients` 是死参数**。所有 `SetTextVariable` 重载都收下它然后忽略。联机同步变量要走别的通道，别指望这个参数。
- **`SetTextVariable` 传 null 是静默 no-op**（`if (text == null) return;`）。变量被吞掉时语言包里会留一个未展开的 `{TAG}`，不会有任何报错。
- **不要缓存 `ProcessTextToString` 的输出**。语言可运行期切换、`LocalizationDebugMode` 可运行期切换，两者都会让缓存失效。

## 依赖关系

- [LocalizedTextManager](../LocalizedTextManager) — 换语言与翻译表重载的实际执行者，`GetLocalizedText` 查到它
- [TextObject](../TextObject) — 调它 `ToString()`，并从它身上取 `GetCachedTokens`
- [TextGrammarProcessor](../TextGrammarProcessor) — 表达式求值阶段，`Process` 的直接下游
- [TextProcessingContext](../TextProcessingContext) — 全局变量表与函数表的持有者，`SetTextVariable` 的落点
- [LanguageSpecificTextProcessor](../LanguageSpecificTextProcessor) — 语法级后处理基类，`ChangeLanguage` 会重建具体实例
- [VoiceObject](../VoiceObject) — `TryGetVoiceObject` 的输出类型
- [ScreenManager](../../gui/ScreenManager) — 切语言后需要它来重建 UI
- [Mission](../../mission/Mission) — `ConversationManager` 在任务里调对话动画与配音
