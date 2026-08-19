---
title: "SavedMemberType"
description: "internal 枚举：把“一个被保存成员的值”归类为对象/容器/字符串/元组/自定义结构/枚举/基础类型七类，供保存系统在序列化时选择对应的写入策略与身份表示。"
---

# SavedMemberType

**命名空间：** `TaleWorlds.SaveSystem`  
**模块：** `TaleWorlds.SaveSystem`  
**类型：** `internal enum SavedMemberType`  
**基类：** `System.Enum`  
**源文件：** `TaleWorlds.SaveSystem/SavedMemberType.cs`

## 概述

`SavedMemberType` 是一个 `internal` 枚举（模组不可直接引用），用于在保存系统内部给“某个被保存成员的值”做**类别归类**。取值为 `Object`、`Container`、`String`、`Tuple`、`CustomStruct`、`Enum`、`BasicType`。当序列化器遍历一个对象的可保存成员（[SaveableFieldAttribute](../SaveableFieldAttribute) / [SaveablePropertyAttribute](../SaveablePropertyAttribute) 标记者）时，它会先判断该成员的值是“引用一个对象”“是一个容器”“是字符串/元组/自定义结构/枚举，还是基础类型”，再据此选择对应的编码路径、引用处理与类型身份（[SaveId](../SaveId) / [ContainerSaveId](../ContainerSaveId) 等）。它是连接“成员定义”和“具体写入策略”之间的分类开关。

## 心智模型

- **是什么：** 成员值的“存储类别标签”，回答“这一项在归档里属于哪一类数据”。
- **何时用：** 阅读底层、排查“为什么某成员被当成引用对象而非值类型存储”“为什么字符串/枚举走了特殊路径”时，`SavedMemberType` 就是序列化器内部做的那个分支判断。
- **何时不要用：** 不要在 mod 代码里依赖或指定它——它是 `internal`，且由引擎按成员运行时值自动判定。要影响成员的存储方式，应通过正确的 `[SaveableField]`/`[SaveableProperty]` 声明与类型选择，而不是试图干预这个内部枚举。
- **谁创建/持有：** 由保存系统的序列化层在遍历成员、分析值时设置，是单次保存/加载内部的临时分类，不进入存档字节、也不暴露给 mod。
- **处在哪一层：** 处于“成员序列化层”——在类型/成员定义（[TypeDefinition](../TypeDefinition) / [MemberTypeId](../MemberTypeId)）之下、具体字节写入（[ArchiveSerializer](../ArchiveSerializer)）之上。

## 何时使用 / 何时不要使用

**使用（理解层面）：** 调试“成员未被保存或被错存”的底层原因——例如某成员因类型未被识别而落不到任一 `SavedMemberType`，序列化器无从编码。

**不要使用：**

- 不要假设 `BasicType` 覆盖所有简单类型：只有保存系统已支持的基础类型（数值、布尔、部分结构体等）才归于此；自定义值类型若未登记，会落到无法识别的路径。
- 不要把它当成 mod 可配置项：它是引擎内部实现细节，跨版本可能调整取值含义。

## 依赖图

- 成员声明：[SaveableFieldAttribute](../SaveableFieldAttribute) 与 [SaveablePropertyAttribute](../SaveablePropertyAttribute) 标记的成员，是 `SavedMemberType` 被判定作用的对象。
- 成员定义：[TypeDefinition](../TypeDefinition) 与 [MemberTypeId](../MemberTypeId) 描述成员本身；`SavedMemberType` 描述其“值的类别”。
- 类型身份：[SaveId](../SaveId) / [ContainerSaveId](../ContainerSaveId) 等由分类结果进一步细化（对象→引用身份，容器→[ContainerSaveId](../ContainerSaveId)）。
- 执行入口：[SaveManager](../SaveManager) 驱动保存，序列化器据分类写入；[ArchiveSerializer](../ArchiveSerializer) 是实际落盘方。

## 风险

- **成员值无法归类** → 若类型既不在基础类型、又无 `Object`/`Container` 等可用身份，序列化器无从编码，保存阶段抛异常。
- **自定义结构未登记** → 期望走 `CustomStruct` 却因缺少 definer 落到未识别类别，成员被丢弃或保存失败。
- **跨版本改枚举语义** → 虽 `internal` 不进存档，但若是分类逻辑变化导致同一成员在新版归入不同类别，行为可能与旧档假设不一致。

## 成员说明

### `Object`

成员值是一个可保存对象引用（如 `Hero`、`Clan`），序列化时按引用身份处理、可能跨对象去重。

### `Container`

成员值是一个集合（List/Dictionary/数组等），对应 [ContainerSaveId](../ContainerSaveId)。

### `String`

成员值是字符串，走字符串池去重路径。

### `Tuple`

成员值是一个元组，按元组结构编码。

### `CustomStruct`

成员值是自定义可保存结构体（[ISavedStruct](../ISavedStruct) 之类），需 definer 登记。

### `Enum`

成员值是枚举，按枚举解析（参见 [IEnumResolver](../IEnumResolver)）。

### `BasicType`

成员值是保存系统已支持的基础类型（数值、布尔等），直接按基础类型序列化。

## 示例

模组侧不直接接触 `SavedMemberType`；当你保存一个对象图时，引擎在 [SaveManager](../SaveManager) 内部遍历每个 `[SaveableField]` 成员并为其判定 `SavedMemberType`，再交给 [ArchiveSerializer](../ArchiveSerializer) 编码：

```csharp
MetaData metaData = MetaData.CreateNew("MyMod", ApplicationVersion.FromString("e1.0.0"));
SaveOutput output = SaveManager.Save(Game.Current, metaData, saveName, driver);
```

在序列化内部，成员值类别决定写入策略——这正是“对象引用去重、字符串进字符串池、基础类型直写”的分流点：

```csharp
// 引擎在 ArchiveSerializer 内部（示意）：按成员值的 SavedMemberType 选择编码路径
SavedMemberType kind = SavedMemberType.Object; // 对 Hero 这类引用成员
if (kind == SavedMemberType.Container)
{
    ContainerSaveId id = new ContainerSaveId(ContainerType.List, elementId);
}
```

> 注意：`SavedMemberType` 为 `internal`，模组不应引用；分类由引擎按成员运行时值自动完成。

## 参见

- ↑ 父级：[存档系统 API 索引](../)
- ↔ 相关：[SaveableFieldAttribute](../SaveableFieldAttribute) · [SaveablePropertyAttribute](../SaveablePropertyAttribute) · [TypeDefinition](../TypeDefinition) · [MemberTypeId](../MemberTypeId) · [SaveId](../SaveId) · [ContainerSaveId](../ContainerSaveId) · [ArchiveSerializer](../ArchiveSerializer)
