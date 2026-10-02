---
title: "MBTextManager"
description: "Bannerlord 里每一句本地化字符串背后的静态引擎：当前语言切换、进程级文本变量表、来自 XML 的自定义语法函数、动画标签剥离，以及语音对象查找。它也是 TextObject.ToString() 最终走到的入口。"
---
# MBTextManager

**Namespace:** TaleWorlds.Localization
**Module:** TaleWorlds.Localization
**Type:** `public static class MBTextManager`
**Base:** 无
**Source:** `TaleWorlds.Localization/MBTextManager.cs`

## 概述

`MBTextManager` 是进程级的文本运行时。它持有当前语言 id 与索引、拥有全部文本变量和语法函数的静态 `TextProcessingContext`、负责按语言变格/变形的 `LanguageSpecificTextProcessor`，以及用于抽取 id 的两个缓存 `StringBuilder`。游戏里每一次 `TextObject.ToString()` 最终都会进入 `ProcessTextToString(TextObject, bool)`：解析 `{=id}English text` 形式得到当前语言的译文，跑一遍 `Tokenizer` → `MBTextParser` → `TextGrammarProcessor` 管线，再把结果交给语言处理器。它也是从 `ModuleData/Languages/**/functions` 声明的自定义语法函数的安装入口，以及对话动画标签 `IB`/`IF`/`RB`/`RF` 的解码处。

## 心智模型

把它理解成**"全局本地化运行时，而不是某个调用点的辅助工具"**。这里每一份状态都是 `static`，因此整个进程共享：一份当前语言、一张变量表、一张函数表。

**渲染一句字符串的真实顺序：**

1. 你的代码调用 `TextObject.ToString()`（可能通过字符串内插、`InformationManager.ShowInquiry` 或 Gauntlet 文本属性）。
2. 进入 `MBTextManager.ProcessTextToString(to, shouldClear)`。参数为 `null` 返回 `null`；`TextObject.IsNullOrEmpty(to)` 返回 `""`。
3. `GetLocalizedText(to.Value)` —— 若该值以 `{=` 开头，则在第一个 `}` 处切分。当当前语言是 `"English"` 时直接使用目标文本并由 `RemoveComments` 剥掉 `{%.+?}` 片段；其他语言则查询 `LocalizedTextManager.GetTranslatedText(activeLanguage, id)`，查不到才回退到目标文本。id 恰好为 `*` 或 `!` 时完全跳过查表。
4. `Process(localizedText, to)` —— 若缓存有效则复用 `to.GetCachedTokens()`，否则 `Tokenizer.Tokenize(...)`；然后 `TextGrammarProcessor.Process(MBTextParser.Parse(list), TextContext, parent)`。
5. `_languageProcessor.Process(text)` 应用当前语言的变形规则。若 `shouldClear` 为 `true`（`TextObject.ToString()` 传的就是 `true`），之后会执行 `_languageProcessor.ClearTemporaryData()`。
6. 若 `LocalizationDebugMode` 打开，结果会加上 `"(" + to.GetID() + ") "` 前缀；id 为空时用 `"!"` 代替。

**三个坑：**

- **`SetTextVariable` 写的是进程级表，不是你那个 `TextObject`。** `TextContext.SetTextVariable(name, text)` 修改的是唯一的静态 `TextProcessingContext`。两个都设置了 `{myVar}` 的界面会互相覆盖，而且这个值会一直留着，直到 `ClearAll()` 或被再次赋值。这与 `TextObject.SetTextVariable(tag, variable)` **不同**——后者把值存在该实例的 `Attributes` 字典里。
- **`SetTextVariable(string variableName, int arrayIndex, object content)` 写入的键是 `variableName + ":" + arrayIndex`。** 这个 `:` 分隔符正是语法处理器理解的数组/行语法；如果你手动设置 `"Row0"` 而文本里引用的是 `[Row0]`，它解析不出来。
- **`ChangeLanguage` 会完整重载翻译字典。** 成功时它替换 `_languageProcessor`、设置 `_activeTextLanguageId` 与 `_activeTextLanguageIndex`，并调用 `LocalizedTextManager.LoadLanguage(...)`，后者会清空字典并调用 `MBTextManager.ResetFunctions()`。切换前设置的文本变量会保留（它们在 `TextContext` 里），但你安装的每一个自定义语法函数都会从 XML 重新加载。

## 何时该用 / 何时不该用

**该用 `MBTextManager` 的场景：**
- 你在切换或校验语言：`ChangeLanguage`、`LanguageExistsInCurrentConfiguration`、`GetActiveTextLanguageIndex`、`ActiveTextLanguage`。
- 你需要一个**全局**文本变量，而它并不附着于某个特定的 `TextObject`——比如一个被你不拥有的对话句子或提示所引用的值。
- 你要在运行时安装语法函数，或在测量字符串之前剥离动画标签。
- 你要解析语音行：`TryGetVoiceObject`。

