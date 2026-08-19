---
title: "BoolBasicTypeSerializer"
description: "bool 基本类型序列化器：把 bool 字段以 1 字节写入存档流，由存档系统在遇到 bool 类型的 [SaveableField] 时自动选择，模组无需手动 new 或调用。"
---

# BoolBasicTypeSerializer

**命名空间：** `TaleWorlds.SaveSystem.Definition`
**模块：** `TaleWorlds.SaveSystem`
**类型：** `internal class BoolBasicTypeSerializer : IBasicTypeSerializer`
**源文件：** `TaleWorlds.SaveSystem/Definition/BoolBasicTypeSerializer.cs`

## 概述

`BoolBasicTypeSerializer` 是存档系统为 CLR 基本类型 `bool` 准备的内置序列化器。当某个 `[SaveableField]` 或 `[SaveableProperty]` 的静态类型是 `bool` 时，引擎在 `DefinitionContext` 里查到对应的 `BasicTypeDefinition`，进而拿到本序列化器，由 `VariableSaveData` 在保存路径调用 `Serialize` 把值写入字节流、在加载路径调用 `Deserialize` 读回。它只服务 `bool` 这一种原始值，固定占用 1 字节；你几乎永远不应当在模组代码里直接 `new` 它——它是存档系统「基本类型快路径」的一环，与 `string`、`int`、向量/矩阵等一组内置序列化器并列。

## 心智模型

把 `BoolBasicTypeSerializer` 想成存档系统类型路由器为 `bool` 这个原始类型挂的一张「直达车票」：当 `SaveManager` 遍历对象图、碰到某个 `bool` 字段时，它不会走完整的对象图/引用编号流程，而是直接从类型定义取出本序列化器，调用 `writer.WriteBool((bool)value)` 落盘 1 字节；加载时对称地 `reader.ReadBool()` 还原。你从不在业务代码里 `new BoolBasicTypeSerializer`——引擎在 `SaveableBasicTypeDefiner.DefineBasicTypes()` 里已经用 `AddBasicTypeDefinition(typeof(bool), 20, new BoolBasicTypeSerializer())` 把它登记好了，路由自动命中。

## 何时使用 / 何时不要使用

**不要使用（直接调用）：** 你不应在模组运行时手动 `new` 或调用 `BoolBasicTypeSerializer`——它内部是 `internal`，且生命周期由存档系统托管。给 `bool` 字段加 `[SaveableField]` 就足够了，引擎会自动走这里。

**何时实现自己的：** 只有当你要为某个**自定义值类型/枚举**提供基本类型级序列化（而非走对象图）时，才实现 `IBasicTypeSerializer` 接口，并在你的 `SaveableTypeDefiner` 子类的 `DefineBasicTypes()` 中通过 `AddBasicTypeDefinition(typeof(T), saveId, new MySerializer())` 登记。注意 `bool` 已被内置占用，不要再为它重复登记，否则 saveId 冲突会破坏存档布局。

## 依赖图

- 契约上游：[IBasicTypeSerializer](../IBasicTypeSerializer) 是它实现的接口，规定 `Serialize` / `Deserialize` / `GetSizeInBytes` 三方法。
- 选择方：[SaveManager](../SaveManager) 在保存时通过 [DefinitionContext](../DefinitionContext) 的 `GetBasicTypeDefinition(typeof(bool))` 取得本序列化器并调用。
- 实际写出：`Serialize` 调用 `IWriter.WriteBool`、`Deserialize` 调用 `IReader.ReadBool`；`IWriter` / `IReader` 是底层的字节流读写接口。
- 类型定义：[BasicTypeDefinition](../BasicTypeDefinition) 把 `bool`、saveId(20) 与本序列化器绑在一起。
- 注册入口：在 [SaveableTypeDefiner](../SaveableTypeDefiner) 子类的 `DefineBasicTypes()` 里登记（见 [SaveableBasicTypeDefiner](../SaveableBasicTypeDefiner)）。
- 架构总览：[存档系统架构](../../../architecture/save-system)。

## 风险

- **忘记登记自定义序列化器：** 若你为自己的类型实现了 `IBasicTypeSerializer` 却没在 `DefineBasicTypes()` 中 `AddBasicTypeDefinition`，引擎在 `GetBasicTypeDefinition` 查不到定义会抛异常或断言，导致保存/加载失败。
- **字节数与实际写出不一致：** 自定义序列化器必须保证 `Serialize` 写入的字节数 == `GetSizeInBytes()` 的返回值。本类固定 1 字节，若你照抄模板却改了写出逻辑，下游字段会错位、整段存档偏移损坏。
- **装箱类型不匹配：** `Serialize` 入口拿到的 `value` 是 `object`，内部直接 `(bool)value` 拆箱；若上游传入非 `bool` 的装箱值会抛 `InvalidCastException`（内置路径不会，但自定义路由要当心）。

## 成员说明

- `void IBasicTypeSerializer.Serialize(IWriter writer, object value)`：把 `value` 拆箱成 `bool` 后调用 `writer.WriteBool((bool)value)`，写出 1 字节。
- `object IBasicTypeSerializer.Deserialize(IReader reader)`：调用 `reader.ReadBool()` 读回 1 字节并作为 `object` 返回。
- `int IBasicTypeSerializer.GetSizeInBytes()`：返回固定值 `1`，表示 `bool` 在存档中占用的字节数。

## 示例

当 `SaveManager` 保存一份对象图、遇到 `bool` 字段时，底层 `VariableSaveData` 会取出本序列化器并把值写入 `IWriter`：

```csharp
// SaveManager 内部按字段类型查到 BoolBasicTypeSerializer，再调用其 Serialize：
BasicTypeDefinition def = _definitionContext.GetBasicTypeDefinition(typeof(bool));
def.Serializer.Serialize(writer, fieldValue);   // 实际执行 writer.WriteBool((bool)value)
```

若要为自定义枚举注册一个走基本类型快路径的序列化器，则应在你的 `SaveableTypeDefiner` 中这样登记：

```csharp
protected internal override void DefineBasicTypes()
{
    base.AddBasicTypeDefinition(typeof(MyFlagEnum), 100, new MyFlagEnumSerializer());
}
```

## 参见

- ↑ 父级：[存档系统 API 索引](../)
- ↔ 相关：[IBasicTypeSerializer](../IBasicTypeSerializer) · [BasicTypeDefinition](../BasicTypeDefinition) · [IntBasicTypeSerializer](../IntBasicTypeSerializer) · [SaveableTypeDefiner](../SaveableTypeDefiner) · [SaveManager](../SaveManager)
