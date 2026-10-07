---
title: "DefaultTextProcessor"
description: "没有专属语言处理器时的兜底：ProcessToken 与 ClearTemporaryData 都是空实现，意味着该语言的语法标记被读出来之后直接消失。"
---

# DefaultTextProcessor

**Namespace:** `TaleWorlds.Localization.TextProcessor`
**Module:** `TaleWorlds.Localization`
**Type:** `public class DefaultTextProcessor : LanguageSpecificTextProcessor`
**Base:** `LanguageSpecificTextProcessor`
**File:** `Bannerlord.Source/bin/TaleWorlds.Localization/TaleWorlds.Localization.TextProcessor/DefaultTextProcessor.cs`

## 概述

`DefaultTextProcessor` 是 18 行、3 个 override 的**兜底实现**，两个 override 都是空的。`LocalizedTextManager.CreateTextProcessorForLanguage`（`LocalizedTextManager.cs:53-67`）有两条路径会返回它：① 第 56-63 行，`LanguageData.TextProcessor` 里写的类型名 `Type.GetType` 解析不出来（`Debug.FailedAssert` 之后）；② 第 66 行，`LanguageData` 为 null 或它没配 `TextProcessor`。

它在渲染链上的位置是 `MBTextManager.cs:111` 的 `_languageProcessor.Process(text)` 与 `:114` 的 `ClearTemporaryData()`——**每条 `ToString()` 都会过这两步。** `_languageProcessor` 的初值是 `new EnglishTextProcessor()`（`MBTextManager.cs:32`），换语言时被 `LocalizedTextManager.CreateTextProcessorForLanguage` 替换（`:65`）。

## 心智模型

把它当成**「什么都不做的语言适配器」**。三条推论：

第一，**空 `ProcessToken` 不是「保持原样」，是「吃掉」。** `LanguageSpecificTextProcessor.Process`（`LanguageSpecificTextProcessor.cs:35`）逐字符扫描 `{`，遇到就在第 66 行用 `ReadFirstToken`（`:189`）把整段标记读出来，再于第 69 行交给 `ProcessTokenInternal`（`:67`）。`ProcessTokenInternal` 只对 `^` / `_` / `%` 三种走基类自己的处理（`:81`、`:94`、`:107`），**其余一律落到第 113 行的抽象成员**。空实现意味着：**读出来的字符不写进 `StringBuilder`，于是这段标记从输出里彻底消失。**

第二，**它不是「英语」也不是「通用」。** 英语有专门的 `EnglishTextProcessor`（`EnglishTextProcessor.cs:8`，370 行，含 53 条不规则名词表）。`DefaultTextProcessor` 连 a/an 都不做——`EnglishTextProcessor.ProcessToken`（`:73`）第一个 case 就是 `'a'` → `CheckNextCharIsVowel` 决定 `a` 还是 `an`。**所以「没配处理器」与「配了英语」在输出上是两回事。**

第三，**`CultureInfoForLanguage => CultureInfo.InvariantCulture` 是刻意的。** 基类第 79 行取这个属性喂给 `char.ToUpper` / `char.ToLower`（`:88`、`:101`）。**不变文化 = 不套用土耳其语点 i 之类的区域规则。** 对照 `RussianTextProcessor` 之类会返回真实 `CultureInfo` 的实现——这一点在处理 `i`/`I` 的语言上是实质差异。

边界：**`public` 类，公开可实例化**，是 mod 唯一能安全 `new` 出来的语言处理器基类实现。

## 如何使用

**怎么拿到它**：`LocalizedTextManager.CreateTextProcessorForLanguage(id)`（`LocalizedTextManager.cs:53`）是公开入口，返回值直接就是它。**它没有被写进 `MBTextManager._languageProcessor` 的公开途径**——`_languageProcessor` 是 `private static`（`MBTextManager.cs:32`），只能由 `ChangeLanguage`（`:65`）内部替换。

确认某个语言最终落到哪个处理器上：

```csharp
using TaleWorlds.Localization;

LanguageSpecificTextProcessor p = LocalizedTextManager.CreateTextProcessorForLanguage("English");
Debug.Print("English -> " + p.GetType().Name + "  culture=" + p.CultureInfoForLanguage.Name, 0);

// 一个不存在 / 未配置处理器的语言 id -> 落到 DefaultTextProcessor
LanguageSpecificTextProcessor fallback = LocalizedTextManager.CreateTextProcessorForLanguage("Klingon");
Debug.Print("Klingon -> " + fallback.GetType().Name + "  culture=" + fallback.CultureInfoForLanguage.Name, 0);
```

