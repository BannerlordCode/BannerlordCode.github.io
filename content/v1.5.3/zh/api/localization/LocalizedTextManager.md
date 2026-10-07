---
title: "LocalizedTextManager"
description: "语言包与翻译字典的加载器和查询入口：扫描各模块的 language_data.xml、维护可用语言列表、按 id 查译文、校验文案语法。"
---

# LocalizedTextManager

**Namespace:** TaleWorlds.Localization
**Module:** TaleWorlds.Localization
**Type:** `public static class LocalizedTextManager`
**Base:** 无（静态类）
**Source:** `bannerlord-1.5.3/TaleWorlds.Localization/LocalizedTextManager.cs`

## 概述

`LocalizedTextManager` 管的是「有哪些语言」和「某个 id 在当前语言下是什么」这两件事，翻译表本体是一个私有静态 `Dictionary<string, string> _gameTextDictionary`（key 是 `{=id}` 里的 id，value 是译文）。它不是渲染器——把 `{=id}` 变成最终带变量的字符串是 [MBTextManager](../MBTextManager) 的活。它也不是业务层 API：mod 平时拿文本应该用 `TaleWorlds.Core.GameTexts`，那是建立在 `GameTextManager` 上的高层封装，`LocalizedTextManager` 是它下面一层、语言包生命周期管理用的。

## 心智模型

**加载顺序**（这是最关键的心智模型）。引擎 `Module.Initialize()` 里，模块枚举完成之后立刻：

```csharp
ModuleHelper.InitializeModules(Utilities.GetModulesNames(), null);   // 先拿到所有模块路径
this.LoadLocalizationXmls();                                          // 收集路径 -> LoadLocalizationXmls
this.GlobalTextManager.LoadDefaultTexts();                           // 再建立 GameTextManager
this.LoadSubModules(modules, false);                                 // 最后才调 mod 的 OnSubModuleLoad
```

`LoadLocalizationXmls(string[] loadedModules)` 先 `LanguageData.Clear()` 清空语言表，再对每个模块路径找 `<module>/ModuleData/Languages/language_data.xml`（递归 `AllDirectories`），解析成 `LanguageData` 条目。每个 `LanguageData` 记录 `StringId` / `Title` / `SupportedIsoCodes` / `SubtitleExtension` / `TextProcessor`（一个类名字符串）/ 一串 `LanguageFile` 的 xml 路径。注意**这一步只登记语言和文件位置，并不读译文**。

`MBTextManager.ChangeLanguage(id)` 才真正调 `LoadLanguage`：清空 `_gameTextDictionary`，然后遍历该语言的所有 `XmlPaths`，逐个 XmlDocument 解析，`<strings>` 下的 `<string id=... text=.../>` 灌进字典（**注意：英语分支被 `stringId != "English"` 短路跳过**，英语直接用代码里的 fallback 原文），`<functions>` 下的 `<function functionName=... functionBody=.../>` 走 `MBTextManager.SetFunction` 注册成语法函数。

**mod 的位置**：如果 mod 自带语言包，`language_data.xml` 会在上面第 2 步被自动扫到，**不需要手动调任何 API**。单模块热加载（`Module.LoadSingleModule`）走的是 `AddLocalizationXml(modulePath)`，效果一样但不清空已有语言表。

**常见误用与坑**

