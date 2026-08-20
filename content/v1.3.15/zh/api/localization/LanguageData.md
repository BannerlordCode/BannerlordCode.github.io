---
title: "LanguageData"
description: "单种语言的内存元数据载体：保存语言 id、标题、所绑定的 LanguageSpecificTextProcessor 名称、支持的 ISO 码、字幕扩展名、XML/语音文件路径等，由 LocalizedTextManager 在加载语言包时从 XML 反序列化填充。"
---

# LanguageData

**命名空间：** TaleWorlds.Localization
**模块：** TaleWorlds.Localization
**类型：** `internal class LanguageData`
**基类：** 无
**源文件路径：** `TaleWorlds.Localization/LanguageData.cs`

## 概述

`LanguageData` 是某一种语言在内存里的"身份证 + 配置单"。一个 `<LanguageData>` XML 节点对应一个 `LanguageData` 实例：构造时只拿到 `stringId`（如 `"English"`），其余字段在 `Deserialize`/`InitializeDefault` 中填充。`TextProcessor` 字段存的是该语言对应的 `LanguageSpecificTextProcessor` 子类的名字（如英文用 `"EnglishTextProcessor"`），`LocalizedTextManager.CreateTextProcessorForLanguage` 据此实例化正确的按语言语法处理器。`SupportedIsoCodes` 决定该语言是否 `IsValid`（为空则 `IsValid == false`）。`XmlPaths` 与 `VoiceXmlPathsAndModulePaths` 记录了该语言要从哪些模块 XML 取译文与配音。所有已加载语言都登记在静态 `_all` 列表里，通过 `GetLanguageData(stringId)` 查询。

## 心智模型

把它想成"语言注册表的一行"：只读元数据，描述"这个语言叫什么、由哪个语法处理器负责、去哪找译文"。生命周期上，它不自己创建——`LocalizedTextManager.LoadFromXml`/`LoadLanguage` 在初始化阶段调用 `LanguageData.LoadFromXml`，从模块 XML 解析出节点、必要时 `new LanguageData(id)` 并 `Deserialize` 填充，再 `Add` 进静态 `_all`。之后 `MBTextManager.ChangeLanguage` 切换语言时通过 `LocalizedTextManager` 读取这些元数据来装载译文并创建语法处理器。它属于本地化"数据源"层。

**何时使用**：需要查询"当前/某语言有哪些 ISO 码、用哪个语法处理器、是否仍在开发中"时读取它的属性；例如判断语言是否 `IsUnderDevelopment` 以决定是否在开发模式下显示。**何时不要使用**：不要自己 `new LanguageData(...)` 并塞进流程——语言清单是引擎统一管理的静态注册表，手动改动会与 `LocalizedTextManager` 的状态不一致；要增删语言应走模块 XML 与 `LocalizedTextManager` 的加载入口。

**主要风险**：`_all` 是 `static MBList<LanguageData>`，`Clear()` 会清空**所有**已加载语言，只在完全重装本地化时调用，否则会导致 `GetLanguageData` 返回 `null`、切换语言失败。`LoadFromXml` 对缺 `id` 属性的节点直接忽略、`Deserialize` 在节点无属性时抛 `TWXmlLoadException`，因此 XML 拼写错误会表现为加载失败而非静默。测试可用 `LoadTestData` 注入伪语言数据，但切勿与正式加载混用以免污染静态注册表。

## 依赖图

- [LocalizedTextManager](../LocalizedTextManager) — 加载/查询语言数据，并用 `TextProcessor` 创建语法处理器
- [LanguageSpecificTextProcessor](../LanguageSpecificTextProcessor) — `TextProcessor` 字段指向的具体处理器基类
- [MBTextManager](../MBTextManager) — 借 `LocalizedTextManager` 读取这些数据来切换与渲染语言
- [↑ 父级目录](../)

## 关键成员

### 静态查询
- **`All`**（`static MBReadOnlyList<LanguageData>`）：当前已加载的全部语言。只读视图，遍历它可枚举所有语言。
- **`GetLanguageData(stringId)`**：按 `StringId` 线性查找对应语言；找不到返回 `null`。
- **`GetLanguageDataIndex(stringId)`**：返回该语言在 `_all` 中的下标，找不到返回 `-1`。
- **`Clear()`**：清空 `_all`，仅用于完全重装本地化。
- **`LoadFromXml(XmlDocument, modulePath)`**：从已解析的 XML 文档里找出 `<LanguageData>` 节点并反序列化；是引擎加载语言包的真实入口。
- **`LoadTestData(LanguageData)`**：把给定数据插入/替换到 `_all`，用于测试。

### 实例元数据（属性）
- **`StringId`**（`readonly`）：语言唯一 id，如 `"English"`；构造时确定，不可改。
- **`Title`**：显示名（来自 XML 的 `name` 属性）。
- **`TextProcessor`**：该语言语法处理器的类名字符串，是连接 `LanguageSpecificTextProcessor` 子类的钥匙。
- **`SupportedIsoCodes`**（`string[]`）：支持的语言 ISO 码；**为空则 `IsValid` 为 false**。
- **`SubtitleExtension`**：字幕文件扩展名（来自 `subtitle_extension`）。
- **`IsUnderDevelopment`**：是否仍在开发中（来自 `under_development`）。
- **`XmlPaths`**（`MBReadOnlyList<string>`）：该语言要加载的译文 XML 路径（已拼接 `modulePath`）。
- **`VoiceXmlPathsAndModulePaths`**：语音 XML 路径到所属模块的映射。
- **`IsValid`**：`SupportedIsoCodes.Length != 0` 的结果，标记该语言元数据是否完整。

### InitializeDefault(...)
`public void InitializeDefault(string title, string[] supportedIsoCodes, string subtitleExtension, string textProcessor, bool isUnderDevelopment)`
用于在没有 XML 时给默认语言（通常 English）直接赋值，`IsValid` 同样由 `supportedIsoCodes` 长度决定。

## 最小真实示例

```csharp
// 读取语言元数据，并用其 TextProcessor 名称创建对应的语法处理器
LanguageData english = LanguageData.GetLanguageData("English");
string processorName = english.TextProcessor;
LanguageSpecificTextProcessor proc = LocalizedTextManager.CreateTextProcessorForLanguage("English");
string result = proc.Process("{=x}Hello, world");
```

## 导航

- ↑ Parent: [localization 目录](../)
- ↔ Sibling: [LocalizedTextManager](../LocalizedTextManager)
- ↔ Sibling: [LanguageSpecificTextProcessor](../LanguageSpecificTextProcessor)
- ↔ Sibling: [MBTextManager](../MBTextManager)
