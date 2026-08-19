---
title: "GenericSaveId"
description: "SaveId 的具体子类之一（internal）：表示“已实例化的泛型类”的类型身份，例如 `Dictionary<Hero, Item>` 这类同时带多个类型参数的泛型类型，把基类编号与每个泛型实参编号拼成 G(基类)-(实参1,实参2) 形式。"
---

# GenericSaveId

**命名空间：** `TaleWorlds.SaveSystem.Definition`  
**模块：** `TaleWorlds.SaveSystem`  
**类型：** `internal class GenericSaveId : SaveId`  
**基类：** `TaleWorlds.SaveSystem.Definition.SaveId`  
**源文件：** `TaleWorlds.SaveSystem/Definition/GenericSaveId.cs`

## 概述

`GenericSaveId` 是 `SaveId` 体系中负责“泛型类身份”的具体子类，标记为 `internal`，模组无法直接引用。它表示一个**被具体类型参数实例化过的泛型类**，例如 `Dictionary<Hero, Item>`、`Dictionary<Settlement, List<Clan>>` 这种带若干类型参数的开放/闭合泛型。它由两部分组成：`BaseId`（基泛型类型本身的身份，通常是个 [TypeSaveId](../TypeSaveId)）与 `GenericTypeIDs`（每个泛型实参的身份数组，元素本身又是 `SaveId`）。字符串身份被拼成 `G(基类编号)-(实参1,实参2,...)`，写盘时打标签 `1`，再递归写基类与每个实参。它让保存系统能够精确还原“泛型类的哪一个具体实例化”，而不是只记“泛型类本身”。

## 心智模型

- **是什么：** 泛型类实例化的完整类型指纹——既记录“这是哪个泛型类”，又记录“它的每个类型参数是什么”。
- **何时用：** 阅读底层、排查泛型集合在旧档里反序列化成错误类型（例如 `Dictionary<Hero, Item>` 被还原成 `Dictionary<Hero, object>`）时，`GenericSaveId` 的 `BaseId` 与 `GenericTypeIDs` 就是要逐层核对的线索。
- **何时不要用：** 不要把它和“容器”混淆。[ContainerSaveId](../ContainerSaveId) 表示 `List`/`Dictionary` 这种**容器结构**自身的身份；而 `GenericSaveId` 表示“某个泛型类被填了哪些类型参数”。例如 `List<Hero>` 整体作为容器是 [ContainerSaveId](../ContainerSaveId)，而 `Dictionary<Hero, Item>` 这一泛型类型的身份则是 `GenericSaveId`。模组不应 `new GenericSaveId(...)`，身份由引擎在序列化泛型类型时自动生成。
- **谁创建/持有：** 由 [SaveManager](../SaveManager) 的序列化层在遍历对象图、遇到泛型类型时，依据 [DefinitionContext](../DefinitionContext) 登记的类型定义创建，并随 [ArchiveSerializer](../ArchiveSerializer) 写盘；加载时由 `SaveId.ReadSaveIdFrom` 按标签 `1` 重建。
- **处在哪一层：** 类型身份层的一环，介于“泛型类型定义”与“归档字节”之间，是 [SaveId](../SaveId) 多态体系的一部分。

## 何时使用 / 何时不要使用

**使用（理解层面）：** 调试跨版本泛型类型漂移——某个泛型类的类型参数集合在版本间变了，旧档读不出正确实例化。

**不要使用：**

- 不要认为“容器”走 `GenericSaveId`：List/Dictionary/数组走 [ContainerSaveId](../ContainerSaveId)，只有“带类型参数的泛型类本身”才走 `GenericSaveId`。
- 不要假设 `GenericTypeIDs` 长度固定：它取决于泛型类的arity（类型参数个数），`Dictionary<K,V>` 是 2 个，自定义单参数泛型是 1 个。

## 依赖图

