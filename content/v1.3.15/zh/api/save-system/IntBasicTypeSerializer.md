---
title: "IntBasicTypeSerializer"
description: "int 基本类型序列化器：把 32 位有符号整数字段以 4 字节写入存档流，是存档系统中最常用的键/枚举载体，由存档系统自动选择，模组无需手动调用。"
---

# IntBasicTypeSerializer

**命名空间：** `TaleWorlds.SaveSystem.Definition`
**模块：** `TaleWorlds.SaveSystem`
**类型：** `internal class IntBasicTypeSerializer : IBasicTypeSerializer`
**源文件：** `TaleWorlds.SaveSystem/Definition/IntBasicTypeSerializer.cs`

## 概述

`IntBasicTypeSerializer` 是存档系统为 CLR 基本类型 `int`（有符号 32 位整数）准备的内置序列化器，也是整型家族里最常用的一员——枚举字段底层常被存成 `int`，大量计数/索引/ID 都走它。当 `[SaveableField]` / `[SaveableProperty]` 的静态类型是 `int` 时，引擎经 `DefinitionContext` 取出对应的 `BasicTypeDefinition`，由 `VariableSaveData` 在保存路径调用 `Serialize`、加载路径调用 `Deserialize`。它固定占 4 字节；你不应手动 `new` 它，引擎已在 `SaveableBasicTypeDefiner` 中以 `AddBasicTypeDefinition(typeof(int), 1, ...)` 登记（saveId 1，整族中第一个）。

## 心智模型

把 `IntBasicTypeSerializer` 想成存档系统为 `int` 这条「默认整数」挂的直达通道：`SaveManager` 遍历对象图、碰到 `int` 字段（或枚举字段）时，不走对象图/引用编号流程，而是直接从类型定义取出本序列化器，执行 `writer.WriteInt((int)value)` 落盘 4 字节；加载时对称地 `reader.ReadInt()` 还原。你从不在业务代码里 `new IntBasicTypeSerializer`——它已在 `SaveableBasicTypeDefiner.DefineBasicTypes()` 登记，类型路由器自动命中。它和 `uint` 体积相同但语义不同；与 `long`(8 字节) 相比更省空间，但上限约 21 亿。

## 何时使用 / 何时不要使用

**不要使用（直接调用）：** 不要手动 `new` 或调用 `IntBasicTypeSerializer`（它是 `internal`，由存档系统托管）。给 `int` / 枚举字段加 `[SaveableField]` 即可，引擎自动走这里。

**何时实现自己的：** 仅为自定义值类型/枚举提供基本类型级序列化时实现 `IBasicTypeSerializer`，并在 `SaveableTypeDefiner` 子类的 `DefineBasicTypes()` 中用 `AddBasicTypeDefinition(typeof(T), saveId, new MySerializer())` 登记。`int` 已被内置占用，勿重复登记。

## 依赖图

- 契约上游：[IBasicTypeSerializer](../IBasicTypeSerializer) 规定 `Serialize` / `Deserialize` / `GetSizeInBytes` 三方法。
- 选择方：[SaveManager](../SaveManager) 经 [DefinitionContext](../DefinitionContext) 的 `GetBasicTypeDefinition(typeof(int))` 取得本序列化器。
- 实际写出：`Serialize` 调 `IWriter.WriteInt`、`Deserialize` 调 `IReader.ReadInt`；`IWriter` / `IReader` 是底层字节流接口。
- 类型定义：[BasicTypeDefinition](../BasicTypeDefinition) 把 `int`、saveId(1) 与本序列化器绑定。
- 注册入口：[SaveableTypeDefiner](../SaveableTypeDefiner) 子类的 `DefineBasicTypes()`（见 [SaveableBasicTypeDefiner](../SaveableBasicTypeDefiner)）。
- 架构总览：[存档系统架构](../../../architecture/save-system)。

## 风险

- **忘记登记：** 自定义 `IBasicTypeSerializer` 未在 `DefineBasicTypes()` 中 `AddBasicTypeDefinition`，`GetBasicTypeDefinition` 查不到会抛异常/断言，保存或加载失败。
- **字节数不一致：** `Serialize` 写入字节数必须等于 `GetSizeInBytes()`；本类固定 4 字节，自定义改写写出逻辑会造成下游字段错位、整档偏移损坏。
- **拆箱类型错误：** `Serialize` 内 `(int)value` 直接拆箱；上游传入非 `int` 装箱值（含枚举被当作其底层类型以外的值）会抛 `InvalidCastException`。
- **整数越界：** 超出 `int` 范围的运行时值赋给 `int` 字段是 C# 字段层面的截断；序列化器忠实写 4 字节，但越界数据在赋值阶段已丢失——需要更大范围时改用 `long`。

## 成员说明

- `void IBasicTypeSerializer.Serialize(IWriter writer, object value)`：拆箱成 `int` 后调用 `writer.WriteInt((int)value)`，写 4 字节。
- `object IBasicTypeSerializer.Deserialize(IReader reader)`：调用 `reader.ReadInt()` 读回 4 字节并以 `object` 返回。
- `int IBasicTypeSerializer.GetSizeInBytes()`：返回固定值 `4`。

## 示例

`SaveManager` 保存对象图遇到 `int` 字段（或枚举字段）时，底层 `VariableSaveData` 取出本序列化器写入 `IWriter`：

```csharp
// SaveManager 内部按字段类型查到 IntBasicTypeSerializer，再调用其 Serialize：
BasicTypeDefinition def = _definitionContext.GetBasicTypeDefinition(typeof(int));
def.Serializer.Serialize(writer, fieldValue);   // 实际执行 writer.WriteInt((int)value)
// 模组侧触发整套序列化；引擎内部会按字段类型选中本序列化器：
MetaData metaData = MetaData.CreateNew("MyMod", ApplicationVersion.FromString("e1.0.0"));
SaveManager.Save(Campaign.Current, metaData, saveName, driver); // 内部为每个 int 字段调用本 Serialize
```

## 参见

- ↑ 父级：[存档系统 API 索引](../)
- ↔ 相关：[IBasicTypeSerializer](../IBasicTypeSerializer) · [UintBasicTypeSerializer](../UintBasicTypeSerializer) · [LongBasicTypeSerializer](../LongBasicTypeSerializer) · [BasicTypeDefinition](../BasicTypeDefinition) · [SaveableTypeDefiner](../SaveableTypeDefiner) · [SaveManager](../SaveManager)