**不该用 `MBTextManager` 的场景：**
- 你手上已经有一个 `TextObject`。正确路径是 `textObject.SetTextVariable(tag, value).ToString()`，它是实例作用域的，而且能跟着对象到处传。
- 你要按战役区分文本。战役作用域的字符串走战役自己的文本管理器 / `GameTextManager`，而不是这个静态类。
- 你要加载或读取语言 XML。那是 `LocalizedTextManager`——`MBTextManager` 从不碰文件。

## 依赖关系

- [TextObject](../TextObject/) — 其 `ToString()` 路由进本类的类型；同时也是每个变量 setter 接受的取值类型。
- [LocalizedTextManager](../LocalizedTextManager/) — 拥有翻译字典与 `LoadLanguage`，并创建本类所安装的语言处理器。
- [LanguageData](../LanguageData/) — 每个语言的元数据（标题、ISO 代码、字幕扩展名、处理器类型名），由 `LocalizedTextManager` 读取。
- [VoiceObject](../VoiceObject/) — `TryGetVoiceObject` 交回的类型。
- [TextGrammarProcessor](../TextGrammarProcessor/) — 在 `Process` 期间求值解析出的表达式树。
- [MBSubModuleBase](../../core/MBSubModuleBase/) — mod 通常在其 `OnApplicationTick` 里对语言切换或调试文本刷新做反应。

## 主要成员

### 当前语言

#### `public static bool ChangeLanguage(string language)`
用 `LocalizedTextManager.GetLanguageIds(true)` 校验 id。成功时安装新的 `LanguageSpecificTextProcessor`、更新当前 id 与索引，并重载该语言。**约定：**id 未知时返回 `false` 并触发 `Debug.FailedAssert("Invalid language")`——在正式版构建里断言不抛异常，所以你得到的是一个静默的 `false`。

#### `public static bool LanguageExistsInCurrentConfiguration(string language, bool developmentMode)`
对 `LocalizedTextManager.GetLanguageIds(developmentMode).Any(l => l == language)` 的薄包装。若希望"标记为开发中"的语言也算数，请传 `developmentMode: true`，否则存在但被标记的语言会被读成不存在。

#### `public static string ActiveTextLanguage { get; }` / `public static int GetActiveTextLanguageIndex()`
当前 id 字符串及其在 `LanguageData` 列表里的索引。两者都是缓存字段，只有 `ChangeLanguage` 会刷新。

#### `public static bool TryChangeVoiceLanguage(string language)`
只切换*语音*语言（经由 `LocalizedVoiceManager`），与文本语言相互独立。id 不在语音语言列表里时返回 `false`；与 `ChangeLanguage` 不同，它不会断言。

### 文本变量

#### `public static void SetTextVariable(string variableName, string text, bool sendClients = false)` 及其 `TextObject` / `int` / `float` / `object` 重载
六个重载全部汇入 `TextContext.SetTextVariable(variableName, new TextObject(text, null))`。`text` 为 `null` 或 `content` 为 `null` 是**静默空操作**——提前 `return` 意味着旧值原封不动。`float` 重载在转换前用 `MathF.Round(content, decimalDigits)` 取整，默认两位小数。`sendClients` 参数在 v1.3.0 里被接受但忽略。

#### `public static void SetTextVariable(string variableName, int arrayIndex, object content)`
带索引的重载。存为 `variableName + ":" + arrayIndex`，这正是语法处理器匹配行/数组引用时使用的键形状。

#### `public static void ClearAll()`
即 `TextContext.ClearAll()`——清空全局变量表。作用域是全局的：调用它会抹掉其他系统设置的变量。

### 语法函数

#### `public static void SetFunction(string funcName, string functionBody)`
用 `MBTextParser.Parse(Tokenizer.Tokenize(...))` 解析 `functionBody` 成一个 `MBTextModel` 并装入 `TextContext`。`LocalizedTextManager.LoadLanguage` 在 `ModuleData/Languages/**/language_data.xml` 里每发现一个 `<function functionName=".." functionBody="..">` 节点就会调用它。函数体格式错误会在这里抛异常——而这个异常在稍后某个 `TextObject` 被渲染时表现为被吞掉的 `"Error at id: ..."` 字符串，而不是加载期失败。

#### `public static void ResetFunctions()`
清空函数表。`LocalizedTextManager.LoadLanguage` 在重新安装 XML 函数**之前**会调用它，因此你从代码注册的自定义函数会在每次语言切换时丢失，除非你重新注册一次。

### 字符串工具

#### `public static string DiscardAnimationTags(string text)`
剥掉 `[` 与 `]` 之间的所有内容。在测量字符串、或把字符串喂给无法解析标签的 UI 元素之前很有用。