1. **`GetTranslatedText(languageId, id)` 的 `languageId` 参数是摆设**。实现只有一句 `if (_gameTextDictionary.TryGetValue(id, out text)) return text;`——`_gameTextDictionary` 里装的**只有当前激活语言**的数据，传什么 languageId 都返回当前语言的译文。真正的按语言取值接口并不存在。
2. **`GetTranslatedText` 查不到返回 `null`，不返回原文**。想拿到「译文或原文」的降级行为，你得自己 fallback 到 `new TextObject("{=" + id + "}")` 之后再 `ToString()`。
3. **`GetLanguageData(id)` 找不到时会 `Debug.FailedAssert` 然后返回 English**。在正式构建里 `FailedAssert` 只打日志，所以传错语言 id 会静默降级到英语——包括 `GetLanguageTitle`、`GetSubtitleExtensionOfLanguage`、`GetCultureInfo` 这几个私有路径。
4. **`LoadLocalizationXmls` 会清空所有语言数据**。在游戏运行中调用它（而不是启动阶段）会丢掉 `AddLocalizationXml` 累积的结果，导致切换语言时找不到 mod 的语言。
5. **语言 id 存在三套命名**：`StringId`（语言包内部 id，如 `"English"`）、`Title`（显示名，如 `"English"` / `"Türkçe"`）、`SupportedIsoCodes`（ISO 码，如 `"tr"`）。`GetLocalizationCodeOfISOLanguageCode` 是 ISO → StringId 的唯一转换入口。传错了 `GetLanguageTitle` 会拿 Title 去比对，永远匹配不上。
6. **`ChangeLanguage` 是命令行功能**（`CommandLineArgumentFunction("change_language", "localization")`），不是给 mod 用的运行时 API。菜单切语言走的是 `MBTextManager.ChangeLanguage` 再触发 UI 重建。

## 怎么用

### 怎么拿到它

纯静态类，唯一入口是 `MBTextManager.ChangeLanguage(language)`（`MBTextManager.cs:37`）——它最后一步就是 `LocalizedTextManager.LoadLanguage(_activeTextLanguageId)`（`MBTextManager.cs:44`）。`LoadLanguage(string)`（`LocalizedTextManager.cs:232-240`）先 `_gameTextDictionary.Clear()`（`:234`）再转私有重载（`:243`）。

私有重载 `LoadLanguage(LanguageData)`（`:243-284`）的顺序很重要：第一件事是 `MBTextManager.ResetFunctions()`（`:245`），然后遍历 `language.XmlPaths` 逐个读 XML（`:248-250`）。英语语言会跳过 `<strings>` 读取（`:247` 的 `flag = stringId != "English"` 加 `:257` 的判断），但 `<functions>` 无条件读（`:268-279`），每条 `<function functionName=... functionBody=...>` 都调 `MBTextManager.SetFunction`（`:276`）。

XML 路径本身来自 `LoadLocalizationXmls`（`:90`）/ `AddLocalizationXml`（`:122`），也就是模块加载期收集的。

### 典型用法

```csharp
// 1) 查一条译文（miss 时返回 null，不抛异常）
string zh = LocalizedTextManager.GetTranslatedText("简体中文", "rhausic_hello");

// 2) 列出当前配置里可选的语言（developmentMode=false 会滤掉未完工语言）
foreach (string id in LocalizedTextManager.GetLanguageIds(false))
    Debug.Print(id + " => " + LocalizedTextManager.GetLanguageTitle(id));

// 3) 语言下标：切语言时它变，TextObject 的 token 缓存靠它失效
int idx = LocalizedTextManager.GetLanguageIndex("简体中文");

// 4) 开发期校验语言包：返回一份文本报告
string report = LocalizedTextManager.CheckValidity(new System.Collections.Generic.List<string>());
```

### 最容易踩的坑

在你的语言 XML 顶层结构不完整时切语言。解析循环硬取 `xmlDocument.ChildNodes[1].FirstChild`（`LocalizedTextManager.cs:253`），没有先检查 `ChildNodes.Count`——只有一个顶层节点就直接 `IndexOutOfRangeException`；而这条异常发生在 `MBTextManager.ChangeLanguage` 的调用栈里（`MBTextManager.cs:44`），会把整个切语言动作打断。后果是：玩家在设置界面选你的语言时游戏直接崩，而崩溃点在引擎内部，跟你的 XML 文件看不出关系。另外 `DeserializeStrings` 遇到没有属性的 `<string>` 节点会主动 `throw new TWXmlLoadException("Node attributes are null!")`（`:291`）。保证每个语言 XML 的根节点下有完整的 `<strings>` / `<functions>` 子节点，并逐个用 `CheckValidity` 验一遍。

## 主要成员

**常量**

- `const string LanguageDataFileName = "language_data"`：语言清单文件名（不含扩展名）。拼路径时用它。
- `const string DefaultEnglishLanguageId = "English"`：所有降级路径的最终归宿。

**语言表查询**

