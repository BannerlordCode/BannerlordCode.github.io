---
title: "ContainerSaveId"
description: "SaveId 的具体子类之一：表示 List / Dictionary / 数组等“容器结构”本身的类型身份，记录容器种类（ContainerType）以及键/值元素的类型身份，让存档能区分 List<Hero> 与 Dictionary<Hero,Item>。"
---

# ContainerSaveId

**命名空间：** `TaleWorlds.SaveSystem.Definition`  
**模块：** `TaleWorlds.SaveSystem`  
**类型：** `public class ContainerSaveId : SaveId`  
**基类：** `TaleWorlds.SaveSystem.Definition.SaveId`  
**源文件：** `TaleWorlds.SaveSystem/Definition/ContainerSaveId.cs`

## 概述

`ContainerSaveId` 是 `SaveId` 体系里表示“容器类型身份”的具体子类。它不描述某个具体元素的值，而是描述**容器这个结构本身是什么**：`ContainerType` 标明是 List / Dictionary / Array / Queue / CustomList / CustomReadOnlyList；`KeyId` 与 `ValueId` 则记录容器里键与值的元素类型身份（非字典容器只有 `KeyId`，`ValueId` 为 null）。字符串身份被拼成 `C(类型码)-(键身份)` 或 `C(类型码)-(键身份,值身份)`（字典）。写盘时打标签 `2`，再写容器类型字节与键/值身份。它让保存系统能区分 `List<Hero>`、`Dictionary<Hero, Item>`、`Hero[]` 这类“形状相同但元素类型不同”的容器。

## 心智模型

- **是什么：** 容器结构的类型指纹——回答“这是一个什么种类的集合，里面装的是什么类型”。
- **何时用：** 阅读底层、排查“为什么 `List<Hero>` 读出来变成了 `List<Item>`”或泛型容器元素类型错位时，`ContainerSaveId` 的 `ContainerType` 与 `KeyId`/`ValueId` 就是核对点。
- **何时不要用：** 不要把 `ContainerSaveId` 和“泛型类身份”混为一谈：[GenericSaveId](../GenericSaveId) 表示“某个泛型类被填了哪些类型参数”；而 `ContainerSaveId` 表示“List/Dictionary/数组这类标准容器结构”。例如 `List<Hero>` 整体作为容器是 `ContainerSaveId(ContainerType.List, TypeSaveId(Hero))`；若你自己写了一个 `class MyGeneric<T>` 并实例化 `MyGeneric<Hero>`，那才是 `GenericSaveId`。模组不应 `new ContainerSaveId(...)`，容器身份由引擎在序列化集合字段时自动生成。
- **谁创建/持有：** 由 [SaveManager](../SaveManager) 的序列化层在遇到集合类型字段时，依据 [DefinitionContext](../DefinitionContext) 里登记的容器定义创建，并随 [ArchiveSerializer](../ArchiveSerializer) 写盘；加载时由 `SaveId.ReadSaveIdFrom` 按标签 `2` 重建。
- **处在哪一层：** 类型身份层的一环，介于“容器类型定义”与“归档字节”之间。

## 何时使用 / 何时不要使用

**使用（理解层面）：** 调试集合字段跨版本坏档——例如某字段从 `List<Hero>` 改成 `Dictionary<Hero, Item>`，容器身份对不上导致读档失败。

**不要使用：**

- 不要认为 `ValueId` 总是有值：只有 `ContainerType.Dictionary` 才有 `ValueId`，其余容器它恒为 `null`，访问前先判 `ContainerType`。
- 不要改动 `ContainerType` 的枚举值含义——它直接写入字节，跨版本必须稳定。

## 依赖图

- 基类：[SaveId](../SaveId) —— 由 `ReadSaveIdFrom` 按标签 `2` 重建。
- 容器种类：[ContainerType](../ContainerType) 决定身份拼接与字节布局。
- 元素身份：`KeyId` / `ValueId` 本身是 [SaveId](../SaveId)（通常为 [TypeSaveId](../TypeSaveId) 或 [GenericSaveId](../GenericSaveId)）。
- 写入/读取：[ArchiveSerializer](../ArchiveSerializer) 与 [ArchiveDeserializer](../ArchiveDeserializer) 分别调用 `WriteTo` / `ReadFrom`。