**用它最容易踩的一条**：**在落到本类兜底的语言下，`{.[a]}`、`{.link}` 这类标记会从输出里消失，句子中间少一截，且没有任何告警。** 具体链路：`ReadFirstToken`（`LanguageSpecificTextProcessor.cs:186`）已经把这几个字符从输入里消费掉了，空的 `ProcessToken` 什么都不写。**所以「某个语言下 UI 文案缺词」的第一嫌疑就是它被分到了 `DefaultTextProcessor`。** 排查方法是读该语言的 `LanguageData.TextProcessor` 字段（`LocalizedTextManager.cs:56`）。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `CultureInfoForLanguage` | `public override CultureInfo CultureInfoForLanguage => CultureInfo.InvariantCulture` | **告诉基类用哪套区域规则做大小写转换。** 唯一消费点是 `ProcessTokenInternal`（`LanguageSpecificTextProcessor.cs:79` 取出，`:88` 与 `:101` 喂给 `char.ToUpper` / `char.ToLower`）。**返回不变文化 = 土耳其语点 i、区域化大小写规则都不生效。** 对照 `EnglishTextProcessor.cs:71` 也返回 `InvariantCulture`——所以这一项在英/默认之间没有差异，差异出现在俄/波/土等有自己 `CultureInfo` 的实现上。 |
| `ProcessToken` | `public override void ProcessToken(string sourceText, ref int cursorPos, string token, StringBuilder outputString)` | **空实现，四个参数全不用。** 它是 `LanguageSpecificTextProcessor.cs:27` 的抽象成员，**唯一调用点是基类第 113 行**（由第 69 行的 `ProcessTokenInternal` 调进来）。空实现的后果是：凡是不属于 `^`/`_`/`%` 的标记（英语的 `{.[a]}`、`{.[s]}`、`{.[o]}`，各语言的 `{.link}`）**在 `ReadFirstToken`（`:189`）消费掉之后没有东西被写回，最终输出里这段直接消失。** |
| `ClearTemporaryData` | `public override void ClearTemporaryData()` | **空实现。** 唯一调用点是 `MBTextManager.cs:114`，且只在 `shouldClear` 为真时。英语处理器靠它清理不规则名词与 LinkList 的临时状态；**本类无状态可清，所以清不清都一样。** |

## 真实示例

同一段带 `a/an` 标记的文本，在英语与兜底处理器下的两种结果：

```csharp
using TaleWorlds.Localization;

TextObject line = new TextObject("{=my_an}I met {.[a]} {HERO} on the road.");
line.SetTextVariable("HERO", "Osric");

// 英语处理器（MBTextManager.cs:32 的初值）：EnglishTextProcessor.cs:78-87 按后一个音素选 an / a
Debug.Print("english = " + line.ToString(), 0);
```

注册一个自定义处理器，走 `LocalizedTextManager.CreateTextProcessorForLanguage` 的类型名解析路径：

```csharp
using TaleWorlds.Localization;

// CreateTextProcessorForLanguage 第 58 行 Type.GetType(languageData.TextProcessor) 解析不到时
// 返回 DefaultTextProcessor 并 FailedAssert；mod 可以用 AddLanguageTest 自带一个处理器类型名
LanguageSpecificTextProcessor fallback = LocalizedTextManager.CreateTextProcessorForLanguage("Klingon");
Debug.Print("type=" + fallback.GetType().FullName, 0);

// 直接 new 也行——它是 public，四个 override 都能安全留空
var mine = new DefaultTextProcessor();
mine.ClearTemporaryData();
Debug.Print("custom = " + mine.CultureInfoForLanguage.Name, 0);
```

## 风险与边界

- **空 `ProcessToken` 会吃掉标记，不是放行。** 这是本类最重要的后果：**它不是「原样输出」的处理器。** 想「原样输出」得在 `ProcessToken` 里 `outputString.Append(token)`（还要补上 `{` 与 `}`，因为 `ReadFirstToken`（`:189`）只返回 `{` 与 `}` 之间的部分）。
- **`ClearTemporaryData` 空实现是安全的。** 本类无状态。但**如果继承它再加状态，就必须实现它**，否则 `MBTextManager.cs:114` 的清理是空转。
- **失败时只有 `Debug.FailedAssert`。** `LocalizedTextManager.cs:61` 的断言在发布版不弹窗，**语言静默降级到本类**。
- **初值是英语不是默认。** `MBTextManager.cs:32` 写死 `new EnglishTextProcessor()`。**`ChangeLanguage` 之前跑起来的语言就是英语。**
- **`CultureInfo.InvariantCulture` 影响大小写。** 若你的语言需要土耳其语式点 i，必须提供自己的处理器并返回真实 `CultureInfo`。
- **没有公开途径把它塞进 `MBTextManager._languageProcessor`。** 字段是 `private static`（`MBTextManager.cs:32`），只能靠 `ChangeLanguage`（`:61`）间接替换——**而它最终仍会走 `CreateTextProcessorForLanguage`，所以「强制全局用 `DefaultTextProcessor`」这件事没有干净的做法。**

## 参见

- 基类与分派：[LanguageSpecificTextProcessor](../LanguageSpecificTextProcessor/)（`Process` 第 35 行、`ProcessTokenInternal` 第 67-115 行、`IsPostProcessToken` 第 180 行、`ReadFirstToken` 第 186 行）
- 工厂：[LocalizedTextManager](../LocalizedTextManager/)（`CreateTextProcessorForLanguage` 第 53-67 行）
- 消费方：[MBTextManager](../MBTextManager/)（`:32` 初值、`:65` 换语言、`:111` 调 `Process`、`:114` 调 `ClearTemporaryData`）
- 对照实现：`[EnglishTextProcessor](../EnglishTextProcessor/)`（370 行，53 条不规则名词）、以及 `FrenchTextProcessor` / `GermanTextProcessor` / `ItalianTextProcessor` / `PolishTextProcessor` / `RussianTextProcessor` / `SpanishTextProcessor` / `TurkishTextProcessor`
- 表达式树侧：[LangaugeMarkerExpression](../LangaugeMarkerExpression/)（把 `{.link}`、`{.[a]}` 搬进结果串的那个节点）
- 桶首页：[localization API 分区](../)