- `static List<string> GetLanguageIds(bool developmentMode)`：返回所有 `IsValid` 的语言 id。`developmentMode: false` 会过滤掉 `IsUnderDevelopment` 的语言——**发布版里 mod 新加的语言默认 `under_development` 为真，不传 true 的话 mod 的语言在正式包里不可选**。
- `static string GetLanguageTitle(string id)`：语言的显示名（来自 `language_data.xml` 的 `name` 属性）。找不到返回 English 的 title。
- `static int GetLanguageIndex(string id)`：`LanguageData` 里的下标。找不到 id 时 fallback 到 English 的下标。这个值会被 `TextObject` 用来判断 token 缓存是否失效，所以它在一次运行内是稳定的。
- `static string GetLocalizationCodeOfISOLanguageCode(string isoLanguageCode)`：ISO 语言码 → 本地化 StringId。找不到 `Debug.FailedAssert` 并返回 `"English"`。
- `static string GetSubtitleExtensionOfLanguage(string languageId)`：该语言字幕文件的扩展名（来自 `subtitle_extension` 属性）。Steam 创意工坊的字幕文件名靠它拼。
- `static string GetTranslatedText(string languageId, string id)`：查当前语言的译文，**没有就返回 null**。

**加载**

- `static void LoadLocalizationXmls(string[] loadedModules)`：**启动期一次性调用**，参数是模块文件夹路径数组。会先清空所有语言数据。mod 正常不需要调。
- `static void AddLocalizationXml(string newModule)`：只把单个模块的 `language_data.xml` 并入现有表，不清空。用于 `LoadSingleModule`（开发期热加载单个模块）。
- `static void AddLanguageTest(string id, string processor)`：构造一个 `LanguageData` 并用 `LoadTestData` 插进表里，`processor` 是文本处理器类名。**1.5.3 全代码库只有它自己的定义处一个命中点，官方不用**，是留给 mod 快速试自定义语言的开关。

**语言处理器工厂**

- `static LanguageSpecificTextProcessor CreateTextProcessorForLanguage(string id)`：按 `language_data.xml` 里的 `text_processor` 属性 `Type.GetType` + `Activator.CreateInstance` 造一个处理器。**类名字符串必须包含命名空间**（如 `"TaleWorlds.Localization.TextProcessor.LanguageProcessors.RussianTextProcessor, TaleWorlds.Localization"`），写错会 `Debug.FailedAssert` 并 fallback 到 `DefaultTextProcessor`。这意味着 mod 可以注册自己的语言处理器——继承 `LanguageSpecificTextProcessor` 并在 `language_data.xml` 里写全限定名即可。

**格式化**

- `static string GetDateFormattedByLanguage(string languageCode, DateTime dateTime)` / `GetTimeFormattedByLanguage(...)`：用 `SupportedIsoCodes[0]` 建 `CultureInfo` 取 `ShortDatePattern` / `ShortTimePattern` 再格式化。`SupportedIsoCodes` 为空时用 `CultureInfo.InvariantCulture`。
- `static bool CheckValidity(string id, string text, out string errorLine)`：**开发期文案 lint**。检查花括号是否配对、`{?` 与 `{\?}` 条件标记是否成对，最后真的把文本跑一遍 `ProcessTextToString` 看会不会抛。返回 true 表示有问题，`errorLine` 给出 `"<id> | <text>"` 格式的一行。

**命令行功能**（自动注册，不用自己调）

- `ChangeLanguage(List<string>)`：`change_language [code/name/iso]`，可按标题或字幕扩展名匹配。找不到返回 `"cant find the language in current configuration."`。
- `ReloadTexts(List<string>)`：`reload_texts`，重新加载当前语言，**返回 `"OK"`**。改完 XML 热重载用这个。
- `CheckValidity(List<string>)`：`check_for_errors`，遍历所有正式语言逐条 `CheckValidity`，结果写进游戏目录的 `faulty_translation_lines.txt`（UTF-16）。

## 使用示例