- 基类：[SaveId](../SaveId) —— 由 `ReadSaveIdFrom` 按标签 `1` 重建。
- 基类身份：[TypeSaveId](../TypeSaveId) 通常充当 `BaseId`（泛型类本身的编号）。
- 实参身份：每个元素又是 `SaveId`（可能是 [TypeSaveId](../TypeSaveId)、[GenericSaveId](../GenericSaveId) 或 [ContainerSaveId](../ContainerSaveId)，支持嵌套）。
- 写入/读取：[ArchiveSerializer](../ArchiveSerializer) 与 [ArchiveDeserializer](../ArchiveDeserializer) 分别调用 `WriteTo` / `ReadFrom`。

## 风险

- **泛型实参身份递归失效** → `GenericTypeIDs` 里某层（如深层 `List<Clan>`）未被定义上下文登记，加载时整条泛型身份解析失败，坏档。
- **基类编号跨版本变动** → `BaseId` 对应的 `TypeSaveId.Id` 变了，旧档无法映射到新泛型类。
- **`GetSizeInBytes` 是递归累加** → 返回 `2 + BaseId.GetSizeInBytes() + Σ 各实参`，长度随泛型嵌套深度变化；不要把它当成固定值。

## 成员说明

### 属性 `BaseId`（`SaveId`）

泛型类本身的身份（通常是 `TypeSaveId`），表示“这是哪个泛型类”。

### 属性 `GenericTypeIDs`（`SaveId[]`）

泛型类的类型实参数组，每个元素都是 `SaveId`，支持嵌套（如 `Dictionary<Hero, List<Item>>` 的第二项是 `ContainerSaveId`）。

### 构造 `GenericSaveId(TypeSaveId baseId, SaveId[] saveIds)`

传入基类身份与实参数组，立即调用 `CalculateStringId()` 缓存字符串身份。`saveIds` 为空会令拼接与 `GetSizeInBytes` 出错，因此实参必须齐全。

### `override string GetStringId()`

返回形如 `G(910001)-(5000,910002)` 的字符串，由 `BaseId` 与 `GenericTypeIDs` 拼接而成，作为 `Equals`/`GetHashCode` 依据。

### `override void WriteTo(IWriter writer)`

写标签 `1`，递归 `BaseId.WriteTo`，再写 1 字节实参个数，最后逐个 `GenericTypeIDs[i].WriteTo`。

### `static GenericSaveId ReadFrom(IReader reader)`

读标签后重建 `BaseId`，再按实参个数循环 `ReadSaveIdFrom` 重建每个实参（支持嵌套的 generic/container/type）。

### `override int GetSizeInBytes()`

返回 `2 + BaseId.GetSizeInBytes() + 各实参 GetSizeInBytes 之和`；标签 1 字节 + 长度 1 字节 + 递归内容。

## 示例

模组侧不直接构造 `GenericSaveId`；当你保存一个包含 `Dictionary<Hero, Item>` 字段的对象图时，引擎在 `SaveManager.Save` 内部会为该泛型类型生成 `GenericSaveId` 并写盘：

```csharp
MetaData metaData = MetaData.CreateNew("MyMod", ApplicationVersion.FromString("e1.0.0"));
SaveOutput output = SaveManager.Save(Game.Current, metaData, saveName, driver);
```

在加载端，引擎按标签 `1` 重建 `GenericSaveId` 并逐层还原实参身份——这正是泛型类型能被精确还原的原因：

```csharp
// 引擎在 ArchiveDeserializer 内部（示意）：
SaveId id = SaveId.ReadSaveIdFrom(reader);
if (id is GenericSaveId genericId)
{
    SaveId baseType = genericId.BaseId;       // 泛型类本身
    SaveId[] args = genericId.GenericTypeIDs; // 每个类型实参
}
```

> 注意：`genericId` 仅在本次加载有效，模组不应缓存它作为业务身份。

## 参见

- ↑ 父级：[存档系统 API 索引](../)
- ↔ 相关：[SaveId](../SaveId) · [TypeSaveId](../TypeSaveId) · [ContainerSaveId](../ContainerSaveId) · [SaveManager](../SaveManager) · [ArchiveDeserializer](../ArchiveDeserializer) · [DefinitionContext](../DefinitionContext)
