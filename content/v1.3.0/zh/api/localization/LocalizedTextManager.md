---
title: "LocalizedTextManager"
description: "Bannerlord 语言 XML 的静态加载器与查找层：枚举 LanguageData 条目、创建各语言的文本处理器、加载与热加载 ModuleData/Languages 目录树、按文化格式化日期时间，并暴露 change_language / reload_texts / check_for_errors 三个控制台命令。"
---
# LocalizedTextManager

**Namespace:** TaleWorlds.Localization
**Module:** TaleWorlds.Localization
**Type:** `public static class LocalizedTextManager`
**Base:** 无
**Source:** `TaleWorlds.Localization/LocalizedTextManager.cs`

## 概述

`LocalizedTextManager` 负责"拥有语言"这件事的全部，而 `MBTextManager` 负责"用当前语言渲染"。它扫描每个模块的 `ModuleData/Languages` 目录树里的 `language_data.xml`，把它们转成 `LanguageData` 条目，并持有那个扁平的 `Dictionary<string, string> _gameTextDictionary`——里面只放着**一种**语言的译文。它同时是文化桥梁：`GetDateFormattedByLanguage` 与 `GetTimeFormattedByLanguage` 会从语言的 `SupportedIsoCodes` 里挑一个 `CultureInfo`，用它的 `DateTimeFormat` 模式格式化，这是为 Bannerlord 玩家格式化日期的唯一正确做法。有三个通过 `[CommandLineArgumentFunction]` 标注到它身上的控制台命令：`change_language`、`reload_texts`、`check_for_errors`。

## 心智模型

把它理解成**"语言注册表 + 一次只缓存一种语言的翻译缓存"**。这里有两类差异很大的活：（a）枚举与描述语言，稳定且安全；（b）加载与重载翻译数据，具破坏性。

**真实加载顺序（来自 `Module.Initialize`）：**

1. `ModuleHelper.InitializeModules(Utilities.GetModulesNames(), platformModulePaths)` 解析模块列表。
2. `Module.LoadLocalizationXmls()` 收集每个 `ModuleInfo.FolderPath`，调用 `LocalizedTextManager.LoadLocalizationXmls(paths)`。
3. `LoadLocalizationXmls` 首先调用 **`LanguageData.Clear()`**——清空所有语言元数据——然后对每个路径，若存在 `<path>/ModuleData/Languages`，就 `Directory.GetFiles(..., "language_data.xml", SearchOption.AllDirectories)` 并对每个文件调 `LanguageData.LoadFromXml(...)`。
4. `Module.GlobalTextManager.LoadDefaultTexts()`。
5. 之后在 `MBTextManager.ChangeLanguage(...)` 时，`LoadLanguage(languageId)` 清空 `_gameTextDictionary`、调 `MBTextManager.ResetFunctions()`，然后遍历 `language.XmlPaths`：（a）对非英语语言把每个 `<string id=.. text=..>` 反序列化进字典；（b）对**每一种**语言都通过 `MBTextManager.SetFunction` 安装每个 `<function functionName=.. functionBody=..>`。

**三个坑：**

- **`GetTranslatedText(string languageId, string id)` 完全忽略 `languageId`。** 函数体只有 `_gameTextDictionary.TryGetValue(id, out result)`。这个参数是装饰性的；答案永远是最后加载的那一种语言。如果当前是英语却期待德语字符串，你会得到 `null`（或者压根查不到——英语字符串以内联的 `{=id}English text` 形式存在于源码里，从未被插入字典，因为 `LoadLanguage` 用 `bool flag = stringId != "English"` 挡住了那个循环）。
- **`LoadLocalizationXmls` 是破坏性的，`AddLocalizationXml` 不是。** 前者先 `Clear()` 掉每个 `LanguageData` 再重建；后者只把一个模块的目录树合并进来。`Module.LoadSingleModule(modulePath)` 这条热加载路径用的正是**非**清空的 `AddLocalizationXml`。mod 用错了会导致其他所有模块的语言全部消失。
- **`LoadLanguage` 只为非英语语言反序列化 `<string>` 节点。** 英语永远不会填充 `_gameTextDictionary`，因为英语文本内联在 `TextObject.Value` 里。任何靠统计字典条目数来判断本地化是否正常的工具，都会看到"英语缺失"并误以为本地化坏了。

## 何时该用 / 何时不该用

