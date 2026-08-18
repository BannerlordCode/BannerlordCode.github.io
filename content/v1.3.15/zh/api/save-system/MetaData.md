---
title: "MetaData"
description: "存档元数据载体：以 JSON 序列化的字符串键值对存储存档头信息（版本、模组、名称等），由 SaveManager 在保存/加载时读写，mod 可用 LoadMetaData 只读检查存档头而不触发完整加载。"
---

# MetaData

**命名空间：** `TaleWorlds.SaveSystem`
**模块：** `TaleWorlds.SaveSystem`
**类型：** `public class MetaData`
**基类/Base：** 无（直接继承自 `System.Object`）
**源文件路径/Source：** `TaleWorlds.SaveSystem/MetaData.cs`

## 一句话职责

`MetaData` 是存档文件的「头信息小档案」：一个字符串键值对容器，记录版本、模组名、存档名等元信息，能在不还原整个对象图的情况下随 `.sav` 单独读写，供 [SaveManager](../SaveManager) 与加载界面快速识别一份存档。

## 概述

`MetaData` 位于 `TaleWorlds.SaveSystem`，是一个轻量数据载体，内部用 `[JsonProperty("List")]` 标注的 `Dictionary<string, string> _list` 存放键值对（序列化时字段名记为 `List`）。它对外暴露 `Count`、`this[key]` 索引器、`Keys` 三个只读视图，以及 `Add`、`TryGetValue`、`Serialize(Stream)` 和静态 `Deserialize(Stream)` 四个操作。它的职责不是承载游戏状态（那是 `Campaign`/对象图的事），而是携带「这份存档是什么」的元信息，并且可以以极低成本单独读出来——这正是 [SaveManager.LoadMetaData](../SaveManager) 能在不跑完整 `Load` 的情况下告诉你存档版本的原因。

## 心智模型

把 `MetaData` 想成存档文件的「书签卡」：每当 [SaveManager](../SaveManager) 保存时，它会构造一份 `MetaData` 并随根对象一起交给驱动，`Serialize` 先把整个字典用 `JsonConvert` 序列化成 UTF8 字符串，再在最前面写 4 字节小端长度前缀，最后把字节写进 `Stream`——于是读取端可以先读 4 字节知道 JSON 有多长，再精准读取。加载时 [SaveManager.LoadMetaData](../SaveManager) 调 `Deserialize` 只取这张卡，绝不重建 `Campaign`；完整 `Load` 则把 `MetaData` 一并还原后用于版本/模组校验。它由引擎在保存流程中创建并填充，生命周期随一次保存/加载的 I/O 起止；mod 通常只读取它，必要时在保存前通过索引器写入自定义键（如模组版本号）以便日后迁移判断。注意 `Deserialize` 在流损坏或 JSON 非法时会 `catch` 后返回 `null`，读取方必须判空。

## 何时用 / 何时不要用

**使用：** 当你需要在不触发完整加载的前提下，只读地检查一份已有存档的版本、模组名等头信息（例如加载界面的兼容性提示、旧档迁移前的探测），或想往存档头里塞一个自定义键供将来识别。

**不要用：**

- 不要把 `MetaData` 当业务数据存储——它只是字符串键值对元信息，真正的游戏状态请走 [SaveableTypeDefiner](../SaveableTypeDefiner) 与对象图。
- 不要缓存一份 `Deserialize` 的结果当长期对象——它可能返回 `null`，且它只反映存档头，不随运行时世界更新。
- 不要用它替代 `ApplicationVersion` 之类的正式版本字段做复杂比对——它只是字符串，比较逻辑要你自己写。

## 依赖图

- 驱动入口：[SaveManager](../SaveManager) 的 `Save` 接收 `MetaData` 一并落盘，`LoadMetaData` 只调 `Deserialize` 取回头信息，[LoadContext](../LoadContext) 在完整加载时也会还原它用于校验。
- 序列化底座：`Serialize`/`Deserialize` 依赖 `Newtonsoft.Json`（`JsonConvert`）与 `Encoding.UTF8`，字节写入由 `ISaveDriver` 经 [SaveManager](../SaveManager) 完成。
- 关联定义：存档整体 schema 由 [DefinitionContext](../DefinitionContext) 与 [SaveableTypeDefiner](../SaveableTypeDefiner) 决定，`MetaData` 只负责头信息，不参与对象图。