#### `public static string DiscardAnimationTagsAndCheckAnimationTagPositions(string text)`
同样的剥离，外加一次私有的 `CheckAnimationTagPositions` 检查，验证每个被剥离的标签除空白外没有留下别的东西。两种情况都返回剥离后的文本；那个检查的布尔结果并未对外暴露。

#### `public static string[] GetConversationAnimations(TextObject to)`
返回固定的 `string[4]`，对应 `IB`、`IF`、`RB`、`RF` 四个槽位，从 `to.CopyTextObject().ToString()` 里解析出来。你没填的槽位保持 `null`，使用前请先做下标检查。

#### `public static bool TryGetVoiceObject(TextObject to, out VoiceObject vo, out string vocalizationId)`
通过 `LocalizedVoiceManager.GetLocalizedVoice` 把 `to` 里的 `{=id}` 解析成 `VoiceObject`。若文本没有 id（`GetLocalizationId` 返回 `"!"`），它会走 token 列表，递归进第一个产出语音对象的 `TokenType.Identifier` 变量。当 `TextObject.IsNullOrEmpty(to)` 时返回 `false` 并把两个 out 都置空。

### 调试

#### `public static bool LocalizationDebugMode { get; set; }`
为 `true` 时，每条渲染出的字符串都会加上它的 id 前缀——`"(CaSafuAH) Content Download Complete"`，id 为空时用 `"!"`。这是找出未翻译或键错的字符串最快的办法。

#### `public static void ThrowLocalizationError(string message)`
带硬编码源码路径的 `Debug.FailedAssert`。当某个必需的本地化不变量被违反时，用它在开发期大声失败。

#### `public const string LinkAttribute = "LINK"`
用于标记"值里带有富文本链接"的 `TextObject` 的属性键。配套的 `LinkTag`（`".link"`）、`LinkStarter`（`"<a style=\"Link."`）、`LinkEnding`（`"</b></a>"`）、`LinkTagLength`（7）与 `LinkEndingLength`（8）都是 `internal const`——它们是给引擎的标记写入器用的，不属于面向 mod 的接口，这也正是那些让你拼接它们的教程编译不过的原因。

## 使用示例

### 示例 1 —— 切换语言并校验配置

```csharp
using TaleWorlds.Engine;
using TaleWorlds.Localization;

namespace MyMod
{
    public static class MyLanguageSwitcher
    {
        public static bool Apply(string id)
        {
            if (!MBTextManager.LanguageExistsInCurrentConfiguration(id, true))
            {
                MBDebug.Print("language not present: " + id);
                return false;
            }
            // true 会把仍标记为开发中的语言也算进来。
            bool changed = MBTextManager.ChangeLanguage(id);
            MBDebug.Print("active = " + MBTextManager.ActiveTextLanguage + " index = " + MBTextManager.GetActiveTextLanguageIndex());
            return changed;
        }
    }
}
```

### 示例 2 —— 设置全局文本变量并解析

```csharp
using TaleWorlds.Localization;

namespace MyMod
{
    public class MyNameGenerator
    {
        public string BuildFor(string clanName, int clanCount)
        {
            // 全局表，不是实例状态。"Gold" 就是 XML 那一行引用的变量名。
            MBTextManager.SetTextVariable("MyClanName", clanName);
            // 带索引的重载写入键 "MyRoster:0"。
            MBTextManager.SetTextVariable("MyRoster", 0, clanCount);
            return new TextObject("{=Ab3xKq1L}Clan {MyClanName} has {MyRoster:0} fiefs.", null).ToString();
        }
    }
}
```

### 示例 3 —— 安装语法函数并在测量前剥离标签

```csharp
using TaleWorlds.Localization;

namespace MyMod
{
    public static class MyTextTools
    {
        public static void InstallFunction()
        {
            // 每次 ChangeLanguage 都会丢失：LoadLanguage 会先调 ResetFunctions()。
            MBTextManager.SetFunction("myPlural", "if [n>1]s|");
        }

        public static int MeasurePlain(string tagged)
        {
            MBTextManager.LocalizationDebugMode = true;
            string rendered = new TextObject(tagged, null).ToString();
            // 布局计算前先剥掉 [ib] [if] [rb] [rf]。
            string plain = MBTextManager.DiscardAnimationTags(rendered);
            return plain.Length;
        }
    }
}
```

## 风险与崩溃边界