**该用 `LocalizedTextManager` 的场景：**
- 你在做一个语言选择器：`GetLanguageIds(bool developmentMode)`、`GetLanguageTitle(id)`、`GetSubtitleExtensionOfLanguage(id)`。
- 你要格式化日期/时间/文化相关的值：`GetDateFormattedByLanguage`、`GetTimeFormattedByLanguage`。
- 你要把系统区域设置映射到游戏语言：`GetLocalizationCodeOfISOLanguageCode(string)`。
- 你在发布语言包或部分翻译，想从自己的模块目录加载。

**不该用 `LocalizedTextManager` 的场景：**
- 你想渲染一个字符串。用 `TextObject.ToString()`——那条路径走的是 `MBTextManager`，不是这里。
- 你想设置一个变量。用 `MBTextManager.SetTextVariable`，或者更好，用 `TextObject.SetTextVariable`。
- 你在做热加载模块。`Module.LoadSingleModule` 已经替你调过 `AddLocalizationXml` 了；再调一次就是重复解析。

## 依赖关系

- [MBTextManager](../MBTextManager/) — 渲染器；`LoadLanguage` 安装它的函数，`ChangeLanguage` 驱动切换。
- [LanguageData](../LanguageData/) — 本类创建、枚举并清空的那条语言记录。
- [TextObject](../TextObject/) — `GetTranslatedText` 所解析 id 的取值类型。
- [VoiceObject](../VoiceObject/) — 经由 `LocalizedVoiceManager` 到达，由 `MBTextManager.TryChangeVoiceLanguage` 驱动。
- [SaveableLocalizationTypeDefiner](../SaveableLocalizationTypeDefiner/) — 本地化对象在存档侧的对应物。
- [Module](../../core/Module/) — `LoadLocalizationXmls` 与 `AddLocalizationXml` 的唯一调用方。

## 主要成员

### 查找

#### `public static string GetTranslatedText(string languageId, string id)`
字典查找，返回译文或 `null`。**约定：**`languageId` 不被使用；字典里只放着最后一次 `LoadLanguage` 设置的那一种语言的字符串。对英语、对未知 id、对任何尚未加载的语言都返回 `null`。

#### `public static List<string> GetLanguageIds(bool developmentMode)`
从 `LanguageData.All` 新建一个 `List<string>`，保留 `IsValid` 为真的条目，并且——仅当 `developmentMode` 为 `false` 时——跳过 `IsUnderDevelopment`。传 `true` 以包含开发中的语言。

#### `public static string GetLanguageTitle(string id)`
该 id 的 `LanguageData.Title`；查找未命中时回退到英语条目。

### 语言元数据

#### `public static LanguageSpecificTextProcessor CreateTextProcessorForLanguage(string id)`
用 `Type.GetType` 解析 `LanguageData.TextProcessor`（一个类型名字符串），再 `Activator.CreateInstance`。语言未知、未配置处理器、或类型找不到时回退到 `new DefaultTextProcessor()`（最后这种情况还会触发 `Debug.FailedAssert`）。每次 `MBTextManager.ChangeLanguage` 都会调用它。

#### `public static int GetLanguageIndex(string id)`
`LanguageData.GetLanguageDataIndex(id)`，未命中时回退到英语索引。`MBTextManager._activeTextLanguageIndex` 就是由它设置的。

#### `public static string GetSubtitleExtensionOfLanguage(string languageId)`
该语言的字幕文件扩展名（例如 `.srt`）。视频子系统用它挑选字幕轨。

#### `public static string GetLocalizationCodeOfISOLanguageCode(string isoLanguageCode)`
大小写无关地扫描所有 `LanguageData.SupportedIsoCodes`，返回匹配的 `StringId`。未命中时触发 `Debug.FailedAssert("Undefined language code ...")` 并返回 `"English"`——是断言不是异常，所以一个没映射的区域设置会静默变成英语。

### 文化格式化

#### `public static string GetDateFormattedByLanguage(string languageCode, DateTime dateTime)`
读取 `CultureInfo.DateTimeFormat.ShortDatePattern` 并套用。私有的 `GetCultureInfo` 在存在 `SupportedIsoCodes[0]` 时使用它，否则使用 `CultureInfo.InvariantCulture`。不变文化的短日期是 `MM/dd/yyyy`——这正是某个没标语言的 mod 日期字段在欧洲测试者眼里显得很美式的原因。

#### `public static string GetTimeFormattedByLanguage(string languageCode, DateTime dateTime)`
同样的路径，作用于 `DateTimeFormat.ShortTimePattern`。

### 加载

