---
title: "UshortBasicTypeSerializer"
description: "ushort 基本类型序列化器：把 16 位无符号整数字段以 2 字节写入存档流，由存档系统在遇到 ushort 类型的 [SaveableField] 时自动选择，模组无需手动调用。"
---

# UshortBasicTypeSerializer

**命名空间：** `TaleWorlds.SaveSystem.Definition`
**模块：** `TaleWorlds.SaveSystem`
**类型：** `internal class UshortBasicTypeSerializer : IBasicTypeSerializer`
**源文件：** `TaleWorlds.SaveSystem/Definition/UshortBasicTypeSerializer.cs`

## 概述

`UshortBasicTypeSerializer` 是存档系统为 CLR 基本类型 `ushort`（无符号 16 位整数）准备的内置序列化器。当 `[SaveableField]` / `[SaveableProperty]` 的静态类型是 `ushort` 时，引擎经 `DefinitionContext` 取出对应的 `BasicTypeDefinition`，由 `VariableSaveData` 在保存路径调用 `Serialize`、加载路径调用 `Deserialize`。它固定占 2 字节，与 `short` 并列；你不应手动 `new` 它，引擎已在 `SaveableBasicTypeDefiner` 中以 `AddBasicTypeDefinition(typeof(ushort), 4, ...)` 登记。

## 心智模型

把 `UshortBasicTypeSerializer` 想成存档系统为 `ushort` 这条「16 位无符号整数」挂的直达通道：`SaveManager` 遍历对象图、碰到 `ushort` 字段时，不走对象图/引用编号流程，而是直接从类型定义取出本序列化器，执行 `writer.WriteUShort((ushort)value)` 落盘 2 字节；加载时对称地 `reader.ReadUShort()` 还原。你从不在业务代码里 `new UshortBasicTypeSerializer`——它已在 `SaveableBasicTypeDefiner.DefineBasicTypes()` 登记，类型路由器自动命中。相比 `int` 它省一半体积，适合表示 `0..65535` 范围的计数/索引。

## 何时使用 / 何时不要使用

**不要使用（直接调用）：** 不要手动 `new` 或调用 `UshortBasicTypeSerializer`（它是 `internal`，由存档系统托管）。给 `ushort` 字段加 `[SaveableField]` 即可。

**何时实现自己的：** 仅为自定义值类型/枚举提供基本类型级序列化时实现 `IBasicTypeSerializer`，并在 `SaveableTypeDefiner` 子类的 `DefineBasicTypes()` 中用 `AddBasicTypeDefinition(typeof(T), saveId, new MySerializer())` 登记。`ushort` 已被内置占用，勿重复登记。

## 依赖图

- 契约上游：[IBasicTypeSerializer](../IBasicTypeSerializer) 规定 `Serialize` / `Deserialize` / `GetSizeInBytes` 三方法。
- 选择方：[SaveManager](../SaveManager) 经 [DefinitionContext](../DefinitionContext) 的 `GetBasicTypeDefinition(typeof(ushort))` 取得本序列化器。
- 实际写出：`Serialize` 调 `IWriter.WriteUShort`、`Deserialize` 调 `IReader.ReadUShort`；`IWriter` / `IReader` 是底层字节流接口。
- 类型定义：[BasicTypeDefinition](../BasicTypeDefinition) 把 `ushort`、saveId(4) 与本序列化器绑定。
- 注册入口：[SaveableTypeDefiner](../SaveableTypeDefiner) 子类的 `DefineBasicTypes()`（见 [SaveableBasicTypeDefiner](../SaveableBasicTypeDefiner)）。
- 架构总览：[存档系统架构](../../../architecture/save-system)。

## 风险

- **忘记登记：** 自定义 `IBasicTypeSerializer` 未在 `DefineBasicTypes()` 中 `AddBasicTypeDefinition`，`GetBasicTypeDefinition` 查不到会抛异常/断言，保存或加载失败。
- **字节数不一致：** `Serialize` 写入字节数必须等于 `GetSizeInBytes()`；本类固定 2 字节，自定义改写写出逻辑会造成下游字段错位、整档偏移损坏。
- **拆箱类型错误：** `Serialize` 内 `(ushort)value` 直接拆箱；上游传入非 `ushort` 装箱值会抛 `InvalidCastException`。
- **窄化截断：** 超出 `ushort` 范围（`0..65535`）的运行时值赋给 `ushort` 字段时，是 C# 字段类型层面的截断；序列化器忠实写 2 字节，但范围外数据在赋值阶段已丢失。

## 成员说明

- `void IBasicTypeSerializer.Serialize(IWriter writer, object value)`：拆箱成 `ushort` 后调用 `writer.WriteUShort((ushort)value)`，写 2 字节。
- `object IBasicTypeSerializer.Deserialize(IReader reader)`：调用 `reader.ReadUShort()` 读回 2 字节并以 `object` 返回。
- `int IBasicTypeSerializer.GetSizeInBytes()`：返回固定值 `2`。

## 示例

`SaveManager` 保存对象图遇到 `ushort` 字段时，底层 `VariableSaveData` 取出本序列化器写入 `IWriter`：

```csharp
// SaveManager 内部按字段类型查到 UshortBasicTypeSerializer，再调用其 Serialize：
BasicTypeDefinition def = _definitionContext.GetBasicTypeDefinition(typeof(ushort));
def.Serializer.Serialize(writer, fieldValue);   // 实际执行 writer.WriteUShort((ushort)value)
// 模组侧触发整套序列化；引擎内部会按字段类型选中本序列化器：
MetaData metaData = MetaData.CreateNew("MyMod", ApplicationVersion.FromString("e1.0.0"));
SaveManager.Save(Campaign.Current, metaData, saveName, driver); // 内部为每个 ushort 字段调用本 Serialize
```

## 参见

- ↑ 父级：[存档系统 API 索引](../)
- ↔ 相关：[IBasicTypeSerializer](../IBasicTypeSerializer) · [ShortBasicTypeSerializer](../ShortBasicTypeSerializer) · [UintBasicTypeSerializer](../UintBasicTypeSerializer) · [SaveableTypeDefiner](../SaveableTypeDefiner) · [SaveManager](../SaveManager)