- **存档序列化。** `MBTextManager` 不被序列化，也不持有可保存对象。设在全局表上的文本变量能挺过一次存档/读档循环，但**不会**被恢复到一个已知值——一次没有重跑你 setter 的加载会渲染出上一个游戏的值。加载后必须正确的值，得在你的启动钩子里重新设置。
- **跨域依赖。** `MBTextManager` 在 `TaleWorlds.Localization`，并引入 `TaleWorlds.Library`（`Debug`、`MBStringBuilder`）、`TaleWorlds.Localization.TextProcessor` 与 `...TextProcessor.LanguageProcessors`。它**不**引用 `TaleWorlds.CampaignSystem`，这正是它可以从编辑器、专用服务器以及早期 `OnSubModuleLoad` 里安全调用的原因。相比之下 `LocalizedTextManager.LoadLanguage` 会碰 `TaleWorlds.Library` 的 `Debug.Print` 和 XML 加载器。
- **加载顺序。** `_activeTextLanguageId` 在静态初始化器里默认是 `"English"`，`_languageProcessor` 默认 `new EnglishTextProcessor()`，所以在任何 XML 加载之前这个类就可用了。但 `LocalizedTextManager.LoadLocalizationXmls` 以 `LanguageData.Clear()` 开头，所以在你模块已经解析过语言 id 之后调用它，会把表从你脚下抽走。`Module.Initialize()` 的顺序是正确的：`ModuleHelper.InitializeModules` → `LoadLocalizationXmls` → `GlobalTextManager.LoadDefaultTexts()`。
- **ID 稳定性。** `{=Ab3xKq1L}` 这个键是跨所有发布了同一句字符串的模块共享的翻译表键。`LocalizedTextManager.GetTranslatedText` 写入一个扁平的 `Dictionary<string, string>`，只以 id 为键，因此两个模块声明同一个 id 会互相静默覆盖，胜出者是最后解析 `language_data.xml` 的那个。保持你的 id 唯一。
- **每个变量 setter 里的静默 null。** `SetTextVariable(name, (string)null)` 和 `SetTextVariable(name, (object)null)` 直接返回什么都不做——它们**不会**清掉变量。要清空请赋一个空的 `TextObject`（`TextObject.GetEmpty()`），而不是 `null`。
- **渲染失败被吞掉。** `TextObject.ToString()` 会捕获管线抛出的所有异常并返回 `"Error at id: <id>. Lang: <lang>"`。格式错误的函数体或错误的变量名因此表现为 UI 里的字面字符串，而不是崩溃，而且除非 `LocalizationDebugMode` 打开否则不写日志。看到那个字符串时，原因在你的 XML 或变量名里，不在 `ToString()`。
- **语言切换不是原子的。** `ChangeLanguage` 在 `LoadLanguage` 重载字典**之前**就改了 `_activeTextLanguageId`。切换中途在另一个线程渲染会看到新的语言 id 配上旧的（或已被清空的）字典。整个本地化运行时按设计就是单线程的；不要从后台任务里调用它。

## 跨版本提示

- **v1.3.0：** `MBTextManager` 是 `public static class MBTextManager`，公开成员为 `ActiveTextLanguage`、`LocalizationDebugMode`、`LanguageExistsInCurrentConfiguration`、`ChangeLanguage`、`GetActiveTextLanguageIndex`、`TryChangeVoiceLanguage`、`ClearAll`、六个 `SetTextVariable` 重载、`SetFunction`、`ResetFunctions`、`ThrowLocalizationError`、`DiscardAnimationTagsAndCheckAnimationTagPositions`、`DiscardAnimationTags`、`GetConversationAnimations`、`TryGetVoiceObject`，以及 `public const string LinkAttribute`。`ProcessTextToString`、`ProcessWithoutLanguageProcessor`、`GetLocalizedText`、`ProcessNumber`、`Process`、`RemoveComments`、`ProcessTextForVocalization`、`GetLocalizationId` 与 `CheckAnimationTagPositions` 全是 `internal` 或 `private`。
- **不属于这个类的：** 没有 `MBTextManager.GetText(string id)`，也没有 `MBTextManager.Localize`。本地化查找走 `TextObject`，原始表访问走 `LocalizedTextManager.GetTranslatedText`。
- **v1.3.15 / v1.4.5：** 形状稳定；后续补丁增加的是语言定义而非 API。上面描述的 `{=id}default text` 约定、`:` 数组变量语法，以及"重载前先 `ResetFunctions()`"的顺序都没有变化，因此针对 v1.3.0 写的 mod 代码行为完全一致。

## 参见

- ↑ 上级目录：[Localization API 索引](../)
- ↔ 同级：[TextObject](../TextObject/) — 路由进本类的类型
- ↔ 同级：[LocalizedTextManager](../LocalizedTextManager/) — XML 加载与翻译字典
- ↔ 同级：[LanguageData](../LanguageData/) · [VoiceObject](../VoiceObject/)
- ↪ 管线阶段：[TextGrammarProcessor](../TextGrammarProcessor/)
- ↖ 调用方：[MBSubModuleBase](../../core/MBSubModuleBase/)