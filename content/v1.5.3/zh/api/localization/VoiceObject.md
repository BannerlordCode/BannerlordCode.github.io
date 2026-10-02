---
title: "VoiceObject"
description: "一句文本对应的全部音频路径的只读包装：由 LocalizedVoiceManager 从 voice xml 反序列化，多模块可累加为一个列表。"
---

# VoiceObject

**Namespace:** TaleWorlds.Localization
**Module:** TaleWorlds.Localization
**Type:** `public class VoiceObject`
**Base:** `System.Object`（无基类）
**Source:** `bannerlord-1.5.3/TaleWorlds.Localization/VoiceObject.cs`

## 概述

`VoiceObject` 是一个极小的只读值包装：内部一个 `readonly MBList<string> _voicePaths`，对外只暴露 `MBReadOnlyList<string> VoicePaths`。它回答一个问题——「这句话在当前语音语言下有哪几个音频文件」。它**不做任何播放**（那是 `Campaign.Models.VoiceOverModel` 的事），也不做路径存在性检查、不做随机选择、不缓存。它甚至不知道自己对应哪个文本 id——id 是字典的 key，不是它的字段。

## 心智模型

**它由谁创建**：[LocalizedVoiceManager](../LocalizedVoiceManager) 的 `LoadLanguage` 在解析每个模块的 voice xml 时创建。有两条路径：

1. **首次见到某个 id** → `VoiceObject.Deserialize(xmlNode, modulePath)`：静态工厂，遍历 `<VoiceOver>` 节点的所有 `<Voice>` 子节点，把 `modulePath + "/" + path` 逐个 `AddVoicePath`。
2. **字典里已有这个 id** → 调实例方法 `AddVoicePaths(xmlNode, modulePath)`：**同样遍历 `<Voice>` 子节点追加**。

两条路径的遍历代码几乎相同，区别只是 `Deserialize` 先 `new` 再调私有的 `AddVoicePath`。**所以多模块提供同一句话的配音时，结果是路径追加到一个列表里，按模块加载顺序排列。**

**消费路径**：`MBTextManager.TryGetVoiceObject(to, out vo, out id)` 拿到它之后，官方交给 `Campaign.Models.VoiceOverModel.GetSoundPathForCharacter(character, voiceObject)` 去挑一个具体文件播。**选择策略（随机/顺序/按角色性别）不在 `VoiceObject` 里**——它只负责「有哪些」。

**`MBList` / `MBReadOnlyList` 的角色**：`TaleWorlds.Library` 的容器。`MBReadOnlyList<T>` 是 `MBList<T>` 的只读视图接口，`VoicePaths` 返回它而不是 `MBList<string>`——**调用方拿到的引用不能 Add/Remove，只能遍历**。这跟 [TextObject](../TextObject) 的 `Attributes`（直接暴露可写的 `Dictionary`）形成对比，是本模块里少数做对了封装的地方。

**为什么不是 `[Serializable]`**：它没有序列化属性。`VoiceObject` 存在于 `LocalizedVoiceManager` 的静态字典里，**不进存档**。读档后重新加载语言包时重建。

**常见误用与坑**

1. **构造函数是 private**，两个静态/半静态入口才是构造路径：`Deserialize(node, modulePath)` 是 public 静态工厂，`AddVoicePaths(node, modulePath)` 是 public 实例方法。**没有 `new VoiceObject()` 这条路**（除非反射）。
2. **`VoicePaths` 只读，但元素是 `string` 而不是绝对路径规范**。它是 `modulePath + "/" + pathAttribute` 的朴素拼接，**不做 `Path.Combine`、不做分隔符归一化、不验证文件存在**。模块路径末尾带不带斜杠都会产生 `//`，Windows 下无害但路径非规范。
3. **列表可能为空**。如果 `<VoiceOver>` 节点存在但一个 `<Voice>` 子节点都没有，反序列化出来的 `VoiceObject.VoicePaths.Count == 0`。**调用方不能假设至少有一条路径**——`GetSoundPathForCharacter` 拿到空列表的行为要看模型实现。
4. **`Deserialize` 不检查 `node.Attributes["path"]` 是否存在**。缺 `path` 属性的 `<Voice>` 子节点会抛 `NullReferenceException`，且这是**加载期崩溃**（在 `LoadLanguage` 调用栈上），不是渲染期降级。
5. **不缓存、不随机**。同一个 `VoiceObject` 每次问都是同一个列表。要做「这句台词随机挑一条」得自己写，且**不要写进 `VoiceObject`（它是共享的、多个会话可能同时持有）**。
6. **与 `TextObject` 无直接引用**。`VoiceObject` 不知道对应的文本；关联靠 [LocalizedVoiceManager](../LocalizedVoiceManager) 字典的 key。

## 主要成员

