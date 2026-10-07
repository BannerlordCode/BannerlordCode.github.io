---
title: "LocalizedVoiceManager"
description: "语音配音路径的加载与查询：把各模块 voice xml 里的 VoiceOver 条目汇总成「文本 id → 音频文件路径列表」，供对话与旁白播放。"
---

# LocalizedVoiceManager

**Namespace:** TaleWorlds.Localization
**Module:** TaleWorlds.Localization
**Type:** `public static class LocalizedVoiceManager`
**Base:** 无（静态类）
**Source:** `bannerlord-1.5.3/TaleWorlds.Localization/LocalizedVoiceManager.cs`

## 概述

`LocalizedVoiceManager` 管的是「某个文本 id 在当前语音语言下有哪几个音频文件」。它持有一个私有静态 `Dictionary<string, VoiceObject> _voiceObjectDictionary`，从各模块的 voice xml 里读出 `<VoiceOvers>` → `<VoiceOver id="...">` → 若干 `<Voice path="..."/>`，路径拼上模块前缀后存进字典。它只有两个 public 成员，因为剩下的都是加载细节。它与文本翻译**完全分离**：语音语言由 `MBTextManager.TryChangeVoiceLanguage` 单独控制，可以和文本语言不同。

## 心智模型

**加载时机**：`LoadLanguage(string languageId)` 是 internal，由 [MBTextManager](../MBTextManager) 的 `TryChangeVoiceLanguage` 调用。流程是：先 `_voiceObjectDictionary.Clear()`（**全量替换，不是增量**），然后从 `LanguageData.GetLanguageData(languageId)` 拿到 `VoiceXmlPathsAndModulePaths`（一个 `IReadOnlyDictionary<string, string>`，key 是 xml 绝对路径，value 是模块根目录），逐个解析。

**多模块合并语义**：遍历每个 `VoiceOver` 节点时，如果 `_voiceObjectDictionary` 已经有这个 id，就调 `voiceObject.AddVoicePaths(xmlNode, modulePath)` **追加**；否则 `VoiceObject.Deserialize(xmlNode, modulePath)` 新建。**所以多个模块可以为同一句话提供不同语音，播放时会按注册顺序轮换。**

**xml 结构假设（硬编码，有崩溃风险）**：`LoadLanguage` 里先在 `xmlDocument.DocumentElement.ChildNodes` 里找 `Name == "VoiceOvers"` 的节点，然后**直接 `foreach (xmlNode.ChildNodes)`**——**没有 null 检查**。xml 里没有 `<VoiceOvers>` 元素就会 NRE。这是加载期崩溃（不是渲染期），会在 `TryChangeVoiceLanguage` 调用栈上炸。

**与文本 id 的对应关系**：[MBTextManager](../MBTextManager) 的 `ProcessTextForVocalization` 先取 `GetLocalizationId(to)`（即 `{=xxx}` 里的 id）；**只有 id 等于 `"!"` 时才走 token 遍历逐个 `Identifier` 递归查找**。也就是说：**给一句对话配音，主路径是给整条文本一个统一的 `{=!vocalization_id}`**，而不是逐词标注。

**典型调用顺序**：`TryChangeVoiceLanguage(lang)` → `LoadLanguage` → 之后每次 `TryGetVoiceObject(to, out vo, out id)` 从字典查。

**常见误用与坑**

1. **查不到时返回 `null` 并打日志**，不是抛异常。`GetLocalizedVoice` 找不到 id 会 `Debug.Print("Voice object for text id is not found: " + id)` 然后返回 `null`。**调用方必须判空**——官方 `ConversationManager` 就是判 `TryGetVoiceObject` 的返回值而不是判 `vo`。
2. **`GetVoiceLanguageIds()` 只列出「有 voice 文件」的语言**。判据是 `languageData.VoiceXmlPathsAndModulePaths.Count > 0`。**装了语言包但没配 voice xml 的语言不在列表里**，此时 `TryChangeVoiceLanguage` 返回 false 且**不报错**（不同于 `ChangeLanguage`）。
3. **`LoadLanguage` 全量清空**。切换语音语言时旧语言的配音全部卸载，回到新语言。若某个 id 在新语言里没配，会退回「无配音」而不是「上一语言的配音」。
4. **`<VoiceOvers>` 缺失会 NRE**。自己造 voice xml 时必须保证根下有 `VoiceOvers` 元素。1.5.3 没有 `Debug.FailedAssert` 保护这一层。
5. **voice 语言与文本语言是两套**。用 `MBTextManager.ChangeLanguage` 切文本语言**不会**重新加载配音；必须显式调 `TryChangeVoiceLanguage`。
6. **`GetLocalizedVoice` 只按 id 查当前语言**。和 `LocalizedTextManager.GetTranslatedText` 一样，没有「按指定语言查」的能力。