#### `public static void LoadLocalizationXmls(string[] loadedModules)`
**破坏性。** 先 `LanguageData.Clear()`，然后对每个模块路径枚举 `ModuleData/Languages/**/language_data.xml` 并 `LanguageData.LoadFromXml`。目录读取失败会断言，并把该模块当作贡献了零个文件而不是中止。

#### `public static void AddLocalizationXml(string newModule)`
**非破坏性。** 对单个模块路径做同样的枚举，不做 `Clear()`。这就是热加载路径。

#### `internal static void LoadLanguage(string languageId)`
由 `MBTextManager.ChangeLanguage` 调用。清空字典、调 `MBTextManager.ResetFunctions()`，然后从**每一种**语言的 XML 安装 `<functions>`，并且仅当 `languageId != "English"` 时安装 `<strings>`。

### 校验与控制台命令

#### `public static bool CheckValidity(string id, string text, out string errorLine)`
检查花括号配平（`{` 计数与 `}` 计数）以及 `{?` / `{\?}` 条件对，然后在一个 `try`/`catch` 里真的把字符串送进 `MBTextManager.ProcessTextToString`——那里抛出的异常会被报告为故障。发现第一个问题时把 `errorLine` 设为 `"<id> | <text>"` 并返回 `true`。

#### `public static string CheckValidity(List<string> strings)`
`[CommandLineArgumentFunction("check_for_errors", "localization")]`。先删除可能存在的旧 `faulty_translation_lines.txt`，然后对**每一种**语言循环，对每种都调 `MBTextManager.ChangeLanguage` 并校验字典里的每个条目，追加写入那个文件。它会把当前语言改掉，而且**不会**恢复你开始时的那一种。

#### `public static string ChangeLanguage(List<string> strings)`
`[CommandLineArgumentFunction("change_language", "localization")]`。接受语言代码、标题或 ISO 代码，在 `GetLanguageIds(true)` 里按标题或字幕扩展名解析，索引未变则拒绝，然后调 `MBTextManager.ChangeLanguage`。

#### `public static string ReloadTexts(List<string> strings)`
`[CommandLineArgumentFunction("reload_texts", "localization")]`。调用 `LoadLanguage(MBTextManager.ActiveTextLanguage)`——这是迭代翻译 XML 而不重启游戏的最快方式。

## 使用示例

### 示例 1 —— 搭建语言选择器

```csharp
using TaleWorlds.Localization;

namespace MyMod
{
    public static class MyLanguagePicker
    {
        public static List<string> AvailableLanguages(bool includeUnreleased)
        {
            // developmentMode: false 会隐藏标记为开发中的语言。
            return LocalizedTextManager.GetLanguageIds(includeUnreleased);
        }

        public static string SubtitleSuffixFor(string languageId)
        {
            return LocalizedTextManager.GetSubtitleExtensionOfLanguage(languageId);
        }

        public static string Apply(string languageId)
        {
            // ChangeLanguage 在 MBTextManager 上；本类只负责描述语言。
            return MBTextManager.ChangeLanguage(languageId) ? "ok" : "rejected";
        }
    }
}
```

### 示例 2 —— 按文化格式化日期与时间

```csharp
using System;
using TaleWorlds.Localization;

namespace MyMod
{
    public static class MyDateFormatter
    {
        public static string Format(DateTime when, string languageCode)
        {
            string date = LocalizedTextManager.GetDateFormattedByLanguage(languageCode, when);
            string time = LocalizedTextManager.GetTimeFormattedByLanguage(languageCode, when);
            return date + " " + time;
        }
    }
}
```

### 示例 3 —— 把系统区域设置解析为已发布语言

```csharp
using System.Globalization;
using TaleWorlds.Localization;

namespace MyMod
{
    public static class MyLocaleBridge
    {
        public static string ResolveSystemLanguage()
        {
            string iso = CultureInfo.CurrentCulture.TwoLetterISOLanguageName;
            // 未发布的区域设置会返回 "English"（并触发断言）。
            return LocalizedTextManager.GetLocalizationCodeOfISOLanguageCode(iso);
        }

        public static void ReloadAfterEditingXml()
        {
            // 从 ModuleData/Languages 热重载当前语言。
            LocalizedTextManager.ReloadTexts(null);
        }
    }
}
```

## 风险与崩溃边界