## 风险

- **容器种类与定义上下文不符** → `ContainerType` 标错会导致 `ValueId` 被错误读写或漏读，坏档。
- **元素类型身份缺失** → `KeyId`/`ValueId` 指向的类型（如 `Hero`）未登记 definer，加载时容器元素无法还原，抛“找不到类型定义”。
- **`GetSizeInBytes` 依赖元素身份** → 返回 `2 + KeyId.GetSizeInBytes()`，字典时再加 `ValueId.GetSizeInBytes()`；非字典时 `ValueId` 为 null，勿对其取大小。

## 成员说明

### 属性 `ContainerType`（`ContainerType`）

容器种类枚举（List / Dictionary / Array / Queue / CustomList / CustomReadOnlyList），决定身份拼接与 `WriteTo` 的字节布局。

### 属性 `KeyId`（`SaveId`）

容器元素（或字典键）的类型身份。构造时即确定并缓存字符串身份。

### 属性 `ValueId`（`SaveId`）

仅 `ContainerType.Dictionary` 有意义，表示字典值的类型身份；其它容器为 `null`。

### 构造 `ContainerSaveId(ContainerType, SaveId elementId)`

单参数版（非字典）：`KeyId = elementId`，`ValueId = null`。

### 构造 `ContainerSaveId(ContainerType, SaveId keyId, SaveId valueId)`

字典版：`KeyId = keyId`，`ValueId = valueId`。

### `override string GetStringId()`

字典返回 `C(类型码)-(键身份,值身份)`，其余返回 `C(类型码)-(键身份)`。

### `override void WriteTo(IWriter writer)`

写标签 `2`，写 `ContainerType` 字节，写 `KeyId.WriteTo`；若为字典再写 `ValueId.WriteTo`。

### `static ContainerSaveId ReadFrom(IReader reader)`

读 `ContainerType`，按是否字典决定读 1 或 2 个元素身份（每个再用 `ReadSaveIdFrom` 重建），返回新实例。

### `override int GetSizeInBytes()`

返回 `2 + KeyId.GetSizeInBytes()`，字典时额外加 `ValueId.GetSizeInBytes()`。

## 示例

模组侧不直接构造 `ContainerSaveId`；当你保存一个含 `List<Hero>` 或 `Dictionary<Hero, Item>` 字段的对象图时，引擎在 `SaveManager.Save` 内部会为每个容器生成对应的 `ContainerSaveId` 并写盘：

```csharp
MetaData metaData = MetaData.CreateNew("MyMod", ApplicationVersion.FromString("e1.0.0"));
SaveOutput output = SaveManager.Save(Game.Current, metaData, saveName, driver);
```

在加载端，引擎按标签 `2` 重建 `ContainerSaveId` 并据 `ContainerType` 与键/值身份还原容器——这正是集合字段能精确还原的原因：

```csharp
// 引擎在 ArchiveDeserializer 内部（示意）：
SaveId id = SaveId.ReadSaveIdFrom(reader);
if (id is ContainerSaveId containerId)
{
    ContainerType kind = containerId.ContainerType; // List / Dictionary / Array ...
    SaveId elementId = containerId.KeyId;           // 元素（或键）的类型身份
}
```

> 注意：`containerId` 仅在本次加载有效，且 `ValueId` 仅在 `ContainerType.Dictionary` 时非空。

## 参见

- ↑ 父级：[存档系统 API 索引](../)
- ↔ 相关：[SaveId](../SaveId) · [TypeSaveId](../TypeSaveId) · [GenericSaveId](../GenericSaveId) · [ContainerType](../ContainerType) · [SaveManager](../SaveManager) · [ArchiveDeserializer](../ArchiveDeserializer)