## 怎么用

### 怎么拿到它

静态类，不需要实例。它自己会填满：`MBTextManager.TryChangeVoiceLanguage`（`MBTextManager.cs:58`）内部调 `LocalizedVoiceManager.LoadLanguage(_activeVoiceLanguageId)`（`MBTextManager.cs:63`），后者 `internal static void LoadLanguage(string languageId)`（`LocalizedVoiceManager.cs:39`）先 `_voiceObjectDictionary.Clear()`（`:41`）再按 `LanguageData.GetLanguageData(languageId)` 加载（`:42-46`）。加载链的终点是私有重载 `LoadLanguage(LanguageData)`（`:70-106`），它遍历 `language.VoiceXmlPathsAndModulePaths`，找 `<VoiceOvers>` 节点（`:81-86`），再对其下每个 `<VoiceOver id=...>` 建或追加 `VoiceObject`（`:90-102`）。

`_voiceObjectDictionary` 是 `private static readonly`（`:109`），外部拿不到，只能经由 `GetLocalizedVoice`（`:13`）查。

### 典型用法

```csharp
// 1) 文本语言与语音语言是两套：先确认语音语言可用，再切
if (LocalizedVoiceManager.GetVoiceLanguageIds().Contains("English"))
    MBTextManager.TryChangeVoiceLanguage("English");    // 返回 false 时静默，不 assert

// 2) 给一条对话文本找配音（对话系统内部也是这么走的）
if (MBTextManager.TryGetVoiceObject(sentenceText, out VoiceObject vo, out string vocalizationId))
{
    string path = Campaign.Current.Models.VoiceOverModel.GetSoundPathForCharacter(character, vo);
    SoundManager.PlaySound(path);
}
```

### 最容易踩的坑

混用「文本语言」和「语音语言」两个概念。它们是独立的两套数据：文本语言走 `MBTextManager.ChangeLanguage` → `LocalizedTextManager`（`MBTextManager.cs:44`），语音语言走 `TryChangeVoiceLanguage` → `LocalizedVoiceManager`（`MBTextManager.cs:63`）。后果是切了文本语言后，`GetLocalizedVoice(id)` 查的仍然是**上一个**语音语言的字典（`LoadLanguage` 在 `:41` 把字典整体清掉重填），配音要么错语言要么查不到；而且 `TryChangeVoiceLanguage` 失败时只返回 `false`、连 `Debug.FailedAssert` 都不打（`MBTextManager.cs:60-66`），不像 `ChangeLanguage` 会断言（`:47`）。要换配音语言必须单独调一次 `TryChangeVoiceLanguage`。

## 主要成员

- `static VoiceObject GetLocalizedVoice(string id)`：按文本 id 取配音对象。**找不到返回 `null` 并 `Debug.Print` 一行日志**。这是唯一对外的查询入口。
- `static List<string> GetVoiceLanguageIds()`：返回所有「`IsValid` 且至少有一个 voice xml」的语言 id。用于判断当前配置里有哪些语音可选。
- `internal static void LoadLanguage(string languageId)`：全量重载语音字典。由 `MBTextManager.TryChangeVoiceLanguage` 调用。**不要从 mod 直接调**（internal），走 `MBTextManager`。
- `private static void LoadLanguage(LanguageData language)`：实际的 xml 遍历与合并逻辑（私有重载）。
- `private static XmlDocument LoadXmlFile(string xmlPath)`：读并解析 xml，失败时 `Debug.FailedAssert("Could not parse: " + xmlPath)` 并返回 `null`。
- `private static readonly Dictionary<string, VoiceObject> _voiceObjectDictionary`：**私有**静态字典，键是文本 id，值是 [VoiceObject](../VoiceObject)。**没有 public 的遍历或清空接口**。