```csharp
// mod 提供新语言：只要把 ModuleData/Languages/language_data.xml 放对位置，
// 启动时 LoadLocalizationXmls 会自动扫到，不需要任何代码调用。
// 但 language_data.xml 里 must 写 text_processor 的全限定名，否则 CreateTextProcessorForLanguage 会 fallback：
// <LanguageData id="MyLang" name="MyLang" supported_iso="ml" subtitle_extension="mls"
//               text_processor="MyMod.Localization.MyLangTextProcessor, MyMod">
//   <LanguageFile xml_path="mylang_strings.xml" />
// </LanguageData>

// 自定义语言处理器：继承抽象基类，只需实现三个成员
public class MyLangTextProcessor : LanguageSpecificTextProcessor
{
    public override System.Globalization.CultureInfo CultureInfoForLanguage
        => new System.Globalization.CultureInfo("ml");
    public override void ProcessToken(string sourceText, ref int cursorPos, string token, System.Text.StringBuilder outputString) { }
    public override void ClearTemporaryData() { }
}

// 开发期给语言包做 lint：把 official 模块的 strings.xml 逐条 CheckValidity
using (System.Xml.XmlDocument doc = new System.Xml.XmlDocument())
{
    doc.Load("MyMod/ModuleData/Languages/mylang_strings.xml");
    System.Xml.XmlNodeList nodes = doc.GetElementsByTagName("string");
    foreach (System.Xml.XmlNode node in nodes)
    {
        string id = node.Attributes["id"].Value;
        string text = node.Attributes["text"].Value;
        if (LocalizedTextManager.CheckValidity(id, text, out string errorLine))
            TaleWorlds.Library.Debug.Print(errorLine);   // 括号不配对 / 条件标记不成对 / 渲染抛异常
    }
}

// 取语言显示名与字幕扩展名（Steam 创意工坊列字幕用）
string title = LocalizedTextManager.GetLanguageTitle("English");
string ext = LocalizedTextManager.GetSubtitleExtensionOfLanguage("Turkish");
```

## 风险与边界

- **加载顺序是硬约束**。`LoadLocalizationXmls` 在 `OnSubModuleLoad` **之前**执行，所以 mod 在 `OnSubModuleLoad` 里能立刻拿到自己的语言条目。但反过来，mod 若在 `OnGameStart` 之后才创建语言数据，`MBTextManager.ChangeLanguage` 那时才会去读它的 xml——改完 xml 想看效果要走 `ReloadTexts` 命令行或重启。
- **`under_development` 决定正式包里能不能选**。`GetLanguageIds(false)` 过滤掉它，而玩家在设置菜单里走的就是这条路径。发布 mod 时记得在 `language_data.xml` 里写 `under_development="false"`，否则别人看不到你的语言。
- **重复 id 后加载的覆盖先加载的**。`_gameTextDictionary[id] = text` 是直接赋值，多个模块提供同一个 id 时，模块加载顺序决定谁赢。别指望覆盖一定成功。
- **`CheckValidity` 会真的跑一遍渲染**（它内部构造 `new TextObject(...)` 调 `ProcessTextToString`）。在文本里塞了会触发语言处理器副作用的标记时，这个调用有副作用——它跑完不会调 `ClearTemporaryData`，所以别在正式流程里调它。
- **线程**：所有成员都是无锁的静态访问。`LoadLocalizationXmls` / `LoadLanguage` 必须在主线程、启动阶段跑；并发的 `GetTranslatedText` 与换语言互斥没有保障。
- **`Debug.FailedAssert` 的降级不是异常**。所有「找不到语言」的分支都是打日志 + 静默回退 English，不会中断流程。测试里想验证语言配置正确性，得自己检查 `GetLanguageIds(true)` 的结果，别指望它抛。

## 依赖关系

- [MBTextManager](../MBTextManager) — 换语言、注册语法函数、取当前语言下标都转发给它
- [LanguageSpecificTextProcessor](../LanguageSpecificTextProcessor) — `CreateTextProcessorForLanguage` 的返回类型基类
- [DefaultTextProcessor](../DefaultTextProcessor) — 语言处理器缺失时的兜底实现
- [TextObject](../TextObject) — `CheckValidity` 内部构造它来跑渲染
- [SaveManager](../../save-system/SaveManager) — 启动序列里同一阶段初始化存档类型上下文，两者互不依赖但都受 `Module.Initialize` 顺序约束
- [MBSubModuleBase](../../core/MBSubModuleBase) — mod 侧挂载点，落在语言加载之后