- **存档序列化。** `LocalizedTextManager` 不被序列化，也不拥有可保存的战役对象。`SaveableLocalizationTypeDefiner` 才是本地化对象（例如存档里的语音/文化记录）在存档侧的对应类型，并且是单独注册的；动这个类对存档里有什么毫无影响。真正的存档风险在别处：如果你改变了*可用*的语言集合，在一种语言集合下创建的存档会在另一种集合下加载，于是每个 `TextObject` 的 id 都会去解析一个不同的字典——id 是稳定的，它们背后的译文不是。
- **跨域依赖。** `LocalizedTextManager` 引用 `TaleWorlds.Library`（`Debug.FailedAssert`、`Debug.Print`、`MBStringBuilder`）、`System.Xml`、`TaleWorlds.Localization.TextProcessor`，并间接涉及 `VoiceObject`。它**不**引用 `TaleWorlds.CampaignSystem` 或 `TaleWorlds.ScreenSystem`，因此从任何 `MBSubModuleBase` 钩子（包括编辑器和专用服务器）调用它都是安全的。`GetTranslatedText` 尤其常是无头工具唯一需要的本地化调用。
- **加载顺序。** `LoadLocalizationXmls` 开头那句 `LanguageData.Clear()` 让这个类以一种容易被忽略的方式对顺序敏感。如果你的模块在 `OnSubModuleLoad` 里调了复数的 `LoadLocalizationXmls`，你会抹掉 `Module.Initialize` 已经注册的语言，然后只加回自己的。请从模块里用单数的 `AddLocalizationXml`，或者干脆什么都不做、让 `Module` 替你加载你的 `ModuleData/Languages` 目录树。
- **ID 稳定性。** `_gameTextDictionary` 只以 id 为键，没有模块或命名空间限定。两个模块声明同一个 `<string id="Xyz" .../>` 会冲突；后解析的那个获胜，而哪一个"后"取决于模块之间 `Directory.GetFiles` 的枚举顺序。这是 mod 栈里最常见的本地化 bug，而且在单 mod 测试里完全不可见。
- **调用 `CheckValidity(List<string>)` 会改变当前语言。** 它对每种语言循环调用 `MBTextManager.ChangeLanguage`，且从不恢复原语言。请只在控制台命令里跑它，绝不要放在其他系统依赖的钩子里。
- **线程亲和性。** `LoadLanguage` 会就地修改静态字典和语法函数表。在一帧正渲染到一半时调用 `ReloadTexts` 并不安全；请从控制台或某个菜单界面做，不要放在 `OnApplicationTick` 里。
- **XML 解析失败是断言而不是异常。** `LoadXmlFile` 捕获一切并通过 `Debug.FailedAssert("Could not parse: " + path)` 报告，返回 `null`。一个格式错误的 `language_data.xml` 因此会退化为"那个语言缺失"，而不是硬失败——要查日志，别只看 UI。

## 跨版本提示

- **v1.3.0：** `LocalizedTextManager` 是 `public static class LocalizedTextManager`。公开接口为：`GetTranslatedText`、`GetLanguageIds`、`GetLanguageTitle`、`CreateTextProcessorForLanguage`、`AddLanguageTest`、`GetLanguageIndex`、`LoadLocalizationXmls`、`AddLocalizationXml`、`GetDateFormattedByLanguage`、`GetTimeFormattedByLanguage`、`GetSubtitleExtensionOfLanguage`、`GetLocalizationCodeOfISOLanguageCode`、三个 `[CommandLineArgumentFunction]` 控制台方法、`CheckValidity(string, string, out string)`、`public const string LanguageDataFileName = "language_data"` 与 `public const string DefaultEnglishLanguageId = "English"`。`LoadLanguage(string)` 是 `internal`；`GetLanguageData`、`LoadXmlFile`、`GetCultureInfo`、`LoadLanguage(LanguageData)` 与 `DeserializeStrings` 是 `private`。
- **一个值得点出的细节，因为教程经常搞错：** XML 文件名是 `language_data.xml`，而公开常量是 `LanguageDataFileName = "language_data"`。并不存在公开的 `*.xml` 后缀常量。
- **v1.3.15 / v1.4.5：** API 形状未变；差异体现在发布的 `LanguageData` 集合和 `ModuleData/Languages` 的内容上。"复数清空 / 单数不清空"的不对称，以及 `GetTranslatedText` 忽略 `languageId` 的行为都完全一致，因此针对 v1.3.0 写的 mod 工具依然正确。

## 参见

- ↑ 上级目录：[Localization API 索引](../)
- ↔ 同级：[MBTextManager](../MBTextManager/) —— 消费这个字典的渲染器
- ↔ 同级：[LanguageData](../LanguageData/) · [TextObject](../TextObject/)
- ↪ 存档侧：[SaveableLocalizationTypeDefiner](../SaveableLocalizationTypeDefiner/)
- ↖ 调用方：[Module](../../core/Module/)