---
title: "TypeSaveId"
description: "SaveId 的具体子类之一：表示一个普通可保存类的类型身份，由 1 个全局整数类型编号（即 [SaveableRootClass] 的 SaveId）编码而成，是归档里最常见、最轻量的类型身份键。"
---

# TypeSaveId

**命名空间：** `TaleWorlds.SaveSystem.Definition`  
**模块：** `TaleWorlds.SaveSystem`  
**类型：** `public class TypeSaveId : SaveId`  
**基类：** `TaleWorlds.SaveSystem.Definition.SaveId`  
**源文件：** `TaleWorlds.SaveSystem/Definition/TypeSaveId.cs`

## 概述

`TypeSaveId` 是 `SaveId` 三种具体形态里最基础的一种，专门表示一个“普通类”（非泛型、非容器）的可保存身份。它只包装一个 `int` 编号——也就是你给 `[SaveableRootClass(id)]` 或 `SaveableTypeDefiner` 注册的那个全局类型编号——并把字符串身份直接取为 `Id.ToString()`。在归档里它被写成 1 字节标签 `0` 紧跟 4 字节整数（`WriteTo`/`ReadFrom`），固定占用 5 字节（`GetSizeInBytes`）。当你在 mod 里给一个完整数据类贴 `[SaveableRootClass(910001)]` 时，引擎在序列化这条类型时用的正是 `TypeSaveId(910001)`。

## 心智模型

- **是什么：** 单个整数类型编号的轻量封装，是“这个类在存档世界里叫几号”的存档侧表达。
- **何时用：** 阅读底层序列化、或排查“为什么我的类型在旧档里找不到定义”时，`TypeSaveId` 携带的 `Id` 就是你要核对的数字；它也解释了为什么 `SaveId` 全局唯一且跨版本稳定如此重要。
- **何时不要用：** 不要为了“存一个编号”而在 mod 业务里 `new TypeSaveId(...)`——类型编号由定义上下文在你登记 `SaveableRootClass` 时自动管理；你该做的是正确声明 Attribute 与 definer，而不是手写身份键。泛型类（`List<Hero>`）与容器也不走 `TypeSaveId`，它们分别由 [GenericSaveId](../GenericSaveId) 与 [ContainerSaveId](../ContainerSaveId) 表示。
- **谁创建/持有：** 由 [SaveManager](../SaveManager) 的序列化层在保存时、依据 [DefinitionContext](../DefinitionContext) 里登记的类型编号创建，并随 [ArchiveSerializer](../ArchiveSerializer) 写盘；加载时由 `SaveId.ReadSaveIdFrom` 重建。
- **处在哪一层：** 类型身份层（[SaveId](../SaveId) 体系）的一环，介于“定义上下文的类型编号”与“归档字节”之间。

## 何时使用 / 何时不要使用

**使用（理解层面）：** 调试跨版本坏档——例如确认某次读取失败是不是因为 `TypeSaveId.Id` 与当前 definer 的编号对不上。

**不要使用：**

- 不要用它来“手动给对象编号”或替代 `[SaveableField(id)]` 的成员编号；两者层级不同：类型编号标识“类”，成员编号标识“类里的字段”。
- 不要改动已发布类型的编号期望：把某原生类的 `TypeSaveId.Id` 当成可随意重映射的值，会导致旧档类型解析失败。

## 依赖图

- 基类：[SaveId](../SaveId) —— `TypeSaveId` 是它由 `ReadSaveIdFrom` 按标签 `0` 重建的子类。
- 编号来源：[SaveableRootClassAttribute](../SaveableRootClassAttribute) 上的 `SaveId` 参数就是这里的 `Id`；[SaveableTypeDefiner](../SaveableTypeDefiner) 负责把它登记进定义上下文。
- 写入方：[ArchiveSerializer](../ArchiveSerializer) 调用 `WriteTo` 把 `Id` 写成 5 字节。
- 读取方：[ArchiveDeserializer](../ArchiveDeserializer) 通过 `SaveId.ReadSaveIdFrom` 再经 `TypeSaveId.ReadFrom` 还原。

## 风险

- **类型编号重复或失效** → 两个不同类拥有相同 `Id`，`TypeSaveId` 无法区分，加载时张冠李戴甚至抛“找不到类型定义”。
- **跨版本改编号** → 旧档里写的是旧 `Id`，新版 definer 没有对应类型，读档失败（坏档）。
- **`GetSizeInBytes` 恒为 5** → 它只算 `WriteTo` 的固定开销（1 标签 + 4 整数），不随 `Id` 大小变化；依赖它做动态长度估算的代码会算错。

## 成员说明

### 构造 `TypeSaveId(int id)`

传入全局类型编号，存入只读属性 `Id`，并把字符串身份 `_stringId` 设为 `id.ToString()`。

### 属性 `Id`（`int`，私有 set）

本类型在全局定义上下文中的编号。`[SaveableRootClass(5000)]` 中的 `5000`（原生 `Game`）即落到这里。构造后不可改，因为身份必须不可变。

### `override string GetStringId()`

返回 `Id` 的十进制字符串。它同时作为 `Equals`/`GetHashCode` 的判等依据，因此全局唯一且跨版本稳定。

### `override void WriteTo(IWriter writer)`

先 `WriteByte(0)` 打标签，再 `WriteInt(Id)` 写 4 字节整数。

### `static TypeSaveId ReadFrom(IReader reader)`

读一个 `int` 重建实例，`ReadSaveIdFrom` 在标签为 `0` 时调用它。

### `override int GetSizeInBytes()`

固定返回 `5`（1 字节标签 + 4 字节整数）。

## 示例

模组侧只声明类型身份，引擎在 `SaveManager.Save` 内部用 `TypeSaveId` 把编号写入归档：

```csharp
MetaData metaData = MetaData.CreateNew("MyMod", ApplicationVersion.FromString("e1.0.0"));
SaveOutput output = SaveManager.Save(Game.Current, metaData, saveName, driver);
```

在加载端，引擎读回身份时按标签 `0` 重建 `TypeSaveId`——这正是“旧档里的 5000 号”被还原成 `Game` 的机制：

```csharp
// 引擎在 ArchiveDeserializer 内部（示意）：
SaveId id = SaveId.ReadSaveIdFrom(reader);
if (id is TypeSaveId typeId)
{
    int typeNumber = typeId.Id; // 与 SaveableRootClass 的 SaveId 对应
}
```

> 注意：`typeNumber` 必须与当前 [SaveableTypeDefiner](../SaveableTypeDefiner) 登记的类型编号一致，否则读档会因“找不到类型定义”失败。

## 参见

- ↑ 父级：[存档系统 API 索引](../)
- ↔ 相关：[SaveId](../SaveId) · [GenericSaveId](../GenericSaveId) · [ContainerSaveId](../ContainerSaveId) · [SaveableRootClassAttribute](../SaveableRootClassAttribute) · [SaveableTypeDefiner](../SaveableTypeDefiner) · [ArchiveSerializer](../ArchiveSerializer)