- `public MBReadOnlyList<string> VoicePaths { get; }`：**唯一的 public 属性**。返回内部 `MBList<string>` 的只读视图。遍历它拿音频文件的相对路径（模块目录 + xml 里写的 `path`）。空列表是合法状态。
- `public void AddVoicePaths(XmlNode node, string modulePath)`：**public 的追加入口**。遍历 `node` 的子节点，凡是 `Name == "Voice"` 就取 `Attributes["path"].InnerText`，拼成 `modulePath + "/" + path` 追加到内部列表。**由 `LocalizedVoiceManager` 在多模块合并时调用；mod 也可以在自己解析完 xml 后手动调它来给一个已有的 `VoiceObject` 补路径。**
- `public static VoiceObject Deserialize(XmlNode node, string modulePath)`：**public 的构造入口**。`new VoiceObject()` 后对每个 `<Voice>` 子节点调私有的 `AddVoicePath`。传一个 `<VoiceOver>` 节点进来即可。
- `private void AddVoicePath(string voicePath)`：私有，直接 `_voicePaths.Add`。`AddVoicePaths` 与 `Deserialize` 都最终落到它。
- `private readonly MBList<string> _voicePaths`：`private` 构造时初始化为 `new MBList<string>()`。**readonly**，只能在构造函数里赋值——这也意味着没有任何序列化路径可以恢复它。

## 使用示例

```csharp
// 官方 ConversationManager 的用法：拿到 VoiceObject 后交给模型挑文件
string[] animations = MBTextManager.GetConversationAnimations(currentSentenceText);
VoiceObject voiceObject;
string vocalizationId;
string soundPath = "";
if (MBTextManager.TryGetVoiceObject(currentSentenceText, out voiceObject, out vocalizationId))
    soundPath = Campaign.Current.Models.VoiceOverModel.GetSoundPathForCharacter(character, voiceObject);
CampaignMission.Current.OnConversationPlay(animations[0], animations[1], animations[2], animations[3], soundPath);

// 直接按 id 查（注意：查不到返回 null 并打日志，必须判空）
VoiceObject greeting = LocalizedVoiceManager.GetLocalizedVoice("myModGreeting");
if (greeting != null && greeting.VoicePaths.Count > 0)
    Debug.Print("greeting voice: " + greeting.VoicePaths[0]);   // MBReadOnlyList<string> 可索引

// 遍历全部候选（多模块可能为同一句话各提供一条）
if (greeting != null)
    foreach (string path in greeting.VoicePaths)
        Debug.Print("candidate: " + path);   // 形如 "MyMod/ModuleData/Voice/en/greeting_01.wav"

// 自己从 xml 造一个：Deserialize 是唯一 public 构造入口
System.Xml.XmlDocument doc = new System.Xml.XmlDocument();
doc.Load("MyMod/ModuleData/Voice/en/voiceovers.xml");
System.Xml.XmlNodeList nodes = doc.GetElementsByTagName("VoiceOver");
foreach (System.Xml.XmlNode node in nodes)
{
    if (node.Attributes["id"].Value != "myModGreeting") continue;
    VoiceObject built = VoiceObject.Deserialize(node, "MyMod");
    foreach (string p in built.VoicePaths)
        Debug.Print("built: " + p);
}
```

## 风险与边界

- **无存档风险**。没有 `[Serializable]`、没有 `[SaveableField]`，不进 [SaveManager](../../save-system/SaveManager) 的序列化流程。读档 / 切战役后由语言加载流程重建。
- **无线程安全问题**（实例创建后只读），但它的创建方 `LocalizedVoiceManager` 的字典是普通静态，**并发加载 + 查询会炸**。
- **路径非规范**。`modulePath + "/" + path` 是朴素拼接，`Deserialize` 与 `AddVoicePaths` 都没有做任何校验。音频文件缺失时错误推迟到播放层（`VoiceOverModel` / 音频引擎），报错信息不会指向 voice xml。
- **`<Voice>` 节点缺 `path` 属性会 NRE**，且发生在加载期（`TryChangeVoiceLanguage` → `LoadLanguage` 调用栈），不是渲染期。自制 voice xml 时务必每个 `<Voice>` 都带 `path`。
- **`AddVoicePaths` 是 public 且无幂等保护**。对同一个 `VoiceObject` 重复调用会重复追加路径。多模块合并场景由 `LocalizedVoiceManager` 用 `ContainsKey` 保证只追加一次；自己调用时要自己保证。
- **列表无上限**。理论上可以让任意多条路径落在同一个 id 上（多个模块 + 多个 `<Voice>` 子节点）。选择策略在模型层。
- **不知道自己的 id**。要反查「这条 `VoiceObject` 对应哪个文本」，只能遍历 `GetVoiceLanguageIds()` + `GetLocalizedVoice` 逐个比对——官方没有提供反向索引。

## 依赖关系

- [LocalizedVoiceManager](../LocalizedVoiceManager) — 唯一的持有者与创建者（`Deserialize` 与 `AddVoicePaths` 两个调用点）
- [MBTextManager](../MBTextManager) — `TryGetVoiceObject` 把 `TextObject` 与 `VoiceObject` 关联起来
- [TextObject](../TextObject) — 关联的另一端，`{=!id}` 形式的文本才会走 id 路径
- [Campaign](../../campaign/Campaign) — 通过 `Campaign.Models.VoiceOverModel` 做最终的「挑一条播」决策
- [Mission](../../mission/Mission) — 官方在 `CampaignMission.OnConversationPlay` 上实际播放
- [SaveableLocalizationTypeDefiner](../SaveableLocalizationTypeDefiner) — 对照：这是唯一被登记进存档的本地化类型，`VoiceObject` 不是
