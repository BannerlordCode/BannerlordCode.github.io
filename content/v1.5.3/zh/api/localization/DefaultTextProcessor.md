---
title: "DefaultTextProcessor"
description: "不做任何语言处理的兜底处理器：三个成员全是空实现，用于语言未配置 text_processor 或类型找不到时保证管线不崩。"
---

# DefaultTextProcessor

**Namespace:** TaleWorlds.Localization.TextProcessor
**Module:** TaleWorlds.Localization
**Type:** `public class DefaultTextProcessor : LanguageSpecificTextProcessor`
**Base:** `LanguageSpecificTextProcessor`（抽象类）
**Source:** `bannerlord-1.5.3/TaleWorlds.Localization/TextProcessor/DefaultTextProcessor.cs`

## 概述

`DefaultTextProcessor` 是一个 17 行的兜底实现，全部三个可覆写成员要么返回 `null`、要么什么都不做。它存在的唯一原因是 [LanguageSpecificTextProcessor](../LanguageSpecificTextProcessor) 是抽象类，而语言系统需要一个「什么都不做也能跑」的实例。当 `language_data.xml` 里某个语言没有 `text_processor` 属性，或者属性里的类型名 `Type.GetType` 解析失败时，[LocalizedTextManager](../LocalizedTextManager) 的 `CreateTextProcessorForLanguage` 就返回它。它**不是**「默认语言（英语）的处理器」——那个类是 `EnglishTextProcessor`，被硬编码成 `MBTextManager._languageProcessor` 的初始值。

## 心智模型

**它在管线里的位置**：`MBTextManager.ProcessTextToString` 的第 4 步无条件调 `_languageProcessor.Process(text)`。基类的 `Process` 会做两件事：扫描 `{.标记}` 并调本类的 `ProcessToken`；处理 `{^}` `{_}` `{%}` 三个语言无关标记。**所以「什么都不做」不等于「什么都不变」**——`{^}` 首字母大写、`{_}` 首字母小写、`{%}` 转小写区间仍然工作，因为它们在基类里。而所有 `{.标记}` 会被 `ProcessToken` 静默丢弃，**标记文本本身也不会出现在输出里**（基类的扫描循环已经消费掉了整个 `{...}`）。

**谁创建它**：`CreateTextProcessorForLanguage` 的两条降级路径（`LanguageData == null || TextProcessor == null` → 直接 `return new DefaultTextProcessor()`；`Type.GetType` 返回 null → `Debug.FailedAssert` 后同样返回它）。也包括英语的初始 `_languageProcessor = new EnglishTextProcessor()` 之前的那个概念上的「无处理器」状态。

**典型调用顺序**：不需要你参与。mod 唯一会遇到它的方式是**语言包配置写错时的静默降级**。

**常见误用与坑**

1. **`ProcessToken` 空实现 = 标记被吞掉**。语言包里写了 `{.MP}` 而处理器是 `DefaultTextProcessor`，输出的那句话里不会有「复数标记」，也不会有 `MP` 字样——复数信息**无声丢失**。文本看起来「少了点什么」但没有任何错误提示。
2. **`Debug.FailedAssert` 在正式构建里不抛异常**。所以 `text_processor` 类型名拼错、命名空间写漏、程序集名写错——全都静默降级。**注册自定义处理器后一定要实测切换一次语言**。
3. **`CultureInfoForLanguage` 返回 `CultureInfo.InvariantCulture`**。这意味着 `{^}` `{_}` 用的是区域无关的大小写规则。对土耳其语这类有 i↔I locale 例外的语言，用 `DefaultTextProcessor` 会得到错误的大小写转换。
4. **`ClearTemporaryData` 空实现是安全的**，因为 `ProcessToken` 不写任何状态。这反而是它作为兜底的一个优点。
5. **不要拿它当「不做语言处理的处理器」自己 new 来调试**。想跳过语言处理阶段，引擎里的入口是 `MBTextManager.ProcessWithoutLanguageProcessor`（internal），不是换成一个 `DefaultTextProcessor`——后者仍会跑基类的 `{^}` `{_}` `{%}` 处理。

## 主要成员