## 风险段

- **损坏流返回 null。** `Deserialize` 内部 `try/catch` 吞掉一切异常并返回 `null`；调用方不判空就直接 `metaData["key"]` 会空引用。
- **键缺失返回 null。** 索引器 `this[key]` 在键不存在时返回 `null`（不是抛异常），把它当非空字符串拼接可能得到 `"null"` 文本或后续 `NullReferenceException`。
- **重复 Add 抛异常。** `Add` 直接 `_list.Add`，键已存在会抛 `ArgumentException`；想覆盖请用索引器 `metaData[key] = value`。
- **长度前缀依赖流完整。** `Deserialize` 先读 4 字节长度再读对应字节数；流被截断时读到的 `num` 可能超过剩余字节，导致序列化为空对象或异常（最终返回 null）。
- **改动头结构破坏兼容。** 自定义键请保持字符串且向后兼容；若以后读取旧档却期望新键，务必用 `TryGetValue` 优雅降级。

## 成员说明

### 公开属性（只读）

- `int Count { get; }`：`[JsonIgnore]`，返回当前键值对数量（`_list.Count`），用于快速判断元数据是否为空。
- `string this[string key] { get; set; }`：索引器。读取时键不存在返回 `null`；写入时为覆盖式 `set`（同键更新值，不会重复）。
- `Dictionary<string, string>.KeyCollection Keys { get; }`：`[JsonIgnore]`，返回 `_list.Keys`，便于遍历所有已存键；注意它是实时视图，遍历时修改字典会抛异常。

### 主要方法

- `void Add(string key, string value)`：向字典新增键值对；键已存在会抛 `ArgumentException`，覆盖请用索引器。
- `bool TryGetValue(string key, out string value)`：安全读取：键存在时 `value` 取到内容并返回 `true`，否则 `value` 为 `null` 并返回 `false`。这是读取头信息最稳妥的方式。
- `void Serialize(Stream stream)`：把自身 JSON 序列化后写入流——先写 4 字节小端长度（`BitConverter.GetBytes(bytes.Length)`），再写 UTF8 字节。供驱动落盘调用。
- `static MetaData Deserialize(Stream stream)`：从流读回 `MetaData`：先读 4 字节长度，再读对应字节数，用 `JsonConvert.DeserializeObject<MetaData>` 还原；任何失败返回 `null`。**调用方务必判空。**

> **存储格式：** 磁盘上的元数据段 = `[4 字节长度][UTF8(JSON)]`，JSON 顶层是一个名为 `List` 的对象（对应 `_list` 的 `[JsonProperty("List")]`）。

## 最小真实示例

只读检查一份存档的头信息（无需完整加载），是 `MetaData` 最常见的正确用法——注意对 `Deserialize` 返回值与 `TryGetValue` 都要做空/失败保护：

```csharp
MetaData metaData = SaveManager.LoadMetaData(saveName, saveDriver);
if (metaData != null && metaData.TryGetValue("Version", out string version))
{
    InformationManager.DisplayMessage(new InformationMessage("存档版本: " + version));
}
```

保存时由引擎填充 `MetaData` 并随根对象落盘（示意，真实调用发生在 [SaveManager](../SaveManager) 内部）：

```csharp
MetaData header = new MetaData();
header["ModVersion"] = "1.2.0";
header.Add("SaveName", "my_slot");
SaveOutput output = SaveManager.Save(Campaign.Current, header, saveName, saveDriver);
```

## 导航块

- 父级：[存档系统 API 索引](../)
- 同级：[ContainerDefinition](../ContainerDefinition) · [MemberTypeId](../MemberTypeId)
- 相关：[SaveManager](../SaveManager) · [LoadContext](../LoadContext) · [SaveableTypeDefiner](../SaveableTypeDefiner)