## 使用示例

```csharp
// 官方 ConversationManager.ProcessSentence 的真实用法：
// TryGetVoiceObject 返回 bool 表示「这条文本能配音」，vo 可能是 null
string[] animations = MBTextManager.GetConversationAnimations(currentSentenceText);
VoiceObject voiceObject;
string vocalizationId;
string soundPath = "";
if (MBTextManager.TryGetVoiceObject(currentSentenceText, out voiceObject, out vocalizationId))
    soundPath = Campaign.Current.Models.VoiceOverModel.GetSoundPathForCharacter(character, voiceObject);
CampaignMission.Current.OnConversationPlay(animations[0], animations[1], animations[2], animations[3], soundPath);

// 语音语言独立于文本语言：文本中文、语音英文是可以的
if (MBTextManager.TryChangeVoiceLanguage("English"))
    Debug.Print("voice switched, text still " + MBTextManager.ActiveTextLanguage);

// 哪些语言有配音：VoiceXmlPathsAndModulePaths.Count > 0 才算数
foreach (string language in LocalizedVoiceManager.GetVoiceLanguageIds())
    Debug.Print(language + " has voice files");

// 直接查一个 id（查不到返回 null 并打日志）
VoiceObject direct = LocalizedVoiceManager.GetLocalizedVoice("myModGreeting");
if (direct != null)
    Debug.Print("paths: " + direct.VoicePaths.Count);
else
    Debug.Print("该 id 在当前语音语言下没有配音");
```

## 风险与边界

- **无存档风险**。`_voiceObjectDictionary` 是纯运行期状态，`VoiceObject` 没有 `[SaveableField]`，不进存档。
- **无线程安全**。`Dictionary<string, VoiceObject>` 是普通静态字段，加载与查询并发会炸。**语音切换必须在主线程、加载期或明确的 UI 事件里做。**
- **加载期 NRE 风险**。`<VoiceOvers>` 元素缺失会直接 NRE，而不是降级。自制 voice xml 时先在游戏里实测一次切换语言。
- **`LoadLanguage` 是全量替换**。切语言期间任何正在播放的音频引用的是旧 `VoiceObject`，实例仍有效（没有 dispose 概念），但新查询会走新字典。
- **`VoiceObject` 不做路径存在性检查**。`Deserialize` 只是字符串拼接 `modulePath + "/" + path`，音频文件不存在时错误会推迟到播放层。
- **`GetVoiceLanguageIds` 与 `GetLanguageIds` 是两套**。前者按「有 voice 文件」过滤，后者按 `IsUnderDevelopment` 过滤。想确认玩家能否选到某种语音，要看**两者的交集**，不是任一。
- **1.5.3 的 `LoadLanguage` 里 `xmlDocument.DocumentElement.ChildNodes` 遍历后 `xmlNode` 可能是 null**，随后的 `foreach (xmlNode.ChildNodes)` 会 NRE。这是本模块最实在的健壮性缺口。

## 依赖关系

- [VoiceObject](../VoiceObject) — 字典的值类型，持有音频路径列表
- [MBTextManager](../MBTextManager) — `TryChangeVoiceLanguage` 触发 `LoadLanguage`；`TryGetVoiceObject` 是对外的查询入口
- [TextObject](../TextObject) — 查询入参，`{=!id}` 形式的文本才会走 id 路径
- [LocalizedTextManager](../LocalizedTextManager) — 同为语言管理，但它管的是**文本**语言与翻译表，两套独立
- [LanguageSpecificTextProcessor](../LanguageSpecificTextProcessor) — 语音语言切换不触碰它；对比：文本语言切换才会重建它
- [Campaign](../../campaign/Campaign) — 官方通过 `Campaign.Models.VoiceOverModel` 拿播放路径
- [Mission](../../mission/Mission) — 官方在 `CampaignMission` 上触发对话播放