- `override void ProcessToken(string sourceText, ref int cursorPos, string token, StringBuilder outputString)`：**空实现**。基类调它来解释每一个 `{.标记}`，它什么都不做——不追加任何输出，也不移动游标（`cursorPos` 保持基类读 token 后的位置）。**语言包里所有 `{.xxx}` 到此被永久丢弃。**
- `override CultureInfo CultureInfoForLanguage { get; }`：返回 `CultureInfo.InvariantCulture`。供基类的 `{^}` / `{_}` 做 `char.ToUpper` / `char.ToLower`。
- `override void ClearTemporaryData()`：**空实现**。因为没有跨调用状态需要清理。

没有其它成员，也没有字段。它连构造函数都没显式写，用的是编译器生成的默认构造。

## 使用示例

```csharp
// 这是 LocalizedTextManager.CreateTextProcessorForLanguage 的两条降级路径：
// 语言没配 text_processor，或者 Type.GetType 解析失败（只 Debug.FailedAssert，不抛）
LanguageSpecificTextProcessor processor = LocalizedTextManager.CreateTextProcessorForLanguage("MyLang");
// 如果 language_data.xml 写的是
//   text_processor="MyMod.Localization.MyLangTextProcessor, MyMod"
// 而类型名/命名空间/程序集名任意一处拼错，processor 就会是 DefaultTextProcessor：
Debug.Print("processor type = " + processor.GetType().Name);   // 期望 "MyLangTextProcessor"，实际会是 "DefaultTextProcessor"

// 后果是可观测的：语言包里的语言标记被吞掉，但 {^} {_} {%} 仍然有效
TextObject to = new TextObject("{=myModCheck}{^}hello {HERO} has {.MP} units{%.}MANY.", null);
to.SetTextVariable("HERO", hero.Name);
MBTextManager.SetTextVariable("MYMOD_UNITS", 3);
Debug.Print(to.ToString());
// DefaultTextProcessor 下：首字母大写生效、%. 区间转小写生效，{.MP} 整段被丢弃

// 开发期用这条断言在 OnSubModuleLoad 里自查语言处理器注册是否成功
LanguageSpecificTextProcessor chosen = LocalizedTextManager.CreateTextProcessorForLanguage("MyLang");
if (chosen is DefaultTextProcessor)
    TaleWorlds.Library.Debug.Print("[MyMod] language_data.xml 的 text_processor 没解析到，复数标记会全部丢失");
```

## 风险与边界

- **无存档风险**，不参与序列化，只是运行期对象。
- **无线程风险**，无状态、无静态字段。
- **它出现在输出里的唯一方式就是你没注意到它**。排查清单：语言包里 `{.MP}` 之类的标记不生效 → 先 `CreateTextProcessorForLanguage` 打印实际类型 → 确认不是 `DefaultTextProcessor` → 再确认 `MBTextManager._languageProcessor` 在 `ChangeLanguage` 之后确实被替换（`ChangeLanguage` 会重建实例，但如果 `LanguageExistsInCurrentConfiguration` 返回 false，它压根不会换）。
- **它不影响查找**。翻译查表在 `GetLocalizedText` 里，早于语言处理发生。降级到 `DefaultTextProcessor` 时译文依然正确，只是语法标记失效——**所以「界面显示的是英文原文但标点都对」通常不是这个原因**。
- **不要继承它来做定制**。它是 concrete class，但继承它等于选择了「不做语言处理」这个语义起点，然后又在子类里加规则——不如直接继承 `LanguageSpecificTextProcessor` 并照抄 [EnglishTextProcessor](../EnglishTextProcessor) 的结构。

## 依赖关系

- [LanguageSpecificTextProcessor](../LanguageSpecificTextProcessor) — 基类，负责 `{^}` `{_}` `{%}` 与标记扫描
- [LocalizedTextManager](../LocalizedTextManager) — 唯一的创建者，两条降级路径
- [MBTextManager](../MBTextManager) — 持有并调用当前语言处理器实例
- [EnglishTextProcessor](../EnglishTextProcessor) — 真正处理英语标记的实现，用作「正常情况」对照
- [TextGrammarProcessor](../TextGrammarProcessor) — 上游阶段：语言标记处理在它之后
